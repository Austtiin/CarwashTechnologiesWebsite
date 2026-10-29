import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const partners = [
  {
    eyebrow: 'Self-Serve Wash Systems',
    logo: { src: '/logos/ds-carwash-logo-white.svg', alt: 'D&S Car Wash Supply', width: 300, height: 125 },
    title: 'D&S IQ Self Wash',
    body: 'Smart, low-labor self-serve bays with multi-function HP/LP services, digital payment, usage reporting, and cold weather protection. Scales up to six bays.',
    points: ['Up to 6 bays', 'Up to 11 menu options', 'Freeze protection'],
    image: { src: '/imgs/partners/ds-iq-self-wash-rinse.webp', alt: 'Customer rinsing a vehicle in a D&S IQ Self Wash bay' },
    inset: { src: '/imgs/partners/ds-iq-pump-stand.webp', alt: 'D&S IQ Self Wash pump stand' },
    href: '/equipment-sales/ds-iq-self-wash',
    cta: 'Explore IQ Self Wash',
  },
  {
    eyebrow: 'Car Wash Vacuum Systems',
    logo: { src: '/logos/eurovac-logo-white.png', alt: 'Eurovac', width: 473, height: 87 },
    title: 'Eurovac Central Vacuums',
    body: 'Vacuum arches, canopies, and stanchions in your brand colors, powered by industrial central producers with hose drops at every car door.',
    points: ['Arches & canopies', 'Central producers', 'Custom site colors'],
    image: { src: '/imgs/partners/eurovac-vacuum-arches.webp', alt: 'Eurovac vacuum arches over car wash stalls' },
    inset: { src: '/imgs/partners/eurovac-central-vacuum-producer.webp', alt: 'Eurovac central vacuum producer' },
    href: '/equipment-sales/eurovac-vacuum-systems',
    cta: 'Explore Vacuum Systems',
  },
];

export default function PartnerSpotlightSection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#f0da11]" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
              New Partner Spotlight
            </span>
            <span className="h-px w-8 bg-[#f0da11]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Self-Serve Bays to <span className="text-[#d0b211]">Vacuum Lots</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            We&apos;ve added D&amp;S Car Wash Supply and Eurovac to our lineup - so the bays, the vacuums, and
            everything in between can come from one Midwest team that sells, installs, and services it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {partners.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group relative flex flex-col bg-slate-950 overflow-hidden border border-slate-800 hover:border-[#f0da11] transition-colors duration-300"
            >
              <div className="relative h-60 sm:h-72 overflow-hidden">
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-sm border border-white/10 px-3 py-2">
                  <Image src={p.logo.src} alt={p.logo.alt} width={p.logo.width} height={p.logo.height} className="h-6 sm:h-7 w-auto" />
                </div>
                <div className="hidden sm:block absolute bottom-4 right-4 w-32 h-24 overflow-hidden ring-2 ring-[#f0da11] shadow-xl">
                  <Image src={p.inset.src} alt={p.inset.alt} fill sizes="128px" className="object-cover" />
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f0da11] mb-2">{p.eyebrow}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5 flex-1">{p.body}</p>
                <ul className="flex flex-wrap gap-2 mb-6">
                  {p.points.map((pt) => (
                    <li key={pt} className="text-xs bg-white/5 text-slate-200 px-2.5 py-1 border border-white/10">
                      {pt}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center text-sm font-semibold text-white group-hover:text-[#f0da11] transition-colors">
                  {p.cta}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
