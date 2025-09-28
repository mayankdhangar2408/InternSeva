import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Building, Users, Calendar } from "lucide-react"

export function InternshipCard({ internship }) {
  return (
    <Card className="border-border hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2 text-balance">{internship.title}</CardTitle>
            <div className="flex items-center space-x-2 text-muted-foreground mb-2">
              <Building className="h-4 w-4" />
              <span className="font-medium">{internship.company}</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{internship.location}</span>
                {internship.isRemote && (
                  <Badge variant="secondary" className="ml-1">
                    Remote
                  </Badge>
                )}
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{internship.duration}</span>
              </div>
            </div>
          </div>
          <Badge variant="outline">{internship.field}</Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-muted-foreground text-sm text-pretty line-clamp-3">{internship.description}</p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Key Requirements:</h4>
            <div className="flex flex-wrap gap-2">
              {internship.requirements.slice(0, 3).map((req, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {req}
                </Badge>
              ))}
              {internship.requirements.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{internship.requirements.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>Posted {internship.postedDate}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{internship.applicants} applicants</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-foreground">{internship.stipend}</div>
              <div className="text-xs text-muted-foreground">per month</div>
            </div>
          </div>

          <Button className="w-full">Apply Now</Button>
        </div>
      </CardContent>
    </Card>
  )
}
