import React from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { scaleSqrt } from 'd3-scale';
import isoCountries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';

isoCountries.registerLocale(en);

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface GlobalMapProps {
  data: any;
  year?: number;
}

const GlobalMap: React.FC<GlobalMapProps> = ({ data, year = 2020 }) => {
  // Use scaleSqrt to better distribute colors between highly populated (100M+) and low populated (10k) countries
  const colorScale = scaleSqrt<string>()
    .domain([0, 130000000]) // Max roughly Brazil
    .range(["#e0e7ff", "#1e3a8a"]); // Light blue to deep navy

  return (
    <div className="map-container" style={{ width: '100%', height: '400px', backgroundColor: '#f4f3ec', borderRadius: '8px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ComposableMap projectionConfig={{ scale: 130 }} width={800} height={400} style={{ width: "100%", height: "100%" }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                // Map the TopoJSON numeric ID to ISO-Alpha3
                const numericCode = geo.id;
                let iso3 = null;
                if (numericCode) {
                  // Pad start with 0 in case it was cast to int somewhere, though usually it's a 3 char string
                  iso3 = isoCountries.numericToAlpha3(String(numericCode).padStart(3, '0'));
                }
                
                // Fallback to name if numeric mapping fails
                const d = (iso3 ? data[iso3] : null) || Object.values(data).find((c: any) => c.name === geo.properties?.name);
                
                const point = d?.data?.find((item: any) => item.year === year);
                const pop = point ? point.population : null;
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={pop ? colorScale(pop) : "#EAEAEA"}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#c53030", outline: "none", cursor: "pointer" },
                      pressed: { fill: "#9b2c2c", outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default GlobalMap;
