import React from 'react';
import CarWashAnimation from './components/animations/car-wash-animation';
import Card from './components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Vehicle Wash
                <span className="block text-yellow-400">Technologies</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Sales, Service and Consulting
              </p>
              <p className="text-lg mb-8 text-blue-100">
                Carwash Technologies proudly service the Minnesota, North Dakota, South Dakota and Wisconsin markets.
              </p>
              <div className="space-x-4">
                <a href="/contact" className="btn-primary">Get Started</a>
                <a href="/services" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition-colors">
                  Our Services
                </a>
              </div>
            </div>
            <div className="fade-in-up">
              <CarWashAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let our experienced technicians help you make your car wash more profitable or get you started with a new site. 
              With over 50 years of combined experience, our staff has the knowledge to overcome any hurdle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title="Equipment Sales"
              description="Quality car wash equipment from trusted manufacturers to get your operation running smoothly."
              link="/services"
            />
            <Card
              title="Service & Maintenance"
              description="Professional service and maintenance to keep your car wash operating at peak efficiency."
              link="/services"
            />
            <Card
              title="Consulting"
              description="Expert guidance for new installations and optimization of existing car wash operations."
              link="/services"
            />
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600">See our latest installations and success stories</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="SuperWash Express - St. Paul"
              description="Complete tunnel wash installation with state-of-the-art equipment and chemical systems."
              link="/projects"
            />
            <Card
              title="Quick Clean - Fargo"
              description="Self-serve bay renovation with new high-pressure systems and modern payment solutions."
              link="/projects"
            />
            <Card
              title="Sparkle Auto Spa - Madison"
              description="Full-service car wash upgrade including new conveyor system and water reclaim."
              link="/projects"
            />
          </div>
          
          <div className="text-center mt-8">
            <a href="/projects" className="btn-primary">View All Projects</a>
          </div>
        </div>
      </section>

      {/* Chemicals Section */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Car Wash Chemicals</h2>
              <p className="text-lg text-gray-600 mb-6">
                We supply high-quality car wash chemicals that deliver superior cleaning results while being 
                environmentally responsible. Our chemical programs are designed to maximize efficiency and minimize waste.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Pre-soak and tire cleaners
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Foaming detergents and soaps
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Spot-free rinse aids and drying agents
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Wax and protective coatings
                </li>
              </ul>
              <a href="/chemicals" className="btn-primary">Explore Chemicals</a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">
                  All our chemicals meet the highest industry standards for performance and environmental safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Carwash Technologies offers quality service at a competitive price.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">Phone</h3>
              <p className="text-lg">(612) 408-9010</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">Email</h3>
              <p className="text-lg">info@carwashtechnologiesmn.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">Address</h3>
              <p className="text-lg">322 19th St. SW<br />Forest Lake, MN 55025</p>
            </div>
          </div>
          
          <a href="/contact" className="btn-primary">Contact Us Today</a>
        </div>
      </section>
    </div>
  );
}