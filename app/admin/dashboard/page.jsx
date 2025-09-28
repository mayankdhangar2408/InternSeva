"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Users, 
  Building2, 
  FileText, 
  TrendingUp,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Plus
} from "lucide-react"

const dashboardStats = [
  {
    title: "Total Users",
    value: "1,247",
    change: "+12%",
    changeType: "increase",
    icon: Users,
    color: "blue"
  },
  {
    title: "Active Internships",
    value: "156",
    change: "+5%",
    changeType: "increase",
    icon: Building2,
    color: "green"
  },
  {
    title: "Applications",
    value: "2,834",
    change: "+18%",
    changeType: "increase",
    icon: FileText,
    color: "purple"
  },
  {
    title: "Success Rate",
    value: "78%",
    change: "-2%",
    changeType: "decrease",
    icon: TrendingUp,
    color: "orange"
  }
]

const recentApplications = [
  {
    id: 1,
    studentName: "Priya Sharma",
    internship: "Software Development Intern",
    company: "Tech Solutions Pvt Ltd",
    status: "pending",
    appliedDate: "2024-01-15",
    experience: "2 years"
  },
  {
    id: 2,
    studentName: "Rahul Kumar",
    internship: "Data Science Intern",
    company: "Analytics Corp",
    status: "approved",
    appliedDate: "2024-01-14",
    experience: "1 year"
  },
  {
    id: 3,
    studentName: "Anita Patel",
    internship: "Marketing Intern",
    company: "Digital Agency",
    status: "rejected",
    appliedDate: "2024-01-13",
    experience: "0 years"
  },
  {
    id: 4,
    studentName: "Vikram Singh",
    internship: "Financial Analyst Intern",
    company: "Investment Bank Corp",
    status: "interview",
    appliedDate: "2024-01-12",
    experience: "1.5 years"
  },
  {
    id: 5,
    studentName: "Meera Joshi",
    internship: "UX Design Intern",
    company: "Creative Studio",
    status: "approved",
    appliedDate: "2024-01-11",
    experience: "6 months"
  }
]

const upcomingDeadlines = [
  {
    id: 1,
    title: "Software Engineering Internship",
    company: "Tech Corp",
    deadline: "2024-01-20",
    applicants: 45,
    daysLeft: 5
  },
  {
    id: 2,
    title: "Data Science Internship",
    company: "AI Solutions",
    deadline: "2024-01-25",
    applicants: 32,
    daysLeft: 10
  },
  {
    id: 3,
    title: "Product Management Internship",
    company: "Startup Inc",
    deadline: "2024-01-30",
    applicants: 28,
    daysLeft: 15
  }
]

export default function AdminDashboard() {
  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "interview":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4" />
      case "rejected":
        return <AlertCircle className="h-4 w-4" />
      case "pending":
        return <Clock className="h-4 w-4" />
      case "interview":
        return <Calendar className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <AdminSidebar />

        <main className="flex-1 lg:ml-64">
          <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8 mt-12 lg:mt-0">
              <h1 className="text-2xl font-bold text-foreground mb-2">Admin Dashboard</h1>
              <p className="text-muted-foreground">Overview of system performance and recent activities</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              {dashboardStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                          <div className="flex items-center space-x-1">
                            {stat.changeType === "increase" ? (
                              <ArrowUpRight className="h-4 w-4 text-green-500" />
                            ) : (
                              <ArrowDownRight className="h-4 w-4 text-red-500" />
                            )}
                            <span className={`text-sm font-medium ${
                              stat.changeType === "increase" ? "text-green-600" : "text-red-600"
                            }`}>
                              {stat.change}
                            </span>
                            <span className="text-sm text-muted-foreground">vs last month</span>
                          </div>
                        </div>
                        <div className={`h-12 w-12 rounded-full bg-${stat.color}-100 dark:bg-${stat.color}-900 flex items-center justify-center`}>
                          <Icon className={`h-6 w-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Recent Applications */}
              <div className="xl:col-span-2">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Recent Applications</CardTitle>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View All
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentApplications.map((application) => (
                        <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-medium text-foreground">{application.studentName}</h3>
                                <p className="text-sm text-muted-foreground">{application.internship}</p>
                                <p className="text-sm text-muted-foreground">{application.company}</p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Applied: {formatDate(application.appliedDate)} • Experience: {application.experience}
                                </p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Badge className={getStatusColor(application.status)}>
                                  <span className="flex items-center space-x-1">
                                    {getStatusIcon(application.status)}
                                    <span className="capitalize">{application.status}</span>
                                  </span>
                                </Badge>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Upcoming Deadlines */}
              <div>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Upcoming Deadlines</CardTitle>
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingDeadlines.map((deadline) => (
                        <div key={deadline.id} className="space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-medium text-foreground text-sm">{deadline.title}</h3>
                              <p className="text-sm text-muted-foreground">{deadline.company}</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {deadline.applicants} applicants
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-foreground">{deadline.daysLeft} days</p>
                              <p className="text-xs text-muted-foreground">{formatDate(deadline.deadline)}</p>
                            </div>
                          </div>
                          <Progress value={(30 - deadline.daysLeft) / 30 * 100} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button className="w-full justify-start" variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Internship
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      Manage Users
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Review Applications
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      View Analytics
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}