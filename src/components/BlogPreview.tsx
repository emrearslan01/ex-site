import React from 'react';
import { blogPosts } from '../content/blogPosts';
import { Page } from '../App';

interface BlogPreviewProps {
  onNavigate: (page: Page) => void;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

export const BlogPreview: React.FC<BlogPreviewProps> = ({ onNavigate }) => {
  const posts = blogPosts.slice(0, 3);

  return (
    <section id="resources" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs text-blue-600 font-bold tracking-[0.35em] uppercase mb-3">Resources</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Latest insights</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Short, practical notes on strategy, content systems, and measurement.
            </p>
          </div>
          <button
            onClick={() => onNavigate('blog')}
            className="px-5 py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-blue-300 hover:text-blue-700 transition-all"
          >
            View all posts
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
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
                <h3 className="mt-4 text-lg font-black text-slate-900 leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{p.excerpt}</p>
                <button
                  onClick={() => onNavigate('blog')}
                  className="mt-5 text-sm font-bold text-blue-700 hover:text-blue-800 transition-colors"
                >
                  Read more →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

