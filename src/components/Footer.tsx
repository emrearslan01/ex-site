import React from 'react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-slate-700 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-slate-700/30">
                <span className="text-white font-black text-3xl italic">N</span>
              </div>
              <span className="text-3xl font-black text-white tracking-tighter uppercase">NovusDV</span>
            </div>
            <p className="mt-8 text-slate-500 max-w-sm leading-relaxed font-medium text-sm">
              Architectural presence engineering for global brands. We provide specialized infrastructure validation to reconstruct digital authority through sophisticated network protocols.
            </p>
          </div>
          <div>
            <h3 className="text-[10px] font-black text-slate-400 tracking-[0.4em] uppercase mb-8">Navigation</h3>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Home</button></li>
              <li><button onClick={() => onNavigate('services')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Services</button></li>
              <li><button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Audit Engine</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Contact</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] font-black text-slate-400 tracking-[0.4em] uppercase mb-8">Compliance</h3>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('legal-privacy')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Privacy</button></li>
              <li><button onClick={() => onNavigate('legal-terms')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Terms</button></li>
              <li><button className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Data Standards</button></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
            &copy; 2024 NovusDV Infrastructure Agency. Registration No. NDV-2024-INF.
          </p>
          <div className="flex items-center space-x-8">
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-6 filter brightness-0 invert opacity-20" />
             <div className="flex space-x-2 opacity-20">
                <div className="w-10 h-6 bg-slate-800 rounded"></div>
                <div className="w-10 h-6 bg-slate-800 rounded"></div>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
