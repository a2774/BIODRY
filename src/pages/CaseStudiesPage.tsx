import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Filter, Search, ArrowRight, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { caseStudies } from '@/data/caseStudies'
import { staggerContainer, fadeInUp } from '@/utils/animations'

const typeColors: Record<string, string> = {
  historic: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
  residential: 'bg-blue-500/15 text-blue-400 border-blue-500/20',
  commercial: 'bg-purple-500/15 text-purple-400 border-purple-500/20',
  industrial: 'bg-orange-500/15 text-orange-400 border-orange-500/20',
}

export default function CaseStudiesPage() {
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [countryFilter, setCountryFilter] = useState('all')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const countries = ['all', ...new Set(caseStudies.map(c => c.country))]
  const types = ['all', 'historic', 'residential', 'commercial', 'industrial']

  const filtered = caseStudies.filter(study => {
    const matchSearch = !search || study.title.toLowerCase().includes(search.toLowerCase()) || study.location.toLowerCase().includes(search.toLowerCase())
    const matchType = typeFilter === 'all' || study.type === typeFilter
    const matchCountry = countryFilter === 'all' || study.country === countryFilter
    return matchSearch && matchType && matchCountry
  })

  return (
    <div className="bg-dark-950 min-h-screen">
      {/* Hero */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6">
            Proven Results
          </div>
          <h1 className="text-5xl lg:text-6xl font-black font-display text-white mb-6">
            Case Studies & <span className="gradient-brand-text">References</span>
          </h1>
          <p className="text-xl text-slate-400">
            Real results from real buildings across {new Set(caseStudies.map(c => c.country)).size} countries.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-dark-900 border-y border-white/5 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search cases..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-slate-200 text-sm placeholder-slate-500 focus:border-brand-blue focus:outline-none"
              />
            </div>

            {/* Type filter */}
            <div className="flex gap-2 flex-wrap">
              {types.map(type => (
                <button
                  key={type}
                  onClick={() => setTypeFilter(type)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                    typeFilter === type ? 'gradient-brand text-white' : 'border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Country filter */}
            <select
              value={countryFilter}
              onChange={e => setCountryFilter(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-slate-200 text-sm focus:border-brand-blue focus:outline-none"
            >
              {countries.map(c => (
                <option key={c} value={c}>{c === 'all' ? 'All Countries' : c}</option>
              ))}
            </select>
          </div>

          <div className="mt-3 text-xs text-slate-500">
            Showing {filtered.length} of {caseStudies.length} case studies
          </div>
        </div>
      </section>

      {/* Grid */}
      <section ref={ref} className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              No case studies match your filters. <button onClick={() => { setSearch(''); setTypeFilter('all'); setCountryFilter('all') }} className="text-brand-blue">Reset filters</button>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map(study => (
                <motion.div key={study.id} variants={fadeInUp} className="glass-hover rounded-2xl overflow-hidden border border-white/6">
                  {/* Header */}
                  <div className="h-44 bg-gradient-to-br from-dark-700 to-dark-800 relative p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${typeColors[study.type]} uppercase tracking-wider`}>
                        {study.type}
                      </span>
                      <span className="text-xs text-slate-400">{study.year}</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-xs text-slate-500 mb-0.5">{study.location}</div>
                        <div className="text-sm font-bold text-white">{study.country}</div>
                      </div>
                      <div className="text-right bg-dark-950/80 rounded-xl px-3 py-2 backdrop-blur-sm">
                        <div className="text-2xl font-black gradient-brand-text">{study.moistureReduction}%</div>
                        <div className="text-xs text-slate-400">Reduction</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-sm font-bold text-white font-display mb-3 line-clamp-2">{study.title}</h3>
                    <p className="text-xs text-slate-400 line-clamp-3 mb-4">{study.description}</p>

                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <div className="text-xs text-slate-500">⏱ {study.timeToComplete}</div>
                      <div className="flex gap-1.5">
                        {study.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-slate-400">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
