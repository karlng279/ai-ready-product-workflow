
import { RepairJob } from "@/lib/types"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Wrench } from "lucide-react"

interface JobCardProps {
    job: RepairJob
}

export function JobCard({ job }: JobCardProps) {
    const urgencyColor = (dateString?: string) => {
        if (!dateString) return "bg-gray-500"
        const date = new Date(dateString)
        const now = new Date()
        const diff = (date.getTime() - now.getTime()) / (1000 * 3600 * 24)

        if (diff < 3) return "bg-red-500" // Urgent
        if (diff < 7) return "bg-yellow-500" // Moderate
        return "bg-green-500" // Relaxed
    }

    return (
        <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <span className="font-bold text-lg">{job.containerId}</span>
                        <span className="text-sm text-muted-foreground flex items-center mt-1">
                            <MapPin className="h-3 w-3 mr-1" /> {job.location}
                        </span>
                    </div>
                    {job.preferredDate && (
                        <Badge className={`${urgencyColor(job.preferredDate)} hover:${urgencyColor(job.preferredDate)}`}>
                            Due: {new Date(job.preferredDate).toLocaleDateString()}
                        </Badge>
                    )}
                </div>
            </CardHeader>
            <CardContent className="p-4 pt-2 flex-1">
                <div className="flex items-start space-x-2 bg-muted/30 p-2 rounded text-sm text-muted-foreground">
                    <Wrench className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <p className="line-clamp-3">{job.description}</p>
                </div>
                <div className="mt-3 flex gap-2">
                    {job.photos?.map((photo, i) => (
                        <div key={i} className="h-12 w-12 bg-gray-200 rounded animate-pulse" title="Mock Photo" />
                    ))}
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 mt-auto">
                <Button className="w-full" variant="outline">
                    View & Quote
                </Button>
            </CardFooter>
        </Card>
    )
}
