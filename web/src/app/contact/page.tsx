import React from 'react';
import { Metadata } from 'next';
import GenericHero from '../components/ui/GenericHero';
import ContactSelector from '../components/contact/components/ContactSelector';
import CallToActionNew from '../components/ui/CallToActionNew';
import { contactOptions } from './data/contactOptions';

export const metadata: Metadata = {
  title: 'Contact Carwash Builder & Contractor | Gas Station, Self-Service, Heavy Duty',
  description: 'Contact Carwash Technologies for gas station carwash construction quotes, self-service carwash parts, heavy duty truck wash systems, express tunnel installation, car dealership wash systems, equipment sales, chemicals, service, and consulting across MN, ND, SD, and WI.',
  keywords: 'contact carwash builder Minnesota, carwash contractor quote MN, gas station carwash quote Minnesota, convenience store carwash contact, self service carwash parts quote MN, heavy duty carwash quote Minnesota, truck wash builder contact, express carwash contractor quote, car dealership carwash contact MN, touchless carwash quote Minnesota, carwash construction quote MN, car wash equipment quote Minnesota, carwash parts quote MN, carwash chemicals quote Minnesota, carwash installation quote, carwash service request MN, carwash repair contact Minnesota, emergency carwash service, carwash consulting contact, carwash builder contact Minnesota',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Carwash Builder & Contractor Minnesota',
    description: 'Contact us for gas station carwash quotes, self-service parts, heavy duty truck wash systems, express tunnel installation, and all carwash services.',
    type: 'website',
    url: 'https://www.carwashtechnologies.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Carwash Technologies Minnesota',
    description: 'Get quotes for gas station carwash construction, self-service parts, heavy duty systems, equipment, chemicals, service, and consulting.',
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

