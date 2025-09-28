"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  Eye,
  Download,
  Calendar,
  MapPin,
  Users,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  Building2,
  FileText,
  User,
  Mail,
  Phone,
  GraduationCap,
  Award,
  MessageSquare
} from "lucide-react"

const applications = [
  {
    id: 1,
    studentId: 1,
    studentName: "Priya Sharma",
    studentEmail: "priya.sharma@email.com",
    studentPhone: "+91 98765 43210",
    studentAvatar: "/user1.jpg",
    internshipId: 1,
    internshipTitle: "Software Development Intern",
    company: "Tech Solutions Pvt Ltd",
    location: "Bangalore, India",
    status: "pending",
    appliedDate: "2024-01-15",
    experience: "2 years",
    education: "Bachelor's in Computer Science",
    skills: ["React", "Node.js", "JavaScript", "Python"],
    coverLetter: "I am passionate about software development and excited to contribute to your team...",
    resume: "resume_priya.pdf",
    rating: null,
    notes: ""
  },
  {
    id: 2,
    studentId: 2, 
    studentName: "Rahul Kumar",
    studentEmail: "rahul.kumar@email.com",
    studentPhone: "+91 87654 32109",
    studentAvatar: "/user2.jpg",
    internshipId: 2,
    internshipTitle: "Data Science Intern", 
    company: "Analytics Corp",
    location: "Mumbai, India",
    status: "approved",
    appliedDate: "2024-01-14",
    experience: "1 year",
    education: "Master's in Data Science",
    skills: ["Python", "Machine Learning", "SQL", "Statistics"],
    coverLetter: "My background in data science and passion for analytics makes me a perfect fit...",
    resume: "resume_rahul.pdf",
    rating: 4.5,
    notes: "Excellent technical skills and relevant experience."
  },
  {
    id: 3,
    studentId: 4,
    studentName: "Anita Patel", 
    studentEmail: "anita.patel@email.com",
    studentPhone: "+91 65432 10987",
    studentAvatar: "/user3.jpg",
    internshipId: 4,
    internshipTitle: "Marketing Intern",
    company: "Digital Agency", 
    location: "Pune, India",
    status: "rejected",
    appliedDate: "2024-01-13",
    experience: "0 years",
    education: "Bachelor's in Marketing",
    skills: ["Digital Marketing", "Social Media", "Content Writing"],
    coverLetter: "I am eager to learn and contribute to your marketing team...",
    resume: "resume_anita.pdf",
    rating: 2.5,
    notes: "Lacks relevant experience for the role."
  },
  {
    id: 4,
    studentId: 5,
    studentName: "Vikram Singh",
    studentEmail: "vikram.singh@email.com", 
    studentPhone: "+91 54321 09876",
    studentAvatar: "/user4.jpg",
    internshipId: 3,
    internshipTitle: "Financial Analyst Intern",
    company: "Investment Bank Corp",
    location: "Delhi, India", 
    status: "interview",
    appliedDate: "2024-01-12",
    experience: "1.5 years",
    education: "Bachelor's in Finance",
    skills: ["Finance", "Excel", "SQL", "Financial Modeling"],
    coverLetter: "With my strong analytical background and finance expertise...",
    resume: "resume_vikram.pdf",
    rating: 4.0,
    notes: "Strong candidate, scheduled for final interview."
  },
  {
    id: 5,
    studentId: 1,
    studentName: "Priya Sharma",
    studentEmail: "priya.sharma@email.com",
    studentPhone: "+91 98765 43210", 
    studentAvatar: "/user1.jpg",
    internshipId: 5,
    internshipTitle: "UX Design Intern",
    company: "Creative Studio",
    location: "Hyderabad, India",
    status: "approved",
    appliedDate: "2024-01-11", 
    experience: "2 years",
    education: "Bachelor's in Design",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    coverLetter: "My design background and user-centered approach aligns perfectly...",
    resume: "resume_priya_design.pdf",
    rating: 4.8,
    notes: "Exceptional portfolio and design skills."
  }
]

const statusOptions = [
  { value: "all", label: "All Status" },
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
  { value: "interview", label: "Interview" }
]

export default function AdminApplicationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedTab, setSelectedTab] = useState("all")

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
        return <XCircle className="h-4 w-4" />
      case "pending":
        return <Clock className="h-4 w-4" />
      case "interview":
        return <MessageSquare className="h-4 w-4" />
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

  const getRatingStars = (rating) => {
    if (!rating) return "Not rated";
    return "★".repeat(Math.floor(rating)) + (rating % 1 !== 0 ? "☆" : "") + ` (${rating}/5)`
  }

  const filteredApplications = applications.filter(application => {
    const matchesSearch = application.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         application.internshipTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         application.company.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || application.status === statusFilter
    const matchesTab = selectedTab === "all" || application.status === selectedTab
    
    return matchesSearch && matchesStatus && matchesTab
  })

  const totalApplications = applications.length
  const pendingApplications = applications.filter(a => a.status === "pending").length
  const approvedApplications = applications.filter(a => a.status === "approved").length
  const rejectedApplications = applications.filter(a => a.status === "rejected").length
  const interviewApplications = applications.filter(a => a.status === "interview").length

  const handleStatusChange = (applicationId, newStatus) => {
    console.log(`Changing application ${applicationId} status to ${newStatus}`)
    // In a real app, this would make an API call
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
                  <h1 className="text-2xl font-bold text-foreground mb-2">Applications Management</h1>
                  <p className="text-muted-foreground">Review and manage all internship applications</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total</p>
                      <p className="text-2xl font-bold">{totalApplications}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Pending</p>
                      <p className="text-2xl font-bold">{pendingApplications}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Approved</p>
                      <p className="text-2xl font-bold">{approvedApplications}</p>
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
                      <p className="text-sm font-medium text-muted-foreground">Interview</p>
                      <p className="text-2xl font-bold">{interviewApplications}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Rejected</p>
                      <p className="text-2xl font-bold">{rejectedApplications}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                      <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
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
                        placeholder="Search by student name, internship, or company..."
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
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Applications Tabs */}
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All ({totalApplications})</TabsTrigger>
                <TabsTrigger value="pending">Pending ({pendingApplications})</TabsTrigger>
                <TabsTrigger value="interview">Interview ({interviewApplications})</TabsTrigger>
                <TabsTrigger value="approved">Approved ({approvedApplications})</TabsTrigger>
                <TabsTrigger value="rejected">Rejected ({rejectedApplications})</TabsTrigger>
              </TabsList>

              <TabsContent value={selectedTab} className="mt-6">
                <div className="space-y-4">
                  {filteredApplications.length > 0 ? (
                    filteredApplications.map((application) => (
                      <Card key={application.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            {/* Student Avatar */}
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={application.studentAvatar} />
                              <AvatarFallback>{application.studentName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>

                            {/* Application Info */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-3">
                                <div>
                                  <div className="flex items-center space-x-3 mb-2">
                                    <h3 className="font-semibold text-foreground">{application.studentName}</h3>
                                    <Badge className={getStatusColor(application.status)}>
                                      <span className="flex items-center space-x-1">
                                        {getStatusIcon(application.status)}
                                        <span className="capitalize">{application.status}</span>
                                      </span>
                                    </Badge>
                                    {application.rating && (
                                      <Badge variant="outline">
                                        <Award className="h-3 w-3 mr-1" />
                                        {application.rating}/5
                                      </Badge>
                                    )}
                                  </div>
                                  
                                  <h4 className="font-medium text-foreground mb-1">{application.internshipTitle}</h4>
                                  <p className="text-sm text-muted-foreground mb-2">{application.company} • {application.location}</p>
                                  
                                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                                    <div className="flex items-center space-x-1">
                                      <Mail className="h-4 w-4" />
                                      <span>{application.studentEmail}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <Phone className="h-4 w-4" />
                                      <span>{application.studentPhone}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <Calendar className="h-4 w-4" />
                                      <span>Applied {formatDate(application.appliedDate)}</span>
                                    </div>
                                  </div>

                                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                                    <div className="flex items-center space-x-1">
                                      <GraduationCap className="h-4 w-4" />
                                      <span>{application.education}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <User className="h-4 w-4" />
                                      <span>{application.experience} experience</span>
                                    </div>
                                  </div>

                                  {/* Skills */}
                                  <div className="flex flex-wrap gap-1 mb-3">
                                    {application.skills.slice(0, 4).map((skill, index) => (
                                      <Badge key={index} variant="secondary" className="text-xs">
                                        {skill}
                                      </Badge>
                                    ))}
                                    {application.skills.length > 4 && (
                                      <Badge variant="secondary" className="text-xs">
                                        +{application.skills.length - 4} more
                                      </Badge>
                                    )}
                                  </div>

                                  {/* Cover Letter Preview */}
                                  <p className="text-sm text-muted-foreground mb-3">
                                    {application.coverLetter.substring(0, 100)}...
                                  </p>

                                  {/* Notes */}
                                  {application.notes && (
                                    <div className="bg-muted p-2 rounded text-sm">
                                      <span className="font-medium">Notes: </span>
                                      {application.notes}
                                    </div>
                                  )}
                                </div>

                                {/* Actions */}
                                <div className="flex flex-col space-y-2">
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
                                  
                                  {application.status === "pending" && (
                                    <div className="flex flex-col space-y-1">
                                      <Button 
                                        size="sm" 
                                        className="bg-green-600 hover:bg-green-700"
                                        onClick={() => handleStatusChange(application.id, "approved")}
                                      >
                                        Approve
                                      </Button>
                                      <Button 
                                        size="sm" 
                                        variant="outline"
                                        onClick={() => handleStatusChange(application.id, "interview")}
                                      >
                                        Interview
                                      </Button>
                                      <Button 
                                        size="sm" 
                                        variant="destructive"
                                        onClick={() => handleStatusChange(application.id, "rejected")}
                                      >
                                        Reject
                                      </Button>
                                    </div>
                                  )}
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
                        <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No Applications Found</h3>
                        <p className="text-muted-foreground">
                          No applications match your current filters. Try adjusting your search criteria.
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