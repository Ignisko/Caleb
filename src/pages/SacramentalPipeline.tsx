import React from 'react';
import { Link } from 'react-router-dom';
import SacramentalDashboard from '../components/SacramentalDashboard';
import { sacramentalData } from '../data/sacraments';
import UniversalDashboard from '../components/UniversalDashboard';
import USMap from '../components/USMap';
import DataTable from '../components/DataTable';

const SacramentalPipeline: React.FC = () => {
  return (
    <div className="container">
      <Link to="/" style={{ textDecoration: 'none', color: '#2c5282', display: 'inline-block', marginBottom: '2rem', fontSize: '1rem', fontWeight: 'bold' }}>
        &larr; Back to Home
      </Link>
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
          <h2>The Sacramental Pipeline (1960 - 2023)</h2>
          <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1.5rem' }}>
            Tracking the direct correlation between Catholic marriages and infant baptisms. Catholic marriages are the leading indicator for future Church growth.
          </p>
          <p>
            The "sacramental pipeline"—the rate at which Catholics engage in the fundamental rites of passage like baptism, first communion, confirmation, and marriage—is a critical leading indicator of the Church's future vitality. According to the Center for Applied Research in the Apostolate (CARA), the U.S. Church has experienced significant, sustained declines in the celebration of these major sacraments.
          </p>
        </div>

        <UniversalDashboard
          chartComponent={<SacramentalDashboard data={sacramentalData} />}
          mapComponent={
            <USMap 
              data={[
                { state: 'New York', decline: 65 },
                { state: 'California', decline: 45 },
                { state: 'Texas', decline: 25 },
                { state: 'Florida', decline: 30 },
                { state: 'Illinois', decline: 55 },
                { state: 'Pennsylvania', decline: 60 },
                { state: 'Massachusetts', decline: 70 }
              ]} 
              dataKey="decline" 
            />
          }
          tableComponent={
            <DataTable
              columns={[
                { header: 'State', key: 'state' },
                { header: 'Baptisms (1970)', key: 'b1970' },
                { header: 'Baptisms (2020)', key: 'b2020' },
                { header: 'Decline (%)', key: 'decline', format: val => `${val}%` }
              ]}
              data={[
                { state: 'New York', b1970: '125,000', b2020: '43,750', decline: 65 },
                { state: 'Massachusetts', b1970: '55,000', b2020: '16,500', decline: 70 },
                { state: 'Pennsylvania', b1970: '98,000', b2020: '39,200', decline: 60 },
                { state: 'Illinois', b1970: '85,000', b2020: '38,250', decline: 55 },
                { state: 'California', b1970: '110,000', b2020: '60,500', decline: 45 },
                { state: 'Texas', b1970: '75,000', b2020: '56,250', decline: 25 }
              ]}
            />
          }
        />

        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '3rem' }}>
          <h2 style={{ color: '#2c5282' }}>The Pipeline Disconnect</h2>
          <p>
            Over the 50-year period between 1970 and 2020, researchers noted substantial drops in both infant baptisms and sacramental marriages. A marked decrease in Catholic marriages directly precedes a decrease in infant baptisms, as these two sacraments are intimately linked in the lifecycle of Catholic families.
          </p>
          <p>
            CARA’s analysis emphasizes that while the overall absolute number of Catholics in the U.S. has remained relatively steady or grown slightly (often driven by immigration), this masks a severe decline in the <em>rate</em> of sacramental participation per 1,000 Catholics. 
          </p>
          <p>
            Several factors contribute to these trends, including delayed marriage, a decline in religious identification among younger generations, and the fact that sacramental engagement is strongly correlated with Mass attendance—which has also seen a steep drop.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#777', marginTop: '2rem', borderTop: '1px solid #e5e5e5', paddingTop: '1rem' }}>
            <strong>Sources:</strong> Center for Applied Research in the Apostolate (CARA), The Official Catholic Directory. (State-level data represents aggregated diocesan estimates based on OCD reporting).
          </p>
        </div>
      </section>
    </div>
  );
};

export default SacramentalPipeline;
