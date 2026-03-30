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
      {/* yellow separator at top */}
      <div className="absolute inset-x-0 top-0 h-1 bg-[#f0da11]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Text Column */}
          <div className="w-full lg:w-1/2 text-left">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-[#f0da11] mb-3">
              Why Choose Carwash Technologies
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.4rem] font-bold text-white mb-3 leading-tight">
              Why Choose Us?
            </h2>
            <p className="text-sm sm:text-base text-slate-200 mb-6 max-w-xl">
              Partner with a team that understands modern wash operations—equipment, chemistry, and service working together to keep
              your site running strong.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#f0da11]" />
                  <span className="text-sm sm:text-base font-semibold text-slate-100">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-3 gap-3 sm:gap-4 h-full">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-white/5 shadow-lg" style={{ aspectRatio: '3/5' }}>
                <Image
                  src="/imgs/BelangerWashBay.webp"
                  alt="High-performance tunnel wash in action"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-white/5 shadow-lg" style={{ aspectRatio: '3/5' }}>
                <Image
                  src="/imgs/BelangerTunnel.webp"
                  alt="Express tunnel system"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-white/5 shadow-lg" style={{ aspectRatio: '3/5' }}>
                <Image
                  src="/imgs/SpinLite.webp"
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
