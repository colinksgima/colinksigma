import React from 'react';

const stats = [
  { 
    label: "Butcher Experience", 
    value: "27+", 
    desc: "German Educated (Since 1998)" // Sesuai PDF Hal 1
  },
  { 
    label: "Technical Expertise", 
    value: "15+", 
    desc: "Years Field Experience" // Sesuai PDF Hal 1
  },
  { 
    label: "Machine Brands", 
    value: "5", 
    desc: "Supported Major Brands" // Sesuai PPT (Handtmann, dll)
  },
  { 
    label: "Quality Standard", 
    value: "100%", 
    desc: "Certified Master Butcher" // Sesuai PDF Hal 1
  },
];

const Stats = () => {
  return (
    <div className="bg-gray-50 border-y border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200">
          {stats.map((stat, idx) => (
            <div key={idx} className="px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-wider text-gray-800 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500 font-medium">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;