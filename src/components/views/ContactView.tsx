import React from 'react';

const ContactView: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-blue-600 font-bold tracking-[0.4em] uppercase text-xs">Architectural Access</span>
            <h1 className="text-6xl font-black text-slate-900 mt-6 mb-10 leading-[0.9] uppercase tracking-tighter">Connect with<br/>the Engineers.</h1>
            <p className="text-xl text-slate-600 mb-14 leading-relaxed font-medium">
              NovusDV operates specialized high-capacity systems. We selectively partner with brands where our infrastructure protocols can achieve high-trust market alignment. Submit your profile for evaluation.
            </p>

            <div className="space-y-10">
              <div className="flex items-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mr-6 group-hover:scale-110 transition-all shadow-lg shadow-blue-500/20">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Infrastructure Support</p>
                  <p className="text-lg font-bold text-slate-900">support@novusdv.com</p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mr-6 group-hover:scale-110 transition-all shadow-lg shadow-blue-500/20">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Global HQ</p>
                  <p className="text-lg font-bold text-slate-900">Remote Global Infrastructure</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border-2 border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-[80px]"></div>
            <form className="space-y-8 relative z-10" onSubmit={(e) => { e.preventDefault(); alert('Assessment inquiry logged. Our team will respond through secure channels.'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-3">Operator Identity</label>
                  <input type="text" className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-semibold" placeholder="Full Name" required />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-3">Corporate Email</label>
                  <input type="email" className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-semibold" placeholder="Work @ Domain" required />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-3">Presence Identifier (URL)</label>
                <input type="text" className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-semibold" placeholder="https://yourbrand.com" required />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-3">Infrastructure Budget</label>
                <select className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-semibold appearance-none">
                  <option className="bg-white">$100 - $500 / Plan</option>
                  <option className="bg-white">$500 - $2,000 / Plan</option>
                  <option className="bg-white">$2,000+ / Plan</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-3">System Gaps</label>
                <textarea rows={4} className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-semibold resize-none" placeholder="Describe current architectural gaps..."></textarea>
              </div>
              <button type="submit" className="w-full py-6 btn-primary rounded-2xl font-bold uppercase tracking-[0.2em] shadow-xl">
                Initiate Assessment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
