import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Scan, Radio, Wind, CheckCircle } from 'lucide-react'
import { PROCESS_STEPS } from '@/constants/siteData'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '@/utils/animations'

const iconMap: Record<string, React.ElementType> = { Scan, Radio, Wind, CheckCircle }

const stepColors = [
  { accent: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', line: 'bg-blue-500' },
  { accent: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', line: 'bg-cyan-500' },
  { accent: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', line: 'bg-indigo-500' },
  { accent: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20', line: 'bg-green-500' },
]

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-padding bg-dark-950 relative overflow-hidden">
      {/* Gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6">
              How It Works
            </div>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-black font-display text-white mb-4">
            The Biodry <span className="gradient-brand-text">4-Step Process</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-2xl mx-auto">
            A revolutionary solution that tackles the root cause of rising damp using natural physical principles.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px bg-white/5 mx-16" />
          <motion.div
            className="hidden lg:block absolute top-20 left-16 h-px bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500"
            initial={{ width: 0 }}
            animate={inView ? { width: 'calc(100% - 8rem)' } : { width: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 lg:grid-cols-4 gap-6"
          >
            {PROCESS_STEPS.map((step, index) => {
              const Icon = iconMap[step.icon] || CheckCircle
              const colors = stepColors[index]
              const isActive = activeStep === index

              return (
                <motion.div
                  key={step.step}
                  variants={fadeInUp}
                  onClick={() => setActiveStep(index)}
                  className={`relative cursor-pointer rounded-2xl p-6 border transition-all duration-300 ${
                    isActive
                      ? `${colors.bg} ${colors.border} shadow-lg scale-[1.02]`
                      : 'bg-dark-800/40 border-white/5 hover:border-white/10'
                  }`}
                >
                  {/* Step number bubble */}
                  <div className={`w-12 h-12 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-5`}>
                    <Icon className={`w-6 h-6 ${colors.accent}`} />
                  </div>

                  {/* Step label */}
                  <div className={`text-xs font-bold uppercase tracking-widest ${colors.accent} mb-2`}>
                    Step {step.step}
                  </div>

                  <h3 className="text-lg font-bold text-white font-display mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeStep"
                      className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full ${colors.line}`}
                    />
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
