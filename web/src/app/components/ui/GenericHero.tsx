'use client';

import React from 'react';
import Link from 'next/link';

interface HeroButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

interface HeroStat {
  value: string;
  label: string;
}

interface GenericHeroProps {
  eyebrow?: string;
  title: string;
  highlightedWord?: string;
  subtitle: string;
  description: string;
  buttons?: HeroButton[];
  stats?: HeroStat[];
  backgroundVariant?: 'white' | 'light-grey' | 'gradient';
  showPattern?: boolean;
}

export default function GenericHero({
  eyebrow,
  title,
  highlightedWord,
  subtitle,
  description,
  buttons = [],
  stats = [],
  backgroundVariant = 'white',
  showPattern = true
}: GenericHeroProps) {
  const bgClass = backgroundVariant === 'light-grey' ? 'bg-[#f6f6f6]' : 'bg-white';

  return (
    <section className={`relative ${bgClass} pt-32 pb-20 overflow-hidden`}>
      {/* Animated Grid Background */}
      {showPattern && (
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #1f2937 1px, transparent 1px),
                linear-gradient(to bottom, #1f2937 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'gridMove 20s linear infinite'
            }}
          />
        </div>
      )}

      {/* Diagonal Accent Lines - Water Flow Suggestion */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-2 bg-[#f0da11] transform -rotate-12 translate-x-20"></div>
        <div className="absolute top-20 right-0 w-full h-1 bg-[#f0da11] transform -rotate-12 translate-x-20"></div>
        <div className="absolute top-40 right-0 w-full h-2 bg-[#f0da11] transform -rotate-12 translate-x-20"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-[#f0da11]/10 transform rotate-45" 
           style={{ animation: 'float 6s ease-in-out infinite' }} />
      <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-gray-900/5"
           style={{ animation: 'float 8s ease-in-out infinite 2s' }} />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center" style={{ animation: 'fadeInUp 0.8s ease-out forwards', opacity: 0 }}>
          
          {eyebrow && (
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                {eyebrow}
              </span>
            </div>
          )}

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {highlightedWord ? (
              <>
                {title.split(highlightedWord)[0]}
                <span className="text-[#f0da11]">{highlightedWord}</span>
                {title.split(highlightedWord)[1]}
              </>
            ) : (
              title
            )}
          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            {subtitle}
          </p>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>

          {buttons.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={
                    button.variant === 'primary'
                      ? 'bg-[#f0da11] text-black font-semibold px-8 py-4 hover:-translate-y-1 transition-all duration-200 shadow-md hover:shadow-lg text-lg'
                      : 'border-2 border-gray-900 text-gray-900 font-semibold px-8 py-4 hover:bg-gray-900 hover:text-white transition-all duration-200 text-lg'
                  }
                >
                  {button.text}
                </Link>
              ))}
            </div>
          )}

          {stats.length > 0 && (
            <>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#f0da11] to-transparent mx-auto mb-12"></div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards', opacity: 0 }}>
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(45deg);
          }
          50% {
            transform: translateY(-20px) rotate(45deg);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
      `}</style>
    </section>
  );
}
