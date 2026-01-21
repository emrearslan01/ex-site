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
    <div id="pricing" className="bg-[#0a0a0a] py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-xs text-slate-400 font-black tracking-[0.4em] uppercase mb-4">Service Infrastructure</h2>
          <p className="text-5xl font-black text-white sm:text-7xl tracking-tighter">Scale Your Integrity.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {tiers.map((tier, idx) => (
            <div 
              key={tier.name} 
              className={`relative flex flex-col p-10 bg-[#0a0a0a] rounded-[3rem] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 ${idx === 1 ? 'border-slate-400/50 shadow-2xl shadow-white/10 scale-105 z-10' : ''}`}
            >
              {idx === 1 && (
                <div className="absolute top-0 right-10 -translate-y-1/2">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-[10px] font-black bg-white text-[#0a0a0a] tracking-[0.2em] uppercase shadow-lg shadow-white/10">
                    Optimal Deployment
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white tracking-tight uppercase">{tier.name}</h3>
                <p className="mt-4 text-slate-400 text-sm leading-relaxed font-medium">{tier.description}</p>
                <div className="mt-10">
                  <span className="text-6xl font-black text-white">$</span>
                  <span className="text-6xl font-black text-white">{tier.price}</span>
                  <span className="text-slate-500 font-bold ml-2">/MO</span>
                </div>
                <ul className="mt-12 space-y-5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-slate-400 mt-0.5">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-4 text-sm text-slate-300 font-semibold">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => onNavigate('contact')}
                className={`mt-12 block w-full py-5 px-6 rounded-2xl text-sm font-black uppercase tracking-[0.2em] transition-all ${idx === 1 ? 'bg-white text-[#0a0a0a] hover:bg-slate-100' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}
              >
                Provision Access
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
