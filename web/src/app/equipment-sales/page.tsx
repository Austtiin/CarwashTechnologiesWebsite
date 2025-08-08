import React from 'react';
import { Metadata } from 'next';
import BlurText from '../components/animations/BlurText';
import Image from 'next/image';
import SafeLink from '../components/ui/SafeLink';
import CallToAction from '../components/ui/CallToAction';

export const metadata: Metadata = {
  title: 'Equipment Sales | Carwash Technologies',
  description: 'Premium car wash equipment from industry-leading manufacturers. Tunnel systems, automatic systems, self-serve bays, and more. Serving Minnesota, North Dakota, South Dakota, and Wisconsin.',
  keywords: 'car wash equipment, tunnel systems, automatic wash, self-serve equipment, wash equipment sales',
  openGraph: {
    title: 'Equipment Sales | Carwash Technologies',
    description: 'Premium car wash equipment from industry-leading manufacturers',
    type: 'website',
  },
};

// Server component data fetching
async function getEquipmentData() {
  return {
    manufacturers: [
      { name: 'PECO', logo: '/peco-logo.webp', alt: 'PECO' },
      { name: 'Sonnys', logo: '/logoSonnys.webp', alt: "Sonny's" },
      { name: 'PDQ', logo: '/logoPDQ.webp', alt: 'PDQ' },
      { name: 'Belanger', logo: '/logoBelanger.webp', alt: 'Belanger' },
      { name: 'AVW', logo: '/AVW-logo.webp', alt: 'AVW' },
    ],
    categories: [
      {
        id: 'tunnel',
        title: 'Tunnel Systems',
        description: 'Complete conveyor wash systems for high-volume operations with automated wash sequences.',
        icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
        color: 'blue',
        features: ['Conveyor systems', 'Automated wash arches', 'Dryer systems', 'Control systems']
      },
      {
        id: 'self-serve',
        title: 'Self-Serve Bays',
        description: 'High-pressure wash systems and bay equipment for self-service operations.',
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        color: 'green',
        features: ['High-pressure pumps', 'Wash guns & wands', 'Chemical injection systems', 'Payment systems']
      },
      {
        id: 'automatic',
        title: 'Automatic Systems',
        description: 'Touch and touchless automatic wash systems for gentle, effective cleaning.',
        icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
        color: 'purple',
        features: ['Touchless systems', 'Soft-touch systems', 'Rollover systems', 'In-bay automatics']
      },
      {
        id: 'water-recovery',
        title: 'Water Recovery',
        description: 'Water reclaim and recycling systems for environmental responsibility.',
        icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
        color: 'orange',
        features: ['Reclaim systems', 'Water treatment', 'Filtration systems', 'Storage tanks']
      },
      {
        id: 'dryer',
        title: 'Dryer Systems',
        description: 'High-performance dryer systems for spot-free vehicle drying.',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        color: 'red',
        features: ['Blower systems', 'Follow-you dryers', 'Overhead dryers', 'Side dryers']
      },
      {
        id: 'payment',
        title: 'Payment Systems',
        description: 'Modern payment solutions for seamless customer transactions.',
        icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        color: 'teal',
        features: ['Credit card readers', 'Mobile payment', 'Token systems', 'Management software']
      }
    ],
    stats: {
      experience: '25+',
      installations: '500+',
      support: '24/7',
      states: '4'
    }
  };
}

// Color mapping for categories
const colorMap = {
  blue: { bg: 'from-blue-400 to-blue-600', dot: 'bg-blue-500' },
  green: { bg: 'from-green-400 to-green-600', dot: 'bg-green-500' },
  purple: { bg: 'from-purple-400 to-purple-600', dot: 'bg-purple-500' },
  orange: { bg: 'from-orange-400 to-orange-600', dot: 'bg-orange-500' },
  red: { bg: 'from-red-400 to-red-600', dot: 'bg-red-500' },
  teal: { bg: 'from-teal-400 to-teal-600', dot: 'bg-teal-500' },
};

export default async function EquipmentSales() {
  const data = await getEquipmentData();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#26231d] via-[#595646] to-[#4c6461] text-white py-24">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#f0da11]/20 to-transparent rounded-full opacity-60 -translate-x-48 -translate-y-48 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#d0b211]/30 to-transparent rounded-full opacity-50 translate-x-32 translate-y-32 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-[#bfb986]/15 to-transparent rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-[#f0da11]/10 backdrop-blur-sm rounded-full px-8 py-3 mb-8 border border-[#f0da11]/30">
              <svg className="w-5 h-5 mr-3 text-[#f0da11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
              </svg>
              <span className="text-sm font-semibold text-[#f0da11] tracking-wide">Premium Wash Equipment</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#cecece] via-[#f0da11] to-[#bfb986] bg-clip-text text-transparent">
                Equipment Sales
              </span>
            </h1>

            <div className="flex justify-center">
              <BlurText
                text="Industry-leading wash equipment from trusted manufacturers"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-xl md:text-2xl !text-[#f0da11] max-w-3xl mx-auto leading-relaxed font-light"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <BlurText
              text="Trusted Equipment Partners"
              delay={150}
              animateBy="words"
              direction="top"
              className="md:!text-[2rem] !text-[2rem] font-extrabold text-gray-900 mb-6"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with industry-leading manufacturers to provide you with the highest quality wash equipment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {data.manufacturers.map((manufacturer, index) => (
              <div key={manufacturer.name} className="group hover:scale-110 transition-transform duration-300">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <Image
                    src={manufacturer.logo}
                    alt={manufacturer.alt}
                    width={120}
                    height={60}
                    className="h-16 w-auto object-contain"
                    priority={index < 3}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <BlurText
              text="Equipment Categories"
              delay={50}
              animateBy="words"
              direction="top"
              className="md:!text-[2rem] !text-[2rem] font-extrabold text-gray-900 mb-6"
            />
            <p className="text-xl text-gray-600">Complete range of wash equipment solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.categories.map((category) => {
              const colors = colorMap[category.color as keyof typeof colorMap];
              return (
                <div key={category.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{category.title}</h3>
                  <p className="text-gray-600 text-center mb-6">{category.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {category.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className={`w-2 h-2 ${colors.dot} rounded-full mr-3`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Equipment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <BlurText
                text="Why Choose Our Equipment"
                delay={50}
                animateBy="words"
                direction="top"
                className="md:!text-[2rem] !text-[2rem] font-extrabold text-gray-900 mb-6"
              />
              <p className="text-lg text-gray-600 mb-8">
                We provide only the highest quality equipment from trusted manufacturers, 
                ensuring reliability, performance, and longevity for your wash operation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry-Leading Quality</h3>
                    <p className="text-gray-600">Premium equipment from manufacturers with decades of experience and proven track records.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Installation</h3>
                    <p className="text-gray-600">Expert installation and setup by our experienced technicians for optimal performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">Comprehensive service and maintenance support to keep your equipment running smoothly.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Equipment Financing Available</h3>
                <p className="text-gray-600">Flexible financing options to help you get the equipment you need</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f0da11] mb-2">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f0da11] mb-2">500+</div>
                  <div className="text-sm text-gray-600">Installations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f0da11] mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f0da11] mb-2">4</div>
                  <div className="text-sm text-gray-600">States Served</div>
                </div>
              </div>
              
              <div className="text-center">
                <SafeLink 
                  href="/contact" 
                  className="bg-[#f0da11] text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-[#d0b211] transition-colors duration-300 inline-flex items-center"
                >
                  Get Equipment Quote
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </SafeLink>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Call to Action */}
      <section>
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
      </section>
    </div>
  );
}