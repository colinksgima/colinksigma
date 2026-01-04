import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

// --- KOMPONEN KECIL UNTUK ANIMASI ANGKA ---
const Counter = ({ value }) => {
  // 1. Ambil angkanya saja (misal "27" dari "27+")
  const number = parseInt(value); 
  // 2. Ambil sisanya/suffix (misal "+" atau "%")
  const suffix = value.replace(number, ''); 

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round); // Bulatkan angka agar tidak ada desimal
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, number, { 
        duration: 2.5, // Durasi animasi (2.5 detik)
        ease: "easeOut" 
      });
      return controls.stop;
    }
  }, [count, isInView, number]);

  return (
    <span ref={ref} className="flex justify-center">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

// --- DATA ---
const stats = [
  { value: "27+", label: "Years Experience", desc: "German Educated Butcher" },
  { value: "15+", label: "Years Technical", desc: "Field Service Expert" },
  { value: "100%", label: "Certified", desc: "Master Butcher Standard" },
  { value: "5+", label: "Global Brands", desc: "Trusted Machine Support" },
];

// --- KOMPONEN UTAMA ---
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
              {/* Gunakan komponen Counter di sini */}
              <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-1 flex justify-center items-center">
                <Counter value={stat.value} />
              </h3>
              
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