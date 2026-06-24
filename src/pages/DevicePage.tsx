import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight, Droplets, Cpu, Wifi, Battery } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/utils/animations'

const specs = [
  { label: 'Coverage Area', value: 'Up to 150m²', unit: 'per device' },
  { label: 'Power Consumption', value: '< 1W', unit: 'operating power' },
  { label: 'Signal Frequency', value: 'ELF Range', unit: 'extremely low frequency' },
  { label: 'Operating Range', value: '24/7', unit: 'continuous operation' },
  { label: 'Certification', value: 'CE + TÜV', unit: 'safety certified' },
  { label: 'Warranty', value: '5 Years', unit: 'hardware warranty' },
]

export default function DevicePage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="bg-dark-950 min-h-screen">
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6"><Cpu className="w-3 h-3" />Device Technology</div>
          <h1 className="text-5xl lg:text-6xl font-black font-display text-white mb-6">The Biodry <span className="gradient-brand-text">Device & Probes</span></h1>
          <p className="text-xl text-slate-400">Precision-engineered electromagnetic technology in a compact, low-power device.</p>
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Device Visual */}
            <motion.div variants={fadeInUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-dark-700 to-dark-800 border border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 gradient-radial-blue" />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-32 h-32 rounded-3xl gradient-brand flex items-center justify-center glow-blue">
                    <Droplets className="w-16 h-16 text-white" strokeWidth={1.5} />
                  </div>
                  <span className="text-xl font-black font-display text-white">Biodry Device</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm text-green-400 font-medium">Active</span>
                  </div>
                  {/* Signal rings */}
                  {[1, 2, 3].map(i => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full border border-brand-blue/20"
                      style={{ width: 80 + i * 60, height: 80 + i * 60 }}
                      animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.1, 1] }}
                      transition={{ duration: 2.5, delay: i * 0.6, repeat: Infinity }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Specs */}
            <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-black font-display text-white mb-6">Technical Specifications</h2>
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                {specs.map(spec => (
                  <motion.div key={spec.label} variants={fadeInUp} className="glass rounded-2xl p-5 border border-white/6">
                    <div className="text-xl font-black gradient-brand-text mb-1">{spec.value}</div>
                    <div className="text-sm font-semibold text-white mb-0.5">{spec.label}</div>
                    <div className="text-xs text-slate-500">{spec.unit}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl gradient-brand text-white font-bold hover:opacity-90 transition-opacity glow-blue group">
              Request Technical Information
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
