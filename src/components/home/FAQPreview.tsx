import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { faqs } from '@/data/faq'
import { staggerContainer, fadeInUp } from '@/utils/animations'

export default function FAQPreview() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const preview = faqs.slice(0, 5)

  return (
    <section ref={ref} className="section-padding bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial-blue opacity-40" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6">
              Common Questions
            </div>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-black font-display text-white mb-4">
            Everything You Need <span className="gradient-brand-text">to Know</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-400">
            Clear answers about how Biodry works, what to expect, and why it's different.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-3 mb-10"
        >
          {preview.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <motion.div
                key={faq.id}
                variants={fadeInUp}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-brand-blue/30 bg-brand-blue/5' : 'border-white/6 bg-dark-800/40'
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-sm leading-snug transition-colors ${
                    isOpen ? 'text-white' : 'text-slate-200'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-blue' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </p>
                    <div className="mt-3">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                        {faq.category}
                      </span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-cyan font-semibold transition-colors"
          >
            View all {faqs.length} frequently asked questions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
