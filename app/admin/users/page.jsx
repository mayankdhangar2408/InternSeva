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
  UserPlus,
  Download,
  Mail,
  Phone,
  Calendar,
  MapPin,
  GraduationCap,
  Building2,
  CheckCircle,
  XCircle,
  Clock,
  Shield,
  User
} from "lucide-react"

const users = [
  {
    id: 1,
    firstName: "Priya",
    lastName: "Sharma", 
    email: "priya.sharma@email.com",
    phone: "+91 98765 43210",
    role: "user",
    status: "active",
    joinDate: "2024-01-15",
    location: "Mumbai, India",
    education: "Bachelor's Degree",
    appliedInternships: 3,
    activeInternships: 1,
    avatar: "/user1.jpg"
  },
  {
    id: 2,
    firstName: "Rahul",
    lastName: "Kumar",
    email: "rahul.kumar@email.com", 
    phone: "+91 87654 32109",
    role: "user",
    status: "active",
    joinDate: "2024-01-10",
    location: "Delhi, India",
    education: "Master's Degree",
    appliedInternships: 5,
    activeInternships: 2,
    avatar: "/user2.jpg"
  },
  {
    id: 3,
    firstName: "Admin",
    lastName: "User",
    email: "admin@internseva.com",
    phone: "+91 76543 21098",
    role: "admin", 
    status: "active",
    joinDate: "2023-12-01",
    location: "Bangalore, India",
    education: "PhD",
    appliedInternships: 0,
    activeInternships: 0,
    avatar: "/admin1.jpg"
  },
  {
    id: 4,
    firstName: "Anita",
    lastName: "Patel",
    email: "anita.patel@email.com",
    phone: "+91 65432 10987",
    role: "user",
    status: "inactive",
    joinDate: "2024-01-05",
    location: "Pune, India",
    education: "Diploma",
    appliedInternships: 1,
    activeInternships: 0,
    avatar: "/user3.jpg"
  },
  {
    id: 5,
    firstName: "Vikram",  
    lastName: "Singh",
    email: "vikram.singh@email.com",
    phone: "+91 54321 09876",
    role: "user",
    status: "pending",
    joinDate: "2024-01-20",
    location: "Chennai, India",
    education: "Bachelor's Degree",
    appliedInternships: 2,
    activeInternships: 0,
    avatar: "/user4.jpg"
  }
]

const filterOptions = [
  { value: "all", label: "All Users" },
  { value: "user", label: "Students" },
  { value: "admin", label: "Administrators" }
]

const statusOptions = [
  { value: "all", label: "All Status" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "pending", label: "Pending" }
]

export default function AdminUsersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedTab, setSelectedTab] = useState("all")

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "inactive":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4" />
      case "inactive":
        return <XCircle className="h-4 w-4" />
      case "pending":
        return <Clock className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const getRoleIcon = (role) => {
    return role === "admin" ? <Shield className="h-4 w-4" /> : <User className="h-4 w-4" />
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = roleFilter === "all" || user.role === roleFilter
    const matchesStatus = statusFilter === "all" || user.status === statusFilter
    const matchesTab = selectedTab === "all" || user.role === selectedTab
    
    return matchesSearch && matchesRole && matchesStatus && matchesTab
  })

  const totalUsers = users.length
  const activeUsers = users.filter(u => u.status === "active").length
  const studentUsers = users.filter(u => u.role === "user").length
  const adminUsers = users.filter(u => u.role === "admin").length

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
                  <h1 className="text-2xl font-bold text-foreground mb-2">Users Management</h1>
                  <p className="text-muted-foreground">Manage and monitor all registered users</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button>
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add User
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
                      <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                      <p className="text-2xl font-bold">{totalUsers}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                      <p className="text-2xl font-bold">{activeUsers}</p>
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
                      <p className="text-sm font-medium text-muted-foreground">Students</p>
                      <p className="text-2xl font-bold">{studentUsers}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                      <GraduationCap className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Administrators</p>
                      <p className="text-2xl font-bold">{adminUsers}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                      <Shield className="h-4 w-4 text-orange-600 dark:text-orange-400" />
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
                        placeholder="Search users by name or email..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Select value={roleFilter} onValueChange={setRoleFilter}>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {filterOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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

            {/* Users Tabs */}
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All Users ({totalUsers})</TabsTrigger>
                <TabsTrigger value="user">Students ({studentUsers})</TabsTrigger>
                <TabsTrigger value="admin">Admins ({adminUsers})</TabsTrigger>
              </TabsList>

              <TabsContent value={selectedTab} className="mt-6">
                <div className="space-y-4">
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <Card key={user.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            {/* Avatar */}
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={user.avatar} />
                              <AvatarFallback>{user.firstName[0]}{user.lastName[0]}</AvatarFallback>
                            </Avatar>

                            {/* User Info */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between">
                                <div className="space-y-1">
                                  <div className="flex items-center space-x-2">
                                    <h3 className="font-semibold text-foreground">
                                      {user.firstName} {user.lastName}
                                    </h3>
                                    <Badge variant="outline" className="flex items-center space-x-1">
                                      {getRoleIcon(user.role)}
                                      <span className="capitalize">{user.role}</span>
                                    </Badge>
                                    <Badge className={getStatusColor(user.status)}>
                                      <span className="flex items-center space-x-1">
                                        {getStatusIcon(user.status)}
                                        <span className="capitalize">{user.status}</span>
                                      </span>
                                    </Badge>
                                  </div>
                                  
                                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                    <div className="flex items-center space-x-1">
                                      <Mail className="h-4 w-4" />
                                      <span>{user.email}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <Phone className="h-4 w-4" />
                                      <span>{user.phone}</span>
                                    </div>
                                  </div>

                                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                    <div className="flex items-center space-x-1">
                                      <MapPin className="h-4 w-4" />
                                      <span>{user.location}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <GraduationCap className="h-4 w-4" />
                                      <span>{user.education}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <Calendar className="h-4 w-4" />
                                      <span>Joined {formatDate(user.joinDate)}</span>
                                    </div>
                                  </div>

                                  {user.role === "user" && (
                                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                      <div className="flex items-center space-x-1">
                                        <Building2 className="h-4 w-4" />
                                        <span>{user.appliedInternships} Applications</span>
                                      </div>
                                      <div className="flex items-center space-x-1">
                                        <CheckCircle className="h-4 w-4" />
                                        <span>{user.activeInternships} Active</span>
                                      </div>
                                    </div>
                                  )}
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
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <Card>
                      <CardContent className="p-12 text-center">
                        <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No Users Found</h3>
                        <p className="text-muted-foreground">
                          No users match your current filters. Try adjusting your search criteria.
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