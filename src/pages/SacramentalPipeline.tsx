import React from 'react';
import { Link } from 'react-router-dom';
import SacramentalDashboard from '../components/SacramentalDashboard';
import { sacramentalData } from '../data/sacraments';

const SacramentalPipeline: React.FC = () => {
  return (
    <div className="container">
      <Link to="/" style={{ textDecoration: 'none', color: '#2c5282', display: 'inline-block', marginBottom: '2rem', fontSize: '1rem', fontWeight: 'bold' }}>
        &larr; Back to Home
      </Link>
      <section style={{ marginBottom: '4rem' }}>
        <h2>The Sacramental Pipeline (1960 - 2023)</h2>
        <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1.5rem' }}>
          Tracking the direct correlation between Catholic marriages and infant baptisms. Catholic marriages are the leading indicator for future Church growth.
        </p>
        <SacramentalDashboard data={sacramentalData} />
      </section>
    </div>
  );
};

export default SacramentalPipeline;
