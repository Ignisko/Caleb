import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface HeroProps {
  setSearchQuery: (query: string) => void;
  setActiveFilter: (filter: string | null) => void;
  activeFilter: string | null;
}

const Hero: React.FC<HeroProps> = ({ setSearchQuery, setActiveFilter, activeFilter }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };

  const handleFilterClick = (filter: string) => {
    if (activeFilter === filter) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filter);
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Research and data to make progress against the Church's largest challenges.
        </h1>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <p className="hero-subtitle" style={{ cursor: 'pointer', display: 'inline-block' }}>
            Read about our mission &rarr;
          </p>
        </Link>

        <form className="hero-search" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder='Try "Vocations", "Poverty in Brazil", "Ordinations USA"...' 
            className="hero-search-input"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setSearchQuery(e.target.value);
            }}
          />
          <button type="submit" className="hero-search-btn">
            <Search size={20} color="#555" />
          </button>
        </form>

        <div className="hero-pills">
          <span 
            className="hero-pill" 
            style={{ cursor: 'pointer', backgroundColor: activeFilter === 'Indicators' ? '#e2e8f0' : 'rgba(255, 255, 255, 0.15)' }} 
            onClick={() => handleFilterClick('Indicators')}
          >
            📊 12 indicators
          </span>
          <span 
            className="hero-pill" 
            style={{ cursor: 'pointer', backgroundColor: activeFilter === 'Topics' ? '#e2e8f0' : 'rgba(255, 255, 255, 0.15)' }} 
            onClick={() => handleFilterClick('Topics')}
          >
            📑 4 topic pages
          </span>
          <span 
            className="hero-pill" 
            style={{ cursor: 'pointer', backgroundColor: activeFilter === 'Explorers' ? '#e2e8f0' : 'rgba(255, 255, 255, 0.15)' }} 
            onClick={() => handleFilterClick('Explorers')}
          >
            🔍 2 data explorers
          </span>
        </div>
        <div className="hero-footer-text">
          All free: open access and openly licensed
        </div>
      </div>
    </div>
  );
};

export default Hero;
