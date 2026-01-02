import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "27+", label: "Years Experience", desc: "German Educated Butcher" },
  { value: "15+", label: "Years Technical", desc: "Field Service Expert" },
  { value: "100%", label: "Certified", desc: "Master Butcher Standard" },
  { value: "5+", label: "Global Brands", desc: "Trusted Machine Support" },
];

const HomeStats = () => {
  return (
    <section className="py-12 bg-blue-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-800/50">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="px-2"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-1">{stat.value}</h3>
              <p className="text-sm font-bold uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-xs text-blue-200">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Pattern Background Tipis */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    </section>
  );
};

export default HomeStats;