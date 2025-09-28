import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Download, Video, Users, FileText, Star } from "lucide-react"

const resources = [
  {
    id: 1,
    title: "Complete Application Guide",
    description: "Step-by-step guide to creating a winning internship application",
    type: "PDF Guide",
    category: "Application",
    downloadCount: "2.5k",
    rating: 4.8,
    icon: FileText,
  },
  {
    id: 2,
    title: "Interview Preparation Kit",
    description: "Common questions, tips, and strategies for internship interviews",
    type: "PDF + Video",
    category: "Interview",
    downloadCount: "1.8k",
    rating: 4.9,
    icon: Video,
  },
  {
    id: 3,
    title: "Resume Building Workshop",
    description: "Templates and guidelines for creating an impressive resume",
    type: "Templates",
    category: "Resume",
    downloadCount: "3.2k",
    rating: 4.7,
    icon: BookOpen,
  },
  {
    id: 4,
    title: "Skill Development Roadmap",
    description: "Industry-wise skill requirements and learning paths",
    type: "Interactive Guide",
    category: "Skills",
    downloadCount: "1.5k",
    rating: 4.6,
    icon: Users,
  },
]

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Development Intern",
    company: "Tech Solutions Pvt Ltd",
    image: "/professional-woman-diverse.png",
    testimonial:
      "The PM Internship Scheme transformed my career. I gained practical experience, learned from industry experts, and secured a full-time position after completion.",
    rating: 5,
  },
  {
    id: 2,
    name: "Arjun Patel",
    role: "Marketing Intern",
    company: "Creative Agency India",
    image: "/professional-man.jpg",
    testimonial:
      "The mentorship and real-world projects helped me understand the marketing industry deeply. The stipend support made it financially viable too.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sneha Reddy",
    role: "Financial Analyst Intern",
    company: "Investment Bank Corp",
    image: "/professional-woman-finance.png",
    testimonial:
      "Working on actual client projects gave me confidence and skills that no classroom could provide. Highly recommend this program to all graduates.",
    rating: 5,
  },
]

export function ResourcesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Resources & Guidance
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Access comprehensive guides, preparation materials, and learn from successful interns who have completed the
            program.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8">Preparation Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <Card key={resource.id} className="border-border hover:shadow-lg transition-shadow duration-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {resource.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-balance">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 text-pretty">{resource.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{resource.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{resource.downloadCount} downloads</span>
                    </div>
                    <Button className="w-full" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Success Stories */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 text-pretty">
                    "{testimonial.testimonial}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
