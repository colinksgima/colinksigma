import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// --- DATA TIM DI DALAM KOMPONEN AGAR BISA AKSES `t` ---
const AboutTeam = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "Lars Arnstaedt",
      role: t('about.team.lars_role'),
      desc: t('about.team.lars_desc'),
      img: "/images/lars.png",
      email: "lacolink2025@gmail.com",
      phone: "+62 853-1101-2421"
    },
    {
      name: "NI NYOMAN SUGI ARIANTINI",
      role: t('about.team.sugi_role'),
      desc: t('about.team.sugi_desc'),
      img: "/images/sugi.png",
      email: "sugicolink@gmail.com",
      phone: "+62 853-1382-7131"
    },
    {
      name: "NI NYOMAN SURYANINGSIH",
      role: t('about.team.surya_role'),
      desc: t('about.team.surya_desc'),
      img: "/images/surya.png",
      email: "suryacolink2025@gmail.com",
      phone: "+62 812-3761-3484"
    }
  ];

  // Variabel Animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('about.team.title')}</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8 justify-center"
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group flex flex-col"
            >
               {/* Image Section */}
               <div className="h-80 overflow-hidden bg-gray-200">
                 <img 
                   src={member.img} 
                   alt={member.name} 
                   className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" 
                 />
               </div>
               
               {/* Content Section */}
               <div className="p-8 text-center flex flex-col flex-grow">
                 <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                 <p className="text-blue-900 text-sm font-bold uppercase tracking-wider mb-3 mt-1">{member.role}</p>
                 <div className="w-10 h-0.5 bg-gray-200 mx-auto mb-4"></div>
                 
                 <p className="text-gray-500 text-sm italic leading-relaxed mb-6 flex-grow">
                   "{member.desc}"
                 </p>

                 {/* CONTACT SECTION */}
                 <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-2">
                   <a 
                     href={`mailto:${member.email}`} 
                     className="inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors group-hover:text-orange-600"
                   >
                     <Mail size={16} />
                     {member.email}
                   </a>
                   <a 
                     href={`tel:${member.phone.replace(/\s+/g, '')}`} 
                     className="inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors group-hover:text-orange-600"
                   >
                     <Phone size={16} />
                     {member.phone}
                   </a>
                 </div>

               </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutTeam;