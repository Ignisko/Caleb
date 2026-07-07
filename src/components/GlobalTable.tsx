import React, { useState } from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';

interface GlobalTableProps {
  data: any;
}

const GlobalTable: React.FC<GlobalTableProps> = ({ data }) => {
  const [sortConfig, setSortConfig] = useState<{ key: string, direction: 'asc' | 'desc' }>({ key: 'pop2022', direction: 'desc' });

  // Process data for the table
  const tableData = Object.keys(data).map(iso => {
    const country = data[iso];
    const pop1960 = country.data.find((d: any) => d.year === 1960)?.population || 0;
    const pop2022 = country.data.find((d: any) => d.year === 2022)?.population || 0;
    const absoluteChange = pop2022 - pop1960;
    const relativeChange = pop1960 > 0 ? (absoluteChange / pop1960) * 100 : 0;

    return {
      iso,
      name: country.name,
      pop1960,
      pop2022,
      absoluteChange,
      relativeChange,
      chartData: country.data
    };
  });

  // Sort data
  tableData.sort((a: any, b: any) => {
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'desc';
    if (sortConfig.key === key && sortConfig.direction === 'desc') direction = 'asc';
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: string) => {
    if (sortConfig.key !== key) return <span style={{ color: '#cbd5e0', marginLeft: '4px' }}>↕</span>;
    return <span style={{ color: '#4a5568', marginLeft: '4px' }}>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>;
  };

  const formatNumber = (num: number) => {
    if (num === 0) return 'N/A';
    return new Intl.NumberFormat('en-US').format(num);
  };

  const formatChange = (num: number, isPercent = false) => {
    if (num === 0) return 'N/A';
    const sign = num > 0 ? '+' : '';
    const formatted = isPercent 
      ? `${sign}${num.toFixed(0)}%`
      : `${sign}${new Intl.NumberFormat('en-US').format(num)}`;
    return formatted;
  };

  return (
    <div style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#fff' }}>
      <div style={{ padding: '16px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: '1rem', color: '#1a202c' }}>Catholic Population (1960 - 2022)</h3>
        <div style={{ fontSize: '0.8rem', color: '#718096' }}>Filter by: All ({tableData.length})</div>
      </div>
      
      <div style={{ overflowX: 'auto', maxHeight: '500px', overflowY: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right', fontSize: '0.85rem' }}>
          <thead style={{ position: 'sticky', top: 0, backgroundColor: '#f7fafc', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', zIndex: 10 }}>
            <tr>
              <th style={{ padding: '12px', textAlign: 'left', cursor: 'pointer', color: '#4a5568' }} onClick={() => requestSort('name')}>
                Country or region {getSortIcon('name')}
              </th>
              <th style={{ padding: '12px', cursor: 'pointer', color: '#4a5568' }} onClick={() => requestSort('pop1960')}>
                1960 {getSortIcon('pop1960')}
              </th>
              <th style={{ padding: '12px', cursor: 'pointer', color: '#4a5568' }} onClick={() => requestSort('pop2022')}>
                2022 {getSortIcon('pop2022')}
              </th>
              <th style={{ padding: '12px', textAlign: 'center', color: '#4a5568', width: '100px' }}>
                1960-2022
              </th>
              <th style={{ padding: '12px', cursor: 'pointer', color: '#4a5568' }} onClick={() => requestSort('absoluteChange')}>
                Absolute Change {getSortIcon('absoluteChange')}
              </th>
              <th style={{ padding: '12px', cursor: 'pointer', color: '#4a5568' }} onClick={() => requestSort('relativeChange')}>
                Relative Change {getSortIcon('relativeChange')}
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={row.iso} style={{ 
                borderBottom: '1px solid #e2e8f0', 
                backgroundColor: idx % 2 === 0 ? '#ffffff' : '#fafafa',
                transition: 'background-color 0.15s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f4f8'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = idx % 2 === 0 ? '#ffffff' : '#fafafa'}
              >
                <td style={{ padding: '12px', textAlign: 'left', fontWeight: 600, color: '#2d3748' }}>{row.name}</td>
                <td style={{ padding: '12px', color: '#4a5568' }}>{formatNumber(row.pop1960)}</td>
                <td style={{ padding: '12px', color: '#4a5568' }}>{formatNumber(row.pop2022)}</td>
                <td style={{ padding: '12px', width: '100px', height: '40px' }}>
                  {row.chartData && row.chartData.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={row.chartData}>
                        <YAxis domain={['auto', 'auto']} hide />
                        <Line type="monotone" dataKey="population" stroke="#3182ce" strokeWidth={1.5} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  ) : null}
                </td>
                <td style={{ padding: '12px', color: row.absoluteChange > 0 ? '#38a169' : '#e53e3e' }}>
                  {formatChange(row.absoluteChange)}
                </td>
                <td style={{ padding: '12px', color: row.relativeChange > 0 ? '#38a169' : '#e53e3e' }}>
                  {formatChange(row.relativeChange, true)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GlobalTable;
