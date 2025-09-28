"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsLoading(false)
      return
    }

    // Check for stored user session on app load
    const storedUser = localStorage.getItem('user')
    const storedToken = localStorage.getItem('token')
    
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser)
        if (userData.isAuthenticated) {
          setUser(userData)
        }
      } catch (error) {
        console.error('Error parsing stored user data:', error)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
      }
    }
    setIsLoading(false)
  }, [])

  const login = (userData, token = null) => {
    const userWithAuth = { 
      ...userData, 
      isAuthenticated: true,
      role: userData.role || 'user' // Default to user role if not specified
    }
    setUser(userWithAuth)
    localStorage.setItem('user', JSON.stringify(userWithAuth))
    if (token) {
      localStorage.setItem('token', token)
    }
  }

  const logout = () => {
    // Clear user state
    setUser(null)
    
    // Clear localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    }
    
    // Force a page refresh to ensure clean state
    if (typeof window !== 'undefined') {
      window.location.href = '/'
    }
  }

  const register = (userData, token = null) => {
    // In a real app, you'd register with your backend first
    const userWithAuth = { 
      ...userData, 
      isAuthenticated: true,
      role: userData.role || 'user' // Default to user role if not specified
    }
    setUser(userWithAuth)
    localStorage.setItem('user', JSON.stringify(userWithAuth))
    if (token) {
      localStorage.setItem('token', token)
    }
  }

  const value = {
    user,
    isLoading,
    login,
    logout,
    register,
    isAuthenticated: !!user?.isAuthenticated,
    isAdmin: user?.role === 'admin'
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}