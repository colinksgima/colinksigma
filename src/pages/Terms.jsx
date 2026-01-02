import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2">Terms & Conditions</h1>
          <p className="text-gray-500 mb-10">Last Updated: January 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing our website and using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Intellectual Property</h2>
              <p>
                The content on this website, including but not limited to text, graphics, logos, and **project gallery images** (Installation documentation, machine photos), is the property of PT. Colink Sigma Indonesia and is protected by copyright laws. You may not reproduce or use our project photos without explicit written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Service Disclaimer</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Technical Accuracy:</strong> While we strive for "German Precision," technical advice provided on this website is for general information. Specific technical solutions require a direct consultation and site assessment.</li>
                <li><strong>Machine Brands:</strong> References to third-party brands (e.g., Handtmann, Mauting, K+G Wetter) are for descriptive purposes regarding our service capabilities. We are an independent technical partner.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Limitation of Liability</h2>
              <p>
                PT. Colink Sigma Indonesia shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or reliance on any information provided herein.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Governing Law</h2>
              <p>
                These terms shall be governed and construed in accordance with the laws of the Republic of Indonesia. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of Indonesia.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last Updated" date of these Terms and Conditions.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;