import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const AboutStory = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Kiri: Gambar */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 relative"
          >
             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img src="images/sausage.jpg" alt="Our History" className="w-full h-auto object-cover" />
             </div>
             <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 rounded-xl shadow-xl z-20 hidden md:block">
                <p className="text-4xl font-bold">2025</p>
                <p className="text-sm opacity-80 uppercase tracking-widest">{t('about.story.established')}</p>
             </div>
             <div className="absolute top-10 -left-10 w-32 h-32 bg-orange-100 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Kanan: Teks */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="md:w-1/2 space-y-6"
          >
             <h2 className="text-3xl font-bold text-gray-900 whitespace-pre-line">
               <Trans i18nKey="about.story.title">
                  A New Standard in <span className="text-blue-900">Food Technology</span>
               </Trans>
             </h2>
             <p className="text-gray-600 leading-relaxed text-lg">
               {t('about.story.desc')}
             </p>
             
             <div className="space-y-6 pt-4">
               {/* Item 1 */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4, duration: 0.5 }}
                 className="flex items-start gap-4"
               >
                 <div className="bg-blue-50 p-3 rounded-lg text-blue-900 shrink-0"><Award size={28} /></div>
                 <div>
                   <h4 className="font-bold text-gray-900 text-lg">{t('about.story.cert_title')}</h4>
                   <p className="text-gray-600">{t('about.story.cert_desc')}</p>
                 </div>
               </motion.div>
               
               {/* Item 2 */}
               <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.6, duration: 0.5 }}
                   className="flex items-start gap-4"
                >
                 <div className="bg-blue-50 p-3 rounded-lg text-blue-900 shrink-0"><Globe size={28} /></div>
                 <div>
                   <h4 className="font-bold text-gray-900 text-lg">{t('about.story.edu_title')}</h4>
                   <p className="text-gray-600">{t('about.story.edu_desc')}</p>
                 </div>
               </motion.div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutStory;