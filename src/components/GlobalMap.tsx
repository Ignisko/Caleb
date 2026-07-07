import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { scaleSqrt, scaleLinear } from 'd3-scale';
import isoCountries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';

isoCountries.registerLocale(en);

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface GlobalMapProps {
  data: any;
  year?: number;
  viewMode?: 'absolute' | 'percentage';
}

const GlobalMap: React.FC<GlobalMapProps> = ({ data, year = 2020, viewMode = 'absolute' }) => {
  const [tooltipContent, setTooltipContent] = useState('');
  
  // Use scaleSqrt for absolute pop to compress top end
  const colorScaleAbs = scaleSqrt<string>()
    .domain([0, 130000000]) // Max roughly Brazil
    .range(["#e0e7ff", "#1e3a8a"]); // Light blue to deep navy

  // Use linear scale for percentages
  const colorScalePct = scaleLinear<string>()
    .domain([0, 100])
    .range(["#fef2f2", "#991b1b"]); // Light red to deep dark red

  return (
    <div className="map-container" style={{ width: '100%', position: 'relative' }}>
      
      {tooltipContent && (
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '8px 12px',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          pointerEvents: 'none',
          zIndex: 10,
          fontWeight: 'bold',
          color: '#2d3748'
        }}>
          {tooltipContent}
        </div>
      )}

      <div style={{ width: '100%', height: '500px', backgroundColor: '#f4f3ec', borderRadius: '8px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ComposableMap projectionConfig={{ scale: 140 }} width={800} height={450} style={{ width: "100%", height: "100%" }}>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const numericCode = geo.id;
                  let iso3 = null;
                  if (numericCode) {
                    iso3 = isoCountries.numericToAlpha3(String(numericCode).padStart(3, '0'));
                  }
                  
                  const d = (iso3 ? data[iso3] : null) || Object.values(data).find((c: any) => c.name === geo.properties?.name);
                  
                  const point = d?.data?.find((item: any) => item.year === year);
                  
                  let fill = "#EAEAEA";
                  if (point) {
                    if (viewMode === 'absolute' && point.population) {
                      fill = colorScaleAbs(point.population);
                    } else if (viewMode === 'percentage' && point.percentage !== undefined) {
                      fill = colorScalePct(point.percentage);
                    }
                  }
                  
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={fill}
                      stroke="#FFFFFF"
                      strokeWidth={0.5}
                      onMouseEnter={() => {
                        if (d && point) {
                          const val = viewMode === 'absolute' 
                            ? new Intl.NumberFormat('en-US').format(point.population)
                            : `${point.percentage}%`;
                          setTooltipContent(`${d.name}: ${val}`);
                        } else {
                          setTooltipContent(`${geo.properties?.name}: No data`);
                        }
                      }}
                      onMouseLeave={() => {
                        setTooltipContent('');
                      }}
                      style={{
                        default: { outline: "none", transition: 'all 250ms' },
                        hover: { fill: "#f6e05e", outline: "none", cursor: "pointer", transition: 'all 250ms' },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
};

export default GlobalMap;
