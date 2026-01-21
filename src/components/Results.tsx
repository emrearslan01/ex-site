import React from 'react';

const stats = [
  { label: 'Asset Synergy', value: '412%' },
  { label: 'Discovery Index', value: '88%' },
  { label: 'Validation Lift', value: '24%' },
  { label: 'Integrity Status', value: 'VERIFIED' },
];

const Results: React.FC = () => {
  return (
    <section className="bg-[#0a0a0a] py-32 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <p className="text-6xl font-black text-white mb-3 tracking-tighter group-hover:text-slate-300 transition-colors">{stat.value}</p>
              <p className="text-slate-500 font-black uppercase tracking-[0.3em] text-[10px]">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-32 relative bg-[#0a0a0a] rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
          <div className="flex flex-col md:flex-row items-stretch relative z-10">
            <div className="md:w-3/5 p-16 md:p-24">
              <div className="h-10 w-10 text-slate-300 mb-10">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01704C7.91247 16 7.01704 16.8954 7.01704 18V21H14.017ZM14.017 21H17.017C18.1216 21 19.017 20.1046 19.017 19V11C19.017 9.89543 18.1216 9 17.017 9H7.01704C5.91247 9 5.01704 9.89543 5.01704 11V19C5.01704 20.1046 5.91247 21 7.01704 21H10.017V18H14.017V21Z" fill="none" stroke="currentColor" strokeWidth="2"></path><path d="M10 11H14V14H10V11Z" fill="currentColor"></path><path d="M6 5H18V8H6V5Z" fill="currentColor"></path></svg>
              </div>
              <h2 className="text-4xl font-black text-white mb-8 leading-tight uppercase tracking-tight">System validation for market leaders.</h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
                "NovusDV reconstructed our digital perception. Their authority protocols provided immediate infrastructure validation that traditional agencies simply couldn't replicate."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-2xl bg-slate-700 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-slate-700/30 mr-6">
                  SJ
                </div>
                <div>
                  <p className="text-white font-black text-lg uppercase tracking-tight">Sarah Jenkins</p>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Growth Lead, Urban Digital</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/5 min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                alt="Performance metrics" 
                className="w-full h-full object-cover grayscale brightness-50 contrast-125"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
