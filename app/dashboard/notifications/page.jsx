"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { 
  Bell, 
  BellRing, 
  Check, 
  Clock, 
  Mail, 
  AlertCircle,
  Info,
  CheckCircle,
  X,
  Search,
  Filter,
  Calendar,
  Building,
  Users,
  Award,
  FileText,
  MessageSquare,
  Settings
} from "lucide-react"

const notifications = [
  {
    id: 1,
    type: "application",
    title: "Application Status Update",
    message: "Your application for 'Financial Analyst Intern' at Investment Bank Corp has been accepted!",
    timestamp: "2024-01-15T10:30:00Z",
    read: false,
    priority: "high",
    category: "Applications",
    actionUrl: "/dashboard/applications",
    sender: {
      name: "Investment Bank Corp",
      avatar: "/company1.jpg"
    }
  },
  {
    id: 2,
    type: "internship",
    title: "Internship Starting Soon",
    message: "Your internship 'Data Science Intern' at Analytics Corp starts in 3 days. Make sure you're prepared!",
    timestamp: "2024-01-14T15:45:00Z",
    read: false,
    priority: "medium",
    category: "Internships",
    actionUrl: "/dashboard/internships",
    sender: {
      name: "Analytics Corp",
      avatar: "/company2.jpg"
    }
  },
  {
    id: 3,
    type: "message",
    title: "New Message from Mentor",
    message: "Dr. Rajesh Kumar has sent you a message regarding your progress report.",
    timestamp: "2024-01-14T09:20:00Z",
    read: true,
    priority: "medium",
    category: "Messages",
    actionUrl: "/dashboard/messages",
    sender: {
      name: "Dr. Rajesh Kumar",
      avatar: "/mentor1.jpg"
    }
  },
  {
    id: 4,
    type: "system",
    title: "Profile Completion Reminder",
    message: "Complete your profile to increase your chances of getting selected for internships.",
    timestamp: "2024-01-13T14:10:00Z",
    read: true,
    priority: "low",
    category: "Profile",
    actionUrl: "/dashboard/profile",
    sender: {
      name: "InterSeva System",
      avatar: "/system.jpg"
    }
  },
  {
    id: 5,
    type: "opportunity",
    title: "New Internship Opportunity",
    message: "5 new internships matching your profile have been posted. Check them out now!",
    timestamp: "2024-01-13T11:30:00Z",
    read: true,
    priority: "medium",
    category: "Opportunities",
    actionUrl: "/internships",
    sender: {
      name: "InterSeva System",
      avatar: "/system.jpg"
    }
  },
  {
    id: 6,
    type: "deadline",
    title: "Application Deadline Approaching",
    message: "The deadline for 'Software Engineering Intern' at Tech Corp is in 2 days.",
    timestamp: "2024-01-12T16:00:00Z",
    read: false,
    priority: "high",
    category: "Deadlines",
    actionUrl: "/internships",
    sender: {
      name: "Tech Corp",
      avatar: "/company3.jpg"
    }
  },
  {
    id: 7,
    type: "achievement",
    title: "Milestone Achieved",
    message: "Congratulations! You have completed 25% of your current internship.",
    timestamp: "2024-01-12T10:15:00Z",
    read: true,
    priority: "low",
    category: "Achievements",
    actionUrl: "/dashboard/internships",
    sender: {
      name: "InterSeva System",
      avatar: "/system.jpg"
    }
  },
  {
    id: 8,
    type: "feedback",
    title: "New Feedback Received",
    message: "Your mentor has provided feedback on your latest project submission.",
    timestamp: "2024-01-11T13:45:00Z",
    read: true,
    priority: "medium",
    category: "Feedback",
    actionUrl: "/dashboard/internships",
    sender: {
      name: "Priya Sharma",
      avatar: "/mentor2.jpg"
    }
  }
]

const categories = [
  "All",
  "Applications",
  "Internships", 
  "Messages",
  "Opportunities",
  "Deadlines",
  "Achievements",
  "Feedback",
  "Profile"
]

export default function NotificationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [showUnreadOnly, setShowUnreadOnly] = useState(false)

  const getNotificationIcon = (type) => {
    switch (type) {
      case "application":
        return <FileText className="h-5 w-5 text-blue-500" />
      case "internship":
        return <Building className="h-5 w-5 text-green-500" />
      case "message":
        return <MessageSquare className="h-5 w-5 text-purple-500" />
      case "system":
        return <Settings className="h-5 w-5 text-gray-500" />
      case "opportunity":
        return <Award className="h-5 w-5 text-orange-500" />
      case "deadline":
        return <Clock className="h-5 w-5 text-red-500" />
      case "achievement":
        return <Award className="h-5 w-5 text-yellow-500" />
      case "feedback":
        return <MessageSquare className="h-5 w-5 text-indigo-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "border-l-red-500 bg-red-50 dark:bg-red-950"
      case "medium":
        return "border-l-yellow-500 bg-yellow-50 dark:bg-yellow-950"
      case "low":
        return "border-l-green-500 bg-green-50 dark:bg-green-950"
      default:
        return "border-l-gray-500 bg-gray-50 dark:bg-gray-950"
    }
  }

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) {
      return "Today"
    } else if (diffDays === 2) {
      return "Yesterday"
    } else if (diffDays <= 7) {
      return `${diffDays - 1} days ago`
    } else {
      return date.toLocaleDateString()
    }
  }

  const filteredNotifications = notifications.filter(notification => {
    const matchesCategory = selectedCategory === "All" || notification.category === selectedCategory
    const matchesSearch = notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesReadStatus = !showUnreadOnly || !notification.read
    
    return matchesCategory && matchesSearch && matchesReadStatus
  })

  const unreadCount = notifications.filter(n => !n.read).length
  const todayCount = notifications.filter(n => {
    const date = new Date(n.timestamp)
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }).length

  const markAsRead = (id) => {
    // In a real app, this would make an API call
    console.log(`Marking notification ${id} as read`)
  }

  const markAllAsRead = () => {
    // In a real app, this would make an API call
    console.log("Marking all notifications as read")
  }

  const deleteNotification = (id) => {
    // In a real app, this would make an API call
    console.log(`Deleting notification ${id}`)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <DashboardSidebar />

        <main className="flex-1 lg:ml-0">
          <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8 mt-12 lg:mt-0">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-foreground mb-2">Notifications</h1>
                  <p className="text-muted-foreground">Stay updated with your internship journey</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" onClick={markAllAsRead}>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Mark All Read
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Unread</p>
                      <p className="text-2xl font-bold">{unreadCount}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center">
                      <BellRing className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Today</p>
                      <p className="text-2xl font-bold">{todayCount}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total</p>
                      <p className="text-2xl font-bold">{notifications.length}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                      <Bell className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Search */}
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search notifications..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>

                  {/* Show Unread Only */}
                  <Button
                    variant={showUnreadOnly ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowUnreadOnly(!showUnreadOnly)}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Unread Only
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Notifications List */}
            <div className="space-y-4">
              {filteredNotifications.length > 0 ? (
                filteredNotifications.map((notification) => (
                  <Card 
                    key={notification.id} 
                    className={`border-l-4 ${getPriorityColor(notification.priority)} ${
                      !notification.read ? 'ring-2 ring-blue-500 ring-opacity-20' : ''
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        {/* Icon */}
                        <div className="flex-shrink-0 mt-1">
                          {getNotificationIcon(notification.type)}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className={`font-semibold ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                                {notification.title}
                                {!notification.read && (
                                  <Badge className="ml-2 bg-blue-500 text-white">New</Badge>
                                )}
                              </h3>
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                                <span>{notification.sender.name}</span>
                                <span>•</span>
                                <span>{formatTimestamp(notification.timestamp)}</span>
                                <span>•</span>
                                <Badge variant="outline" className="text-xs">
                                  {notification.category}
                                </Badge>
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center space-x-2">
                              {!notification.read && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => deleteNotification(notification.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-4">
                            {notification.message}
                          </p>

                          {/* Action Button */}
                          {notification.actionUrl && (
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          )}
                        </div>

                        {/* Sender Avatar */}
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={notification.sender.avatar} />
                          <AvatarFallback>
                            {notification.sender.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No Notifications Found</h3>
                    <p className="text-muted-foreground">
                      {searchQuery || selectedCategory !== "All" || showUnreadOnly
                        ? "Try adjusting your filters to see more notifications."
                        : "You're all caught up! New notifications will appear here."}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Load More */}
            {filteredNotifications.length > 0 && (
              <div className="mt-8 text-center">
                <Button variant="outline">
                  Load More Notifications
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}