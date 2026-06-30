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

interface LineConfig {
  key: string;
  name: string;
  color: string;
}

interface IndicatorChartProps {
  data: any[];
  lines: LineConfig[];
}

const IndicatorChart: React.FC<IndicatorChartProps> = ({ data, lines }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
        <XAxis 
          dataKey="year" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#555555', fontSize: 12, fontFamily: 'Lato, sans-serif' }} 
          dy={10}
        />
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#555555', fontSize: 12, fontFamily: 'Lato, sans-serif' }}
          tickFormatter={(value) => new Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short" }).format(value)}
          dx={-10}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#ffffff', 
            borderRadius: '4px', 
            border: '1px solid #e5e5e5',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Lato, sans-serif',
            fontSize: '14px'
          }}
          formatter={(value: any) => new Intl.NumberFormat('en-US').format(value)}
          labelStyle={{ fontWeight: 'bold', color: '#111111', marginBottom: '4px' }}
        />
        <Legend 
          wrapperStyle={{ paddingTop: '20px', fontFamily: 'Lato, sans-serif', fontSize: '13px' }}
          iconType="circle"
        />
        {lines.map((line) => (
          <Line
            key={line.key}
            type="monotone"
            dataKey={line.key}
            name={line.name}
            stroke={line.color}
            strokeWidth={3}
            dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default IndicatorChart;
