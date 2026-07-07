import React from 'react';
import { Link } from 'react-router-dom';
import IndicatorChart from '../components/IndicatorChart';

// US Historical Data (Kenneth C. Jones)
const usHistoricalData = [
  { year: 1965, priests: 58632, ordinations: 994, parishesWithoutPastor: 549, sisters: 179954, seminarians: 48992 },
  { year: 2002, priests: 45713, ordinations: 470, parishesWithoutPastor: 2928, sisters: 75021, seminarians: 4719 },
  { year: 2023, priests: 34299, ordinations: 414, parishesWithoutPastor: 3500, sisters: 39452, seminarians: 2759 }
];

const usLines = [
  { key: 'priests', name: 'Total Priests', color: '#2c5282' },
  { key: 'ordinations', name: 'Ordinations', color: '#c53030' },
  { key: 'parishesWithoutPastor', name: 'Priestless Parishes', color: '#dd6b20' },
  { key: 'sisters', name: 'Religious Sisters', color: '#805ad5' },
  { key: 'seminarians', name: 'Seminarians', color: '#276749' }
];

const USIndicators: React.FC = () => {
  return (
    <div className="container">
      <Link to="/" style={{ textDecoration: 'none', color: '#2c5282', display: 'inline-block', marginBottom: '2rem', fontSize: '1rem', fontWeight: 'bold' }}>
        &larr; Back to Home
      </Link>
      <section style={{ marginBottom: '4rem' }}>
        <h2>Vocations & infrastructure in the US (1965 - 2023)</h2>
        <p style={{ fontSize: '0.95rem', color: '#555' }}>
          Data tracking vocations, ordinations, and parish infrastructure in the US, inspired by Kenneth C. Jones.
        </p>
        <div style={{ width: '100%', height: '400px', padding: '20px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
          <IndicatorChart data={usHistoricalData} lines={usLines} />
        </div>
      </section>
    </div>
  );
};

export default USIndicators;
