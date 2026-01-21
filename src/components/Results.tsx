import React from 'react';

const stats = [
  { label: 'Asset Synergy', value: '412%' },
  { label: 'Discovery Index', value: '88%' },
  { label: 'Validation Lift', value: '24%' },
  { label: 'Integrity Status', value: 'VERIFIED' },
];

const Results: React.FC = () => {
  return (
    <section className="bg-white py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <p className="text-4xl sm:text-5xl font-black text-blue-600 mb-2 tracking-tighter group-hover:text-blue-700 transition-colors">{stat.value}</p>
              <p className="text-slate-600 font-bold uppercase tracking-[0.3em] text-[10px]">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 relative bg-gradient-to-br from-blue-50 to-white rounded-[2.5rem] overflow-hidden shadow-xl border border-blue-100">
          <div className="flex flex-col md:flex-row items-stretch relative z-10">
            <div className="md:w-3/5 p-10 md:p-14">
              <div className="h-10 w-10 text-blue-600 mb-10">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01704C7.91247 16 7.01704 16.8954 7.01704 18V21H14.017ZM14.017 21H17.017C18.1216 21 19.017 20.1046 19.017 19V11C19.017 9.89543 18.1216 9 17.017 9H7.01704C5.91247 9 5.01704 9.89543 5.01704 11V19C5.01704 20.1046 5.91247 21 7.01704 21H10.017V18H14.017V21Z" fill="none" stroke="currentColor" strokeWidth="2"></path><path d="M10 11H14V14H10V11Z" fill="currentColor"></path><path d="M6 5H18V8H6V5Z" fill="currentColor"></path></svg>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-5 leading-tight uppercase tracking-tight">System validation for market leaders.</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                "NovusDV reconstructed our digital perception. Their authority protocols provided immediate infrastructure validation that traditional agencies simply couldn't replicate."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20 mr-6">
                  SJ
                </div>
                <div>
                  <p className="text-slate-900 font-black text-lg uppercase tracking-tight">Sarah Jenkins</p>
                  <p className="text-blue-600 text-xs font-bold uppercase tracking-widest">Growth Lead, Urban Digital</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/5 min-h-[280px]">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                alt="Performance metrics" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
