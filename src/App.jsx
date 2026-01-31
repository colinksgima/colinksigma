import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// --- 1. IMPORT SEO PROVIDER ---
import { HelmetProvider } from 'react-helmet-async'; 

// --- COMPONENTS ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// --- PAGES ---
import Home from './pages/Home';         
import About from './pages/About';       
import Services from './pages/Services'; 
import Gallery from './pages/Gallery';   
import Contact from './pages/Contact';   
import PrivacyPolicy from './pages/PrivacyPolicy'; 
import Terms from './pages/Terms';                 

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
    
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

  }, [pathname]);

  return null;
};

const App = () => {
  return (
    /* --- 2. BUNGKUS APLIKASI DENGAN HELMET PROVIDER --- */
    /* Ini wajib ada agar tag <Helmet> di halaman lain berfungsi */
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col">
          
          <Navbar />
          
          <main className="flex-grow pt-20"> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Rute Legalitas */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<Terms />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;