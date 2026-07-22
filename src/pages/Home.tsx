import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ArticleCard from '../components/ArticleCard';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, ResponsiveContainer, YAxis } from 'recharts';
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

// Sub-Saharan Africa Catholic population growth (millions)
const africaMiniData = [
  { year: 1965, catholics: 29 },
  { year: 1975, catholics: 55 },
  { year: 1985, catholics: 88 },
  { year: 1995, catholics: 130 },
  { year: 2005, catholics: 176 },
  { year: 2015, catholics: 230 },
  { year: 2023, catholics: 281 }
];

// Priestless parishes in the US
const priestlessMiniData = [
  { year: 1965, parishes: 549 },
  { year: 1975, parishes: 702 },
  { year: 1985, parishes: 1051 },
  { year: 1995, parishes: 2200 },
  { year: 2005, parishes: 3000 },
  { year: 2015, parishes: 3400 },
  { year: 2023, parishes: 3500 }
];

const MiniAreaChart = ({ data, dataKey, color }: { data: any[], dataKey: string, color: string }) => (
  <div style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
        <YAxis domain={['dataMin', 'dataMax']} hide />
        <Area type="monotone" dataKey={dataKey} stroke={color} fill={color} fillOpacity={0.15} strokeWidth={2.5} isAnimationActive={false} />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

const MiniLineChart = ({ data, lines }: { data: any[], lines: {key: string, color: string}[] }) => (
  <div style={{ width: '100%', height: '100%', backgroundColor: 'transparent', padding: '10px 10px 0 10px' }}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
        <YAxis domain={['dataMin', 'dataMax']} hide />
        {lines.map((line, i) => (
          <Line key={i} type="monotone" dataKey={line.key} stroke={line.color} strokeWidth={2.5} dot={{ r: 2.5, fill: line.color, strokeWidth: 0 }} activeDot={false} isAnimationActive={false} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const MiniBarChart = ({ data, bars }: { data: any[], bars: {key: string, color: string}[] }) => (
  <div style={{ width: '100%', height: '100%', backgroundColor: 'transparent', padding: '10px' }}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }} barCategoryGap="20%">
        <YAxis domain={['dataMin', 'dataMax']} hide />
        {bars.map((bar, i) => (
          <Bar key={i} dataKey={bar.key} fill={bar.color} radius={[2, 2, 0, 0]} isAnimationActive={false} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const articles = [
    {
      to: '/global',
      title: "Global Catholic population growth",
      category: "Demographics",
      filterGroup: "Explorers",
      excerpt: "Explore the demographic shifts of the Catholic Church around the world from 1980 to 2020 using our interactive map.",
      preview: <MiniAreaChart data={globalMiniData} dataKey="pop" color="#2c5282" />
    },
    {
      to: '/us-indicators',
      title: "Vocations & infrastructure in the US",
      category: "US Indicators",
      filterGroup: "Indicators",
      excerpt: "Data tracking vocations, ordinations, and parish infrastructure in the US from 1965 to 2023, based on the Catholic Indicators Index.",
      preview: <MiniLineChart data={usMiniData} lines={[{key: 'priests', color: '#c53030'}]} />
    },
    {
      to: '/africa-trends',
      title: "The rise of Catholicism in Sub-Saharan Africa",
      category: "Regional Trends",
      filterGroup: "Topics",
      excerpt: "An in-depth look at how the center of gravity in the Catholic Church is shifting rapidly toward the Global South.",
      preview: <MiniAreaChart data={africaMiniData} dataKey="catholics" color="#b7791f" />
    },
    {
      to: '/mass-attendance',
      title: "Mass attendance post-Vatican II",
      category: "Liturgical Life",
      filterGroup: "Topics",
      excerpt: "Tracking the trends in weekly Sunday Mass attendance across major Western nations over the last six decades.",
      preview: <MiniLineChart data={massAttendanceData} lines={[{key: 'USA', color: '#2c5282'}, {key: 'France', color: '#c53030'}, {key: 'Ireland', color: '#276749'}]} />
    },
    {
      to: '/priestless-parishes',
      title: "The impact of priestless parishes",
      category: "Infrastructure",
      filterGroup: "Topics",
      excerpt: "How the consolidation of parishes and the lack of resident pastors are affecting rural Catholic communities.",
      preview: <MiniAreaChart data={priestlessMiniData} dataKey="parishes" color="#dd6b20" />
    },
    {
      to: '/sacramental-pipeline',
      title: "The Sacramental Pipeline",
      category: "Leading Indicators",
      filterGroup: "Indicators",
      excerpt: "Tracking the direct correlation between Catholic marriages and infant baptisms over time to predict future growth.",
      preview: <MiniBarChart data={sacramentalData} bars={[{key: 'marriages', color: '#c53030'}, {key: 'baptisms', color: '#2c5282'}]} />
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = activeFilter ? article.filterGroup === activeFilter : true;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Hero 
        setSearchQuery={setSearchQuery} 
        setActiveFilter={setActiveFilter} 
        activeFilter={activeFilter} 
      />
      <div className="container">
        {filteredArticles.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#718096' }}>
            <h2>No articles found</h2>
            <p>Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="article-grid">
            {filteredArticles.map((article, idx) => (
              <Link key={idx} to={article.to} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ArticleCard 
                  title={article.title}
                  category={article.category}
                  excerpt={article.excerpt}
                  preview={article.preview}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
