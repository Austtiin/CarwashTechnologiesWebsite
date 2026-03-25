'use client';

import React from 'react';
import { motion } from 'framer-motion';

type AnimateBy = 'words' | 'letters' | 'characters';
type Direction = 'top' | 'bottom' | 'left' | 'right';

export interface BlurTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  animateBy?: AnimateBy;
  direction?: Direction;
}

function normalizeSeconds(value: number): number {
  // Accept both seconds (0.1) and milliseconds (50) from existing call sites.
  return value > 10 ? value / 1000 : value;
}

function getDirectionalOffset(direction: Direction): { x: number; y: number } {
  switch (direction) {
    case 'bottom':
      return { x: 0, y: 12 };
    case 'left':
      return { x: -12, y: 0 };
    case 'right':
      return { x: 12, y: 0 };
    case 'top':
    default:
      return { x: 0, y: -12 };
  }
}

function segmentText(text: string, animateBy: AnimateBy): string[] {
  if (animateBy === 'words') {
    return text.split(' ').map((word, index, arr) =>
      index < arr.length - 1 ? `${word} ` : word
    );
  }

  return Array.from(text);
}

export default function BlurText({
  text,
  className,
  delay = 0,
  duration = 0.6,
  animateBy = 'letters',
  direction = 'top',
  ...rest
}: BlurTextProps) {
  const parts = segmentText(text, animateBy);
  const baseDelay = normalizeSeconds(delay);
  const baseDuration = normalizeSeconds(duration);
  const { x, y } = getDirectionalOffset(direction);
  const stagger = Math.min(0.06, Math.max(0.015, baseDuration / Math.max(parts.length, 1)));

  return (
    <div className={className} style={{ whiteSpace: 'pre-wrap' }} {...rest}>
      {parts.map((part, index) => (
        <motion.span
          key={`${part}-${index}`}
          initial={{ opacity: 0, filter: 'blur(10px)', x, y }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: baseDuration,
            delay: baseDelay + index * stagger,
            ease: 'easeOut',
          }}
          style={{ display: animateBy === 'words' ? 'inline-block' : 'inline' }}
        >
          {part === ' ' ? '\u00A0' : part}
        </motion.span>
      ))}
    </div>
  );
}

