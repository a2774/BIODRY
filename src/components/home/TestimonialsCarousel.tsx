import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { testimonials } from '@/data/testimonials'
import { staggerContainer, fadeInUp } from '@/utils/animations'

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ]

  return (
    <section ref={ref} className="section-padding bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial-blue opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6">
              Customer Stories
            </div>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-black font-display text-white mb-4">
            Real People. <span className="gradient-brand-text">Real Results.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-2xl mx-auto">
            Join 15,000+ property owners who have permanently solved their rising damp problem with Biodry.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {visible.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`glass rounded-2xl p-7 border border-white/6 transition-all duration-300 ${
                i === 1 ? 'border-brand-blue/20 shadow-lg shadow-brand-blue/10 scale-[1.02]' : 'hover:border-white/10'
              }`}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-brand-blue/30 mb-4" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{testimonial.name}</div>
                  <div className="text-xs text-slate-500">{testimonial.building}</div>
                  <div className="text-xs text-brand-blue/70">{testimonial.location}, {testimonial.country}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/10 hover:border-brand-blue/40 flex items-center justify-center text-slate-400 hover:text-white transition-all"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 bg-brand-blue' : 'w-1.5 bg-white/20'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/10 hover:border-brand-blue/40 flex items-center justify-center text-slate-400 hover:text-white transition-all"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
