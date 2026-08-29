'use client';

import React, { useState, useCallback } from 'react';
import { submitContactForm } from '@/lib/api-client';
import type { ContactFormData } from '@/types/api';
import DarkSectionBackdrop from '../../ui/DarkSectionBackdrop';

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
  /** Honeypot - must stay empty. */
  website: string;
}

const EMPTY: FormState = { name: '', phone: '', email: '', message: '', website: '' };

const perks = [
  'No-cost, no-obligation site review',
  'Build, equipment & chemical guidance',
  'Fast follow-up from a real specialist',
];

export default function ConsultationCTA() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const isValid = form.name.trim().length >= 2 && emailValid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website !== '') return; // honeypot
    if (!isValid) return;

    setStatus('submitting');
    setErrorMsg('');

    const payload: ContactFormData = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      inquiry: form.message.trim() || 'Requested a free car wash consultation from the homepage.',
      bestTime: 'anytime',
      urgency: 'normal',
      contactType: 'consultation',
      website: form.website,
    };

    const res = await submitContactForm(payload);
    if (res.success) {
      setStatus('success');
      setForm(EMPTY);
    } else {
      setStatus('error');
      setErrorMsg(res.message || 'Something went wrong. Please call us at (612) 408-9010.');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-none border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#f0da11] focus:border-[#f0da11] transition-all duration-200 disabled:bg-gray-100';

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <DarkSectionBackdrop image="/imgs/IMG_5389.webp" imageOpacity={10} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: pitch */}
          <div className="text-left">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-[#f0da11] mb-4">
              Free Consultation
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white leading-tight mb-5">
              Schedule Your{' '}
              <span className="inline-block bg-[#f0da11] text-black px-2 py-0.5 rounded-md -rotate-1">
                Free
              </span>{' '}
              Car Wash Consultation
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-7 max-w-xl leading-relaxed">
              Building new, upgrading, or just need a second opinion? Tell us about your site and our
              Midwest team will map out equipment, chemistry, and service options - at no cost.
            </p>
            <ul className="space-y-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-slate-200">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f0da11]/15 text-[#f0da11]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base">{perk}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form card */}
          <div className="bg-white rounded-none border-t-4 border-t-[#f0da11] shadow-2xl p-6 sm:p-8">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f0da11]">
                  <svg className="w-9 h-9 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600 mb-6">
                  Thanks - our team will reach out shortly to schedule your free consultation.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-6 py-3 rounded-none hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Request your free consultation</h3>

                {/* Honeypot */}
                <div style={{ position: 'absolute', left: '-9999px', height: 0, overflow: 'hidden' }} aria-hidden="true">
                  <label htmlFor="cta-website">Website</label>
                  <input id="cta-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={onChange} />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    maxLength={100}
                    value={form.name}
                    onChange={onChange}
                    disabled={status === 'submitting'}
                    placeholder="Full name *"
                    className={inputClass}
                  />
                  <input
                    name="phone"
                    type="tel"
                    maxLength={20}
                    value={form.phone}
                    onChange={onChange}
                    disabled={status === 'submitting'}
                    placeholder="Phone"
                    className={inputClass}
                  />
                </div>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  value={form.email}
                  onChange={onChange}
                  disabled={status === 'submitting'}
                  placeholder="Email address *"
                  className={inputClass}
                />
                <textarea
                  name="message"
                  rows={3}
                  maxLength={1000}
                  value={form.message}
                  onChange={onChange}
                  disabled={status === 'submitting'}
                  placeholder="Tell us about your project or site (optional)"
                  className={`${inputClass} resize-vertical`}
                />

                {status === 'error' && (
                  <p className="text-sm text-red-600">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={!isValid || status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#f0da11] text-black px-6 py-3.5 font-bold rounded-none hover:bg-[#d0b211] transition-all duration-200 hover:-translate-y-0.5 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none uppercase tracking-wide cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Get My Free Consultation
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Prefer to talk now? Call{' '}
                  <a href="tel:6124089010" className="font-semibold text-gray-900 hover:text-[#d0b211]">
                    (612) 408-9010
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
