"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
  Settings,
  User,
  Bell,
  Shield,
  Globe,
  Database,
  Trash2,
  Download,
  Upload,
  Save,
  Eye,
  EyeOff,
  Smartphone,
  Mail,
  Lock,
  Key,
  AlertTriangle,
  CheckCircle,
  Info,
  Monitor,
  Zap,
  Users,
  Building2,
  FileText
} from "lucide-react"

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("general")
  const [showPassword, setShowPassword] = useState(false)
  
  // General Settings State
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "Intern Seva",
    siteDescription: "PM Internship Scheme Portal",
    adminEmail: "admin@internseva.com",
    supportEmail: "support@internseva.com",
    contactPhone: "+91 11 2345 6789",
    maxApplicationsPerUser: "5",
    applicationDeadlineBuffer: "7",
    maintenanceMode: false
  })

  // Notification Settings State
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    newApplicationAlerts: true,
    deadlineReminders: true,
    systemUpdates: true,
    weeklyReports: true,
    monthlyAnalytics: true
  })

  // Security Settings State
  const [securitySettings, setSecuritySettings] = useState({
    requireTwoFactor: false,
    passwordExpiry: "90",
    maxLoginAttempts: "5",
    sessionTimeout: "30",
    ipWhitelist: "",
    auditLogging: true,
    loginAlerts: true
  })

  // User Management Settings State
  const [userSettings, setUserSettings] = useState({
    autoApproveRegistrations: false,
    requireEmailVerification: true,
    allowGuestApplications: false,
    maxProfilePictureSize: "5",
    allowedFileTypes: "jpg,png,pdf,doc,docx",
    userDataRetention: "24"
  })

  // System Settings State
  const [systemSettings, setSystemSettings] = useState({
    backupFrequency: "daily",
    logLevel: "info",
    cacheTimeout: "3600",
    maxFileUploadSize: "10",
    databaseCleanup: true,
    autoUpdates: false,
    apiRateLimit: "1000"
  })

  const handleGeneralUpdate = () => {
    console.log("Updating general settings:", generalSettings)
    // API call would go here
  }

  const handleNotificationUpdate = () => {
    console.log("Updating notification settings:", notificationSettings)
    // API call would go here
  }

  const handleSecurityUpdate = () => {
    console.log("Updating security settings:", securitySettings)
    // API call would go here
  }

  const handleUserUpdate = () => {
    console.log("Updating user settings:", userSettings)
    // API call would go here
  }

  const handleSystemUpdate = () => {
    console.log("Updating system settings:", systemSettings)
    // API call would go here
  }

  const exportSystemData = () => {
    console.log("Exporting system data...")
    // API call would go here
  }

  const performBackup = () => {
    console.log("Performing system backup...")
    // API call would go here
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <AdminSidebar />

        <main className="flex-1 lg:ml-64">
          <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8 mt-12 lg:mt-0">
              <h1 className="text-2xl font-bold text-foreground mb-2">Admin Settings</h1>
              <p className="text-muted-foreground">Configure system preferences and administration settings</p>
            </div>

            {/* Settings Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
                <TabsTrigger value="general" className="flex items-center space-x-2">
                  <Settings className="h-4 w-4" />
                  <span className="hidden sm:inline">General</span>
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center space-x-2">
                  <Bell className="h-4 w-4" />
                  <span className="hidden sm:inline">Notifications</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span className="hidden sm:inline">Security</span>
                </TabsTrigger>
                <TabsTrigger value="users" className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span className="hidden sm:inline">Users</span>
                </TabsTrigger>
                <TabsTrigger value="system" className="flex items-center space-x-2">
                  <Monitor className="h-4 w-4" />
                  <span className="hidden sm:inline">System</span>
                </TabsTrigger>
              </TabsList>

              {/* General Settings */}
              <TabsContent value="general" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Settings className="h-5 w-5" />
                      <span>General Configuration</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="siteName">Site Name</Label>
                        <Input
                          id="siteName"
                          value={generalSettings.siteName}
                          onChange={(e) => setGeneralSettings({...generalSettings, siteName: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="adminEmail">Admin Email</Label>
                        <Input
                          id="adminEmail"
                          type="email"
                          value={generalSettings.adminEmail}
                          onChange={(e) => setGeneralSettings({...generalSettings, adminEmail: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="siteDescription">Site Description</Label>
                      <Textarea
                        id="siteDescription"
                        value={generalSettings.siteDescription}
                        onChange={(e) => setGeneralSettings({...generalSettings, siteDescription: e.target.value})}
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="supportEmail">Support Email</Label>
                        <Input
                          id="supportEmail"
                          type="email"
                          value={generalSettings.supportEmail}
                          onChange={(e) => setGeneralSettings({...generalSettings, supportEmail: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactPhone">Contact Phone</Label>
                        <Input
                          id="contactPhone"
                          value={generalSettings.contactPhone}
                          onChange={(e) => setGeneralSettings({...generalSettings, contactPhone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="maxApplications">Max Applications per User</Label>
                        <Input
                          id="maxApplications"
                          type="number"
                          value={generalSettings.maxApplicationsPerUser}
                          onChange={(e) => setGeneralSettings({...generalSettings, maxApplicationsPerUser: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="deadlineBuffer">Application Deadline Buffer (days)</Label>
                        <Input
                          id="deadlineBuffer"
                          type="number"
                          value={generalSettings.applicationDeadlineBuffer}
                          onChange={(e) => setGeneralSettings({...generalSettings, applicationDeadlineBuffer: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Maintenance Mode</Label>
                        <p className="text-sm text-muted-foreground">Enable to restrict access during maintenance</p>
                      </div>
                      <Switch
                        checked={generalSettings.maintenanceMode}
                        onCheckedChange={(checked) => setGeneralSettings({...generalSettings, maintenanceMode: checked})}
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button onClick={handleGeneralUpdate}>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notification Settings */}
              <TabsContent value="notifications" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Bell className="h-5 w-5" />
                      <span>Notification Configuration</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Admin Notification Channels</h3>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive admin notifications via email</p>
                        </div>
                        <Switch
                          checked={notificationSettings.emailNotifications}
                          onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, emailNotifications: checked})}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Push Notifications</Label>
                          <p className="text-sm text-muted-foreground">Browser push notifications for urgent alerts</p>
                        </div>
                        <Switch
                          checked={notificationSettings.pushNotifications}
                          onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, pushNotifications: checked})}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>SMS Notifications</Label>
                          <p className="text-sm text-muted-foreground">Critical alerts via SMS</p>
                        </div>
                        <Switch
                          checked={notificationSettings.smsNotifications}
                          onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, smsNotifications: checked})}
                        />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Alert Types</h3>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>New Application Alerts</Label>
                          <p className="text-sm text-muted-foreground">Get notified when new applications are submitted</p>
                        </div>
                        <Switch
                          checked={notificationSettings.newApplicationAlerts}
                          onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, newApplicationAlerts: checked})}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Deadline Reminders</Label>
                          <p className="text-sm text-muted-foreground">Reminders about upcoming internship deadlines</p>
                        </div>
                        <Switch
                          checked={notificationSettings.deadlineReminders}
                          onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, deadlineReminders: checked})}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>System Updates</Label>
                          <p className="text-sm text-muted-foreground">Notifications about system maintenance and updates</p>
                        </div>
                        <Switch
                          checked={notificationSettings.systemUpdates}
                          onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, systemUpdates: checked})}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Weekly Reports</Label>
                          <p className="text-sm text-muted-foreground">Weekly summary reports via email</p>
                        </div>
                        <Switch
                          checked={notificationSettings.weeklyReports}
                          onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, weeklyReports: checked})}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button onClick={handleNotificationUpdate}>
                        <Save className="h-4 w-4 mr-2" />
                        Save Preferences
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Settings */}
              <TabsContent value="security" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="h-5 w-5" />
                      <span>Security Configuration</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Require Two-Factor Authentication</Label>
                          <p className="text-sm text-muted-foreground">Require 2FA for all admin accounts</p>
                        </div>
                        <Switch
                          checked={securitySettings.requireTwoFactor}
                          onCheckedChange={(checked) => setSecuritySettings({...securitySettings, requireTwoFactor: checked})}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Password Expiry (days)</Label>
                          <Select value={securitySettings.passwordExpiry} onValueChange={(value) => setSecuritySettings({...securitySettings, passwordExpiry: value})}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="30">30 days</SelectItem>
                              <SelectItem value="60">60 days</SelectItem>
                              <SelectItem value="90">90 days</SelectItem>
                              <SelectItem value="180">180 days</SelectItem>
                              <SelectItem value="never">Never</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Max Login Attempts</Label>
                          <Select value={securitySettings.maxLoginAttempts} onValueChange={(value) => setSecuritySettings({...securitySettings, maxLoginAttempts: value})}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="3">3 attempts</SelectItem>
                              <SelectItem value="5">5 attempts</SelectItem>
                              <SelectItem value="10">10 attempts</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>IP Whitelist</Label>
                        <Textarea
                          placeholder="Enter IP addresses or ranges (one per line)"
                          value={securitySettings.ipWhitelist}
                          onChange={(e) => setSecuritySettings({...securitySettings, ipWhitelist: e.target.value})}
                          rows={3}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Audit Logging</Label>
                          <p className="text-sm text-muted-foreground">Log all admin actions for security auditing</p>
                        </div>
                        <Switch
                          checked={securitySettings.auditLogging}
                          onCheckedChange={(checked) => setSecuritySettings({...securitySettings, auditLogging: checked})}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button onClick={handleSecurityUpdate}>
                        <Save className="h-4 w-4 mr-2" />
                        Save Security Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* User Management Settings */}
              <TabsContent value="users" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span>User Management</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Auto-approve Registrations</Label>
                          <p className="text-sm text-muted-foreground">Automatically approve new user registrations</p>
                        </div>
                        <Switch
                          checked={userSettings.autoApproveRegistrations}
                          onCheckedChange={(checked) => setUserSettings({...userSettings, autoApproveRegistrations: checked})}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Require Email Verification</Label>
                          <p className="text-sm text-muted-foreground">Users must verify their email before access</p>
                        </div>
                        <Switch
                          checked={userSettings.requireEmailVerification}
                          onCheckedChange={(checked) => setUserSettings({...userSettings, requireEmailVerification: checked})}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Max Profile Picture Size (MB)</Label>
                          <Input
                            type="number"
                            value={userSettings.maxProfilePictureSize}
                            onChange={(e) => setUserSettings({...userSettings, maxProfilePictureSize: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>User Data Retention (months)</Label>
                          <Input
                            type="number"
                            value={userSettings.userDataRetention}
                            onChange={(e) => setUserSettings({...userSettings, userDataRetention: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Allowed File Types</Label>
                        <Input
                          placeholder="jpg,png,pdf,doc,docx"
                          value={userSettings.allowedFileTypes}
                          onChange={(e) => setUserSettings({...userSettings, allowedFileTypes: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button onClick={handleUserUpdate}>
                        <Save className="h-4 w-4 mr-2" />
                        Save User Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* System Settings */}
              <TabsContent value="system" className="mt-6">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Monitor className="h-5 w-5" />
                        <span>System Configuration</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Backup Frequency</Label>
                          <Select value={systemSettings.backupFrequency} onValueChange={(value) => setSystemSettings({...systemSettings, backupFrequency: value})}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hourly">Hourly</SelectItem>
                              <SelectItem value="daily">Daily</SelectItem>
                              <SelectItem value="weekly">Weekly</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Log Level</Label>
                          <Select value={systemSettings.logLevel} onValueChange={(value) => setSystemSettings({...systemSettings, logLevel: value})}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="error">Error</SelectItem>
                              <SelectItem value="warn">Warn</SelectItem>
                              <SelectItem value="info">Info</SelectItem>
                              <SelectItem value="debug">Debug</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Max File Upload Size (MB)</Label>
                          <Input
                            type="number"
                            value={systemSettings.maxFileUploadSize}
                            onChange={(e) => setSystemSettings({...systemSettings, maxFileUploadSize: e.target.value})}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>API Rate Limit (requests/hour)</Label>
                          <Input
                            type="number"
                            value={systemSettings.apiRateLimit}
                            onChange={(e) => setSystemSettings({...systemSettings, apiRateLimit: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Automatic Database Cleanup</Label>
                          <p className="text-sm text-muted-foreground">Automatically clean old logs and temporary data</p>
                        </div>
                        <Switch
                          checked={systemSettings.databaseCleanup}
                          onCheckedChange={(checked) => setSystemSettings({...systemSettings, databaseCleanup: checked})}
                        />
                      </div>

                      <div className="flex justify-end">
                        <Button onClick={handleSystemUpdate}>
                          <Save className="h-4 w-4 mr-2" />
                          Save System Settings
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* System Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Zap className="h-5 w-5" />
                        <span>System Actions</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <h3 className="font-medium">System Backup</h3>
                          <p className="text-sm text-muted-foreground">Create a manual backup of all system data</p>
                        </div>
                        <Button variant="outline" onClick={performBackup}>
                          <Database className="h-4 w-4 mr-2" />
                          Backup Now
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <h3 className="font-medium">Export System Data</h3>
                          <p className="text-sm text-muted-foreground">Download all system configuration and logs</p>
                        </div>
                        <Button variant="outline" onClick={exportSystemData}>
                          <Download className="h-4 w-4 mr-2" />
                          Export
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950">
                        <div className="space-y-1">
                          <h3 className="font-medium text-red-900 dark:text-red-100">Clear System Cache</h3>
                          <p className="text-sm text-red-600 dark:text-red-400">Clear all cached data (may affect performance temporarily)</p>
                        </div>
                        <Button variant="destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Clear Cache
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}