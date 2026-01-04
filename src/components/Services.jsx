import React from 'react';
import { services, featuredProduct } from '../data';
import { ArrowRight, Check } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services & Products</h2>
          <div className="w-24 h-1.5 bg-orange-500 mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive solutions tailored to your needs. From technical maintenance to premium ingredients.
          </p>
        </div>

        {/* Services Grid (Style EnBW: Clean Cards) */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div key={index} className="group flex flex-col h-full bg-white border border-gray-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300">
              {/* Icon / Image Placeholder Area */}
              <div className="h-2 bg-blue-900 w-full group-hover:bg-orange-500 transition-colors"></div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6 p-4 bg-gray-50 w-fit rounded-full group-hover:bg-blue-50 transition-colors">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  <ul className="space-y-3 mb-6">
                     {service.items.map((item, i) => (
                       <li key={i} className="flex items-start text-sm text-gray-700">
                         <span className="mr-2 text-orange-500">•</span> {item}
                       </li>
                     ))}
                  </ul>
                  <span className="inline-flex items-center text-blue-900 font-bold text-sm cursor-pointer group-hover:underline">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Product (Style "Downloads/Reports" EnBW) */}
        <div className="bg-gray-900 text-white p-8 md:p-16 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
               <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2 block">Featured Product</span>
               <h3 className="text-3xl md:text-4xl font-bold mb-6">{featuredProduct.title}</h3>
               <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                 {featuredProduct.description}
               </p>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {featuredProduct.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <Check className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
               </ul>
               <button className="bg-white text-gray-900 px-8 py-3 font-bold hover:bg-gray-100 transition inline-flex items-center">
                 Download Brochure <ArrowRight className="ml-2 w-4 h-4" />
               </button>
            </div>
            <div className="md:w-1/2 w-full">
               <img 
                 src="images/casing.jpg" 
                 alt="Casing Product" 
                 className="w-full h-80 object-cover shadow-2xl border border-gray-700"
               />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;