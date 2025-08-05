// components/ui/SafeLink.tsx

import React from 'react';
import Link from 'next/link';
import { createSafeProps } from '../../../lib/security';

type SafeLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
} & React.ComponentPropsWithoutRef<'a'>;

/**
 * A wrapper for Next.js Link that automatically sanitizes its props,
 * particularly 'href', to prevent XSS attacks.
 */
const SafeLink = ({ href, children, className, ...otherProps }: SafeLinkProps) => {
  // Use your createSafeProps function to validate and sanitize the props
  const safeProps = createSafeProps({ href, ...otherProps });
  
  // Check if it's an external link
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
  
  if (isExternal) {
    // For external links, use regular anchor tag
    return (
      <a 
        {...safeProps} 
        className={className}
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  
  // For internal links, use Next.js Link
  return (
    <Link href={safeProps.href} className={className}>
      {children}
    </Link>
  );
};

export default SafeLink;