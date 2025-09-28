import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, MessageCircle, HelpCircle } from "lucide-react"

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      primary: "support@internseva.gov.in",
      secondary: "info@internseva.gov.in",
      description: "Get detailed responses within 24-48 hours",
      availability: "24/7",
    },
    {
      icon: Phone,
      title: "Phone Support",
      primary: "1800-XXX-XXXX",
      secondary: "+91-11-XXXX-XXXX",
      description: "Speak directly with our support team",
      availability: "Mon-Fri, 9 AM - 6 PM",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      primary: "Available on website",
      secondary: "Quick responses",
      description: "Instant help for urgent queries",
      availability: "Mon-Fri, 10 AM - 5 PM",
    },
  ]

  const offices = [
    {
      city: "New Delhi",
      address: "Ministry of Skill Development & Entrepreneurship, Shram Shakti Bhawan, Rafi Marg, New Delhi - 110001",
      phone: "+91-11-XXXX-XXXX",
      email: "delhi@internseva.gov.in",
    },
    {
      city: "Mumbai",
      address: "Regional Office, Nariman Point, Mumbai - 400021",
      phone: "+91-22-XXXX-XXXX",
      email: "mumbai@internseva.gov.in",
    },
    {
      city: "Bangalore",
      address: "Regional Office, Cubbon Park, Bangalore - 560001",
      phone: "+91-80-XXXX-XXXX",
      email: "bangalore@internseva.gov.in",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-6">Get in Touch</h3>
        <div className="space-y-4">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-foreground">{method.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {method.availability}
                        </Badge>
                      </div>
                      <div className="space-y-1 mb-2">
                        <p className="text-sm font-medium text-foreground">{method.primary}</p>
                        <p className="text-sm text-muted-foreground">{method.secondary}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Office Locations */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-6">Office Locations</h3>
        <div className="space-y-4">
          {offices.map((office, index) => (
            <Card key={index} className="border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{office.city}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground text-pretty">{office.address}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-foreground">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-foreground">{office.email}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Help */}
      <Card className="border-border bg-accent/20">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg">
              <HelpCircle className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Need Quick Help?</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Check our FAQ section for instant answers to common questions, or browse our resources for detailed
                guides.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Badge variant="outline" className="w-fit">
                  <a href="/resources#faq" className="text-xs">
                    View FAQ
                  </a>
                </Badge>
                <Badge variant="outline" className="w-fit">
                  <a href="/resources" className="text-xs">
                    Browse Resources
                  </a>
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
