import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

const headerImages = [
  "images/casing.jpg",   // Kiri Luar
  "images/sausage1.jpg",  // Kiri Dalam
  "images/sausage2.jpg",  // TENGAH (UTAMA)
  "images/sausage3.jpg",   // Kanan Dalam
  "images/casing.jpg",  // Kanan Luar
];

const GalleryHero = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-24 pb-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        
        {/* Judul Besar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-2 block">
            {t('gallery_page.hero.subtitle')}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight whitespace-pre-line">
            <Trans i18nKey="gallery_page.hero.title">
               PRECISION IN <br/> <span className="text-blue-900">EVERY INSTALLATION</span>
            </Trans>
          </h1>
        </motion.div>

        {/* 5-Image Arc Layout */}
        <div className="flex justify-center items-center gap-2 md:gap-4 h-[300px] md:h-[400px]">
           {/* Foto 1 (Kiri Luar) */}
           <motion.div 
             initial={{ opacity: 0, x: -50 }} animate={{ opacity: 0.6, x: 0 }} transition={{ delay: 0.4 }}
             className="hidden md:block w-32 h-48 md:h-64 rounded-lg overflow-hidden transform scale-90"
           >
             <img src={headerImages[0]} alt="Gallery 1" className="w-full h-full object-cover" />
           </motion.div>
           
           {/* Foto 2 (Kiri Dalam) */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }} animate={{ opacity: 0.8, x: 0 }} transition={{ delay: 0.2 }}
             className="w-1/4 md:w-40 h-56 md:h-80 rounded-lg overflow-hidden transform scale-95 shadow-lg"
           >
             <img src={headerImages[1]} alt="Gallery 2" className="w-full h-full object-cover" />
           </motion.div>

           {/* Foto 3 (TENGAH - TERBESAR) */}
           <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.8, type: "spring" }}
             className="w-1/2 md:w-64 h-72 md:h-96 rounded-xl overflow-hidden z-10 shadow-2xl border-4 border-white relative"
           >
             <img src={headerImages[2]} alt="Main Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
             <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-xs font-bold shadow-sm">
                {t('gallery_page.hero.featured')}
             </div>
           </motion.div>

           {/* Foto 4 (Kanan Dalam) */}
           <motion.div 
             initial={{ opacity: 0, x: 30 }} animate={{ opacity: 0.8, x: 0 }} transition={{ delay: 0.2 }}
             className="w-1/4 md:w-40 h-56 md:h-80 rounded-lg overflow-hidden transform scale-95 shadow-lg"
           >
             <img src={headerImages[3]} alt="Gallery 4" className="w-full h-full object-cover" />
           </motion.div>

           {/* Foto 5 (Kanan Luar) */}
           <motion.div 
             initial={{ opacity: 0, x: 50 }} animate={{ opacity: 0.6, x: 0 }} transition={{ delay: 0.4 }}
             className="hidden md:block w-32 h-48 md:h-64 rounded-lg overflow-hidden transform scale-90"
           >
             <img src={headerImages[4]} alt="Gallery 5" className="w-full h-full object-cover" />
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default GalleryHero;