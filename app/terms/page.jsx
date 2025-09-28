import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">Terms and Conditions</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>PM Internship Scheme - Terms and Conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using the InternSeva platform, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Eligibility</h2>
                <p className="text-muted-foreground">
                  To be eligible for the PM Internship Scheme, you must:
                </p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                  <li>Be at least 18 years of age</li>
                  <li>Be a citizen of India</li>
                  <li>Have completed at least a diploma (3+ years) or equivalent qualification</li>
                  <li>Not be currently employed in a permanent position</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. User Account</h2>
                <p className="text-muted-foreground">
                  You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Application Process</h2>
                <p className="text-muted-foreground">
                  All applications are subject to verification and approval by the respective organizations offering internships.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Data Usage</h2>
                <p className="text-muted-foreground">
                  Your personal information will be used solely for the purpose of the internship program and will be handled according to our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Termination</h2>
                <p className="text-muted-foreground">
                  We reserve the right to terminate or suspend your account at any time for violation of these terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms and Conditions, please contact us at support@internseva.gov.in
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