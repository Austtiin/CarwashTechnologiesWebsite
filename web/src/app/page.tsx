import SEOHead from './components/ui/SEOHead';
import ServicesSection from './components/home/sections/ServicesSection';
import ProjectsSection from './components/home/recent-projects';
import ChemicalsSection from './components/home/chemicals-section';
import WhoWeServeSection from './components/home/who-we-serve-section';
import CallToAction from './components/ui/CallToAction';
import HeroSection from './components/home/sections/HeroSection';

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
        {/* Use the HeroSection component instead of duplicating hero content */}
        <HeroSection />

        {/* Sections */}
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