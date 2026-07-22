import React from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { africaData } from '../data/africaData';
import UniversalDashboard from '../components/UniversalDashboard';
import GlobalMap from '../components/GlobalMap';
import DataTable from '../components/DataTable';

const AfricaTrends: React.FC = () => {
  return (
    <div className="container">
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: 'bold' }}>
          &larr; Back to Home
        </Link>
      </div>
      
      <div className="header">
        <h1>The rise of Catholicism in Sub-Saharan Africa</h1>
        <p>An in-depth look at how the center of gravity in the Catholic Church is shifting rapidly toward the Global South.</p>
      </div>

      <div className="article-content-body" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
        <p>
          While Catholicism’s growth has stagnated or regressed in the Global North, it has surged in the Global South. 
          Nowhere is this more evident than in Africa, where the religion is growing so quickly that it is shifting Catholicism’s 
          epicenter and will play a significant role in shaping the church's future.
        </p>

        <h2 style={{ marginTop: '3rem', color: '#2c5282' }}>Explosive Demographic Growth</h2>
        <p>
          Today, <strong>20% of the world’s 1.42 billion Catholics are African</strong>. Just a century ago, that figure was 1%. 
          According to the latest data from the <i>Annuario Pontificio 2026</i>, the Catholic population in Africa rose from 
          281 million in 2023 to over 288 million in 2024. This represents a growth rate of 2.7%—nearly five times that of Asia 
          and significantly outpacing the continent’s general demographic growth.
        </p>
        <p>
          In the past decade alone, Catholicism has grown by more than 30% in Africa. Africa’s Catholic population has now 
          surpassed Europe’s and trails only Latin America. If current trends continue, Africa could account for 
          <strong> half of all Catholics worldwide by the 2060s</strong>.
        </p>

        <UniversalDashboard
          chartComponent={
            <div style={{ width: '100%', height: '400px', backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #e5e5e5' }}>
              <h3 style={{ marginTop: 0, marginBottom: '2rem', fontFamily: 'var(--font-serif)', color: '#111' }}>
                Catholic Population in Sub-Saharan Africa (Millions)
              </h3>
              <ResponsiveContainer width="100%" height="80%">
                <AreaChart data={africaData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#718096' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#718096' }} dx={-10} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                    formatter={(value: number) => [`${value} million`, 'Catholics']}
                  />
                  <Area type="monotone" dataKey="catholics" stroke="#b7791f" fill="#b7791f" fillOpacity={0.2} strokeWidth={3} activeDot={{ r: 6 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          }
          mapComponent={
            <GlobalMap
              data={{
                NGA: { name: 'Nigeria', data: [{ year: 2024, population: 31000000 }] },
                COD: { name: 'DR Congo', data: [{ year: 2024, population: 52000000 }] },
                AGO: { name: 'Angola', data: [{ year: 2024, population: 20000000 }] },
                KEN: { name: 'Kenya', data: [{ year: 2024, population: 15000000 }] },
                UGA: { name: 'Uganda', data: [{ year: 2024, population: 19000000 }] }
              }}
              year={2024}
              viewMode="absolute"
            />
          }
          tableComponent={
            <DataTable
              columns={[
                { header: 'Country', key: 'country' },
                { header: 'Catholic Population', key: 'population', format: val => val.toLocaleString() },
                { header: '% of Total Pop', key: 'percentage', format: val => `${val}%` }
              ]}
              data={[
                { country: 'DR Congo', population: 52000000, percentage: 50 },
                { country: 'Nigeria', population: 31000000, percentage: 14 },
                { country: 'Angola', population: 20000000, percentage: 55 },
                { country: 'Uganda', population: 19000000, percentage: 40 },
                { country: 'Kenya', population: 15000000, percentage: 33 }
              ]}
            />
          }
        />

        <h2 style={{ marginTop: '3rem', color: '#2c5282' }}>A Surge in Vocations</h2>
        <p>
          As the number of priests declines in much of the world, Africa has emerged as the Catholic Church’s primary source of vocations. 
          It is currently the <strong>only region in the world where the number of men studying for the priesthood is increasing</strong> (up 2.25% recently). 
          The ratio of candidates to priests is the highest globally, at nearly 629 per 1,000 priests, compared to just 120 in North America.
        </p>
        <p>
          Other pastoral roles are also seeing significant growth on the continent:
        </p>
        <ul>
          <li><strong>Permanent Deacons:</strong> Increased by 7.0%, totaling 8,860.</li>
          <li><strong>Women Religious:</strong> Grew by 2.6% (against global declines).</li>
          <li><strong>Lay Missionaries:</strong> Experienced a 7.0% increase.</li>
        </ul>

        <h2 style={{ marginTop: '3rem', color: '#2c5282' }}>Challenges and Underrepresentation</h2>
        <p>
          Despite this rapid expansion, Africa still lacks full equality in the church's hierarchy. 
          The continent has the lowest number of Bishops per parishioner in the world. As of 2024, there are 
          <strong> 365,000 Catholics per bishop in Africa</strong>, compared to 170,000 in Europe and 88,000 in Oceania.
        </p>
        <p>
          Furthermore, Africa remains underrepresented at the Vatican, where just 12% of Cardinals under the age of 80—the electors 
          who select the pope—are African. However, with increased representation seen as inevitable, many observers believe that the 
          election of an African pope is highly plausible in the near future.
        </p>
      </div>
    </div>
  );
};

export default AfricaTrends;
