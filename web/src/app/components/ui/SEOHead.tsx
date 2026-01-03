import Head from 'next/head';
import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  noIndex?: boolean;
  structuredData?: object;
  additionalMeta?: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
}

const SEOHead: React.FC<SEOProps> = ({
  title = "Carwash Technologies - Wash Equipment Sales, Service & Consulting | Minnesota, North Dakota, South Dakota, Wisconsin",
  description = "Carwash Technologies provides premium wash equipment sales, professional service & maintenance, and expert consulting across Minnesota, North Dakota, South Dakota, and Wisconsin. Over 50 years combined experience.",
  keywords = "Wash equipment, wash service, wash consulting, Minnesota wash, North Dakota wash, South Dakota wash, Wisconsin wash, wash chemicals, tunnel wash equipment, self-serve wash, auto dealership wash systems",
  canonical = "https://carwashtechnologies.com/",
  ogImage = "https://carwashtechnologies.com/logos/logoCWT.webp",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false,
  structuredData,
  additionalMeta = []
}) => {
  // Default company information
  const companyInfo = {
    name: "Carwash Technologies",
    phone: "(612) 408-9010",
    address: {
      street: "322 19th St. SW",
      city: "Forest Lake",
      state: "MN",
      zip: "55025",
      country: "US"
    },
    geo: {
      latitude: "45.2719",
      longitude: "-92.9852"
    },
    serviceAreas: ["Minnesota", "North Dakota", "South Dakota", "Wisconsin"],
    services: [
      "Car Wash Equipment Sales",
      "Car Wash Service and Maintenance",
      "Car Wash Consulting", 
      "Car Wash Chemicals"
    ]
  };

  // Default structured data for local business
  const defaultStructuredData = structuredData || {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": companyInfo.name,
    "description": description,
    "url": canonical,
    "telephone": companyInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyInfo.address.street,
      "addressLocality": companyInfo.address.city,
      "addressRegion": companyInfo.address.state,
      "postalCode": companyInfo.address.zip,
      "addressCountry": companyInfo.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": companyInfo.geo.latitude,
      "longitude": companyInfo.geo.longitude
    },
    "areaServed": companyInfo.serviceAreas.map(area => ({
      "@type": "State",
      "name": area
    })),
    "serviceType": companyInfo.services,
    "logo": ogImage,
    "image": ogImage
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={companyInfo.name} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={companyInfo.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Geographic Tags */}
      <meta name="geo.region" content="US-MN" />
      <meta name="geo.placename" content={`${companyInfo.address.city}, ${companyInfo.address.state}`} />
      <meta name="geo.position" content={`${companyInfo.geo.latitude};${companyInfo.geo.longitude}`} />
      <meta name="ICBM" content={`${companyInfo.geo.latitude}, ${companyInfo.geo.longitude}`} />

      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => (
        <meta
          key={index}
          {...(meta.name ? { name: meta.name } : { property: meta.property })}
          content={meta.content}
        />
      ))}

      {/* Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(defaultStructuredData)
        }}
      />
    </Head>
  );
};

export default SEOHead;