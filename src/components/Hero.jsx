import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next'; // Import Hook

// --- DATA GAMBAR BACKGROUND ---
const galleryImages = [
  "/images/sausage.jpg", "/images/casing.jpg", "/images/Lars.png",
  "/images/sausage.jpg", "/images/Sugi.png", "/images/casing.jpg",
  "/images/Surya.png", "/images/logo.png", "/images/sausage.jpg",
  "/images/casing.jpg", "/images/Lars.png", "/images/Sugi.png",
];

const chunkArray = (array, numChunks) => {
  const result = [];
  for (let i = 0; i < numChunks; i++) {
    result.push(array.filter((_, index) => index % numChunks === i));
  }
  return result;
};

const Hero = () => {
  const { t } = useTranslation(); // Hook i18n
  const columns = chunkArray([...galleryImages, ...galleryImages], 4);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-white">
      
      {/* ================= BACKGROUND LAYER ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="flex gap-2 h-full justify-center px-0 -mt-20 opacity-40 md:opacity-60 scale-110">
          {columns.map((columnImages, colIndex) => {
            const duration = colIndex % 2 === 0 ? 50 : 65;
            const direction = colIndex % 2 !== 0 ? ["0%", "-40%"] : ["-40%", "0%"];
            return (
              <div key={colIndex} className="relative w-1/4 flex flex-col overflow-hidden">
                <motion.div
                  className="flex flex-col gap-2"
                  animate={{ y: direction }}
                  transition={{ duration: duration, ease: "linear", repeat: Infinity }}
                >
                  {columnImages.map((src, imgIndex) => (
                    <div key={imgIndex} className="relative rounded-lg overflow-hidden">
                      <img src={src} alt="bg" className="w-full object-cover aspect-[3/4] filter grayscale-[100%] blur-[2px]" />
                    </div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm z-10"></div>
      </div>

      {/* ================= CONTENT LAYER ================= */}
      <div className="container relative mx-auto px-6 z-20 py-12">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- KOLOM KIRI --- */}
          <div className="md:w-3/5 space-y-8">
            <div className="inline-flex items-center space-x-2 text-blue-900 font-bold tracking-widest uppercase text-xs border-b-2 border-orange-500 pb-1 w-fit">
              <span>{t('home.hero.since')}</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight whitespace-pre-line">
              <Trans i18nKey="home.hero.title">
                European Expertise, <br/><span className="text-blue-900">Indonesian Heart.</span>
              </Trans>
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              <Trans i18nKey="home.hero.desc" />
            </p>

            {/* Poin-Poin Informatif */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full"><CheckCircle size={20} className="text-blue-900"/></div>
                <div>
                  <h4 className="font-bold text-gray-900">{t('home.hero.tech_service')}</h4>
                  <p className="text-sm text-gray-600">{t('home.hero.tech_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full"><CheckCircle size={20} className="text-blue-900"/></div>
                <div>
                  <h4 className="font-bold text-gray-900">{t('home.hero.master_consult')}</h4>
                  <p className="text-sm text-gray-600">{t('home.hero.master_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full"><CheckCircle size={20} className="text-blue-900"/></div>
                <div>
                  <h4 className="font-bold text-gray-900">{t('home.hero.premium_casing')}</h4>
                  <p className="text-sm text-gray-600">{t('home.hero.premium_desc')}</p>
                </div>
              </div>
            </div>
            
            {/* Tombol Navigasi */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/about" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition shadow-lg hover:shadow-xl">
                {t('home.hero.btn_about')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-blue-900 bg-white border-2 border-blue-900 rounded-lg hover:bg-blue-50 transition">
                {t('home.hero.btn_services')}
              </Link>
            </div>
          </div>

          {/* --- KOLOM KANAN --- */}
          <div className="md:w-2/5 w-full hidden md:block">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition duration-500">
                <img src="/images/sausage.jpg" alt="Quality Production" className="w-full h-auto object-cover"/>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-bold text-lg">{t('home.hero.trusted_sol')}</p>
                  <p className="text-gray-300 text-sm">{t('home.hero.trusted_sub')}</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;