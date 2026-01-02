import React from 'react';
import { motion } from 'framer-motion';
import MovingBackground from '../MovingBackground'; 

const ServicesHero = () => {
  return (
    <section className="relative py-32 bg-white text-gray-900 overflow-hidden min-h-[500px] flex items-center">
      
      <MovingBackground />

      <div className="container mx-auto px-6 text-center relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-900 font-bold tracking-widest uppercase text-xs border-b-2 border-orange-500 pb-1">
            European Know-How
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 mb-6 leading-tight text-gray-900">
            Reliable Solutions for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">
              The Food Industry
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Kami menggabungkan keahlian Eropa dengan pengalaman industri lokal. Dari instalasi mesin, konsultasi "Master Butcher", hingga penyediaan casing kolagen berkualitas tinggi.
          </p>
        </motion.div>
      </div>
      
    </section>
  );
};

export default ServicesHero;