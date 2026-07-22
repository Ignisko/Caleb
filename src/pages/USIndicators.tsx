import React from 'react';
import { Link } from 'react-router-dom';
import IndicatorChart from '../components/IndicatorChart';
import UniversalDashboard from '../components/UniversalDashboard';
import USMap from '../components/USMap';
import DataTable from '../components/DataTable';

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
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
          <h2>Diocesan Priestly Vocations in the U.S. (2025/2026)</h2>
          <p style={{ fontSize: '0.95rem', color: '#555' }}>
            Data tracking vocations and seminarians across US dioceses, based on the 2025 Official Catholic Directory.
          </p>
          <p>
            According to the 2025 edition of The Official Catholic Directory, there are currently <strong>3,035 diocesan seminarians</strong> preparing for priestly ordination in the Latin-rite dioceses of the United States—an increase of nearly 2% over the previous year.
          </p>
        </div>

        <UniversalDashboard 
          chartComponent={
            <div style={{ width: '100%', height: '400px' }}>
              <IndicatorChart data={usHistoricalData} lines={usLines} />
            </div>
          }
          mapComponent={
            <USMap 
              data={[]} 
              dataKey="value" 
              markers={[
                { name: 'Lincoln, NE (1:2,007)', coordinates: [-96.7026, 40.8136], value: 100 },
                { name: 'Rapid City, SD (1:2,332)', coordinates: [-103.2310, 44.0805], value: 90 },
                { name: 'Wichita, KS (1:2,590)', coordinates: [-97.3301, 37.6872], value: 85 },
                { name: 'Duluth, MN (1:3,522)', coordinates: [-92.1005, 46.7867], value: 80 }
              ]} 
            />
          }
          tableComponent={
            <DataTable 
              columns={[
                { header: 'Diocese', key: 'diocese' },
                { header: 'Seminarians', key: 'seminarians' },
                { header: 'Catholics', key: 'catholics' },
                { header: 'Ratio', key: 'ratio' }
              ]}
              data={[
                { diocese: 'Lincoln, NE', seminarians: 37, catholics: '74,259', ratio: '1 : 2,007' },
                { diocese: 'Rapid City, SD', seminarians: 10, catholics: '23,320', ratio: '1 : 2,332' },
                { diocese: 'Wichita, KS', seminarians: 44, catholics: '113,960', ratio: '1 : 2,590' },
                { diocese: 'Duluth, MN', seminarians: 15, catholics: '52,830', ratio: '1 : 3,522' },
                { diocese: 'Rockville Centre, NY', seminarians: 8, catholics: '1,549,032', ratio: '1 : 193,629' },
                { diocese: 'Los Angeles, CA', seminarians: 46, catholics: '3,793,298', ratio: '1 : 82,463' }
              ]}
            />
          }
        />

        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '3rem' }}>
          <h2 style={{ color: '#2c5282' }}>Highs and Lows Across the Country</h2>
          <p>
            The distribution of these seminarians is highly unequal. Out of 175 dioceses, 22 have 40 or more seminarians. The dioceses with the highest absolute numbers include Philadelphia (71), St. Paul and Minneapolis (64), New York (63), and Boston (62). Conversely, 31 dioceses have five or fewer seminarians, with Altoona-Johnstown and Fairbanks reporting zero.
          </p>
          
          <h3 style={{ marginTop: '2rem', color: '#1a365d' }}>Vocation-Rich Dioceses: The Rich Get Richer</h3>
          <p>
            When adjusting for Catholic population size, the data reveals distinct "vocation powerhouses." The median US diocese (Youngstown, OH) attracts one seminarian for every 14,671 Catholics. However, several dioceses vastly outperform this median:
          </p>
          <ul>
            <li><strong>Lincoln, NE:</strong> 1 seminarian per 2,007 Catholics (highest in the nation)</li>
            <li><strong>Rapid City, SD:</strong> 1 per 2,332 Catholics</li>
            <li><strong>Wichita, KS:</strong> 1 per 2,590 Catholics</li>
            <li><strong>Duluth, MN:</strong> 1 per 3,522 Catholics</li>
          </ul>
          <p>
            Vocation directors in these flourishing dioceses attribute their success to a combination of strong local Catholic culture, heavy investment in youth faith formation (e.g., Steubenville conferences), the implementation of a dedicated "propaedeutic year" to detox from the world, and most importantly, intentional prayer.
          </p>

          <h3 style={{ marginTop: '2rem', color: '#1a365d' }}>The Challenge for Mega-Dioceses</h3>
          <p>
            In general, the larger a diocese is, the stronger the current it must swim against to attract vocations. Currently, 51 of the nation’s dioceses attract fewer than one seminarian for every 30,000 Catholics. Among these are major metropolitan sees like Chicago (1 per 69,500), Los Angeles (1 per 82,463), and Rockville Centre (1 per 193,629). 
          </p>

          <p style={{ fontSize: '0.9rem', color: '#777', marginTop: '2rem', borderTop: '1px solid #e5e5e5', paddingTop: '1rem' }}>
            <strong>Sources:</strong> Catholic World Report (J.J. Ziegler), The Official Catholic Directory (2025).
          </p>
        </div>
      </section>
    </div>
  );
};

export default USIndicators;
