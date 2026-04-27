// src/app/layout.tsx
import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import CookieConsent from "@/app/components/CookieConsent";
import ConditionalAnalytics from "@/app/components/ConditionalAnalytics";

const inter = Inter({ subsets: ["latin"] });

const customFont = localFont({
  src: [
    {
      path: './fonts/Friz Quadrata Bold.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Friz Quadrata Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-custom',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.carwashtechnologies.com'),
  title: {
    default: 'Carwash Technologies | Midwest Carwash Builder, Chemicals, and Repair',
    template: '%s | Carwash Technologies',
  },
  description: 'Carwash Technologies helps owners build, maintain, and grow profitable carwash sites across Minnesota, North Dakota, South Dakota, and Wisconsin with equipment, installation, chemicals, and repair services.',
  keywords: "car wash equipment Minnesota, carwash chemicals MN, carwash builder Minnesota, vehicle washing equipment, car wash installation MN, fleet wash systems, semi truck wash, tunnel wash systems, track wash, auto vehicle washing, car wash construction Minnesota, carwash equipment MN, Belanger dealer Minnesota, PECO car wash MN, PDQ car wash equipment, Sonny's car wash equipment, Vertech Labs chemicals, ChemQuest car wash, Simoniz car wash chemicals, Cat Pumps repair MN, General Pump service Minnesota, carwash chemicals Midwest, carwash equipment Midwest",
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Carwash Technologies',
  url: 'https://www.carwashtechnologies.com',
  telephone: '+1-612-408-9010',
  image: 'https://www.carwashtechnologies.com/logos/logoCWT.webp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '322 19th St. SW',
    addressLocality: 'Forest Lake',
    addressRegion: 'MN',
    postalCode: '55025',
    addressCountry: 'US',
  },
  areaServed: ['Minnesota', 'North Dakota', 'South Dakota', 'Wisconsin'],
  serviceType: [
    'Carwash construction and installation',
    'Car wash equipment sales',
    'Car wash chemical supply',
    'Automatic car wash repair and maintenance',
    'Fleet and truck wash systems',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={customFont.variable} data-scroll-behavior="smooth">
      <body className={`${inter.className} flex min-h-screen flex-col overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Conditional Google Analytics - only loads with consent */}
        <ConditionalAnalytics />
        
        <Navbar />
        <main className="grow w-full pt-14 sm:pt-16 lg:pt-17">
          <div className="w-full max-w-none">
            {children}
          </div>
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}