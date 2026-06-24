import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useRef, useCallback } from 'react'
import { ArrowLeftRight } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/utils/animations'

import beforeImg from '@/assets/image/Foto-scaled.jpg'
import afterImg from '@/assets/image/Foto1-scaled.png'

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setSliderPos((x / rect.width) * 100)
  }, [])

  const handleMouseDown = () => { isDragging.current = true }
  const handleMouseUp = () => { isDragging.current = false }
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) handleMove(e.clientX)
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <section ref={ref} className="section-padding bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial-blue opacity-40" />

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
              Real Results
            </div>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-black font-display text-white mb-4">
            See the <span className="gradient-brand-text">Transformation</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-2xl mx-auto">
            Drag the slider to compare a wall before and after Biodry treatment. The difference is remarkable.
          </motion.p>
        </motion.div>

        {/* Slider */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative rounded-2xl overflow-hidden aspect-video cursor-ew-resize select-none border border-white/10 shadow-2xl shadow-black/50"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {/* AFTER image — base layer */}
            <div className="absolute inset-0">
              <img
                src={afterImg}
                alt="After Biodry treatment — dry wall"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-5 right-5 flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-bold text-green-300">AFTER — Fully Restored & Dry</span>
              </div>
            </div>

            {/* BEFORE image — clipped left layer */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src={beforeImg}
                alt="Before Biodry treatment — damp wall"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/30 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span className="text-sm font-bold text-red-300">BEFORE — Rising Damp</span>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg shadow-white/20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-auto cursor-ew-resize">
                <ArrowLeftRight className="w-4 h-4 text-dark-950" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-4">
            Drag the handle left and right to compare • Average drying time: 12–18 months
          </p>
        </motion.div>
      </div>
    </section>
  )
}
