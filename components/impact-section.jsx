import { Card, CardContent } from "@/components/ui/card"
import { Users, Building, Award, TrendingUp } from "lucide-react"

export function ImpactSection() {
  const metrics = [
    {
      icon: Users,
      value: "25,000+",
      label: "Students Placed",
      description: "Young professionals successfully placed in internships",
    },
    {
      icon: Building,
      value: "500+",
      label: "Partner Organizations",
      description: "Government departments and PSUs participating",
    },
    {
      icon: Award,
      value: "30+",
      label: "Government Ministries",
      description: "Ministries offering internship opportunities",
    },
    {
      icon: TrendingUp,
      value: "85%",
      label: "Success Rate",
      description: "Interns completing their full program duration",
    },
  ]

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Our Impact</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto text-pretty">
            Making a difference in the lives of India's youth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-full mb-6">
                  <metric.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary-foreground mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-primary-foreground mb-2">{metric.label}</div>
                <p className="text-sm text-primary-foreground/80 text-pretty">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
