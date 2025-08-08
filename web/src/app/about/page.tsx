// AboutPage.tsx
'use client';

import React from 'react';
import SEOHead from '../components/ui/SEOHead';
import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import AboutMissionValues from '../components/about/AboutMissionValues';
import AboutDifferentiators from '../components/about/AboutDifferentiators';
import AboutServiceAreas from '../components/about/AboutServiceAreas';
import CallToAction from '../components/ui/CallToAction';

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Carwash Technologies - 25+ Years of Midwest Wash Solutions"
        description="Learn about Carwash Technologies' 25+ years of expertise serving Minnesota, North Dakota, South Dakota, and Wisconsin with professional wash equipment, service, and consulting."
        canonical="https://carwashtechnologies.com/about"
        ogType="website"
      />

      <div className="min-h-screen bg-white">
        <AboutHero />
        <AboutStory />
        <AboutMissionValues />
        <AboutDifferentiators />
        <AboutServiceAreas />

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

