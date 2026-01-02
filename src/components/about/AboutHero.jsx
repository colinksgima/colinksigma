import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Mulai dari lebih bawah
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }} // Durasi lebih lama (1 detik)
        >
          <span className="text-blue-900 font-bold tracking-widest uppercase text-xs border-b-2 border-orange-500 pb-1">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
            German Expertise. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">
              Indonesian Solutions.
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            PT. Colink Sigma Indonesia berdiri sebagai jembatan antara teknologi pengolahan daging standar Eropa dengan kebutuhan industri lokal di Indonesia.
          </p>
        </motion.div>
      </div>
      
      {/* Background Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
      ></motion.div>
    </section>
  );
};

export default AboutHero;