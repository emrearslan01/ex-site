import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { SocialProofBar } from './components/SocialProofBar';
import { LogoStrip } from './components/LogoStrip';
import { BlogPreview } from './components/BlogPreview';
import Features from './components/Features';
import Pricing from './components/Pricing';
import AuditTool from './components/AuditTool';
import Results from './components/Results';
import Footer from './components/Footer';
import LegalView from './components/views/LegalView';
import ServicesView from './components/views/ServicesView';
import ContactView from './components/views/ContactView';
import BlogView from './components/views/BlogView';

export type Page = 'home' | 'services' | 'pricing' | 'contact' | 'blog' | 'legal-privacy' | 'legal-terms';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesView onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactView />;
      case 'blog':
        return <BlogView onNavigate={setCurrentPage} />;
      case 'legal-privacy':
        return <LegalView type="privacy" />;
      case 'legal-terms':
        return <LegalView type="terms" />;
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <SocialProofBar />
            <LogoStrip />
            <Results />
            <Features />
            <BlogPreview onNavigate={setCurrentPage} />
            <section id="audit" className="py-24 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <span className="text-slate-400 font-bold tracking-[0.2em] uppercase text-xs">Diagnostic Core</span>
                  <h2 className="text-4xl font-black text-slate-900 sm:text-6xl mt-4">
                    Infrastructure Integrity Audit
                  </h2>
                  <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
                    Evaluate your system's authority baseline. Discover how your digital assets align with global trust protocols.
                  </p>
                </div>
                <AuditTool />
              </div>
            </section>
            <Pricing onNavigate={setCurrentPage} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
