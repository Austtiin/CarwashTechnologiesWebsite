import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import GenericHero from '../components/ui/GenericHero';
import StatsBand from '../components/ui/StatsBand';
import CallToActionNew from '../components/ui/CallToActionNew';
import { segments } from '../components/segments/segmentData';

export const metadata: Metadata = {
  title: 'Who We Serve | Carwash Solutions for Every Operation in MN, ND, SD, WI',
  description:
    'Carwash Technologies serves retail & c-stores, municipal & government fleets, heavy-duty & semi truck operators, dedicated wash businesses, and specialized custom projects across the Midwest.',
  keywords:
    'carwash solutions by industry, who we serve carwash, retail carwash, municipal fleet wash, truck wash builder, express tunnel chain partner, custom wash systems Minnesota',
  alternates: { canonical: '/who-we-serve' },
  openGraph: {
    title: 'Who We Serve | Carwash Technologies',
    description: 'Tailored carwash solutions for retail, municipal, heavy-duty, dedicated wash businesses, and specialized projects.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/who-we-serve',
  },
};

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
        eyebrow="Who We Serve"
        title="Carwash Solutions for Every Operation"
        highlightedWord="Every"
        subtitle="One Partner. Many Industries."
        description="From fuel retailers and municipal fleets to semi truck washes, dedicated wash chains, and custom industrial projects — we build, equip, and service the right wash for how you operate."
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
        image="/imgs/IMG_5380.webp"
        stats={[
          { value: '500+', label: 'Projects Delivered' },
          { value: '25+', label: 'Years Experience' },
          { value: '4', label: 'States Served' },
          { value: 'End-to-End', label: 'Support' },
        ]}
      />

      {/* Segment hub */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Industries We Serve</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Find Your Operation
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              Every operation washes differently. Explore the solutions built for yours.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {segments.map((seg) => (
              <Link
                key={seg.slug}
                href={`/${seg.slug}`}
                className="group relative flex flex-col bg-white p-6 border border-gray-200 border-l-4 border-l-[#f0da11] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-slate-900 text-white flex items-center justify-center mb-4 group-hover:bg-[#f0da11] group-hover:text-black transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={cardIcons[seg.slug]} />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{seg.eyebrow}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#d0b211] transition-colors">
                  {seg.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{seg.description}</p>
                <span className="mt-auto inline-flex items-center text-sm font-semibold text-gray-900 group-hover:text-[#d0b211] transition-colors">
                  Explore solutions
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToActionNew
        title="Not Sure Where You Fit?"
        description="Tell us about your site, vehicles, and volume. Our team will help you find the right wash solution and map out next steps."
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
