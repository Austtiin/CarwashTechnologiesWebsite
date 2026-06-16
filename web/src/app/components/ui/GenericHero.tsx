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
  backgroundVariant?: 'white' | 'light-grey' | 'gradient' | 'dark';
  showPattern?: boolean;
  /** Primary background image (rendered full-bleed). */
  leftImage?: string;
  /** Fallback background image if leftImage is not provided. */
  rightImage?: string;
  compact?: boolean;
  /** @deprecated retained for backward compatibility; no longer affects layout */
  centerLane?: 'normal' | 'strong';
  /** @deprecated retained for backward compatibility; no longer affects layout */
  textSurface?: boolean;
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
  leftImage,
  rightImage,
  compact = false,
}: GenericHeroProps) {
  // Single full-bleed image; prefer leftImage, fall back to rightImage.
  const backgroundImage = leftImage || rightImage;
  const hasImage = Boolean(backgroundImage);

  // With an image we always render light text on a dark scrim for consistency.
  const isDark = backgroundVariant === 'dark' || hasImage;

  const bgClass = hasImage
    ? 'bg-slate-950'
    : backgroundVariant === 'light-grey'
    ? 'bg-slate-50'
    : backgroundVariant === 'dark'
    ? 'bg-linear-to-br from-slate-950 via-slate-900 to-slate-950'
    : 'bg-white';

  const sectionSpacing = compact
    ? 'pt-20 sm:pt-22 lg:pt-24 pb-12 sm:pb-14 lg:pb-16'
    : 'pt-22 sm:pt-24 lg:pt-28 pb-14 sm:pb-16 lg:pb-20';
  const titleSize = compact
    ? 'text-3xl sm:text-4xl md:text-4xl lg:text-5xl'
    : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl';

  return (
    <section className={`relative ${bgClass} ${sectionSpacing} overflow-hidden`}>
      {/* Full-bleed background image with directional scrim */}
      {hasImage && (
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={backgroundImage as string}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-slate-950 to-transparent" />
        </div>
      )}

      {/* Yellow top accent for dark / image variants */}
      {isDark && <div className="absolute inset-x-0 top-0 h-1 bg-[#f0da11] z-20" />}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-3xl ${hasImage ? 'text-left' : 'mx-auto text-center'}`}>
          {eyebrow && (
            <div className="inline-flex items-center gap-2 mb-4">
              {hasImage && <span className="w-8 h-0.5 bg-[#f0da11]" />}
              <span className={`text-xs sm:text-sm font-semibold uppercase tracking-wider ${
                isDark ? 'text-[#f0da11]' : 'text-gray-700'
              }`}>
                {eyebrow}
              </span>
            </div>
          )}

          <h1 className={`${titleSize} font-bold mb-3 sm:mb-4 leading-[1.08] ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
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

          <p className={`text-base sm:text-lg md:text-xl font-semibold mb-3 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            {subtitle}
          </p>

          <p className={`text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed max-w-2xl ${
            hasImage ? '' : 'mx-auto'
          } ${isDark ? 'text-slate-200' : 'text-gray-700'}`}>
            {description}
          </p>

          {buttons.length > 0 && (
            <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${
              hasImage ? 'justify-start' : 'justify-center'
            } ${stats.length > 0 ? 'mb-8 sm:mb-10' : ''}`}>
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={
                    button.variant === 'primary'
                      ? 'bg-[#f0da11] text-black font-semibold px-6 py-3 rounded-none hover:bg-[#d0b211] transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base hover:-translate-y-0.5'
                      : isDark
                      ? 'border-2 border-white text-white font-semibold px-6 py-3 rounded-none hover:bg-white hover:text-slate-900 transition-all duration-200 text-sm sm:text-base'
                      : 'border-2 border-gray-900 text-gray-900 font-semibold px-6 py-3 rounded-none hover:bg-gray-900 hover:text-white transition-all duration-200 text-sm sm:text-base'
                  }
                >
                  {button.text}
                </Link>
              ))}
            </div>
          )}

          {stats.length > 0 && (
            <>
              <div className={`w-16 h-0.5 bg-linear-to-r from-transparent via-[#f0da11] to-transparent mb-10 ${
                hasImage ? '' : 'mx-auto'
              }`}></div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className={hasImage ? 'text-left' : 'text-center'}>
                    <div className={`text-2xl md:text-3xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {stat.value}
                    </div>
                    <div className={`text-sm uppercase tracking-wider ${
                      isDark ? 'text-white/60' : 'text-gray-600'
                    }`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Yellow accent baseline */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#f0da11] to-transparent z-20" />
    </section>
  );
}
