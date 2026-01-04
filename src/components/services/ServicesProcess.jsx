import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ServicesProcess = () => {
  const { t } = useTranslation();

  const steps = [
    { num: "01", title: t('services_page.process.step1_title'), desc: t('services_page.process.step1_desc') },
    { num: "02", title: t('services_page.process.step2_title'), desc: t('services_page.process.step2_desc') },
    { num: "03", title: t('services_page.process.step3_title'), desc: t('services_page.process.step3_desc') },
    { num: "04", title: t('services_page.process.step4_title'), desc: t('services_page.process.step4_desc') }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">{t('services_page.process.title')}</h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
            >
              <div className="text-5xl font-black text-gray-200 absolute top-4 right-4 group-hover:text-blue-100 transition-colors">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3 relative z-10">{step.title}</h3>
              <p className="text-gray-600 text-sm relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesProcess; 