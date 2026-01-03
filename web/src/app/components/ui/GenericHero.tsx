'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  leftImage?: string;
  rightImage?: string;
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
  showPattern = true,
  leftImage,
  rightImage
}: GenericHeroProps) {
  const bgClass = backgroundVariant === 'light-grey' ? 'bg-[#f6f6f6]' : 'bg-white';

  return (
    <section className={`relative ${bgClass} pt-32 pb-20 overflow-hidden`}>
      {/* Background Equipment Image - Left Side */}
      {leftImage && (
        <div className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={leftImage}
              alt=""
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent"></div>
          </div>
        </div>
      )}

      {/* Background Equipment Image - Right Side */}
      {rightImage && (
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={rightImage}
              alt=""
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          </div>
        </div>
      )}

      {/* Animated Grid Background */}
      {showPattern && (
        <div className="absolute inset-0 opacity-[0.12] overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #1f2937 1px, transparent 1px),
                linear-gradient(to bottom, #1f2937 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'gridMove 20s linear infinite',
              top: '-60px' // Offset to prevent visible seam at top
            }}
          />
        </div>
      )}

      {/* Diagonal Accent Lines - Water Flow Suggestion */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.06] overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-0 w-full h-2 bg-[#f0da11] transform -rotate-12 translate-x-20"></div>
        <div className="absolute top-32 right-0 w-full h-1 bg-[#f0da11] transform -rotate-12 translate-x-20"></div>
        <div className="absolute top-52 right-0 w-full h-2 bg-[#f0da11] transform -rotate-12 translate-x-20"></div>
        <div className="absolute top-72 right-0 w-full h-1 bg-[#f0da11] transform -rotate-12 translate-x-20"></div>
      </div>

      {/* Water Droplets - Animated */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-400/20 rounded-full hidden lg:block"
           style={{ animation: 'dropFall 3s ease-in infinite' }} />
      <div className="absolute top-10 left-1/3 w-3 h-3 bg-blue-400/15 rounded-full hidden lg:block"
           style={{ animation: 'dropFall 4s ease-in infinite 1s' }} />
      <div className="absolute top-32 right-1/4 w-2 h-2 bg-blue-400/20 rounded-full hidden lg:block"
           style={{ animation: 'dropFall 3.5s ease-in infinite 2s' }} />
      <div className="absolute top-16 right-1/3 w-3 h-3 bg-blue-400/15 rounded-full hidden lg:block"
           style={{ animation: 'dropFall 4.5s ease-in infinite 0.5s' }} />

      {/* Soap Bubbles - Rising */}
      <div className="absolute bottom-20 left-16 w-8 h-8 rounded-full border-2 border-blue-300/20 hidden lg:block"
           style={{ animation: 'bubbleRise 6s ease-in-out infinite' }} />
      <div className="absolute bottom-32 left-32 w-6 h-6 rounded-full border-2 border-blue-300/15 hidden lg:block"
           style={{ animation: 'bubbleRise 7s ease-in-out infinite 2s' }} />
      <div className="absolute bottom-40 right-24 w-10 h-10 rounded-full border-2 border-blue-300/10 hidden lg:block"
           style={{ animation: 'bubbleRise 8s ease-in-out infinite 1s' }} />
      <div className="absolute bottom-24 right-40 w-5 h-5 rounded-full border-2 border-blue-300/20 hidden lg:block"
           style={{ animation: 'bubbleRise 6.5s ease-in-out infinite 3s' }} />

      {/* Sparkle/Shine Effects */}
      <div className="absolute top-1/4 left-20 w-1 h-1 bg-[#f0da11] rounded-full hidden lg:block"
           style={{ animation: 'sparkle 2s ease-in-out infinite' }} />
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-[#f0da11] rounded-full hidden lg:block"
           style={{ animation: 'sparkle 2s ease-in-out infinite 0.5s' }} />
      <div className="absolute top-2/3 left-32 w-1 h-1 bg-[#f0da11] rounded-full hidden lg:block"
           style={{ animation: 'sparkle 2s ease-in-out infinite 1s' }} />
      <div className="absolute top-1/2 right-28 w-1 h-1 bg-[#f0da11] rounded-full hidden lg:block"
           style={{ animation: 'sparkle 2s ease-in-out infinite 1.5s' }} />

      {/* Floating Geometric Elements */}
      <div className="absolute top-32 left-16 w-16 h-16 border-2 border-[#f0da11]/10 transform rotate-45 hidden lg:block"
           style={{ animation: 'float 6s ease-in-out infinite' }} />
      <div className="absolute bottom-32 right-32 w-20 h-20 border-2 border-gray-900/5 hidden lg:block"
           style={{ animation: 'float 8s ease-in-out infinite 2s' }} />
      <div className="absolute top-1/2 right-16 w-12 h-12 border-2 border-[#f0da11]/5 transform -rotate-12 hidden lg:block"
           style={{ animation: 'float 7s ease-in-out infinite 1s' }} />

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

        @keyframes dropFall {
          0% {
            transform: translateY(0);
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes bubbleRise {
          0% {
            transform: translateY(0);
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
