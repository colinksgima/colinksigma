import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutVision = () => {
  return (
    <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
         <div className="grid md:grid-cols-2 gap-12">
            
            {/* Kartu Visi - Muncul Duluan */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }} // Mulai dari bawah
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }} // Efek membal (bounce)
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:bg-white/20 transition duration-300"
            >
               <h3 className="text-2xl font-bold text-orange-400 mb-4">Our Vision</h3>
               <p className="text-blue-100 leading-relaxed text-lg">
                 Menjadi mitra teknis terdepan di Indonesia yang dipercaya karena integritas, presisi Jerman, dan solusi inovatif dalam industri pengolahan pangan.
               </p>
            </motion.div>

            {/* Kartu Misi - Muncul Belakangan */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }} // Delay 0.2 detik
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:bg-white/20 transition duration-300"
            >
               <h3 className="text-2xl font-bold text-orange-400 mb-4">Our Mission</h3>
               <ul className="space-y-4 text-blue-100">
                  {/* List Item Animasi */}
                  {[
                    "Memberikan layanan teknis yang cepat & akurat.",
                    "Menyediakan sparepart & bahan baku berkualitas tinggi.",
                    "Mengedukasi industri lokal dengan standar higiene global."
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (idx * 0.2) }} // Muncul satu-satu
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="shrink-0 text-orange-400" size={24}/>
                      <span>{item}</span>
                    </motion.li>
                  ))}
               </ul>
            </motion.div>
         </div>
      </div>
      
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
    </section>
  );
};

export default AboutVision;