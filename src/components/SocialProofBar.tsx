import React from 'react';

export const SocialProofBar: React.FC = () => {
  return (
    <section className="bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-blue-600">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 15.27l-5.18 3.04 1.4-5.98L1.6 8.73l6.06-.52L10 2.5l2.34 5.71 6.06.52-4.62 3.6 1.4 5.98L10 15.27z" />
                </svg>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Client satisfaction focus</p>
              <p className="text-xs text-slate-500">Professional services • No spam / no bot claims</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-slate-500">
            {['Strategy', 'Content', 'Analytics', 'Compliance', 'Support'].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

