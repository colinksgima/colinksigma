import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-blue-900 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center"
        >
          
          {/* --- 1. KONTEN TEKS (KIRI) --- */}
          <div className="relative z-10 md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Ready to Upgrade <br/> Your Production?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-md mx-auto md:mx-0">
              Konsultasikan kebutuhan mesin dan casing Anda bersama ahli kami untuk hasil yang maksimal.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition transform hover:scale-105 shadow-lg hover:shadow-orange-500/50"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* --- 2. GRADASI FOTO (KANAN) --- */}
          {/* Posisi absolute di kanan, menutupi separuh container */}
          <div className="absolute top-0 right-0 w-full md:w-3/5 h-full z-0">
             
             {/* Gambar Background */}
             <img 
               src="/images/sausage.jpg" // Pastikan gambar ini ada (atau ganti casing.jpg)
               alt="Production Background" 
               className="w-full h-full object-cover opacity-60 mix-blend-luminosity" 
             />

             {/* LAYER GRADASI: Kunci efek fading */}
             {/* Dari Biru Tebal (Kiri) -> ke Transparan (Kanan) */}
             <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
          </div>

          {/* Dekorasi Tambahan (Optional: Kilauan cahaya) */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTA;