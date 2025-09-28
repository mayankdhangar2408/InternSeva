"use client"

import { useState, useMemo } from "react"
import { InternshipFilters } from "@/components/internship-filters"
import { InternshipCard } from "@/components/internship-card"
import { Badge } from "@/components/ui/badge"

// Mock data for internships
const mockInternships = [
  {
    id: "1",
    title: "Software Development Intern",
    company: "Tech Solutions Pvt Ltd",
    location: "Bangalore",
    field: "technology",
    duration: "6-months",
    stipend: "₹25,000",
    description:
      "Join our development team to work on cutting-edge web applications using React, Node.js, and cloud technologies. You'll collaborate with senior developers and contribute to real-world projects.",
    requirements: ["React.js", "JavaScript", "Node.js", "Git", "Problem Solving"],
    postedDate: "2 days ago",
    applicants: 45,
    isRemote: false,
  },
  {
    id: "2",
    title: "Digital Marketing Intern",
    company: "Creative Agency India",
    location: "Mumbai",
    field: "marketing",
    duration: "3-months",
    stipend: "₹15,000",
    description:
      "Learn digital marketing strategies, social media management, and content creation. Work with established brands and gain hands-on experience in campaign management.",
    requirements: ["Social Media", "Content Writing", "Analytics", "Creativity"],
    postedDate: "1 week ago",
    applicants: 32,
    isRemote: true,
  },
  {
    id: "3",
    title: "Financial Analyst Intern",
    company: "Investment Bank Corp",
    location: "Delhi",
    field: "finance",
    duration: "12-months",
    stipend: "₹30,000",
    description:
      "Assist in financial modeling, market research, and investment analysis. Work closely with senior analysts on client projects and develop expertise in financial markets.",
    requirements: ["Excel", "Financial Modeling", "Research", "Communication"],
    postedDate: "3 days ago",
    applicants: 28,
    isRemote: false,
  },
  {
    id: "4",
    title: "Healthcare Research Intern",
    company: "Medical Research Institute",
    location: "Chennai",
    field: "healthcare",
    duration: "6-months",
    stipend: "₹20,000",
    description:
      "Contribute to medical research projects, data analysis, and clinical studies. Gain exposure to healthcare innovation and research methodologies.",
    requirements: ["Research Skills", "Data Analysis", "Medical Knowledge", "Documentation"],
    postedDate: "5 days ago",
    applicants: 18,
    isRemote: false,
  },
  {
    id: "5",
    title: "Education Technology Intern",
    company: "EduTech Solutions",
    location: "Hyderabad",
    field: "education",
    duration: "6-months",
    stipend: "₹18,000",
    description:
      "Develop educational content, work on e-learning platforms, and contribute to innovative teaching methodologies using technology.",
    requirements: ["Content Development", "Technology", "Teaching", "Creativity"],
    postedDate: "1 week ago",
    applicants: 22,
    isRemote: true,
  },
  {
    id: "6",
    title: "Manufacturing Process Intern",
    company: "Industrial Corp Ltd",
    location: "Pune",
    field: "manufacturing",
    duration: "12-months",
    stipend: "₹22,000",
    description:
      "Learn manufacturing processes, quality control, and industrial engineering. Work on process optimization and lean manufacturing initiatives.",
    requirements: ["Engineering", "Process Analysis", "Quality Control", "Problem Solving"],
    postedDate: "4 days ago",
    applicants: 15,
    isRemote: false,
  },
]

export function InternshipsListing() {
  const [filters, setFilters] = useState({
    searchTerm: "",
    location: "",
    field: "",
    duration: "",
  })

  const filteredInternships = useMemo(() => {
    return mockInternships.filter((internship) => {
      const matchesSearch =
        !filters.searchTerm ||
        internship.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        internship.company.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        internship.requirements.some((req) => req.toLowerCase().includes(filters.searchTerm.toLowerCase()))

      const matchesLocation =
        !filters.location ||
        internship.location.toLowerCase() === filters.location.toLowerCase() ||
        (filters.location === "remote" && internship.isRemote)

      const matchesField = !filters.field || internship.field === filters.field
      const matchesDuration = !filters.duration || internship.duration === filters.duration

      return matchesSearch && matchesLocation && matchesField && matchesDuration
    })
  }, [filters])

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Available Internships</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover exciting internship opportunities across various sectors and kickstart your career journey.
          </p>
        </div>

        {/* Filters */}
        <InternshipFilters onFilterChange={setFilters} />

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-muted-foreground">
              Showing {filteredInternships.length} of {mockInternships.length} internships
            </span>
            {(filters.searchTerm || filters.location || filters.field || filters.duration) && (
              <Badge variant="secondary">Filtered</Badge>
            )}
          </div>
        </div>

        {/* Internship Cards */}
        {filteredInternships.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInternships.map((internship) => (
              <InternshipCard key={internship.id} internship={internship} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">No internships found matching your criteria.</div>
            <p className="text-sm text-muted-foreground">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </section>
  )
}
