export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readTimeMinutes: number;
  coverImageUrl: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'authority-signals-that-compound',
    title: 'Authority Signals That Compound (Without Risky Shortcuts)',
    excerpt:
      'A practical breakdown of profile integrity, consistency, and content systems that improve trust and performance over time.',
    category: 'Strategy',
    date: '2026-01-10',
    readTimeMinutes: 6,
    coverImageUrl:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1400',
  },
  {
    slug: 'content-ops-for-consistent-output',
    title: 'Content Ops: A Lightweight System for Consistent Output',
    excerpt:
      'How to ship weekly content with a simple pipeline: briefs, templates, review loops, and measurement.',
    category: 'Content',
    date: '2026-01-14',
    readTimeMinutes: 5,
    coverImageUrl:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1400',
  },
  {
    slug: 'analytics-that-matter',
    title: 'Analytics That Matter: What to Track (and What to Ignore)',
    excerpt:
      'A clear, executive-friendly set of metrics you can use to evaluate growth without vanity noise.',
    category: 'Analytics',
    date: '2026-01-18',
    readTimeMinutes: 7,
    coverImageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400',
  },
];

