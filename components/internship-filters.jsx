"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, X } from "lucide-react"

export function InternshipFilters({ onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")
  const [field, setField] = useState("")
  const [duration, setDuration] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const handleFilterChange = () => {
    onFilterChange({
      searchTerm,
      location,
      field,
      duration,
    })
  }

  const clearFilters = () => {
    setSearchTerm("")
    setLocation("")
    setField("")
    setDuration("")
    onFilterChange({
      searchTerm: "",
      location: "",
      field: "",
      duration: "",
    })
  }

  return (
    <Card className="border-border mb-8">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Find Internships</CardTitle>
          <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="md:hidden">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search internships by title, company, or skills..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              handleFilterChange()
            }}
            className="pl-10"
          />
        </div>

        {/* Filters */}
        <div className={`space-y-4 ${showFilters ? "block" : "hidden md:block"}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Select
                value={location}
                onValueChange={(value) => {
                  setLocation(value)
                  handleFilterChange()
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="pune">Pune</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                  <SelectItem value="kolkata">Kolkata</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="field">Field</Label>
              <Select
                value={field}
                onValueChange={(value) => {
                  setField(value)
                  handleFilterChange()
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select field" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="government">Government</SelectItem>
                  <SelectItem value="ngo">NGO/Social Sector</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration</Label>
              <Select
                value={duration}
                onValueChange={(value) => {
                  setDuration(value)
                  handleFilterChange()
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3-months">3 Months</SelectItem>
                  <SelectItem value="6-months">6 Months</SelectItem>
                  <SelectItem value="12-months">12 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end">
            <Button variant="outline" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
