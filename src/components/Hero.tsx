import React from 'react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative pt-32 pb-40 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-slate-400/5 rounded-full blur-[120px]"></div>
        <img
          className="w-full h-full object-cover opacity-10 mix-blend-overlay scale-110"
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000"
          alt="Abstract Digital Background"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/10 text-slate-300 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
          <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 animate-pulse"></span>
          NovusDV Presence Architecture
        </div>
        
        <h1 className="text-6xl tracking-tighter font-black text-white sm:text-7xl md:text-8xl mb-8 leading-[0.9]">
          <span className="block mb-2">SYSTEMIC</span>
          <span className="text-gradient block">INFRASTRUCTURE</span>
        </h1>
        
        <p className="mt-10 max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed font-medium">
          We engineer the high-integrity digital foundations required for professional authority. NovusDV provides structural validation for global network assets and brand presence.
        </p>
        
        <div className="mt-14 flex flex-col sm:flex-row justify-center items-center gap-6">
          <button
            onClick={() => {
              const el = document.getElementById('pricing');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-12 py-6 bg-white text-[#0a0a0a] rounded-2xl text-lg font-black uppercase tracking-widest hover:bg-slate-100 transition-all transform hover:-translate-y-1 shadow-2xl shadow-white/10"
          >
            Provision System
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('audit');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-12 py-6 glass text-white rounded-2xl text-lg font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
          >
            System Assessment
          </button>
        </div>
        
        <div className="mt-32 pt-12 border-t border-white/5">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-12">Validated Ecosystems</p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12">
            {[
              { name: 'Instagram', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg' },
              { name: 'TikTok', url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Ionicons_logo-tiktok.svg', invert: true },
              { name: 'LinkedIn', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png' },
              { name: 'YouTube', url: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg' }
            ].map((platform) => (
              <div key={platform.name} className="flex flex-col items-center group cursor-default opacity-40 hover:opacity-100 transition-all duration-500">
                <img className={`h-7 mb-3 transition-all ${platform.invert ? 'invert brightness-200' : 'grayscale group-hover:grayscale-0'}`} src={platform.url} alt={platform.name} />
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] group-hover:text-slate-300">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
