"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  MessageSquare, 
  Send, 
  Search,
  Filter,
  MoreHorizontal,
  Reply,
  Forward,
  Archive,
  Trash2,
  Star,
  Clock,
  User,
  Users,
  Building2
} from "lucide-react"

const messages = [
  {
    id: 1,
    from: "Priya Sharma",
    fromEmail: "priya.sharma@email.com",
    fromAvatar: "/user1.jpg",
    to: "Admin",
    subject: "Question about internship application",
    message: "Hi, I have a question about my application status for the Software Development Intern position at Tech Solutions. Could you please provide an update?",
    timestamp: "2024-01-15T14:30:00Z",
    status: "unread",
    type: "support",
    internshipTitle: "Software Development Intern",
    company: "Tech Solutions"
  },
  {
    id: 2,
    from: "Tech Solutions HR",
    fromEmail: "hr@techsolutions.com",
    fromAvatar: "/company1.jpg",
    to: "Admin",
    subject: "Update on intern selection process",
    message: "We have completed the interview process for the Software Development Intern position. Please find the selection results attached.",
    timestamp: "2024-01-14T11:20:00Z",
    status: "read",
    type: "company",
    internshipTitle: "Software Development Intern",
    company: "Tech Solutions"
  },
  {
    id: 3,
    from: "Rahul Kumar",
    fromEmail: "rahul.kumar@email.com",
    fromAvatar: "/user2.jpg",
    to: "Admin",
    subject: "Technical issue with application portal",
    message: "I'm experiencing difficulties uploading my resume to the application portal. The file upload seems to be failing consistently.",
    timestamp: "2024-01-13T16:45:00Z",
    status: "unread",
    type: "technical",
    internshipTitle: null,
    company: null
  },
  {
    id: 4,
    from: "Analytics Corp",
    fromEmail: "contact@analyticscorp.com",
    fromAvatar: "/company2.jpg",
    to: "Admin",
    subject: "New internship opportunity submission",
    message: "We would like to post a new Data Science Internship opportunity. Please review the attached details and let us know if you need any additional information.",
    timestamp: "2024-01-12T09:15:00Z",
    status: "read",
    type: "company",
    internshipTitle: "Data Science Intern",
    company: "Analytics Corp"
  }
]

export default function AdminMessagesPage() {
  const getMessageTypeColor = (type) => {
    switch (type) {
      case "support":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "company":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "technical":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getMessageTypeIcon = (type) => {
    switch (type) {
      case "support":
        return <User className="h-4 w-4" />
      case "company":
        return <Building2 className="h-4 w-4" />
      case "technical":
        return <MessageSquare className="h-4 w-4" />
      default:
        return <MessageSquare className="h-4 w-4" />
    }
  }

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const unreadCount = messages.filter(m => m.status === "unread").length

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
                  <h1 className="text-2xl font-bold text-foreground mb-2">Messages</h1>
                  <p className="text-muted-foreground">Manage communications with students and companies</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">
                    {unreadCount} unread
                  </Badge>
                  <Button>
                    <Send className="h-4 w-4 mr-2" />
                    Compose
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
                      <p className="text-sm font-medium text-muted-foreground">Total Messages</p>
                      <p className="text-2xl font-bold">{messages.length}</p>
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
                      <p className="text-sm font-medium text-muted-foreground">Unread</p>
                      <p className="text-2xl font-bold">{unreadCount}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">From Students</p>
                      <p className="text-2xl font-bold">{messages.filter(m => m.type === "support" || m.type === "technical").length}</p>
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
                      <p className="text-sm font-medium text-muted-foreground">From Companies</p>
                      <p className="text-2xl font-bold">{messages.filter(m => m.type === "company").length}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Messages List */}
            <Card>
              <CardHeader>
                <CardTitle>All Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`p-4 rounded-lg border transition-colors hover:bg-muted/50 ${
                      message.status === "unread" ? "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800" : ""
                    }`}>
                      <div className="flex items-start space-x-4">
                        {/* Avatar */}
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={message.fromAvatar} />
                          <AvatarFallback>{message.from.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>

                        {/* Message Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="flex items-center space-x-2 mb-1">
                                <h3 className="font-semibold text-foreground">{message.from}</h3>
                                <Badge className={getMessageTypeColor(message.type)}>
                                  <span className="flex items-center space-x-1">
                                    {getMessageTypeIcon(message.type)}
                                    <span className="capitalize">{message.type}</span>
                                  </span>
                                </Badge>
                                {message.status === "unread" && (
                                  <Badge className="bg-blue-500 text-white">New</Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">{message.fromEmail}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-muted-foreground">{formatTimestamp(message.timestamp)}</p>
                              <div className="flex items-center space-x-1 mt-1">
                                <Button variant="ghost" size="sm">
                                  <Reply className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Star className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>

                          <h4 className="font-medium text-foreground mb-2">{message.subject}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{message.message}</p>

                          {message.internshipTitle && (
                            <div className="flex items-center space-x-2 text-sm">
                              <Badge variant="outline">{message.internshipTitle}</Badge>
                              <span className="text-muted-foreground">at {message.company}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}