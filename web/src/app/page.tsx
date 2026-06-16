import { Metadata } from 'next';
import HeroSectionNew from './components/home/sections/HeroSectionNew';
import EquipmentBrandsStrip from './components/home/sections/EquipmentBrandsStrip';
import ConsultationCTA from './components/home/sections/ConsultationCTA';
import ServicesSectionNew from './components/home/sections/ServicesSectionNew';
import ChemicalsSectionNew from './components/home/sections/ChemicalsSectionNew';
import WhyChooseUsSection from './components/home/sections/WhyChooseUsSection';

export const metadata: Metadata = {
  title: 'Midwest Carwash Builder, Parts & Contractor | Gas Station, Self-Service, Heavy Duty',
  description: 'Leading Midwest carwash builder and contractor specializing in gas station carwashes, self-service carwash parts, heavy duty truck wash systems, express tunnel builder, car dealership installations, touchless systems, and automatic carwash repair across MN, ND, SD, WI.',
  keywords: 'midwest carwash builder, gas station carwash builder Minnesota, self service carwash parts MN, heavy duty carwash builder, carwash contractor Minnesota, express carwash builder, car dealership carwash installation, touchless carwash systems Minnesota, self serve car wash builder MN, convenience store carwash installation, automatic carwash builder Minnesota, tunnel carwash contractor, in bay automatic builder, commercial carwash builder MN, industrial carwash contractor Minnesota, municipal carwash builder, fleet wash contractor, semi truck wash builder Minnesota, bus wash systems builder, RV wash equipment installation, car wash construction Minnesota, carwash design build, turnkey carwash contractor, carwash equipment parts supplier MN, carwash parts distributor Minnesota, automatic car wash repair Minnesota, carwash modernization services, carwash retrofit contractor, priority carwash service, car wash chemicals minnesota, carwash maintenance contractor MN, carwash technician services, vehicle wash equipment supplier, automated car wash machine minnesota, car wash automation equipment, tunnel wash systems, track wash installation, carwash site development',
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

        {/* Free consultation form CTA (dark) */}
        <ConsultationCTA />

        {/* Core Service Offerings (grey) */}
        <ServicesSectionNew />

        {/* Why Choose Us band (dark) */}
        <WhyChooseUsSection />

        {/* Growth questions / FAQ (white) — buffers the dark bands */}
        <section className="bg-white py-14 sm:py-16">
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

        {/* Chemical Programs (dark) — closing band */}
        <ChemicalsSectionNew />
      </div>
  );
}