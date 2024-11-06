import './App.scss';
import { useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './components/navBar';
import particlesOptions from './utils/particles'; // Assuming correct path

function App() {
  const location = useLocation();

  const handleInit = useCallback(async (engine) => {
    try {
      // Correct tsparticles initialization
      await loadFull(engine);
    } catch (error) {
      console.error('Error loading particles.js:', error);
    }
  }, []);

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {renderParticleJsInHomePage && (
        <Particles id="tsparticles" init={handleInit} options={particlesOptions} />
      )}

      <Navbar/>
      <div className="App__main-page-content">
        <Routes>
          <Route index  path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
