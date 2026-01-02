import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: "Handtmann", desc: "Filling, Portioning, and Hanging Systems" },
  { name: "Günther", desc: "Injectors and Tumblers" },
  { name: "K+G WETTER", desc: "Bowl Cutters, Mincer Grinders" },
  { name: "Kolbe", desc: "Bandsaws, Mincer Grinders" },
  { name: "Mauting", desc: "Smoking, Cooking and Chilling Chambers" }
];

const SupportedBrands = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Machine Brands We Support</h2>
          <p className="text-gray-600 mt-3">Kami berpengalaman menangani instalasi & servis merek-merek terkemuka.</p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-center items-center h-32"
            >
              {/* Jika ada logo, ganti text ini dengan <img src="..." /> */}
              <h3 className="text-xl font-black text-blue-900 mb-1">{brand.name}</h3>
              <p className="text-xs text-gray-500 leading-tight">{brand.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedBrands;