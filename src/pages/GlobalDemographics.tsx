import React from 'react';
import { Link } from 'react-router-dom';
import GlobalDashboard from '../components/GlobalDashboard';

// Global Data
const globalCatholicData = {
  "BRA": { name: "Brazil", data: [ { year: 1980, population: 109000000 }, { year: 2020, population: 123000000 } ] },
  "MEX": { name: "Mexico", data: [ { year: 1980, population: 63500000 }, { year: 2020, population: 97864218 } ] },
  "PHL": { name: "Philippines", data: [ { year: 1980, population: 39300000 }, { year: 2020, population: 85645362 } ] },
  "USA": { name: "United States", data: [ { year: 1980, population: 47502152 }, { year: 2020, population: 72000000 } ] },
  "ITA": { name: "Italy", data: [ { year: 1980, population: 56000000 }, { year: 2020, population: 57000000 } ] }
};

const GlobalDemographics: React.FC = () => {
  return (
    <div className="container">
      <Link to="/" style={{ textDecoration: 'none', color: '#2c5282', display: 'inline-block', marginBottom: '2rem', fontSize: '1rem', fontWeight: 'bold' }}>
        &larr; Back to Home
      </Link>
      <section style={{ marginBottom: '4rem' }}>
        <h2>Global Catholic population growth (1980 - 2020)</h2>
        <GlobalDashboard data={globalCatholicData} />
      </section>
    </div>
  );
};

export default GlobalDemographics;
