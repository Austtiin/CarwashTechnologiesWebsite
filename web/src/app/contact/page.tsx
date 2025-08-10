import React from 'react';
import { Metadata } from 'next';
import ContactHero from '../components/contact/components/ContactHero';
import ContactSelector from '../components/contact/components/ContactSelector';
import CallToAction from '../components/ui/CallToAction';

export const metadata: Metadata = {
  title: 'Contact Us | Carwash Technologies',
  description: 'Get in touch with our experts for chemical sales, service & maintenance, or equipment sales. Quick response guaranteed.',
  keywords: 'contact, carwash, chemicals, service, equipment, sales, maintenance',
  openGraph: {
    title: 'Contact Us | Carwash Technologies',
    description: 'Connect with our specialists for all your carwash needs',
    type: 'website',
  },
};

// Static contact options data (Server-side)
export const contactOptions = [
  {
    id: 'chemicals' as const,
    title: 'Chemical Sales',
    description: 'High-quality wash chemicals and chemical programs',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600',
    details: 'Get information about our chemical programs, pricing, and delivery options for detergents, waxes, and specialty solutions.',
    icon: 'chemicals',
    features: [
      'Response within 2 hours',
      'Chemical program specialist',
      'Custom pricing available',
      'Free delivery consultation'
    ]
  },
  {
    id: 'service' as const,
    title: 'Service & Maintenance',
    description: 'Professional maintenance and repair services',
    color: 'from-orange-400 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-600',
    details: 'Schedule maintenance, request emergency repairs, or inquire about our comprehensive service programs.',
    icon: 'service',
    features: [
      '24/7 emergency support',
      'Certified technicians',
      'Preventive maintenance plans',
      'Same-day service available'
    ]
  },
  {
    id: 'sales' as const,
    title: 'Equipment Sales',
    description: 'Premium wash equipment and installation',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
    details: 'Explore our equipment options, get quotes, and learn about installation services for new or existing facilities.',
    icon: 'sales',
    features: [
      'Free site consultation',
      'Equipment financing available',
      'Professional installation',
      'Warranty & support included'
    ]
  }
];

// Server Component - handles initial page structure
export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Static Hero Section */}
      <ContactHero />

      {/* Interactive Contact Selection & Form */}
      <ContactSelector contactOptions={contactOptions} />

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
    </main>
  );
}

