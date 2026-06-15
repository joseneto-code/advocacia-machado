import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { DifferentialsSection } from "@/components/differentials-section"
import { ResultsSection } from "@/components/results-section"
import { ContactSection } from "@/components/contact-section"
import { FaqSection } from "@/components/faq-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <DifferentialsSection />
        <ResultsSection />
        <ContactSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
