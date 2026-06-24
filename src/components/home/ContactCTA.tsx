import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail, Clock, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/constants/siteData'
import { staggerContainer, fadeInUp } from '@/utils/animations'

export default function ContactCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="section-padding relative overflow-hidden bg-dark-900">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-600/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tl from-indigo-600/5 via-transparent to-transparent" />

      {/* Animated border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6">
                Get Started Today
              </div>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-black font-display text-white mb-6 leading-tight">
              Stop Rising Damp{' '}
              <span className="gradient-brand-text">Before It Gets Worse</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-slate-400 leading-relaxed mb-8">
              Our certified technicians offer a free, no-obligation moisture assessment. We'll diagnose the problem, explain the solution, and give you a transparent quote.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4">
              {[
                { icon: Clock, text: 'Free inspection within 48 hours' },
                { icon: MapPin, text: 'Certified technicians in your country' },
                { icon: Phone, text: 'No commitment, transparent pricing' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-brand-blue" />
                  </div>
                  {text}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Contact card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="glass rounded-3xl p-8 border border-brand-blue/20 shadow-2xl shadow-blue-500/10">
              <h3 className="text-xl font-bold text-white font-display mb-6">
                Contact Us
              </h3>

              <div className="space-y-4 mb-8">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/3 border border-white/5 hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Call us directly</div>
                    <div className="font-semibold text-white group-hover:text-brand-blue transition-colors">
                      {SITE_CONFIG.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/3 border border-white/5 hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Email us</div>
                    <div className="font-semibold text-white group-hover:text-brand-blue transition-colors">
                      {SITE_CONFIG.email}
                    </div>
                  </div>
                </a>
              </div>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl gradient-brand text-white font-bold hover:opacity-90 transition-opacity glow-blue group"
              >
                Request Free Inspection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <p className="text-center text-xs text-slate-500 mt-4">
                No commitment required · 100% confidential
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
