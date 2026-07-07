import React from 'react';
import { Link } from 'react-router-dom';
import MassAttendanceDashboard from '../components/MassAttendanceDashboard';
import { massAttendanceData } from '../data/massAttendance';

const MassAttendance: React.FC = () => {
  return (
    <div className="container">
      <Link to="/" style={{ textDecoration: 'none', color: '#2c5282', display: 'inline-block', marginBottom: '2rem', fontSize: '1rem', fontWeight: 'bold' }}>
        &larr; Back to Home
      </Link>
      <section style={{ marginBottom: '4rem' }}>
        <h2>Mass attendance post-Vatican II (1950 - 2023)</h2>
        <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1.5rem' }}>
          Tracking the trends in weekly Sunday Mass attendance percentages across major Western nations.
        </p>
        <MassAttendanceDashboard data={massAttendanceData} />
      </section>
    </div>
  );
};

export default MassAttendance;
