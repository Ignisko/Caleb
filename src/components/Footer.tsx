import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ 
      marginTop: '4rem',
      padding: '2rem 20px', 
      backgroundColor: '#f8f9fa', 
      borderTop: '1px solid #e5e5e5',
      color: '#555',
      fontFamily: 'Lato, sans-serif'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center', padding: 0 }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
          <div>
            <h5 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#2c5282', marginBottom: '0.5rem', fontWeight: 'bold' }}>Spiritual Protection</h5>
            <p style={{ fontStyle: 'italic', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
              "St. Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the Heavenly Host, by the power of God, cast into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen."
            </p>
          </div>

          <div>
            <h5 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#2c5282', marginBottom: '0.5rem', fontWeight: 'bold' }}>To St. Carlo Acutis</h5>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
              Patron of the internet and computer programmers, pray for us. May this code and project be used to bring souls closer to the Eucharist, your "highway to heaven."
            </p>
          </div>

          <div>
            <h5 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#2c5282', marginBottom: '0.5rem', fontWeight: 'bold' }}>Glory Be</h5>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
              Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#777', borderTop: '1px solid #ddd', paddingTop: '1rem' }}>
          <p style={{ margin: '0 0 0.25rem 0' }}><strong>CALEB</strong> | Catholic atlas of longitudinal ecclesiology & benchmarks</p>
          <p style={{ margin: 0 }}>A project built for the greater glory of God (AMDG).</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
