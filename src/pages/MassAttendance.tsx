import React from 'react';
import { Link } from 'react-router-dom';
import MassAttendanceDashboard from '../components/MassAttendanceDashboard';
import { massAttendanceData } from '../data/massAttendance';
import UniversalDashboard from '../components/UniversalDashboard';
import GlobalMap from '../components/GlobalMap';
import DataTable from '../components/DataTable';

const MassAttendance: React.FC = () => {
  return (
    <div className="container">
      <Link to="/" style={{ textDecoration: 'none', color: '#2c5282', display: 'inline-block', marginBottom: '2rem', fontSize: '1rem', fontWeight: 'bold' }}>
        &larr; Back to Home
      </Link>
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
          <h2>Mass attendance post-Vatican II (1950 - 2023)</h2>
          <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1.5rem' }}>
            Tracking the trends in weekly Sunday Mass attendance percentages across major Western nations.
          </p>
          <p>
            The decline in Catholic Mass attendance following the Second Vatican Council (1962–1965) is a well-documented phenomenon. A 2025 study by the National Bureau of Economic Research (NBER) analyzing religious service attendance in 66 countries found a "striking worldwide reduction in Catholic participation" between 1965 and 2010, totaling a cumulative 20 percentage points drop.
          </p>
        </div>

        <UniversalDashboard
          chartComponent={<MassAttendanceDashboard data={massAttendanceData} />}
          mapComponent={
            <GlobalMap
              data={{
                NGA: { name: 'Nigeria', data: [{ year: 2023, percentage: 94 }] },
                KEN: { name: 'Kenya', data: [{ year: 2023, percentage: 73 }] },
                LBN: { name: 'Lebanon', data: [{ year: 2023, percentage: 69 }] },
                PHL: { name: 'Philippines', data: [{ year: 2023, percentage: 56 }] },
                COL: { name: 'Colombia', data: [{ year: 2023, percentage: 54 }] },
                POL: { name: 'Poland', data: [{ year: 2023, percentage: 52 }] },
                MEX: { name: 'Mexico', data: [{ year: 2023, percentage: 47 }] },
                BRA: { name: 'Brazil', data: [{ year: 2023, percentage: 44 }] },
                ITA: { name: 'Italy', data: [{ year: 2023, percentage: 34 }] },
                USA: { name: 'United States', data: [{ year: 2023, percentage: 24 }] },
                CAN: { name: 'Canada', data: [{ year: 2023, percentage: 14 }] },
                DEU: { name: 'Germany', data: [{ year: 2023, percentage: 14 }] },
                FRA: { name: 'France', data: [{ year: 2023, percentage: 8 }] },
                NLD: { name: 'Netherlands', data: [{ year: 2023, percentage: 7 }] }
              }}
              year={2023}
              viewMode="percentage"
            />
          }
          tableComponent={
            <DataTable
              columns={[
                { header: 'Country', key: 'country' },
                { header: 'Weekly Mass Attendance', key: 'attendance', format: val => `${val}%` },
                { header: 'Category', key: 'category' }
              ]}
              data={[
                { country: 'Nigeria', attendance: 94, category: 'Highest' },
                { country: 'Kenya', attendance: 73, category: 'Highest' },
                { country: 'Philippines', attendance: 56, category: 'High' },
                { country: 'Poland', attendance: 52, category: 'High' },
                { country: 'Mexico', attendance: 47, category: 'Medium' },
                { country: 'Brazil', attendance: 44, category: 'Medium' },
                { country: 'Italy', attendance: 34, category: 'Low' },
                { country: 'United States', attendance: 24, category: 'Low' },
                { country: 'Canada', attendance: 14, category: 'Lowest' },
                { country: 'France', attendance: 8, category: 'Lowest' }
              ]}
            />
          }
        />

        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '3rem' }}>
          <h2 style={{ color: '#2c5282' }}>Understanding the Global Divide</h2>
          <p>
            Recent data from the Center for Applied Research in the Apostolate (CARA) analyzing the World Values Survey reveals a stark geographic divide. Mass attendance is exceptionally high in the developing world (e.g., Nigeria at 94%, Kenya at 73%), while it has cratered in Europe and other developed nations (e.g., Netherlands at 7%, France at 8%).
          </p>
          <p>
            In the late 1950s, weekly Mass attendance among U.S. Catholics was reported to be as high as 75%. Today, data from the Center for Applied Research in the Apostolate (CARA) consistently shows that younger generations attend Mass at significantly lower rates. One study highlighted a sharp drop among those raised Catholic, from 34% attendance in 1973 to just 11% in 2022.
          </p>
          <p>
            Theorists debate the exact causes. The "Event" theory suggests Vatican II acted as a specific trigger that disrupted institutional loyalty. Other scholars argue the decline is tied to broader cultural shifts, increased secularization, and "generational replacement"—where older, more frequent attendees pass away and are replaced by younger cohorts with different habits.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#777', marginTop: '2rem', borderTop: '1px solid #e5e5e5', paddingTop: '1rem' }}>
            <strong>Sources:</strong> NBER, Center for Applied Research in the Apostolate (CARA), Pew Research Center.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MassAttendance;
