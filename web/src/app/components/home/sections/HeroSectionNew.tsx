// Homepage Hero - Carwash Build, Maintain & Grow
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const trustPoints = [
  'Design-Build Construction',
  'Equipment Sales & Install',
  'Reliable Repair & Maintenance',
  'Chemical Programs',
];

export default function HeroSectionNew() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Full-bleed background image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/imgs/HomeHero.webp"
          alt="Professional car wash construction and equipment installation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark left-to-right gradient for strong text contrast on any image */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        {/* Bottom fade into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-slate-950 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl py-20 sm:py-24 lg:py-32">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#f0da11]">
            <span className="w-8 h-0.5 bg-[#f0da11]" />
            <span>Your Midwest Carwash Builder &amp; Maintainer</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 leading-[1.1]">
            We{' '}
            <span className="inline-block bg-[#f0da11] text-black px-2 pb-0.5 rounded-md -rotate-1 shadow-lg">
              Build
            </span>
            , Service &amp; Supply Car Washes
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-[#f0da11] mb-5 leading-tight">
            Build It. Maintain It. Grow It.
          </p>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-slate-200 mb-7 max-w-xl leading-relaxed">
            From new carwash construction and equipment installation to chemical supply and
            reliable automatic car wash repair &mdash; one partner for owners across MN, ND, SD, and WI.
          </p>

          {/* Trust point chips */}
          <ul className="flex flex-wrap gap-2 mb-8">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-100 backdrop-blur-sm"
              >
                <svg className="w-3.5 h-3.5 text-[#f0da11] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {point}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-[#f0da11] text-black px-6 py-3.5 font-semibold text-sm sm:text-base rounded-none hover:bg-[#d0b211] transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
            >
              Plan My Carwash Build
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/service-maintenance"
              className="group inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/80 text-white px-6 py-3.5 font-semibold text-sm sm:text-base rounded-none hover:bg-white hover:text-slate-900 transition-all duration-200"
            >
              Get Repair &amp; Maintenance
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Yellow accent baseline */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#f0da11] to-transparent" />
    </section>
  );
}
