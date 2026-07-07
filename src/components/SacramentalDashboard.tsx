import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { sacramentalLines } from '../data/sacraments';

interface SacramentalDashboardProps {
  data: any[];
}

const SacramentalDashboard: React.FC<SacramentalDashboardProps> = ({ data }) => {
  const [visibleLines, setVisibleLines] = useState<Record<string, boolean>>(
    sacramentalLines.reduce((acc, line) => {
      acc[line.key] = true;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const toggleLine = (key: string) => {
    setVisibleLines(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {sacramentalLines.map(line => (
          <button
            key={line.key}
            onClick={() => toggleLine(line.key)}
            style={{
              padding: '6px 12px',
              borderRadius: '20px',
              border: `1px solid ${line.color}`,
              backgroundColor: visibleLines[line.key] ? line.color : 'transparent',
              color: visibleLines[line.key] ? '#fff' : line.color,
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.2s ease'
            }}
          >
            {line.name}
          </button>
        ))}
      </div>
      <div style={{ width: '100%', height: '400px', padding: '20px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
            <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#555555' }} />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#555555' }}
              tickFormatter={(value) => (value >= 1000000 ? `${(value / 1000000).toFixed(1)}M` : `${value / 1000}k`)}
            />
            <Tooltip 
              formatter={(value: any) => new Intl.NumberFormat('en-US').format(value)}
              contentStyle={{ borderRadius: '8px', border: '1px solid #e5e5e5' }}
            />
            <Legend />
            {sacramentalLines.map(line => (
              visibleLines[line.key] && (
                <Line
                  key={line.key}
                  type="monotone"
                  dataKey={line.key}
                  name={line.name}
                  stroke={line.color}
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              )
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SacramentalDashboard;
