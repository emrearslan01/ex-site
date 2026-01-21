import React from 'react';

interface LegalViewProps {
  type: 'privacy' | 'terms';
}

const LegalView: React.FC<LegalViewProps> = ({ type }) => {
  if (type === 'privacy') {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-500 mb-8 text-sm">Last Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          
          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Introduction</h2>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Novus Digital Ventures LTD ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our digital marketing and consulting services.
              </p>
              <p className="text-slate-700 mb-4 leading-relaxed">
                We are registered in England and Wales (Company Number: 16967760) with our registered office at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2.1 Personal Information</h3>
              <p className="text-slate-700 mb-3 leading-relaxed">
                We may collect the following types of personal information:
              </p>
              <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2 ml-4">
                <li>Name, email address, phone number, and postal address</li>
                <li>Company name, job title, and business information</li>
                <li>Payment and billing information (processed securely through third-party payment processors)</li>
                <li>Website URLs and social media profiles for service delivery</li>
                <li>Communication preferences and correspondence</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2.2 Technical Information</h3>
              <p className="text-slate-700 mb-3 leading-relaxed">
                When you visit our website, we automatically collect:
              </p>
              <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2 ml-4">
                <li>IP address, browser type, and device information</li>
                <li>Pages visited, time spent, and navigation patterns</li>
                <li>Cookies and similar tracking technologies (see Cookie Policy below)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-700 mb-3 leading-relaxed">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2 ml-4">
                <li>To provide, maintain, and improve our digital marketing and consulting services</li>
                <li>To process payments and manage subscriptions</li>
                <li>To communicate with you about our services, updates, and support</li>
                <li>To comply with legal obligations and regulatory requirements</li>
                <li>To prevent fraud, abuse, and unauthorized access</li>
                <li>To analyze usage patterns and improve user experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-slate-700 mb-3 leading-relaxed">
                Under the General Data Protection Regulation (GDPR), we process your personal data based on:
              </p>
              <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2 ml-4">
                <li><strong>Contractual necessity:</strong> To fulfill our service agreements with you</li>
                <li><strong>Legitimate interests:</strong> For business operations, security, and service improvement</li>
                <li><strong>Legal obligations:</strong> To comply with applicable laws and regulations</li>
                <li><strong>Consent:</strong> Where you have provided explicit consent for specific processing activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Data Sharing and Disclosure</h2>
              <p className="text-slate-700 mb-3 leading-relaxed">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2 ml-4">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operations (payment processors, hosting providers, analytics services)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or regulatory authority</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>With Your Consent:</strong> When you have explicitly authorized such sharing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Data Security</h2>
              <p className="text-slate-700 mb-4 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, access controls, and regular security assessments.
              </p>
              <p className="text-slate-700 mb-4 leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Data Retention</h2>
              <p className="text-slate-700 mb-4 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When data is no longer needed, we securely delete or anonymize it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Your Rights (GDPR)</h2>
              <p className="text-slate-700 mb-3 leading-relaxed">
                If you are located in the European Economic Area (EEA) or United Kingdom, you have the following rights:
              </p>
              <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2 ml-4">
                <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your data under certain circumstances</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-slate-700 mb-4 leading-relaxed">
                To exercise these rights, please contact us at <strong>support@novusdv.com</strong>. We will respond within 30 days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Cookies and Tracking Technologies</h2>
              <p className="text-slate-700 mb-4 leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookies through your browser settings. For more information, please refer to our Cookie Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">10. International Data Transfers</h2>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Your information may be transferred to and processed in countries outside the EEA. We ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by the European Commission, to protect your data in accordance with GDPR requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">11. Children's Privacy</h2>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-slate-700 mb-4 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">13. Contact Us</h2>
              <p className="text-slate-700 mb-4 leading-relaxed">
                If you have questions, concerns, or wish to exercise your rights regarding this Privacy Policy, please contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <p className="text-slate-700 mb-2"><strong>Novus Digital Ventures LTD</strong></p>
                <p className="text-slate-700 mb-2">71-75 Shelton Street, Covent Garden</p>
                <p className="text-slate-700 mb-2">London, WC2H 9JQ, United Kingdom</p>
                <p className="text-slate-700 mb-2">Email: <strong>support@novusdv.com</strong></p>
                <p className="text-slate-700">Company Number: 16967760</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Terms and Conditions</h1>
        <p className="text-slate-500 mb-8 text-sm">Last Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        
        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              These Terms and Conditions ("Terms") govern your use of the services provided by Novus Digital Ventures LTD ("we", "us", "our", "Company"). By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              We are a limited company registered in England and Wales (Company Number: 16967760) with our registered office at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom.
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              If you do not agree to these Terms, you must not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Definitions</h2>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2 ml-4">
              <li><strong>"Services"</strong> means our digital marketing, consulting, and related services</li>
              <li><strong>"Client"</strong> or <strong>"You"</strong> means the individual or entity using our services</li>
              <li><strong>"Content"</strong> means all materials, information, and data provided through our services</li>
              <li><strong>"Account"</strong> means your registered account with us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Services Description</h2>
            <p className="text-slate-700 mb-3 leading-relaxed">
              We provide digital marketing services, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2 ml-4">
              <li>Social media marketing and management</li>
              <li>Digital presence optimization and consulting</li>
              <li>Content strategy and development</li>
              <li>Analytics and performance reporting</li>
              <li>Related digital marketing consulting services</li>
            </ul>
            <p className="text-slate-700 mb-4 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Account Registration and Eligibility</h2>
            <p className="text-slate-700 mb-3 leading-relaxed">
              To use our services, you must:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2 ml-4">
              <li>Be at least 18 years of age or have parental consent</li>
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and update your account information to keep it accurate</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>
            <p className="text-slate-700 mb-4 leading-relaxed">
              You are responsible for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Payment Terms</h2>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">5.1 Fees and Billing</h3>
            <p className="text-slate-700 mb-3 leading-relaxed">
              Service fees are as specified in your service agreement or subscription plan. All fees are stated in the currency indicated and are exclusive of applicable taxes.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">5.2 Payment Processing</h3>
            <p className="text-slate-700 mb-3 leading-relaxed">
              Payments are processed securely through third-party payment processors. By providing payment information, you authorize us to charge the specified amount to your chosen payment method.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">5.3 Refunds and Cancellations</h3>
            <p className="text-slate-700 mb-3 leading-relaxed">
              Refund and cancellation policies are specified in your service agreement. Generally, subscription fees are billed in advance and are non-refundable except as required by law or as specified in your agreement.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">5.4 Late Payments</h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Late payments may result in service suspension or termination. We reserve the right to charge interest on overdue amounts in accordance with applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Intellectual Property</h2>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">6.1 Our Content</h3>
            <p className="text-slate-700 mb-3 leading-relaxed">
              All content, materials, and intellectual property provided through our services, including but not limited to text, graphics, logos, software, and designs, are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">6.2 Client Content</h3>
            <p className="text-slate-700 mb-3 leading-relaxed">
              You retain ownership of content you provide to us. By providing content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content solely for the purpose of providing our services.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">6.3 Restrictions</h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              You may not copy, modify, distribute, sell, or lease any part of our services or content without our prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Acceptable Use</h2>
            <p className="text-slate-700 mb-3 leading-relaxed">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2 ml-4">
              <li>Use our services for any illegal, fraudulent, or unauthorized purpose</li>
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Transmit viruses, malware, or other harmful code</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the integrity or performance of our services</li>
              <li>Use automated systems to access our services without authorization</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Service Availability and Modifications</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              We strive to provide reliable services but do not guarantee uninterrupted or error-free operation. We may perform scheduled or emergency maintenance that may temporarily affect service availability. We reserve the right to modify, update, or discontinue services with reasonable notice to clients.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Warranties and Disclaimers</h2>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">9.1 Service Warranties</h3>
            <p className="text-slate-700 mb-3 leading-relaxed">
              We warrant that we will provide services with reasonable care and skill. However, we do not guarantee specific results or outcomes from our services.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">9.2 Disclaimers</h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR SERVICES WILL MEET YOUR REQUIREMENTS OR BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">10. Limitation of Liability</h2>
            <p className="text-slate-700 mb-3 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES, ARISING OUT OF OR RELATED TO YOUR USE OF OUR SERVICES.
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Our total liability for any claims arising from these Terms or our services shall not exceed the total amount paid by you to us in the twelve (12) months preceding the claim. Nothing in these Terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">11. Indemnification</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Novus Digital Ventures LTD, its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to your use of our services, violation of these Terms, or infringement of any rights of another party.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">12. Termination</h2>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">12.1 Termination by You</h3>
            <p className="text-slate-700 mb-3 leading-relaxed">
              You may terminate your account at any time by contacting us or using account termination features, subject to any applicable cancellation policies.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">12.2 Termination by Us</h3>
            <p className="text-slate-700 mb-3 leading-relaxed">
              We may suspend or terminate your account immediately if you breach these Terms, engage in fraudulent activity, or for any other reason we deem necessary to protect our interests or comply with legal obligations.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">12.3 Effect of Termination</h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Upon termination, your right to use our services will cease immediately. Provisions that by their nature should survive termination will remain in effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">13. Data Protection</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Our collection and use of personal information is governed by our Privacy Policy, which forms part of these Terms. By using our services, you consent to such processing in accordance with our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">14. Dispute Resolution</h2>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">14.1 Governing Law</h3>
            <p className="text-slate-700 mb-3 leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of England and Wales.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">14.2 Jurisdiction</h3>
            <p className="text-slate-700 mb-3 leading-relaxed">
              Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">14.3 Alternative Dispute Resolution</h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Before initiating legal proceedings, parties agree to attempt to resolve disputes through good faith negotiation. If resolution cannot be reached, parties may seek mediation through an agreed mediator.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">15. General Provisions</h2>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">15.1 Entire Agreement</h3>
            <p className="text-slate-700 mb-3 leading-relaxed">
              These Terms, together with our Privacy Policy and any service agreements, constitute the entire agreement between you and us regarding our services.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">15.2 Amendments</h3>
            <p className="text-slate-700 mb-3 leading-relaxed">
              We may modify these Terms at any time. Material changes will be notified to you via email or through our services. Continued use after such notification constitutes acceptance of the modified Terms.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">15.3 Severability</h3>
            <p className="text-slate-700 mb-3 leading-relaxed">
              If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">15.4 Waiver</h3>
            <p className="text-slate-700 mb-3 leading-relaxed">
              Our failure to enforce any provision of these Terms does not constitute a waiver of such provision.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">15.5 Assignment</h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              You may not assign or transfer these Terms without our prior written consent. We may assign these Terms to any affiliate or in connection with a merger, acquisition, or sale of assets.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">16. Contact Information</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              For questions about these Terms, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-2"><strong>Novus Digital Ventures LTD</strong></p>
              <p className="text-slate-700 mb-2">71-75 Shelton Street, Covent Garden</p>
              <p className="text-slate-700 mb-2">London, WC2H 9JQ, United Kingdom</p>
              <p className="text-slate-700 mb-2">Email: <strong>support@novusdv.com</strong></p>
              <p className="text-slate-700">Company Number: 16967760</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalView;
