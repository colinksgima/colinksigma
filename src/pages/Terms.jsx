import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation, Trans } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      {/* --- SEO CONFIG (DIPERBAIKI) --- */}
      <Helmet>
        {/* Gunakan pemisah "|" agar rapi */}
        <title>{t('terms.title')} | Legal - PT. Colink Sigma Indonesia</title>
        
        {/* PENTING: Gunakan t() agar deskripsi berubah sesuai bahasa */}
        {/* Kita ambil 150 karakter pertama dari paragraf persetujuan sebagai deskripsi singkat */}
        <meta name="description" content={t('terms.agreement_desc').substring(0, 150)} />
        
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* ------------------------------- */}

      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2">{t('terms.title')}</h1>
          <p className="text-gray-500 mb-10">{t('terms.last_updated')}</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t('terms.agreement_title')}</h2>
              <p>{t('terms.agreement_desc')}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t('terms.ip_title')}</h2>
              <p>
                <Trans i18nKey="terms.ip_desc">
                  The content on this website... <strong>project gallery images</strong> ...
                </Trans>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t('terms.disclaimer_title')}</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><Trans i18nKey="terms.disclaimer_1"><strong>Technical Accuracy:</strong> While we strive...</Trans></li>
                <li><Trans i18nKey="terms.disclaimer_2"><strong>Machine Brands:</strong> References to third-party...</Trans></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t('terms.liability_title')}</h2>
              <p>{t('terms.liability_desc')}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t('terms.law_title')}</h2>
              <p>{t('terms.law_desc')}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t('terms.changes_title')}</h2>
              <p>{t('terms.changes_desc')}</p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;