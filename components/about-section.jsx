import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Network, Users, BookOpen, Award, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  const features = [
    {
      icon: Network,
      title: "Professional Networking",
      description:
        "Connect with government officials, industry experts, and fellow interns to build valuable relationships.",
    },
    {
      icon: BookOpen,
      title: "Skill Development",
      description:
        "Gain practical experience and develop industry-relevant skills through hands-on projects and training.",
    },
    {
      icon: Users,
      title: "Government Recognition",
      description:
        "Receive official recognition and certification from government departments upon successful completion.",
    },
    {
      icon: TrendingUp,
      title: "Learning Resources",
      description:
        "Access comprehensive learning materials, workshops, and online resources to enhance your knowledge.",
    },
    {
      icon: Award,
      title: "Career Growth",
      description:
        "Enhance your resume with government internship experience and increase your employability in the job market.",
    },
    {
      icon: CheckCircle,
      title: "Assured Placement",
      description:
        "Get priority consideration for permanent positions in government departments and public sector organizations.",
    },
  ]

  const benefits = [
    "Meaningful work on 30+ government ministries",
    "Opportunity to work on national importance projects",
    "Certificate of completion from respective ministries",
    "Networking opportunities with senior government officials",
    "Skill development workshops and training programs",
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About the Scheme
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">PM Internship Scheme</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            The Prime Minister's Internship Scheme is a flagship initiative designed to bridge the gap between academic
            learning and professional requirements. It provides students with hands-on experience in government
            departments while developing leadership skills.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-border text-center">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Join Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Join PM Internship Scheme?</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-pretty">{benefit}</p>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-8">
                <Link href="/about">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">12 Months</div>
                    <div className="text-lg font-semibold text-foreground mb-4">Program Duration</div>
                    <p className="text-muted-foreground text-sm mb-6 text-pretty">
                      Comprehensive internship program designed to provide in-depth experience and skill development
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-foreground">₹5,000</div>
                        <div className="text-xs text-muted-foreground">Monthly Stipend</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">100%</div>
                        <div className="text-xs text-muted-foreground">Placement Support</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
