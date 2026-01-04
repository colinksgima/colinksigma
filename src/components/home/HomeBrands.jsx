import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const brands = ["HANDTMANN", "GUENTHER", "K+G WETTER", "KOLBE", "MAUTING"];

const HomeBrands = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 text-sm uppercase tracking-widest mb-8">
            {t('home.brands.trusted')}
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {brands.map((brand, i) => (
            <motion.span 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.15 }}
              className="text-2xl md:text-4xl font-black text-gray-500 hover:text-white transition-colors cursor-default"
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBrands;