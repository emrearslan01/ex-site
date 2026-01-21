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
    { label: 'Pricing', page: 'home' },
    { label: 'Blog', page: 'blog' },
  ];

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (page: Page, scrollId?: string) => {
    onNavigate(page);
    setIsOpen(false);
    if (scrollId) {
      // Let the page render first (especially when switching back to home)
      window.setTimeout(() => scrollToId(scrollId), 0);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex-shrink-0 flex items-center group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-2xl italic">N</span>
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase">NovusDV</span>
            </button>
            <div className="hidden sm:ml-12 sm:flex sm:space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() =>
                    handleNavClick(
                      link.page,
                      link.label === 'System Audit'
                        ? 'audit'
                        : link.label === 'Pricing'
                          ? 'pricing'
                          : undefined
                    )
                  }
                  className={`${
                    currentPage === link.page
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-slate-600 hover:text-blue-600'
                  } inline-flex items-center text-sm font-semibold tracking-wide transition-all pb-1`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button 
              onClick={() => handleNavClick('contact')}
              className="btn-primary px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-widest shadow-lg"
            >
              Get Started
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-600 hover:text-blue-600 transition-colors"
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

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-white border-b border-slate-200 shadow-lg`}>
        <div className="pt-2 pb-6 space-y-1 px-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() =>
                handleNavClick(
                  link.page,
                  link.label === 'System Audit'
                    ? 'audit'
                    : link.label === 'Pricing'
                      ? 'pricing'
                      : undefined
                )
              }
              className="w-full text-left block py-4 text-base font-semibold text-slate-600 border-b border-slate-100 hover:text-blue-600"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full text-center block mt-6 py-4 rounded-xl font-bold btn-primary tracking-widest uppercase"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
