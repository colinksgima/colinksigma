import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, ChefHat, Package } from 'lucide-react';

const services = [
  { icon: <Wrench size={32}/>, title: "Technical Service", desc: "Instalasi & perbaikan mesin presisi tinggi.", color: "bg-blue-100 text-blue-900" },
  { icon: <ChefHat size={32}/>, title: "Butcher Consulting", desc: "Optimasi resep & efisiensi produksi.", color: "bg-orange-100 text-orange-600" },
  { icon: <Package size={32}/>, title: "Premium Supplies", desc: "Casing kolagen & bumbu berkualitas.", color: "bg-green-100 text-green-700" },
];

const HomeServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
           <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Our Core Competencies</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((srv, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl border border-gray-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 ${srv.color}`}>
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{srv.title}</h3>
              <p className="text-gray-500 mb-6">{srv.desc}</p>
              <Link to="/services" className="inline-flex items-center text-blue-900 font-bold hover:underline">
                Learn More <ArrowRight size={16} className="ml-1"/>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;