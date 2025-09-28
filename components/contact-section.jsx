import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { Badge } from "@/components/ui/badge"

export function ContactSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Contact Support
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">We're Here to Help</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Have questions about the PM Internship Scheme? Need help with your application? Our dedicated support team
            is ready to assist you every step of the way.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <ContactInfo />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-muted/30 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Response Time</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-medium text-foreground">Email Queries</div>
                <div className="text-muted-foreground">24-48 hours</div>
              </div>
              <div>
                <div className="font-medium text-foreground">Phone Support</div>
                <div className="text-muted-foreground">Immediate</div>
              </div>
              <div>
                <div className="font-medium text-foreground">Application Issues</div>
                <div className="text-muted-foreground">Within 24 hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
