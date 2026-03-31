import { Metadata } from 'next';
import HeroSectionNew from './components/home/sections/HeroSectionNew';
import ServicesSectionNew from './components/home/sections/ServicesSectionNew';
import ChemicalsSectionNew from './components/home/sections/ChemicalsSectionNew';
import WhyChooseUsSection from './components/home/sections/WhyChooseUsSection';
import CallToActionNew from './components/ui/CallToActionNew';

export const metadata: Metadata = {
  title: 'Carwash Technologies - Wash Equipment Sales, Service & Consulting | Minnesota, North Dakota, South Dakota, Wisconsin',
  description: 'Carwash Technologies provides premium wash equipment sales, professional service & maintenance, and expert consulting across Minnesota, North Dakota, South Dakota, and Wisconsin. Over 50 years combined experience.',
  openGraph: {
    title: 'Carwash Technologies - Wash Equipment Sales, Service & Consulting',
    description: 'Premium wash equipment sales, professional service & maintenance, and expert consulting across the Midwest.',
    type: 'website',
    url: 'https://carwashtechnologies.com/',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Clean Tech Hero Section */}
      <HeroSectionNew />

        {/* Core Service Offerings */}
        <ServicesSectionNew />

        {/* Why Choose Us band */}
        <WhyChooseUsSection />

        {/* Chemical Programs */}
        <ChemicalsSectionNew />

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