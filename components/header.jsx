"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"
import { Menu, X, User, LogOut } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()

  const handleLogout = async () => {
    setIsLoggingOut(true)
    setIsMenuOpen(false)
    
    try {
      // Optional: Call API to invalidate token on server
      try {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
          }
        })
      } catch (error) {
        // Continue with logout even if API call fails
      }
      
      // Force logout
      logout()
    } catch (error) {
      // Force logout even on error
      logout()
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">IS</span>
              </div>
              <span className="font-bold text-xl text-foreground">Intern Seva</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About Scheme
            </Link>
            <Link href="/internships" className="text-foreground hover:text-primary transition-colors">
              Internships
            </Link>
            <Link href="/resources" className="text-foreground hover:text-primary transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>Welcome, {user?.firstName || user?.email}</span>
                  {user?.role === 'admin' && (
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Admin</span>
                  )}
                </div>
                <Button asChild>
                  <Link href={user?.role === 'admin' ? '/admin/dashboard' : '/dashboard'}>
                    {user?.role === 'admin' ? 'Admin Panel' : 'Dashboard'}
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  {isLoggingOut ? 'Signing out...' : 'Logout'}
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Register</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Scheme
              </Link>
              <Link
                href="/internships"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Internships
              </Link>
              <Link
                href="/resources"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 px-3 pt-2">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground px-3 py-2">
                      <User className="h-4 w-4" />
                      <span>Welcome, {user?.firstName || user?.email}</span>
                    </div>
                    <Button asChild>
                      <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={handleLogout}
                      disabled={isLoggingOut}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      {isLoggingOut ? 'Signing out...' : 'Logout'}
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" asChild>
                      <Link href="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/register" onClick={() => setIsMenuOpen(false)}>Register</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
