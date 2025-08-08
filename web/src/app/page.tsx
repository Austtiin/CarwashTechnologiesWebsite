import SEOHead from './components/ui/SEOHead';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/home/services-overview';
import ProjectsSection from './components/home/recent-projects';
import ChemicalsSection from './components/home/chemicals-section';
import WhoWeServeSection from './components/home/who-we-serve-section'; // Add this import
import CallToAction from './components/ui/CallToAction';

export default function Home() {
  return (
    <>
      <SEOHead
        title="Carwash Technologies - Wash Equipment Sales, Service & Consulting | Minnesota, North Dakota, South Dakota, Wisconsin"
        description="Carwash Technologies provides premium wash equipment sales, professional service & maintenance, and expert consulting across Minnesota, North Dakota, South Dakota, and Wisconsin. Over 50 years combined experience."
        canonical="https://carwashtechnologies.com/"
        ogType="website"
      />

      <div className="min-h-screen relative">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <WhoWeServeSection />
        <ChemicalsSection />
        

        <CallToAction
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
          backgroundVariant="dark"
          showDecorations={true}
        />
      </div>
    </>
  );
}