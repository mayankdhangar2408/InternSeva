import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Clock, CheckCircle, TrendingUp } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      title: "Total Applications",
      value: "12",
      change: "+3 this month",
      icon: FileText,
      color: "text-blue-600",
    },
    {
      title: "Under Review",
      value: "5",
      change: "2 pending interviews",
      icon: Clock,
      color: "text-yellow-600",
    },
    {
      title: "Accepted",
      value: "2",
      change: "1 starting soon",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      title: "Profile Views",
      value: "48",
      change: "+12 this week",
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <Icon className={cn("h-4 w-4", stat.color)} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
