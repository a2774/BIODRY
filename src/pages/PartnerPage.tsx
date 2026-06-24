import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Star, TrendingUp, Users, DollarSign, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeInUp, staggerContainer } from '@/utils/animations'

const benefits = [
  { icon: TrendingUp, title: 'Proven Market Demand', desc: 'Rising damp affects millions of properties worldwide. The market is large, underserved, and growing.', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { icon: Globe, title: 'Exclusive Territory', desc: 'Receive protected geographic territories with no internal competition from other Biodry partners.', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  { icon: DollarSign, title: 'Recurring Revenue', desc: 'The Biodry device generates ongoing monitoring revenue alongside initial installation fees.', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
  { icon: Users, title: 'Full Training & Support', desc: 'Comprehensive technical training, marketing materials, and ongoing support from our team.', color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
]

export default function PartnerPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="bg-dark-950 min-h-screen">
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6">Become a Partner</div>
          <h1 className="text-5xl lg:text-6xl font-black font-display text-white mb-6">
            Join the Biodry <span className="gradient-brand-text">Partner Network</span>
          </h1>
          <p className="text-xl text-slate-400">Build a profitable business solving one of the most persistent property problems in the world.</p>
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {benefits.map(({ icon: Icon, title, desc, color, bg, border }) => (
              <motion.div key={title} variants={fadeInUp} className={`glass-hover rounded-2xl p-7 border ${border}`}>
                <div className={`w-12 h-12 rounded-2xl ${bg} ${border} border flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="text-lg font-bold text-white font-display mb-2">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="glass rounded-3xl p-8 border border-brand-blue/20 text-center">
              <h2 className="text-3xl font-black font-display text-white mb-3">Ready to Join?</h2>
              <p className="text-slate-400 mb-8">Submit your application and our partnership team will be in touch within 3 business days.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl gradient-brand text-white font-bold hover:opacity-90 transition-opacity glow-blue group">
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
