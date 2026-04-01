"use client";

import React from 'react';
import Image from 'next/image';

export default function WhyChooseUsSection() {
  const reasons = [
    'Built for Owners',
    'End-to-End Support',
    'Midwest Wash Experts',
    'Complete Site Solutions',
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/IMG_5380.webp"
          alt="Car wash facility"
          fill
          className="object-cover opacity-15"
        />
      </div>
      {/* yellow separator at top */}
      <div className="absolute inset-x-0 top-0 h-1 bg-[#f0da11] z-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14">
          {/* Text Column */}
          <div className="w-full lg:w-1/2 text-left">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-[#f0da11] mb-3 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Why Choose Carwash Technologies
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.4rem] font-bold text-white mb-3 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              Why Choose Us<span className="text-[#f0da11]">?</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white font-normal mb-6 max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Partner with a team that understands modern wash operations—equipment, chemistry, and service working together to keep
              your site running strong.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#f0da11] shadow-lg" />
                  <span className="text-sm sm:text-base font-semibold text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full lg:w-3/4 h-80 sm:h-96 lg:h-auto">
            <div className="grid grid-cols-3 gap-2 h-full">
              <div className="relative overflow-hidden bg-white/5 shadow-lg h-full">
                <Image
                  src="/imgs/Kondor_Flight.webp"
                  alt="Kondor Flight wash system"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden bg-white/5 shadow-lg h-full">
                <Image
                  src="/imgs/IMG_5384.webp"
                  alt="Express tunnel system"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden bg-white/5 shadow-lg h-full">
                <Image
                  src="/imgs/IMG_5393.webp"
                  alt="Clean vehicle exiting wash"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
