import { Header } from "@/components/header"
import { ResourcesSection } from "@/components/resources-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ResourcesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
