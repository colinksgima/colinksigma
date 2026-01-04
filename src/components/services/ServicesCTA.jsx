import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

const ServicesCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="bg-blue-900 rounded-3xl relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center"
        >
          
          {/* --- BAGIAN KIRI: KONTEN TEKS --- */}
          <div className="relative z-10 md:w-1/2 p-10 md:p-16 text-center md:text-left text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight whitespace-pre-line">
              <Trans i18nKey="services_page.cta.title">
                Ready to Upgrade <br/> Your Production?
              </Trans>
            </h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed">
              {t('services_page.cta.desc')}
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1"
            >
              {t('services_page.cta.btn')} <ArrowRight className="ml-2" />
            </Link>
          </div>

          {/* --- BAGIAN KANAN: FOTO BACKGROUND --- */}
          <div className="absolute top-0 right-0 w-full md:w-3/5 h-full z-0">
             <img 
               src="/images/casing.jpg" 
               alt="Services Background" 
               className="w-full h-full object-cover opacity-50 mix-blend-luminosity" 
             />
             <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/90 to-transparent"></div>
          </div>
          
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none z-0"></div>

        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;