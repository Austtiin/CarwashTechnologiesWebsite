// Server Component (remove any client-side animations if present)

import React from 'react';
import SectionHeaderClient from './SectionHeaderClient';

interface SectionHeaderProps {
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

// For static headers (no animations)
export default function SectionHeader(props: SectionHeaderProps) {
  const {
    title,
    description,
    subtitle,
    titleDelay,
    descriptionDelay,
    subtitleDelay,
    backgroundVariant = 'default',
    textAlign = 'center',
    maxWidth = 'max-w-4xl',
    className = '',
    titleClassName = '',
    descriptionClassName = '',
    subtitleClassName = ''
  } = props;

  // If animations are needed, use client component
  const hasAnimations = titleDelay !== undefined || descriptionDelay !== undefined || subtitleDelay !== undefined;
  
  if (hasAnimations) {
    return <SectionHeaderClient {...props} />;
  }

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
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 ${titleClassName}`}>
          {title}
        </h2>
        
        {description && (
          <p className={`text-lg md:text-xl text-gray-700 ${description && !subtitle ? 'mb-0' : 'mb-4'} ${descriptionClassName}`}>
            {description}
          </p>
        )}

        {subtitle && (
          <p className={`text-lg md:text-xl text-gray-700 ${subtitleClassName}`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}