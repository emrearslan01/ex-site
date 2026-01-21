import React, { useState } from 'react';
import { generateSocialAudit } from '../services/geminiService';

const AuditTool: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await generateSocialAudit(niche, status);
      setResult(data);
    } catch (err) {
      alert("System overload. Please re-attempt audit sequence in 60 seconds.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {!result ? (
        <div className="bg-[#0a0a0a] p-10 md:p-16 rounded-[3rem] shadow-2xl border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]"></div>
          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Core Industry</label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:ring-2 focus:ring-slate-400/50 transition-all placeholder:text-slate-600 font-bold"
                  placeholder="e.g. Fintech, Fashion Elite"
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Market Reach</label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:ring-2 focus:ring-slate-400/50 transition-all placeholder:text-slate-600 font-bold"
                  placeholder="e.g. Global High-Net-Worth"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">System Status Description</label>
              <textarea
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all placeholder:text-slate-600 font-bold resize-none"
                placeholder="Briefly explain current authority bottlenecks..."
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full group relative flex justify-center py-6 px-10 rounded-2xl text-lg font-black uppercase tracking-[0.2em] text-[#0a0a0a] bg-white hover:bg-slate-100 transition-all shadow-xl shadow-white/10 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-4 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Initializing Sequence...
                </span>
              ) : (
                <>
                  Generate Authority Report
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-[#0a0a0a] p-10 md:p-16 rounded-[3rem] shadow-2xl border border-white/5 animate-fade-in relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px]"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-10 mb-10 relative z-10">
            <div>
              <h3 className="text-4xl font-black text-white tracking-tighter uppercase">Authority Protocol</h3>
              <p className="text-slate-500 font-bold mt-2 uppercase tracking-widest text-sm">SystemID: VNTG-{Math.floor(Math.random() * 90000 + 10000)}</p>
            </div>
            <div className="mt-8 md:mt-0 glass px-10 py-6 rounded-3xl text-center border-slate-400/20">
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-2">Integrity Score</p>
              <p className="text-6xl font-black text-white">{result.score}<span className="text-2xl text-slate-400/50">.0</span></p>
            </div>
          </div>
          
          <div className="bg-white/5 p-8 rounded-[2rem] mb-10 border border-white/5 relative z-10">
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Strategic Assessment</h4>
            <p className="text-xl text-slate-200 leading-relaxed font-semibold italic">"{result.executiveSummary}"</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5">
              <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-8 flex items-center">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                Growth Pillars
              </h4>
              <ul className="space-y-5">
                {result.pillars.map((p: string, i: number) => (
                  <li key={i} className="flex items-start text-slate-300 font-bold text-sm">
                    <span className="text-slate-400 mr-4 font-black">/</span> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5">
              <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-8 flex items-center">
                <span className="w-2 h-2 bg-slate-500 rounded-full mr-3"></span>
                Action Roadmap
              </h4>
              <ul className="space-y-5">
                {result.recommendations.map((r: string, i: number) => (
                  <li key={i} className="flex items-start text-slate-300 font-bold text-sm">
                    <span className="text-slate-400 mr-4 font-black">→</span> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col md:flex-row gap-6 relative z-10">
            <button className="flex-1 bg-white text-[#0a0a0a] py-6 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-white/10 hover:bg-slate-100 transition-all">Download Full Strategy</button>
            <button
              onClick={() => setResult(null)}
              className="flex-1 text-slate-500 text-[10px] hover:text-white font-black uppercase tracking-[0.3em] transition-all"
            >
              Reset Sequence
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuditTool;
