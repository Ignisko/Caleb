import React from 'react';
import { Link } from 'react-router-dom';
import GlobalDashboard from '../components/GlobalDashboard';

import globalCatholicData from '../data/globalCatholicData.json';

const GlobalDemographics: React.FC = () => {
  return (
    <div className="container">
      <Link to="/" style={{ textDecoration: 'none', color: '#2c5282', display: 'inline-block', marginBottom: '2rem', fontSize: '1rem', fontWeight: 'bold' }}>
        &larr; Back to Home
      </Link>
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
          <h2>Global Catholic population (1980 - 2020)</h2>
          <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1.5rem' }}>
            Sources: Annuarium Statisticum Ecclesiae, CARA, Pew Research Center. All figures are approximate baptized Catholic population.
          </p>
          <p>
            The Catholic Church has experienced a profound demographic shift over the last forty years. While the Church in Europe and North America has seen stagnant growth or decline, the Global South—specifically Africa, Latin America, and parts of Asia—has seen explosive expansion, fundamentally shifting the cultural and geographic center of gravity of the global Church.
          </p>
        </div>

        <GlobalDashboard data={globalCatholicData} />

        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '3rem' }}>
          <h2 style={{ color: '#2c5282' }}>The Shift to the Global South</h2>
          <p>
            In 1910, roughly 65% of all Catholics lived in Europe. By 2010, that number had plummeted to 24%. Conversely, the Catholic population in Sub-Saharan Africa grew from roughly 1% of the global Catholic population a century ago to over 20% today. 
          </p>
          <p>
            This southern shift brings new vitality to the Church, but it also presents immense pastoral challenges. Dioceses in the developing world often struggle with massive parishioner-to-priest ratios, lack of infrastructure, and extreme poverty. As the Church looks to the future, its leadership, theological focus, and resource allocation will increasingly need to reflect its new demographic reality in the Global South.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#777', marginTop: '2rem', borderTop: '1px solid #e5e5e5', paddingTop: '1rem' }}>
            <strong>Sources:</strong> Annuario Pontificio, Pew Research Center on Religion & Public Life.
          </p>
        </div>
      </section>
    </div>
  );
};

export default GlobalDemographics;


