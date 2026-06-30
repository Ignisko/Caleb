import React from 'react';

interface GlobalTableProps {
  data: any;
}

const GlobalTable: React.FC<GlobalTableProps> = ({ data }) => {
  return (
    <div style={{ width: '100%', overflowX: 'auto', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead style={{ backgroundColor: '#f9f9f9', borderBottom: '2px solid #e5e5e5' }}>
          <tr>
            <th style={{ padding: '12px' }}>Country</th>
            <th style={{ padding: '12px' }}>1980 Population</th>
            <th style={{ padding: '12px' }}>2023 Population</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map(iso => {
            const country = data[iso];
            const pop1980 = country.data.find((d: any) => d.year === 1980)?.population || 'N/A';
            const pop2023 = country.data.find((d: any) => d.year === 2023)?.population || 'N/A';
            
            return (
              <tr key={iso} style={{ borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>{country.name}</td>
                <td style={{ padding: '12px' }}>
                  {typeof pop1980 === 'number' ? new Intl.NumberFormat('en-US').format(pop1980) : pop1980}
                </td>
                <td style={{ padding: '12px' }}>
                  {typeof pop2023 === 'number' ? new Intl.NumberFormat('en-US').format(pop2023) : pop2023}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GlobalTable;
