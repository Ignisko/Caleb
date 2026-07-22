import React from 'react';
import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Search functionality coming soon!');
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
          />
          <button type="submit" className="hero-search-btn">
            <Search size={20} color="#555" />
          </button>
        </form>

        <div className="hero-pills">
          <span className="hero-pill" style={{ cursor: 'pointer' }} onClick={() => alert('Filtering coming soon!')}>📊 12 indicators</span>
          <span className="hero-pill" style={{ cursor: 'pointer' }} onClick={() => alert('Filtering coming soon!')}>📑 4 topic pages</span>
          <span className="hero-pill" style={{ cursor: 'pointer' }} onClick={() => alert('Filtering coming soon!')}>🔍 2 data explorers</span>
        </div>
        <div className="hero-footer-text">
          All free: open access and openly licensed
        </div>
      </div>
    </div>
  );
};

export default Hero;
