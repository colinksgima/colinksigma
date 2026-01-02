import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, ExternalLink, Loader2 } from 'lucide-react'; // Tambah Loader2

// --- LEAFLET IMPORTS ---
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const ContactForm = () => {
  const position = [-6.339420, 107.164530];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Ganti URL ini jika server sudah di-deploy online
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', subject: 'General Inquiry', message: '' });
        alert("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.");
      } else {
        setStatus('error');
        alert("Gagal mengirim pesan. Silakan coba lagi.");
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      alert("Terjadi kesalahan koneksi server.");
    } finally {
      setStatus('idle');
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl">
          
          {/* --- LEFT: FORMULIR --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 p-10 md:p-14"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-900 focus:ring-0 outline-none transition" 
                    placeholder="John" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-900 focus:ring-0 outline-none transition" 
                    placeholder="Doe" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-900 focus:ring-0 outline-none transition" 
                  placeholder="john@company.com" 
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-900 focus:ring-0 outline-none transition"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Machine Installation">Machine Installation</option>
                  <option value="Casing Supply">Casing Supply</option>
                  <option value="Consulting Request">Consulting Request</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-900 focus:ring-0 outline-none transition" 
                  placeholder="Tell us about your needs..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-blue-900 text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition shadow-lg flex items-center justify-center gap-2 disabled:bg-blue-400"
              >
                {status === 'loading' ? (
                  <>Sending... <Loader2 className="animate-spin" size={18} /></>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>

          {/* --- RIGHT: MAP --- */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="lg:w-1/2 bg-gray-200 relative min-h-[500px] lg:min-h-full"
          >
             <MapContainer 
                center={position} 
                zoom={16} 
                scrollWheelZoom={false}
                className="h-full w-full absolute inset-0 z-0"
             >
                <TileLayer
                  attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    <div className="text-center p-2">
                      <strong className="text-blue-900 text-sm">PT. Colink Sigma Indonesia</strong><br />
                      <span className="text-xs text-gray-600">Jl. Gunung Patuha No 72</span>
                    </div>
                  </Popup>
                </Marker>
             </MapContainer>
             
             <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-orange-500 z-[400]">
               <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
                 <MapPin className="text-orange-500" size={20}/> Our Office
               </h4>
               <p className="text-sm text-gray-700 leading-relaxed font-medium mb-5">
                 Kompleks Dago Villa, Jl. Gunung Patuha No 72,<br />
                 Kel. Cibatu, Kec. Cikarang Selatan,<br />
                 Lippo Cikarang - Bekasi, Jawa Barat 17550.
               </p>
               <a 
                 href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-orange-500 transition-colors shadow-md text-sm"
               >
                 Get Directions <ExternalLink size={16} />
               </a>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;