import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ 
      marginTop: '6rem',
      padding: '4rem 20px', 
      backgroundColor: '#f8f9fa', 
      borderTop: '1px solid #e5e5e5',
      color: '#555',
      fontFamily: 'Lato, sans-serif'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        
        <div>
          <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#2c5282', marginBottom: '1rem' }}>Spiritual Protection</h4>
          <p style={{ fontStyle: 'italic', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            "St. Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the Heavenly Host, by the power of God, cast into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen."
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px' }}>
            <h5 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#333' }}>To St. Carlo Acutis</h5>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
              Patron of the internet and computer programmers, pray for us. May this code and project be used to bring souls closer to the Eucharist, your "highway to heaven."
            </p>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <h5 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#333' }}>Glory Be</h5>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
              Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: '#777', borderTop: '1px solid #ddd', paddingTop: '2rem' }}>
          <p>CALEB | Catholic Atlas of Longitudinal Ecclesiology & Benchmarks</p>
          <p>A solo project built for the greater glory of God (AMDG).</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
