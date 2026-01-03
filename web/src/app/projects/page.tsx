import React from 'react';
import GenericHero from '../components/ui/GenericHero';
import GenericServicesGrid from '../components/ui/GenericServicesGrid';
import CallToActionNew from '../components/ui/CallToActionNew';

const ProjectsPage = () => {
  const testimonials = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      ),
      title: 'SuperWash Express',
      description: '"Carwash Technologies transformed our outdated facility into a modern, efficient operation. Our customer satisfaction and revenue have both increased significantly since the upgrade." - Mike Johnson'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      ),
      title: 'Quick Clean Car Wash',
      description: '"The team\'s expertise and attention to detail were outstanding. They delivered on time and within budget, and the results exceeded our expectations." - Sarah Chen'
    }
  ];

  return (
    <div className="min-h-screen">
      <GenericHero
        eyebrow="Proven Results"
        title="Our Projects"
        highlightedWord="Projects"
        subtitle="Excellence in Every Installation"
        description="Transforming wash operations across the Midwest with proven expertise and quality installations. Our track record speaks for itself."
        stats={[
          { value: '500+', label: 'Installations' },
          { value: '50+', label: 'Years Combined Experience' },
          { value: '98%', label: 'Satisfaction Rate' },
          { value: '4', label: 'States Served' }
        ]}
        buttons={[
          {
            text: 'Start Your Project',
            href: '/contact',
            variant: 'primary'
          },
          {
            text: 'View Services',
            href: '/services',
            variant: 'secondary'
          }
        ]}
        backgroundVariant="white"
        showPattern={true}
        leftImage="/imgs/BelangerTunnel.jpg"
        rightImage="/imgs/SpinLite.jpg"
      />

      <GenericServicesGrid
        eyebrow="Client Success"
        title="What Our Clients Say"
        highlightedWord="Clients"
        description="Hear from wash operators who have trusted us with their business transformations."
        items={testimonials}
        columns={2}
        backgroundVariant="light-grey"
      />

      <CallToActionNew
        title="Let's Build Something Great"
        description="Ready to transform your wash operation? Our team is here to help you succeed with expert installation, quality equipment, and ongoing support."
        buttons={[
          {
            text: 'Get Started Today',
            href: '/contact',
            variant: 'primary'
          },
          {
            text: 'View Our Services',
            href: '/services',
            variant: 'secondary'
          }
        ]}
        contactInfo={{
          phone: '(612) 408-9010',
          address: '322 19th St. SW<br />Forest Lake, MN 55025',
          showContactCard: true
        }}
      />
    </div>
  );
};

export default ProjectsPage;
