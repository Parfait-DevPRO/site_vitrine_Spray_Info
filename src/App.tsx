import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import History from './pages/History';
import Objectives from './pages/Objectives';
import Missions from './pages/Missions';
import Portfolio from './pages/Portfolio';
import MemberProfile from './pages/MemberProfile';
import Organigramme from './pages/Organigramme';
import Location from './pages/Location';
import Partners from './pages/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/historique" element={<History />} />
              <Route path="/objectifs" element={<Objectives />} />
              <Route path="/missions" element={<Missions />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:memberId" element={<MemberProfile />} />
              <Route path="/organigramme" element={<Organigramme />} />
              <Route path="/localisation" element={<Location />} />
              <Route path="/partenaires" element={<Partners />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;