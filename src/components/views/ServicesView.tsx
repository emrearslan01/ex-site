import React from 'react';
import { Page } from '../../App';

interface ServicesViewProps {
  onNavigate: (page: Page) => void;
}

const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  const serviceCategories = [
    {
      title: "Integrity Diagnostic",
      description: "We perform a deep-level audit of your social assets to identify trust-signal gaps. Our diagnostic protocols ensure your profiles pass all internal platform validation checks.",
      details: ["Metadata Reconstruction", "Validation Gap Analysis", "Trust Signal Sync", "Algorithmic Compliance"]
    },
    {
      title: "Authority Infrastructure",
      description: "Building the skeletal structure of your digital leadership. We deploy high-retention authority anchors across TikTok and Instagram to create a stable growth environment.",
      details: ["Platform Authority Sync", "Reach Capacity Expansion", "Influence Network Mapping", "Validation Layering"]
    },
    {
      title: "Global Ecosystem Logic",
      description: "Synchronization of multi-market presence. We engineer the logic paths that allow your brand to scale seamlessly across international LinkedIn and YouTube segments.",
      details: ["Market Search Alignment", "Cross-Platform Synergetics", "Keyword Authority Locks", "Infrastructure Redundancy"]
    }
  ];

  return (
    <div className="bg-white">
      <div className="relative py-40 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-40 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[150px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-600 font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">Strategic Framework</span>
          <h1 className="text-6xl font-black text-slate-900 sm:text-8xl mb-10 tracking-tighter uppercase leading-[0.9]">Architectural<br/>Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Moving beyond simple engagement. We engineer the fundamental social infrastructure required for permanent market authority.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="space-y-48">
          {serviceCategories.map((service, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-24 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="inline-block px-5 py-2 bg-blue-100 border-2 border-blue-200 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                  Protocol 0{idx + 1}
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight uppercase leading-none">{service.title}</h2>
                <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">{service.description}</p>
                <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                  {service.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center space-x-4 text-slate-700 font-semibold text-sm group">
                      <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="uppercase tracking-widest">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-blue-100/50 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-slate-50 rounded-[3.5rem] aspect-video flex items-center justify-center overflow-hidden border-2 border-slate-200">
                  {idx === 0 && (
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  )}
                  {idx === 1 && (
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  )}
                  {idx === 2 && (
                    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-48 relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-[4rem] p-24 text-center text-white overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="relative z-10">
             <h3 className="text-5xl font-black mb-8 uppercase tracking-tighter">Initiate Asset Validation</h3>
             <p className="text-2xl text-blue-100 mb-14 max-w-2xl mx-auto font-medium leading-relaxed">Schedule a consultation with our integrity engineers to begin your system architecture plan.</p>
             <button onClick={() => onNavigate('contact')} className="px-16 py-7 bg-white text-blue-600 rounded-3xl font-bold text-xl uppercase tracking-widest hover:bg-blue-50 transition-all shadow-2xl">
               Get Started
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesView;
