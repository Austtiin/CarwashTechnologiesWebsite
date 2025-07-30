'use client';
import React, { useState, useEffect } from 'react';
import BlurText from './components/animations/BlurText';
import Card from './components/ui/card';
import Aurora from './components/animations/Aurora';
import ShinyText from './components/animations/ShinyText';

export default function Home() {
  const [time, setTime] = useState(0);

  // Update time for Aurora animation using requestAnimationFrame
  useEffect(() => {
    let animationId: number;
    const startTime = Date.now();

    const updateTime = () => {
      const elapsed = (Date.now() - startTime) / 1000; // Convert to seconds
      setTime(elapsed);
      animationId = requestAnimationFrame(updateTime);
    };

    animationId = requestAnimationFrame(updateTime);

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Callback function for when the hero animation completes
  const handleAnimationComplete = () => {
    console.log('Hero animation completed!');
  };

  return (
    <div className="min-h-screen relative">
      {/* Background gradient for the entire page */}
      {/* Aurora Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={["#017cff", "#f85656", "#1cc251"]} // Yellow theme colors
          blend={0.7}
          amplitude={0.25}
          speed={16.0}
          time={time}
        />
      </div>

      {/* Hero Section: Displays a welcome message and company logo */}
      <section className="relative z-10 bg-gradient-to-r from-gray-50/95 to-gray-90/95 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content for the hero section */}
            <div>
              <ShinyText
                text="Welcome to Carwash Technologies"
                disabled={false}
                speed={3}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
              />

              <BlurText
                text="Sales, Service and Consulting"
                delay={150}
                animateBy="words"
                direction="top"
                className="md:!text-[2rem] text-[6rem] font-extrabold text-gray-900 mb-6"
              />

              <BlurText
                text="Carwash Technologies proudly service the Minnesota, North Dakota, South Dakota and Wisconsin markets."
                delay={200}
                animateBy="words"
                direction="bottom"
                className="text-xl md:text-2xl mb-8 text-gray-900"
              />

              <div className="space-x-4 fade-in-up">
                <a href="/contact" className="btn-primary">Get Started</a>
                <a href="/services" className="border border-slate-500 text-slate-900 px-6 py-3 rounded-lg hover:bg-white hover:text-yellow-600 transition-colors">
                  Our Services
                </a>
              </div>
            </div>

            {/* Company Logo */}
            <div className="fade-in-up flex justify-center">
              <div className="flex items-center justify-center w-[400px] h-[400px] bg-white/10  rounded-2xl p-3">
                <img
                  src="/logoCWT.webp"
                  alt="Carwash Technologies Logo"
                  className="max-w-full max-h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="relative z-10 py-16 bg-gray-50/100 backdrop-blur-sm">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
            <BlurText
              text="Our Expertise"
              delay={100}
              animateBy="words"
              direction="top"
              className="md:!text-[2rem] text-[6rem] font-extrabold text-gray-900 mb-6"
            />

            <span className="block md:text-2xl text-gray-600 mt-4">
              Let our experienced technicians help you make your car wash more profitable or get you started with a new site.
            </span>
            <span className="block md:text-2xl text-gray-600 mt-4">
              With over 50 years of combined experience, our staff has the knowledge to overcome any hurdle.
            </span>
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

      {/* Recent Projects Section */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-white/100 via-gray-50/80 to-yellow-50/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <BlurText
              text="Recent Projects"
              delay={100}
              animateBy="words"
              direction="top"
              className="md:!text-[2rem] text-[6rem] font-extrabold text-gray-900 mb-6"
            />
            <BlurText
              text="See our latest installations and success stories"
              delay={150}
              animateBy="words"
              direction="bottom"
              className="text-xl text-gray-600"
            />
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
      <section className="relative z-10 py-16 bg-yellow-50/100 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <BlurText
                text="Premium Car Wash Chemicals"
                delay={100}
                animateBy="words"
                direction="top"
                className="md:!text-[2rem] text-[6rem] font-extrabold text-gray-900 mb-6"
              />
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
            
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <div className="text-center">
              <div className="w-30 h-30 flex items-center-center mx-auto mb-5">
                <div className="mx-auto flex items-center justify-center p-1 gap-6">
                    <img src="/logoSimo.webp" alt="Chemical Icon" className="max-w-full max-h-full" /> 
                <img src="/logoCWT.webp" alt="Chemical Icon" className="max-w-full max-h-full" />
                <img src="/logoVertech.webp" alt="Chemical Icon" className="max-w-full max-h-full" />
                </div>
              </div>
                <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">
                  All of our chemicals meet the highest industry standards for performance and environmental safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16 bg-gray-100/100 backdrop-blur-sm text-white">
        <div className="container mx-auto px-4 text-center">
          <BlurText
            text="Ready to Get Started?"
            delay={100}
            animateBy="words"
            direction="top"
            className="md:!text-[2rem] text-[6rem] font-extrabold text-gray-900 mb-6"
          />
          <BlurText
            text="Carwash Technologies offers quality service at a competitive price."
            delay={150}
            animateBy="words"
            direction="bottom"
            className="text-xl mb-8 text-gray-300"
          />

          <div className="grid md:grid-cols-3 gap-3 mb-8">
            <div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-400 border-b-2 border-yellow-400 inline-block pb-1">Phone</h3>
              <p className="text-lg">(612) 408-9010</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400 border-b-2 border-yellow-400 inline-block pb-1">Contact Us</h3>
                {/* Contact Us button placed under the "Contact Us" label */}
                <div className="flex flex-col items-center mt-4 space-y-2">
                  <a href="/contact" className="btn-primary block">Contact Us Today</a>
                </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400 border-b-2 border-yellow-400 inline-block pb-1">Address</h3>
              <p className="text-lg">322 19th St. SW<br />Forest Lake, MN 55025</p>
              
            </div>
            
          </div>
          
        </div>
      </section>
    </div>
  );
}

