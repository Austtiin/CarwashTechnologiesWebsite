import { Metadata } from 'next';
import HeroSectionNew from './components/home/sections/HeroSectionNew';
import ServicesSectionNew from './components/home/sections/ServicesSectionNew';
import ChemicalsSectionNew from './components/home/sections/ChemicalsSectionNew';
import WhyChooseUsSection from './components/home/sections/WhyChooseUsSection';
import CallToActionNew from './components/ui/CallToActionNew';

export const metadata: Metadata = {
  title: 'Your Midwest Carwash Builder and Maintainer | MN, ND, SD, WI',
  description: 'Carwash Technologies is your Midwest carwash builder and maintainer. We design and install tunnel and automatic wash systems, supply chemicals, and provide automatic car wash repair across MN, ND, SD, and WI.',
  keywords: 'midwest carwash builder, car wash builder minnesota, car dealership car wash installation, automated car wash machine minnesota, automatic car wash repair, automatic car wash repair services, car wash automation equipment supplier minnesota, car wash chemicals minnesota, car wash service and maintenance, fleet wash systems, semi truck wash systems, tunnel wash systems, car wash equipment supplier',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Your Midwest Carwash Builder and Maintainer | Carwash Technologies',
    description: 'Design-build carwash systems, chemical programs, and automatic wash repair across MN, ND, SD, and WI.',
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
    title: 'Your Midwest Carwash Builder and Maintainer',
    description: 'Carwash design-build, chemical supply, and automatic repair services across MN, ND, SD, and WI.',
    images: ['https://www.carwashtechnologies.com/imgs/HomeHero.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you build a new carwash from planning through installation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide planning, equipment selection, installation, and startup support for new tunnel, in-bay, fleet, and truck wash facilities across the Midwest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer automatic car wash repair services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our team handles preventive maintenance, emergency service, and automatic car wash repair for a wide range of equipment and pump systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you supply car wash chemicals and ongoing programs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide chemical supply programs, delivery options, and performance-focused chemistry support for tunnel, in-bay, and fleet operations.',
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

        {/* Core Service Offerings */}
        <ServicesSectionNew />

        {/* Why Choose Us band */}
        <WhyChooseUsSection />

        {/* Chemical Programs */}
        <ChemicalsSectionNew />

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

        {/* Final Call to Action */}
        <CallToActionNew
          title="Ready to Transform Your Wash Business?"
          description="Join hundreds of satisfied customers across the Midwest who trust Carwash Technologies for their equipment, service, and chemical needs."
          buttons={[
            {
              text: "Get Started Today",
              href: "/contact",
              variant: "primary"
            },
            {
              text: "View Our Services",
              href: "/services",
              variant: "secondary"
            }
          ]}
          contactInfo={{
            phone: "(612) 408-9010",
            address: "322 19th St. SW<br />Forest Lake, MN 55025",
            showContactCard: true
          }}
        />
      </div>
  );
}