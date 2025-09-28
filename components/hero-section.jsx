import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              Government of India Initiative
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Intern Seva</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-balance">
              Your Gateway to PM Internship Scheme
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Join thousands of students across India in the Prime Minister's Internship Scheme. Build your career with
              government-backed internships, gain valuable experience, and contribute to nation-building while
              developing your skills.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/register">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
              <Link href="/internships">Explore Internships</Link>
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">10,000+</div>
              <div className="text-muted-foreground">Active Internships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">25,000+</div>
              <div className="text-muted-foreground">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">500+</div>
              <div className="text-muted-foreground">Partner Organizations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
