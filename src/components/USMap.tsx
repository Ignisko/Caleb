import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

interface USMapProps {
  data: any[]; // Array of objects with state names and values
  dataKey: string;
  labelKey?: string;
  markers?: { name: string; coordinates: [number, number]; value: number }[];
}

const USMap: React.FC<USMapProps> = ({ data, dataKey, labelKey = 'state', markers = [] }) => {
  const [hoveredState, setHoveredState] = useState<any>(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  // Calculate domain
  const values = data.map(d => d[dataKey]).filter(v => v !== undefined);
  const maxVal = Math.max(...values, 1);
  
  const colorScale = scaleLinear<string>()
    .domain([0, maxVal])
    .range(["#e0e7ff", "#1e3a8a"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (hoveredState) {
      setHoverPosition({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <div className="map-container" style={{ width: '100%', position: 'relative' }} onMouseMove={handleMouseMove}>
      
      {/* Tooltip */}
      {hoveredState && (
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
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#1a202c', marginBottom: '4px' }}>
            {hoveredState.name}
          </div>
          <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#3182ce' }}>
            {hoveredState.value !== undefined ? hoveredState.value.toLocaleString() : 'No data'}
          </div>
        </div>
      )}

      {/* Map */}
      <div style={{ width: '100%', height: '500px', backgroundColor: '#f4f3ec', borderRadius: '8px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ComposableMap projection="geoAlbersUsa" style={{ width: "100%", height: "100%" }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const stateName = geo.properties.name;
                const stateData = data.find(d => d[labelKey] === stateName);
                const value = stateData ? stateData[dataKey] : undefined;
                const fill = value !== undefined ? colorScale(value) : "#EAEAEA";

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={fill}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    onMouseEnter={() => setHoveredState({ name: stateName, value })}
                    onMouseLeave={() => setHoveredState(null)}
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

          {/* Render markers for dioceses if provided */}
          {markers.map(({ name, coordinates, value }, i) => (
             <Marker key={i} coordinates={coordinates}>
               <circle r={value > 40 ? 8 : 4} fill="#F56565" stroke="#fff" strokeWidth={2} />
               <text
                 textAnchor="middle"
                 y={-12}
                 style={{ fontFamily: "system-ui", fill: "#2D3748", fontSize: '0.65rem', fontWeight: 600 }}
               >
                 {name}
               </text>
             </Marker>
          ))}

        </ComposableMap>
      </div>
    </div>
  );
};

export default USMap;
