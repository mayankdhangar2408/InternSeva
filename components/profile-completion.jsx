import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Circle, User, FileText, Award } from "lucide-react"

const profileSteps = [
  { id: 1, title: "Basic Information", completed: true, icon: User },
  { id: 2, title: "Upload Resume", completed: true, icon: FileText },
  { id: 3, title: "Add Skills & Certifications", completed: false, icon: Award },
  { id: 4, title: "Complete Profile", completed: false, icon: CheckCircle },
]

export function ProfileCompletion() {
  const completedSteps = profileSteps.filter((step) => step.completed).length
  const completionPercentage = (completedSteps / profileSteps.length) * 100

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Profile Completion
          <span className="text-sm font-normal text-muted-foreground">
            {completedSteps}/{profileSteps.length} completed
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-sm font-medium">{Math.round(completionPercentage)}%</span>
            </div>
            <Progress value={completionPercentage} className="h-2" />
          </div>

          <div className="space-y-3">
            {profileSteps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.id} className="flex items-center space-x-3">
                  {step.completed ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  )}
                  <div className="flex-1">
                    <span className={cn("text-sm", step.completed ? "text-foreground" : "text-muted-foreground")}>
                      {step.title}
                    </span>
                  </div>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>
              )
            })}
          </div>

          <Button className="w-full bg-transparent" variant="outline">
            Complete Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
