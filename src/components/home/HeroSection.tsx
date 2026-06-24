import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import deviceImg from '@/assets/image/Fistimage.png'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-950">
      {/* Subtle background glows — same as the rest of the site */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left blue radial glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-brand-blue/10 blur-[140px] -translate-x-1/4 -translate-y-1/4" />
        {/* Center-right cyan glow */}
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-brand-cyan/8 blur-[120px] translate-x-1/4 -translate-y-1/2" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-dark-950 to-transparent" />
      </div>

      {/* Grid dot overlay — matches rest of site */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 items-center gap-10 py-24 lg:py-0 min-h-screen">

          {/* LEFT — Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Eyebrow badge — matches site style */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-5">
                Solve the Problem of Rising Damp
              </div>
            </motion.div>

            {/* Big heading — red text kept as it matches original site branding */}
            <motion.h1
              variants={fadeInUp}
              className="font-black font-display leading-[0.92] tracking-tight mb-3"
            >
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-red-500 uppercase">
                CAPILLARY
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-red-500 uppercase">
                RISING DAMP
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-white uppercase mt-2">
                THANKS TO BIODRY®
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeInUp}
              className="text-slate-400 text-base sm:text-lg leading-relaxed mt-6 mb-8 max-w-md"
            >
              Put your trust in Biodry, the device recognised globally for its effectiveness
              in managing the capillary rising damp. Experience the difference with technology
              that works and results that last.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/diagnosis"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-white/30 text-white font-bold text-sm hover:border-brand-blue hover:text-brand-blue transition-all"
              >
                Do the self-diagnosis
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full gradient-brand text-white font-bold text-sm hover:opacity-90 transition-opacity group glow-blue"
              >
                Get Free Inspection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-slate-400">
              {[
                'CE & TUV Certified',
                'No Drilling Required',
                '15,000+ Installations',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Device image */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg xl:max-w-xl">
              {/* Blue glow behind device — matches site theme */}
              <div className="absolute inset-0 bg-brand-blue/10 blur-[80px] rounded-full scale-75" />
              <img
                src={deviceImg}
                alt="Biodry Device — held in hand"
                className="relative z-10 w-full h-auto object-contain"
                style={{ filter: 'drop-shadow(0 20px 60px rgba(59,130,246,0.15))' }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
        />
      </motion.div>
    </section>
  )
}
