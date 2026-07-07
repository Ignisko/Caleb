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
  // Default selected countries (Top 5 populated Catholic countries)
  const [selectedCountries, setSelectedCountries] = useState<string[]>(['BRA', 'MEX', 'PHL', 'USA', 'ITA']);

  const years = [1980, 2000, 2020]; 
  
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
  }, [data, selectedCountries, viewMode]);

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
  );

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
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '8px', top: '8px', color: '#a0aec0' }} />
            <input 
              type="text" 
              placeholder="Search country..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '6px 8px 6px 30px', 
                borderRadius: '4px', 
                border: '1px solid #cbd5e0',
                fontSize: '0.9rem'
              }}
            />
          </div>
        </div>
        <div style={{ overflowY: 'auto', flex: 1, padding: '10px' }}>
          {filteredCountries.map(iso => (
            <label 
              key={iso} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '6px 0', 
                cursor: 'pointer',
                fontSize: '0.9rem',
                color: '#4a5568'
              }}
            >
              <input 
                type="checkbox" 
                checked={selectedCountries.includes(iso)}
                onChange={() => handleToggleCountry(iso)}
                style={{ marginRight: '8px' }}
              />
              {data[iso].name}
            </label>
          ))}
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
