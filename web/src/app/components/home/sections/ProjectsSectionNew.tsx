'use client';

// Clean Tech Projects Section
import React from 'react';
import Link from 'next/link';

export default function ProjectsSectionNew() {
  const projects = [
    {
      title: 'SuperWash Express',
      location: 'Dallas, TX',
      type: 'Express Tunnel',
      description: 'Complete 120ft express tunnel installation with state-of-the-art payment systems and customer management software.',
      image: '/images/projects/superwash.jpg',
      stats: [
        { label: 'Bays', value: '1 Tunnel' },
        { label: 'Timeline', value: '8 weeks' },
        { label: 'Equipment', value: 'PDQ' }
      ]
    },
    {
      title: 'Quick Clean Auto Spa',
      location: 'Austin, TX',
      type: 'In-Bay Automatic',
      description: 'Modern in-bay automatic system with touchless technology and advanced chemical delivery.',
      image: '/images/projects/quickclean.jpg',
      stats: [
        { label: 'Bays', value: '3 Auto' },
        { label: 'Timeline', value: '6 weeks' },
        { label: 'Equipment', value: 'PECO' }
      ]
    },
    {
      title: 'Sudz Car Wash',
      location: 'Forest Lake, MN',
      type: 'Self-Serve & Automatic',
      description: 'Five Bay, featuring three car washes and two self service systems with exterior vacuums.',
      image: '/IMG_20260101_213851.jpg',
      stats: [
        { label: 'Bays', value: '5 Total (3 Wash + 2 Self Serve)' },
        { label: 'Timeline', value: '6 weeks' },
        { label: 'Equipment', value: 'PDQ' }
      ]
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-yellow-50/30 to-white py-24 overflow-hidden">
      {/* Animated Diagonal Grid */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #1f2937 1px, transparent 1px),
              linear-gradient(-45deg, #1f2937 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-40 h-40 border-r-2 border-t-2 border-[#f0da11]/10" />
      <div className="absolute bottom-0 left-0 w-40 h-40 border-l-2 border-b-2 border-[#f0da11]/10" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#f0da11]"></div>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Recent Work</span>
            <div className="w-8 h-px bg-[#f0da11]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects That Define <span className="text-[#f0da11]">Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From concept to completion, we deliver car wash solutions that exceed expectations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border-b-4 border-transparent hover:border-[#f0da11]"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              {/* Image Container */}
              <div className="relative h-56 bg-gray-200 overflow-hidden">
                {/* Actual Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                {/* Dark overlay on hover for better text visibility */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Type Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 text-xs font-semibold group-hover:bg-[#f0da11] group-hover:text-black transition-all duration-300 z-10">
                  {project.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#f0da11] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{project.location}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100 group-hover:border-[#f0da11] transition-colors duration-300">
                  {project.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                      <div className="text-sm font-semibold text-gray-900 group-hover:text-[#f0da11] transition-colors">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/projects"
            className="inline-block bg-[#f0da11] text-black font-semibold px-8 py-3.5 hover:-translate-y-0.5 transition-transform duration-200 shadow-sm hover:shadow-md"
          >
            View All Projects
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
