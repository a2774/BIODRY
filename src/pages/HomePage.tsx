import HeroSection from '@/components/home/HeroSection'
import TrustStats from '@/components/home/TrustStats'
import ProblemShowcase from '@/components/home/ProblemShowcase'
import ProcessTimeline from '@/components/home/ProcessTimeline'
import BenefitsGrid from '@/components/home/BenefitsGrid'
import BeforeAfterSlider from '@/components/home/BeforeAfterSlider'
import WorldMap from '@/components/home/WorldMap'
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import FAQPreview from '@/components/home/FAQPreview'
import ContactCTA from '@/components/home/ContactCTA'
import CertificationsSection from '@/components/home/CertificationsSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStats />
      <ProblemShowcase />
      <ProcessTimeline />
      <BenefitsGrid />
      <BeforeAfterSlider />
      <WorldMap />
      <CaseStudiesPreview />
      <TestimonialsCarousel />
      <CertificationsSection />
      <FAQPreview />
      <ContactCTA />
    </>
  )
}
