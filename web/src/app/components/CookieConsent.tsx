'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    
    if (consent === null) {
      // No choice made yet - show banner
      setShowBanner(true);
    } else if (consent === 'accepted') {
      // User accepted - enable analytics
      setAnalyticsEnabled(true);
      enableAnalytics();
    }
  }, []);

  const enableAnalytics = () => {
    // TODO: Add your analytics code here (Google Analytics, etc.)
    // Example: window.gtag('consent', 'update', { analytics_storage: 'granted' });
    console.log('Analytics enabled');
  };

  const disableAnalytics = () => {
    // TODO: Disable analytics
    console.log('Analytics disabled');
  };

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    // Dispatch custom event so ConditionalAnalytics in the same tab is notified
    window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: { accepted: true } }));
    setShowBanner(false);
    setAnalyticsEnabled(true);
    enableAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: { accepted: false } }));
    setShowBanner(false);
    setAnalyticsEnabled(false);
    disableAnalytics();
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t-2 border-[#f0da11] shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-1">
              🍪 Cookie Consent
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              We use cookies to enhance your browsing experience and analyze site traffic. 
              By clicking &quot;Accept&quot;, you consent to our use of cookies for analytics purposes.{' '}
              <Link href="/privacy-policy" className="text-[#f0da11] hover:underline">
                Learn more in our Privacy Policy
              </Link>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 sm:flex-nowrap">
            <button
              onClick={handleDecline}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-200"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2.5 text-sm font-semibold text-gray-900 bg-[#f0da11] hover:bg-[#d0b211] rounded-lg transition-colors duration-200"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
