import React, { useState } from 'react';
import { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'System Audit', page: 'home' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex-shrink-0 flex items-center group"
            >
              <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center mr-3 group-hover:bg-slate-600 transition-all duration-300 shadow-lg shadow-slate-700/30">
                <span className="text-white font-bold text-2xl italic">N</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tighter uppercase">NovusDV</span>
            </button>
            <div className="hidden sm:ml-12 sm:flex sm:space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.page)}
                  className={`${
                    currentPage === link.page
                      ? 'text-slate-200'
                      : 'text-slate-400 hover:text-white'
                  } inline-flex items-center text-sm font-bold tracking-wide transition-all uppercase`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-white text-[#0a0a0a] px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-slate-100 transition-all shadow-lg shadow-white/10 hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-white transition-colors"
            >
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-[#0a0a0a] border-b border-white/5`}>
        <div className="pt-2 pb-6 space-y-1 px-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.page)}
              className="w-full text-left block py-4 text-base font-bold text-slate-400 border-b border-white/5"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full text-center block mt-6 py-4 rounded-xl font-black bg-white text-[#0a0a0a] tracking-widest uppercase"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
