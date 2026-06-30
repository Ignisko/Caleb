import React from 'react';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Research and data to make progress against the Church's largest challenges.
        </h1>
        <p className="hero-subtitle">
          Read about our mission &rarr;
        </p>

        <div className="hero-search">
          <input 
            type="text" 
            placeholder='Try "Vocations", "Poverty in Brazil", "Ordinations USA"...' 
            className="hero-search-input"
          />
          <button className="hero-search-btn">
            <Search size={20} color="#555" />
          </button>
        </div>

        <div className="hero-pills">
          <span className="hero-pill">📊 12 indicators</span>
          <span className="hero-pill">📑 4 topic pages</span>
          <span className="hero-pill">🔍 2 data explorers</span>
        </div>
        <div className="hero-footer-text">
          All free: open access and openly licensed
        </div>
      </div>
    </div>
  );
};

export default Hero;
