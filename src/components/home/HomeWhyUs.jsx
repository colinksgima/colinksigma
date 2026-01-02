import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: <Award size={24} />,
    title: "German Certified",
    desc: "Standar kualitas master butcher asli Jerman sejak 2002."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Reliable Support",
    desc: "Dukungan teknis cepat tanggap untuk meminimalisir downtime."
  },
  {
    icon: <TrendingUp size={24} />,
    title: "End-to-End",
    desc: "Solusi lengkap dari mesin, instalasi, hingga resep produk."
  }
];

const HomeWhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* BAGIAN KIRI: FOTO MESIN */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full relative"
          >
             {/* Bingkai Foto */}
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 h-[400px] md:h-[500px]">
                {/* Foto Mesin */}
                <img 
                  src="/images/casing.jpg" // Pastikan ini foto mesin yang paling bagus
                  alt="Industrial Machine Installation" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Gradient Halus (agar foto tidak terlalu flat) */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
             </div>
             
             {/* Elemen Dekorasi di Belakang Foto */}
             <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-blue-50 rounded-2xl"></div>
          </motion.div>

          {/* BAGIAN KANAN: TEXT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-2 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Bringing European Precision to <br/>
              <span className="text-blue-900">Indonesian Industry</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Kami memahami bahwa dalam industri pengolahan daging, presisi adalah segalanya. Dengan pengalaman puluhan tahun di Jerman dan Indonesia, kami membawa standar tertinggi ke pabrik Anda.
            </p>

            {/* List Poin */}
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