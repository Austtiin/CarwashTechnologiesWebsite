// Homepage equipment brands logo strip
import React from 'react';
import Image from 'next/image';

const brands = [
  { name: 'PDQ', logo: '/logos/logoPDQ.webp', url: 'https://www.opwglobal.com/pdq' },
  { name: 'Belanger', logo: '/logos/logoBelanger.webp', url: 'https://www.opwglobal.com/belanger' },
  { name: "Sonny's", logo: '/logos/Sonnys_Logo-RGB.webp', url: 'https://www.sonnysdirect.com/' },
  { name: 'PECO', logo: '/logos/peco-logo.webp', url: 'https://www.pecocarwash.com/' },
  { name: 'AVW', logo: '/logos/AVW-logo.webp', url: 'https://www.avwequipment.com/' },
  { name: 'InterClean', logo: '/logos/interclean-logo-green.png', url: 'https://www.interclean.com/' },
  { name: 'D&S Car Wash Supply', logo: '/logos/ds-carwash-logo.svg', url: 'https://dscarwash.com/' },
  { name: 'Eurovac', logo: '/logos/eurovac-logo.png', url: 'https://www.eurovac.com/industries/carwash/' },
];

export default function EquipmentBrandsStrip() {
  return (
    <section className="bg-white border-y border-gray-100 py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500 mb-8">
          Authorized dealer &amp; service provider for leading carwash equipment brands
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 sm:gap-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${brand.name}`}
              className="flex items-center justify-center py-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} carwash equipment`}
                width={130}
                height={64}
                className="max-h-12 sm:max-h-14 max-w-full w-auto object-contain"
                priority={index < 4}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
