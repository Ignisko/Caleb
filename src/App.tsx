
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Layout Components
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import GlobalDemographics from './pages/GlobalDemographics';
import USIndicators from './pages/USIndicators';
import MassAttendance from './pages/MassAttendance';
import SacramentalPipeline from './pages/SacramentalPipeline';
import AfricaTrends from './pages/AfricaTrends';
import PriestlessParishes from './pages/PriestlessParishes';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <header style={{ padding: '10px 20px', borderBottom: '1px solid #e5e5e5', fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'Playfair Display, serif' }}>
          CALEB <span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#555', marginLeft: '10px', fontFamily: 'Lato, sans-serif' }}>| Catholic atlas of longitudinal ecclesiology & benchmarks</span>
        </header>
        
        <main style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/global" element={<GlobalDemographics />} />
            <Route path="/us-indicators" element={<USIndicators />} />
            <Route path="/mass-attendance" element={<MassAttendance />} />
            <Route path="/sacramental-pipeline" element={<SacramentalPipeline />} />
            <Route path="/africa-trends" element={<AfricaTrends />} />
            <Route path="/priestless-parishes" element={<PriestlessParishes />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

