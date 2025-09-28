import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ApplicationProcessSection } from "@/components/application-process-section"
import { ImpactSection } from "@/components/impact-section"
import { LatestInternshipsSection } from "@/components/latest-internships-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ApplicationProcessSection />
        <ImpactSection />
        <LatestInternshipsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
