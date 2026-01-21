import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-600 text-lg">Last updated: January 2025</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              By accessing and using Premartic ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Description of Service</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Premartic is an AI-powered marketing intelligence platform that provides marketing analysis, testing, and optimization tools. Our service includes:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>Message Generator for creating marketing angles</li>
              <li>Performance Tester for A/B testing simulations</li>
              <li>Page Analyzer for conversion optimization</li>
              <li>Workflow Engine for campaign planning</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">3. User Accounts and Registration</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              To use our service, you must register for an account. You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>Providing accurate and complete information</li>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Subscription and Billing</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Premartic operates on a subscription-based model with the following plans:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li><strong>Individual Plan:</strong> $99/month for freelancers and small teams</li>
              <li><strong>Enterprise Plan:</strong> $499/month for businesses and agencies</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              Subscriptions are billed monthly and automatically renew unless cancelled. You can cancel your subscription at any time through your account settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Acceptable Use Policy</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              You agree to use Premartic only for lawful purposes and in accordance with these terms. You shall not:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>Use the service for any illegal or unauthorized purpose</li>
              <li>Attempt to reverse engineer or modify the service</li>
              <li>Use automated tools to access the service without permission</li>
              <li>Share your account credentials with others</li>
              <li>Upload malicious content or code</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">6. Content and Data</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              You retain ownership of all content and data you upload to Premartic. By using our service, you grant us permission to process and analyze your content solely for providing our services.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your data, but you acknowledge that no internet transmission is completely secure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">7. Intellectual Property</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Premartic and its original content, features, and functionality are owned by Premartic and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">8. Disclaimer of Warranties</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              The service is provided "as is" without warranties of any kind. We do not guarantee that the service will be uninterrupted, error-free, or meet your specific requirements. Our AI predictions and analyses are for informational purposes only.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">9. Limitation of Liability</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              In no event shall Premartic be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">10. Termination</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We reserve the right to terminate or suspend your account at our discretion, with or without cause. Upon termination, your right to use the service will cease immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">11. Changes to Terms</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through our service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">12. Governing Law</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">13. Contact Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us through the contact form on our website.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-slate-600 text-sm text-center">
            These terms were last updated on January 2025. By continuing to use Premartic, you agree to these terms.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Terms;
