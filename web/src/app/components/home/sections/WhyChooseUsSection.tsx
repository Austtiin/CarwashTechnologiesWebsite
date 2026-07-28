"use client";

import React from 'react';
import Image from 'next/image';
import DarkSectionBackdrop from '../../ui/DarkSectionBackdrop';

const reasons = [
  {
    title: 'Built for Owners',
    description: 'Solutions designed around throughput, uptime, and profitability — not just hardware.',
    icon: 'M3 13l4 4L13 7m0 0v6m0-6h6',
  },
  {
    title: 'End-to-End Support',
    description: 'Design, build, equip, supply, and service — one accountable partner start to finish.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Midwest Wash Experts',
    description: 'Local crews who know the climate, the codes, and the operators across MN, ND, SD, and WI.',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'Complete Site Solutions',
    description: 'Equipment, chemistry, and service working together to keep your site running strong.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <DarkSectionBackdrop image="/imgs/IMG_5380.webp" imageOpacity={10} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: featured image */}
          <div className="relative h-72 sm:h-96 lg:h-[30rem] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <Image
              src="/imgs/IMG_5384.webp"
              alt="Carwash Technologies express tunnel system"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
            {/* Floating stat badge */}
            <div className="absolute bottom-5 left-5 rounded-xl bg-[#f0da11] text-black px-5 py-3 shadow-lg">
              <div className="text-2xl font-bold leading-none">4 States</div>
              <div className="text-xs font-semibold uppercase tracking-wide">MN · ND · SD · WI</div>
            </div>
          </div>

          {/* Right: content */}
          <div className="text-left">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-[#f0da11] mb-3">
              Why Choose Carwash Technologies
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-white mb-4 leading-tight">
              One Partner for the{' '}
              <span className="text-[#f0da11]">Whole Wash</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-xl leading-relaxed">
              Partner with a team that understands modern wash operations — equipment, chemistry, and service
              working together to keep your site running strong.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 hover:border-[#f0da11]/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#f0da11]/15 text-[#f0da11] flex items-center justify-center mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={reason.icon} />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{reason.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
