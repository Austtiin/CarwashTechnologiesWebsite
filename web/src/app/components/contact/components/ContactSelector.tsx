'use client';

import React, { useRef, useState } from 'react';
import ContactOptionCard from './ContactOptionCard';
import ContactForm from './ContactForm';
import type { ContactOption, ContactOptionId } from '@/app/contact/data/contactOptions';

interface ContactSelectorProps {
  contactOptions: ContactOption[];
}

export default function ContactSelector({ contactOptions }: ContactSelectorProps) {
  const [selectedContact, setSelectedContact] = useState<ContactOptionId | null>(null);
  const [step, setStep] = useState<'topic' | 'details'>('topic');
  const [navigationLocked, setNavigationLocked] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const selectedOption = contactOptions.find(option => option.id === selectedContact);

  const goToStep = (nextStep: 'topic' | 'details') => {
    setStep(nextStep);
    requestAnimationFrame(() => {
      headingRef.current?.focus({ preventScroll: true });
      headingRef.current?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'start',
      });
    });
  };

  return (
    <section id="contact-inquiry" className="relative scroll-mt-24 bg-slate-50 py-12 sm:py-20 border-y border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <ol aria-label="Inquiry progress" className="flex items-center justify-center gap-3 sm:gap-6 mb-9 text-sm font-semibold">
          <li aria-current={step === 'topic' ? 'step' : undefined} className="flex items-center gap-2 text-slate-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0da11]">1</span>
            Choose your topic
          </li>
          <li aria-hidden="true" className="w-8 sm:w-16 h-px bg-slate-300" />
          <li aria-current={step === 'details' ? 'step' : undefined} className={`flex items-center gap-2 ${step === 'details' ? 'text-slate-900' : 'text-slate-500'}`}>
            <span className={`flex h-8 w-8 items-center justify-center rounded-full ${step === 'details' ? 'bg-[#f0da11]' : 'bg-slate-200'}`}>2</span>
            Tell us more
          </li>
        </ol>

        <div className="text-center max-w-3xl mx-auto mb-9">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#817300] mb-3">
            {step === 'topic' ? 'Start with what you need' : 'A little context goes a long way'}
          </p>
          <h2 ref={headingRef} tabIndex={-1} className="scroll-mt-24 text-3xl sm:text-4xl font-bold text-slate-900 mb-4 focus:outline-none">
            {step === 'topic' ? 'What type of help do you need?' : `Let's talk ${selectedOption?.title.toLowerCase()}`}
          </h2>
          <p className="text-slate-600 leading-relaxed">
            {step === 'topic'
              ? "Choose the closest match. We'll connect you with the right team, even if your project covers more than one area."
              : selectedOption?.details}
          </p>
        </div>

        {step === 'topic' && (
          <div className="grid gap-5 md:grid-cols-3">
            {contactOptions.map(option => (
              <ContactOptionCard key={option.id} option={option} onSelect={() => {
                setSelectedContact(option.id);
                goToStep('details');
              }} />
            ))}
          </div>
        )}

        <div hidden={step !== 'details'}>
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3 mb-4">
            <button type="button" disabled={navigationLocked} onClick={() => goToStep('topic')} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 border border-slate-300 bg-white rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2">
              <span aria-hidden="true">&larr;</span> Change topic
            </button>
            <span className="text-xs text-slate-500">Your details stay here if you go back.</span>
          </div>
          {/* Keep the form mounted so changing topics does not discard the visitor's draft. */}
          <ContactForm selectedOption={selectedOption} onNavigationLockChange={setNavigationLocked} onReset={() => {
            setSelectedContact(null);
            goToStep('topic');
          }} />
        </div>
        <p className="mt-8 text-center text-sm text-slate-600">
          Wash down or need urgent help?{' '}
          <a href="tel:612-408-9010" className="font-bold text-slate-900 underline underline-offset-4">Call (612) 408-9010</a>.
          This form is not an emergency dispatch service.
        </p>
      </div>
    </section>
  );
}
