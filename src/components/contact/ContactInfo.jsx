import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: <MapPin size={28} />,
    title: "Head Office",
    desc: "Lippo Cikarang, Bekasi",
    sub: "Jawa Barat, Indonesia",
    color: "bg-blue-100 text-blue-900",
    // Link ke Google Maps dengan koordinat kantor Anda
    href: "https://www.google.com/maps/search/?api=1&query=-6.339420,107.164530",
    isLink: true
  },
  {
    icon: <Phone size={28} />,
    title: "Call Us",
    desc: "+62 812-3456-7890",
    sub: "Mon-Fri from 8am to 5pm",
    color: "bg-orange-100 text-orange-600",
    // Link telepon (tel protocol)
    href: "tel:+6281234567890",
    isLink: true
  },
  {
    icon: <Mail size={28} />,
    title: "Email Us",
    // Email baru sesuai request
    desc: "lacolink2025@gmail.com",
    sub: "We reply within 24 hours",
    color: "bg-green-100 text-green-700",
    // Link email (mailto protocol)
    href: "mailto:lacolink2025@gmail.com",
    isLink: true
  },
  {
    icon: <Clock size={28} />,
    title: "Working Hours",
    desc: "Monday - Friday",
    sub: "08:00 AM - 05:00 PM",
    color: "bg-gray-100 text-gray-700",
    href: null,
    isLink: false // Jam kerja tidak perlu diklik
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ContactInfo = () => {
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
            // Menentukan apakah elemen pembungkusnya <a> (link) atau <div> (biasa)
            const Component = item.isLink ? motion.a : motion.div;
            
            return (
              <Component 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                href={item.href} // Property ini hanya aktif jika Component adalah 'motion.a'
                target={item.title === "Head Office" ? "_blank" : undefined} // Buka tab baru hanya untuk Maps
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