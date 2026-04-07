'use client';

import Script from 'next/script';
import Clarity from '@microsoft/clarity';
import { useEffect, useState } from 'react';

const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? '';

export default function ConditionalAnalytics() {
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    // Check if user has consented
    const consent = localStorage.getItem('cookie-consent');
    
    if (consent === 'accepted') {
      setAnalyticsConsent(true);
    }

    // Listen for same-tab consent changes (custom event from CookieConsent)
    const handleConsentChange = (e: Event) => {
      const accepted = (e as CustomEvent<{ accepted: boolean }>).detail.accepted;
      setAnalyticsConsent(accepted);
    };
    window.addEventListener('cookie-consent-change', handleConsentChange);

    // Also listen for cross-tab changes via storage event
    const handleStorageChange = () => {
      const newConsent = localStorage.getItem('cookie-consent');
      setAnalyticsConsent(newConsent === 'accepted');
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('cookie-consent-change', handleConsentChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (analyticsConsent) {
      Clarity.init(CLARITY_PROJECT_ID);
    }
  }, [analyticsConsent]);

  if (!analyticsConsent) {
    return null;
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-JX2XMFTMJR"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JX2XMFTMJR', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
