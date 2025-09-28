"use client"

import { useState, useEffect } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/contexts/AuthContext"
import { User, Mail, Phone, Calendar, MapPin, GraduationCap, Briefcase, Award, Camera, Github, ExternalLink, Upload, File, Plus, X, FolderOpen, Paperclip, Folder } from "lucide-react"

export default function ProfilePage() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [showAddProject, setShowAddProject] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    technologies: [],
    githubUrl: "",
    liveUrl: "",
    files: []
  })
  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    dateOfBirth: user?.dateOfBirth || "",
    gender: user?.gender || "",
    address: "123 Main Street, New Delhi, India",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110001",
    education: user?.education || "",
    institution: "Delhi University",
    graduationYear: "2024",
    cgpa: "8.5",
    skills: ["JavaScript", "React", "Node.js", "Python", "Data Analysis"],
    bio: "Passionate computer science student with experience in web development and data analysis. Looking to contribute to meaningful projects in government sector.",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    portfolio: "https://johndoe.dev",
    projects: [
      {
        id: 1,
        title: "E-commerce Web Application",
        description: "Full-stack e-commerce platform built with React and Node.js",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        githubUrl: "https://github.com/johndoe/ecommerce-app",
        liveUrl: "https://ecommerce-demo.johndoe.dev",
        files: []
      },
      {
        id: 2,
        title: "Data Visualization Dashboard",
        description: "Interactive dashboard for data analysis using Python and D3.js",
        technologies: ["Python", "D3.js", "Flask", "PostgreSQL"],
        githubUrl: "https://github.com/johndoe/data-dashboard",
        liveUrl: "",
        files: [{name: "project-report.pdf", size: "2.4 MB", type: "pdf"}]
      }
    ]
  })

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ profileData }),
      })

      const data = await response.json()

      if (data.success) {
        setIsEditing(false)
        // You could add a toast notification here
        console.log('Profile saved successfully')
      } else {
        console.error('Failed to save profile:', data.message)
        // You could show an error message to the user
      }
    } catch (error) {
      console.error('Error saving profile:', error)
      // You could show an error message to the user
    } finally {
      setIsSaving(false)
    }
  }

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }))
  }

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      const project = {
        ...newProject,
        id: Date.now(), // Simple ID generation
        technologies: newProject.technologies.filter(tech => tech.trim() !== "")
      }
      setProfileData(prev => ({
        ...prev,
        projects: [...prev.projects, project]
      }))
      setNewProject({
        title: "",
        description: "",
        technologies: [],
        githubUrl: "",
        liveUrl: "",
        files: []
      })
      setShowAddProject(false)
    }
  }

  const handleRemoveProject = (projectId) => {
    setProfileData(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== projectId)
    }))
  }

  const handleFileUpload = (projectId, files) => {
    const fileList = Array.from(files).map(file => ({
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      type: file.type.split('/')[1] || 'file'
    }))
    
    setProfileData(prev => ({
      ...prev,
      projects: prev.projects.map(project => 
        project.id === projectId 
          ? { ...project, files: [...project.files, ...fileList] }
          : project
      )
    }))
  }

  const handleRemoveFile = (projectId, fileName) => {
    setProfileData(prev => ({
      ...prev,
      projects: prev.projects.map(project => 
        project.id === projectId 
          ? { ...project, files: project.files.filter(file => file.name !== fileName) }
          : project
      )
    }))
  }

  const removeNewProjectFile = (fileIndex) => {
    setNewProject(prev => ({
      ...prev,
      files: prev.files.filter((_, index) => index !== fileIndex)
    }))
  }

  const loadProfileData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/profile')
      const data = await response.json()

      if (data.success && data.user) {
        setProfileData(prev => ({
          ...prev,
          firstName: data.user.firstName || prev.firstName,
          lastName: data.user.lastName || prev.lastName,
          email: data.user.email || prev.email,
          phone: data.user.phone || prev.phone,
          dateOfBirth: data.user.dateOfBirth || prev.dateOfBirth,
          gender: data.user.gender || prev.gender,
          address: data.user.address || prev.address,
          city: data.user.city || prev.city,
          state: data.user.state || prev.state,
          pincode: data.user.pincode || prev.pincode,
          education: data.user.education || prev.education,
          institution: data.user.institution || prev.institution,
          graduationYear: data.user.graduationYear || prev.graduationYear,
          cgpa: data.user.cgpa || prev.cgpa,
          skills: data.user.skills || prev.skills,
          bio: data.user.bio || prev.bio,
          linkedin: data.user.linkedin || prev.linkedin,
          github: data.user.github || prev.github,
          portfolio: data.user.portfolio || prev.portfolio,
          projects: data.user.projects || prev.projects,
        }))
      }
    } catch (error) {
      console.error('Error loading profile:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Load profile data on component mount
  useEffect(() => {
    loadProfileData()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <DashboardSidebar />

        <main className="flex-1 lg:ml-0">
          <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8 mt-12 lg:mt-0">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold text-foreground mb-2">Profile</h1>
                  <p className="text-muted-foreground">Manage your personal information and preferences</p>
                </div>
                <Button 
                  onClick={isEditing ? handleSave : () => setIsEditing(true)}
                  variant={isEditing ? "default" : "outline"}
                  disabled={isSaving}
                >
                  {isEditing ? (isSaving ? "Saving..." : "Save Changes") : "Edit Profile"}
                </Button>
              </div>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading profile...</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Picture & Basic Info */}
                <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Picture</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center space-y-4">
                    <div className="relative">
                      <Avatar className="h-32 w-32">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback className="text-2xl">
                          {profileData.firstName[0]}{profileData.lastName[0]}
                        </AvatarFallback>
                      </Avatar>
                      {isEditing && (
                        <Button
                          size="sm"
                          className="absolute -bottom-2 -right-2"
                          variant="secondary"
                        >
                          <Camera className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-lg">
                        {profileData.firstName} {profileData.lastName}
                      </h3>
                      <p className="text-muted-foreground">{profileData.email}</p>
                      <Badge variant="secondary" className="mt-2">Student</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Briefcase className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">12 Applications</p>
                        <p className="text-sm text-muted-foreground">Total submitted</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">2 Accepted</p>
                        <p className="text-sm text-muted-foreground">Success rate: 17%</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">48 Profile Views</p>
                        <p className="text-sm text-muted-foreground">This week</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Profile Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-5 w-5" />
                      <span>Personal Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={profileData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profileData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={profileData.dateOfBirth}
                          onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select 
                          value={profileData.gender} 
                          onValueChange={(value) => handleInputChange("gender", value)}
                          disabled={!isEditing}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => handleInputChange("bio", e.target.value)}
                        disabled={!isEditing}
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Address */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>Address</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input
                        id="address"
                        value={profileData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={profileData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          value={profileData.state}
                          onChange={(e) => handleInputChange("state", e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pincode">PIN Code</Label>
                        <Input
                          id="pincode"
                          value={profileData.pincode}
                          onChange={(e) => handleInputChange("pincode", e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Education */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <GraduationCap className="h-5 w-5" />
                      <span>Education</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="education">Highest Education</Label>
                        <Select 
                          value={profileData.education} 
                          onValueChange={(value) => handleInputChange("education", value)}
                          disabled={!isEditing}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="diploma">Diploma</SelectItem>
                            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                            <SelectItem value="master">Master's Degree</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="institution">Institution</Label>
                        <Input
                          id="institution"
                          value={profileData.institution}
                          onChange={(e) => handleInputChange("institution", e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="graduationYear">Graduation Year</Label>
                        <Input
                          id="graduationYear"
                          value={profileData.graduationYear}
                          onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cgpa">CGPA/Percentage</Label>
                        <Input
                          id="cgpa"
                          value={profileData.cgpa}
                          onChange={(e) => handleInputChange("cgpa", e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Skills & Links */}
                <Card>
                  <CardHeader>
                    <CardTitle>Skills & Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Skills</Label>
                      <div className="flex flex-wrap gap-2">
                        {profileData.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                        {isEditing && (
                          <Button variant="outline" size="sm">
                            + Add Skill
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input
                          id="linkedin"
                          value={profileData.linkedin}
                          onChange={(e) => handleInputChange("linkedin", e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="github">GitHub</Label>
                        <Input
                          id="github"
                          value={profileData.github}
                          onChange={(e) => handleInputChange("github", e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="portfolio">Portfolio Website</Label>
                      <Input
                        id="portfolio"
                        value={profileData.portfolio}
                        onChange={(e) => handleInputChange("portfolio", e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Projects & Files */}
                <Card>
                  <CardHeader>
                    <CardTitle>Projects & Files</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Existing Projects */}
                    {profileData.projects.length > 0 && (
                      <div className="space-y-3">
                        {profileData.projects.map((project, index) => (
                          <div key={index} className="border rounded-lg p-4 space-y-3">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <h4 className="font-medium">{project.title}</h4>
                                {project.description && (
                                  <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                                )}
                                {project.githubUrl && (
                                  <a 
                                    href={project.githubUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1 mt-2"
                                  >
                                    <Github className="h-4 w-4" />
                                    View on GitHub
                                  </a>
                                )}
                              </div>
                              {isEditing && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleRemoveProject(project.id)}
                                  className="text-red-600 hover:text-red-800"
                                >
                                  Remove
                                </Button>
                              )}
                            </div>
                            
                            {/* Project Files */}
                            {project.files.length > 0 && (
                              <div className="space-y-2">
                                <Label className="text-sm font-medium">Files:</Label>
                                <div className="space-y-2">
                                  {project.files.map((file, fileIndex) => (
                                    <div key={fileIndex} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                                      <div className="flex items-center gap-2">
                                        <Paperclip className="h-4 w-4 text-gray-500" />
                                        <span className="text-sm">{file.name}</span>
                                        <span className="text-xs text-gray-500">({file.size})</span>
                                      </div>
                                      {isEditing && (
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          onClick={() => handleRemoveFile(project.id, file.name)}
                                          className="text-red-600 hover:text-red-800 h-6 w-6 p-0"
                                        >
                                          ×
                                        </Button>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Add New Project Form */}
                    {isEditing && (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 space-y-4">
                        <h4 className="font-medium">Add New Project</h4>
                        <div className="space-y-3">
                          <div className="space-y-2">
                            <Label htmlFor="newProjectTitle">Project Title *</Label>
                            <Input
                              id="newProjectTitle"
                              value={newProject.title}
                              onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                              placeholder="Enter project title"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="newProjectDescription">Description</Label>
                            <Input
                              id="newProjectDescription"
                              value={newProject.description}
                              onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                              placeholder="Brief description of your project"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="newProjectGithub">GitHub URL</Label>
                            <Input
                              id="newProjectGithub"
                              value={newProject.githubUrl}
                              onChange={(e) => setNewProject({...newProject, githubUrl: e.target.value})}
                              placeholder="https://github.com/username/repository"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Upload Files</Label>
                            <div className="flex items-center gap-2">
                              <Input
                                type="file"
                                multiple
                                onChange={(e) => {
                                  const files = Array.from(e.target.files).map(file => ({
                                    name: file.name,
                                    size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
                                    type: file.type.split('/')[1] || 'file'
                                  }))
                                  setNewProject(prev => ({ ...prev, files: [...prev.files, ...files] }))
                                }}
                                className="flex-1"
                                accept=".pdf,.doc,.docx,.zip,.rar,.jpg,.png,.gif"
                              />
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => document.querySelector('input[type="file"]').click()}
                              >
                                Browse
                              </Button>
                            </div>
                            <p className="text-xs text-gray-500">
                              Supported formats: PDF, DOC, DOCX, ZIP, RAR, JPG, PNG, GIF (Max 10MB each)
                            </p>
                            {/* Show selected files */}
                            {newProject.files.length > 0 && (
                              <div className="mt-3 space-y-2">
                                <Label className="text-sm font-medium">Selected Files:</Label>
                                <div className="space-y-1">
                                  {newProject.files.map((file, fileIndex) => (
                                    <div key={fileIndex} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                                      <div className="flex items-center gap-2">
                                        <Paperclip className="h-4 w-4 text-gray-500" />
                                        <span className="text-sm">{file.name}</span>
                                        <span className="text-xs text-gray-500">({file.size})</span>
                                      </div>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => removeNewProjectFile(fileIndex)}
                                        className="text-red-600 hover:text-red-800 h-6 w-6 p-0"
                                      >
                                        ×
                                      </Button>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            onClick={handleAddProject}
                            disabled={!newProject.title.trim()}
                            size="sm"
                          >
                            Add Project
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => setNewProject({ title: '', description: '', githubUrl: '', files: [] })}
                            size="sm"
                          >
                            Clear
                          </Button>
                        </div>
                      </div>
                    )}

                    {profileData.projects.length === 0 && !isEditing && (
                      <div className="text-center py-8 text-gray-500">
                        <Folder className="h-12 w-12 mx-auto mb-2 opacity-50" />
                        <p>No projects added yet</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}