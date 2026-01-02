import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 border-t-4 border-orange-500">
      <div className="container mx-auto px-6">
        
        {/* PERBAIKAN: Gunakan lg:grid-cols-12 untuk kontrol lebar kolom lebih presisi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
          
          {/* 1. Brand Info (Lebar 4 dari 12 bagian) */}
          <div className="lg:col-span-4">
            <Link to="/" className="block mb-4">
               <img src="/images/logo.svg" alt="Colink Sigma" className="h-12 brightness-0 invert" /> 
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 pr-4"> {/* pr-4 agar teks tidak terlalu lebar */}
              Mitra strategis industri pengolahan daging. Presisi teknik Jerman dengan layanan lokal responsif.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* 2. Quick Links (Lebar 2 dari 12 bagian - SANGAT SEMPIT AGAR DEKAT KE KANAN) */}
          <div className="lg:col-span-2">
            <h4 className="text-md font-bold mb-4 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-orange-400 transition">Beranda</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition">Tentang Kami</Link></li>
              <li><Link to="/services" className="hover:text-orange-400 transition">Layanan</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-400 transition">Galeri</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition">Kontak</Link></li>
            </ul>
          </div>

          {/* 3. Expertise (Lebar 3 dari 12 bagian) */}
          <div className="lg:col-span-3">
            <h4 className="text-md font-bold mb-4 text-white uppercase tracking-wider">Our Expertise</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Instalasi Mesin (Handtmann, Mauting)</li>
              <li>Overhaul & Perbaikan (612, etc)</li>
              <li>Konsultasi Resep Sosis</li>
              <li>Supply Casing Kolagen</li>
              <li>Training Operator</li>
            </ul>
          </div>

          {/* 4. Head Office (Lebar 3 dari 12 bagian) */}
          <div className="lg:col-span-3">
            <h4 className="text-md font-bold mb-4 text-white uppercase tracking-wider">Head Office</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-500 shrink-0 mt-0.5" size={16} />
                <span>
                  <strong>PT. Colink Sigma Indonesia</strong><br/>
                  Cikarang, Bekasi<br/>
                  Jawa Barat
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-500 shrink-0" size={16} />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange-500 shrink-0" size={16} />
                <span>info@colinksigma.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 PT. Colink Sigma Indonesia. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;