import { Header } from "@/components/header"
import { InternshipsListing } from "@/components/internships-listing"
import { Footer } from "@/components/footer"

export default function InternshipsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <InternshipsListing />
      </main>
      <Footer />
    </div>
  )
}
