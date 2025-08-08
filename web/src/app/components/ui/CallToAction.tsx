import React from 'react';
import BlurText from '../animations/BlurText';
import SafeLink from './SafeLink';

interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
  icon?: React.ReactNode;
}

interface CallToActionProps {
  title: string;
  description: string;
  buttons: CTAButton[];
  contactInfo?: {
    phone?: string;
    address?: string;
    showContactCard?: boolean;
    subtitle?: string;
    description?: string;
    icon?: React.ReactNode;
  };
  backgroundVariant?: 'dark' | 'gradient' | 'light';
  showDecorations?: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  buttons,
  contactInfo,
  backgroundVariant = 'dark',
  showDecorations = true
}) => {
  const getBackgroundClasses = () => {
    switch (backgroundVariant) {
      case 'gradient':
        return 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400';
      case 'light':
        return 'bg-gray-50';
      case 'dark':
      default:
        return 'bg-gradient-to-br from-[#26231d] via-[#595646] to-[#4c6461]';
    }
  };

  const getTextColor = () => {
    return backgroundVariant === 'light' ? 'text-gray-900' : 'text-white';
  };

  const getPrimaryButtonClasses = () => {
    if (backgroundVariant === 'gradient') {
      return 'bg-white text-yellow-600 hover:bg-gray-200';
    }
    return 'bg-[#f0da11] text-gray-900 hover:bg-[#d0b211]';
  };

  const getSecondaryButtonClasses = () => {
    if (backgroundVariant === 'light') {
      return 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white';
    }
    if (backgroundVariant === 'gradient') {
      return 'border-2 border-white text-white hover:bg-white hover:text-yellow-600';
    }
    return 'border-2 border-[#f0da11] text-[#f0da11] hover:bg-[#f0da11] hover:text-gray-900';
  };

  return (
    <section className={`relative z-10 py-20 ${getBackgroundClasses()} ${getTextColor()} overflow-hidden`}>
      {/* Decorative Elements */}
      {showDecorations && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-24 w-20 h-20 border-2 border-[#f0da11]/25 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
          <div className="absolute bottom-16 left-20 w-16 h-16 border-2 border-[#bfb986]/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-14 h-14 border-2 border-[#d0b211]/35 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <BlurText
            text={title}
            delay={100}
            animateBy="words"
            direction="top"
            className={`!text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 !text-white`}
          />
          <BlurText
            text={description}
            delay={150}
            animateBy="words"
            direction="bottom"
            className={`text-lg md:text-xl lg:text-2xl max-w-4xl !text-white`}
          />
        </div>

        {/* Contact Information Cards */}
        {contactInfo?.showContactCard && (
          <div className="max-w-5xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              {contactInfo.phone && (
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f0da11] to-[#d0b211] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white text-center">Call Us Today</h3>
                  <p className="text-lg !text-white font-semibold text-center">{contactInfo.phone}</p>
                </div>
              )}

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#f0da11] to-[#d0b211] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white text-center">Get a Quote</h3>
                <div className="mt-4 text-center">
                  <SafeLink href="/contact" className="bg-[#f0da11] text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-[#d0b211] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Contact Us Today!
                  </SafeLink>
                </div>
              </div>

              {contactInfo.address && (
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f0da11] to-[#d0b211] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white text-center">Visit Our Location</h3>
                  <p className="text-lg !text-white text-center" dangerouslySetInnerHTML={{ __html: contactInfo.address }}></p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Main CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {buttons.map((button, index) => (
              <SafeLink
                key={index}
                href={button.href}
                className={`
                  px-8 py-4 rounded-xl font-semibold transition-all duration-300 
                  shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg
                  inline-flex items-center
                  ${button.variant === 'primary' ? getPrimaryButtonClasses() : getSecondaryButtonClasses()}
                `}
              >
                {button.icon && <span className="mr-2">{button.icon}</span>}
                {button.text}
              </SafeLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;