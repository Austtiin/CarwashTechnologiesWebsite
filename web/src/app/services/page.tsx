import React from 'react';
import Card from '../components/ui/card';
import BlurText from '../components/animations/BlurText';

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-white to-yellow-500 text-yellow-900 py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200 rounded-full opacity-20 -translate-x-36 -translate-y-36"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 rounded-full opacity-10 translate-x-48 translate-y-48"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-200 rounded-full opacity-5"></div>
          <div className="absolute top-3/4 right-1/3 w-20 h-20 bg-yellow-200 rounded-full opacity-10"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-yellow-100/40 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium text-yellow-700">Professional Car Wash Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-700 to-yellow-400 bg-clip-text text-transparent">
              Our Services
            </h1>
          
            <div className="flex justify-center">
              <BlurText
                text="Comprehensive car wash solutions from equipment sales to ongoing support"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-xl md:text-2xl text-yellow-700 max-w-3xl mx-auto leading-relaxed"
              />
            </div>
            
            {/* Stats or highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-yellow-400/30">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-900 mb-1">50+</div>
                <div className="text-sm text-yellow-700">Years Experience Combined</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-900 mb-1">200+</div>
                <div className="text-sm text-yellow-700">Installations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-900 mb-1">4</div>
                <div className="text-sm text-yellow-700">States Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-900 mb-1">24/7</div>
                <div className="text-sm text-yellow-700">Support Available</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-yellow-200"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-yellow-100"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
        <BlurText
                text="Our Core Services"
                delay={150}
                animateBy="words"
                direction="top"
                className="md:!text-[2rem] text-[6rem] font-extrabold text-gray-900 mb-6"
              />
            <p className="text-xl text-gray-600 max-w-5xl mx-auto">
              From initial consultation to ongoing support, we provide comprehensive solutions for your car wash business
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Equipment Sales</h3>
                <p className="text-gray-600 leading-relaxed">Premium car wash equipment from leading manufacturers. We help you choose the right equipment for your specific needs and budget.</p>
                <div className="mt-4 inline-flex items-center text-blue-600 font-medium">
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Installation & Setup</h3>
                <p className="text-gray-600 leading-relaxed">Professional installation services ensuring your equipment is properly configured and optimized for maximum performance.</p>
                <div className="mt-4 inline-flex items-center text-green-600 font-medium">
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Service & Maintenance</h3>
                <p className="text-gray-600 leading-relaxed">Regular maintenance and emergency repair services to keep your car wash running smoothly and minimize downtime.</p>
                <div className="mt-4 inline-flex items-center text-orange-600 font-medium">
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Chemical Sales</h3>
                <p className="text-gray-600 leading-relaxed">High-quality car wash chemicals to keep your operation running smoothly with consistent, professional results.</p>
                <div className="mt-4 inline-flex items-center text-purple-600 font-medium">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <BlurText
              text="Equipment Categories"
              delay={50}
              animateBy="words"
              direction="top"
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            />
            <p className="text-xl text-gray-600">Complete range of car wash equipment solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-7 h-7 bg-white/20 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Tunnel Systems</h3>
              <p className="text-gray-600">Complete conveyor car wash systems for high-volume operations</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-7 h-7 bg-white/20 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Self-Serve Bays</h3>
              <p className="text-gray-600">High-pressure wash systems and bay equipment for self-service operations</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-7 h-7 bg-white/20 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Touch & Touchless</h3>
              <p className="text-gray-600">Automated touchless wash systems for gentle, effective cleaning</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-7 h-7 bg-white/20 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Water Recovery</h3>
              <p className="text-gray-600">Water reclaim and recycling systems for environmental responsibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chemical Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <BlurText
                text="Chemical Solutions"
                delay={50}
                animateBy="words"
                direction="top"
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              />
              <p className="text-lg text-gray-600 mb-6">
                We supply a complete line of high-performance car wash chemicals designed to 
                deliver superior results while being environmentally responsible.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Pre-Treatment</h3>
                    <p className="text-gray-600">Bug removers, tire cleaners, and pre-soak solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Wash Chemicals</h3>
                    <p className="text-gray-600">Detergents, soaps, and foaming agents for effective cleaning</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Finishing Products</h3>
                    <p className="text-gray-600">Waxes, sealers, and spot-free rinse aids</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Specialty Solutions</h3>
                    <p className="text-gray-600">Custom chemical programs tailored to your needs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Chemical Program Benefits</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-medium">No Long-Term Contracts Required</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-medium">Flexible Purchasing Options Available</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-medium">Consistent quality results</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-medium">Cost-effective solutions</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-medium">Environmental compliance</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-medium">Regular delivery and support</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-yellow-200">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Quick delivery across Minnesota, North Dakota, South Dakota & Wisconsin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <BlurText
              text="Consulting Services"
              delay={50}
              animateBy="words"
              direction="top"
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            />
            <p className="text-xl text-gray-600">Expert guidance for every stage of your car wash journey</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">New Site Development</h3>
              <p className="text-gray-600">Complete site analysis, equipment recommendations, and project planning for new car wash facilities.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Operational Optimization</h3>
              <p className="text-gray-600">Performance analysis and recommendations to improve efficiency and profitability of existing operations.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Equipment Upgrades</h3>
              <p className="text-gray-600">Assessment of current equipment and strategic upgrade planning to enhance performance and reduce costs.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Training & Support</h3>
              <p className="text-gray-600">Staff training programs and ongoing operational support to ensure optimal performance and safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 text-white overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-yellow-200 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 opacity-10 rounded-full blur-2xl translate-x-1/3 translate-y-1/3"></div>
          <svg className="absolute left-0 bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center">
          <BlurText
            text="Ready to Get Started?"
            delay={50}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-6xl font-bold mb-6"
          />
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your car wash needs and discover how we can help your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-white text-yellow-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
            <a 
              href="/projects" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-yellow-600 transition-colors duration-300 inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

