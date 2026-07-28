import React from 'react';
import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import GenericHero from '../../components/ui/GenericHero';
import CallToActionNew from '../../components/ui/CallToActionNew';
import StatsBand from '../../components/ui/StatsBand';
import WLCGallery from '../../components/ui/WLCGallery';
import { type GalleryImage } from '../../components/ui/ProjectLightboxGallery';

export const metadata: Metadata = {
  title: "World's Longest Carwash | Flagship Build In Progress | Carwash Technologies",
  description:
    "Carwash Technologies is building the World's Longest Carwash — a record-setting express tunnel currently under construction in the Midwest. See the first photos from the job site.",
  keywords:
    "world's longest carwash, worlds longest car wash, longest car wash tunnel, longest carwash in the world, world record carwash, largest carwash tunnel, biggest car wash, flagship carwash build, record carwash tunnel, carwash construction project Minnesota, longest tunnel wash, record setting car wash, largest carwash builder Midwest, flagship tunnel wash project",
  alternates: { canonical: '/projects/worlds-longest-carwash' },
  openGraph: {
    title: "World's Longest Carwash | Flagship Build In Progress",
    description:
      "A record-setting tunnel build currently under construction. First photos from the job site — Carwash Technologies.",
    type: 'website',
    url: 'https://www.carwashtechnologies.com/projects/worlds-longest-carwash',
    images: ['/imgs/projects/WLC/20260720_095018.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "World's Longest Carwash | Job Site Photos",
    description: "A record-setting tunnel build under construction by Carwash Technologies. First look inside.",
  },
};

const WLC_BASE = '/imgs/projects/WLC';

function loadGalleryImages(): GalleryImage[] {
  try {
    const wlcDir = path.join(process.cwd(), 'public/imgs/projects/WLC');
    return fs
      .readdirSync(wlcDir)
      .filter(f => /\.(jpg|jpeg|webp|png)$/i.test(f))
      .sort()
      .map(file => ({
        src: `${WLC_BASE}/${file}`,
        alt: "World's Longest Carwash construction — job site photo",
      }));
  } catch {
    return [];
  }
}

const galleryImages = loadGalleryImages();

export default function WorldsLongestCarwashPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: "World's Longest Carwash",
            description:
              "A record-setting tunnel carwash currently under construction by Carwash Technologies — the company's flagship design-build project in the Midwest.",
            url: 'https://www.carwashtechnologies.com/projects/worlds-longest-carwash',
            image: 'https://www.carwashtechnologies.com/imgs/projects/WLC/20260720_095018.jpg',
            creator: {
              '@type': 'LocalBusiness',
              name: 'Carwash Technologies',
              url: 'https://www.carwashtechnologies.com',
              telephone: '+1-612-408-9010',
            },
          }),
        }}
      />

      <GenericHero
        eyebrow="Flagship Project · Now Building"
        title="The World's Longest Carwash"
        highlightedWord="Longest"
        subtitle="A Record-Setting Tunnel, Under Construction"
        description="Our most ambitious build yet is taking shape right now. We're engineering a tunnel wash on a scale the industry hasn't seen — and we're sharing the first photos as it comes together."
        buttons={[
          { text: 'Get Project Updates', href: '/contact', variant: 'primary' },
          { text: 'View All Projects', href: '/projects', variant: 'secondary' },
        ]}
        backgroundVariant="dark"
        showPattern
        leftImage="/imgs/projects/WLC/20260720_095018.jpg"
        compact
      />

      {/* Under-construction banner */}
      <section className="relative overflow-hidden bg-slate-900 border-y-4 border-[#f0da11]">
        <div
          className="absolute inset-x-0 top-0 h-2 opacity-90"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #f0da11 0, #f0da11 16px, #0f172a 16px, #0f172a 32px)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-2 opacity-90"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #f0da11 0, #f0da11 16px, #0f172a 16px, #0f172a 32px)',
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <span className="inline-flex items-center gap-2 bg-[#f0da11] text-slate-900 text-xs font-bold uppercase tracking-widest px-4 py-2 mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
            Active Construction
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Site Work Is <span className="text-[#f0da11]">Underway</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            This flagship build is currently in active construction. The full specs, exact location,
            and grand-opening details are coming soon — but check back or reach out and we&apos;ll
            keep you posted as it comes together.
          </p>
        </div>
      </section>

      <StatsBand
        badge="The Build"
        heading="A project on a scale of its own."
        image="/imgs/projects/WLC/20260720_100923.jpg"
        stats={[
          { value: 'Record', label: 'Setting Length' },
          { value: '36+', label: 'Job Site Photos' },
          { value: 'Turnkey', label: 'Design-Build' },
          { value: 'Soon', label: 'Grand Opening' },
        ]}
      />

      {/* Teaser specs */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">What&apos;s Being Built</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              The Scale of{' '}
              <span className="inline-block bg-[#f0da11] text-black px-2 pb-0.5 -rotate-1">
                What&apos;s Coming
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              Full details drop at grand opening. Here&apos;s what we can share right now.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                title: 'Record-Setting Tunnel Length',
                body: 'This build spans more wash equipment than any commercial conveyor tunnel we have seen constructed. The kind of project that redefines what a flagship wash looks like.',
              },
              {
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                title: 'Express-Format Throughput',
                body: 'Designed from the start for high-volume, high-speed operation. Every bay, every arch, every dryer positioned to move cars at a scale nobody else has attempted.',
              },
              {
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
                title: 'Full Design-Build by Our Team',
                body: 'Planning, civil, equipment, installation, startup — every phase is our work. No outsourcing. This is what 50+ years of combined experience looks like at full scale.',
              },
            ].map(card => (
              <div
                key={card.title}
                className="bg-white border border-gray-200 p-6 sm:p-7"
              >
                <div className="w-11 h-11 bg-slate-900 text-white flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={card.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indoor vacuum showcase */}
      <section className="bg-slate-900 py-14 sm:py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text side */}
            <div>
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#f0da11]" />
                <span className="text-sm font-semibold text-[#f0da11] uppercase tracking-wider">Indoor Vacuum Hall</span>
                <div className="w-8 h-px bg-[#f0da11]" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                Vacuum Space on a{' '}
                <span className="inline-block bg-[#f0da11] text-black px-2 pb-0.5 -rotate-1">
                  Massive Scale
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed">
                Minnesota winters are brutal. Rain, snow, freezing temps — nobody wants to vacuum their car in the elements. That&apos;s why this build includes one of the largest fully enclosed, climate-controlled indoor vacuum halls ever constructed at a carwash.
              </p>
              <p className="text-base text-slate-400 mb-8 leading-relaxed">
                The room you&apos;re looking at is enormous — high ceilings, open floor, built to accommodate serious capacity. Customers drive in, vacuum in total comfort, and leave with a clean car no matter what&apos;s happening outside.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', text: 'Fully enclosed, climate-controlled interior' },
                  { icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z', text: 'Beats Minnesota snow, wind, and freezing temps' },
                  { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', text: 'Scaled for high customer volume — no crowding' },
                  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', text: 'High ceilings and wide bays for easy maneuvering' },
                ].map(item => (
                  <li key={item.text} className="flex items-start gap-3">
                    <div className="mt-0.5 w-9 h-9 shrink-0 bg-[#f0da11] flex items-center justify-center">
                      <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <span className="text-slate-200 text-sm sm:text-base leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Photo side */}
            <div className="relative">
              <div className="absolute -inset-2 bg-[#f0da11] opacity-10 rounded-sm" aria-hidden="true" />
              <div className="relative border-2 border-[#f0da11]/30 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/imgs/projects/WLC/20260720_095815.jpg"
                  alt="Massive indoor vacuum hall under construction — World's Longest Carwash"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent px-5 py-4">
                  <p className="text-white text-sm font-semibold">Indoor Vacuum Hall — July 2026</p>
                  <p className="text-slate-300 text-xs mt-0.5">World&apos;s Longest Carwash · Under Construction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full photo gallery */}
      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">From The Job Site</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Construction Progress —{' '}
              <span className="text-[#d0b211]">July 2026</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              {galleryImages.length} photos from the job site. Click any photo to view full size.
            </p>
          </div>

          <WLCGallery images={galleryImages} />
        </div>
      </section>

      <CallToActionNew
        title="Want to Follow This Build?"
        description="Reach out and we'll keep you in the loop on the World's Longest Carwash — and talk through what a flagship-scale wash could look like for your operation."
        buttons={[
          { text: 'Get Project Updates', href: '/contact', variant: 'primary' },
          { text: 'See Who We Serve', href: '/who-we-serve', variant: 'secondary' },
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


