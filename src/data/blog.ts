export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  tags: string[]
  featured?: boolean
}

export const blogCategories = ['All', 'Technology', 'Case Studies', 'Tips & Guides', 'Research', 'News']

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-001',
    title: 'The Science Behind Rising Damp: Why Capillary Action Is Misunderstood',
    excerpt: 'Most people think rising damp is simply about water seeping through foundations. The reality is far more complex — and understanding it is the key to solving it permanently.',
    category: 'Technology',
    author: 'Dr. Elena Marchetti',
    date: '2026-05-15',
    readTime: '8 min read',
    tags: ['Science', 'Capillary', 'Physics', 'Research'],
    featured: true,
  },
  {
    id: 'blog-002',
    title: '5 Warning Signs Your Building Has Rising Damp (And What To Do)',
    excerpt: 'Rising damp doesn\'t announce itself with a flood. It creeps in slowly. Here are the telltale signs to watch for and when to act.',
    category: 'Tips & Guides',
    author: 'Marco Rossi',
    date: '2026-04-28',
    readTime: '5 min read',
    tags: ['Guide', 'Warning Signs', 'Prevention'],
    featured: true,
  },
  {
    id: 'blog-003',
    title: 'How We Saved a UNESCO Heritage Church in Poland',
    excerpt: 'The 14th-century Church of St. Anne in Kraków was losing its medieval frescoes to rising damp. This is how Biodry solved it without a single hole drilled.',
    category: 'Case Studies',
    author: 'Biodry Team',
    date: '2026-04-10',
    readTime: '6 min read',
    tags: ['UNESCO', 'Heritage', 'Poland', 'Case Study'],
  },
  {
    id: 'blog-004',
    title: 'Rising Damp vs. Condensation: How to Tell the Difference',
    excerpt: 'Mistaking condensation for rising damp is a costly error. This guide walks you through the diagnostic process to identify which problem you actually have.',
    category: 'Tips & Guides',
    author: 'Sofia Bernardi',
    date: '2026-03-22',
    readTime: '7 min read',
    tags: ['Diagnosis', 'Condensation', 'Guide', 'Self-Help'],
  },
  {
    id: 'blog-005',
    title: 'New Study: Electromagnetic Fields and Capillary Moisture in Masonry',
    excerpt: 'A peer-reviewed study from the University of Bologna confirms the relationship between electromagnetic disturbances and abnormal capillary rise in stone and brick structures.',
    category: 'Research',
    author: 'Prof. Andrea Conti',
    date: '2026-03-05',
    readTime: '12 min read',
    tags: ['Research', 'Academic', 'Science', 'Validation'],
    featured: true,
  },
  {
    id: 'blog-006',
    title: 'Biodry Expands to South Asian Markets: India & Bangladesh',
    excerpt: 'The high humidity and monsoon climate in South Asia creates extreme rising damp challenges. Biodry\'s expansion into the region marks a new chapter in global moisture management.',
    category: 'News',
    author: 'Biodry Team',
    date: '2026-02-18',
    readTime: '4 min read',
    tags: ['News', 'Expansion', 'India', 'Bangladesh'],
  },
]
