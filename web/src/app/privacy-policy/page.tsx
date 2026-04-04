import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Carwash Technologies',
  description: 'Privacy Policy for Carwash Technologies - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            <strong>Effective Date:</strong> March 30, 2026
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Last Updated:</strong> April 4, 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 prose prose-slate max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Carwash Technologies (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website{' '}
              <a href="https://www.carwashtechnologies.com" className="text-blue-600 hover:underline">
                www.carwashtechnologies.com
              </a>{' '}
              and when you use our services.
            </p>
            <p className="text-gray-700">
              By using our website, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.1 Personal Information</h3>
            <p className="text-gray-700 mb-4">
              When you contact us through our forms, we may collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company/business name</li>
              <li>Inquiry details and messages</li>
              <li>Preferred contact time and urgency level</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website or source</li>
              <li>Device information (type, operating system)</li>
              <li>Cookies and tracking technologies (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>To respond to your inquiries and provide customer service</li>
              <li>To process and fulfill service requests</li>
              <li>To send you information about our products and services</li>
              <li>To improve our website and user experience</li>
              <li>To analyze website usage and trends (only with your consent)</li>
              <li>To comply with legal obligations</li>
              <li>To protect against fraudulent or illegal activity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              Cookies are small data files stored on your device.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Types of Cookies We Use:</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site (requires your consent)</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>

            <p className="text-gray-700 mb-4">
              <strong>Your Control:</strong> You can control cookie preferences through our cookie consent banner. 
              You can also manage cookies through your browser settings, but disabling cookies may affect website functionality.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Microsoft Clarity</h3>
            <p className="text-gray-700 mb-4">
              We partner with Microsoft Clarity and Microsoft Advertising to capture how you use and interact with our 
              website through behavioral metrics, heatmaps, and session replay to improve and market our products and 
              services. Website usage data is captured using first and third-party cookies and other tracking technologies 
              to determine the popularity of products/services and online activity. Additionally, we use this information 
              for site optimization, fraud/security purposes, and advertising. For more information about how Microsoft 
              collects and uses your data, visit the{' '}
              <a
                href="https://privacy.microsoft.com/en-us/privacystatement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Microsoft Privacy Statement
              </a>.
            </p>
            <p className="text-gray-700 mb-4">
              Microsoft Clarity is only activated after you accept cookies via our consent banner. You may opt out at 
              any time by declining or withdrawing cookie consent, or by visiting{' '}
              <a
                href="https://choice.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                choice.microsoft.com
              </a>.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Google Analytics</h3>
            <p className="text-gray-700 mb-4">
              We use Google Analytics to analyze website traffic and usage patterns. This service uses cookies to 
              collect anonymized data about how visitors interact with our site. Google Analytics is only activated 
              after you accept cookies via our consent banner. For more information, visit the{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Google Privacy Policy
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. How We Share Your Information</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Service Providers:</strong> Third-party companies that help us operate our website and provide services (e.g., email services, analytics providers)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Protection:</strong> To protect our rights, property, or safety, or that of our users</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement industry-standard security measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Encryption of data in transit (HTTPS/SSL)</li>
              <li>Secure storage in Azure cloud infrastructure</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
            </ul>
            <p className="text-gray-700">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your information, 
              we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-700">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
              Privacy Policy, unless a longer retention period is required by law. Contact form submissions are typically 
              retained for 2-3 years for business and legal purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we have about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Opt-out of marketing communications</li>
              <li><strong>Withdraw Consent:</strong> Withdraw your consent for analytics cookies at any time</li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, please contact us at{' '}
              <a href="tel:612-408-9010" className="text-blue-600 hover:underline">
                (612) 408-9010
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links</h2>
            <p className="text-gray-700">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices 
              or content of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-gray-700">
              Our services are not directed to children under 13. We do not knowingly collect personal information 
              from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
              new policy on this page and updating the &quot;Last Updated&quot; date. We encourage you to review this 
              policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-900 font-semibold mb-2">Carwash Technologies</p>
              <p className="text-gray-700">322 19th St. SW</p>
              <p className="text-gray-700">Forest Lake, MN 55025</p>
              <p className="text-gray-700 mt-2">
                Phone:{' '}
                <a href="tel:612-408-9010" className="text-blue-600 hover:underline">
                  (612) 408-9010
                </a>
              </p>
            </div>
          </section>

        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[#f0da11] text-gray-900 font-semibold rounded-lg hover:bg-[#d0b211] transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
