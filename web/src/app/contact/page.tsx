import React from 'react';
import { Metadata } from 'next';
import GenericHero from '../components/ui/GenericHero';
import ContactSelector from '../components/contact/components/ContactSelector';
import CallToActionNew from '../components/ui/CallToActionNew';
import { contactOptions } from './data/contactOptions';

export const metadata: Metadata = {
  title: 'Contact Us | Carwash Technologies - MN, ND, SD, WI',
  description: 'Contact Carwash Technologies in Minnesota for car wash equipment, chemicals, installation, and consulting. Reach us for new wash systems, carwash construction, semi truck wash projects, fleet wash solutions, and vehicle wash service across MN, ND, SD, and WI.',
  keywords: 'contact Carwash Technologies, carwash company Minnesota, car wash equipment quote MN, carwash builder contact, car wash installation Minnesota, carwash chemicals MN quote, semi truck wash quote, fleet wash contact, vehicle wash consulting Minnesota, car wash service request MN',
  openGraph: {
    title: 'Contact Us | Carwash Technologies - MN, ND, SD, WI',
    description: 'Contact our specialists in MN for car wash equipment, chemicals, construction, and consulting.',
    type: 'website',
  },
};

// Server Component - handles initial page structure
export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <GenericHero
        eyebrow="Let's Connect"
        title="Contact Us"
        highlightedWord="Contact"
        subtitle="Expert Support for Your Wash Business"
        description="Ready to transform your wash operation? Let's discuss your specific needs and create a customized solution that drives results. Our team is here to help with equipment, chemicals, service, and expert guidance."
        buttons={[
          {
            text: 'Call Us Now',
            href: 'tel:612-408-9010',
            variant: 'primary'
          },
          {
            text: 'View Services',
            href: '/services',
            variant: 'secondary'
          }
        ]}
        backgroundVariant="dark"
        showPattern={true}
        leftImage="/imgs/COnvayer.webp"
        rightImage="/imgs/IMG_5386.webp"
        centerLane="strong"
        compact={true}
      />

      {/* Interactive Contact Selection & Form */}
      <ContactSelector contactOptions={contactOptions} />

      <CallToActionNew
        title="Let's Build Something Great"
        description="Join hundreds of satisfied customers across the Midwest who trust Carwash Technologies for their equipment, service, and chemical needs."
        buttons={[
          {
            text: "Get Started Today",
            href: "#contact-inquiry",
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
    </main>
  );
}

