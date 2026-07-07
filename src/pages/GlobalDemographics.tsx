import React from 'react';
import { Link } from 'react-router-dom';
import GlobalDashboard from '../components/GlobalDashboard';

// Sources: Annuarium Statisticum Ecclesiae, CARA, Pew Research Center
// All figures are approximate baptized Catholic population
const globalCatholicData = {
  // Latin America
  "BRA": { name: "Brazil",         data: [ { year: 1980, population: 109000000 }, { year: 2000, population: 149000000 }, { year: 2020, population: 123000000 } ] },
  "MEX": { name: "Mexico",         data: [ { year: 1980, population: 63500000  }, { year: 2000, population: 88000000  }, { year: 2020, population: 97864218  } ] },
  "COL": { name: "Colombia",       data: [ { year: 1980, population: 24000000  }, { year: 2000, population: 38000000  }, { year: 2020, population: 42000000  } ] },
  "ARG": { name: "Argentina",      data: [ { year: 1980, population: 28000000  }, { year: 2000, population: 34000000  }, { year: 2020, population: 36000000  } ] },
  "PER": { name: "Peru",           data: [ { year: 1980, population: 14000000  }, { year: 2000, population: 22000000  }, { year: 2020, population: 27000000  } ] },
  // Europe
  "ITA": { name: "Italy",          data: [ { year: 1980, population: 56000000  }, { year: 2000, population: 57000000  }, { year: 2020, population: 50000000  } ] },
  "ESP": { name: "Spain",          data: [ { year: 1980, population: 35000000  }, { year: 2000, population: 40000000  }, { year: 2020, population: 38000000  } ] },
  "POL": { name: "Poland",         data: [ { year: 1980, population: 33000000  }, { year: 2000, population: 35500000  }, { year: 2020, population: 33000000  } ] },
  "FRA": { name: "France",         data: [ { year: 1980, population: 47000000  }, { year: 2000, population: 45000000  }, { year: 2020, population: 38000000  } ] },
  "DEU": { name: "Germany",        data: [ { year: 1980, population: 28500000  }, { year: 2000, population: 27000000  }, { year: 2020, population: 22600000  } ] },
  // North America
  "USA": { name: "United States",  data: [ { year: 1980, population: 47502152  }, { year: 2000, population: 62000000  }, { year: 2020, population: 72000000  } ] },
  // Africa
  "COD": { name: "DR Congo",       data: [ { year: 1980, population: 14000000  }, { year: 2000, population: 28000000  }, { year: 2020, population: 50000000  } ] },
  "NGA": { name: "Nigeria",        data: [ { year: 1980, population: 9000000   }, { year: 2000, population: 18000000  }, { year: 2020, population: 30000000  } ] },
  // Asia-Pacific
  "PHL": { name: "Philippines",    data: [ { year: 1980, population: 39300000  }, { year: 2000, population: 66000000  }, { year: 2020, population: 85645362  } ] },
  "IND": { name: "India",          data: [ { year: 1980, population: 13000000  }, { year: 2000, population: 17000000  }, { year: 2020, population: 19000000  } ] },
};

const GlobalDemographics: React.FC = () => {
  return (
    <div className="container">
      <Link to="/" style={{ textDecoration: 'none', color: '#2c5282', display: 'inline-block', marginBottom: '2rem', fontSize: '1rem', fontWeight: 'bold' }}>
        &larr; Back to Home
      </Link>
      <section style={{ marginBottom: '4rem' }}>
        <h2>Global Catholic population (1980 - 2020)</h2>
        <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '1.5rem' }}>
          Sources: Annuarium Statisticum Ecclesiae, CARA, Pew Research Center. All figures are approximate baptized Catholic population.
        </p>
        <GlobalDashboard data={globalCatholicData} />
      </section>
    </div>
  );
};

export default GlobalDemographics;

