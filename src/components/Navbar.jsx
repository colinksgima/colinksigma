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
    return location.pathname === path ? "text-orange-500" : "text-gray-600 hover:text-blue-900";
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
            // SAAT SCROLL (Floating Pill):
            // Padding lebih kecil (px-12) karena container-nya sendiri sudah mengecil (w-[95%])
            // Ini menjaga logo tetap terlihat proporsional di dalam kapsul.
            ? 'bg-white/95 backdrop-blur-md shadow-2xl rounded-full border border-white/20 w-[95%] md:w-auto md:min-w-[850px] py-3 px-8 md:px-12' 
            
            // SAAT DI ATAS (Normal): 
            // PERUBAHAN DISINI: Saya ubah jadi px-8 md:px-24 
            // Agar logo GESER KE TENGAH (tidak mepet pojok layar).
            : 'bg-white w-full py-5 border-b border-gray-100 h-20 px-8 md:px-24'
        }`}
      >
        
        {/* --- 1. LOGO SECTION --- */}
        <Link to="/" className="flex items-center flex-shrink-0 gap-2">
          {/* Ukuran logo tetap konsisten */}
          <img 
            src="/images/logo.svg" 
            alt="Colink Sigma Logo" 
            className="h-10 w-10 md:h-14 md:w-14 object-contain transition-all duration-300" 
          />
        </Link>
        
        {/* --- 2. DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 font-medium mx-4 lg:mx-8">
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
               className={`${isActive(link.path)} transition font-bold text-sm uppercase tracking-wide relative group`}
             >
               {link.label}
               <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                 location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
               }`}></span>
             </Link>
          ))}
        </div>

        {/* --- 3. LANGUAGE SWITCHER (Desktop) --- */}
        <div className="hidden md:flex items-center gap-3 pl-4 border-l border-gray-200">
           <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-gray-100 transition"
            >
              <img src={activeLang.flag} alt={activeLang.code} className="w-5 h-3.5 object-cover rounded shadow-sm" />
              <span className="text-xs font-bold text-gray-700">{activeLang.code}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-4 w-40 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden py-1 z-50 animate-in fade-in slide-in-from-top-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLangSelect(lang)}
                    className="flex items-center gap-3 w-full px-4 py-2 text-sm text-left hover:bg-blue-50 hover:text-blue-900 transition-colors"
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
          className="md:hidden text-gray-700 ml-auto focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </nav>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-2xl shadow-2xl p-6 flex flex-col gap-4 border border-gray-100 md:hidden animate-in fade-in slide-in-from-top-5 duration-300">
          <Link to="/" className="block text-gray-700 font-bold py-2 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Beranda</Link>
          <Link to="/about" className="block text-gray-700 font-bold py-2 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Tentang Kami</Link>
          <Link to="/services" className="block text-gray-700 font-bold py-2 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Layanan</Link>
          <Link to="/gallery" className="block text-gray-700 font-bold py-2 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Galeri</Link>
          <Link to="/contact" className="block text-gray-700 font-bold py-2 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Kontak</Link>
          
          <div className="pt-2">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-semibold">Select Language</p>
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { handleLangSelect(lang); setIsMenuOpen(false); }}
                  className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 rounded-lg border text-xs font-medium transition-all ${
                    activeLang.code === lang.code 
                      ? 'bg-blue-900 text-white border-blue-900 shadow-md' 
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <img src={lang.flag} alt={lang.code} className="w-6 h-4 object-cover rounded shadow-sm" />
                  <span>{lang.code}</span>
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