import React, { useState } from 'react';
import { Map as MapIcon, BarChart2, Table } from 'lucide-react';
import GlobalMap from './GlobalMap';
import GlobalChart from './GlobalChart';
import GlobalTable from './GlobalTable';

interface GlobalDashboardProps {
  data: any; // We'll type this properly later
}

const GlobalDashboard: React.FC<GlobalDashboardProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<'chart' | 'map' | 'table'>('map');

  return (
    <div className="dashboard-container">
      <div className="tabs">
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

      <div className="tab-content">
        {activeTab === 'map' && <GlobalMap data={data} />}
        {activeTab === 'chart' && <GlobalChart data={data} />}
        {activeTab === 'table' && <GlobalTable data={data} />}
      </div>
    </div>
  );
};

export default GlobalDashboard;
