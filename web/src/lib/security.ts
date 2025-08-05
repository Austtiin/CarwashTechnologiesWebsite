import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';

// Comprehensive input validation schemas
export const securitySchemas = {
  // URL validation - prevents javascript:, data:, vbscript: etc.
  safeUrl: z.string().refine(
    (url) => {
      if (typeof url !== 'string') return false;
      
      // Allow relative URLs, http, https, tel, mailto
      const allowedProtocols = /^(https?:\/\/|\/|tel:|mailto:)/i;
      const dangerousProtocols = /^(javascript:|data:|vbscript:|file:|ftp:)/i;
      
      if (dangerousProtocols.test(url)) return false;
      if (url.startsWith('/') || allowedProtocols.test(url)) return true;
      
      return false;
    },
    { message: "Invalid or potentially unsafe URL" }
  ),

  // Safe text content - prevents script injection
  safeText: z.string().max(1000).refine(
    (text) => {
      if (typeof text !== 'string') return false;
      
      // Block script tags, event handlers, and other dangerous patterns
      const dangerousPatterns = [
        /<script/i, /<\/script>/i, /javascript:/i, /vbscript:/i,
        /on\w+\s*=/i, /eval\s*\(/i, /expression\s*\(/i,
        /<iframe/i, /<embed/i, /<object/i, /<applet/i
      ];
      
      return !dangerousPatterns.some(pattern => pattern.test(text));
    },
    { message: "Text contains potentially dangerous content" }
  ),

  // CSS class validation
  safeClassName: z.string().refine(
    (className) => {
      if (typeof className !== 'string') return false;
      
      // Only allow alphanumeric, hyphens, underscores, spaces, and common CSS syntax
      const validClassPattern = /^[a-zA-Z0-9\s\-_:\/\[\]\(\)\.]+$/;
      const dangerousPatterns = /expression\(|javascript:|url\((?!['"]?data:image)/i;
      
      return validClassPattern.test(className) && !dangerousPatterns.test(className);
    },
    { message: "Invalid CSS class name" }
  ),

  // Email validation
  email: z.string().email().max(254),

  // Phone validation
  phone: z.string().regex(/^[\d\s\-\(\)\+\.]+$/).max(20),

  // Contact form data
  contactForm: z.object({
    name: z.string().min(2).max(100),
    email: z.string().email().max(254),
    phone: z.string().regex(/^[\d\s\-\(\)\+\.]*$/).max(20).optional(),
    company: z.string().max(100).optional(),
    inquiry: z.string().min(10).max(1000),
    bestTime: z.enum(['morning', 'afternoon', 'evening', 'anytime', '']),
    urgency: z.enum(['normal', 'soon', 'urgent']),
    contactType: z.string().max(50)
  })
};

// Sanitization functions
export const sanitize = {
  // HTML sanitization - removes all HTML tags and dangerous content
  html: (input: unknown): string => {
    if (typeof input !== 'string') return '';
    // Use sanitize-html to remove all HTML tags and dangerous content
    return sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} })
      .trim()
      .substring(0, 1000);
  },

  // URL sanitization
  url: (input: unknown): string => {
    if (typeof input !== 'string') return '#';
    
    try {
      const result = securitySchemas.safeUrl.parse(input);
      return result;
    } catch {
      return '#'; // Return safe fallback
    }
  },

  // CSS class sanitization
  className: (input: unknown): string => {
    if (typeof input !== 'string') return '';
    
    try {
      return securitySchemas.safeClassName.parse(input);
    } catch {
      return ''; // Return empty string for invalid classes
    }
  },

  // Text content sanitization
  text: (input: unknown): string => {
    if (typeof input !== 'string') return '';
    
    try {
      return securitySchemas.safeText.parse(input);
    } catch {
      return sanitize.html(input);
    }
  }
};

// Safe component props wrapper
export function createSafeProps<T extends Record<string, unknown>>(
  props: T,
  validationSchema?: z.ZodSchema
): T {
  const safeProps = { ...props };

  // Sanitize common dangerous props
  if (Object.prototype.hasOwnProperty.call(safeProps, 'href') && typeof (safeProps as any).href === 'string') {
    (safeProps as any).href = sanitize.url((safeProps as any).href);
  }

  if (Object.prototype.hasOwnProperty.call(safeProps, 'src') && typeof (safeProps as any).src === 'string') {
    (safeProps as any).src = sanitize.url((safeProps as any).src);
  }

  if (
    Object.prototype.hasOwnProperty.call(safeProps, 'className') &&
    typeof (safeProps as Record<string, unknown>)['className'] === 'string'
  ) {
    (safeProps as Record<string, unknown>)['className'] = sanitize.className(
      (safeProps as Record<string, unknown>)['className']
    );
  }

  // Remove any event handlers that might have been passed as props
  Object.keys(safeProps).forEach(key => {
    if (key.startsWith('on') && typeof safeProps[key] === 'string') {
      delete safeProps[key];
    }
  });

  // Apply custom validation if provided
  if (validationSchema) {
    try {
      return validationSchema.parse(safeProps) as T;
    } catch (error) {
      console.warn('Props validation failed:', error);
      return safeProps;
    }
  }

  return safeProps;
}

// Rate limiting utility
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();

  isAllowed(identifier: string, maxAttempts: number = 5, windowMs: number = 60000): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(identifier) || [];
    
    // Remove old attempts outside the window
    const validAttempts = attempts.filter(time => now - time < windowMs);
    
    if (validAttempts.length >= maxAttempts) {
      return false;
    }
    
    validAttempts.push(now);
    this.attempts.set(identifier, validAttempts);
    return true;
  }

  reset(identifier: string): void {
    this.attempts.delete(identifier);
  }
}

export const globalRateLimiter = new RateLimiter();

