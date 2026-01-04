import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // 1. Import Hook

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // 2. Inisialisasi Hook i18n
  const { t, i18n } = useTranslation();

  // 3. Konfigurasi Bahasa (Code disesuaikan dengan i18n.js: 'id', 'en', 'de')
  const languages = [
    { code: 'id', display: 'ID', label: 'Indonesia', flag: 'https://flagcdn.com/w40/id.png' },
    { code: 'en', display: 'EN', label: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
    { code: 'de', display: 'DE', label: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' }
  ];

  // Menentukan bahasa aktif berdasarkan state i18n saat ini
  const activeLang = languages.find(l => l.code === i18n.language) || languages[0];

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

  // 4. Fungsi Ganti Bahasa
  const handleLangSelect = (langCode) => {
    i18n.changeLanguage(langCode); // Perintah utama ganti bahasa
    setIsLangOpen(false);
    setIsMenuOpen(false); // Tutup menu mobile jika sedang terbuka
  };

  // 5. Daftar Menu Dinamis (Menggunakan t)
  const navLinks = [
    { path: '/', label: t('navbar.home') },
    { path: '/about', label: t('navbar.about') },
    { path: '/services', label: t('navbar.services') },
    { path: '/gallery', label: t('navbar.gallery') },
    { path: '/contact', label: t('navbar.contact') },
  ];

  return (
    <div className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
      isScrolled ? 'top-4' : 'top-0'
    }`}>
      
      <nav
        className={`transition-all duration-500 ease-in-out flex items-center justify-between relative
        ${isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl rounded-full border border-white/20 w-[95%] md:w-auto md:min-w-[900px] py-2 px-8 md:px-12' 
          : 'bg-slate-900 w-full py-4 px-6 md:px-16 border-b border-white/10'
        }`}
      >
        
        {/* --- 1. LOGO SECTION --- */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img 
            src="images/logo.svg" 
            alt="Colink Sigma Logo" 
            className={`object-contain transition-transform duration-300 hover:scale-110 
              ${isScrolled ? 'h-12 w-12 md:h-16 md:w-16' : 'h-14 w-14 md:h-20 md:w-20'}
            `} 
          />
        </Link>

        {/* --- 2. DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
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

        {/* --- 3. LANGUAGE SWITCHER (DESKTOP) --- */}
        <div className="hidden md:flex items-center pl-6 border-l border-white/20 ml-4">
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition border border-white/10"
            >
              <img src={activeLang.flag} alt={activeLang.display} className="w-5 h-3.5 object-cover rounded-[2px]" />
              <span className="text-xs font-bold tracking-wide">{activeLang.display}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-3 w-40 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden py-1 z-50 animate-in fade-in slide-in-from-top-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLangSelect(lang.code)}
                    className={`flex items-center gap-3 w-full px-4 py-3 text-sm text-left transition-colors border-b border-slate-700/50 last:border-0 ${
                      activeLang.code === lang.code 
                        ? 'bg-orange-500/10 text-orange-400' 
                        : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                    }`}
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
            <img 
              src="images/logo.svg" 
              alt="Colink Logo" 
              className="h-24 w-24 mx-auto mb-4 object-contain"
            />
            
            {/* Loop Menu Mobile */}
            {navLinks.map((link) => (
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

            {/* Language Switcher Mobile */}
            <div className="flex justify-center gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLangSelect(lang.code)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl border min-w-[80px] transition-all ${
                    activeLang.code === lang.code 
                      ? 'bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/30' 
                      : 'bg-transparent border-white/20 text-gray-400 hover:border-white/40'
                  }`}
                >
                  <img src={lang.flag} alt={lang.code} className="w-8 h-5 object-cover rounded shadow-sm" />
                  <span className="text-xs font-bold mt-1">{lang.display}</span>
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