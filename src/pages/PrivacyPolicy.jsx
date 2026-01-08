import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next'; // Import Hook

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2">{t('privacy.title')}</h1>
          <p className="text-gray-500 mb-10">{t('privacy.last_updated')}</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t('privacy.intro_title')}</h2>
              <p>{t('privacy.intro_desc')}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t('privacy.collect_title')}</h2>
              <p className="mb-2">{t('privacy.collect_desc')}</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><Trans i18nKey="privacy.collect_1"><strong>Personal Identification Information:</strong> Name, email address...</Trans></li>
                <li><Trans i18nKey="privacy.collect_2"><strong>Business Information:</strong> Details regarding...</Trans></li>
                <li><Trans i18nKey="privacy.collect_3"><strong>Technical Data:</strong> IP address...</Trans></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t('privacy.use_title')}</h2>
              <p>{t('privacy.use_desc')}</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>{t('privacy.use_1')}</li>
                <li>{t('privacy.use_2')}</li>
                <li>{t('privacy.use_3')}</li>
                <li>{t('privacy.use_4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t('privacy.protection_title')}</h2>
              <p>{t('privacy.protection_desc')}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t('privacy.disclosure_title')}</h2>
              <p>{t('privacy.disclosure_desc')}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t('privacy.contact_title')}</h2>
              <p>{t('privacy.contact_desc')}</p>
              <div className="mt-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p className="font-bold text-blue-900">PT. Colink Sigma Indonesia</p>
                <p>Cikarang, Bekasi, Jawa Barat, Indonesia</p>
                <p>Email: sugicolink@gmail.com</p>
                <p>Phone: +62 853-1382-7131</p>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;