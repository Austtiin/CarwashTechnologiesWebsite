'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import BlurText from './components/animations/BlurText';
import Aurora from './components/animations/Aurora';
import ShinyText from './components/animations/ShinyText';
import SafeLink from './components/ui/SafeLink';

export default function Home() {
  const [time, setTime] = useState(0);

  // Update time for Aurora animation using requestAnimationFrame
  const animationIdRef = React.useRef<number | null>(null);

  useEffect(() => {
    const startTime = Date.now();

    const updateTime = () => {
      const elapsed = (Date.now() - startTime) / 1000; // Convert to seconds
      setTime(elapsed);
      animationIdRef.current = requestAnimationFrame(updateTime);
    };

    animationIdRef.current = requestAnimationFrame(updateTime);

    return () => {
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Carwash Technologies - Wash Equipment Sales, Service & Consulting | Minnesota, North Dakota, South Dakota, Wisconsin</title>
        <meta name="description" content="Carwash Technologies provides premium wash equipment sales, professional service & maintenance, and expert consulting across Minnesota, North Dakota, South Dakota, and Wisconsin. Over 50 years combined experience." />
        <meta name="keywords" content="Wash equipment, wash service, wash consulting, Minnesota wash, North Dakota wash, South Dakota wash, Wisconsin wash, wash chemicals, tunnel wash equipment, self-serve wash, auto dealership wash systems" />
        <meta name="author" content="Carwash Technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://carwashtechnologies.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://carwashtechnologies.com/" />
        <meta property="og:title" content="Carwash Technologies - Car Wash Equipment Sales, Service & Consulting" />
        <meta property="og:description" content="Premium car wash equipment sales, professional service & maintenance, and expert consulting across the Midwest. Over 50 years combined experience serving Minnesota, North Dakota, South Dakota, and Wisconsin." />
        <meta property="og:image" content="https://carwashtechnologies.com/logoCWT.webp" />
        <meta property="og:site_name" content="Carwash Technologies" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://carwashtechnologies.com/" />
        <meta property="twitter:title" content="Carwash Technologies - Car Wash Equipment Sales, Service & Consulting" />
        <meta property="twitter:description" content="Premium car wash equipment sales, professional service & maintenance, and expert consulting across the Midwest. Over 50 years combined experience." />
        <meta property="twitter:image" content="https://carwashtechnologies.com/logoCWT.webp" />

        {/* Additional SEO tags */}
        <meta name="geo.region" content="US-MN" />
        <meta name="geo.placename" content="Forest Lake, Minnesota" />
        <meta name="geo.position" content="45.2719;-92.9852" />
        <meta name="ICBM" content="45.2719, -92.9852" />
        
        {/* Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Carwash Technologies",
            "description": "Car wash equipment sales, service, and consulting across Minnesota, North Dakota, South Dakota, and Wisconsin",
            "url": "https://carwashtechnologies.com",
            "telephone": "(612) 408-9010",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "322 19th St. SW",
              "addressLocality": "Forest Lake",
              "addressRegion": "MN",
              "postalCode": "55025",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "45.2719",
              "longitude": "-92.9852"
            },
            "areaServed": [
              {
                "@type": "State",
                "name": "Minnesota"
              },
              {
                "@type": "State", 
                "name": "North Dakota"
              },
              {
                "@type": "State",
                "name": "South Dakota"
              },
              {
                "@type": "State",
                "name": "Wisconsin"
              }
            ],
            "serviceType": [
              "Car Wash Equipment Sales",
              "Car Wash Service and Maintenance", 
              "Car Wash Consulting",
              "Car Wash Chemicals"
            ],
            "logo": "https://carwashtechnologies.com/logoCWT.webp",
            "image": "https://carwashtechnologies.com/logoCWT.webp"
          })}
        </script>
      </Head>

      <div className="min-h-screen relative">
        {/* Aurora Background for Hero Section */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Aurora
            colorStops={["#00e5ff", "#f00000", "#ff00b7", "#06ffa5"]} // Car wash RGB colors
            blend={0.1}
            amplitude={0.65}
            speed={15.0}
            time={time}
          />
        </div>

        {/* Hero Section - With wave transition like about page */}
        <section className="relative z-10 bg-gradient-to-br from-white/100 via-white/30 to-white/50 text-white py-16 min-h-[70vh] flex items-center">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `radial-gradient(circle at 16px 16px, rgba(0, 0, 0, 0.15) 1px, transparent 1px)`,
                backgroundSize: '32px 32px'
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text content for the hero section */}
              <div>
                <div className="block">
                  <ShinyText
                    text="Welcome to"
                    disabled={false}
                    speed={5}
                    className="text-4xl md:text-3xl lg:text-4xl font-extrabold !text-gray-900 block"
                  />
                  <ShinyText
                    text="Carwash Technologies"
                    disabled={false}
                    speed={3}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 !text-gray-900 block"
                  />
                </div>

                <BlurText
                  text="Sales, Service and Consulting"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold !text-gray-900 block p-2.50 mb-6"
                />

                <BlurText
                  text="Carwash Technologies proudly service the Minnesota, North Dakota, South Dakota and Wisconsin markets."
                  delay={200}
                  animateBy="words"
                  direction="bottom"
                  className="text-xl md:text-xl mb-8 !text-white"
                />

                {/* Use flex-col for mobile, flex-row for sm+ */}
                <div className="flex flex-col sm:flex-row gap-4 fade-in-up">
                  <SafeLink href="/contact" className="bg-[#f0da11] text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-[#d0b211] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Started
                  </SafeLink>
                  <SafeLink href="/services" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Our Services
                  </SafeLink>
                </div>
                </div>

              {/* Company Logo */}
              <div className="fade-in-up flex justify-center">
                <div className="flex items-center justify-center w-[350px] h-[350px] bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
                  <Image
                    src="/logoCWT.webp"
                    alt="Carwash Technologies Logo"
                    width={350}
                    height={350}
                    className="max-w-full max-h-full object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Wave transition at bottom - matching about page style */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-20">
              <svg
                  viewBox="0 0 1440 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-40 md:h-40"
                  preserveAspectRatio="none"
              >
                  <defs>
                      <linearGradient id="heroWaveGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FEFCE8" stopOpacity=".8" />
                        <stop offset="100%" stopColor="#FEFCE8" stopOpacity="1" />
                        <stop offset="50%" stopColor="#FEFCE8" stopOpacity=".8" />
                      </linearGradient>
                  </defs>
                  <path
                      d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
                      fill="url(#heroWaveGradient)"
                  />
                  <path
                      d="M0,90 C480,30 960,150 1440,90 L1440,120 L0,120 Z"
                      fill="#FEFCE8"
                      fillOpacity="1.0"
                  />
              </svg>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="relative z-10 py-20 bg-yellow-50 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            {/* Spinning squares instead of moving bubbles */}
            <div className="absolute top-12 left-12 w-16 h-16 border-2 border-[#f0da11]/25 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="absolute top-1/4 right-20 w-12 h-12 border-2 border-[#bfb986]/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-[#d0b211]/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/3 right-16 w-14 h-14 border-2 border-[#f0da11]/35 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '7s', animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-10 h-10 border-2 border-[#bfb986]/25 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '9s', animationDelay: '0.5s' }}></div>
            
            {/* Yellow dot grid pattern - consistent across all sections */}
            <div className="absolute inset-0 opacity-20 pointer-events-none z-10">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px, #9b9000 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }}
              ></div>
            </div>
            
            {/* Additional spinning squares for visual interest */}
            <div className="absolute top-10 left-10 w-10 h-10 border-2 border-[#f011b8]/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '6s' }}></div>
            <div className="absolute top-1/3 right-24 w-8 h-8 border-2 border-[#86bf8b]/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
            <div className="absolute bottom-24 left-1/4 w-12 h-12 border-2 border-[#d01151]/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
            <div className="absolute bottom-10 right-10 w-9 h-9 border-2 border-[#f011cb]/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '5s', animationDelay: '1.5s' }}></div>
            <div className="absolute top-20 right-20 w-12 h-12 border-2 border-[#114cf0]/15 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="absolute bottom-32 left-16 w-8 h-8 bg-[#9586bf]/15 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="max-w-4xl mx-auto bg-white/75 backdrop-blur-sm rounded-xl p-8 border border-gray-200/40 shadow-md mb-8">
                <div className="text-center mb-4">
                  <BlurText
                    text="Our Expertise"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="text-4xl md:text-3xl lg:text-4xl font-extrabold !text-gray-900 block"
                  />
                </div>
                <BlurText
                  text="Let our experienced technicians help you make your wash more profitable or get you started with a new site."
                  delay={150}
                  animateBy="words"
                  direction="bottom"
                  className="text-lg md:text-xl text-gray-700 mb-4"
                />
                <BlurText
                  text="With over 50 years of combined experience, our staff has the knowledge to overcome any hurdle."
                  delay={200}
                  animateBy="words"
                  direction="bottom"
                  className="text-lg md:text-xl text-gray-700"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Equipment Sales Card */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-gray-200/30 hover:bg-white/85 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Equipment Sales</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">Quality wash equipment from trusted manufacturers to get your operation running smoothly and efficiently.</p>
                <div className="text-center">
                  <SafeLink href="/equipment-sales" className="inline-flex items-center px-6 py-3 bg-[#f0da11] text-gray-900 rounded-lg font-semibold hover:bg-[#d0b211] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </SafeLink>
                </div>
              </div>

              {/* Service & Maintenance Card */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-gray-200/30 hover:bg-white/85 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Service & Maintenance</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">Professional service and maintenance to keep your wash operating at peak efficiency year-round.</p>
                <div className="text-center">
                  <SafeLink href="/services" className="inline-flex items-center px-6 py-3 bg-[#f0da11] text-gray-900 rounded-lg font-semibold hover:bg-[#d0b211] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </SafeLink>
                </div>
              </div>

              {/* Consulting Card */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-gray-200/30 hover:bg-white/85 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Consulting</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">Expert guidance for new installations and optimization of existing wash operations for maximum profitability.</p>
                <div className="text-center">
                  <SafeLink href="/services" className="inline-flex items-center px-6 py-3 bg-[#f0da11] text-gray-900 rounded-lg font-semibold hover:bg-[#d0b211] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </SafeLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Projects & Who We Serve Section */}
        <section className="relative z-10 py-20 bg-yellow-50 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            {/* Spinning squares instead of moving bubbles - different positions */}
            <div className="absolute top-16 right-12 w-18 h-18 border-2 border-[#f0da11]/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '9s' }}></div>
            <div className="absolute bottom-12 left-20 w-14 h-14 border-2 border-[#bfb986]/25 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-16 w-16 h-16 border-2 border-[#d0b211]/35 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '11s', animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/4 w-10 h-10 border-2 border-[#f0da11]/40 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '6s', animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-12 h-12 border-2 border-[#bfb986]/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s', animationDelay: '1.5s' }}></div>
            <div className="absolute top-20 left-1/2 w-8 h-8 border-2 border-[#d0b211]/25 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '10s', animationDelay: '3s' }}></div>
            
            {/* Yellow dot grid pattern - consistent */}
            <div className="absolute inset-0 opacity-20 pointer-events-none z-10">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px, #f0da11 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }}
              ></div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Recent Projects Section */}
            <div className="max-w-4xl mx-auto bg-white/75 backdrop-blur-sm rounded-xl p-8 border border-gray-200/40 shadow-md mb-16">
              <div className="text-center">
                <BlurText
                  text="Recent Projects"
                  delay={100}
                  animateBy="words"
                  direction="top"
                  className="!text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
                />
                <BlurText
                  text="See our latest installations and success stories across the Midwest"
                  delay={150}
                  animateBy="words"
                  direction="bottom"
                  className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
                />
              </div>
            </div>

            {/* Project cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/75 backdrop-blur-sm rounded-xl p-6 border border-gray-200/40 hover:bg-white/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">SuperWash Express - St. Paul</h3>
                <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed">Complete tunnel wash installation with state-of-the-art equipment and chemical systems.</p>
                <div className="text-center">
                  <SafeLink href="/projects" className="inline-flex items-center text-[#f0da11] hover:text-[#d0b211] font-semibold transition-colors duration-300">
                    <span>View Details</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </SafeLink>
                </div>
              </div>

              <div className="bg-white/75 backdrop-blur-sm rounded-xl p-6 border border-gray-200/40 hover:bg-white/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Quick Clean - Fargo</h3>
                <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed">Self-serve bay renovation with new high-pressure systems and modern payment solutions.</p>
                <div className="text-center">
                  <SafeLink href="/projects" className="inline-flex items-center text-[#f0da11] hover:text-[#d0b211] font-semibold transition-colors duration-300">
                    <span>View Details</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </SafeLink>
                </div>
              </div>

              <div className="bg-white/75 backdrop-blur-sm rounded-xl p-6 border border-gray-200/40 hover:bg-white/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>     
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Sparkle Auto Spa - Madison</h3>
                <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed">Full-service wash upgrade including new conveyor system and water reclaim.</p>
                <div className="text-center">
                  <SafeLink href="/projects" className="inline-flex items-center text-[#f0da11] hover:text-[#d0b211] font-semibold transition-colors duration-300">
                    <span>View Details</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </SafeLink>
                </div>
              </div>
            </div>

            <div className="text-center mb-20">
              <SafeLink href="/projects" className="bg-[#f0da11] text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-[#d0b211] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 inline-flex items-center">
                View All Projects
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </SafeLink>
            </div>

            {/* Who We Serve Section */}
            <div className="max-w-4xl mx-auto bg-white/75 backdrop-blur-sm rounded-xl p-8 border border-gray-200/40 shadow-md mb-12">
              <div className="text-center">
                <BlurText
                  text="Who We Serve"
                  delay={100}
                  animateBy="words"
                  direction="top"
                  className="!text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
                />
                <BlurText
                  text="From new entrepreneurs to established businesses, we provide tailored solutions for every wash operation"
                  delay={150}
                  animateBy="words"
                  direction="bottom"
                  className="text-lg md:text-xl text-gray-700"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Who We Serve cards */}
              <SafeLink href="/services" className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/40 hover:bg-white/85 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group block">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">New Wash Owners</h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">Complete turnkey solutions for entrepreneurs starting their first wash business. From site planning to grand opening.</p>
              </SafeLink>

              <SafeLink href="/services" className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/40 hover:bg-white/85 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group block">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Existing Wash Owners</h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">Upgrades, retrofits, and maintenance services to improve efficiency and increase profitability of your current operation.</p>
              </SafeLink>

              <SafeLink href="/services" className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/40 hover:bg-white/85 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group block">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Auto Dealerships</h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">Professional wash systems designed for high-volume dealership operations. Keep your inventory looking showroom-ready.</p>
              </SafeLink>

              <SafeLink href="/services" className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/40 hover:bg-white/85 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group block">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Small Businesses</h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">Equipment and solutions for detailers, fleet services, and other small businesses requiring professional vehicle cleaning.</p>
              </SafeLink>
            </div>
          </div>
        </section>

        {/* Chemicals Section */}
        <section className="relative z-10 py-20 bg-yellow-50 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            {/* Spinning squares instead of moving bubbles - different arrangement */}
            <div className="absolute top-1/4 right-1/5 w-15 h-15 border-2 border-[#f03e11]/28 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '12s' }}></div>
            <div className="absolute bottom-1/3 left-1/4 w-11 h-11 border-2 border-[#bfb986]/35 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s', animationDelay: '1.5s' }}></div>
            
            <div className="absolute top-16 left-1/2 w-9 h-9 border-2 border-[#1132f0]/40 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '7s', animationDelay: '0.8s' }}></div>
            <div className="absolute bottom-20 right-1/3 w-17 h-17 border-2 border-[#bf8686]/25 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-16 w-8 h-8 border-2 border-[#7411d0]/35 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '6s', animationDelay: '1.2s' }}></div>
            
            {/* Yellow dot grid pattern - consistent */}
            <div className="absolute inset-0 opacity-20 pointer-events-none z-10">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px, #9b9000 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }}
              ></div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10 pt-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <BlurText
                  text="Premium Wash Chemicals"
                  delay={100}
                  animateBy="words"
                  direction="top"
                  className="!text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
                />
                <p className="text-lg text-gray-700 mb-6">
                  We supply high-quality wash chemicals that deliver superior cleaning results while being
                  environmentally responsible. Our chemical programs are designed to maximize efficiency and minimize waste.
                </p>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li className="flex items-center">
                    <span className="w-1 h-1 bg-yellow-400 rounded-full mr-3"></span>
                    Pre-soak and tire cleaners
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 bg-yellow-400 rounded-full mr-3"></span>
                    Foaming detergents and soaps
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 bg-yellow-400 rounded-full mr-3"></span>
                    Spot-free rinse aids and drying agents
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 bg-yellow-400 rounded-full mr-3"></span>
                    Wax and protective coatings
                  </li>
                </ul>
                <SafeLink href="/chemicals" className="bg-[#f0da11] text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-[#d0b211] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">Explore Chemicals</SafeLink>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="w-30 h-30 flex items-center justify-center mx-auto mb-5">
                    <div className="mx-auto flex items-center justify-center p-1 gap-6">
                      <Image 
                        src="/logoSimo.webp" 
                        alt="Simo Logo" 
                        width={100} 
                        height={100} 
                        className="object-contain"
                      />
                      <Image 
                        src="/logoCWT.webp" 
                        alt="Carwash Technologies Logo" 
                        width={100} 
                        height={100} 
                        className="object-contain"
                      />
                      <Image 
                        src="/logoVertech.webp" 
                        alt="Vertech Logo" 
                        width={100} 
                        height={100} 
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Quality Guarantee</h3>
                  <p className="text-gray-600">
                    All of our chemicals meet the highest industry standards for performance and environmental safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative z-10 py-20 bg-gradient-to-br from-[#26231d] via-[#595646] to-[#4c6461] text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-24 w-20 h-20 border-2 border-[#f0da11]/25 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
            <div className="absolute bottom-16 left-20 w-16 h-16 border-2 border-[#bfb986]/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-14 h-14 border-2 border-[#d0b211]/35 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <BlurText
                text="Ready to Transform Your Wash Business?"
                delay={100}
                animateBy="words"
                direction="top"
                className="!text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold !text-white mb-6"
              />
              <BlurText
                text="Join hundreds of satisfied customers across the Midwest who trust Carwash Technologies for their equipment, service, and chemical needs."
                delay={150}
                animateBy="words"
                direction="bottom"
                className="text-lg md:text-xl lg:text-2xl !text-white"
              />
            </div>

            {/* Contact Information Cards */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f0da11] to-[#d0b211] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042,0,0,1,5.516,5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white text-center">Call Us Today</h3>
                  <p className="text-lg !text-white font-semibold text-center">(612) 408-9010</p>
                </div>
        
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f0da11] to-[#d0b211] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white text-center">Get a Quote</h3>
                  <div className="mt-4 text-center">
                    <SafeLink href="/contact" className="bg-[#f0da11] text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-[#d0b211] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      Contact Us Today
                    </SafeLink>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f0da11] to-[#d0b211] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white text-center">Visit Our Location</h3>
                  <p className="text-lg !text-white text-center">322 19th St. SW<br />Forest Lake, MN 55025</p>
                </div>
              </div>
            </div>

            {/* Main CTA Buttons */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <SafeLink href="/contact" className="bg-[#f0da11] text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-[#d0b211] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                  Get Started Today
                </SafeLink>
                <SafeLink href="/services" className="border-2 border-[#f0da11] text-[#f0da11] px-8 py-4 rounded-xl hover:bg-[#f0da11] hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                  View Our Services
                </SafeLink>
              </div>
            </div>
          </div>
        </section>

        {/* Custom CSS for floating animation */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}</style>
      </div>
    </>
  );
}