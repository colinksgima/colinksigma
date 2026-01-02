import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-500 mb-10">Last Updated: January 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
              <p>
                PT. Colink Sigma Indonesia ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage with our services (Machine Installation, Butcher Consulting, and Supplies).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
              <p className="mb-2">We may collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and company name provided voluntarily through our "Contact Us" forms.</li>
                <li><strong>Business Information:</strong> Details regarding your production needs, machinery types, or consultation requirements.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, and usage data collected automatically via cookies to improve website performance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
              <p>We use the collected data for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>To respond to your inquiries regarding technical services or product supplies.</li>
                <li>To schedule factory visits, audits, or machine installations.</li>
                <li>To improve our website functionality and user experience.</li>
                <li>To send administrative information, such as updates to our terms or policies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Data Protection</h2>
              <p>
                We implement strict security measures to maintain the safety of your personal information. As a company operating with high professional standards ("German Precision"), we treat your business secrets and recipes with absolute confidentiality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Third-Party Disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or servicing you (e.g., machine manufacturers like Handtmann/Mauting for technical support purposes), so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contact Us</h2>
              <p>
                If you have any questions regarding this privacy policy, you may contact us at:
              </p>
              <div className="mt-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p className="font-bold text-blue-900">PT. Colink Sigma Indonesia</p>
                <p>Cikarang, Bekasi, Jawa Barat, Indonesia</p>
                <p>Email: info@colinksigma.com</p>
                <p>Phone: +62 812-3456-7890</p>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;