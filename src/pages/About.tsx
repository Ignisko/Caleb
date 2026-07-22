import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="container">
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: 'bold' }}>
          &larr; Back to Home
        </Link>
      </div>
      
      <div className="header">
        <h1>About Our Mission</h1>
        <p>Research and data to make progress against the Church's largest challenges.</p>
      </div>

      <div className="article-content-body" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
        <p>
          <strong>CALEB (Catholic atlas of longitudinal ecclesiology & benchmarks)</strong> is a project built for the greater glory of God (AMDG).
        </p>
        <p>
          Our mission is to provide open-access, openly licensed data regarding the state of the Catholic Church worldwide. By tracking leading indicators such as sacramental pipelines, vocations, mass attendance, and global demographics, we aim to provide clarity on the challenges and opportunities facing the Church today.
        </p>
        <p>
          All data presented on this site is sourced from official ecclesiastical records, including the <em>Annuario Pontificio</em> and the <em>Annuarium Statisticum Ecclesiae</em>, as well as reputable research centers.
        </p>
      </div>
    </div>
  );
};

export default About;
