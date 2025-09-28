"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  Download,
  Calendar,
  TrendingUp,
  Users,
  Building2,
  BarChart3,
  PieChart,
  Filter,
  DateRange
} from "lucide-react"

export default function AdminReportsPage() {
  const reports = [
    {
      id: 1,
      title: "Monthly Application Report",
      description: "Detailed analysis of applications received in the last month",
      type: "applications",
      generatedOn: "2024-01-15",
      fileSize: "2.4 MB",
      downloadCount: 45,
      status: "ready"
    },
    {
      id: 2,
      title: "Company Performance Report",
      description: "Success rates and metrics for all partner companies",
      type: "companies",
      generatedOn: "2024-01-10",
      fileSize: "1.8 MB",
      downloadCount: 23,
      status: "ready"
    },
    {
      id: 3,
      title: "Student Demographics Report",
      description: "Educational background and location analysis of registered students",
      type: "students",
      generatedOn: "2024-01-08",
      fileSize: "3.2 MB",
      downloadCount: 12,
      status: "ready"
    },
    {
      id: 4,
      title: "Quarterly Analytics Report",
      description: "Comprehensive quarterly analysis of all platform metrics",
      type: "analytics",
      generatedOn: "2024-01-01",
      fileSize: "5.6 MB",
      downloadCount: 89,
      status: "ready"
    }
  ]

  const quickStats = [
    { label: "Total Reports Generated", value: "47", change: "+12%" },
    { label: "Downloads This Month", value: "234", change: "+28%" },
    { label: "Scheduled Reports", value: "8", change: "+2%" },
    { label: "Storage Used", value: "156 MB", change: "+15%" }
  ]

  const getReportIcon = (type) => {
    switch (type) {
      case "applications":
        return <FileText className="h-5 w-5" />
      case "companies":
        return <Building2 className="h-5 w-5" />
      case "students":
        return <Users className="h-5 w-5" />
      case "analytics":
        return <BarChart3 className="h-5 w-5" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  const getReportColor = (type) => {
    switch (type) {
      case "applications":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "companies":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "students":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "analytics":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
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
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-foreground mb-2">Reports</h1>
                  <p className="text-muted-foreground">Generate and download comprehensive reports</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button>
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Report
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {quickStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium text-green-600">{stat.change}</span>
                        <span className="text-sm text-muted-foreground">vs last period</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Available Reports */}
              <div className="xl:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Available Reports</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {reports.map((report) => (
                        <div key={report.id} className="p-4 border rounded-lg">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                              <div className={`p-2 rounded-lg ${getReportColor(report.type)}`}>
                                {getReportIcon(report.type)}
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-foreground mb-1">{report.title}</h3>
                                <p className="text-sm text-muted-foreground mb-2">{report.description}</p>
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                  <div className="flex items-center space-x-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>Generated {formatDate(report.generatedOn)}</span>
                                  </div>
                                  <span>•</span>
                                  <span>{report.fileSize}</span>
                                  <span>•</span>
                                  <span>{report.downloadCount} downloads</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge className={getReportColor(report.type)}>
                                {report.type}
                              </Badge>
                              <Button size="sm">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions & Scheduled Reports */}
              <div className="space-y-6">
                {/* Quick Report Generation */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Generate</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Application Summary
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      User Activity Report
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Building2 className="h-4 w-4 mr-2" />
                      Company Performance
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Analytics Dashboard
                    </Button>
                  </CardContent>
                </Card>

                {/* Scheduled Reports */}
                <Card>
                  <CardHeader>
                    <CardTitle>Scheduled Reports</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 border rounded">
                        <div>
                          <p className="font-medium text-sm">Weekly Summary</p>
                          <p className="text-xs text-muted-foreground">Every Monday at 9:00 AM</p>
                        </div>
                        <Badge variant="outline">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded">
                        <div>
                          <p className="font-medium text-sm">Monthly Analytics</p>
                          <p className="text-xs text-muted-foreground">1st of every month</p>
                        </div>
                        <Badge variant="outline">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded">
                        <div>
                          <p className="font-medium text-sm">Quarterly Review</p>
                          <p className="text-xs text-muted-foreground">Every 3 months</p>
                        </div>
                        <Badge variant="outline">Active</Badge>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      Manage Schedule
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