import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Award, CheckCircle } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/utils/animations'

const certs = [
  {
    abbr: 'CE',
    name: 'CE Certified',
    desc: 'European Conformity — mandatory for electromagnetic devices sold in the EU',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    abbr: 'TÜV',
    name: 'TÜV Approved',
    desc: 'German Technical Inspection Association — independent safety verification',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    abbr: 'UNI',
    name: 'UNI Standard',
    desc: 'Italian National Standards — measurement protocol for moisture verification',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  {
    abbr: 'ISO',
    name: 'ISO 9001',
    desc: 'International Quality Management System — consistent, reliable processes',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
]

export default function CertificationsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="py-16 bg-dark-800/30 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial-blue opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-4">
              <Shield className="w-3 h-3" />
              Certifications & Standards
            </div>
            <h2 className="text-3xl font-black font-display text-white">
              Trusted by International Standards Bodies
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {certs.map((cert) => (
              <motion.div
                key={cert.abbr}
                variants={fadeInUp}
                className={`glass-hover rounded-2xl p-6 border ${cert.border} text-center`}
              >
                <div className={`text-4xl font-black font-display ${cert.color} mb-3`}>
                  {cert.abbr}
                </div>
                <div className="text-sm font-bold text-white mb-2">{cert.name}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
