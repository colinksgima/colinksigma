import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: "01", title: "Consultation", desc: "Diskusi praktis untuk mengidentifikasi kebutuhan produksi dan efisiensi." },
  { num: "02", title: "Solution Design", desc: "Merancang resep, pemilihan mesin, atau rencana perawatan yang tepat." },
  { num: "03", title: "Implementation", desc: "Instalasi, commissioning, dan training operator secara langsung (Hands-on)." },
  { num: "04", title: "Support", desc: "Dukungan teknis berkelanjutan dan suplai spare parts original." }
];

const ServicesProcess = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">How We Work</h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
            >
              <div className="text-5xl font-black text-gray-200 absolute top-4 right-4 group-hover:text-blue-100 transition-colors">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3 relative z-10">{step.title}</h3>
              <p className="text-gray-600 text-sm relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesProcess;