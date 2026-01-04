import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SupportedBrands = () => {
  const { t } = useTranslation();

  const brands = [
    { name: "Handtmann", desc: t('services_page.brands.handtmann') },
    { name: "Günther", desc: t('services_page.brands.guenther') },
    { name: "K+G WETTER", desc: t('services_page.brands.kg') },
    { name: "Kolbe", desc: t('services_page.brands.kolbe') },
    { name: "Mauting", desc: t('services_page.brands.mauting') }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{t('services_page.brands.title')}</h2>
          <p className="text-gray-600 mt-3">{t('services_page.brands.subtitle')}</p>
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