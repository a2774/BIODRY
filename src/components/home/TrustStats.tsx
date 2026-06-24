import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'
import { TRUST_STATS } from '@/constants/siteData'
import { staggerContainerFast, fadeInUp } from '@/utils/animations'

function useCountUp(end: number, duration: number, delay: number, active: boolean) {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!active) return
    let startTime: number | null = null
    const delayMs = delay * 1000

    const delayTimer = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (startTime === null) startTime = timestamp
        const elapsed = timestamp - startTime
        const progress = Math.min(elapsed / (duration * 1000), 1)
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(eased * end))
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate)
        }
      }
      rafRef.current = requestAnimationFrame(animate)
    }, delayMs)

    return () => {
      clearTimeout(delayTimer)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [active, end, duration, delay])

  return count
}

function AnimatedStat({ stat, index, active }: { stat: typeof TRUST_STATS[0]; index: number; active: boolean }) {
  const count = useCountUp(stat.value, 2.5, index * 0.15, active)
  return (
    <motion.div
      key={stat.label}
      variants={fadeInUp}
      className="text-center"
    >
      <div className="inline-flex items-baseline gap-0.5 mb-2">
        <span className="text-5xl lg:text-6xl font-black font-display gradient-brand-text">
          {count.toLocaleString()}
        </span>
        <span className="text-3xl font-black text-brand-cyan">{stat.suffix}</span>
      </div>
      <div className="text-base font-semibold text-white mb-1">{stat.label}</div>
      <div className="text-sm text-slate-500">{stat.description}</div>
    </motion.div>
  )
}

export default function TrustStats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="relative py-20 bg-dark-900 border-y border-white/5">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainerFast}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {TRUST_STATS.map((stat, index) => (
            <AnimatedStat key={stat.label} stat={stat} index={index} active={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
