import React from 'react';

const PlaceholderLogo: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="h-10 px-5 rounded-xl border border-slate-200 bg-white flex items-center justify-center">
      <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">{name}</span>
    </div>
  );
};

export const LogoStrip: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-[0.35em] mb-8">
          Trusted by teams building serious brands
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <PlaceholderLogo name="E-commerce" />
          <PlaceholderLogo name="SaaS" />
          <PlaceholderLogo name="Agency" />
          <PlaceholderLogo name="Fintech" />
          <PlaceholderLogo name="Creators" />
        </div>
      </div>
    </section>
  );
};

