import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Shield, Award, Leaf, Clock, Globe } from 'lucide-react'
import { BENEFITS } from '@/constants/siteData'
import { staggerContainer, fadeInUp } from '@/utils/animations'

const iconMap: Record<string, React.ElementType> = { Zap, Shield, Award, Leaf, Clock, Globe }

const colorMap: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  blue: { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', glow: 'group-hover:shadow-blue-500/20' },
  cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', glow: 'group-hover:shadow-cyan-500/20' },
  indigo: { text: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', glow: 'group-hover:shadow-indigo-500/20' },
  green: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', glow: 'group-hover:shadow-emerald-500/20' },
  purple: { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', glow: 'group-hover:shadow-purple-500/20' },
  orange: { text: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20', glow: 'group-hover:shadow-orange-500/20' },
}

export default function BenefitsGrid() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-radial-blue" />

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
              Why Biodry
            </div>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-black font-display text-white mb-4">
            Definitively Rid of{' '}
            <span className="gradient-brand-text">Dampness & Mould</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-2xl mx-auto">
            With Biodry, you can finally stop rising damp and protect your spaces — whether modern homes or historic buildings — with a solution that really works.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {BENEFITS.map((benefit) => {
            const Icon = iconMap[benefit.icon] || Zap
            const colors = colorMap[benefit.color] || colorMap.blue

            return (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className={`group glass-hover rounded-2xl p-7 border border-white/6 shadow-xl transition-all duration-300 ${colors.glow}`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>

                {/* Content */}
                <div className={`text-xs font-bold uppercase tracking-widest ${colors.text} mb-1.5`}>
                  {benefit.subtitle}
                </div>
                <h3 className="text-lg font-bold text-white font-display mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
