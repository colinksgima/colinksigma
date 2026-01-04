import React from 'react';
import { motion } from 'framer-motion';

// Default gambar (bisa di-override lewat props jika ingin gambar beda per halaman)
const defaultImages = [
  "/images/sausage.jpg", "/images/casing1.jpg", "/images/sausage2.jpg",
  "/images/casing.jpg", "/images/sausage3.jpg", "/images/casing2.jpg",
  "/images/sausage2.jpg", "/images/casing3.jpg", "/images/sausage.jpg",
  "/images/casing2.jpg", "/images/sausage.jpg", "/images/casing3.jpg",
];

// Helper: Memecah array jadi kolom
const chunkArray = (array, numChunks) => {
  const result = [];
  for (let i = 0; i < numChunks; i++) {
    result.push(array.filter((_, index) => index % numChunks === i));
  }
  return result;
};

const MovingBackground = ({ images = defaultImages }) => {
  // Kita duplikasi array agar looping animasinya mulus (infinite scroll effect)
  const columns = chunkArray([...images, ...images], 4);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-white">
      
      {/* --- GRID GAMBAR BERGERAK --- */}
      <div className="flex gap-4 h-full justify-center -mt-10 opacity-60">
        {columns.map((columnImages, colIndex) => {
          // Logika: Kolom genap naik, ganjil turun (atau sebaliknya)
          const duration = colIndex % 2 === 0 ? 45 : 60;
          const direction = colIndex % 2 === 0 ? ["-50%", "0%"] : ["0%", "-50%"];

          return (
            <div key={colIndex} className="relative w-1/4 flex flex-col gap-4">
              <motion.div
                className="flex flex-col gap-4"
                animate={{ y: direction }}
                transition={{ duration: duration, ease: "linear", repeat: Infinity }}
              >
                {columnImages.map((src, imgIndex) => (
                  <div key={imgIndex} className="rounded-xl overflow-hidden aspect-[3/4]">
                    <img 
                      src={src} 
                      alt="background-pattern" 
                      className="w-full h-full object-cover grayscale-[100%]" 
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* --- OVERLAY PUTIH & GRADASI --- */}
      {/* Lapisan putih transparan agar teks di depannya terbaca */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm z-10"></div>
      
      {/* Gradasi pudar ke bawah agar menyatu dengan section berikutnya */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20"></div>
    </div>
  );
};

export default MovingBackground;