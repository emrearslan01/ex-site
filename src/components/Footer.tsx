import React from 'react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-blue-500/20">
                <span className="text-white font-black text-3xl italic">N</span>
              </div>
              <span className="text-3xl font-black text-white tracking-tighter uppercase">NovusDV</span>
            </div>
            <p className="mt-8 text-slate-400 max-w-sm leading-relaxed font-medium text-sm">
              Architectural presence engineering for global brands. We provide specialized infrastructure validation to reconstruct digital authority through sophisticated network protocols.
            </p>
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-blue-400 tracking-[0.4em] uppercase mb-8">Navigation</h3>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-semibold uppercase tracking-widest">Home</button></li>
              <li><button onClick={() => onNavigate('services')} className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-semibold uppercase tracking-widest">Services</button></li>
              <li><button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-semibold uppercase tracking-widest">Audit Engine</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-semibold uppercase tracking-widest">Contact</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-blue-400 tracking-[0.4em] uppercase mb-8">Legal</h3>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('legal-privacy')} className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-semibold uppercase tracking-widest">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('legal-terms')} className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-semibold uppercase tracking-widest">Terms and Conditions</button></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-800">
          <div className="mb-8">
            <p className="text-slate-300 text-sm font-bold mb-2">NOVUS DIGITAL VENTURES LTD</p>
            <p className="text-slate-400 text-xs font-medium mb-1">Company Number: 16967760</p>
            <p className="text-slate-400 text-xs font-medium mb-4">Registered in England and Wales</p>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Registered Office Address:<br />
              71-75 Shelton Street, Covent Garden,<br />
              London, WC2H 9JQ, United Kingdom
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
              &copy; 2026 Novus Digital Ventures LTD. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
