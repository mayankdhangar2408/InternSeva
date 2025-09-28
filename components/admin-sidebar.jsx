"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/contexts/AuthContext"
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  FileText, 
  BarChart3, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  UserCheck,
  MessageSquare,
  Calendar,
  TrendingUp,
  Database,
  Shield,
  Bell
} from "lucide-react"

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
    badge: null
  },
  {
    title: "Users Management",
    href: "/admin/users",
    icon: Users,
    badge: "156"
  },
  {
    title: "Internships",
    href: "/admin/internships",
    icon: Building2,
    badge: "24"
  },
  {
    title: "Applications",
    href: "/admin/applications",
    icon: FileText,
    badge: "89"
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
    badge: null
  },
  {
    title: "Messages",
    href: "/admin/messages",
    icon: MessageSquare,
    badge: "12"
  },
  {
    title: "Reports",
    href: "/admin/reports",
    icon: TrendingUp,
    badge: null
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
    badge: null
  }
]

export function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { user, logout } = useAuth()

  const handleSignOut = () => {
    logout()
  }

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 bg-card border-r border-border transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center border-b border-border px-6">
            <Link href="/admin/dashboard" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">IS</span>
              </div>
              <div>
                <span className="font-bold text-lg text-foreground">Admin Panel</span>
              </div>
            </Link>
          </div>

          {/* User Info */}
          <div className="px-6 py-4 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {user?.firstName || "Admin"} {user?.lastName || "User"}
                </p>
                <p className="text-xs text-muted-foreground truncate">Administrator</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon
                
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between w-full px-3 py-2 text-sm rounded-md transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </div>
                      {item.badge && (
                        <Badge 
                          variant={isActive ? "secondary" : "outline"} 
                          className="text-xs"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <Button
              variant="ghost"
              className="w-full justify-start text-muted-foreground hover:text-foreground"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4 mr-3" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}