import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactInfo = () => {
  const { t } = useTranslation();

  // Data dipindah ke dalam komponen untuk akses `t`
  const contactDetails = [
    {
      icon: <MapPin size={28} />,
      title: t('contact_page.info.office_title'),
      desc: t('contact_page.info.office_desc'),
      sub: t('contact_page.info.office_sub'),
      color: "bg-blue-100 text-blue-900",
      href: "https://www.google.com/maps/dir/?api=1&destination=$-6.339420,107.164530", // Pastikan link maps benar
      isLink: true
    },
    {
      icon: <Phone size={28} />,
      title: t('contact_page.info.call_title'),
      desc: "+62 812-3456-7890",
      sub: t('contact_page.info.call_sub'),
      color: "bg-orange-100 text-orange-600",
      href: "tel:+6281234567890",
      isLink: true
    },
    {
      icon: <Mail size={28} />,
      title: t('contact_page.info.email_title'),
      desc: "lacolink2025@gmail.com",
      sub: t('contact_page.info.email_sub'),
      color: "bg-green-100 text-green-700",
      href: "mailto:lacolink2025@gmail.com",
      isLink: true
    },
    {
      icon: <Clock size={28} />,
      title: t('contact_page.info.hours_title'),
      desc: t('contact_page.info.hours_desc'),
      sub: t('contact_page.info.hours_sub'),
      color: "bg-gray-100 text-gray-700",
      href: null,
      isLink: false 
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 bg-white -mt-10 relative z-20">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactDetails.map((item, index) => {
            const Component = item.isLink ? motion.a : motion.div;
            
            return (
              <Component 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                href={item.href} 
                target={item.title === t('contact_page.info.office_title') ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 ${
                  item.isLink ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4 ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className={`font-medium ${item.isLink ? 'text-blue-900 hover:text-orange-500 transition-colors' : 'text-gray-800'}`}>
                  {item.desc}
                </p>
                <p className="text-gray-500 text-sm mt-1">{item.sub}</p>
              </Component>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;