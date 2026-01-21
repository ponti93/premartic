import React from 'react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      {/* Header */}
      <header className="bg-slate-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center font-bold text-white text-sm">P</div>
              <span className="text-lg font-bold">Premartic</span>
            </Link>
            <Link to="/" className="text-slate-400 hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-600 text-lg">Last updated: January 2025</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Introduction</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              At Premartic ("we," "us," or "our"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered marketing intelligence platform.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              By using Premartic, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Personal Information</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              We may collect personally identifiable information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>Name and contact information (email address)</li>
              <li>Account credentials and profile information</li>
              <li>Payment information (processed securely by third-party providers)</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">Usage Data</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              We automatically collect certain information when you use our service:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage patterns and feature interactions</li>
              <li>Log data and performance metrics</li>
              <li>Marketing content and analysis data you upload</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">3. How We Use Your Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li><strong>Service Provision:</strong> To provide, maintain, and improve our AI marketing intelligence platform</li>
              <li><strong>Account Management:</strong> To create and manage your account, process payments, and provide customer support</li>
              <li><strong>AI Processing:</strong> To analyze your marketing content and provide intelligent recommendations</li>
              <li><strong>Communication:</strong> To send you important updates, newsletters, and respond to your inquiries</li>
              <li><strong>Security:</strong> To monitor and prevent fraud, abuse, and security incidents</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
              <li><strong>Analytics:</strong> To understand usage patterns and improve our services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Information Sharing and Disclosure</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our platform (payment processors, hosting services, analytics providers)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Consent:</strong> With your explicit consent</li>
              <li><strong>Protection:</strong> To protect our rights, property, or safety, or that of our users</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Data Security</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and employee training</li>
              <li>Secure data centers and infrastructure</li>
              <li>Regular backups and disaster recovery procedures</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">6. Your Rights and Choices</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">7. Cookies and Tracking Technologies</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience and analyze usage patterns. You can control cookie settings through your browser preferences, though disabling cookies may limit certain features of our service.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              We use both session cookies (temporary) and persistent cookies (longer-term) for authentication, preferences, and analytics.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">8. Third-Party Services</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our service integrates with third-party services, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li><strong>Google Gemini AI:</strong> For AI-powered analysis and recommendations</li>
              <li><strong>Firebase:</strong> For authentication and real-time database services</li>
              <li><strong>Payment Processors:</strong> For secure payment processing</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              These third parties have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">9. Data Retention</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When we no longer need your information, we securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">10. International Data Transfers</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">11. Children's Privacy</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">12. Changes to This Privacy Policy</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We may also send you an email notification for significant changes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">13. Contact Us</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li><strong>Email:</strong> privacy@premartic.com</li>
              <li><strong>Contact Form:</strong> Available on our website</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              We will respond to your inquiries within 30 days.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-slate-600 text-sm text-center">
            This privacy policy was last updated on January 2025. By continuing to use Premartic, you acknowledge that you have read and understood this policy.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
