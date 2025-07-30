import React from 'react';
import BlurText from '../components/animations/BlurText';

const AboutPage = () => {
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
              <span className="text-sm font-medium text-yellow-700">About Our Company</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-700 to-yellow-400 bg-clip-text text-transparent">
              Carwash Technologies
            </h1>
          
            <div className="flex justify-center">
              <BlurText
                text="25+ years of expertise in car wash solutions across the Midwest"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-xl md:text-2xl text-yellow-700 max-w-3xl mx-auto leading-relaxed"
              />
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
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
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
                      <span className="text-white font-bold text-xl">500+</span>
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
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <span className="w-8 h-8 bg-white/20 rounded-lg"></span>
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
                  <span className="w-8 h-8 bg-white/20 rounded-lg"></span>
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
              <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="w-10 h-10 bg-white/20 rounded-lg"></span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Integrity</h4>
                  <p className="text-gray-600">We uphold the highest standards of honesty, transparency, and ethical business practices in everything we do.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="w-10 h-10 bg-white/20 rounded-lg"></span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Customer Focus</h4>
                  <p className="text-gray-600">Our customers' success is our success. We listen, understand, and deliver solutions that exceed expectations.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="w-10 h-10 bg-white/20 rounded-lg"></span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Innovation</h4>
                  <p className="text-gray-600">We continuously seek new ways to improve our services, products, and processes to stay ahead of industry trends.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="w-10 h-10 bg-white/20 rounded-lg"></span>
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
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're more than just a supplier – we're your partner in success
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="w-8 h-8 bg-white/20 rounded-lg"></span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Expertise</h3>
                <p className="text-gray-700">
                  Deep understanding of Midwest markets, weather conditions, and local business needs. 
                  We know what works in our region.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="w-8 h-8 bg-white/20 rounded-lg"></span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Solutions</h3>
                <p className="text-gray-700">
                  From initial consultation to ongoing support, we provide everything you need for 
                  a successful car wash operation.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="w-8 h-8 bg-white/20 rounded-lg"></span>
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
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              />
              <p className="text-xl text-gray-600">
                Proudly serving car wash businesses across four states
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="w-8 h-8 bg-white/20 rounded-lg"></span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Minnesota</h3>
                <p className="text-gray-600">Twin Cities metro and greater Minnesota markets</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="w-8 h-8 bg-white/20 rounded-lg"></span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">North Dakota</h3>
                <p className="text-gray-600">Fargo-Moorhead area and statewide coverage</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="w-8 h-8 bg-white/20 rounded-lg"></span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">South Dakota</h3>
                <p className="text-gray-600">Sioux Falls region and statewide service</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="w-8 h-8 bg-white/20 rounded-lg"></span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Wisconsin</h3>
                <p className="text-gray-600">Milwaukee area and throughout Wisconsin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <BlurText
              text="Ready to Partner with Us?"
              delay={50}
              animateBy="words"
              direction="top"
              className="text-5xl md:text-6xl font-bold mb-8"
            />
            <p className="text-xl text-yellow-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you're planning a new car wash or looking to upgrade your existing operation, 
              we're here to help you succeed. Let's discuss your vision and make it a reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="/contact" 
                className="group bg-white text-yellow-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span className="flex items-center">
                  Start a Conversation
                  <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </a>
              
              <a 
                href="/services" 
                className="group border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-yellow-600 transition-all duration-300"
              >
                <span className="flex items-center">
                  View Our Services
                  <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-yellow-400/30">
              <p className="text-yellow-100 text-lg">
                <span className="font-semibold">Quick Response Guarantee:</span> We respond to all inquiries within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;