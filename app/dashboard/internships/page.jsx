"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Calendar, 
  MapPin, 
  Building, 
  Clock, 
  Users,
  Star,
  Award,
  FileText,
  Mail,
  Phone,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Play
} from "lucide-react"

const activeInternships = [
  {
    id: 1,
    title: "Financial Analyst Intern",
    company: "Investment Bank Corp",
    department: "Risk Management",
    location: "Delhi",
    startDate: "2024-02-01",
    endDate: "2025-01-31",
    duration: "12 months",
    status: "active",
    progress: 25,
    salary: "₹30,000/month",
    mentor: {
      name: "Dr. Rajesh Kumar",
      designation: "Senior Financial Analyst",
      email: "rajesh.kumar@ibc.com",
      phone: "+91 98765 43210",
      avatar: "/mentor1.jpg"
    },
    description: "Working on risk assessment models and financial data analysis for the investment banking division.",
    tasks: [
      { id: 1, name: "Complete orientation program", completed: true, dueDate: "2024-02-05" },
      { id: 2, name: "Financial modeling training", completed: true, dueDate: "2024-02-15" },
      { id: 3, name: "Risk assessment project", completed: false, dueDate: "2024-03-01" },
      { id: 4, name: "Client presentation preparation", completed: false, dueDate: "2024-03-15" }
    ],
    rating: 4.5,
    feedback: "Excellent analytical skills and quick learner. Shows great potential in financial modeling.",
    weeklyHours: 40,
    completedHours: 320
  }
]

const completedInternships = [
  {
    id: 2,
    title: "Software Development Intern",
    company: "Tech Solutions Pvt Ltd",
    department: "Web Development",
    location: "Bangalore",
    startDate: "2023-06-01",
    endDate: "2023-11-30",
    duration: "6 months",
    status: "completed",
    salary: "₹25,000/month",
    rating: 4.8,
    certificate: "Available",
    mentor: {
      name: "Priya Sharma",
      designation: "Senior Software Engineer",
      email: "priya.sharma@techsol.com"
    },
    description: "Developed web applications using React and Node.js. Contributed to 3 major projects.",
    achievements: [
      "Completed 3 full-stack web applications",
      "Improved application performance by 30%",
      "Received 'Outstanding Intern' award",
      "Contributed to open-source projects"
    ],
    skills: ["React", "Node.js", "MongoDB", "JavaScript", "Git"],
    finalRating: 4.8,
    recommendation: "Highly recommended for future opportunities. Exceptional technical skills and team collaboration."
  }
]

const upcomingInternships = [
  {
    id: 3,
    title: "Data Science Intern",
    company: "Analytics Corp",
    department: "Machine Learning",
    location: "Hyderabad",
    startDate: "2024-04-01",
    endDate: "2024-09-30",
    duration: "6 months",
    status: "upcoming",
    salary: "₹28,000/month",
    description: "Will work on machine learning models and data visualization projects.",
    preparationTasks: [
      "Complete Python refresher course",
      "Review machine learning fundamentals",
      "Prepare development environment",
      "Connect with mentor"
    ]
  }
]

export default function MyInternshipsPage() {
  const [activeTab, setActiveTab] = useState("active")

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const calculateDaysRemaining = (endDate) => {
    const end = new Date(endDate)
    const today = new Date()
    const diffTime = end - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const renderActiveInternships = () => (
    <div className="space-y-6">
      {activeInternships.map((internship) => (
        <Card key={internship.id} className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-xl mb-2">{internship.title}</CardTitle>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Building className="h-4 w-4" />
                    <span>{internship.company}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{internship.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(internship.startDate)} - {formatDate(internship.endDate)}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 mb-2">
                  Active
                </Badge>
                <p className="text-sm text-muted-foreground">
                  {calculateDaysRemaining(internship.endDate)} days remaining
                </p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Info */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{internship.description}</p>
                </div>

                {/* Progress */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Progress</h3>
                    <span className="text-sm text-muted-foreground">{internship.progress}% Complete</span>
                  </div>
                  <Progress value={internship.progress} className="mb-2" />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{internship.completedHours} hours completed</span>
                    <span>{internship.weeklyHours} hours/week</span>
                  </div>
                </div>

                {/* Tasks */}
                <div>
                  <h3 className="font-semibold mb-3">Current Tasks</h3>
                  <div className="space-y-2">
                    {internship.tasks.map((task) => (
                      <div key={task.id} className="flex items-center space-x-3 p-3 rounded-lg border">
                        {task.completed ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-yellow-500" />
                        )}
                        <div className="flex-1">
                          <p className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                            {task.name}
                          </p>
                          <p className="text-sm text-muted-foreground">Due: {formatDate(task.dueDate)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Mentor Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Mentor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-3 mb-4">
                      <Avatar>
                        <AvatarImage src={internship.mentor.avatar} />
                        <AvatarFallback>{internship.mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{internship.mentor.name}</p>
                        <p className="text-sm text-muted-foreground">{internship.mentor.designation}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Salary</span>
                      <span className="font-medium">{internship.salary}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">{internship.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Rating</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{internship.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Actions */}
                <div className="space-y-2">
                  <Button className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Submit Report
                  </Button>
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Company Portal
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const renderCompletedInternships = () => (
    <div className="space-y-6">
      {completedInternships.map((internship) => (
        <Card key={internship.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-xl mb-2">{internship.title}</CardTitle>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Building className="h-4 w-4" />
                    <span>{internship.company}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(internship.startDate)} - {formatDate(internship.endDate)}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  Completed
                </Badge>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{internship.finalRating}</span>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Achievements</h3>
                <ul className="space-y-2">
                  {internship.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Award className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Skills Gained</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {internship.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">{skill}</Badge>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Certificate
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Recommendation
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const renderUpcomingInternships = () => (
    <div className="space-y-6">
      {upcomingInternships.map((internship) => (
        <Card key={internship.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-xl mb-2">{internship.title}</CardTitle>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Building className="h-4 w-4" />
                    <span>{internship.company}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Starts {formatDate(internship.startDate)}</span>
                  </div>
                </div>
              </div>
              <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
                Upcoming
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground mb-4">{internship.description}</p>
                
                <div className="space-y-2">
                  <p className="font-medium">Salary: {internship.salary}</p>
                  <p className="font-medium">Duration: {internship.duration}</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Preparation Tasks</h3>
                <ul className="space-y-2 mb-4">
                  {internship.preparationTasks.map((task, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Play className="h-4 w-4 text-blue-500 mt-0.5" />
                      <span className="text-sm">{task}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Start Preparation
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <DashboardSidebar />

        <main className="flex-1 lg:ml-0">
          <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8 mt-12 lg:mt-0">
              <h1 className="text-2xl font-bold text-foreground mb-2">My Internships</h1>
              <p className="text-muted-foreground">Track your internship journey and progress</p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active</p>
                      <p className="text-2xl font-bold">{activeInternships.length}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                      <Play className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Completed</p>
                      <p className="text-2xl font-bold">{completedInternships.length}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Upcoming</p>
                      <p className="text-2xl font-bold">{upcomingInternships.length}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Internships Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="active">Active ({activeInternships.length})</TabsTrigger>
                <TabsTrigger value="completed">Completed ({completedInternships.length})</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming ({upcomingInternships.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="mt-6">
                {activeInternships.length > 0 ? renderActiveInternships() : (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No Active Internships</h3>
                      <p className="text-muted-foreground">You don't have any active internships at the moment.</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="completed" className="mt-6">
                {completedInternships.length > 0 ? renderCompletedInternships() : (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No Completed Internships</h3>
                      <p className="text-muted-foreground">Your completed internships will appear here.</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="upcoming" className="mt-6">
                {upcomingInternships.length > 0 ? renderUpcomingInternships() : (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No Upcoming Internships</h3>
                      <p className="text-muted-foreground">Your upcoming internships will appear here.</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}