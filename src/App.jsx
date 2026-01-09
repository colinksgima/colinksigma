import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// --- COMPONENTS ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// --- PAGES ---
import Home from './pages/Home';         
import About from './pages/About';       
import Services from './pages/Services'; 
import Gallery from './pages/Gallery';   
import Contact from './pages/Contact';   
import PrivacyPolicy from './pages/PrivacyPolicy'; // IMPORT BARU
import Terms from './pages/Terms';                 // IMPORT BARU

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Matikan fitur browser yang mengingat posisi scroll
    // Ini memaksa browser untuk tidak 'sok tahu' mengembalikan posisi scroll lama
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Scroll ke atas
    window.scrollTo(0, 0);
    
    // 3. (Opsional) Tambahkan sedikit delay 0 detik untuk memastikan 
    // perintah ini dijalankan TERAKHIR setelah render selesai
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

  }, [pathname]);

  return null;
};

const App = () => {
  return (
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
            
            {/* Rute Baru untuk Legalitas */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<Terms />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;