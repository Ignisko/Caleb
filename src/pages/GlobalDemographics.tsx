import React from 'react';
import { Link } from 'react-router-dom';
import GlobalDashboard from '../components/GlobalDashboard';

import globalCatholicData from '../data/globalCatholicData';

const GlobalDemographics: React.FC = () => {
  return (
    <div className="container">
      <Link to="/" style={{ textDecoration: 'none', color: '#2c5282', display: 'inline-block', marginBottom: '2rem', fontSize: '1rem', fontWeight: 'bold' }}>
        &larr; Back to Home
      </Link>
      <section style={{ marginBottom: '4rem' }}>
        <h2>Global Catholic population (1980 - 2020)</h2>
        <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '1.5rem' }}>
          Sources: Annuarium Statisticum Ecclesiae, CARA, Pew Research Center. All figures are approximate baptized Catholic population.
        </p>
        <GlobalDashboard data={globalCatholicData} />
      </section>
    </div>
  );
};

export default GlobalDemographics;

