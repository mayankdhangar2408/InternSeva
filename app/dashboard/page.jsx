"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardStats } from "@/components/dashboard-stats"
import { RecentApplications } from "@/components/recent-applications"
import { ProfileCompletion } from "@/components/profile-completion"
import { Loader2 } from "lucide-react"

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-8 w-8 animate-spin" />
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <DashboardSidebar />

        <main className="flex-1 lg:ml-0">
          <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8 mt-12 lg:mt-0">
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Welcome back, {user?.firstName || user?.email?.split('@')[0] || 'User'}!
              </h1>
              <p className="text-muted-foreground">Here's an overview of your internship journey.</p>
            </div>

            {/* Stats */}
            <DashboardStats />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Applications */}
              <div className="lg:col-span-2">
                <RecentApplications />
              </div>

              {/* Profile Completion */}
              <div>
                <ProfileCompletion />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
