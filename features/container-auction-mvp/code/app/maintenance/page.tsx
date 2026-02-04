
import { Metadata } from "next"
import Link from "next/link"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { JobCard } from "@/components/maintenance/job-card"
import { RepairJob } from "@/lib/types"

export const metadata: Metadata = {
    title: "Repair Jobs",
    description: "Browse and quote on maintenance jobs",
}

// Fetch repair jobs from API
async function getRepairJobs(): Promise<RepairJob[]> {
    try {
        const response = await fetch('http://localhost:3000/api/maintenance', {
            cache: 'no-store' // Ensure fresh data on each request
        });

        if (!response.ok) {
            throw new Error('Failed to fetch repair jobs');
        }

        const jobs = await response.json();
        return jobs;
    } catch (error) {
        console.error('Error fetching repair jobs:', error);
        return [];
    }
}

export default async function MaintenancePage() {
    const jobs = await getRepairJobs()

    return (
        <div className="container mx-auto py-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Repair Jobs</h2>
                    <p className="text-muted-foreground">Find and quote on container maintenance requests.</p>
                </div>
                <Link href="/maintenance/request">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Request Service
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    )
}
