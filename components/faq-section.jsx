"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What is the PM Internship Scheme?",
    answer:
      "The PM Internship Scheme is a flagship initiative by the Government of India designed to bridge the gap between academic learning and professional requirements. It provides students with hands-on experience in government departments while developing leadership skills.",
  },
  {
    id: 2,
    question: "Who is eligible to apply?",
    answer:
      "Indian citizens aged 21-24 years who have completed their graduation, post-graduation, or diploma (3+ years) are eligible. Candidates should not be currently employed and must demonstrate genuine interest in gaining practical work experience.",
  },
  {
    id: 3,
    question: "What is the duration of internships?",
    answer:
      "The standard internship duration is 12 months. However, some specialized programs may offer 6-month internships based on the sector and department requirements. The duration is clearly mentioned in each internship posting.",
  },
  {
    id: 4,
    question: "Do interns receive a stipend?",
    answer:
      "Yes, interns receive a monthly stipend ranging from ₹15,000 to ₹30,000, depending on the department, location, and nature of work. The exact amount is specified in each internship listing.",
  },
  {
    id: 5,
    question: "How can I track my application status?",
    answer:
      "You can track your application status through your dashboard after logging into your account. You'll receive email notifications for important updates, and the status will be updated in real-time on the platform.",
  },
  {
    id: 6,
    question: "Can I apply for multiple internships?",
    answer:
      "Yes, you can apply for multiple internships to increase your chances of selection. However, once you accept an offer, you'll need to withdraw from other applications. We recommend applying for positions that align with your career goals.",
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (id) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about the PM Internship Scheme
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.id} className="border-border">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <span className="font-medium text-foreground pr-4 text-balance">{faq.question}</span>
                    {openItems.includes(faq.id) ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {openItems.includes(faq.id) && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground text-pretty">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
