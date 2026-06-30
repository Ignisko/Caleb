import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface GlobalChartProps {
  data: any;
}

const GlobalChart: React.FC<GlobalChartProps> = ({ data }) => {
  // Transform dict to array for Recharts
  // E.g. { year: 1980, BRA: 120000, USA: 50000 }
  const years = [1980, 2020]; 
  
  const chartData = years.map(year => {
    const point: any = { year };
    Object.keys(data).forEach(iso => {
      const yearData = data[iso].data.find((d: any) => d.year === year);
      if (yearData) {
        point[iso] = yearData.population;
      }
    });
    return point;
  });

  const colors = ["#2c5282", "#c53030", "#276749", "#dd6b20", "#805ad5"];

  return (
    <div style={{ width: '100%', height: '400px', padding: '20px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
          <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#555555' }} />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#555555' }}
            tickFormatter={(value) => new Intl.NumberFormat('en-US', { notation: "compact" }).format(value)}
          />
          <Tooltip 
            formatter={(value: any) => new Intl.NumberFormat('en-US').format(value)}
            contentStyle={{ borderRadius: '8px', border: '1px solid #e5e5e5' }}
          />
          <Legend />
          {Object.keys(data).map((iso, index) => (
            <Line
              key={iso}
              type="monotone"
              dataKey={iso}
              name={data[iso].name}
              stroke={colors[index % colors.length]}
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GlobalChart;
