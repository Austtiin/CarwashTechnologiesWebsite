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
    <section className="py-14 sm:py-16 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#f0da11]" />
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Our Partners</span>
            <div className="w-8 h-px bg-[#f0da11]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Trusted Chemical <span className="text-[#f0da11]">Products</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600">
            We partner with leading chemical manufacturers to provide the highest quality wash solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-stretch justify-items-stretch max-w-4xl mx-auto">
          {manufacturers.map((manufacturer, index) => (
            <div
              key={manufacturer.name}
              className="flex h-32 items-center justify-center bg-slate-50 p-6 border border-gray-200 shadow-sm hover:border-[#f0da11] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={manufacturer.logo}
                alt={manufacturer.alt}
                width={150}
                height={80}
                className="max-h-16 sm:max-h-20 max-w-full w-auto object-contain"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

