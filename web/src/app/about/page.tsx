import React from 'react';
import BlurText from '../components/animations/BlurText';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#26231d] via-[#595646] to-[#4c6461] text-white py-24">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          {/* Animated gradient overlays using brand colors */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#f0da11]/20 to-transparent rounded-full opacity-60 -translate-x-48 -translate-y-48 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#d0b211]/30 to-transparent rounded-full opacity-50 translate-x-32 translate-y-32 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-[#bfb986]/15 to-transparent rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #cecece 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-[#f0da11]/10 backdrop-blur-sm rounded-full px-8 py-3 mb-8 border border-[#f0da11]/30">
              <svg className="w-5 h-5 mr-3 text-[#f0da11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h10" />
              </svg>
              <span className="text-sm font-semibold text-[#f0da11] tracking-wide">About Our Company</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#cecece] via-[#f0da11] to-[#bfb986] bg-clip-text text-transparent">
                Carwash Technologies
              </span>
            </h1>
          
            <div className="flex justify-center">
              <BlurText
                text="25+ years of expertise in car wash solutions across the Midwest"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-xl md:text-2xl !text-[#f0da11] max-w-3xl mx-auto leading-relaxed font-light"
              />
            </div>

            {/* Stats or highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[#f0da11]/30">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#f0da11] mb-1">25+</div>
                <div className="text-sm text-[#cecece]">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#f0da11] mb-1">99+</div>
                <div className="text-sm text-[#cecece]">Installations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#f0da11] mb-1">4</div>
                <div className="text-sm text-[#cecece]">States Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#f0da11] mb-1">24/7</div>
                <div className="text-sm text-[#cecece]">Support Available</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Wave Transition with Brand Colors */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-20">
            <svg
                viewBox="0 0 1440 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-32 md:h-40"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="aboutWaveGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f0da11" stopOpacity="0.18" />
                        <stop offset="40%" stopColor="#bfb986" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#fff" stopOpacity="0.9" />
                    </linearGradient>
                </defs>
                <path
                    d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
                    fill="url(#aboutWaveGradient)"
                />
                <path
                    d="M0,90 C480,30 960,150 1440,90 L1440,120 L0,120 Z"
                    fill="#fff"
                    fillOpacity="0.8"
                />
            </svg>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <BlurText
                text="Our Story"
                delay={50}
                animateBy="words"
                direction="top"
                className="md:!text-[2rem] text-[6rem] font-extrabold text-gray-900 mb-6"
              />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Built on a foundation of expertise, innovation, and unwavering commitment to customer success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Carwash Technologies, we've been at the forefront of the car wash industry for over two decades. 
                  What started as a small operation has grown into a trusted partner for car wash businesses across the Midwest.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our journey began with a simple belief: every car wash deserves equipment that works reliably, 
                  chemicals that deliver consistent results, and support that's there when you need it most.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, we continue to build on that foundation, combining decades of experience with the latest 
                  innovations to help our customers thrive in an increasingly competitive market.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">25+</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Years of Experience</h3>
                      <p className="text-gray-600">Serving the car wash industry</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">99+</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Installations</h3>
                      <p className="text-gray-600">Successful projects completed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">4</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">States Served</h3>
                      <p className="text-gray-600">Minnesota, North Dakota, South Dakota & Wisconsin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <BlurText
                text="Our Mission & Values"
                delay={50}
                animateBy="words"
                direction="top"
                className="md:!text-[2rem] text-[6rem] font-extrabold text-gray-900 mb-6"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide innovative, reliable car wash solutions that empower our customers to build successful, 
                  profitable businesses while delivering exceptional value and service that exceeds expectations.
                </p>
              </div>
              
              {/* Vision */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the most trusted partner in the Midwest car wash industry, known for our expertise, 
                  innovation, and unwavering commitment to customer success.
                </p>
              </div>
            </div>
            
            {/* Values */}
            <div className="mt-16">
              <BlurText
                text="Our Core Values"
                delay={50}
                animateBy="words"
                direction="top"
                className="md:!text-[2rem] text-[6rem] font-extrabold text-gray-900 mb-6"
              />
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Integrity</h4>
                  <p className="text-gray-600">We uphold the highest standards of honesty, transparency, and ethical business practices in everything we do.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Customer Focus</h4>
                  <p className="text-gray-600">Our customers' success is our success. We listen, understand, and deliver solutions that exceed expectations.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Innovation</h4>
                  <p className="text-gray-600">We continuously seek new ways to improve our services, products, and processes to stay ahead of industry trends.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Excellence</h4>
                  <p className="text-gray-600">We strive for excellence in every interaction, installation, and service we provide to our valued customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <BlurText
                text="What Sets Us Apart"
                delay={50}
                animateBy="words"
                direction="top"
                className="md:!text-[2rem] text-[6rem] font-extrabold text-gray-900 mb-6"
              />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're more than just a supplier – we're your partner in success
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Expertise</h3>
                <p className="text-gray-700">
                  Deep understanding of Midwest markets, weather conditions, and local business needs. 
                  We know what works in our region.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Solutions</h3>
                <p className="text-gray-700">
                  From initial consultation to ongoing support, we provide everything you need for 
                  a successful car wash operation.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
                <p className="text-gray-700">
                  When your equipment needs attention, we're here. Our support team is available 
                  around the clock to keep you running.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <BlurText
                text="Serving the Midwest"
                delay={50}
                animateBy="words"
                direction="top"
                className="md:!text-[2rem] text-[6rem] font-extrabold text-gray-900 mb-6"
              />
              <p className="text-xl text-gray-600">
                Proudly serving car wash businesses across four states
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Minnesota</h3>
                <p className="text-gray-600">Twin Cities metro and greater Minnesota markets</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">North Dakota</h3>
                <p className="text-gray-600">Fargo-Moorhead area and statewide coverage</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">South Dakota</h3>
                <p className="text-gray-600">Sioux Falls region and statewide service</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Wisconsin</h3>
                <p className="text-gray-600">Milwaukee area and throughout Wisconsin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 text-white overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[700px] bg-yellow-200 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 opacity-10 rounded-full blur-2xl translate-x-1/3 translate-y-1/3"></div>
          <svg className="absolute left-0 bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
          </svg>
        </div>
        <div className="text-center mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                  <BlurText
                    text="Ready to partner with us?"
                    delay={50}
                    animateBy="words"
                    direction="top"
                    className="md:!text-[2rem] text-[6rem] font-extrabold text-gray-900 mb-6"
                  />
            <p className="text-xl text-yellow-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you're planning a new car wash or looking to upgrade your existing operation, 
              we're here to help you succeed. Let's discuss your vision and make it a reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a 
                href="/contact" 
                className="bg-white text-yellow-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Start a Conversation
              </a>
              <a 
                href="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-yellow-600 transition-colors duration-300 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                View Our Services
              </a>
            </div>
            
            <div className="mt-10 pt-4 border-t border-yellow-400/30">
              <p className="text-yellow-100 text-lg">
                <span className="font-semibold">Quick Response Guarantee:</span> We respond to all requests as soon as possible, typically within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

