import React from 'react';

interface DataTableProps {
  columns: { header: string; key: string; format?: (val: any) => string | React.ReactNode }[];
  data: any[];
}

const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  return (
    <div style={{ width: '100%', overflowX: 'auto', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#f7fafc', borderBottom: '2px solid #e2e8f0' }}>
            {columns.map((col, idx) => (
              <th key={idx} style={{ padding: '12px 16px', fontWeight: 600, color: '#4a5568', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={rowIdx} style={{ borderBottom: '1px solid #e2e8f0', transition: 'background-color 0.2s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#fbfcfd'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
              {columns.map((col, colIdx) => (
                <td key={colIdx} style={{ padding: '16px', color: '#2d3748', fontSize: '0.95rem' }}>
                  {col.format ? col.format(row[col.key]) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
