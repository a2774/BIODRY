import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import { caseStudies } from '@/data/caseStudies'
import { staggerContainer, fadeInUp } from '@/utils/animations'

const typeColors: Record<string, string> = {
  historic: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  residential: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  commercial: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  industrial: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
}

export default function CaseStudiesPreview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const featured = caseStudies.slice(0, 6)

  return (
    <section ref={ref} className="section-padding bg-dark-900 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-5">
              Biodry In Action
            </div>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-black font-display text-white mb-4">
            References &{' '}
            <span className="gradient-brand-text">Case Studies</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-2xl mx-auto">
            Biodry technology has already solved thousands of cases of rising damp in Italy and abroad.
            Discover our customer testimonials and read case studies to see how Biodry has transformed
            historic buildings, private homes and offices.
          </motion.p>
        </motion.div>

        {/* Cards Grid — 3 columns */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featured.map((study) => (
            <motion.div
              key={study.id}
              variants={fadeInUp}
              className="group rounded-2xl overflow-hidden border border-white/8 bg-dark-800 hover:border-brand-blue/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-blue/10"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-dark-700">
                {study.image ? (
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-700 to-dark-600 flex items-center justify-center">
                    <span className="text-slate-500 text-sm">No image</span>
                  </div>
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 via-transparent to-transparent" />
                {/* Type badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider backdrop-blur-sm ${typeColors[study.type]}`}>
                    {study.type}
                  </span>
                </div>
                {/* Moisture reduction */}
                <div className="absolute top-3 right-3 flex flex-col items-center bg-dark-950/80 rounded-xl px-2.5 py-1.5 backdrop-blur-sm border border-white/10">
                  <span className="text-lg font-black gradient-brand-text leading-none">{study.moistureReduction}%</span>
                  <span className="text-[10px] text-slate-400 leading-none mt-0.5">Reduction</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                  <MapPin className="w-3 h-3 text-brand-blue flex-shrink-0" />
                  <span>{study.location}</span>
                  <span>·</span>
                  <span className="font-semibold text-slate-400">{study.country}</span>
                  <span className="ml-auto text-slate-600">{study.year}</span>
                </div>
                <h3 className="text-base font-bold text-white font-display mb-2 line-clamp-2 leading-snug">
                  {study.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                  {study.description}
                </p>

                {/* Result */}
                <div className="pt-3 border-t border-white/5">
                  <div className="text-[10px] font-bold text-brand-cyan mb-1 uppercase tracking-widest">Result</div>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">{study.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mt-12"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl gradient-brand text-white font-semibold hover:opacity-90 transition-opacity glow-blue group"
          >
            Explore all case studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
