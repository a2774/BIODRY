import { Link } from 'react-router-dom'
import { Droplets, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { SITE_CONFIG, COUNTRIES } from '@/constants/siteData'

// Inline SVG brand icons (lucide-react v1+ removed brand icons)
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#050812" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Technology: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Device & Probes', href: '/device' },
      { label: 'Certifications', href: '/certifications' },
      { label: 'Research', href: '/certifications#research' },
    ],
    Solutions: [
      { label: 'Rising Damp', href: '/solutions' },
      { label: 'Moisture Diagnosis', href: '/diagnosis' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Before & After', href: '/solutions#before-after' },
    ],
    Company: [
      { label: 'About Biodry', href: '/about' },
      { label: 'Countries', href: '/countries' },
      { label: 'Partner Program', href: '/partner' },
      { label: 'Blog', href: '/blog' },
    ],
    Support: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Request Inspection', href: '/contact#inspection' },
      { label: 'Find a Consultant', href: '/partner#consultants' },
    ],
  }

  return (
    <footer className="bg-dark-900 border-t border-white/5">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-blue-600/20 via-cyan-600/10 to-transparent border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white font-display mb-1">
              Ready to eliminate rising damp forever?
            </h3>
            <p className="text-slate-400 text-sm">
              Get a free inspection and moisture assessment from our certified technicians.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl gradient-brand text-white font-semibold whitespace-nowrap hover:opacity-90 transition-opacity glow-blue"
          >
            Book Free Inspection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-black tracking-tight text-white font-display">
                bio<span className="gradient-brand-text">dry</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Patented electromagnetic technology that permanently eliminates rising damp. Trusted in 28+ countries worldwide.
            </p>

            {/* Contact */}
            <div className="space-y-2.5">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-brand-blue transition-colors">
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-brand-blue transition-colors">
                <Mail className="w-3.5 h-3.5 text-brand-blue" />
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                {SITE_CONFIG.address}
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: LinkedInIcon, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
                { icon: YoutubeIcon, href: SITE_CONFIG.social.youtube, label: 'YouTube' },
                { icon: FacebookIcon, href: SITE_CONFIG.social.facebook, label: 'Facebook' },
                { icon: InstagramIcon, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-blue/20 flex items-center justify-center text-slate-400 hover:text-brand-blue transition-all duration-200 border border-white/5 hover:border-brand-blue/30"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Countries */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Biodry is present in</p>
          <div className="flex flex-wrap gap-2">
            {COUNTRIES.map((country) => (
              <span
                key={country}
                className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5 hover:border-brand-blue/30 hover:text-slate-200 transition-colors cursor-default"
              >
                {country}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} Biodry®. All rights reserved. Patented technology.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-500">CE Certified</span>
            <span className="w-px h-3 bg-white/10" />
            <span className="text-xs text-slate-500">TUV Approved</span>
            <span className="w-px h-3 bg-white/10" />
            <span className="text-xs text-slate-500">UNI Standards</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
