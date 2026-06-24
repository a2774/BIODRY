import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Scan, Radio, Wind, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PROCESS_STEPS } from '@/constants/siteData'
import { staggerContainer, fadeInUp } from '@/utils/animations'

const iconMap: Record<string, React.ElementType> = { Scan, Radio, Wind, CheckCircle }
const stepColors = [
  { accent: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', glow: 'shadow-blue-500/20' },
  { accent: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', glow: 'shadow-cyan-500/20' },
  { accent: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', glow: 'shadow-indigo-500/20' },
  { accent: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20', glow: 'shadow-green-500/20' },
]

const timeline = [
  { month: '0', event: 'Biodry device installed', type: 'installation' },
  { month: '1-3', event: 'Electromagnetic field neutralised, capillary rise stops', type: 'action' },
  { month: '3-6', event: 'Measurable moisture reduction begins (30-50%)', type: 'progress' },
  { month: '6-12', event: 'Significant drying visible, salt efflorescence reduces', type: 'progress' },
  { month: '12-18', event: 'Walls approach dry standard (<5% moisture)', type: 'progress' },
  { month: '18-24', event: 'Full certification achieved, restoration can begin', type: 'complete' },
]

export default function HowItWorksPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="bg-dark-950">
      {/* Hero */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6">
            The Process
          </div>
          <h1 className="text-5xl lg:text-7xl font-black font-display text-white mb-6">
            How <span className="gradient-brand-text">Biodry Works</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            A four-step process that addresses the root cause of rising damp — permanently.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6" ref={ref}>
            {PROCESS_STEPS.map((step, index) => {
              const Icon = iconMap[step.icon] || CheckCircle
              const colors = stepColors[index]
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex flex-col md:flex-row gap-8 items-center glass rounded-3xl p-8 border ${colors.border} shadow-lg ${colors.glow}`}
                >
                  <div className={`flex-shrink-0 w-20 h-20 rounded-3xl ${colors.bg} ${colors.border} border flex flex-col items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${colors.accent} mb-1`} />
                    <span className={`text-xs font-black ${colors.accent}`}>{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className={`text-xs font-bold uppercase tracking-widest ${colors.accent} mb-2`}>Step {step.step}</div>
                    <h2 className="text-2xl font-black font-display text-white mb-3">{step.title}</h2>
                    <p className="text-slate-400 leading-relaxed text-lg">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-dark-900">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black font-display text-white mb-3">
              Treatment <span className="gradient-brand-text">Timeline</span>
            </h2>
            <p className="text-slate-400">What to expect month by month after Biodry installation.</p>
          </div>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-24 text-right flex-shrink-0">
                    <span className="text-xs font-bold text-brand-blue">Month {item.month}</span>
                  </div>
                  <div className="relative flex-shrink-0 mt-1">
                    <div className={`w-3 h-3 rounded-full border-2 ${item.type === 'complete' ? 'bg-green-400 border-green-400' : item.type === 'installation' ? 'bg-brand-blue border-brand-blue' : 'bg-dark-900 border-brand-blue/40'}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-300 pt-0.5">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-dark-950">
        <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl gradient-brand text-white font-bold hover:opacity-90 transition-opacity glow-blue group">
          Request a Free Inspection
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </div>
  )
}
