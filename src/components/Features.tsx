import React from 'react';

const features = [
  {
    name: 'Integrity Validation',
    description: 'We audit and reconstruct your profile metadata to ensure perfect alignment with platform-level trust signals.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: 'Authority Architecture',
    description: 'A multi-layered foundation that builds high-retention engagement and peer-to-peer social proof natively.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: 'Ecosystem Syncing',
    description: 'We synchronize your assets across X, LinkedIn, and YouTube to create a unified cross-platform authority loop.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    name: 'Compliance Monitoring',
    description: 'Real-time safety monitoring ensures your growth protocols remain within platform-specific integrity thresholds.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const Features: React.FC = () => {
  return (
    <div id="services" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-xs text-slate-400 font-black tracking-[0.4em] uppercase mb-4">Core Mentality</h2>
          <p className="text-5xl font-black text-white sm:text-7xl tracking-tighter">
            Systemic Elevation.
          </p>
          <p className="mt-8 max-w-2xl text-xl text-slate-500 mx-auto font-medium">
            Standard engagement is a temporary fix. Our infrastructure engineering provides a permanent upgrade to your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature) => (
            <div key={feature.name} className="group p-10 bg-[#0a0a0a] rounded-[2.5rem] border border-white/5 hover:border-slate-400/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-slate-700/20 text-slate-300 flex items-center justify-center mb-8 border border-slate-600/30 group-hover:bg-slate-600 group-hover:text-white transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{feature.name}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
