"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  Building, 
  Clock, 
  Eye,
  FileText,
  Download,
  ExternalLink
} from "lucide-react"

const applications = [
  {
    id: 1,
    title: "Software Development Intern",
    company: "Tech Solutions Pvt Ltd",
    location: "Bangalore",
    appliedDate: "2024-01-14",
    status: "under-review",
    statusText: "Under Review",
    type: "Full-time",
    duration: "6 months",
    salary: "₹25,000/month",
    description: "Work on web development projects using React and Node.js",
    requirements: ["React", "Node.js", "JavaScript", "Git"],
    lastUpdate: "2024-01-20"
  },
  {
    id: 2,
    title: "Digital Marketing Intern",
    company: "Creative Agency India",
    location: "Mumbai",
    appliedDate: "2024-01-11",
    status: "interview",
    statusText: "Interview Scheduled",
    type: "Full-time",
    duration: "3 months",
    salary: "₹20,000/month",
    description: "Create digital marketing campaigns and analyze social media metrics",
    requirements: ["Digital Marketing", "Analytics", "Content Creation"],
    lastUpdate: "2024-01-18",
    interviewDate: "2024-01-25"
  },
  {
    id: 3,
    title: "Financial Analyst Intern",
    company: "Investment Bank Corp",
    location: "Delhi",
    appliedDate: "2024-01-09",
    status: "accepted",
    statusText: "Accepted",
    type: "Full-time",
    duration: "12 months",
    salary: "₹30,000/month",
    description: "Analyze financial data and prepare investment reports",
    requirements: ["Finance", "Excel", "Data Analysis", "Python"],
    lastUpdate: "2024-01-15",
    startDate: "2024-02-01"
  },
  {
    id: 4,
    title: "Data Science Intern",
    company: "Analytics Corp",
    location: "Hyderabad",
    appliedDate: "2024-01-05",
    status: "rejected",
    statusText: "Not Selected",
    type: "Full-time",
    duration: "6 months",
    salary: "₹28,000/month",
    description: "Work on machine learning models and data visualization",
    requirements: ["Python", "Machine Learning", "SQL", "Tableau"],
    lastUpdate: "2024-01-12"
  },
  {
    id: 5,
    title: "Content Writing Intern",
    company: "Media House Ltd",
    location: "Pune",
    appliedDate: "2024-01-03",
    status: "withdrawn",
    statusText: "Withdrawn",
    type: "Part-time",
    duration: "4 months",
    salary: "₹15,000/month",
    description: "Create content for blogs, social media, and marketing materials",
    requirements: ["Content Writing", "SEO", "Research"],
    lastUpdate: "2024-01-08"
  }
]

export default function ApplicationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedApplication, setSelectedApplication] = useState(null)

  const getStatusColor = (status) => {
    switch (status) {
      case "accepted":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "interview":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "under-review":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "withdrawn":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || app.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const stats = {
    total: applications.length,
    pending: applications.filter(app => app.status === "under-review").length,
    accepted: applications.filter(app => app.status === "accepted").length,
    rejected: applications.filter(app => app.status === "rejected").length
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <DashboardSidebar />

        <main className="flex-1 lg:ml-0">
          <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8 mt-12 lg:mt-0">
              <h1 className="text-2xl font-bold text-foreground mb-2">My Applications</h1>
              <p className="text-muted-foreground">Track and manage your internship applications</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Applications</p>
                      <p className="text-2xl font-bold">{stats.total}</p>
                    </div>
                    <FileText className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Under Review</p>
                      <p className="text-2xl font-bold">{stats.pending}</p>
                    </div>
                    <Clock className="h-8 w-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Accepted</p>
                      <p className="text-2xl font-bold">{stats.accepted}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                      <p className="text-2xl font-bold">{Math.round((stats.accepted / stats.total) * 100)}%</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <span className="text-white text-sm">%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="list" className="space-y-6">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="list">List View</TabsTrigger>
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                </TabsList>

                {/* Search and Filter */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search applications..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-48">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="under-review">Under Review</SelectItem>
                      <SelectItem value="interview">Interview</SelectItem>
                      <SelectItem value="accepted">Accepted</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                      <SelectItem value="withdrawn">Withdrawn</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <TabsContent value="list" className="space-y-4">
                {filteredApplications.map((application) => (
                  <Card key={application.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-start space-x-4">
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg text-foreground mb-1">
                                {application.title}
                              </h3>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                                <div className="flex items-center space-x-1">
                                  <Building className="h-4 w-4" />
                                  <span>{application.company}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MapPin className="h-4 w-4" />
                                  <span>{application.location}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>Applied {application.appliedDate}</span>
                                </div>
                              </div>
                              <p className="text-muted-foreground mb-3">{application.description}</p>
                              <div className="flex items-center space-x-2 mb-3">
                                {application.requirements.slice(0, 3).map((req, index) => (
                                  <Badge key={index} variant="secondary" className="text-xs">
                                    {req}
                                  </Badge>
                                ))}
                                {application.requirements.length > 3 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{application.requirements.length - 3} more
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4 text-sm">
                                  <span className="font-medium">{application.salary}</span>
                                  <span className="text-muted-foreground">• {application.duration}</span>
                                  <span className="text-muted-foreground">• {application.type}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Button variant="outline" size="sm">
                                    <Eye className="h-4 w-4 mr-2" />
                                    View Details
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Open
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className={getStatusColor(application.status)}>
                                {application.statusText}
                              </Badge>
                              <p className="text-xs text-muted-foreground mt-2">
                                Updated {application.lastUpdate}
                              </p>
                              {application.interviewDate && (
                                <p className="text-xs text-blue-600 mt-1">
                                  Interview: {application.interviewDate}
                                </p>
                              )}
                              {application.startDate && (
                                <p className="text-xs text-green-600 mt-1">
                                  Starts: {application.startDate}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="timeline" className="space-y-6">
                <div className="relative">
                  {filteredApplications.map((application, index) => (
                    <div key={application.id} className="flex items-start space-x-4 pb-8">
                      <div className="flex flex-col items-center">
                        <div className={`w-4 h-4 rounded-full ${
                          application.status === 'accepted' ? 'bg-green-500' :
                          application.status === 'interview' ? 'bg-blue-500' :
                          application.status === 'under-review' ? 'bg-yellow-500' :
                          application.status === 'rejected' ? 'bg-red-500' : 'bg-gray-500'
                        }`} />
                        {index < filteredApplications.length - 1 && (
                          <div className="w-0.5 h-16 bg-border mt-2" />
                        )}
                      </div>
                      <Card className="flex-1">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-foreground">{application.title}</h3>
                              <p className="text-sm text-muted-foreground">{application.company}</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                Applied on {application.appliedDate}
                              </p>
                            </div>
                            <Badge className={getStatusColor(application.status)}>
                              {application.statusText}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}