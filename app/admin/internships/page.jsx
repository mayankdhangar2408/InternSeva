"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  Eye,
  Plus,
  Download,
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  Building2,
  Briefcase,
  TrendingUp
} from "lucide-react"

const internships = [
  {
    id: 1,
    title: "Software Development Intern",
    company: "Tech Solutions Pvt Ltd",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    duration: "6 months",
    salary: "₹25,000/month",
    status: "active",
    applicants: 45,
    selected: 3,
    deadline: "2024-02-15",
    postedDate: "2024-01-10",
    requirements: "React, Node.js, JavaScript",
    description: "Work on cutting-edge web applications using modern technologies.",
    category: "Technology"
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "Analytics Corp",
    department: "Data Science",
    location: "Mumbai, India", 
    type: "Full-time",
    duration: "4 months",
    salary: "₹28,000/month",
    status: "active",
    applicants: 32,
    selected: 2,
    deadline: "2024-02-20",
    postedDate: "2024-01-12",
    requirements: "Python, Machine Learning, Statistics",
    description: "Analyze large datasets and build predictive models.",
    category: "Data Science"
  },
  {
    id: 3,
    title: "Financial Analyst Intern",
    company: "Investment Bank Corp",
    department: "Finance",
    location: "Delhi, India",
    type: "Full-time", 
    duration: "12 months",
    salary: "₹30,000/month",
    status: "closed",
    applicants: 28,
    selected: 1,
    deadline: "2024-01-30",
    postedDate: "2024-01-05",
    requirements: "Finance, Excel, SQL",
    description: "Support investment analysis and risk assessment.",
    category: "Finance"
  },
  {
    id: 4,
    title: "Marketing Intern",
    company: "Digital Agency",
    department: "Marketing",
    location: "Pune, India",
    type: "Part-time",
    duration: "3 months",
    salary: "₹15,000/month",
    status: "draft",
    applicants: 0,
    selected: 0,
    deadline: "2024-03-01",
    postedDate: "2024-01-20",
    requirements: "Digital Marketing, Social Media",
    description: "Assist in digital marketing campaigns and content creation.",
    category: "Marketing"
  },
  {
    id: 5,
    title: "UX Design Intern",
    company: "Creative Studio",
    department: "Design",
    location: "Hyderabad, India",
    type: "Full-time",
    duration: "6 months", 
    salary: "₹22,000/month",
    status: "active",
    applicants: 18,
    selected: 1,
    deadline: "2024-02-25",
    postedDate: "2024-01-15",
    requirements: "Figma, Adobe XD, User Research",
    description: "Design user interfaces and improve user experience.",
    category: "Design"
  }
]

const statusOptions = [
  { value: "all", label: "All Status" },
  { value: "active", label: "Active" },
  { value: "closed", label: "Closed" }, 
  { value: "draft", label: "Draft" }
]

const categoryOptions = [
  { value: "all", label: "All Categories" },
  { value: "Technology", label: "Technology" },
  { value: "Finance", label: "Finance" },
  { value: "Marketing", label: "Marketing" },
  { value: "Design", label: "Design" },
  { value: "Data Science", label: "Data Science" }
]

export default function AdminInternshipsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [selectedTab, setSelectedTab] = useState("all")

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "closed":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "draft":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4" />
      case "closed":
        return <XCircle className="h-4 w-4" />
      case "draft":
        return <Clock className="h-4 w-4" />
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

  const getDaysUntilDeadline = (deadline) => {
    const today = new Date()
    const deadlineDate = new Date(deadline)
    const diffTime = deadlineDate - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         internship.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || internship.status === statusFilter
    const matchesCategory = categoryFilter === "all" || internship.category === categoryFilter
    const matchesTab = selectedTab === "all" || internship.status === selectedTab
    
    return matchesSearch && matchesStatus && matchesCategory && matchesTab
  })

  const totalInternships = internships.length
  const activeInternships = internships.filter(i => i.status === "active").length
  const closedInternships = internships.filter(i => i.status === "closed").length
  const draftInternships = internships.filter(i => i.status === "draft").length
  const totalApplications = internships.reduce((sum, i) => sum + i.applicants, 0)

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
                  <h1 className="text-2xl font-bold text-foreground mb-2">Internships Management</h1>
                  <p className="text-muted-foreground">Manage and monitor all internship opportunities</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Internship
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Internships</p>
                      <p className="text-2xl font-bold">{totalInternships}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <Briefcase className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active</p>
                      <p className="text-2xl font-bold">{activeInternships}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Applications</p>
                      <p className="text-2xl font-bold">{totalApplications}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                      <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                      <p className="text-2xl font-bold">74%</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search internships by title, company, or location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {statusOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                      <SelectTrigger className="w-[160px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categoryOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Internships Tabs */}
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All ({totalInternships})</TabsTrigger>
                <TabsTrigger value="active">Active ({activeInternships})</TabsTrigger>
                <TabsTrigger value="closed">Closed ({closedInternships})</TabsTrigger>
                <TabsTrigger value="draft">Draft ({draftInternships})</TabsTrigger>
              </TabsList>

              <TabsContent value={selectedTab} className="mt-6">
                <div className="space-y-4">
                  {filteredInternships.length > 0 ? (
                    filteredInternships.map((internship) => (
                      <Card key={internship.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <div className="flex items-center space-x-3 mb-2">
                                    <h3 className="text-lg font-semibold text-foreground">{internship.title}</h3>
                                    <Badge className={getStatusColor(internship.status)}>
                                      <span className="flex items-center space-x-1">
                                        {getStatusIcon(internship.status)}
                                        <span className="capitalize">{internship.status}</span>
                                      </span>
                                    </Badge>
                                    <Badge variant="outline">{internship.category}</Badge>
                                    {internship.status === "active" && getDaysUntilDeadline(internship.deadline) <= 7 && (
                                      <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                                        Deadline Soon
                                      </Badge>
                                    )}
                                  </div>
                                  
                                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                                    <div className="flex items-center space-x-1">
                                      <Building2 className="h-4 w-4" />
                                      <span>{internship.company}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <MapPin className="h-4 w-4" />
                                      <span>{internship.location}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <Clock className="h-4 w-4" />
                                      <span>{internship.duration}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <DollarSign className="h-4 w-4" />
                                      <span>{internship.salary}</span>
                                    </div>
                                  </div>

                                  <p className="text-sm text-muted-foreground mb-3">{internship.description}</p>
                                  
                                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                    <div className="flex items-center space-x-1">
                                      <Users className="h-4 w-4" />
                                      <span>{internship.applicants} applicants</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <CheckCircle className="h-4 w-4" />
                                      <span>{internship.selected} selected</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <Calendar className="h-4 w-4" />
                                      <span>Deadline: {formatDate(internship.deadline)}</span>
                                    </div>
                                    {internship.status === "active" && (
                                      <span className="font-medium">
                                        {getDaysUntilDeadline(internship.deadline)} days left
                                      </span>
                                    )}
                                  </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center space-x-2">
                                  <Button variant="ghost" size="sm">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                              
                              {/* Requirements */}
                              <div className="border-t pt-3">
                                <p className="text-sm text-muted-foreground mb-2">Requirements:</p>
                                <div className="flex flex-wrap gap-2">
                                  {internship.requirements.split(", ").map((req, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                      {req}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <Card>
                      <CardContent className="p-12 text-center">
                        <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No Internships Found</h3>
                        <p className="text-muted-foreground">
                          No internships match your current filters. Try adjusting your search criteria.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}