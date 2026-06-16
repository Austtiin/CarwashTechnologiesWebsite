// Homepage equipment brands logo strip
import React from 'react';
import Image from 'next/image';

const brands = [
  { name: 'PDQ', logo: '/logos/logoPDQ.webp' },
  { name: 'Belanger', logo: '/logos/logoBelanger.webp' },
  { name: "Sonny's", logo: '/logos/Sonnys_Logo-RGB.webp' },
  { name: 'PECO', logo: '/logos/peco-logo.webp' },
  { name: 'AVW', logo: '/logos/AVW-logo.webp' },
];

export default function EquipmentBrandsStrip() {
  return (
    <section className="bg-white border-y border-gray-100 py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500 mb-8">
          Authorized dealer &amp; service provider for leading carwash equipment brands
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} carwash equipment`}
                width={130}
                height={64}
                className="max-h-12 sm:max-h-14 max-w-full w-auto object-contain"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
