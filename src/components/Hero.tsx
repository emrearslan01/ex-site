import React from 'react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative pt-32 pb-40 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
          NovusDV Presence Architecture
        </div>
        
        <h1 className="text-6xl tracking-tighter font-black text-slate-900 sm:text-7xl md:text-8xl mb-8 leading-[0.9]">
          <span className="block mb-2">SYSTEMIC</span>
          <span className="text-gradient block">INFRASTRUCTURE</span>
        </h1>
        
        <p className="mt-10 max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed font-medium">
          We engineer the high-integrity digital foundations required for professional authority. NovusDV provides structural validation for global network assets and brand presence.
        </p>
        
        <div className="mt-14 flex flex-col sm:flex-row justify-center items-center gap-6">
          <button
            onClick={() => {
              const el = document.getElementById('pricing');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary w-full sm:w-auto px-12 py-6 rounded-2xl text-lg font-bold uppercase tracking-widest shadow-xl"
          >
            Get Started
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('audit');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-12 py-6 bg-white border-2 border-blue-500 text-blue-600 rounded-2xl text-lg font-bold uppercase tracking-widest hover:bg-blue-50 transition-all shadow-lg"
          >
            System Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
