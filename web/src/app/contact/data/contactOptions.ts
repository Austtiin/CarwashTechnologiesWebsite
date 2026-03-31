export const contactOptions = [
  {
    id: 'chemicals' as const,
    title: 'Chemical Sales',
    description: '',
    color: 'from-[#f0da11] to-[#d0b211]',
    bgColor: 'from-[#f0da11]/10 to-[#f0da11]/20',
    borderColor: 'border-[#f0da11]/40',
    textColor: 'text-gray-900',
    details: 'Get information about our chemical programs, pricing, and delivery options for detergents, waxes, and specialty solutions.',
    icon: 'chemicals',
    features: [
      'Response within 2 hours',
      'Chemical program specialist',
      'Custom pricing available',
      'Free delivery consultation'
    ]
  },
  {
    id: 'service' as const,
    title: 'Service & Maintenance',
    description: '',
    color: 'from-[#f0da11] to-[#d0b211]',
    bgColor: 'from-[#f0da11]/10 to-[#f0da11]/20',
    borderColor: 'border-[#f0da11]/40',
    textColor: 'text-gray-900',
    details: 'Schedule maintenance, request emergency repairs, or inquire about our comprehensive service programs.',
    icon: 'service',
    features: [
      'Fast support available',
      'Certified technicians',
      'Preventive maintenance',
      'Same-day service available'
    ]
  },
  {
    id: 'sales' as const,
    title: 'Equipment Sales',
    description: '',
    color: 'from-[#f0da11] to-[#d0b211]',
    bgColor: 'from-[#f0da11]/10 to-[#f0da11]/20',
    borderColor: 'border-[#f0da11]/40',
    textColor: 'text-gray-900',
    details: 'Explore our equipment options, get quotes, and learn about installation services for new or existing facilities.',
    icon: 'sales',
    features: [
      'Free site consultation',
      'Equipment financing available',
      'Professional installation',
      'Warranty & support included'
    ]
  }
];

export type ContactOption = typeof contactOptions[0];
export type ContactOptionId = typeof contactOptions[number]['id'];