import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next'; // Import Hook

const AboutHero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-blue-900 font-bold tracking-widest uppercase text-xs border-b-2 border-orange-500 pb-1">
            {t('about.hero.subtitle')}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-4 mb-6 whitespace-pre-line">
            <Trans i18nKey="about.hero.title">
               German Expertise. <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">
                 Indonesian Solutions.
               </span>
            </Trans>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('about.hero.desc')}
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