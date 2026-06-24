import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building, Heart, Thermometer, TrendingDown, AlertTriangle } from 'lucide-react'
import { PROBLEMS } from '@/constants/siteData'
import { staggerContainer, fadeInUp, fadeInLeft } from '@/utils/animations'

const iconMap: Record<string, React.ElementType> = {
  Building,
  Heart,
  Thermometer,
  TrendingDown,
}

const severityConfig = {
  critical: { color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20', glow: 'shadow-red-500/20' },
  high: { color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20', glow: 'shadow-orange-500/20' },
  medium: { color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20', glow: 'shadow-yellow-500/20' },
}

export default function ProblemShowcase() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-padding bg-dark-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-950/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <AlertTriangle className="w-3 h-3" />
                The Problem
              </div>
              <h2 className="text-4xl lg:text-5xl font-black font-display text-white mb-6 leading-tight">
                Rising Damp is{' '}
                <span className="text-red-400">Silently Destroying</span>{' '}
                Your Building
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Every day you wait, rising damp penetrates deeper into your walls — weakening structure,
                spreading mould, and creating a health hazard for everyone inside.
                Traditional remedies mask the symptoms. They don't solve the problem.
              </p>
            </motion.div>

            {/* Problem stats */}
            <motion.div variants={fadeInUp} className="space-y-3">
              {[
                { label: 'Up to 20% property value loss', value: 20 },
                { label: 'Structural integrity reduced', value: 35 },
                { label: 'Energy efficiency lost to damp walls', value: 30 },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex-1 text-sm text-slate-300">{item.label}</div>
                  <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-red-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.value * 4}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
                    />
                  </div>
                  <div className="text-sm font-bold text-red-400 w-10 text-right">{item.value}%</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Problem Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {PROBLEMS.map((problem) => {
              const Icon = iconMap[problem.icon] || Building
              const config = severityConfig[problem.severity as keyof typeof severityConfig]
              return (
                <motion.div
                  key={problem.title}
                  variants={fadeInUp}
                  className={`glass-hover rounded-2xl p-6 border ${config.bg} shadow-lg ${config.glow}`}
                >
                  <div className={`w-10 h-10 rounded-xl ${config.bg} flex items-center justify-center mb-4 border ${config.bg}`}>
                    <Icon className={`w-5 h-5 ${config.color}`} />
                  </div>
                  <h3 className={`font-bold text-sm uppercase tracking-wider ${config.color} mb-2`}>
                    {problem.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {problem.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
