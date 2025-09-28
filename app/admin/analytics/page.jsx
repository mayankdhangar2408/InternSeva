"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  TrendingDown,
  Users, 
  Building2, 
  FileText, 
  CheckCircle,
  Clock,
  XCircle,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  PieChart,
  Calendar,
  Award
} from "lucide-react"

export default function AdminAnalyticsPage() {
  const chartData = [
    { month: "Jan", applications: 145, approved: 89, rejected: 34 },
    { month: "Feb", applications: 178, approved: 112, rejected: 45 },
    { month: "Mar", applications: 203, approved: 134, rejected: 52 },
    { month: "Apr", applications: 167, approved: 98, rejected: 48 },
    { month: "May", applications: 189, approved: 126, rejected: 41 },
    { month: "Jun", applications: 234, approved: 156, rejected: 58 }
  ]

  const topCompanies = [
    { name: "Tech Solutions Pvt Ltd", applications: 145, success_rate: 78 },
    { name: "Analytics Corp", applications: 98, success_rate: 82 },
    { name: "Investment Bank Corp", applications: 87, success_rate: 65 },
    { name: "Digital Agency", applications: 76, success_rate: 71 },
    { name: "Creative Studio", applications: 65, success_rate: 85 }
  ]

  const skillDemand = [
    { skill: "JavaScript", demand: 95, change: "+12%" },
    { skill: "Python", demand: 88, change: "+8%" },
    { skill: "React", demand: 82, change: "+15%" },
    { skill: "Data Science", demand: 79, change: "+22%" },
    { skill: "Digital Marketing", demand: 71, change: "+5%" },
    { skill: "UI/UX Design", demand: 68, change: "+18%" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <AdminSidebar />

        <main className="flex-1 lg:ml-64">
          <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8 mt-12 lg:mt-0">
              <h1 className="text-2xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
              <p className="text-muted-foreground">Comprehensive insights into internship program performance</p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Total Applications</p>
                      <p className="text-2xl font-bold">2,847</p>
                      <div className="flex items-center space-x-1">
                        <ArrowUpRight className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium text-green-600">+18%</span>
                        <span className="text-sm text-muted-foreground">vs last month</span>
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                      <p className="text-2xl font-bold">74.2%</p>
                      <div className="flex items-center space-x-1">
                        <ArrowUpRight className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium text-green-600">+5%</span>
                        <span className="text-sm text-muted-foreground">vs last month</span>
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                      <p className="text-2xl font-bold">1,247</p>
                      <div className="flex items-center space-x-1">
                        <ArrowUpRight className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium text-green-600">+12%</span>
                        <span className="text-sm text-muted-foreground">vs last month</span>
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                      <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Avg. Response Time</p>
                      <p className="text-2xl font-bold">2.4 days</p>
                      <div className="flex items-center space-x-1">
                        <ArrowDownRight className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium text-green-600">-15%</span>
                        <span className="text-sm text-muted-foreground">vs last month</span>
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Application Trends */}
              <div className="xl:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5" />
                      <span>Application Trends</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {chartData.map((data, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">{data.month}</span>
                            <span className="text-muted-foreground">{data.applications} applications</span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <span>Approved: {data.approved}</span>
                              <span>Rejected: {data.rejected}</span>
                            </div>
                            <Progress value={(data.approved / data.applications) * 100} className="h-2" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Top Performing Companies */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Award className="h-5 w-5" />
                      <span>Top Companies</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topCompanies.map((company, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                                {index + 1}
                              </div>
                              <div>
                                <p className="font-medium text-sm">{company.name}</p>
                                <p className="text-xs text-muted-foreground">{company.applications} applications</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {company.success_rate}%
                            </Badge>
                          </div>
                          <Progress value={company.success_rate} className="h-1" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Skill Demand */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5" />
                      <span>Skill Demand</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {skillDemand.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{skill.skill}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-green-600">{skill.change}</span>
                              <Badge variant="outline" className="text-xs">
                                {skill.demand}%
                              </Badge>
                            </div>
                          </div>
                          <Progress value={skill.demand} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Status Distribution */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Approved Applications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-600">1,847</p>
                      <p className="text-sm text-muted-foreground">Total approved</p>
                    </div>
                    <Progress value={74} className="h-3" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Success Rate</span>
                      <span>74%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-yellow-500" />
                    <span>Pending Applications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-yellow-600">456</p>
                      <p className="text-sm text-muted-foreground">Awaiting review</p>
                    </div>
                    <Progress value={16} className="h-3" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Pending Rate</span>
                      <span>16%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <XCircle className="h-5 w-5 text-red-500" />
                    <span>Rejected Applications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-red-600">278</p>
                      <p className="text-sm text-muted-foreground">Not selected</p>
                    </div>
                    <Progress value={10} className="h-3" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Rejection Rate</span>
                      <span>10%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}