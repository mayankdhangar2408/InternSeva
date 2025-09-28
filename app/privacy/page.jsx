import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>PM Internship Scheme - Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
                <p className="text-muted-foreground">
                  We collect information you provide directly to us, such as when you register for an account, apply for internships, or contact us for support.
                </p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                  <li>Personal information (name, email, phone number, date of birth)</li>
                  <li>Educational background and qualifications</li>
                  <li>Employment history and preferences</li>
                  <li>Resume and portfolio documents</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
                <p className="text-muted-foreground">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                  <li>Process your internship applications</li>
                  <li>Match you with suitable internship opportunities</li>
                  <li>Communicate with you about your applications</li>
                  <li>Improve our services and user experience</li>
                  <li>Comply with legal requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Information Sharing</h2>
                <p className="text-muted-foreground">
                  We may share your information with:
                </p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                  <li>Organizations offering internships (with your consent)</li>
                  <li>Government agencies as required by law</li>
                  <li>Service providers who assist in our operations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
                <p className="text-muted-foreground">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your account and data</li>
                  <li>Opt-out of certain communications</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at privacy@internseva.gov.in
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}