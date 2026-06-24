'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail, Droplets } from 'lucide-react'
import { navItems } from '@/constants/navigation'
import { SITE_CONFIG } from '@/constants/siteData'
import { cn } from '@/utils/helpers'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [location])

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-dark-900 border-b border-white/5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <span>Biodry® — Patented Technology for Rising Damp Elimination</span>
          <div className="flex items-center gap-6">
            <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-1.5 hover:text-brand-blue transition-colors">
              <Phone className="w-3 h-3" />
              {SITE_CONFIG.phone}
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-1.5 hover:text-brand-blue transition-colors">
              <Mail className="w-3 h-3" />
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'bg-dark-950/90 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/20'
            : 'bg-dark-950/60 backdrop-blur-md border-b border-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center glow-blue">
                <Droplets className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white font-display">
                  bio<span className="gradient-brand-text">dry</span>
                </span>
                <span className="hidden sm:block text-[9px] text-slate-500 font-medium tracking-widest uppercase -mt-0.5">
                  Rising Damp Technology
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      'flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                      location.pathname === item.href
                        ? 'text-brand-blue bg-brand-blue/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 transition-transform duration-200',
                          activeDropdown === item.label ? 'rotate-180' : ''
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute top-full left-0 pt-2 w-52"
                    >
                      <div className="glass rounded-xl p-1.5 border border-white/10 shadow-xl shadow-black/40">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/60" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg gradient-brand text-white text-sm font-semibold hover:opacity-90 transition-opacity glow-blue"
              >
                Free Inspection
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-white/5 bg-dark-950"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-white/5">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg gradient-brand text-white text-sm font-semibold"
                >
                  Request Free Inspection
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  )
}
