import React from 'react';
import Image from 'next/image';

interface Manufacturer {
  name: string;
  logo: string;
  alt: string;
}

interface TrustedChemicalPartnersProps {
  manufacturers: Manufacturer[];
}

export default function TrustedChemicalPartners({ manufacturers }: TrustedChemicalPartnersProps) {
  return (
    <section className="py-20 bg-white relative">

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Our Partners
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted Chemical <span className="text-[#f0da11]">Products</span>
          </h2>
          
          <p className="text-lg text-gray-600">
            We partner with leading chemical manufacturers to provide you with the highest quality wash solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center max-w-4xl mx-auto">
          {manufacturers.map((manufacturer, index) => (
            <div key={manufacturer.name} className="group hover:scale-110 transition-transform duration-300">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <Image
                  src={manufacturer.logo}
                  alt={manufacturer.alt}
                  width={150}
                  height={80}
                  className="h-30 w-auto object-contain"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

