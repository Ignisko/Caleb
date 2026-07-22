import React, { useState } from 'react';
import { Map as MapIcon, BarChart2, Table } from 'lucide-react';

interface UniversalDashboardProps {
  chartComponent?: React.ReactNode;
  mapComponent?: React.ReactNode;
  tableComponent?: React.ReactNode;
}

const UniversalDashboard: React.FC<UniversalDashboardProps> = ({ chartComponent, mapComponent, tableComponent }) => {
  const [activeTab, setActiveTab] = useState<'chart' | 'map' | 'table'>(
    chartComponent ? 'chart' : mapComponent ? 'map' : 'table'
  );

  return (
    <div className="dashboard-container" style={{ width: '100%', margin: '2rem 0', backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div className="tabs" style={{ marginBottom: 0 }}>
          {chartComponent && (
            <button 
              className={`tab-btn ${activeTab === 'chart' ? 'active' : ''}`}
              onClick={() => setActiveTab('chart')}
            >
              <BarChart2 size={16} /> Chart
            </button>
          )}
          {mapComponent && (
            <button 
              className={`tab-btn ${activeTab === 'map' ? 'active' : ''}`}
              onClick={() => setActiveTab('map')}
            >
              <MapIcon size={16} /> Map
            </button>
          )}
          {tableComponent && (
            <button 
              className={`tab-btn ${activeTab === 'table' ? 'active' : ''}`}
              onClick={() => setActiveTab('table')}
            >
              <Table size={16} /> Table
            </button>
          )}
        </div>
      </div>

      <div className="tab-content" style={{ minHeight: '400px' }}>
        {activeTab === 'chart' && chartComponent}
        {activeTab === 'map' && mapComponent}
        {activeTab === 'table' && tableComponent}
      </div>
    </div>
  );
};

export default UniversalDashboard;
