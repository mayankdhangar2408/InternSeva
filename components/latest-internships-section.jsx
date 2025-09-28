import { Button } from "@/components/ui/button"
import { InternshipCard } from "@/components/internship-card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function LatestInternshipsSection() {
  // Sample internship data - in a real app, this would come from an API
  const sampleInternships = [
    {
      id: 1,
      title: "Digital Governance Intern",
      company: "Ministry of Electronics & IT",
      location: "New Delhi",
      duration: "12 months",
      field: "Government",
      description:
        "Work on digital transformation initiatives and e-governance projects to improve citizen services and government efficiency.",
      requirements: ["Computer Science", "Public Policy", "Digital Marketing"],
      stipend: "₹25,000",
      postedDate: "2 days ago",
      applicants: 45,
      isRemote: false,
    },
    {
      id: 2,
      title: "Policy Research Intern",
      company: "NITI Aayog",
      location: "New Delhi",
      duration: "6 months",
      field: "Government",
      description:
        "Conduct research on policy frameworks and contribute to strategic planning for national development goals.",
      requirements: ["Economics", "Public Policy", "Research Skills"],
      stipend: "₹30,000",
      postedDate: "1 day ago",
      applicants: 67,
      isRemote: false,
    },
    {
      id: 3,
      title: "Data Analytics Intern",
      company: "Ministry of Statistics & PI",
      location: "Mumbai",
      duration: "12 months",
      field: "Government",
      description:
        "Analyze government data to derive insights for policy making and program evaluation across various sectors.",
      requirements: ["Data Science", "Statistics", "Python/R"],
      stipend: "₹28,000",
      postedDate: "1 day ago",
      applicants: 89,
      isRemote: true,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Latest Internships</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Discover exciting opportunities across various government sectors
            </p>
          </div>
          <Button variant="outline" asChild className="hidden md:flex bg-transparent">
            <Link href="/internships">
              View All Internships
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {sampleInternships.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>

        <div className="text-center md:hidden">
          <Button variant="outline" asChild>
            <Link href="/internships">
              View All Internships
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
