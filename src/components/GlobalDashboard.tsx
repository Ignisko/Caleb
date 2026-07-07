import React, { useState } from 'react';
import { Map as MapIcon, BarChart2, Table } from 'lucide-react';
import GlobalMap from './GlobalMap';
import GlobalChart from './GlobalChart';
import GlobalTable from './GlobalTable';

interface GlobalDashboardProps {
  data: any; 
}

const GlobalDashboard: React.FC<GlobalDashboardProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<'chart' | 'map' | 'table'>('chart');
  const [viewMode, setViewMode] = useState<'absolute' | 'percentage'>('absolute');

  return (
    <div className="dashboard-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div className="tabs" style={{ marginBottom: 0 }}>
          <button 
            className={`tab-btn ${activeTab === 'chart' ? 'active' : ''}`}
            onClick={() => setActiveTab('chart')}
          >
            <BarChart2 size={16} /> Chart
          </button>
          <button 
            className={`tab-btn ${activeTab === 'map' ? 'active' : ''}`}
            onClick={() => setActiveTab('map')}
          >
            <MapIcon size={16} /> Map
          </button>
          <button 
            className={`tab-btn ${activeTab === 'table' ? 'active' : ''}`}
            onClick={() => setActiveTab('table')}
          >
            <Table size={16} /> Table
          </button>
        </div>

        {/* View Mode Toggle */}
        <div style={{ display: 'flex', backgroundColor: '#e2e8f0', borderRadius: '9999px', padding: '4px' }}>
          <button
            onClick={() => setViewMode('absolute')}
            style={{
              padding: '6px 16px',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer',
              backgroundColor: viewMode === 'absolute' ? '#ffffff' : 'transparent',
              color: viewMode === 'absolute' ? '#1e293b' : '#64748b',
              boxShadow: viewMode === 'absolute' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            Real Numbers
          </button>
          <button
            onClick={() => setViewMode('percentage')}
            style={{
              padding: '6px 16px',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer',
              backgroundColor: viewMode === 'percentage' ? '#ffffff' : 'transparent',
              color: viewMode === 'percentage' ? '#1e293b' : '#64748b',
              boxShadow: viewMode === 'percentage' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            Percentage
          </button>
        </div>
      </div>

      <div className="tab-content">
        {activeTab === 'map' && <GlobalMap data={data} viewMode={viewMode} />}
        {activeTab === 'chart' && <GlobalChart data={data} viewMode={viewMode} />}
        {activeTab === 'table' && <GlobalTable data={data} />}
      </div>
    </div>
  );
};

export default GlobalDashboard;
