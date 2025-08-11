export const contactOptions = [
  {
    id: 'chemicals' as const,
    title: 'Chemical Sales',
    description: 'High-quality wash chemicals and chemical programs',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600',
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
    description: 'Professional maintenance and repair services',
    color: 'from-orange-400 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-600',
    details: 'Schedule maintenance, request emergency repairs, or inquire about our comprehensive service programs.',
    icon: 'service',
    features: [
      '24/7 emergency support',
      'Certified technicians',
      'Preventive maintenance plans',
      'Same-day service available'
    ]
  },
  {
    id: 'sales' as const,
    title: 'Equipment Sales',
    description: 'Premium wash equipment and installation',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
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