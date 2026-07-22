import React from 'react';
import { Link } from 'react-router-dom';
import UniversalDashboard from '../components/UniversalDashboard';
import GlobalMap from '../components/GlobalMap';
import DataTable from '../components/DataTable';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const PriestlessParishes: React.FC = () => {
  return (
    <div className="container">
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: 'bold' }}>
          &larr; Back to Home
        </Link>
      </div>
      
      <div className="header">
        <h1>The impact of priestless parishes</h1>
        <p>How the global shortage of priests, the consolidation of parishes, and the lack of resident pastors are affecting Catholic communities.</p>
      </div>

      <div className="article-content-body" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
        <p>
          In the decades since World War II, the Catholic Church has experienced a severe reduction in the number of priests per capita. 
          While the global Catholic population nearly doubled from 653 million in 1970 to over 1.2 billion in 2012, the total number of 
          priests worldwide actually declined—from 419,728 in 1970 to 407,872 in 2023.
        </p>
        <p>
          This demographic mismatch has caused the global ratio of Catholics per priest to jump from 1,895:1 in 1980 to 3,126:1 in 2012. 
          The most visible consequence for everyday Catholics is the rise of the "priestless parish."
        </p>

        <UniversalDashboard
          chartComponent={
            <div style={{ width: '100%', height: '400px', padding: '20px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { year: '1970', ratio: 1550, text: '1,550 : 1' },
                  { year: '1980', ratio: 1895, text: '1,895 : 1' },
                  { year: '2012', ratio: 3126, text: '3,126 : 1' }
                ]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip formatter={(value: any) => `${value} Catholics per Priest`} />
                  <Legend />
                  <Bar dataKey="ratio" fill="#2c5282" name="Catholics per Priest" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          }
          mapComponent={
            <GlobalMap
              data={{
                BRA: { name: 'Brazil (Rainforest)', data: [{ year: 2023, population: 25925 }] }, // 700k / 27
                PHL: { name: 'Philippines', data: [{ year: 2023, population: 8000 }] },
                USA: { name: 'United States', data: [{ year: 2023, population: 2000 }] },
                IRL: { name: 'Ireland', data: [{ year: 2023, population: 3500 }] }
              }}
              year={2023}
              viewMode="absolute"
            />
          }
          tableComponent={
            <DataTable
              columns={[
                { header: 'Region/Country', key: 'region' },
                { header: 'Catholics per Priest', key: 'ratio' },
                { header: 'Status', key: 'status' }
              ]}
              data={[
                { region: 'Brazil (Rainforest)', ratio: '25,925 : 1', status: 'Extreme Shortage' },
                { region: 'Philippines (Manila)', ratio: '20,000 : 1', status: 'Severe Shortage' },
                { region: 'Philippines (Average)', ratio: '8,000 : 1', status: 'Severe Shortage' },
                { region: 'United States', ratio: '2,000 : 1', status: 'Growing Shortage' }
              ]}
            />
          }
        />

        <h2 style={{ marginTop: '3rem', color: '#2c5282' }}>The Rise of Priestless Parishes</h2>
        <p>
          Globally, the number of parishes with no resident priest pastor grew from 39,431 in 1970 to <strong>49,153 in 2014</strong>. 
          In the United States, the crisis is particularly acute. In 1960, only about 3% of U.S. Catholic parishes had no resident pastor. 
          By the summer of 2003, that figure had risen to 16%. Between 1965 and 2012, the raw number of U.S. parishes without a priest 
          climbed dramatically from 549 to 3,496. 
        </p>
        <p>
          Simultaneously, the number of laypeople per priest in the U.S. climbed from 875:1 in 1981 to 2,000:1 by 2012 (a 130% increase).
        </p>

        <h2 style={{ marginTop: '3rem', color: '#2c5282' }}>A Global Phenomenon</h2>
        <p>
          While often viewed through a Western lens, the priest shortage is a truly global crisis affecting every continent:
        </p>
        <ul>
          <li><strong>Latin America:</strong> Home to over 40% of the world's Catholics, the region faces a worrying shortage. In some areas, such as Bishop Erwin Krautler's Brazilian rain forest diocese, there are only 27 priests for 700,000 Catholics, meaning many faithful only hear Mass a couple of times a year.</li>
          <li><strong>Europe:</strong> In Ireland, over 65% of priests are aged 55 or older, and rural dioceses are preparing for a future where seven priests may serve 22 widespread parishes. In Spain, some rural priests are responsible for up to a half-dozen (or even 22) parishes at a time.</li>
          <li><strong>Africa:</strong> Despite explosive growth in Catholic population (up 238% since 1980), the growth in priests (up 131%) is struggling to keep pace, forcing the church to rely heavily on catechists and lay missionaries.</li>
          <li><strong>Asia:</strong> In the Philippines, the ratio of priests to Catholics is roughly 1 to 8,000. In Manila, it stretches to 1 to 20,000.</li>
        </ul>

        <h2 style={{ marginTop: '3rem', color: '#2c5282' }}>Causes and Consequences</h2>
        <p>
          Sociologists and church leaders have identified several causes for the vocation shortage, including smaller family sizes changing parental expectations, the socio-economic shift where priesthood is no longer viewed as a pinnacle of financial success, the requirement of clerical celibacy, and the fallout from sexual abuse scandals.
        </p>
        <p>
          To cope with the shortage, dioceses have adopted a variety of strategies. "Linking" parishes—where two or more churches share a single pastor—has become common. The church has also seen a dramatic increase in the reliance on permanent deacons and lay ecclesial ministers to act as parish administrators. Finally, many Western nations have begun importing missionary priests from Africa and Asia to fill empty pulpits, reversing centuries of traditional missionary flow.
        </p>
      </div>
    </div>
  );
};

export default PriestlessParishes;
