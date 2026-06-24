import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Radio, Waves, ShieldCheck, BarChart3, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '@/utils/animations'

export default function TechnologyPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [sciRef, sciInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [compRef, compInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const sciencePoints = [
    {
      icon: Waves,
      title: 'The Electromagnetic Disturbance',
      description: 'Rising damp is not merely a matter of hydrostatic pressure. Scientific research has identified that anomalous electromagnetic fields in the ground disturb the natural charge balance in wall materials, artificially drawing water upward through capillaries at rates far exceeding what gravity alone would produce.',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
    },
    {
      icon: Radio,
      title: 'Counter-Phase Neutralisation',
      description: 'Biodry exploits the same physics used in noise-cancelling technology. The device precisely measures the disturbing electromagnetic field and emits a counter-signal — an exact mirror wave — that neutralises the disturbance. When the disturbing field is eliminated, capillary action returns to its natural equilibrium.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
    },
    {
      icon: BarChart3,
      title: 'Gravity-Driven Natural Drying',
      description: 'Once the upward electromagnetic drive is removed, gravity reasserts itself. Residual moisture gradually descends through the capillary network. This is a natural, chemical-free process that takes 12–24 months depending on wall thickness and initial saturation — verified by UNI-standard moisture measurements.',
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/20',
    },
  ]

  const traditional = [
    { label: 'Requires Drilling', traditional: true, biodry: false },
    { label: 'Chemical Injection', traditional: true, biodry: false },
    { label: 'Structural Disruption', traditional: true, biodry: false },
    { label: 'Permanent Result', traditional: false, biodry: true },
    { label: 'Non-Invasive', traditional: false, biodry: true },
    { label: 'Works on All Materials', traditional: false, biodry: true },
    { label: 'CE & TUV Certified', traditional: false, biodry: true },
    { label: 'Eco-Friendly', traditional: false, biodry: true },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-dark-950">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[100px]" />
        </div>
        <motion.div
          ref={heroRef}
          variants={staggerContainer}
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center section-padding"
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6">
              <Zap className="w-3 h-3" />
              The Science
            </div>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-black font-display text-white mb-6">
            The Technology <span className="gradient-brand-text">Behind Biodry</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Patented electromagnetic counter-phase technology that eliminates the root cause of rising damp — not just the symptoms.
          </motion.p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-950 to-transparent" />
      </section>

      {/* Science Section */}
      <section className="section-padding bg-dark-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            ref={sciRef}
            variants={staggerContainer}
            initial="hidden"
            animate={sciInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {sciencePoints.map((point, i) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={point.title}
                  variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                  className={`glass rounded-3xl p-8 border ${point.border} flex flex-col md:flex-row gap-8 items-start`}
                >
                  <div className={`w-16 h-16 rounded-2xl ${point.bg} ${point.border} border flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-8 h-8 ${point.color}`} />
                  </div>
                  <div>
                    <h2 className={`text-xl font-bold font-display text-white mb-3`}>{point.title}</h2>
                    <p className="text-slate-400 leading-relaxed text-lg">{point.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-dark-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            ref={compRef}
            variants={staggerContainer}
            initial="hidden"
            animate={compInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-black font-display text-white mb-4">
                Biodry vs. <span className="text-slate-400">Traditional Methods</span>
              </h2>
              <p className="text-slate-400 text-lg">See why thousands of property owners choose Biodry over invasive alternatives.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass rounded-3xl overflow-hidden border border-white/8">
              <div className="grid grid-cols-3 text-xs font-bold uppercase tracking-widest">
                <div className="p-4 text-slate-400">Feature</div>
                <div className="p-4 text-center text-slate-500 bg-white/2">Traditional</div>
                <div className="p-4 text-center text-brand-blue bg-brand-blue/5">Biodry</div>
              </div>
              {traditional.map((row, i) => (
                <div key={row.label} className={`grid grid-cols-3 border-t border-white/5 ${i % 2 === 0 ? '' : 'bg-white/1'}`}>
                  <div className="p-4 text-sm text-slate-300">{row.label}</div>
                  <div className="p-4 text-center">
                    {row.traditional
                      ? <span className="text-red-400 text-lg">✗</span>
                      : <span className="text-green-400 text-lg">✓</span>}
                  </div>
                  <div className="p-4 text-center bg-brand-blue/3">
                    {row.biodry
                      ? <span className="text-green-400 text-lg">✓</span>
                      : <span className="text-red-400 text-lg">✗</span>}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-950 text-center">
        <Link to="/how-it-works" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl gradient-brand text-white font-bold hover:opacity-90 transition-opacity glow-blue group">
          See the Full Process
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </div>
  )
}
