import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const applications = [
  'Semi-tractors, trailers, and tanker fleets',
  'Municipal, refuse, and public works vehicles',
  'Transit, school bus, and mixed-fleet operations',
  'Wheel, tire, chassis, and underbody cleaning needs',
];

const capabilities = [
  'Drive-through and rollover/gantry wash configurations',
  'Touchless, friction, and hybrid heavy-duty wash packages',
  'Water recycling and reclaim-ready system options',
  'Midwest installation, parts, detergents, and service support',
];

const stats = [
  { value: '40+', label: 'Years in Heavy-Duty Wash' },
  { value: '1,000+', label: 'Systems Installed' },
  { value: 'USA', label: 'Manufactured Support Base' },
];

export default function HeavyDutyPartnerSection() {
  return (
    <section className="bg-white py-14 sm:py-16 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-stretch">
          <div className="bg-slate-950 text-white p-6 sm:p-8 lg:p-10 overflow-hidden relative">
            <div className="absolute inset-y-0 right-0 w-40 bg-linear-to-l from-[#f0da11]/10 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-[#f0da11]" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#f0da11]">
                  New Heavy-Duty Partner
                </span>
              </div>

              <div className="inline-flex items-center bg-white/5 border border-white/10 px-4 py-3 mb-6">
                <Image
                  src="/logos/interclean-logo.svg"
                  alt="InterClean heavy-duty wash systems"
                  width={170}
                  height={32}
                  className="h-7 w-auto"
                />
              </div>
              <div className="mb-5">
                <a
                  href="https://www.interclean.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-[#f0da11] transition-colors"
                >
                  Visit InterClean
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8m9 0v9" />
                  </svg>
                </a>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
                Heavy-Duty &amp; Fleet Wash Systems Powered by InterClean
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                Carwash Technologies now offers InterClean heavy-duty wash solutions for truck fleets,
                municipal operations, transit properties, and industrial vehicle yards across the Midwest.
                That gives customers a stronger path into purpose-built wash systems for oversized vehicles,
                wheel-and-chassis cleaning, reclaim-ready layouts, and long-term uptime support.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#f0da11] mb-3">
                    Built For
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-200">
                    {applications.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-1 h-2 w-2 shrink-0 bg-[#f0da11]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#f0da11] mb-3">
                    What This Adds
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-200">
                    {capabilities.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-1 h-2 w-2 shrink-0 bg-[#f0da11]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="border border-white/10 bg-white/5 px-3 py-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#f0da11]">{stat.value}</div>
                    <div className="text-[11px] sm:text-xs uppercase tracking-wide text-slate-300 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/truck-wash"
                  className="inline-flex items-center justify-center gap-2 bg-[#f0da11] text-black px-6 py-3 font-semibold hover:bg-[#d0b211] transition-colors"
                >
                  Explore Truck Wash Solutions
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3 font-semibold hover:bg-white hover:text-slate-950 transition-colors"
                >
                  Talk With Our Team
                </Link>
              </div>
            </div>
          </div>

          <div className="relative min-h-80 lg:min-h-full overflow-hidden border border-gray-200">
            <Image
              src="/imgs/interclean-fleet-truck-wash.jpg"
              alt="InterClean fleet truck wash system cleaning a heavy-duty vehicle"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
            <div className="absolute left-5 right-5 bottom-5 bg-slate-950/85 text-white p-5 border border-white/10 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f0da11] mb-2">
                Purpose-Built For Oversized Vehicles
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-200">
                Add automated fleet washing, gantry coverage, and chassis-focused cleaning for vehicles that do not fit a standard passenger-car playbook.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}