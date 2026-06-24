import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, Clock, User, Tag } from 'lucide-react'
import { blogPosts, blogCategories } from '@/data/blog'
import { staggerContainer, fadeInUp } from '@/utils/animations'

const categoryColors: Record<string, string> = {
  Technology: 'bg-blue-500/15 text-blue-400',
  'Case Studies': 'bg-purple-500/15 text-purple-400',
  'Tips & Guides': 'bg-green-500/15 text-green-400',
  Research: 'bg-indigo-500/15 text-indigo-400',
  News: 'bg-orange-500/15 text-orange-400',
}

export default function BlogPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const filtered = blogPosts.filter(post => {
    const matchSearch = !search || post.title.toLowerCase().includes(search.toLowerCase())
    const matchCat = category === 'All' || post.category === category
    return matchSearch && matchCat
  })

  const featured = blogPosts.filter(p => p.featured)
  const regular = filtered.filter(p => !p.featured || category !== 'All' || search)

  return (
    <div className="bg-dark-950 min-h-screen">
      {/* Hero */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6">
            Resources
          </div>
          <h1 className="text-5xl lg:text-6xl font-black font-display text-white mb-6">
            Blog & <span className="gradient-brand-text">Resources</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10">
            Expert insights on rising damp, moisture science, and property preservation.
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-dark-800 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-brand-blue focus:outline-none text-sm"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="py-4 bg-dark-900 border-y border-white/5 sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-6 flex gap-2 overflow-x-auto pb-1">
          {blogCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                category === cat ? 'gradient-brand text-white' : 'border border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured (shown when no filter) */}
      {!search && category === 'All' && (
        <section className="pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {featured.map((post, i) => (
                <div key={post.id} className={`glass-hover rounded-2xl overflow-hidden border border-white/6 ${i === 0 ? 'md:col-span-2' : ''}`}>
                  <div className={`${i === 0 ? 'h-52' : 'h-36'} bg-gradient-to-br from-dark-700 to-dark-800 relative flex items-end p-4`}>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[post.category] || 'bg-white/10 text-slate-300'}`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white font-display mb-2 line-clamp-2 text-sm">{post.title}</h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mb-3">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All posts */}
      <section ref={ref} className="py-8 section-padding pt-4">
        <div className="max-w-7xl mx-auto px-6">
          {!search && category === 'All' && <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">All Articles</h2>}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {(search || category !== 'All' ? filtered : regular).map(post => (
              <motion.div key={post.id} variants={fadeInUp} className="glass-hover rounded-2xl overflow-hidden border border-white/6">
                <div className="h-36 bg-gradient-to-br from-dark-700 to-dark-800 relative flex items-end p-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[post.category] || 'bg-white/10 text-slate-300'}`}>
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white font-display mb-2 line-clamp-2 text-sm">{post.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-white/5">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-500">No articles match your search.</div>
          )}
        </div>
      </section>
    </div>
  )
}
