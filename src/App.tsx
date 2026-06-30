import { useState } from 'react';
import './index.css';
import GlobalDashboard from './components/GlobalDashboard';
import IndicatorChart from './components/IndicatorChart';
import Hero from './components/Hero';
import ArticleCard from './components/ArticleCard';

// Global Data (Proof of Concept)
const globalCatholicData = {
  "BRA": { name: "Brazil", data: [ { year: 1980, population: 109000000 }, { year: 2020, population: 123000000 } ] },
  "MEX": { name: "Mexico", data: [ { year: 1980, population: 63500000 }, { year: 2020, population: 97864218 } ] },
  "PHL": { name: "Philippines", data: [ { year: 1980, population: 39300000 }, { year: 2020, population: 85645362 } ] },
  "USA": { name: "United States", data: [ { year: 1980, population: 47502152 }, { year: 2020, population: 72000000 } ] },
  "ITA": { name: "Italy", data: [ { year: 1980, population: 56000000 }, { year: 2020, population: 57000000 } ] }
};

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

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'global' | 'us'>('home');

  if (currentView === 'global') {
    return (
      <div className="container">
        <button onClick={() => setCurrentView('home')} style={{ background: 'none', border: 'none', color: '#2c5282', cursor: 'pointer', marginBottom: '2rem', fontSize: '1rem', fontWeight: 'bold' }}>&larr; Back to Home</button>
        <section style={{ marginBottom: '4rem' }}>
          <h2>Global Catholic Population (1980 - 2020)</h2>
          <GlobalDashboard data={globalCatholicData} />
        </section>
      </div>
    );
  }

  if (currentView === 'us') {
    return (
      <div className="container">
        <button onClick={() => setCurrentView('home')} style={{ background: 'none', border: 'none', color: '#2c5282', cursor: 'pointer', marginBottom: '2rem', fontSize: '1rem', fontWeight: 'bold' }}>&larr; Back to Home</button>
        <section style={{ marginBottom: '4rem' }}>
          <h2>United States Historical Indicators (1965 - 2023)</h2>
          <p style={{ fontSize: '0.95rem', color: '#555' }}>
            Data tracking vocations, ordinations, and parish infrastructure in the US, inspired by Kenneth C. Jones.
          </p>
          <div style={{ width: '100%', height: '400px', padding: '20px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
            <IndicatorChart data={usHistoricalData} lines={usLines} />
          </div>
        </section>
      </div>
    );
  }

  // Home View
  return (
    <>
      <header style={{ padding: '10px 20px', borderBottom: '1px solid #e5e5e5', fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'Playfair Display, serif' }}>
        CALEB <span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#555', marginLeft: '10px', fontFamily: 'Lato, sans-serif' }}>| Catholic Atlas of Longitudinal Ecclesiology & Benchmarks</span>
      </header>
      <Hero />
      <div className="container">
        <div className="article-grid">
          <ArticleCard 
            title="Global Catholic Population Growth"
            category="Demographics"
            author="Data Research Team"
            date="June 2026"
            excerpt="Explore the demographic shifts of the Catholic Church around the world from 1980 to 2020 using our interactive map."
            onClick={() => setCurrentView('global')}
          />
          <ArticleCard 
            title="Vocations & Infrastructure in the US"
            category="US Indicators"
            author="Data Research Team"
            date="Historical Data"
            excerpt="Data tracking vocations, ordinations, and parish infrastructure in the US from 1965 to 2023, based on the Catholic Indicators Index."
            onClick={() => setCurrentView('us')}
          />
          <ArticleCard 
            title="The Rise of Catholicism in Sub-Saharan Africa"
            category="Regional Trends"
            author="Demographics Team"
            date="June 2026"
            excerpt="An in-depth look at how the center of gravity in the Catholic Church is shifting rapidly toward the Global South."
            onClick={() => alert('Article coming soon!')}
          />
          <ArticleCard 
            title="Mass Attendance Post-Vatican II"
            category="Liturgical Life"
            author="Historical Analytics"
            date="May 2026"
            excerpt="Tracking the trends in weekly Sunday Mass attendance across major Western nations over the last six decades."
            onClick={() => alert('Article coming soon!')}
          />
          <ArticleCard 
            title="The Impact of Priestless Parishes"
            category="Infrastructure"
            author="Pastoral Research"
            date="April 2026"
            excerpt="How the consolidation of parishes and the lack of resident pastors are affecting rural Catholic communities."
            onClick={() => alert('Article coming soon!')}
          />
          <ArticleCard 
            title="Catholic Education Enrollment Trends"
            category="Education"
            author="Global Data"
            date="March 2026"
            excerpt="A comprehensive dataset tracking the number of students enrolled in Catholic primary and secondary schools globally."
            onClick={() => alert('Article coming soon!')}
          />
        </div>
      </div>
    </>
  );
}

export default App;
