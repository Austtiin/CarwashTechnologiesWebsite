import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | Carwash Technologies',
  description: 'Terms of Use for Carwash Technologies - Terms and conditions for using our website and services.',
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Use
          </h1>
          <p className="text-gray-600">
            <strong>Effective Date:</strong> March 30, 2026
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Last Updated:</strong> March 30, 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 prose prose-slate max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Carwash Technologies. By accessing or using our website at{' '}
              <a href="https://www.carwashtechnologies.com" className="text-blue-600 hover:underline">
                www.carwashtechnologies.com
              </a>
              , you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree with 
              any part of these terms, you may not use our website.
            </p>
            <p className="text-gray-700">
              These terms apply to all visitors, users, and others who access or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Our Website</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.1 Permitted Use</h3>
            <p className="text-gray-700 mb-4">
              You may use our website for lawful purposes only. You agree to use the website in accordance with 
              all applicable laws and regulations.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.2 Prohibited Use</h3>
            <p className="text-gray-700 mb-4">
              You agree NOT to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Use the website for any illegal purpose or to violate any laws</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the website or servers</li>
              <li>Use automated scripts, bots, or scrapers to access the website</li>
              <li>Submit false, misleading, or fraudulent information through contact forms</li>
              <li>Transmit viruses, malware, or other harmful code</li>
              <li>Harass, abuse, or harm other users or our staff</li>
              <li>Reproduce, duplicate, or copy content without permission</li>
              <li>Use the website for spam or unsolicited marketing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content on this website, including but not limited to text, graphics, logos, images, videos, 
              software, and design elements, is the property of Carwash Technologies or its licensors and is 
              protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700 mb-4">
              You may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Reproduce, distribute, or display content without written permission</li>
              <li>Modify, reverse engineer, or create derivative works</li>
              <li>Remove copyright or proprietary notices</li>
              <li>Use our trademarks without authorization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Services and Information</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.1 Service Descriptions</h3>
            <p className="text-gray-700 mb-4">
              We strive to provide accurate information about our products and services, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Equipment sales and installation</li>
              <li>Service and maintenance</li>
              <li>Chemical sales and supply</li>
              <li>Consulting services</li>
            </ul>
            <p className="text-gray-700 mb-4">
              However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, 
              reliable, current, or error-free. We reserve the right to correct errors and update information at any time.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.2 No Professional Advice</h3>
            <p className="text-gray-700">
              Information on this website is for general informational purposes only and should not be construed 
              as professional advice. You should consult with appropriate professionals for specific advice tailored 
              to your situation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Safety Data Sheets (SDS)</h2>
            <p className="text-gray-700 mb-4">
              We provide Safety Data Sheets (SDS) for chemical products on our website. While we make every effort 
              to keep SDS information current and accurate:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>SDS files are provided for informational purposes only</li>
              <li>Users should verify they have the most current version</li>
              <li>We are not responsible for errors in third-party SDS documents</li>
              <li>Always follow proper chemical handling and safety procedures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Links</h2>
            <p className="text-gray-700">
              Our website may contain links to third-party websites or services that are not owned or controlled 
              by Carwash Technologies. We have no control over and assume no responsibility for the content, 
              privacy policies, or practices of any third-party sites. You acknowledge and agree that we shall 
              not be responsible for any damages arising from your use of such sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-gray-700 mb-4">
              THIS WEBSITE AND ALL CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES 
              OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties of non-infringement</li>
              <li>Warranties that the website will be uninterrupted, secure, or error-free</li>
              <li>Warranties regarding the accuracy or reliability of content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              TO THE FULLEST EXTENT PERMITTED BY LAW, CARWASH TECHNOLOGIES SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or use</li>
              <li>Damages arising from your use or inability to use the website</li>
              <li>Damages resulting from unauthorized access to your information</li>
              <li>Damages from viruses or malicious code</li>
            </ul>
            <p className="text-gray-700">
              IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED $100 OR THE AMOUNT YOU PAID US IN THE PAST 12 MONTHS, 
              WHICHEVER IS GREATER.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
            <p className="text-gray-700">
              You agree to indemnify, defend, and hold harmless Carwash Technologies, its officers, directors, 
              employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses 
              (including reasonable attorneys&apos; fees) arising from:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Your use of the website</li>
              <li>Your violation of these Terms of Use</li>
              <li>Your violation of any rights of another party</li>
              <li>Any content you submit through the website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privacy</h2>
            <p className="text-gray-700">
              Your use of the website is also governed by our{' '}
              <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              . Please review our Privacy Policy to understand our practices regarding the collection and use 
              of your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modifications to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately 
              upon posting to the website. Your continued use of the website after changes are posted constitutes 
              your acceptance of the modified terms. We encourage you to review these terms periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>
            <p className="text-gray-700">
              We reserve the right to terminate or suspend your access to the website at any time, without notice, 
              for any reason, including if we believe you have violated these Terms of Use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
            <p className="text-gray-700">
              These Terms of Use shall be governed by and construed in accordance with the laws of the State of 
              Minnesota, without regard to its conflict of law principles. Any legal action or proceeding arising 
              under these terms shall be brought exclusively in the courts located in Minnesota.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Severability</h2>
            <p className="text-gray-700">
              If any provision of these Terms of Use is found to be invalid or unenforceable, the remaining 
              provisions shall continue in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Entire Agreement</h2>
            <p className="text-gray-700">
              These Terms of Use, together with our Privacy Policy, constitute the entire agreement between you 
              and Carwash Technologies regarding your use of the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about these Terms of Use, please contact us:
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

          <section className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-gray-900 font-semibold mb-2">Acknowledgment</p>
            <p className="text-gray-700">
              BY USING THIS WEBSITE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY 
              THESE TERMS OF USE.
            </p>
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
