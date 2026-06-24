import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Phone, Mail, MapPin, Clock, ArrowRight, Send } from 'lucide-react'
import { SITE_CONFIG } from '@/constants/siteData'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import { useInView } from 'react-intersection-observer'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  country: z.string().min(1, 'Country is required'),
  buildingType: z.string().min(1, 'Building type is required'),
  message: z.string().min(10, 'Please describe your problem'),
  consent: z.boolean().refine(v => v, 'You must consent to be contacted'),
})

type FormData = z.infer<typeof schema>

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 1000))
    setSubmitted(true)
  }

  return (
    <div className="bg-dark-950 min-h-screen">
      {/* Hero */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6">
            Get In Touch
          </div>
          <h1 className="text-5xl lg:text-6xl font-black font-display text-white mb-6">
            Contact <span className="gradient-brand-text">Biodry</span>
          </h1>
          <p className="text-xl text-slate-400">
            Request a free inspection or simply get in touch with our experts.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6">
        <div ref={ref} className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact Info */}
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-7 border border-white/6">
                <h3 className="text-lg font-bold text-white font-display mb-5">Direct Contact</h3>
                <div className="space-y-4">
                  {[
                    { icon: Phone, label: 'Phone', value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
                    { icon: Mail, label: 'Email', value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                    { icon: MapPin, label: 'Headquarters', value: SITE_CONFIG.address, href: undefined },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-brand-blue" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                        {href
                          ? <a href={href} className="text-sm font-medium text-white hover:text-brand-blue transition-colors">{value}</a>
                          : <span className="text-sm font-medium text-white">{value}</span>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Response time */}
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-7 border border-brand-blue/20 bg-brand-blue/5">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-brand-blue" />
                  <h3 className="text-sm font-bold text-white">Response Time</h3>
                </div>
                <p className="text-sm text-slate-400">
                  We typically respond within <strong className="text-white">24 hours</strong> on business days.
                  For urgent requests, please call us directly.
                </p>
              </motion.div>

              {/* Checklist */}
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-7 border border-white/6">
                <h3 className="text-sm font-bold text-white mb-4">What happens next?</h3>
                <div className="space-y-3">
                  {[
                    'We review your enquiry within 24 hours',
                    'A certified technician contacts you',
                    'Free on-site inspection arranged',
                    'Transparent, no-obligation quote',
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-400">
                      <div className="w-5 h-5 rounded-full gradient-brand flex items-center justify-center flex-shrink-0 text-[10px] font-bold text-white">
                        {i + 1}
                      </div>
                      {step}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="glass rounded-3xl p-12 border border-green-500/20 text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                  <h2 className="text-3xl font-black font-display text-white mb-4">Message Sent!</h2>
                  <p className="text-slate-400 text-lg">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-3xl p-8 border border-white/8 space-y-5">
                  <h3 className="text-xl font-bold text-white font-display mb-2">Request Free Inspection</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: 'name' as const, label: 'Full Name', placeholder: 'John Smith' },
                      { name: 'email' as const, label: 'Email Address', placeholder: 'john@example.com' },
                    ].map(field => (
                      <div key={field.name}>
                        <label className="block text-sm font-medium text-slate-300 mb-1.5">{field.label}</label>
                        <input
                          {...register(field.name)}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-slate-200 text-sm placeholder-slate-500 focus:border-brand-blue focus:outline-none transition-colors"
                        />
                        {errors[field.name] && <p className="text-red-400 text-xs mt-1">{errors[field.name]?.message}</p>}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">Phone (optional)</label>
                      <input {...register('phone')} placeholder="+1 234 567 890" className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-slate-200 text-sm placeholder-slate-500 focus:border-brand-blue focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">Country</label>
                      <input {...register('country')} placeholder="Your country" className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-slate-200 text-sm placeholder-slate-500 focus:border-brand-blue focus:outline-none transition-colors" />
                      {errors.country && <p className="text-red-400 text-xs mt-1">{errors.country.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Building Type</label>
                    <select {...register('buildingType')} className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-slate-200 text-sm focus:border-brand-blue focus:outline-none">
                      <option value="">Select type...</option>
                      {['Residential Home', 'Historic Building', 'Commercial Property', 'Hotel/Hospitality', 'Church/Religious', 'Other'].map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.buildingType && <p className="text-red-400 text-xs mt-1">{errors.buildingType.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Describe Your Problem</label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Tell us about the damp symptoms you're experiencing, the age of your building, and any previous treatments you've tried..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-slate-200 text-sm placeholder-slate-500 focus:border-brand-blue focus:outline-none resize-none transition-colors"
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" {...register('consent')} id="consent" className="mt-1 w-4 h-4 rounded border-white/20 accent-brand-blue" />
                    <label htmlFor="consent" className="text-xs text-slate-400 leading-relaxed">
                      I consent to Biodry contacting me about my enquiry. I understand my data will be handled in accordance with the privacy policy.
                    </label>
                  </div>
                  {errors.consent && <p className="text-red-400 text-xs">{errors.consent.message}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl gradient-brand text-white font-bold hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Inspection Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
