'use client';

import React, { useState, useCallback } from 'react';
import { submitContactForm } from '@/lib/api-client';
import type { ContactFormData } from '@/types/api';

const INTEREST_OPTIONS = [
  { value: 'service-tech', label: 'Service Technician' },
  { value: 'installation', label: 'Installation Crew' },
  { value: 'chemicals', label: 'Chemical Delivery / Sales' },
  { value: 'equipment-sales', label: 'Equipment Sales' },
  { value: 'admin', label: 'Office / Admin' },
  { value: 'other', label: 'Other' },
] as const;

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ACCEPTED_RESUME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

interface CareersFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  /** Honeypot — should always stay empty. */
  website: string;
}

export default function CareersForm() {
  const [formData, setFormData] = useState<CareersFormData>({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    website: '',
  });
  const [interests, setInterests] = useState<string[]>([]);
  const [resume, setResume] = useState<File | null>(null);
  const [hasLicense, setHasLicense] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);
  const [resumeError, setResumeError] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      const allowed = ['name', 'email', 'phone', 'position', 'message', 'website'];
      if (!allowed.includes(name)) return;
      setFormData(prev => ({ ...prev, [name]: value }));
    },
    []
  );

  const toggleInterest = useCallback((value: string) => {
    setInterests(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  }, []);

  const handleResumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setResumeError('');
    const file = e.target.files?.[0] ?? null;
    if (!file) {
      setResume(null);
      return;
    }
    if (!ACCEPTED_RESUME_TYPES.includes(file.type)) {
      setResumeError('Please upload a PDF or Word document.');
      setResume(null);
      e.target.value = '';
      return;
    }
    if (file.size > MAX_RESUME_BYTES) {
      setResumeError('File is too large. Maximum size is 5 MB.');
      setResume(null);
      e.target.value = '';
      return;
    }
    setResume(file);
  }, []);

  const isValid =
    formData.name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    hasLicense &&
    acknowledged;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot — bots fill this in, humans never see it.
    if (formData.website !== '') return;
    if (!isValid) return;

    setStatus('submitting');
    setErrorMsg('');

    // Build the inquiry text from careers-specific fields
    const parts: string[] = [];
    if (formData.position.trim()) parts.push(`Position of Interest: ${formData.position.trim()}`);
    if (interests.length > 0) {
      const labels = INTEREST_OPTIONS
        .filter(o => interests.includes(o.value))
        .map(o => o.label);
      parts.push(`Areas of Interest: ${labels.join(', ')}`);
    }
    parts.push("Has Valid Driver's License: Yes");
    if (formData.message.trim()) parts.push(`About Applicant:\n${formData.message.trim()}`);
    if (resume) {
      parts.push(
        `Resume on file: ${resume.name} — applicant has been asked to email resume to careers@carwashtechnologies.com`
      );
    }

    const payload: ContactFormData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || undefined,
      inquiry: parts.join('\n\n'),
      bestTime: 'anytime',
      urgency: 'normal',
      contactType: 'careers',
      areasOfInterest: interests,
      website: formData.website,
    };

    const res = await submitContactForm(payload);

    if (res.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMsg(
        res.message ||
          'Something went wrong. Please email your application to careers@carwashtechnologies.com or call (612) 408-9010.'
      );
    }
  };

  const inputClass =
    'w-full px-4 py-2.5 border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#f0da11] focus:border-[#f0da11] transition-all duration-200 placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed rounded-none';
  const labelClass =
    'block text-sm font-semibold text-gray-700 mb-1.5 uppercase tracking-wide';

  // Success state
  if (status === 'success') {
    return (
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-white border border-gray-200 border-t-4 border-t-[#f0da11] p-8 sm:p-12 shadow-xl">
          <div className="w-16 h-16 bg-[#f0da11] flex items-center justify-center mx-auto mb-6 rounded-full">
            <svg className="w-10 h-10 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Application Received!</h3>
          <p className="text-gray-600 mb-4">
            Thank you — our team will review your application and be in touch.
          </p>
          {resume && (
            <div className="mb-6 px-4 py-3 bg-[#f0da11]/10 border-l-4 border-[#f0da11] text-left text-sm text-gray-800 rounded">
              <strong>One more step:</strong> Please email your resume ({resume.name}) to{' '}
              <a
                href="mailto:careers@carwashtechnologies.com"
                className="font-semibold underline hover:text-gray-600"
              >
                careers@carwashtechnologies.com
              </a>{' '}
              so we have it on file.
            </div>
          )}
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setFormData({ name: '', email: '', phone: '', position: '', message: '', website: '' });
              setInterests([]);
              setResume(null);
              setHasLicense(false);
              setAcknowledged(false);
            }}
            className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-6 py-3 rounded-none hover:bg-slate-800 transition-colors uppercase tracking-wide"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white border border-gray-200 border-t-4 border-t-[#f0da11] p-5 sm:p-6 md:p-8 shadow-xl"
    >
      {/* Honeypot */}
      <div style={{ position: 'absolute', left: '-9999px', top: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleInputChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength={2}
            maxLength={100}
            value={formData.name}
            onChange={handleInputChange}
            disabled={status === 'submitting'}
            className={inputClass}
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={254}
            value={formData.email}
            onChange={handleInputChange}
            disabled={status === 'submitting'}
            className={inputClass}
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            maxLength={20}
            value={formData.phone}
            onChange={handleInputChange}
            disabled={status === 'submitting'}
            className={inputClass}
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="position" className={labelClass}>Position / Role</label>
          <input
            type="text"
            id="position"
            name="position"
            maxLength={100}
            value={formData.position}
            onChange={handleInputChange}
            disabled={status === 'submitting'}
            className={inputClass}
            placeholder="e.g. Service Technician"
          />
        </div>
      </div>

      {/* Areas of interest */}
      <div className="mt-5">
        <span className={labelClass}>Areas of Interest</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {INTEREST_OPTIONS.map(opt => {
            const checked = interests.includes(opt.value);
            return (
              <label
                key={opt.value}
                className={`flex items-center gap-2 px-3 py-2 border-2 rounded-none cursor-pointer text-sm font-medium transition-all duration-150 ${
                  checked
                    ? 'border-[#f0da11] bg-[#f0da11]/10 text-gray-900'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                } ${status === 'submitting' ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                <input
                  type="checkbox"
                  value={opt.value}
                  checked={checked}
                  onChange={() => toggleInterest(opt.value)}
                  disabled={status === 'submitting'}
                  className="h-4 w-4 accent-[#f0da11] shrink-0"
                />
                {opt.label}
              </label>
            );
          })}
        </div>
      </div>

      {/* Message */}
      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>Tell us about yourself</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={1500}
          value={formData.message}
          onChange={handleInputChange}
          disabled={status === 'submitting'}
          className={`${inputClass} resize-vertical`}
          placeholder="Experience, availability, why you'd be a great fit..."
        />
      </div>

      {/* Resume upload */}
      <div className="mt-5">
        <label htmlFor="resume" className={labelClass}>Resume (PDF or Word)</label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleResumeChange}
          disabled={status === 'submitting'}
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2.5 file:px-4 file:rounded-none file:border-0 file:text-sm file:font-semibold file:bg-[#f0da11] file:text-black hover:file:bg-[#d0b211] file:cursor-pointer cursor-pointer border-2 border-gray-300 rounded-none disabled:opacity-60"
        />
        {resume && !resumeError && (
          <p className="mt-1 text-sm text-green-700">Selected: {resume.name}</p>
        )}
        {resumeError && <p className="mt-1 text-sm text-red-600">{resumeError}</p>}
        <p className="mt-1 text-xs text-gray-500">
          Optional — max 5 MB, PDF or Word. You can also email your resume to{' '}
          <a
            href="mailto:careers@carwashtechnologies.com"
            className="underline hover:text-gray-700"
          >
            careers@carwashtechnologies.com
          </a>
          .
        </p>
      </div>

      {/* Required acknowledgments */}
      <div className="mt-6 space-y-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={hasLicense}
            onChange={e => setHasLicense(e.target.checked)}
            disabled={status === 'submitting'}
            className="mt-0.5 h-4 w-4 accent-[#f0da11] shrink-0"
          />
          <span className="text-sm text-gray-700">
            I confirm I hold a valid driver&apos;s license. <span className="text-red-600">*</span>
          </span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={acknowledged}
            onChange={e => setAcknowledged(e.target.checked)}
            disabled={status === 'submitting'}
            className="mt-0.5 h-4 w-4 accent-[#f0da11] shrink-0"
          />
          <span className="text-sm text-gray-700">
            I understand that employment is at-will and that this application is not an offer of employment.
            I certify the information provided is accurate. <span className="text-red-600">*</span>
          </span>
        </label>
      </div>

      {status === 'error' && (
        <div className="mt-5 px-4 py-3 bg-red-50 border-l-4 border-red-500 rounded text-sm text-red-800">
          {errorMsg}
        </div>
      )}

      <div className="mt-6 text-center md:text-right">
        <button
          type="submit"
          disabled={!isValid || status === 'submitting'}
          className="inline-flex items-center gap-3 bg-[#f0da11] text-gray-900 px-10 py-3.5 font-bold text-base hover:bg-[#d0b211] transition-all duration-200 shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none uppercase tracking-wide cursor-pointer rounded-none"
        >
          {status === 'submitting' ? (
            <>
              <span className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}
        </button>
      </div>

      {/* Disclaimer */}
      <div className="mt-5 px-3 py-3 bg-gray-50 border-l-4 border-[#f0da11] rounded">
        <p className="text-[11px] text-gray-600 leading-snug">
          <strong className="text-gray-900">Equal Opportunity Employer:</strong> Carwash Technologies is an equal
          opportunity employer. We do not discriminate on the basis of race, color, religion, sex, national origin,
          age, disability, or any other protected status. Information submitted is used solely for recruitment and is
          handled in accordance with our privacy policy.
        </p>
      </div>
    </form>
  );
}
