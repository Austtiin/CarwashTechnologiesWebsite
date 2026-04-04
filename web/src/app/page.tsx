import { Metadata } from 'next';
import HeroSectionNew from './components/home/sections/HeroSectionNew';
import ServicesSectionNew from './components/home/sections/ServicesSectionNew';
import ChemicalsSectionNew from './components/home/sections/ChemicalsSectionNew';
import WhyChooseUsSection from './components/home/sections/WhyChooseUsSection';
import CallToActionNew from './components/ui/CallToActionNew';

export const metadata: Metadata = {
  title: 'Carwash Technologies - Car Wash Equipment, Chemicals & Installation | MN, ND, SD, WI',
  description: 'Carwash Technologies — Minnesota\'s trusted carwash builder and equipment dealer. New tunnel systems, automatic vehicle washes, semi truck washes, fleet wash systems, carwash chemicals, and full installation across MN, ND, SD, and WI. 50+ years combined experience.',
  keywords: 'carwash equipment MN, carwash chemicals Minnesota, carwash builder MN, vehicle washing equipment, semi truck wash Minnesota, fleet wash systems, tunnel wash Minnesota, track wash, auto vehicle washing, car wash installation MN, car wash construction Minnesota, carwash equipment North Dakota, carwash equipment South Dakota, Belanger car wash dealer, PECO car wash systems, PDQ car wash equipment, Sonny\'s car wash Minnesota, Vertech Labs chemicals, ChemQuest car wash chemicals, Simoniz car wash, Cat Pumps dealer MN, General Pump Minnesota, carwash equipment Midwest, carwash chemicals Midwest',
  openGraph: {
    title: 'Carwash Technologies - Car Wash Equipment, Chemicals & Installation | Minnesota',
    description: 'Minnesota\'s trusted carwash builder and equipment dealer. Tunnel systems, automatic vehicle washes, semi truck washes, fleet wash, and carwash chemicals across MN, ND, SD, WI.',
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