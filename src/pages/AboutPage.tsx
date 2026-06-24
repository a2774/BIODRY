import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Globe, Users, Award, Droplets, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeInUp, staggerContainer } from '@/utils/animations'

const milestones = [
  { year: '2005', event: 'Biodry technology patented in Italy by inventor Daniele Tarabini' },
  { year: '2008', event: 'CE certification obtained, commercial launch across Europe begins' },
  { year: '2012', event: 'First international expansion — Germany, France, and Switzerland' },
  { year: '2015', event: 'TÜV Rheinland certification achieved; 5,000 installations milestone' },
  { year: '2018', event: 'Latin American expansion; presence in Argentina, Chile, and Mexico' },
  { year: '2021', event: '10,000+ installations worldwide; Asia-Pacific entry with India' },
  { year: '2024', event: '28 countries, 15,000+ installations, 200+ certified partners globally' },
]

export default function AboutPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <div className="bg-dark-950 min-h-screen">
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6">Our Story</div>
          <h1 className="text-5xl lg:text-7xl font-black font-display text-white mb-6">About <span className="gradient-brand-text">Biodry</span></h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Founded on a breakthrough discovery about electromagnetic fields and capillary moisture, Biodry has spent two decades refining a technology that solves one of property's oldest problems permanently.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-dark-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-black font-display text-white mb-6">Our Mission</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                To make rising damp a solved problem for every property owner in the world — using science, not chemicals, and providing results that last a lifetime.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                We believe that sustainable, non-invasive technology is always the better path. That's why every Biodry installation is chemical-free, drill-free, and designed to work in harmony with the building's existing structure.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe, label: '28+ Countries', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
                { icon: Users, label: '15,000+ Clients', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
                { icon: Award, label: 'CE & TÜV Certified', color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
                { icon: Droplets, label: '20+ Years R&D', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
              ].map(({ icon: Icon, label, color, bg, border }) => (
                <div key={label} className={`glass-hover rounded-2xl p-6 border ${border} text-center`}>
                  <Icon className={`w-8 h-8 ${color} mx-auto mb-3`} />
                  <span className="text-sm font-bold text-white">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div ref={ref}>
            <h2 className="text-3xl font-black font-display text-white mb-10 text-center">Our Journey</h2>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-20 top-0 bottom-0 w-px bg-white/8" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-8"
                  >
                    <div className="w-16 text-right flex-shrink-0 pt-1">
                      <span className="text-xs font-bold text-brand-blue">{m.year}</span>
                    </div>
                    <div className="relative flex-shrink-0 mt-2">
                      <div className="w-3 h-3 rounded-full bg-brand-blue border-2 border-dark-950" />
                    </div>
                    <div className="flex-1 glass rounded-xl p-4 border border-white/5">
                      <p className="text-sm text-slate-300">{m.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center bg-dark-950">
        <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl gradient-brand text-white font-bold hover:opacity-90 transition-opacity glow-blue group">
          Work With Us
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </div>
  )
}
