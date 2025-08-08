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
  animationDirection = 'top',
  backgroundVariant = 'default',
  textAlign = 'center',
  maxWidth = 'max-w-4xl',
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  subtitleClassName = ''
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

  const defaultTitleClasses = `!text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 ${titleClassName}`;
  const defaultDescriptionClasses = `text-lg md:text-xl text-gray-700 ${description && !subtitle ? 'mb-0' : 'mb-4'} ${descriptionClassName}`;
  const defaultSubtitleClasses = `text-lg md:text-xl text-gray-700 ${subtitleClassName}`;

  // Only allow 'top', 'bottom', or undefined for BlurText direction
  const getBlurTextDirection = (dir: 'top' | 'bottom' | 'left' | 'right') => {
    if (dir === 'top' || dir === 'bottom') return dir;
    return undefined;
  };

  return (
    <div className={`${maxWidth} mx-auto ${getBackgroundClasses()} ${className}`}>
      <div className={getTextAlignClasses()}>
        {/* Main Title with Animation */}
        <BlurText
          text={title}
          delay={titleDelay}
          animateBy="words"
          direction={getBlurTextDirection(animationDirection)}
          className={defaultTitleClasses}
        />

        {/* Description with Animation */}
        {description && (
          <BlurText
            text={description}
            delay={descriptionDelay}
            animateBy="words"
            direction={getBlurTextDirection(animationDirection === 'top' ? 'bottom' : animationDirection)}
            className={defaultDescriptionClasses}
          />
        )}

        {/* Subtitle with Animation */}
        {subtitle && (
          <BlurText
            text={subtitle}
            delay={subtitleDelay}
            animateBy="words"
            direction={getBlurTextDirection(animationDirection === 'top' ? 'bottom' : animationDirection)}
            className={defaultSubtitleClasses}
          />
        )}
      </div>
    </div>
  );
}