import React from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface GlobalMapProps {
  data: any;
  year?: number;
}

const GlobalMap: React.FC<GlobalMapProps> = ({ data, year = 2020 }) => {
  const colorScale = scaleLinear<string>()
    .domain([0, 100000000])
    .range(["#e0e7ff", "#4338ca"]);

  return (
    <div className="map-container" style={{ width: '100%', height: '400px', backgroundColor: '#f4f3ec', borderRadius: '8px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ComposableMap projectionConfig={{ scale: 130 }} width={800} height={400} style={{ width: "100%", height: "100%" }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d = data[geo.id] || Object.values(data).find((c: any) => c.name === geo.properties?.name);
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
