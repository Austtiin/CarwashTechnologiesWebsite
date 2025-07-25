import React from 'react';
import Card from '../components/ui/card';

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Recent Projects</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Showcasing our latest installations and success stories across the Midwest
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="SuperWash Express - St. Paul, MN"
              description="Complete tunnel wash installation featuring state-of-the-art conveyor system, high-pressure arches, and advanced chemical delivery systems. Includes water reclaim system and modern POS integration."
            />
            <Card
              title="Quick Clean Car Wash - Fargo, ND"
              description="Self-serve bay renovation with new high-pressure wash systems, heated flooring, and contactless payment solutions. Upgraded chemical delivery and lighting systems."
            />
            <Card
              title="Sparkle Auto Spa - Madison, WI"
              description="Full-service car wash upgrade including new variable-speed conveyor, friction wash equipment, and spot-free rinse system. Added express exterior wash lane."
            />
            <Card
              title="Crystal Clean Wash - Sioux Falls, SD"
              description="New touchless automatic bay installation with dual-arm wash system, undercarriage wash, and premium drying equipment. Includes heated wash bays."
            />
            <Card
              title="Shine Time Car Wash - Duluth, MN"
              description="Complete chemical system overhaul with new pumping stations, proportioning equipment, and heated chemical storage. Improved wash quality and reduced costs."
            />
            <Card
              title="Auto Glow Express - Rochester, MN"
              description="Tunnel wash modernization including new wrap-around brushes, tire shine applicators, and advanced drying system. Added ceramic coating application station."
            />
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Types</h2>
            <p className="text-xl text-gray-600">We handle projects of all sizes and complexities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">New Installations</h3>
              <p className="text-gray-600">Complete car wash facility construction and equipment installation</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Equipment Upgrades</h3>
              <p className="text-gray-600">Modernization and enhancement of existing car wash equipment</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">System Renovations</h3>
              <p className="text-gray-600">Complete overhaul and modernization of aging car wash systems</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Maintenance Programs</h3>
              <p className="text-gray-600">Ongoing service and maintenance to keep equipment running optimally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">What our clients say about working with us</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <blockquote className="text-lg text-gray-700 mb-4">
                "Carwash Technologies transformed our outdated facility into a modern, efficient operation. 
                Our customer satisfaction and revenue have both increased significantly since the upgrade."
              </blockquote>
              <cite className="text-sm font-semibold text-gray-900">- Mike Johnson, SuperWash Express</cite>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <blockquote className="text-lg text-gray-700 mb-4">
                "The team's expertise and attention to detail were outstanding. They delivered on time 
                and within budget, and the results exceeded our expectations."
              </blockquote>
              <cite className="text-sm font-semibold text-gray-900">- Sarah Chen, Quick Clean Car Wash</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let us help you create a successful car wash operation that exceeds your goals
          </p>
          <a href="/contact" className="btn-primary">Get Started Today</a>
        </div>
      </section>
    </div>
  );
}