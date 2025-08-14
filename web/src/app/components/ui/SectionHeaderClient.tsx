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

  return (
    <div className={`${maxWidth} mx-auto ${getBackgroundClasses()} ${className}`}>
      <div className={getTextAlignClasses()}>
        {/* Main Title with Animation */}
        <BlurText
          text={title}
          delay={titleDelay}
          duration={0.1}
            className="font-friz text-sm md:text-xl lg:text-2xl max-w-2xl text-black"
        />

        {/* Description with Animation */}
        {description && (
          <BlurText
            text={description}
            delay={descriptionDelay}
            duration={0.1}
            className="text-sm md:text-sm lg:text-xl max-w-xl text-black"
          />
        )}

        {/* Subtitle with Animation */}
        {subtitle && (
          <BlurText
            text={subtitle}
            delay={subtitleDelay}
            duration={0.1}
            className="text-lg md:text-xl lg:text-2xl max-w-4xl text-white"
          />
        )}
      </div>
    </div>
  );
}

