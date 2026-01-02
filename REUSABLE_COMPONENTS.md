# Reusable Component Library

This document outlines the reusable components created for the Clean Tech in Motion design system. These components can be used across all pages to maintain consistency and speed up development.

---

## 1. GenericHero

**Location**: `web/src/app/components/ui/GenericHero.tsx`

**Purpose**: Flexible hero section with built-in animations and background effects.

**Features**:
- Animated grid background with water flow suggestions
- Floating geometric elements
- Diagonal accent lines
- Support for eyebrow text, title with highlighted words, subtitle, description
- Multiple CTA buttons (primary/secondary styles)
- Stats bar display
- Multiple background variants

**Props**:
```typescript
interface GenericHeroProps {
  eyebrow?: string;              // Small text above title
  title: string;                 // Main heading
  highlightedWord?: string;      // Word to highlight in yellow
  subtitle: string;              // Secondary heading
  description: string;           // Paragraph text
  buttons?: HeroButton[];        // Array of CTA buttons
  stats?: HeroStat[];           // Array of stats to display
  backgroundVariant?: 'white' | 'light-grey' | 'gradient';
  showPattern?: boolean;         // Show/hide animated grid
}

interface HeroButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

interface HeroStat {
  value: string;  // e.g., "50+"
  label: string;  // e.g., "Years Experience"
}
```

**Usage Example**:
```tsx
import GenericHero from '@/app/components/ui/GenericHero';

<GenericHero
  eyebrow="Industry Leading"
  title="Professional Car Wash Solutions"
  highlightedWord="Professional"
  subtitle="Built for Excellence"
  description="From equipment to service, we deliver complete solutions."
  buttons={[
    { text: 'Get Started', href: '/contact', variant: 'primary' },
    { text: 'Learn More', href: '/about', variant: 'secondary' }
  ]}
  stats={[
    { value: '50+', label: 'Years' },
    { value: '500+', label: 'Installs' }
  ]}
  backgroundVariant="white"
  showPattern={true}
/>
```

**Visual Effects**:
- Animated grid moving diagonally (20s loop)
- Floating squares with 6-8s float animation
- Diagonal yellow accent lines (water flow suggestion)
- Fade-in-up animations for content

---

## 2. GenericServicesGrid

**Location**: `web/src/app/components/ui/GenericServicesGrid.tsx`

**Purpose**: Flexible grid layout for services, features, or any card-based content.

**Features**:
- Configurable column layout (2, 3, or 4 columns)
- Subtle wave pattern background
- Icon support with hover animations
- Optional links for each item
- Staggered fade-in animations
- Optional CTA at bottom

**Props**:
```typescript
interface GenericServicesGridProps {
  eyebrow?: string;
  title: string;
  highlightedWord?: string;
  description?: string;
  items: ServiceItem[];
  columns?: 2 | 3 | 4;           // Number of columns
  backgroundVariant?: 'white' | 'light-grey';
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

interface ServiceItem {
  icon: React.ReactNode;         // SVG icon component
  title: string;
  description: string;
  link?: string;                 // Optional link (makes card clickable)
}
```

**Usage Example**:
```tsx
import GenericServicesGrid from '@/app/components/ui/GenericServicesGrid';

const services = [
  {
    icon: <svg>...</svg>,
    title: 'Equipment Sales',
    description: 'Premium wash equipment...',
    link: '/equipment-sales'
  },
  // ... more items
];

<GenericServicesGrid
  eyebrow="What We Offer"
  title="Complete Solutions for Modern Wash Operations"
  highlightedWord="Modern"
  description="From initial installation to ongoing support"
  items={services}
  columns={4}
  backgroundVariant="light-grey"
  showCTA={true}
  ctaText="View All Services"
  ctaLink="/services"
/>
```

**Visual Effects**:
- SVG wave pattern background (opacity 0.02)
- Cards with left border accent on hover
- Icons: grey → yellow background on hover
- Staggered fadeInUp (0.1s increment per card)

---

## 3. CallToActionNew (Enhanced)

**Location**: `web/src/app/components/ui/CallToActionNew.tsx`

**Purpose**: Final section CTA with contact cards and visual effects.

**Features**:
- Dark background with high contrast
- Animated grid with pulsing effect
- Diagonal flow lines (water motion)
- Corner accent shapes
- Floating geometric elements
- Three contact cards (Phone, Quote, Location)

**Props**:
```typescript
interface CallToActionProps {
  title: string;
  description: string;
  buttons: CTAButton[];
  contactInfo?: {
    phone?: string;
    address?: string;
    showContactCard?: boolean;
  };
}

interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}
```

**Usage Example**:
```tsx
import CallToActionNew from '@/app/components/ui/CallToActionNew';

<CallToActionNew
  title="Ready to Transform Your Business?"
  description="Join hundreds of satisfied customers"
  buttons={[
    { text: 'Get Started', href: '/contact', variant: 'primary' },
    { text: 'Learn More', href: '/services', variant: 'secondary' }
  ]}
  contactInfo={{
    phone: "(612) 408-9010",
    address: "322 19th St. SW<br />Forest Lake, MN 55025",
    showContactCard: true
  }}
/>
```

**Visual Effects**:
- Animated grid with pulse (3s loop, opacity 0.08-0.12)
- Three diagonal flow lines with staggered animation (8s, 2s delay each)
- Corner border accents (top-left, bottom-right)
- Two floating geometric squares (6s, 8s float)
- Contact cards with subtle glass-morphism effect

---

## Background Effects Library

### Pattern Types

1. **Animated Grid** (Hero)
   - Moving diagonal grid (60x60px)
   - 20s linear infinite animation
   - Opacity: 0.03-0.04

2. **Dot Grid** (Services, General)
   - Radial gradient dots
   - 50x50px spacing
   - Opacity: 0.02

3. **Diagonal Grid** (Projects)
   - 45° and -45° intersecting lines
   - 80x80px spacing
   - Opacity: 0.02

4. **Hexagonal Pattern** (WhoWeServe)
   - SVG-based hexagon grid
   - 100x86.6px pattern
   - Opacity: 0.015

5. **Circular Wave** (Chemicals)
   - Concentric circles
   - 60px spacing, 25px radius
   - Opacity: 0.015

6. **Wave Pattern** (Generic Services)
   - SVG curve pattern
   - 100x100px repeat
   - Opacity: 0.02

### Accent Elements

1. **Diagonal Flow Lines**
   - Yellow stripes rotated -12°
   - Suggests water flow / automation
   - Heights: 1-2px, spaced vertically
   - Opacity: 0.05-0.06

2. **Floating Geometric Shapes**
   - Squares rotated 45° or unrotated
   - Border-only (2px)
   - Float animation: 6-8s ease-in-out
   - Opacity: 0.05-0.10

3. **Corner Accents**
   - L-shaped borders
   - Top-left / bottom-right placement
   - Border width: 2-4px
   - Opacity: 0.10-0.20

4. **Horizontal Flow Lines**
   - Full-width gradient lines
   - Positioned at sections 1/4, 1/2, 3/4
   - Opacity: 0.20

---

## Using on Other Pages

### About Page Example

```tsx
import GenericHero from '@/app/components/ui/GenericHero';
import GenericServicesGrid from '@/app/components/ui/GenericServicesGrid';

// Hero Section
<GenericHero
  eyebrow="Our Story"
  title="Decades of Car Wash Excellence"
  highlightedWord="Excellence"
  subtitle="Built on Trust and Innovation"
  description="Since 1970, we've been the Midwest's trusted partner..."
  buttons={[
    { text: 'Contact Us', href: '/contact', variant: 'primary' }
  ]}
  stats={[
    { value: '50+', label: 'Years' },
    { value: '4', label: 'States' }
  ]}
/>

// Values/Differentiators Section
<GenericServicesGrid
  eyebrow="Our Values"
  title="What Sets Us Apart"
  highlightedWord="Apart"
  items={differentiators}
  columns={3}
  backgroundVariant="light-grey"
  showCTA={false}
/>
```

### Equipment Sales Page Example

```tsx
// Hero
<GenericHero
  eyebrow="Equipment"
  title="Premium Car Wash Equipment"
  highlightedWord="Premium"
  subtitle="Industry-Leading Technology"
  description="PDQ, PECO, Belanger, Sonny's, AVW - we partner with the best"
  buttons={[
    { text: 'Request Quote', href: '/contact', variant: 'primary' },
    { text: 'View Catalog', href: '#catalog', variant: 'secondary' }
  ]}
/>

// Equipment Types
<GenericServicesGrid
  eyebrow="Equipment Types"
  title="Complete Product Line"
  highlightedWord="Complete"
  items={equipmentTypes}
  columns={3}
/>
```

### Consulting Page Example

```tsx
// Hero
<GenericHero
  eyebrow="Expert Consulting"
  title="Strategic Car Wash Consulting"
  highlightedWord="Strategic"
  subtitle="From Concept to Grand Opening"
  description="Leverage our 50+ years of experience..."
  buttons={[
    { text: 'Schedule Consultation', href: '/contact', variant: 'primary' }
  ]}
/>

// Services Grid
<GenericServicesGrid
  eyebrow="Our Services"
  title="Comprehensive Consulting Solutions"
  items={consultingServices}
  columns={2}
  backgroundVariant="white"
/>
```

---

## Design System Quick Reference

### Colors
- **Primary Text**: `text-gray-900` (#1f2937)
- **Secondary Text**: `text-gray-600` (#6b7280)
- **Accent Yellow**: `text-[#f0da11]` or `bg-[#f0da11]`
- **Light Grey BG**: `bg-[#f6f6f6]`
- **White BG**: `bg-white`
- **Dark BG**: `bg-gray-900` (#111827)

### Spacing
- **Section Padding**: `py-24` (96px vertical)
- **Container**: `container mx-auto px-6 lg:px-8`
- **Content Max Width**: `max-w-4xl` or `max-w-6xl`

### Typography
- **Hero Title**: `text-5xl md:text-6xl lg:text-7xl font-bold`
- **Section Title**: `text-4xl md:text-5xl font-bold`
- **Card Title**: `text-xl font-bold`
- **Body**: `text-lg text-gray-600`
- **Eyebrow**: `text-sm font-semibold text-gray-600 uppercase tracking-wider`

### Animations
- **Fade In Up**: 0.6-0.8s ease-out
- **Float**: 6-8s ease-in-out infinite
- **Grid Move**: 20s linear infinite
- **Hover Lift**: `-translate-y-1` or `-translate-y-0.5`
- **Stagger Delay**: 0.1s per item

### Buttons
- **Primary**: `bg-[#f0da11] text-black font-semibold px-8 py-4`
- **Secondary**: `border-2 border-gray-900 text-gray-900 font-semibold px-8 py-4`
- **Hover**: `hover:-translate-y-1 transition-all duration-200`

### Cards
- **Base**: `bg-white p-8`
- **Shadow**: `hover:shadow-lg`
- **Border Accent**: `border-l-4 border-transparent hover:border-[#f0da11]`
- **Hover**: `hover:-translate-y-1 transition-all duration-200`

---

## Benefits of Reusable Components

### Speed
- Create new pages in minutes, not hours
- Consistent implementation across all pages
- Less code duplication

### Consistency
- Uniform design language
- Predictable user experience
- Easier to maintain

### Flexibility
- Configurable props for different contexts
- Mix and match sections as needed
- Easy to extend with new variants

### Quality
- Battle-tested components
- Optimized animations
- Accessibility built-in
- Responsive by default

---

## Next Steps

### To Apply to Other Pages:

1. **About Page**
   - Replace AboutHero with GenericHero
   - Use GenericServicesGrid for values/differentiators
   - Keep custom sections (story, service areas) but add background effects

2. **Equipment Sales Page**
   - New GenericHero for equipment
   - GenericServicesGrid for equipment types
   - Keep brand-specific sections

3. **Chemical Sales Page**
   - GenericHero for chemical programs
   - GenericServicesGrid for product categories
   - Keep partner logos section

4. **Installation Page**
   - GenericHero with installation focus
   - GenericServicesGrid for process steps
   - Keep case studies section

5. **Service & Maintenance Page**
   - GenericHero for service offerings
   - GenericServicesGrid for service types
   - Keep emergency service callout

6. **Consulting Page**
   - GenericHero for consulting services
   - GenericServicesGrid for consulting areas
   - Keep process/methodology section

### Testing Checklist:
- [ ] All props work as expected
- [ ] Animations smooth on all devices
- [ ] Background effects visible but not distracting
- [ ] Text readable over patterns
- [ ] Responsive on mobile/tablet/desktop
- [ ] Accessibility (keyboard nav, screen readers)
- [ ] Performance (no lag or jank)

---

## Summary

The reusable component library provides:
- ✅ **GenericHero** - Flexible hero with 5 animation types
- ✅ **GenericServicesGrid** - Configurable 2/3/4 column grid
- ✅ **CallToActionNew** - Enhanced CTA with 6 visual effects
- ✅ **6 background patterns** (grid, dots, diagonal, hexagon, circle, wave)
- ✅ **4 accent types** (flow lines, floating shapes, corners, horizontal lines)
- ✅ **Complete design system** documented

**Result**: Pages can now be built in **minutes** by composing these reusable components with page-specific content, maintaining the Clean Tech in Motion aesthetic throughout the entire site.
