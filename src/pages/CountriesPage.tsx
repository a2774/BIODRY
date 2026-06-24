import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Globe, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { COUNTRIES } from '@/constants/siteData'
import { staggerContainer, fadeInUp } from '@/utils/animations'

const countryRegions: Record<string, { region: string; flag: string }> = {
  Italy: { region: 'Europe', flag: '🇮🇹' },
  Germany: { region: 'Europe', flag: '🇩🇪' },
  France: { region: 'Europe', flag: '🇫🇷' },
  Spain: { region: 'Europe', flag: '🇪🇸' },
  Switzerland: { region: 'Europe', flag: '🇨🇭' },
  Austria: { region: 'Europe', flag: '🇦🇹' },
  Poland: { region: 'Europe', flag: '🇵🇱' },
  Romania: { region: 'Europe', flag: '🇷🇴' },
  Hungary: { region: 'Europe', flag: '🇭🇺' },
  Serbia: { region: 'Europe', flag: '🇷🇸' },
  Croatia: { region: 'Europe', flag: '🇭🇷' },
  Slovakia: { region: 'Europe', flag: '🇸🇰' },
  Latvia: { region: 'Europe', flag: '🇱🇻' },
  Lithuania: { region: 'Europe', flag: '🇱🇹' },
  Netherlands: { region: 'Europe', flag: '🇳🇱' },
  Denmark: { region: 'Europe', flag: '🇩🇰' },
  Ukraine: { region: 'Europe', flag: '🇺🇦' },
  Belarus: { region: 'Europe', flag: '🇧🇾' },
  Argentina: { region: 'Americas', flag: '🇦🇷' },
  Chile: { region: 'Americas', flag: '🇨🇱' },
  Mexico: { region: 'Americas', flag: '🇲🇽' },
  Peru: { region: 'Americas', flag: '🇵🇪' },
  Ecuador: { region: 'Americas', flag: '🇪🇨' },
  Guatemala: { region: 'Americas', flag: '🇬🇹' },
  Honduras: { region: 'Americas', flag: '🇭🇳' },
  India: { region: 'Asia', flag: '🇮🇳' },
  Bangladesh: { region: 'Asia', flag: '🇧🇩' },
  'South Africa': { region: 'Africa', flag: '🇿🇦' },
}

export default function CountriesPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const regions = ['Europe', 'Americas', 'Asia', 'Africa']

  return (
    <div className="bg-dark-950 min-h-screen">
      {/* Hero */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6">
            <Globe className="w-3 h-3" />
            Global Network
          </div>
          <h1 className="text-5xl lg:text-6xl font-black font-display text-white mb-6">
            Biodry Around <span className="gradient-brand-text">the World</span>
          </h1>
          <p className="text-xl text-slate-400 mb-6">
            Certified Biodry partners and technicians available in 28+ countries across 4 continents.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { label: 'Countries', value: '28+' },
              { label: 'Continents', value: '4' },
              { label: 'Partners', value: '200+' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black gradient-brand-text">{stat.value}</div>
                <div className="text-slate-400 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries by Region */}
      <section ref={ref} className="section-padding bg-dark-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="space-y-12">
            {regions.map(region => {
              const regionCountries = Object.entries(countryRegions).filter(([, v]) => v.region === region)
              return (
                <motion.div key={region} variants={fadeInUp}>
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-xl font-bold text-white font-display">{region}</h2>
                    <div className="flex-1 h-px bg-white/5" />
                    <span className="text-sm text-slate-400">{regionCountries.length} countries</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {regionCountries.map(([country, { flag }]) => (
                      <div key={country} className="glass-hover rounded-xl p-4 border border-white/6 flex items-center gap-3">
                        <span className="text-2xl">{flag}</span>
                        <span className="text-sm font-medium text-slate-300 leading-tight">{country}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-dark-950">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-black font-display text-white mb-4">Don't see your country?</h2>
          <p className="text-slate-400 mb-8">We're constantly expanding. Contact us and we'll connect you with the nearest certified partner or arrange a direct consultation.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl gradient-brand text-white font-bold hover:opacity-90 transition-opacity glow-blue group">
            Contact Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
