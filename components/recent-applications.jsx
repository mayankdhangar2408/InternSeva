import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, MapPin, Calendar, ExternalLink } from "lucide-react"

const recentApplications = [
  {
    id: "1",
    title: "Software Development Intern",
    company: "Tech Solutions Pvt Ltd",
    location: "Bangalore",
    appliedDate: "2024-01-15",
    status: "under-review",
    statusText: "Under Review",
  },
  {
    id: "2",
    title: "Digital Marketing Intern",
    company: "Creative Agency India",
    location: "Mumbai",
    appliedDate: "2024-01-12",
    status: "interview",
    statusText: "Interview Scheduled",
  },
  {
    id: "3",
    title: "Financial Analyst Intern",
    company: "Investment Bank Corp",
    location: "Delhi",
    appliedDate: "2024-01-10",
    status: "accepted",
    statusText: "Accepted",
  },
]

export function RecentApplications() {
  const getStatusColor = (status) => {
    switch (status) {
      case "accepted":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "interview":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "under-review":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <Card className="border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Applications</CardTitle>
        <Button variant="outline" size="sm" asChild>
          <a href="/dashboard/applications">
            View All
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentApplications.map((application) => (
            <div key={application.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-foreground mb-1">{application.title}</h4>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Building className="h-3 w-3" />
                    <span>{application.company}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{application.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>Applied {new Date(application.appliedDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <Badge className={getStatusColor(application.status)}>{application.statusText}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
