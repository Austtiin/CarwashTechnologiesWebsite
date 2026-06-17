'use client';

import React from 'react';
import BlurText from '../animations/BlurText';

interface SectionHeaderClientProps {
  title: string;
  description?: string;
  subtitle?: string;
  titleDelay?: number;
  descriptionDelay?: number;
  subtitleDelay?: number;
  animationDirection?: 'top' | 'bottom' | 'left' | 'right';
  backgroundVariant?: 'default' | 'transparent' | 'solid';
  textAlign?: 'center' | 'left' | 'right';
  maxWidth?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  subtitleClassName?: string;
}

export default function SectionHeaderClient({
  title,
  description,
  subtitle,
  titleDelay = 100,
  descriptionDelay = 150,
  subtitleDelay = 200,
 
  backgroundVariant = 'default',
  textAlign = 'center',
  maxWidth = 'max-w-4xl',
  className = '',
}: SectionHeaderClientProps) {
  const getBackgroundClasses = () => {
    switch (backgroundVariant) {
      case 'transparent':
        return 'bg-transparent';
      case 'solid':
        return 'bg-white rounded-xl p-8 border border-gray-200 shadow-md';
      case 'default':
      default:
        return 'bg-white/75 backdrop-blur-sm rounded-xl p-8 border border-gray-200/40 shadow-md';
    }
  };

  const getTextAlignClasses = () => {
    switch (textAlign) {
      case 'left':
        return 'text-left';
      case 'right':
        return 'text-right';
      case 'center':
      default:
        return 'text-center';
    }
  };

  const alignItems =
    textAlign === 'left' ? 'items-start' : textAlign === 'right' ? 'items-end' : 'items-center';

  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div className={`${maxWidth} w-full ${getBackgroundClasses()}`}>
        <div className={`flex flex-col ${alignItems} ${getTextAlignClasses()}`}>
          {/* Main Title with Animation — matches the static SectionHeader styling */}
          <BlurText
            text={title}
            delay={titleDelay}
            duration={0.1}
            className="font-friz text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5"
          />

          {/* Description with Animation */}
          {description && (
            <BlurText
              text={description}
              delay={descriptionDelay}
              duration={0.1}
              className={`text-base sm:text-lg md:text-xl text-gray-700 ${subtitle ? 'mb-4' : 'mb-0'}`}
            />
          )}

          {/* Subtitle with Animation */}
          {subtitle && (
            <BlurText
              text={subtitle}
              delay={subtitleDelay}
              duration={0.1}
              className="text-base sm:text-lg md:text-xl text-gray-700"
            />
          )}
        </div>
      </div>
    </div>
  );
}

