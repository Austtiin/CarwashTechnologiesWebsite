import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import GenericHero from '../components/ui/GenericHero';
import StatsBand from '../components/ui/StatsBand';
import CallToActionNew from '../components/ui/CallToActionNew';
import { segments } from '../components/segments/segmentData';

export const metadata: Metadata = {
  title: 'Applications | Carwash Solutions for Every Operation in MN, ND, SD, WI',
  description:
    'Explore carwash applications for retail fuel sites, municipal fleets, heavy-duty truck wash operations, dedicated wash businesses, and specialized custom projects across the Midwest.',
  keywords:
    'carwash applications, wash system applications, retail carwash, municipal fleet wash, truck wash builder, express tunnel chain partner, custom wash systems Minnesota',
  alternates: { canonical: '/who-we-serve' },
  openGraph: {
    title: 'Applications | Carwash Technologies',
    description: 'Application-specific wash solutions for retail, municipal, heavy-duty, dedicated wash businesses, and specialized projects.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/who-we-serve',
  },
};

const featuredPartners = [
  { name: 'InterClean', logo: '/logos/interclean-logo-green.png', url: 'https://www.interclean.com/' },
  { name: 'PDQ', logo: '/logos/logoPDQ.webp', url: 'https://www.opwglobal.com/pdq' },
  { name: 'Belanger', logo: '/logos/logoBelanger.webp', url: 'https://www.opwglobal.com/belanger' },
  { name: 'PECO', logo: '/logos/peco-logo.webp', url: 'https://www.pecocarwash.com/' },
  { name: "Sonny's", logo: '/logos/Sonnys_Logo-RGB.webp', url: 'https://www.sonnysdirect.com/' },
  { name: 'AVW', logo: '/logos/AVW-logo.webp', url: 'https://www.avwequipment.com/' },
  { name: 'D&S Car Wash Supply', logo: '/logos/ds-carwash-logo.svg', url: 'https://dscarwash.com/' },
  { name: 'Eurovac', logo: '/logos/eurovac-logo.png', url: 'https://www.eurovac.com/industries/carwash/' },
];

const featuredSystems: Record<string, string[]> = {
  'retail-cstore-carwash': ['In-bay automatics', 'Fuel-site wash programs'],
  'municipal-fleet-wash': ['Touchless public-works washing', 'Reclaim-ready municipal fleets'],
  'truck-wash': ['Drive-through heavy-duty wash', 'Wheel and chassis cleaning'],
  'dedicated-wash-business': ['High-throughput tunnels', 'Multi-site standardization'],
  'specialized-wash': ['Custom process wash', 'Automation and controls'],
};

const featuredSource: Record<string, string> = {
  'retail-cstore-carwash': 'Retail applications',
  'municipal-fleet-wash': 'InterClean municipal systems',
  'truck-wash': 'InterClean heavy-duty systems',
  'dedicated-wash-business': 'Tunnel and express systems',
  'specialized-wash': 'Custom-engineered systems',
};

const applicationTypes = [
  {
    title: 'Truck & Fleet',
    href: '/truck-wash',
    image: '/imgs/partners/ds-large-vehicle-wash.webp',
    description: 'Semis, trailers, tanker fleets, and heavy-duty drive-through wash operations.',
    partners: ['InterClean', 'D&S'],
  },
  {
    title: 'Municipal & Public Works',
    href: '/municipal-fleet-wash',
    image: '/imgs/partners/interclean-refuse-truck-wash.webp',
    description: 'Salt trucks, refuse fleets, city buses, DOT yards, and reclaim-ready public-sector sites.',
    partners: ['InterClean'],
  },
  {
    title: 'Bus & Transit',
    href: '/municipal-fleet-wash',
    image: '/imgs/interclean-municipal-wash.jpeg',
    description: 'Transit properties and bus cleaning applications that need touchless, hybrid, or gantry systems.',
    partners: ['InterClean'],
  },
  {
    title: 'Retail Fuel & C-Store',
    href: '/retail-cstore-carwash',
    image: '/imgs/partners/ds-iq-self-serve-bays.webp',
    description: 'Convenience-store and fuel-retail wash applications with in-bay, self-serve, and express options.',
    partners: ['PDQ', 'PECO', 'D&S'],
  },
  {
    title: 'Express Tunnel Operators',
    href: '/dedicated-wash-business',
    image: '/imgs/partners/avw-tunnel-wash-lights.webp',
    description: 'High-throughput tunnel environments built to maximize wash volume and membership growth.',
    partners: ['Belanger', "Sonny's", 'Eurovac'],
  },
  {
    title: 'Custom & Industrial',
    href: '/specialized-wash',
    image: '/imgs/Kondor_Flight.webp',
    description: 'Specialty applications, industrial wash challenges, and one-off engineered systems.',
    partners: ['AVW', 'InterClean'],
  },
];

// Short icon per segment for the hub cards.
const cardIcons: Record<string, string> = {
  'retail-cstore-carwash': 'M13 10V3L4 14h7v7l9-11h-7z',
  'municipal-fleet-wash': 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  'truck-wash': 'M3 13h13l2 3h3v-4l-2-3h-2V6H3v7zm3 4a2 2 0 100-4 2 2 0 000 4zm11 0a2 2 0 100-4 2 2 0 000 4z',
  'dedicated-wash-business': 'M3 12h18M6 16h12M8 8h8',
  'specialized-wash': 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z',
};

export default function WhoWeServePage() {
  return (
    <div className="min-h-screen">
      <GenericHero
        eyebrow="Applications"
        title="Wash Systems by Application"
        highlightedWord="Application"
        subtitle="One Partner. Multiple Wash Environments."
        description="From fuel retailers and municipal fleets to semi truck washes, dedicated wash chains, and custom industrial projects, explore the applications and partner systems built for how you operate."
        buttons={[
          { text: 'Request a Consultation', href: '/contact', variant: 'primary' },
          { text: 'View Our Work', href: '/projects', variant: 'secondary' },
        ]}
        leftImage="/imgs/IMG_5387.webp"
        compact
      />

      <StatsBand
        badge="Midwest Carwash Partner"
        heading="Tailored wash solutions, MN · ND · SD · WI."
        image="/imgs/partners/eurovac-vacuums-night.webp"
        stats={[
          { value: '500+', label: 'Projects Delivered' },
          { value: '50+', label: 'Yrs Combined Exp.' },
          { value: '4', label: 'States Served' },
          { value: 'End-to-End', label: 'Support' },
        ]}
      />

      <section className="bg-slate-950 py-14 sm:py-16 border-y border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-[#f0da11] uppercase tracking-wider">Browse by Application Type</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Start With the Vehicles You Wash
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Truck, municipal, bus, retail, tunnel, or custom. Jump straight to the application type that matches your operation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {applicationTypes.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative min-h-72 overflow-hidden border border-white/10"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />
                <div className="relative z-10 flex h-full flex-col justify-end p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.partners.map((partner) => (
                      <span key={partner} className="border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                        {partner}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#f0da11] transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-200 leading-relaxed mb-4">{item.description}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-white group-hover:text-[#f0da11] transition-colors">
                    See matching applications
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Segment hub */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Applications</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Find Your Wash Environment
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              Every operation washes differently. Explore the applications, partner systems, and wash configurations built for yours.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {segments.map((seg) => (
              <Link
                key={seg.slug}
                href={`/${seg.slug}`}
                className="group relative flex min-h-104 flex-col overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <Image
                  src={seg.heroImage}
                  alt={seg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-slate-950/10" />
                <div className="relative z-10 flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-11 h-11 bg-white/10 text-white flex items-center justify-center backdrop-blur-sm group-hover:bg-[#f0da11] group-hover:text-black transition-colors duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={cardIcons[seg.slug]} />
                      </svg>
                    </div>
                    <span className="inline-flex border border-white/15 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm">
                      {featuredSource[seg.slug]}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#f0da11] uppercase tracking-wider mb-2">{seg.eyebrow}</p>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f0da11] transition-colors">
                    {seg.title}
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed mb-5">{seg.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {featuredSystems[seg.slug].map((item) => (
                      <span key={item} className="border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="mt-auto inline-flex items-center text-sm font-semibold text-white group-hover:text-[#f0da11] transition-colors">
                  Explore solutions
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-16 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Partner Systems</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Trusted Wash System <span className="text-[#d0b211]">Partners</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              Explore the manufacturers behind the systems we specify across retail, fleet, municipal, and heavy-duty applications.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 items-stretch">
            {featuredPartners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-28 items-center justify-center border border-gray-200 bg-white p-5 shadow-sm hover:border-[#f0da11] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={56}
                  className="max-h-14 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <CallToActionNew
        title="Not Sure Where You Fit?"
        description="Tell us about your site, vehicles, and volume. Our team will help you find the right application, partner system, and next steps."
        buttons={[
          { text: 'Talk to Our Team', href: '/contact', variant: 'primary' },
          { text: 'View Services', href: '/services', variant: 'secondary' },
        ]}
        contactInfo={{
          phone: '(612) 408-9010',
          address: '322 19th St. SW<br />Forest Lake, MN 55025',
          showContactCard: true,
        }}
      />
    </div>
  );
}
