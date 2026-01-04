import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutVision = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
         <div className="grid md:grid-cols-2 gap-12">
            
            {/* Kartu Visi */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:bg-white/20 transition duration-300"
            >
               <h3 className="text-2xl font-bold text-orange-400 mb-4">{t('about.vision.title')}</h3>
               <p className="text-blue-100 leading-relaxed text-lg">
                 {t('about.vision.desc')}
               </p>
            </motion.div>

            {/* Kartu Misi */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:bg-white/20 transition duration-300"
            >
               <h3 className="text-2xl font-bold text-orange-400 mb-4">{t('about.vision.mission_title')}</h3>
               <ul className="space-y-4 text-blue-100">
                  {[
                    t('about.vision.mission_1'),
                    t('about.vision.mission_2'),
                    t('about.vision.mission_3')
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (idx * 0.2) }}
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