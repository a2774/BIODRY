import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import BeforeAfterSlider from '@/components/home/BeforeAfterSlider'
import { fadeInUp, staggerContainer } from '@/utils/animations'

const problems = [
  { title: 'Capillary Rising Damp', desc: 'Water from the ground rises through wall materials via capillary action — the most common form of structural dampness.', solution: 'Biodry eliminates the electromagnetic disturbance that drives capillary action, permanently stopping the rise.' },
  { title: 'Salt Efflorescence', desc: 'As water evaporates from walls, dissolved salts crystallise on surfaces — the white, powdery deposits you see.', solution: 'Once rising damp is eliminated, no more salts are drawn up. Existing deposits can be cleaned.' },
  { title: 'Mould & Fungal Growth', desc: 'Persistent moisture creates ideal conditions for mould growth, causing health problems and damaging finishes.', solution: 'With walls dry, mould cannot survive. Biodry removes the root cause rather than treating symptoms.' },
]

export default function SolutionsPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="bg-dark-950 min-h-screen">
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6">Solutions</div>
          <h1 className="text-5xl lg:text-6xl font-black font-display text-white mb-6">Rising Damp <span className="gradient-brand-text">Solutions</span></h1>
          <p className="text-xl text-slate-400">Understanding the problem is the first step. Here's how Biodry solves each aspect of rising damp.</p>
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="space-y-6">
            {problems.map((p, i) => (
              <motion.div key={p.title} variants={fadeInUp} className="glass rounded-3xl p-8 border border-white/6 grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-black text-brand-blue/20 font-display mb-3">0{i + 1}</div>
                  <h2 className="text-2xl font-black font-display text-white mb-3">{p.title}</h2>
                  <p className="text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
                <div className="border-l border-white/5 pl-8">
                  <div className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-3">Biodry Solution</div>
                  <p className="text-slate-300 leading-relaxed">{p.solution}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <BeforeAfterSlider />
    </div>
  )
}
