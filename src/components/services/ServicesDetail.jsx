import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, ChefHat, PackageCheck, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServicesDetail = () => {
  const { t } = useTranslation();

  // Kita memindahkan data ke dalam komponen agar bisa menggunakan hook `t`
  const servicesData = [
    {
      id: 1,
      title: t('services_page.detail.item1.title'),
      subtitle: t('services_page.detail.item1.subtitle'),
      desc: t('services_page.detail.item1.desc'),
      icon: <Wrench size={32} />,
      color: "bg-blue-100 text-blue-900",
      image: "/images/installation-830-226/installation-1.jpg", 
      points: t('services_page.detail.item1.points', { returnObjects: true })
    },
    {
      id: 2,
      title: t('services_page.detail.item2.title'),
      subtitle: t('services_page.detail.item2.subtitle'),
      desc: t('services_page.detail.item2.desc'),
      icon: <ChefHat size={32} />,
      color: "bg-orange-100 text-orange-600",
      image: "/images/seasoning.jpeg", 
      points: t('services_page.detail.item2.points', { returnObjects: true })
    },
    {
      id: 3,
      title: t('services_page.detail.item3.title'),
      subtitle: t('services_page.detail.item3.subtitle'),
      desc: t('services_page.detail.item3.desc'),
      icon: <PackageCheck size={32} />,
      color: "bg-green-100 text-green-700",
      image: "/images/casing3.jpg", 
      points: t('services_page.detail.item3.points', { returnObjects: true })
    }
  ];

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
                {item.points && item.points.map((point, i) => (
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