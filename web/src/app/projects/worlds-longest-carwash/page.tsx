import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import GenericHero from '../../components/ui/GenericHero';
import CallToActionNew from '../../components/ui/CallToActionNew';
import StatsBand from '../../components/ui/StatsBand';

export const metadata: Metadata = {
  title: "World's Longest Carwash | Flagship Build In Progress | Carwash Technologies",
  description:
    "Carwash Technologies is building the World's Longest Carwash — a flagship tunnel project currently under construction in the Midwest. Coming soon: full project details, specs, and grand-opening news.",
  keywords:
    "world's longest carwash, worlds longest car wash, longest car wash tunnel, longest carwash in the world, world record carwash, largest carwash tunnel, biggest car wash, flagship carwash build, record carwash tunnel, carwash construction project Minnesota, longest tunnel wash, record setting car wash, largest carwash builder Midwest, flagship tunnel wash project",
  alternates: { canonical: '/projects/worlds-longest-carwash' },
  openGraph: {
    title: "World's Longest Carwash | Flagship Build In Progress",
    description:
      "A record-setting tunnel build currently under construction. Coming soon from Carwash Technologies.",
    type: 'website',
    url: 'https://www.carwashtechnologies.com/projects/worlds-longest-carwash',
    images: ['/imgs/WLC/4763be2a-a176-492d-a14b-948bd849b563.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "World's Longest Carwash | Coming Soon",
    description: "A record-setting tunnel build currently under construction by Carwash Technologies.",
  },
};

export default function WorldsLongestCarwashPage() {
  const galleryImages = [
    '/imgs/WLC/4763be2a-a176-492d-a14b-948bd849b563.webp',
    '/imgs/WLC/7c1fca3d-3ba1-48c9-98d1-abb6f172b6c7.webp',
  ];

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
            image: 'https://www.carwashtechnologies.com/imgs/WLC/4763be2a-a176-492d-a14b-948bd849b563.webp',
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
        description="Our most ambitious build yet is taking shape right now. We're engineering a tunnel wash on a scale the industry hasn't seen — and we'll be sharing the full story soon."
        buttons={[
          { text: 'Get Project Updates', href: '/contact', variant: 'primary' },
          { text: 'View Our Projects', href: '/projects', variant: 'secondary' },
        ]}
        backgroundVariant="dark"
        showPattern
        leftImage="/imgs/WLC/4763be2a-a176-492d-a14b-948bd849b563.webp"
        compact
      />

      {/* Under-construction banner */}
      <section className="relative overflow-hidden bg-slate-900 border-y-4 border-[#f0da11]">
        {/* Hazard stripe accents */}
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
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
            Coming Soon
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Site Work Is <span className="text-[#f0da11]">Underway</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            This flagship build is currently in construction. We&apos;re keeping the full specs,
            location, and grand-opening details under wraps for now — but check back soon, or reach
            out and we&apos;ll keep you posted as it comes together.
          </p>
        </div>
      </section>

      <StatsBand
        badge="The Build"
        heading="A project on a scale of its own."
        image="/imgs/WLC/7c1fca3d-3ba1-48c9-98d1-abb6f172b6c7.webp"
        stats={[
          { value: 'Record', label: 'Setting Length' },
          { value: 'In Build', label: 'Construction Now' },
          { value: 'Turnkey', label: 'Design-Build' },
          { value: 'Soon', label: 'Grand Opening' },
        ]}
      />

      {/* Progress gallery teaser */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#f0da11]" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">From The Site</span>
              <div className="w-8 h-px bg-[#f0da11]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              A First Look at the <span className="text-[#f0da11]">Build</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              Early progress from the jobsite. More to come as construction advances.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {galleryImages.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden border border-gray-200 border-t-4 border-t-[#f0da11] shadow-sm"
              >
                <Image
                  src={src}
                  alt={`World's Longest Carwash construction progress ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToActionNew
        title="Want to Follow This Build?"
        description="Reach out and we'll keep you in the loop on the World's Longest Carwash — and talk through what a flagship-scale wash could look like for your operation."
        buttons={[
          { text: 'Get Project Updates', href: '/contact#contact-inquiry', variant: 'primary' },
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
