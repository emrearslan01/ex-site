import React from 'react';
import { blogPosts } from '../../content/blogPosts';
import { Page } from '../../App';

interface BlogViewProps {
  onNavigate: (page: Page) => void;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

const BlogView: React.FC<BlogViewProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-b from-blue-50 to-white pt-32 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-blue-600 font-bold tracking-[0.35em] uppercase mb-3">Resources</p>
          <h1 className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">
            Blog
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl">
            Practical insights for building sustainable growth systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {['All', 'Strategy', 'Content', 'Analytics'].map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-200 bg-white text-slate-700"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((p) => (
            <article
              key={p.slug}
              className="group overflow-hidden rounded-2xl border-2 border-slate-200 bg-white hover:border-blue-300 hover:shadow-xl transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={p.coverImageUrl}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                    {p.category}
                  </span>
                  <span>{formatDate(p.date)}</span>
                  <span>•</span>
                  <span>{p.readTimeMinutes} min</span>
                </div>
                <h2 className="mt-4 text-lg font-black text-slate-900 leading-snug">{p.title}</h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{p.excerpt}</p>
                <div className="mt-5">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-sm font-bold text-blue-700 hover:text-blue-800 transition-colors"
                  >
                    Talk to us →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 p-10 text-white shadow-2xl">
          <h3 className="text-3xl font-black">Want a tailored plan?</h3>
          <p className="mt-3 text-blue-100 max-w-2xl">
            Tell us your goals and we’ll map the next steps for your channels, content, and measurement.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-4 rounded-2xl bg-white text-blue-700 font-bold uppercase tracking-widest hover:bg-blue-50 transition-all"
            >
              Get Started
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="px-6 py-4 rounded-2xl border-2 border-white/40 font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              Back to Home
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogView;

