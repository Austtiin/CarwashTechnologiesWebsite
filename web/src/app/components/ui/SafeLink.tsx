// components/ui/SafeLink.tsx

import React from 'react';
import Link from 'next/link';
import { createSafeProps } from '@/lib/security';

interface SafeLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

/**
 * A wrapper for Next.js Link that automatically sanitizes its props,
 * particularly 'href', to prevent XSS attacks.
 */
export default function SafeLink({ href, children, className, target, rel }: SafeLinkProps) {
  // Only sanitize href, keep other props as-is for styling
  const safeHref = createSafeProps({ href }).href;
  
  return (
    <Link 
      href={safeHref}
      className={className} // Pass className directly without sanitization
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}