import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Globe2 } from 'lucide-react'
import { COUNTRIES } from '@/constants/siteData'
import { staggerContainer, fadeInUp } from '@/utils/animations'

// Country presence data with regions
const countryRegions = [
  { country: 'Italy', region: 'europe', active: true },
  { country: 'Germany', region: 'europe', active: true },
  { country: 'France', region: 'europe', active: true },
  { country: 'Spain', region: 'europe', active: true },
  { country: 'Switzerland', region: 'europe', active: true },
  { country: 'Austria', region: 'europe', active: true },
  { country: 'Poland', region: 'europe', active: true },
  { country: 'Romania', region: 'europe', active: true },
  { country: 'Netherlands', region: 'europe', active: true },
  { country: 'Denmark', region: 'europe', active: true },
  { country: 'Hungary', region: 'europe', active: true },
  { country: 'Serbia', region: 'europe', active: true },
  { country: 'Croatia', region: 'europe', active: true },
  { country: 'Slovakia', region: 'europe', active: true },
  { country: 'Latvia', region: 'europe', active: true },
  { country: 'Lithuania', region: 'europe', active: true },
  { country: 'Argentina', region: 'americas', active: true },
  { country: 'Chile', region: 'americas', active: true },
  { country: 'Mexico', region: 'americas', active: true },
  { country: 'Peru', region: 'americas', active: true },
  { country: 'Ecuador', region: 'americas', active: true },
  { country: 'Guatemala', region: 'americas', active: true },
  { country: 'Honduras', region: 'americas', active: true },
  { country: 'India', region: 'asia', active: true },
  { country: 'Bangladesh', region: 'asia', active: true },
  { country: 'Ukraine', region: 'europe', active: true },
  { country: 'Belarus', region: 'europe', active: true },
  { country: 'South Africa', region: 'africa', active: true },
]

const regionColors: Record<string, string> = {
  europe: 'bg-blue-500',
  americas: 'bg-cyan-500',
  asia: 'bg-indigo-500',
  africa: 'bg-purple-500',
}

export default function WorldMap() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const regions = [
    { name: 'Europe', key: 'europe', count: countryRegions.filter(c => c.region === 'europe').length },
    { name: 'Americas', key: 'americas', count: countryRegions.filter(c => c.region === 'americas').length },
    { name: 'Asia', key: 'asia', count: countryRegions.filter(c => c.region === 'asia').length },
    { name: 'Africa', key: 'africa', count: countryRegions.filter(c => c.region === 'africa').length },
  ]

  return (
    <section ref={ref} className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle, rgba(59,130,246,0.8) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6">
              <Globe2 className="w-3 h-3" />
              Global Presence
            </div>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-black font-display text-white mb-4">
            Biodry in <span className="gradient-brand-text">28+ Countries</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-2xl mx-auto">
            From medieval European churches to modern South American homes — Biodry's technology works across every climate zone and building type.
          </motion.p>
        </motion.div>

        {/* Region stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {regions.map(({ name, key, count }) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              className="glass rounded-2xl p-5 border border-white/6 text-center"
            >
              <div className={`inline-block w-3 h-3 rounded-full ${regionColors[key]} mb-3`} />
              <div className="text-3xl font-black font-display gradient-brand-text mb-1">{count}</div>
              <div className="text-sm font-semibold text-white">{name}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Country tags */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-2"
        >
          {countryRegions.map((item, i) => (
            <motion.div
              key={item.country}
              variants={fadeInUp}
              custom={i}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/8 bg-white/3 hover:border-brand-blue/40 hover:bg-brand-blue/10 transition-all duration-200 cursor-default"
            >
              <div className={`w-1.5 h-1.5 rounded-full ${regionColors[item.region]}`} />
              <span className="text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                {item.country}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mt-10"
        >
          <a
            href="/countries"
            className="inline-flex items-center gap-2 text-sm text-brand-blue hover:text-brand-cyan font-semibold transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Find Biodry in your country
            <span aria-hidden>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
