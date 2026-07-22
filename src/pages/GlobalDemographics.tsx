import React from 'react';
import { Link } from 'react-router-dom';
import UniversalDashboard from '../components/UniversalDashboard';
import GlobalMap from '../components/GlobalMap';
import GlobalChart from '../components/GlobalChart';
import DataTable from '../components/DataTable';
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

        <UniversalDashboard 
          chartComponent={<GlobalChart data={globalCatholicData} viewMode="absolute" />}
          mapComponent={<GlobalMap data={globalCatholicData} viewMode="absolute" />}
          tableComponent={
            <DataTable 
              columns={[
                { header: 'Country/Region', key: 'name' },
                { header: '1960 Population', key: 'pop1960', format: val => new Intl.NumberFormat('en-US').format(val) },
                { header: '2022 Population', key: 'pop2022', format: val => new Intl.NumberFormat('en-US').format(val) },
                { header: 'Absolute Change', key: 'absoluteChange', format: val => {
                  const num = val;
                  const sign = num > 0 ? '+' : '';
                  return `${sign}${new Intl.NumberFormat('en-US').format(num)}`;
                }},
                { header: 'Relative Change', key: 'relativeChange', format: val => {
                  const num = val;
                  if (num === 0) return 'N/A';
                  const sign = num > 0 ? '+' : '';
                  return `${sign}${num.toFixed(0)}%`;
                }}
              ]}
              data={Object.keys(globalCatholicData).map(iso => {
                const country = (globalCatholicData as any)[iso];
                const pop1960 = country.data.find((d: any) => d.year === 1960)?.population || 0;
                const pop2022 = country.data.find((d: any) => d.year === 2022)?.population || 0;
                const absoluteChange = pop2022 - pop1960;
                const relativeChange = pop1960 > 0 ? (absoluteChange / pop1960) * 100 : 0;
                return {
                  name: country.name,
                  pop1960,
                  pop2022,
                  absoluteChange,
                  relativeChange
                };
              }).sort((a, b) => b.pop2022 - a.pop2022)}
            />
          }
        />

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


