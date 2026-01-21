import React from 'react';

interface LegalViewProps {
  type: 'privacy' | 'terms';
}

const LegalView: React.FC<LegalViewProps> = ({ type }) => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-slate-900 mb-8 capitalize">
          {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
        </h1>
        <div className="prose prose-slate prose-indigo">
          <p className="text-slate-500 mb-6">Last Updated: January 15, 2024</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4">1. Information Collection</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            At NovusDV, we prioritize the security and confidentiality of our clients' data. We collect information necessary to provide our digital infrastructure and presence engineering services, including business niche, current digital status, and account preferences.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4">2. Service Delivery</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Our services are delivered via our proprietary diagnostic systems and architectural consultations. By utilizing our systems, you agree to our terms of automated analysis and manual infrastructure validation.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4">3. Payment & Subscriptions</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Subscriptions for digital diagnostics are billed monthly in advance. Secure payment processing is handled through our verified financial partners. Clients may upgrade or adjust their plans at the end of each billing cycle.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4">4. Strategic Results</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            While NovusDV employs advanced discovery alignment techniques, we acknowledge the fluid nature of digital systems. Our architectural strategies are designed for high-integrity long-term presence.
          </p>

          <div className="mt-20 p-8 bg-slate-50 rounded-2xl border border-slate-100">
             <p className="text-sm text-slate-500">
                For detailed inquiries regarding our {type === 'privacy' ? 'data' : 'service'} standards, please contact our compliance department at <strong>compliance@novusdv.com</strong>.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalView;
