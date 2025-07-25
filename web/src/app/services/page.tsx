import React from 'react';
import Card from '../components/ui/card';

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive car wash solutions from equipment sales to ongoing support
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title="Equipment Sales"
              description="Premium car wash equipment from leading manufacturers. We help you choose the right equipment for your specific needs and budget."
            />
            <Card
              title="Installation & Setup"
              description="Professional installation services ensuring your equipment is properly configured and optimized for maximum performance."
            />
            <Card
              title="Service & Maintenance"
              description="Regular maintenance and emergency repair services to keep your car wash running smoothly and minimize downtime."
            />
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Equipment Categories</h2>
            <p className="text-xl text-gray-600">Complete range of car wash equipment solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3">Tunnel Systems</h3>
              <p className="text-gray-600">Complete conveyor car wash systems for high-volume operations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3">Self-Serve Bays</h3>
              <p className="text-gray-600">High-pressure wash systems and bay equipment for self-service operations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3">Touchless Systems</h3>
              <p className="text-gray-600">Automated touchless wash systems for gentle, effective cleaning</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3">Water Recovery</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Chemical Solutions</h2>
              <p className="text-lg text-gray-600 mb-6">
                We supply a complete line of high-performance car wash chemicals designed to 
                deliver superior results while being environmentally responsible.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Pre-Treatment</h3>
                    <p className="text-gray-600">Bug removers, tire cleaners, and pre-soak solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Wash Chemicals</h3>
                    <p className="text-gray-600">Detergents, soaps, and foaming agents for effective cleaning</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Finishing Products</h3>
                    <p className="text-gray-600">Waxes, sealers, and spot-free rinse aids</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Specialty Solutions</h3>
                    <p className="text-gray-600">Custom chemical programs tailored to your needs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Chemical Program Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Consistent quality results
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Cost-effective solutions
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Environmental compliance
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Regular delivery and support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Consulting Services</h2>
            <p className="text-xl text-gray-600">Expert guidance for every stage of your car wash journey</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card
              title="New Site Development"
              description="Complete site analysis, equipment recommendations, and project planning for new car wash facilities."
            />
            <Card
              title="Operational Optimization"
              description="Performance analysis and recommendations to improve efficiency and profitability of existing operations."
            />
            <Card
              title="Equipment Upgrades"
              description="Assessment of current equipment and strategic upgrade planning to enhance performance and reduce costs."
            />
            <Card
              title="Training & Support"
              description="Staff training programs and ongoing operational support to ensure optimal performance and safety."
            />
          </div>
        </div>
      </section>
    </div>
  );
}