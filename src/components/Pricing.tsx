import React from 'react';
import { Page } from '../App';

interface PricingProps {
  onNavigate: (page: Page) => void;
}

const tiers = [
  {
    name: 'Presence Tier I',
    price: 49,
    description: 'Baseline infrastructure for emerging brand profiles.',
    features: [
      'Metadata Integrity Optimization',
      'Foundation Authority Seeding',
      'System-Wide Presence Sync',
      'Initial Network Indexing',
      '24/7 Security Monitoring',
    ],
  },
  {
    name: 'Authority Tier II',
    price: 129,
    description: 'High-capacity expansion for growth-phase systems.',
    features: [
      'Everything in Tier I',
      'Aggressive Authority Scaling',
      'Algorithmic Trust Injections',
      'Market Segment Validation',
      'Priority Delivery Protocols',
      'Advanced Performance Metrics',
    ],
  },
  {
    name: 'Supremacy Tier III',
    price: 299,
    description: 'Total digital dominance for elite market leaders.',
    features: [
      'Complete Social Infrastructure',
      'Global Visibility Architecture',
      'Custom Strategy Engineering',
      'Dedicated Integrity Manager',
      'Crisis Proofing & Continuity',
      'VIP Network Integration',
    ],
  },
];

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  return (
    <div id="pricing" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xs text-blue-600 font-bold tracking-[0.4em] uppercase mb-4">Service Infrastructure</h2>
          <p className="text-4xl font-black text-slate-900 sm:text-5xl tracking-tighter">Scale Your Integrity.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <div 
              key={tier.name} 
              className={`relative flex flex-col p-7 bg-white rounded-[2rem] border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                idx === 1 
                  ? 'border-blue-500 shadow-xl shadow-blue-500/15 md:scale-[1.03] z-10' 
                  : 'border-slate-200 hover:border-blue-300'
              }`}
            >
              {idx === 1 && (
                <div className="absolute top-0 right-10 -translate-y-1/2">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-[10px] font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white tracking-[0.2em] uppercase shadow-lg">
                    Optimal Deployment
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">{tier.name}</h3>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed font-medium">{tier.description}</p>
                <div className="mt-8">
                  <span className="text-5xl font-black text-slate-900">$</span>
                  <span className="text-5xl font-black text-slate-900">{tier.price}</span>
                  <span className="text-slate-500 font-bold ml-2">/MO</span>
                </div>
                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-4 text-sm text-slate-700 font-semibold">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => onNavigate('contact')}
                className={`mt-8 block w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-[0.2em] transition-all ${
                  idx === 1 
                    ? 'btn-primary shadow-lg' 
                    : 'bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600 border-2 border-slate-200'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
