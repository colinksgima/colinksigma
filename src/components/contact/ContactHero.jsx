import React from 'react';
import { motion } from 'framer-motion';
import MovingBackground from '../MovingBackground'; 
import { useTranslation, Trans } from 'react-i18next'; // Import Hook

const ContactHero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-32 bg-white text-gray-900 overflow-hidden min-h-[500px] flex items-center">
      
      <MovingBackground />

      {/* Konten Utama (Teks) */}
      <div className="container mx-auto px-6 text-center relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-900 font-bold tracking-widest uppercase text-xs border-b-2 border-orange-500 pb-1">
            {t('contact_page.hero.subtitle')}
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 mb-6 leading-tight text-gray-900 whitespace-pre-line">
            <Trans i18nKey="contact_page.hero.title">
               Let's Start a <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">
                 Conversation
               </span>
            </Trans>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {t('contact_page.hero.desc')}
          </p>
        </motion.div>
      </div>
      
    </section>
  );
};

export default ContactHero;