import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, CheckCircle, FileText, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeInUp, staggerContainer } from '@/utils/animations'

const certs = [
  { abbr: 'CE', name: 'CE Conformity Mark', org: 'European Commission', desc: 'The CE mark certifies that Biodry meets all EU safety, health, and environmental requirements for electromagnetic devices. It allows the product to be sold freely across the European Economic Area.', scope: 'All EU member states', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { abbr: 'TÜV', name: 'TÜV Rheinland Certification', org: 'TÜV Rheinland, Germany', desc: 'TÜV Rheinland is one of the world\'s leading independent testing and certification bodies. Biodry has been independently tested and certified for electromagnetic safety and device performance.', scope: 'International recognition', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  { abbr: 'UNI', name: 'UNI Standard Compliance', org: 'Ente Italiano di Normazione', desc: 'Biodry\'s moisture measurement methodology complies with UNI (Italian National Standards) protocols for wall moisture verification. This ensures that all before/after measurements are scientifically standardised and verifiable.', scope: 'Italy (internationally recognised)', color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
]

export default function CertificationsPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="bg-dark-950 min-h-screen">
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6"><Shield className="w-3 h-3" />Certifications</div>
          <h1 className="text-5xl lg:text-6xl font-black font-display text-white mb-6">Certified <span className="gradient-brand-text">by the Best</span></h1>
          <p className="text-xl text-slate-400">Biodry's certifications are not just badges — they are independent, rigorous verifications of safety and effectiveness.</p>
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={ref} className="space-y-6">
            {certs.map(cert => (
              <motion.div
                key={cert.abbr}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className={`glass rounded-3xl p-8 border ${cert.border} grid md:grid-cols-5 gap-8 items-start`}
              >
                <div className="md:col-span-1 text-center">
                  <div className={`text-5xl font-black font-display ${cert.color} mb-2`}>{cert.abbr}</div>
                  <div className="text-xs text-slate-500">{cert.org}</div>
                </div>
                <div className="md:col-span-4 md:border-l md:border-white/5 md:pl-8">
                  <h2 className="text-xl font-bold text-white font-display mb-3">{cert.name}</h2>
                  <p className="text-slate-400 leading-relaxed mb-4">{cert.desc}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className={`w-4 h-4 ${cert.color}`} />
                    <span className="text-slate-300">Scope: {cert.scope}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center bg-dark-950">
        <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl gradient-brand text-white font-bold hover:opacity-90 transition-opacity glow-blue group">
          Request Certification Documents
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </div>
  )
}
