import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, TrendingUp } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const HomeWhyChooseUs = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: <Award size={24} />,
      title: t('home.why_choose.german_cert'),
      desc: t('home.why_choose.german_desc')
    },
    {
      icon: <ShieldCheck size={24} />,
      title: t('home.why_choose.reliable'),
      desc: t('home.why_choose.reliable_desc')
    },
    {
      icon: <TrendingUp size={24} />,
      title: t('home.why_choose.end_to_end'),
      desc: t('home.why_choose.end_to_end_desc')
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* FOTO MESIN (KIRI) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full relative"
          >
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 h-[400px] md:h-[500px]">
                <img 
                  src="/images/installation-830-226/installation-1.jpg" 
                  alt="Industrial Machine Installation" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
             </div>
             <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-blue-50 rounded-2xl"></div>
          </motion.div>

          {/* TEKS (KANAN) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-2 block">
              {t('home.why_choose.label')}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight whitespace-pre-line">
              <Trans i18nKey="home.why_choose.title">
                Bringing European Precision to <br/><span className="text-blue-900">Indonesian Industry</span>
              </Trans>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {t('home.why_choose.desc')}
            </p>

            <div className="space-y-6">
              {reasons.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition border border-transparent hover:border-gray-100">
                   <div className="w-12 h-12 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center text-blue-900 shrink-0">
                      {item.icon}
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;