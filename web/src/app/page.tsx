import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroSectionNew from './components/home/sections/HeroSectionNew';
import EquipmentBrandsStrip from './components/home/sections/EquipmentBrandsStrip';
import ConsultationCTA from './components/home/sections/ConsultationCTA';
import ServicesSectionNew from './components/home/sections/ServicesSectionNew';
import WhyChooseUsSection from './components/home/sections/WhyChooseUsSection';

export const metadata: Metadata = {
  title: 'Midwest Carwash Builder, Parts & Contractor | Gas Station, Self-Service, Heavy Duty',
  description: 'Leading Midwest carwash builder and contractor specializing in gas station carwashes, self-service carwash parts, heavy duty truck wash systems, express tunnel builder, car dealership installations, touchless systems, and automatic carwash repair across MN, ND, SD, WI.',
  keywords: 'midwest carwash builder, gas station carwash builder Minnesota, self service carwash parts MN, heavy duty carwash builder, carwash contractor Minnesota, express carwash builder, car dealership carwash installation, touchless carwash systems Minnesota, self serve car wash builder MN, convenience store carwash installation, automatic carwash builder Minnesota, tunnel carwash contractor, in bay automatic builder, commercial carwash builder MN, industrial carwash contractor Minnesota, municipal carwash builder, fleet wash contractor, semi truck wash builder Minnesota, bus wash systems builder, RV wash equipment installation, car wash construction Minnesota, carwash design build, turnkey carwash contractor, carwash equipment parts supplier MN, carwash parts distributor Minnesota, automatic car wash repair Minnesota, carwash modernization services, carwash retrofit contractor, priority carwash service, car wash chemicals minnesota, carwash maintenance contractor MN, carwash technician services, vehicle wash equipment supplier, automated car wash machine minnesota, car wash automation equipment, tunnel wash systems, track wash installation, carwash site development, worlds longest carwash, world record carwash, longest carwash tunnel, largest carwash builder Minnesota, biggest car wash tunnel, flagship carwash build',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Midwest Carwash Builder | Gas Station, Self-Service, Heavy Duty Contractor',
    description: 'Leading Midwest carwash builder specializing in gas station carwashes, self-service parts, heavy duty truck wash, express tunnels, and automatic repair across MN, ND, SD, WI.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/',
    images: [
      {
        url: 'https://www.carwashtechnologies.com/imgs/HomeHero.webp',
        width: 1200,
        height: 630,
        alt: 'Carwash Technologies professional wash systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Midwest Carwash Builder | Gas Station, Self-Service, Heavy Duty',
    description: 'Gas station carwash builder, self-service parts supplier, heavy duty truck wash contractor, and express tunnel builder serving MN, ND, SD, WI.',
    images: ['https://www.carwashtechnologies.com/imgs/HomeHero.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you build gas station and convenience store carwashes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We specialize in gas station carwash construction and convenience store wash installations across Minnesota, North Dakota, South Dakota, and Wisconsin. We handle design, equipment selection, installation, and startup for express tunnels, touchless systems, and in-bay automatics.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you supply self-service carwash parts and equipment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We are a full-service self-service carwash parts supplier providing bays, equipment, pumps, motors, nozzles, hoses, guns, and all accessories needed for self-serve operations. We also build new self-service carwash facilities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build heavy duty truck wash systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build and install heavy duty truck wash systems for semi trucks, buses, RVs, municipal fleets, and heavy equipment. Our solutions include touchless gantry systems, friction systems, and high-pressure wash equipment designed for commercial and industrial applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build a new carwash from planning through installation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide turnkey carwash builder services including site planning, design, equipment selection, construction, installation, and startup support for new tunnel, express, in-bay, fleet, and truck wash facilities across the Midwest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer automatic car wash repair and emergency service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our team provides reliable, priority repair service, preventive maintenance, and emergency support for all equipment types and major brands. We stock parts and have certified technicians throughout Minnesota, North Dakota, South Dakota, and Wisconsin.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you supply car wash chemicals for all wash types?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We supply professional carwash chemicals and complete programs for gas stations, express tunnels, touchless systems, self-service bays, truck washes, and fleet operations. We offer delivery, technical support, and chemistry from Vertech Labs, ChemQuest, and Simoniz.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build car dealership and commercial carwashes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build and install carwash systems for car dealerships, commercial operations, municipal facilities, and industrial applications. We provide customized solutions including tunnel systems, touchless gantries, and reclaim systems.',
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Clean Tech Hero Section */}
      <HeroSectionNew />

        {/* Equipment brand trust strip (white) */}
        <EquipmentBrandsStrip />

        {/* Core Service Offerings (grey) */}
        <ServicesSectionNew />

        {/* Why Choose Us band (dark) */}
        <WhyChooseUsSection />

        {/* Growth questions / FAQ (slate-50) - breaks the dark */}
        <section className="bg-slate-50 py-14 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Midwest Carwash Growth Questions, Answered
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                Built for owners searching for a reliable car wash builder, chemical partner, and long-term maintenance team.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <article className="rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  New Carwash Construction and Installation
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  From site planning to equipment commissioning, we help investors and operators launch high-performing wash locations.
                </p>
              </article>

              <article className="rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Automatic Car Wash Repair and Maintenance
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Preventive maintenance and fast-response repair service to protect uptime, wash quality, and customer satisfaction.
                </p>
              </article>

              <article className="rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Chemical Programs That Improve Results
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Performance-driven chemistry with flexible supply options for tunnel, in-bay, truck, and fleet wash operations.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Free consultation form CTA */}
        <ConsultationCTA />

        {/* Flagship build - World's Longest Carwash */}
        <section className="bg-slate-50 py-14 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/projects/worlds-longest-carwash"
              className="group grid lg:grid-cols-2 gap-8 lg:gap-10 items-center bg-slate-900 border border-slate-800 hover:border-[#f0da11] transition-colors duration-300 overflow-hidden"
            >
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[260px]">
                <Image
                  src="/imgs/projects/WLC/July-2026/20260720_095018.webp"
                  alt="World's Longest Carwash flagship build under construction"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-[#f0da11] text-slate-900 text-xs font-bold uppercase tracking-widest px-3 py-1.5">
                  Now Building
                </span>
              </div>
              <div className="p-6 sm:p-8 lg:pr-12">
                <p className="text-sm font-semibold text-[#f0da11] uppercase tracking-wider mb-3">Flagship Project</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                  We&apos;re Building the World&apos;s Longest Carwash
                </h2>
                <p className="text-base text-slate-300 leading-relaxed mb-6">
                  Our most ambitious project yet is under construction right now - a record-setting tunnel
                  on a scale the industry hasn&apos;t seen. It&apos;s the clearest proof of what our design-build
                  team can deliver for any operation.
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-white group-hover:text-[#f0da11] transition-colors">
                  See the project
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Featured equipment */}
        <section className="bg-white py-14 sm:py-16 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#d0b211] mb-1">Authorized Dealer</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Equipment</h2>
              </div>
              <Link href="/equipment-sales" className="text-sm font-semibold text-gray-600 hover:text-[#d0b211] transition-colors whitespace-nowrap">
                Browse all equipment &rarr;
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  href: '/equipment-sales/pdq-laserwash-360-plus',
                  image: '/imgs/PDQ.webp',
                  brand: 'PDQ · OPW',
                  tag: 'In-Bay Automatic',
                  name: 'LaserWash\u00ae 360 Plus',
                  desc: 'Touchless in-bay automatic with Smart 360 Technology. Open bay, no floor tracks. Ideal for gas stations, c-stores, and dealerships.',
                  pdf: '/PDFs/Equipment/pdq-laserwash-360-plus-touchless-automatic-brochure.pdf',
                },
                {
                  href: '/equipment-sales/belanger-insta-kleen',
                  image: '/imgs/BelangerTunnel.webp',
                  brand: 'Belanger · OPW',
                  tag: 'Fleet Wash System',
                  name: 'insta-KLEEN\u2122',
                  desc: 'Drive-thru fleet wash - one vehicle per minute. 36 gal/cycle, modular design. Built for car dealerships and fleet operators.',
                  pdf: '/PDFs/Equipment/belanger-insta-kleen-fleet-wash-system-brochure%20(2).pdf',
                },
              ].map((eq) => (
                <div key={eq.href} className="group border border-gray-200 hover:border-[#f0da11] hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col">
                  <Link href={eq.href} className="relative h-48 block overflow-hidden">
                    <Image
                      src={eq.image}
                      alt={eq.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#f0da11] text-slate-900 text-xs font-bold uppercase tracking-wide px-2 py-1">{eq.tag}</span>
                  </Link>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{eq.brand}</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{eq.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">{eq.desc}</p>
                    <div className="flex gap-3">
                      <Link href={eq.href} className="flex-1 text-center text-sm font-bold bg-slate-900 text-white hover:bg-[#f0da11] hover:text-slate-900 py-2.5 transition-colors">
                        View Details
                      </Link>
                      <a href={eq.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 border border-gray-300 text-gray-600 text-sm px-3 py-2.5 hover:border-[#d0b211] hover:text-[#d0b211] transition-colors" title="Download Brochure">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        PDF
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
  );
}