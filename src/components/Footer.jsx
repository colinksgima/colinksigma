import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  // Tahun otomatis
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-orange-500 relative overflow-hidden">
      
      {/* --- BACKGROUND LOGO WATERMARK --- */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none z-0 overflow-hidden">
        <img 
          src="/images/logo.svg" 
          alt="Colink Watermark" 
          className="w-[400px] md:w-[700px] opacity-[0.05] grayscale brightness-150 translate-x-1/4 md:translate-x-10" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* 1. Brand Info */}
          <div className="lg:col-span-4">
            <Link to="/" className="block mb-6">
               <img src="/images/logo.svg" alt="Colink Sigma" className="h-14 brightness-0 invert" /> 
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 pr-6">
              Mitra strategis industri pengolahan daging. Membawa presisi teknik Jerman dengan layanan lokal yang responsif dan terpercaya.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/lars-arnstaedt-56b212280/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all shadow-lg"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-md font-bold mb-6 text-white uppercase tracking-wider border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-medium">
              <li><Link to="/" className="hover:text-orange-400 transition block py-1">Beranda</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition block py-1">Tentang Kami</Link></li>
              <li><Link to="/services" className="hover:text-orange-400 transition block py-1">Layanan</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-400 transition block py-1">Galeri</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition block py-1">Kontak</Link></li>
            </ul>
          </div>

          {/* 3. Expertise */}
          <div className="lg:col-span-3">
            <h4 className="text-md font-bold mb-6 text-white uppercase tracking-wider border-b border-gray-700 pb-2 inline-block">Our Expertise</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Instalasi Mesin (Handtmann)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Overhaul & Perbaikan</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Konsultasi Resep Sosis</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Supply Casing Kolagen</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Training Operator</li>
            </ul>
          </div>

          {/* 4. Head Office */}
          <div className="lg:col-span-3">
            <h4 className="text-md font-bold mb-6 text-white uppercase tracking-wider border-b border-gray-700 pb-2 inline-block">Head Office</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-500 shrink-0 mt-1" size={18} />
                <span className="leading-relaxed">
                  <strong>PT. Colink Sigma Indonesia</strong><br/>
                  Kompleks Dago Villa, Jl. Gunung Patuha No 72,<br/>
                  Cikarang Selatan - Bekasi, 17550
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-500 shrink-0" size={18} />
                <a href="tel:+6285311012421" className="hover:text-orange-400 transition font-mono tracking-wide">+62 853 1101 2421</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange-500 shrink-0" size={18} />
                <a href="mailto:lacolink2025@gmail.com" className="hover:text-orange-400 transition break-all">lacolink2025@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          
          {/* Copyright dengan Link Tersembunyi ke GitHub */}
          <p>
            &copy; 
            {/* LINK KE GITHUB ANDA DI SINI */}
            <a 
              href="https://github.com/rioaryan123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors cursor-pointer text-inherit px-1"
              title="Developed by..."
            >
              {currentYear}
            </a> 
            PT. Colink Sigma Indonesia. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;