import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'

const HomePage = lazy(() => import('@/pages/HomePage'))
const TechnologyPage = lazy(() => import('@/pages/TechnologyPage'))
const HowItWorksPage = lazy(() => import('@/pages/HowItWorksPage'))
const DiagnosisPage = lazy(() => import('@/pages/DiagnosisPage'))
const SolutionsPage = lazy(() => import('@/pages/SolutionsPage'))
const CaseStudiesPage = lazy(() => import('@/pages/CaseStudiesPage'))
const FAQPage = lazy(() => import('@/pages/FAQPage'))
const BlogPage = lazy(() => import('@/pages/BlogPage'))
const CountriesPage = lazy(() => import('@/pages/CountriesPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const PartnerPage = lazy(() => import('@/pages/PartnerPage'))
const CertificationsPage = lazy(() => import('@/pages/CertificationsPage'))
const DevicePage = lazy(() => import('@/pages/DevicePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))

function LoadingFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-brand-blue/20 border-t-brand-blue animate-spin" />
        <p className="text-sm text-slate-500">Loading...</p>
      </div>
    </div>
  )
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/diagnosis" element={<DiagnosisPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/countries" element={<CountriesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/device" element={<DevicePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
