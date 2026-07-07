import React, { useState, useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { Search } from 'lucide-react';

interface GlobalChartProps {
  data: any;
  viewMode?: 'absolute' | 'percentage';
}

const GlobalChart: React.FC<GlobalChartProps> = ({ data, viewMode = 'absolute' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'alphabetical' | 'population'>('alphabetical');
  // Default selected countries (Top 5 populated Catholic countries)
  const [selectedCountries, setSelectedCountries] = useState<string[]>(['BRA', 'MEX', 'PHL', 'USA', 'ITA']);

  // Generate years from 1960 to 2022
  const years = useMemo(() => Array.from({ length: 2022 - 1960 + 1 }, (_, i) => 1960 + i), []);
  
  const chartData = useMemo(() => {
    return years.map(year => {
      const point: any = { year };
      selectedCountries.forEach(iso => {
        const yearData = data[iso]?.data?.find((d: any) => d.year === year);
        if (yearData) {
          point[iso] = viewMode === 'absolute' ? yearData.population : yearData.percentage;
        }
      });
      return point;
    });
  }, [data, selectedCountries, viewMode, years]);

  const colors = [
    "#2c5282", "#c53030", "#276749", "#dd6b20", "#805ad5", 
    "#319795", "#d69e2e", "#e53e3e", "#3182ce", "#38a169"
  ];

  const handleToggleCountry = (iso: string) => {
    if (selectedCountries.includes(iso)) {
      setSelectedCountries(selectedCountries.filter(c => c !== iso));
    } else {
      setSelectedCountries([...selectedCountries, iso]);
    }
  };

  const filteredCountries = Object.keys(data).filter(iso => 
    data[iso].name.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    const aSelected = selectedCountries.includes(a);
    const bSelected = selectedCountries.includes(b);
    
    // Selected countries always float to the top
    if (aSelected && !bSelected) return -1;
    if (!aSelected && bSelected) return 1;
    
    // Sort the rest by criteria
    if (sortBy === 'alphabetical') {
      return data[a].name.localeCompare(data[b].name);
    } else {
      const popA = data[a].data.find((d: any) => d.year === 2020)?.population || 0;
      const popB = data[b].data.find((d: any) => d.year === 2020)?.population || 0;
      return popB - popA; // Descending
    }
  });

  return (
    <div style={{ display: 'flex', gap: '20px', height: '500px' }}>
      
      {/* Sidebar for Country Selection */}
      <div style={{ 
        width: '250px', 
        border: '1px solid #e5e5e5', 
        borderRadius: '8px', 
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: '#fff'
      }}>
        <div style={{ padding: '12px', borderBottom: '1px solid #e5e5e5' }}>
          <div style={{ position: 'relative', marginBottom: '8px' }}>
            <Search size={16} style={{ position: 'absolute', left: '8px', top: '8px', color: '#a0aec0' }} />
            <input 
              type="text" 
              placeholder="Type to add a country..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '6px 8px 6px 30px', 
                borderRadius: '4px', 
                border: '1px solid #cbd5e0',
                fontSize: '0.85rem'
              }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.8rem', color: '#718096' }}>Sort by</span>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value as any)}
              style={{ 
                fontSize: '0.8rem', 
                padding: '2px 4px', 
                border: '1px solid #e2e8f0', 
                borderRadius: '4px',
                color: '#4a5568',
                backgroundColor: '#f7fafc',
                cursor: 'pointer'
              }}
            >
              <option value="alphabetical">A to Z</option>
              <option value="population">Population</option>
            </select>
          </div>
        </div>
        
        <div style={{ overflowY: 'auto', flex: 1, padding: '4px 0' }}>
          {filteredCountries.map(iso => {
            const isSelected = selectedCountries.includes(iso);
            return (
              <label 
                key={iso} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  padding: '6px 12px', 
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  color: isSelected ? '#1a202c' : '#4a5568',
                  backgroundColor: isSelected ? '#f0f4f8' : 'transparent',
                  borderBottom: '1px solid #f7fafc',
                  transition: 'background-color 0.15s'
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) e.currentTarget.style.backgroundColor = '#f7fafc';
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <input 
                  type="checkbox" 
                  checked={isSelected}
                  onChange={() => handleToggleCountry(iso)}
                  style={{ 
                    marginRight: '10px',
                    accentColor: '#3182ce' // Uses native OS styling for the blue checkbox
                  }}
                />
                <span style={{ fontWeight: isSelected ? 600 : 400 }}>
                  {data[iso].name}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Main Chart Area */}
      <div style={{ flex: 1, padding: '20px', border: '1px solid #e5e5e5', borderRadius: '8px', backgroundColor: '#fff', position: 'relative' }}>
        
        {/* Custom Legend at Top Right */}
        <div style={{ position: 'absolute', top: '10px', right: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px', maxWidth: '400px', justifyContent: 'flex-end' }}>
          {selectedCountries.map((iso, idx) => (
             <div key={iso} style={{ display: 'flex', alignItems: 'center', fontSize: '0.8rem', color: '#4a5568' }}>
               <div style={{ width: '12px', height: '12px', backgroundColor: colors[idx % colors.length], marginRight: '4px', borderRadius: '2px' }} />
               {data[iso]?.name}
             </div>
          ))}
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 40, right: 10, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
            <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#555555' }} />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#555555' }}
              domain={viewMode === 'percentage' ? [0, 100] : ['auto', 'auto']}
              tickFormatter={(value) => {
                if (viewMode === 'percentage') return `${value}%`;
                return new Intl.NumberFormat('en-US', { notation: "compact" }).format(value);
              }}
            />
            <Tooltip 
              formatter={(value: any, name: string, props: any) => {
                const countryName = data[props.dataKey]?.name || name;
                if (viewMode === 'percentage') return [`${value}%`, countryName];
                return [new Intl.NumberFormat('en-US').format(value), countryName];
              }}
              contentStyle={{ borderRadius: '8px', border: '1px solid #e5e5e5' }}
            />
            {selectedCountries.map((iso, index) => (
              <Line
                key={iso}
                type="monotone"
                dataKey={iso}
                name={data[iso]?.name}
                stroke={colors[index % colors.length]}
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GlobalChart;
