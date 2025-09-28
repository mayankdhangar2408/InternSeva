import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Search, Users, Play } from "lucide-react"

export function ApplicationProcessSection() {
  const steps = [
    {
      step: 1,
      title: "Registration",
      description: "Create your account and complete your profile with academic and personal details.",
      icon: CheckCircle,
      status: "completed",
    },
    {
      step: 2,
      title: "Document Upload",
      description: "Upload required documents including academic transcripts and certifications.",
      icon: FileText,
      status: "completed",
    },
    {
      step: 3,
      title: "Browse & Apply",
      description: "Search for suitable internships and submit your applications with cover letters.",
      icon: Search,
      status: "current",
    },
    {
      step: 4,
      title: "Selection Process",
      description: "Participate in interviews and assessments. Get selected for your dream internship.",
      icon: Users,
      status: "upcoming",
    },
    {
      step: 5,
      title: "Start Internship",
      description: "Begin your internship journey and gain valuable professional experience.",
      icon: Play,
      status: "upcoming",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Application Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Application Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Follow these simple steps to apply for opportunities through the PM Internship Scheme
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  {/* Step icon */}
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                      step.status === "completed"
                        ? "bg-green-500"
                        : step.status === "current"
                          ? "bg-blue-500"
                          : "bg-gray-400"
                    }`}
                  >
                    <step.icon className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <Card className="border-border">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            Step {step.step}: {step.title}
                          </h3>
                          <Badge
                            variant={
                              step.status === "completed"
                                ? "default"
                                : step.status === "current"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {step.status === "completed"
                              ? "Completed"
                              : step.status === "current"
                                ? "Current"
                                : "Upcoming"}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-pretty">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
