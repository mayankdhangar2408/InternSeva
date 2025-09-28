"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/contexts/AuthContext"
import { Eye, EyeOff, CheckCircle, Loader2, AlertCircle } from "lucide-react"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const router = useRouter()
  const { register } = useAuth()
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    education: "",
    role: "user", // Default to user role
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })

  const validateForm = () => {
    const newErrors = {}

    // Required field validation
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
    if (!formData.gender) newErrors.gender = "Gender selection is required"
    // Education is only required for user role, not admin
    if (formData.role === "user" && !formData.education) newErrors.education = "Education level is required"
    if (!formData.role) newErrors.role = "Role selection is required"
    if (!formData.password) newErrors.password = "Password is required"
    if (!formData.confirmPassword) newErrors.confirmPassword = "Password confirmation is required"
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms and conditions"

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Please enter a valid 10-digit phone number"
    }

    // Password validation
    if (formData.password && formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long"
    }

    // Password confirmation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    // Age validation (must be at least 18)
    if (formData.dateOfBirth) {
      const today = new Date()
      const birthDate = new Date(formData.dateOfBirth)
      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      
      if (age < 18) {
        newErrors.dateOfBirth = "You must be at least 18 years old to register"
      }
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      setIsLoading(false)
      return
    }

    setErrors({})

    try {
      // Simulate API call - replace with actual registration
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // For demo purposes, registration always succeeds
      // Use auth context to handle registration
      register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        education: formData.education,
        role: formData.role
      })
      setIsRegistered(true)
    } catch (err) {
      setErrors({ general: "Registration failed. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (field, value) => {
    setFormData((prev) => {
      const newData = { ...prev, [field]: value }
      
      // Clear education field when admin role is selected
      if (field === "role" && value === "admin") {
        newData.education = ""
      }
      
      return newData
    })
  }

  if (isRegistered) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-border">
          <CardContent className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Registration Successful!</h2>
            <p className="text-muted-foreground mb-6">
              Your {formData.role === 'admin' ? 'administrator' : 'student'} account has been created successfully. You can now access your dashboard.
            </p>
            <Button 
              className="w-full" 
              onClick={() => {
                if (formData.role === 'admin') {
                  router.push('/admin/dashboard')
                } else {
                  router.push('/dashboard')
                }
              }}
            >
              Go to {formData.role === 'admin' ? 'Admin' : 'Student'} Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="h-10 w-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold">IS</span>
            </div>
            <span className="font-bold text-2xl text-foreground">Intern Seva</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground mb-2">Create Your Account</h1>
          <p className="text-muted-foreground">Join the PM Internship Scheme and start your career journey</p>
        </div>

        {/* Registration Form */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {errors.general && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{errors.general}</AlertDescription>
                </Alert>
              )}

              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-medium text-foreground mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter first name"
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      disabled={isLoading}
                      className={errors.firstName ? "border-red-500" : ""}
                      required
                    />
                    {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Enter last name"
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      disabled={isLoading}
                      className={errors.lastName ? "border-red-500" : ""}
                      required
                    />
                    {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      disabled={isLoading}
                      className={errors.email ? "border-red-500" : ""}
                      required
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      disabled={isLoading}
                      className={errors.phone ? "border-red-500" : ""}
                      required
                    />
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                      disabled={isLoading}
                      className={errors.dateOfBirth ? "border-red-500" : ""}
                      required
                    />
                    {errors.dateOfBirth && <p className="text-sm text-red-500">{errors.dateOfBirth}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender *</Label>
                    <Select 
                      value={formData.gender} 
                      onValueChange={(value) => handleChange("gender", value)} 
                      disabled={isLoading}
                      required
                    >
                      <SelectTrigger className={errors.gender ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
                  </div>
                </div>
              </div>

              {/* Educational Information - Only show for user role */}
              {formData.role === "user" && (
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-4">Educational Background</h3>
                  <div className="space-y-2">
                    <Label htmlFor="education">Highest Education *</Label>
                    <Select
                      value={formData.education}
                      onValueChange={(value) => handleChange("education", value)}
                      disabled={isLoading}
                      required={formData.role === "user"}
                    >
                      <SelectTrigger className={errors.education ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select your highest education" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diploma">Diploma (3+ years)</SelectItem>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="professional">Professional Certification</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.education && <p className="text-sm text-red-500">{errors.education}</p>}
                  </div>
                </div>
              )}

              {/* Account Type */}
              <div>
                <h3 className="text-lg font-medium text-foreground mb-4">Account Type</h3>
                <div className="space-y-2">
                  <Label htmlFor="role">Register as *</Label>
                  <Select
                    value={formData.role}
                    onValueChange={(value) => handleChange("role", value)}
                    disabled={isLoading}
                    required
                  >
                    <SelectTrigger className={errors.role ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select account type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">
                        <div className="flex flex-col">
                          <span className="font-medium">Student/User</span>
                          <span className="text-sm text-muted-foreground">Apply for internships and manage applications</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="admin">
                        <div className="flex flex-col">
                          <span className="font-medium">Administrator</span>
                          <span className="text-sm text-muted-foreground">Manage internships, users, and applications</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.role && <p className="text-sm text-red-500">{errors.role}</p>}
                </div>
              </div>

              {/* Account Security */}
              <div>
                <h3 className="text-lg font-medium text-foreground mb-4">Account Security</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password *</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create password (min. 8 characters)"
                        value={formData.password}
                        onChange={(e) => handleChange("password", e.target.value)}
                        disabled={isLoading}
                        className={errors.password ? "border-red-500" : ""}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                    {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleChange("confirmPassword", e.target.value)}
                        disabled={isLoading}
                        className={errors.confirmPassword ? "border-red-500" : ""}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        disabled={isLoading}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                    {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleChange("agreeToTerms", checked)}
                    disabled={isLoading}
                    required
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    of the PM Internship Scheme.
                  </Label>
                </div>
                {errors.agreeToTerms && <p className="text-sm text-red-500">{errors.agreeToTerms}</p>}
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
