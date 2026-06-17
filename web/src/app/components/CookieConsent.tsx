'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  // Drives the slide-up transition once mounted.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === null) {
      setShowBanner(true);
      // Next frame: flip to visible so the transition animates in.
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    }
  }, []);

  // Persist choice, notify listeners (ConditionalAnalytics), then slide out.
  const persist = (value: 'accepted' | 'declined') => {
    localStorage.setItem('cookie-consent', value);
    window.dispatchEvent(
      new CustomEvent('cookie-consent-change', { detail: { accepted: value === 'accepted' } })
    );
    setVisible(false);
    // Remove from DOM after the slide-out transition completes.
    setTimeout(() => setShowBanner(false), 350);
  };

  // Accept All → analytics enabled. Accept Essential → essential cookies only.
  const handleAcceptAll = () => persist('accepted');
  const handleAcceptEssential = () => persist('declined');

  if (!showBanner) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 px-3 pb-3 sm:px-5 sm:pb-5 transition-all duration-300 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
      role="dialog"
      aria-label="Privacy and cookie consent"
    >
      <div className="mx-auto max-w-5xl bg-slate-900 border-t-4 border-[#f0da11] shadow-2xl">
        <div className="p-5 sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Message */}
            <div className="flex-1">
              <h3 className="flex items-center gap-2 text-base font-bold text-white mb-1.5">
                <span className="flex h-6 w-6 items-center justify-center bg-[#f0da11] text-black text-sm">🔒</span>
                We value your privacy
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                We use essential cookies to make this site work, plus optional analytics
                (Google Analytics &amp; Microsoft Clarity) to understand how visitors use the
                site and improve it. By accepting, you agree to our{' '}
                <Link href="/privacy-policy" className="text-[#f0da11] hover:underline font-medium">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href="/terms-of-use" className="text-[#f0da11] hover:underline font-medium">
                  Terms of Use
                </Link>
                .
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0">
              <button
                onClick={handleAcceptEssential}
                className="px-6 py-3 text-sm font-semibold text-white border-2 border-slate-600 hover:border-slate-400 hover:bg-slate-800 transition-colors duration-200 uppercase tracking-wide cursor-pointer"
              >
                Accept Essential
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-3 text-sm font-bold text-gray-900 bg-[#f0da11] hover:bg-[#d0b211] transition-colors duration-200 uppercase tracking-wide shadow-lg cursor-pointer"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
