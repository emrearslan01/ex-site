import React from 'react';

const ContactView: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-slate-400 font-black tracking-[0.4em] uppercase text-xs">Architectural Access</span>
            <h1 className="text-6xl font-black text-white mt-6 mb-10 leading-[0.9] uppercase tracking-tighter">Connect with<br/>the Engineers.</h1>
            <p className="text-xl text-slate-400 mb-14 leading-relaxed font-medium">
              NovusDV operates specialized high-capacity systems. We selectively partner with brands where our infrastructure protocols can achieve high-trust market alignment. Submit your profile for evaluation.
            </p>

            <div className="space-y-10">
              <div className="flex items-center group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-slate-300 mr-6 group-hover:bg-slate-600 group-hover:text-white transition-all">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Infrastructure Support</p>
                  <p className="text-lg font-bold text-white">protocols@novusdv.com</p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-slate-300 mr-6 group-hover:bg-slate-600 group-hover:text-white transition-all">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Global HQ</p>
                  <p className="text-lg font-bold text-white">Remote Global Infrastructure</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0a] p-12 md:p-16 rounded-[4rem] shadow-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]"></div>
            <form className="space-y-8 relative z-10" onSubmit={(e) => { e.preventDefault(); alert('Assessment inquiry logged. Our team will respond through secure channels.'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Operator Identity</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:ring-2 focus:ring-slate-400/50 font-bold" placeholder="Full Name" required />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Corporate Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:ring-2 focus:ring-slate-400/50 font-bold" placeholder="Work @ Domain" required />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Presence Identifier (URL)</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:ring-2 focus:ring-slate-400/50 font-bold" placeholder="https://yourbrand.com" required />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Infrastructure Budget</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:ring-2 focus:ring-slate-400/50 font-bold appearance-none">
                  <option className="bg-[#0a0a0a]">$100 - $500 / Plan</option>
                  <option className="bg-[#0a0a0a]">$500 - $2,000 / Plan</option>
                  <option className="bg-[#0a0a0a]">$2,000+ / Plan</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">System Gaps</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:ring-2 focus:ring-slate-400/50 font-bold resize-none" placeholder="Describe current architectural gaps..."></textarea>
              </div>
              <button type="submit" className="w-full py-6 bg-white text-[#0a0a0a] rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-white/10 hover:bg-slate-100 transition-all">
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
