import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, ChevronDown } from 'lucide-react'
import { faqs, faqCategories } from '@/data/faq'
import { staggerContainer, fadeInUp } from '@/utils/animations'

export default function FAQPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [openId, setOpenId] = useState<string | null>(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const filtered = faqs.filter(faq => {
    const matchSearch = !search ||
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
    const matchCategory = category === 'All' || faq.category === category
    return matchSearch && matchCategory
  })

  return (
    <div className="bg-dark-950 min-h-screen">
      {/* Hero */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6">
            Knowledge Base
          </div>
          <h1 className="text-5xl lg:text-6xl font-black font-display text-white mb-6">
            Frequently Asked <span className="gradient-brand-text">Questions</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10">
            Everything you need to know about Biodry, rising damp, and the treatment process.
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-dark-800 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-brand-blue focus:outline-none text-sm"
            />
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <div className="py-4 bg-dark-900 border-y border-white/5 sticky top-16 z-20">
        <div className="max-w-4xl mx-auto px-6 flex gap-2 overflow-x-auto pb-1">
          {faqCategories.map(cat => (
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

      {/* FAQ List */}
      <section ref={ref} className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              No questions match your search.
              <button onClick={() => { setSearch(''); setCategory('All') }} className="ml-2 text-brand-blue">Clear filters</button>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="space-y-3"
            >
              {filtered.map(faq => {
                const isOpen = openId === faq.id
                return (
                  <motion.div
                    key={faq.id}
                    variants={fadeInUp}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen ? 'border-brand-blue/30 bg-brand-blue/5' : 'border-white/6 bg-dark-800/30'
                    }`}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="w-full flex items-center justify-between gap-4 p-6 text-left"
                    >
                      <span className={`font-semibold leading-snug transition-colors ${isOpen ? 'text-white' : 'text-slate-200'}`}>
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-blue' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 border-t border-white/5 pt-4">
                        <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                        <span className="inline-block mt-4 text-xs px-2 py-1 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                          {faq.category}
                        </span>
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </motion.div>
          )}

          <div className="mt-12 text-center glass rounded-2xl p-8 border border-white/6">
            <h3 className="text-xl font-bold text-white font-display mb-3">Still have questions?</h3>
            <p className="text-slate-400 text-sm mb-6">Our team of certified experts is ready to help. Contact us for personalised advice.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-brand text-white font-bold hover:opacity-90 transition-opacity">
              Contact Our Experts
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
