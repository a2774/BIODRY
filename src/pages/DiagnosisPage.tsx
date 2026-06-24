import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, CheckCircle, Droplets, AlertTriangle, ChevronRight } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/utils/animations'

const symptoms = [
  'Damp patches on lower walls',
  'White salt deposits (efflorescence)',
  'Peeling or bubbling paint',
  'Mould growth near floor level',
  'Musty/damp smell',
  'Rotting skirting boards',
  'Crumbling plaster',
  'Rust stains from steel fixtures',
]

const buildingTypes = [
  { value: 'historic', label: 'Historic (Pre-1950)' },
  { value: 'traditional', label: 'Traditional (1950-1990)' },
  { value: 'modern', label: 'Modern (Post-1990)' },
  { value: 'new-build', label: 'New Build (Post-2000)' },
]

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  country: z.string().min(1, 'Country is required'),
  buildingType: z.string().min(1, 'Building type is required'),
  symptoms: z.array(z.string()).min(1, 'Select at least one symptom'),
  wallHeight: z.string().optional(),
  duration: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function DiagnosisPage() {
  const [step, setStep] = useState(1)
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev => {
      const newList = prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
      setValue('symptoms', newList)
      return newList
    })
  }

  const riskScore = Math.min(100, selectedSymptoms.length * 14)
  const riskLevel = riskScore >= 70 ? 'High' : riskScore >= 40 ? 'Moderate' : 'Low'
  const riskColor = riskScore >= 70 ? 'text-red-400' : riskScore >= 40 ? 'text-yellow-400' : 'text-green-400'
  const riskBg = riskScore >= 70 ? 'bg-red-500' : riskScore >= 40 ? 'bg-yellow-500' : 'bg-green-500'

  const onSubmit = (data: FormData) => {
    console.log('Diagnosis form:', data)
    setSubmitted(true)
  }

  return (
    <div className="bg-dark-950 min-h-screen">
      {/* Hero */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6">
            Self-Diagnosis Tool
          </div>
          <h1 className="text-5xl lg:text-6xl font-black font-display text-white mb-6">
            Moisture <span className="gradient-brand-text">Diagnosis Wizard</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Answer a few quick questions to understand your rising damp problem and get personalised recommendations.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark-950 to-transparent" />
      </section>

      {/* Wizard */}
      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-3xl p-10 border border-green-500/20 text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl font-black font-display text-white mb-4">Diagnosis Submitted!</h2>
              <p className="text-slate-400 mb-8">
                Based on your responses, you have a <strong className={riskColor}>{riskLevel} Risk</strong> of rising damp.
                Our team will review your case and contact you within 24 hours with personalised recommendations.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-brand text-white font-bold hover:opacity-90 transition-opacity">
                Book Your Free Inspection
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Progress */}
              <div className="flex items-center gap-2 mb-8">
                {[1, 2, 3].map(s => (
                  <div key={s} className="flex-1">
                    <div className={`h-1.5 rounded-full transition-all duration-500 ${s <= step ? 'bg-brand-blue' : 'bg-white/10'}`} />
                  </div>
                ))}
              </div>
              <div className="text-xs text-slate-400 mb-6 text-right">Step {step} of 3</div>

              {/* Step 1: Symptoms */}
              {step === 1 && (
                <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="glass rounded-3xl p-8 border border-white/6">
                  <motion.div variants={fadeInUp}>
                    <h2 className="text-2xl font-black font-display text-white mb-2">What symptoms do you see?</h2>
                    <p className="text-slate-400 text-sm mb-6">Select all that apply to your building.</p>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {symptoms.map(symptom => (
                      <button
                        key={symptom}
                        type="button"
                        onClick={() => toggleSymptom(symptom)}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border text-left text-sm transition-all duration-200 ${
                          selectedSymptoms.includes(symptom)
                            ? 'border-brand-blue/50 bg-brand-blue/10 text-white'
                            : 'border-white/8 text-slate-400 hover:border-white/20 hover:text-slate-200'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded flex items-center justify-center border flex-shrink-0 ${
                          selectedSymptoms.includes(symptom) ? 'bg-brand-blue border-brand-blue' : 'border-white/20'
                        }`}>
                          {selectedSymptoms.includes(symptom) && <CheckCircle className="w-3 h-3 text-white" />}
                        </div>
                        {symptom}
                      </button>
                    ))}
                  </div>

                  {/* Risk meter */}
                  {selectedSymptoms.length > 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-xl bg-dark-800/50 border border-white/5 mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-400">Risk Assessment</span>
                        <span className={`text-sm font-bold ${riskColor}`}>{riskLevel} Risk</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${riskBg}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${riskScore}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </motion.div>
                  )}

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={selectedSymptoms.length === 0}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl gradient-brand text-white font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
                  >
                    Continue
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {/* Step 2: Building Info */}
              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass rounded-3xl p-8 border border-white/6">
                  <h2 className="text-2xl font-black font-display text-white mb-2">About Your Building</h2>
                  <p className="text-slate-400 text-sm mb-6">Help us understand your property better.</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-1.5">Building Type</label>
                      <div className="grid grid-cols-2 gap-2">
                        {buildingTypes.map(type => (
                          <label key={type.value} className="cursor-pointer">
                            <input type="radio" {...register('buildingType')} value={type.value} className="sr-only" />
                            <div className={`p-3 rounded-xl border text-sm text-center transition-all ${
                              watch('buildingType') === type.value
                                ? 'border-brand-blue/50 bg-brand-blue/10 text-white'
                                : 'border-white/8 text-slate-400 hover:border-white/20'
                            }`}>
                              {type.label}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-1.5">How long have you noticed the problem?</label>
                      <select {...register('duration')} className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-slate-200 text-sm focus:border-brand-blue focus:outline-none">
                        <option value="">Select duration</option>
                        <option value="<6months">Less than 6 months</option>
                        <option value="6-12months">6–12 months</option>
                        <option value="1-3years">1–3 years</option>
                        <option value=">3years">More than 3 years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-1.5">Country</label>
                      <input {...register('country')} placeholder="Your country" className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-slate-200 text-sm placeholder-slate-500 focus:border-brand-blue focus:outline-none" />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(1)} className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all text-sm">
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button type="button" onClick={() => setStep(3)} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl gradient-brand text-white font-bold hover:opacity-90 transition-opacity text-sm">
                      Continue
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact */}
              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass rounded-3xl p-8 border border-white/6">
                  <h2 className="text-2xl font-black font-display text-white mb-2">Receive Your Results</h2>
                  <p className="text-slate-400 text-sm mb-6">We'll send a personalised report and connect you with a local expert.</p>

                  <div className="space-y-4 mb-6">
                    {[
                      { name: 'name' as const, label: 'Full Name', placeholder: 'Your full name' },
                      { name: 'email' as const, label: 'Email Address', placeholder: 'your@email.com' },
                      { name: 'phone' as const, label: 'Phone (optional)', placeholder: '+1 234 567 890' },
                    ].map(field => (
                      <div key={field.name}>
                        <label className="block text-sm font-semibold text-slate-300 mb-1.5">{field.label}</label>
                        <input
                          {...register(field.name)}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-slate-200 text-sm placeholder-slate-500 focus:border-brand-blue focus:outline-none"
                        />
                        {errors[field.name] && (
                          <p className="text-red-400 text-xs mt-1">{errors[field.name]?.message}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Summary */}
                  <div className="p-4 rounded-xl bg-dark-800/50 border border-white/5 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">Your Risk Level</span>
                      <span className={`text-sm font-bold ${riskColor}`}>{riskLevel} Risk ({selectedSymptoms.length} symptoms)</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(2)} className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 text-slate-400 hover:text-white transition-all text-sm">
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button type="submit" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl gradient-brand text-white font-bold hover:opacity-90 transition-opacity text-sm">
                      Get My Report
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
