import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const languages = [
    { code: 'ID', label: 'Indonesia', flag: 'https://flagcdn.com/w40/id.png' },
    { code: 'EN', label: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
    { code: 'DE', label: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' }
  ];

  const [activeLang, setActiveLang] = useState(languages[1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path 
      ? "text-orange-500 font-extrabold" 
      : "text-gray-300 hover:text-white font-medium";
  };

  const handleLangSelect = (lang) => {
    setActiveLang(lang);
    setIsLangOpen(false);
  };

  return (
    <div className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
      isScrolled ? 'top-4' : 'top-0'
    }`}>
      
      <nav
        className={`transition-all duration-500 ease-in-out flex items-center justify-between relative
        ${isScrolled 
          // --- MODE SCROLL (KAPSUL) ---
          // Padding diperkecil (py-2) agar kapsul tidak gembung, tapi logo tetap menonjol
          ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl rounded-full border border-white/20 w-[95%] md:w-auto md:min-w-[900px] py-2 px-8 md:px-12' 
          
          // --- MODE ATAS (NORMAL) ---
          // Padding standar (py-4) agar tidak terlalu tinggi, tapi logo dimaksimalkan
          : 'bg-slate-900 w-full py-4 px-6 md:px-16 border-b border-white/10'
        }`}
      >
        
        {/* --- 1. LOGO SECTION (Hanya Gambar Besar) --- */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img 
            src="/images/logo.svg" 
            alt="Colink Sigma Logo" 
            // UKURAN LOGO DIPERBESAR DI SINI
            // h-14 (56px) di Mobile, h-20 (80px) di Desktop
            // -mt-1 (margin top negatif) digunakan sedikit agar logo besar tidak "mendorong" navbar jadi terlalu tinggi
            className={`object-contain transition-transform duration-300 hover:scale-110 
              ${isScrolled ? 'h-12 w-12 md:h-16 md:w-16' : 'h-14 w-14 md:h-20 md:w-20'}
            `} 
          />
        </Link>

        {/* --- 2. DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { path: '/', label: 'Beranda' },
            { path: '/about', label: 'Tentang Kami' },
            { path: '/services', label: 'Layanan' },
            { path: '/gallery', label: 'Galeri' }, 
            { path: '/contact', label: 'Kontak' },
          ].map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`${isActive(link.path)} text-sm uppercase tracking-wider transition-all relative group py-2`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </div>

        {/* --- 3. LANGUAGE SWITCHER --- */}
        <div className="hidden md:flex items-center pl-6 border-l border-white/20 ml-4">
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition border border-white/10"
            >
              <img src={activeLang.flag} alt={activeLang.code} className="w-5 h-3.5 object-cover rounded-[2px]" />
              <span className="text-xs font-bold tracking-wide">{activeLang.code}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-3 w-40 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden py-1 z-50 animate-in fade-in slide-in-from-top-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLangSelect(lang)}
                    className="flex items-center gap-3 w-full px-4 py-3 text-sm text-left text-gray-300 hover:bg-slate-700 hover:text-white transition-colors border-b border-slate-700/50 last:border-0"
                  >
                    <img src={lang.flag} alt={lang.label} className="w-5 h-3.5 object-cover rounded shadow-sm" />
                    <span className="font-medium">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* --- 4. MOBILE MENU BUTTON --- */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-white hover:text-orange-500 transition focus:outline-none bg-white/10 p-2 rounded-lg"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {/* --- MOBILE MENU DROPDOWN (Overlay) --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/98 backdrop-blur-xl md:hidden flex flex-col justify-center items-center animate-in fade-in duration-200">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 text-white/50 hover:text-white bg-white/10 p-2 rounded-full"
          >
            <X size={32} />
          </button>

          <div className="flex flex-col gap-8 text-center w-full px-8">
            {/* Logo di Mobile Menu juga besar */}
            <img 
              src="/images/logo.svg" 
              alt="Colink Logo" 
              className="h-24 w-24 mx-auto mb-4 object-contain"
            />
            
            {[
              { path: '/', label: 'Beranda' },
              { path: '/about', label: 'Tentang Kami' },
              { path: '/services', label: 'Layanan' },
              { path: '/gallery', label: 'Galeri' },
              { path: '/contact', label: 'Kontak' },
            ].map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-2xl font-bold tracking-wide ${
                  location.pathname === link.path ? 'text-orange-500' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="w-20 h-1 bg-white/10 mx-auto my-4 rounded-full"></div>

            <div className="flex justify-center gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { handleLangSelect(lang); setIsMenuOpen(false); }}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl border min-w-[80px] ${
                    activeLang.code === lang.code 
                      ? 'bg-orange-500 border-orange-500 text-white' 
                      : 'bg-transparent border-white/20 text-gray-400'
                  }`}
                >
                  <img src={lang.flag} alt={lang.code} className="w-8 h-5 object-cover rounded shadow-sm" />
                  <span className="text-xs font-bold mt-1">{lang.code}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;