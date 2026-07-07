import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleSqrt, scaleLinear } from 'd3-scale';
import isoCountries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';
import { LineChart, Line, YAxis, ResponsiveContainer } from 'recharts';

isoCountries.registerLocale(en);

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface GlobalMapProps {
  data: any;
  year?: number;
  viewMode?: 'absolute' | 'percentage';
}

const GlobalMap: React.FC<GlobalMapProps> = ({ data, year = 2020, viewMode = 'absolute' }) => {
  const [hoveredCountry, setHoveredCountry] = useState<any>(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  
  // Use scaleSqrt for absolute pop to compress top end
  const colorScaleAbs = scaleSqrt<string>()
    .domain([0, 130000000]) // Max roughly Brazil
    .range(["#e0e7ff", "#1e3a8a"]); // Light blue to deep navy

  // Use linear scale for percentages
  const colorScalePct = scaleLinear<string>()
    .domain([0, 100])
    .range(["#fef2f2", "#991b1b"]); // Light red to deep dark red

  const handleMouseMove = (e: React.MouseEvent) => {
    if (hoveredCountry) {
      setHoverPosition({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <div className="map-container" style={{ width: '100%', position: 'relative' }} onMouseMove={handleMouseMove}>
      
      {/* OWID-style Rich Tooltip */}
      {hoveredCountry && hoveredCountry.point && (
        <div style={{
          position: 'fixed',
          top: hoverPosition.y + 15,
          left: hoverPosition.x + 15,
          backgroundColor: '#fff',
          padding: '12px',
          borderRadius: '4px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          pointerEvents: 'none',
          zIndex: 100,
          minWidth: '220px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#1a202c', marginBottom: '2px' }}>
            {hoveredCountry.d.name}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#718096', marginBottom: '8px' }}>
            {year}
          </div>
          
          <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#3182ce', marginBottom: '12px' }}>
            {viewMode === 'absolute' 
              ? new Intl.NumberFormat('en-US', { notation: 'compact', maximumSignificantDigits: 4 }).format(hoveredCountry.point.population)
              : `${hoveredCountry.point.percentage}%`}
          </div>

          <div style={{ height: '60px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={hoveredCountry.d.data}>
                <YAxis domain={['auto', 'auto']} hide />
                <Line 
                  type="monotone" 
                  dataKey={viewMode === 'absolute' ? 'population' : 'percentage'} 
                  stroke="#3182ce" 
                  strokeWidth={2} 
                  dot={false} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#a0aec0', marginTop: '4px' }}>
            <span>1960</span>
            <span>2022</span>
          </div>
        </div>
      )}

      {/* Map */}
      <div style={{ width: '100%', height: '500px', backgroundColor: '#f4f3ec', borderRadius: '8px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ComposableMap projectionConfig={{ scale: 140 }} width={800} height={450} style={{ width: "100%", height: "100%" }}>
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
                          setHoveredCountry({ d, point });
                        } else {
                          setHoveredCountry(null);
                        }
                      }}
                      onMouseLeave={() => {
                        setHoveredCountry(null);
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
        </ComposableMap>
      </div>

      {/* Legend */}
      <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.8rem', color: '#4a5568' }}>
        <span>Low</span>
        <div style={{ width: '200px', height: '12px', background: viewMode === 'absolute' ? 'linear-gradient(to right, #e0e7ff, #1e3a8a)' : 'linear-gradient(to right, #fef2f2, #991b1b)', borderRadius: '4px' }}></div>
        <span>High</span>
      </div>

    </div>
  );
};

export default GlobalMap;
