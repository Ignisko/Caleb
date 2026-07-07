import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ArticleCard from '../components/ArticleCard';
import { LineChart, Line, AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';
import { massAttendanceData } from '../data/massAttendance';
import { sacramentalData } from '../data/sacraments';

// Mock data for the US and Global mini-charts
const globalMiniData = [
  { year: 1980, pop: 783 },
  { year: 1990, pop: 928 },
  { year: 2000, pop: 1045 },
  { year: 2010, pop: 1195 },
  { year: 2020, pop: 1360 }
];

const usMiniData = [
  { year: 1965, priests: 58632 },
  { year: 1980, priests: 58500 },
  { year: 2002, priests: 45713 },
  { year: 2023, priests: 34299 }
];

const MiniAreaChart = ({ data, dataKey, color }: { data: any[], dataKey: string, color: string }) => (
  <div style={{ width: '100%', height: '100%', padding: '20px 0 0 0', backgroundColor: '#fcfcfc' }}>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <YAxis domain={['dataMin', 'dataMax']} hide />
        <Area type="monotone" dataKey={dataKey} stroke={color} fill={color} fillOpacity={0.2} strokeWidth={2} isAnimationActive={false} />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

const MiniLineChart = ({ data, lines }: { data: any[], lines: {key: string, color: string}[] }) => (
  <div style={{ width: '100%', height: '100%', padding: '20px 0 0 0', backgroundColor: '#fcfcfc' }}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <YAxis domain={['dataMin', 'dataMax']} hide />
        {lines.map((line, i) => (
          <Line key={i} type="monotone" dataKey={line.key} stroke={line.color} strokeWidth={2} dot={false} isAnimationActive={false} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="article-grid">
          <Link to="/global" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ArticleCard 
              title="Global Catholic population growth"
              category="Demographics"
              excerpt="Explore the demographic shifts of the Catholic Church around the world from 1980 to 2020 using our interactive map."
              preview={<MiniAreaChart data={globalMiniData} dataKey="pop" color="#2c5282" />}
            />
          </Link>
          <Link to="/us-indicators" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ArticleCard 
              title="Vocations & infrastructure in the US"
              category="US Indicators"
              excerpt="Data tracking vocations, ordinations, and parish infrastructure in the US from 1965 to 2023, based on the Catholic Indicators Index."
              preview={<MiniLineChart data={usMiniData} lines={[{key: 'priests', color: '#c53030'}]} />}
            />
          </Link>
          <div onClick={() => alert('Article coming soon!')}>
            <ArticleCard 
              title="The rise of Catholicism in Sub-Saharan Africa"
              category="Regional Trends"
              excerpt="An in-depth look at how the center of gravity in the Catholic Church is shifting rapidly toward the Global South."
            />
          </div>
          <Link to="/mass-attendance" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ArticleCard 
              title="Mass attendance post-Vatican II"
              category="Liturgical Life"
              excerpt="Tracking the trends in weekly Sunday Mass attendance across major Western nations over the last six decades."
              preview={<MiniLineChart data={massAttendanceData} lines={[{key: 'USA', color: '#2c5282'}, {key: 'France', color: '#c53030'}, {key: 'Ireland', color: '#276749'}]} />}
            />
          </Link>
          <div onClick={() => alert('Article coming soon!')}>
            <ArticleCard 
              title="The impact of priestless parishes"
              category="Infrastructure"
              excerpt="How the consolidation of parishes and the lack of resident pastors are affecting rural Catholic communities."
            />
          </div>
          <Link to="/sacramental-pipeline" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ArticleCard 
              title="The Sacramental Pipeline"
              category="Leading Indicators"
              excerpt="Tracking the direct correlation between Catholic marriages and infant baptisms over time to predict future growth."
              preview={<MiniLineChart data={sacramentalData} lines={[{key: 'marriages', color: '#c53030'}, {key: 'baptisms', color: '#2c5282'}]} />}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
