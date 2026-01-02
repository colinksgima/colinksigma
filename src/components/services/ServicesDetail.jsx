import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, ChefHat, PackageCheck, Check } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    // Sesuai PDF Halaman 2: Technical Services & Training
    title: "Technical Services & Training",
    subtitle: "Installation, Commissioning & Maintenance",
    desc: "Dukungan teknis lengkap untuk mesin pengolahan daging, dari instalasi hingga operasi jangka panjang. Kami memastikan produksi Anda berjalan lancar, efisien, dan aman.",
    icon: <Wrench size={32} />,
    color: "bg-blue-100 text-blue-900",
    image: "/images/installation.jpg", // Ganti dengan foto instalasi mesin (misal Handtmann)
    points: [
      "Instalasi & Commissioning Profesional",
      "Maintenance Preventif & Perbaikan (Repair)",
      "Training Operator (Handling & Hygiene)",
      "Troubleshooting Darurat & Spare Parts"
    ]
  },
  {
    id: 2,
    // Sesuai PDF Halaman 3: Butcher Master Consulting
    title: "Butcher Master Consulting",
    subtitle: "Recipe, Efficiency & Hygiene",
    desc: "Optimalkan operasi Anda dengan panduan ahli dari German Certified Master Butcher (sejak 2002). Kami membantu meningkatkan produktivitas dan kualitas produk yang konsisten.",
    icon: <ChefHat size={32} />,
    color: "bg-orange-100 text-orange-600",
    image: "/images/Lars.jpg", 
    points: [
      "Pengembangan Resep & Rasa (Texture/Flavor)",
      "Efisiensi Produksi & Alur Proses",
      "Prosedur Higiene & Keamanan Pangan (HACCP)",
      "Optimasi Peralatan & Kalibrasi"
    ]
  },
  {
    id: 3,
    // Sesuai PDF Halaman 4: High-Quality Collagen Casings
    title: "High-Quality Casings",
    subtitle: "For Sausage & Meat Production",
    desc: "Casing kolagen premium (Sapi) yang dirancang untuk produksi sosis modern. Memastikan performa pengisian yang konsisten, diameter seragam, dan 'gigitan' yang pas.",
    icon: <PackageCheck size={32} />,
    color: "bg-green-100 text-green-700",
    image: "/images/casing.jpg", 
    points: [
      "Collagen Casings (Kaliber 13-50 mm)",
      "Cocok untuk Sosis Masak, Segar & Kering",
      "Elastisitas Tinggi & Ukuran Seragam",
      "Suplai Bumbu & Premix Fungsional"
    ]
  }
];

const ServicesDetail = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        
        {servicesData.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col md:flex-row items-center gap-12 py-16 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Side */}
            <div className="md:w-1/2 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-80 md:h-[450px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/600x400?text=Service+Image"; }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>

            {/* Text Side */}
            <div className="md:w-1/2 w-full space-y-6">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.color} mb-4`}>
                {item.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {item.title}
              </h2>
              <p className="text-xl text-blue-900 font-medium border-l-4 border-orange-500 pl-4">
                {item.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                {item.desc}
              </p>
              
              <ul className="grid grid-cols-1 gap-3 pt-4">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="bg-green-100 text-green-600 p-1 rounded-full min-w-[24px]">
                      <Check size={16} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default ServicesDetail;