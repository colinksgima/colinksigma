import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const GallerySpotlight = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row items-center gap-12">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="md:w-1/2"
             >
                <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-2 block">
                  Project Spotlight
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MAUTING SMOKEHOUSE <br/> INSTALLATION
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Sebuah pencapaian teknis dalam instalasi sistem pengasapan modern. Proyek ini melibatkan integrasi penuh sistem kontrol iklim dan pemrosesan otomatis untuk hasil produk yang konsisten.
                </p>
                <ul className="space-y-3 mb-8 text-gray-400">
                   <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> Full System Calibration</li>
                   <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> German Standard Commissioning</li>
                </ul>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="md:w-1/2 w-full"
             >
                <div className="relative rounded-lg overflow-hidden border border-white/20 shadow-2xl group">
                   <img src="/images/sausage.jpg" alt="Spotlight Project" className="w-full h-80 object-cover filter grayscale group-hover:grayscale-0 transition duration-700" />
                   <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                </div>
             </motion.div>
          </div>

        </div>
        
        {/* Background Texture */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
    </section>
  );
};

export default GallerySpotlight;