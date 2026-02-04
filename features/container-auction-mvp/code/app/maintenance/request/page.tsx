
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, Upload } from "lucide-react"

const formSchema = z.object({
    containerId: z.string().min(4, {
        message: "Container ID must be at least 4 characters.",
    }),
    location: z.string().min(2, {
        message: "Location must be at least 2 characters.",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }),
    preferredDate: z.string().optional(),
})

export default function MaintenanceRequestPage() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [photos, setPhotos] = useState<string[]>([])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            containerId: "",
            location: "",
            description: "",
            preferredDate: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        try {
            const response = await fetch("/api/maintenance/create", {
                method: "POST",
                body: JSON.stringify({ ...values, photos }),
                headers: {
                    "Content-Type": "application/json",
                }
            })

            if (response.ok) {
                router.push("/maintenance") // Redirect to dashboard
            } else {
                console.error("Failed to submit request")
            }
        } catch (error) {
            console.error("Error submitting request:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    // Mock Photo Upload Handler
    const handleMockUpload = () => {
        const newPhoto = `photo-${photos.length + 1}.jpg`;
        setPhotos([...photos, newPhoto]);
    }

    return (
        <div className="container max-w-2xl py-10">
            <Card>
                <CardHeader>
                    <CardTitle>Request Maintenance Service</CardTitle>
                    <CardDescription>Submit a repair request for your container.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                            <FormField
                                control={form.control}
                                name="containerId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Container ID</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. MSKU1234567" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Location</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Port or Depot location" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Damage Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Describe the damage (e.g., door locking mechanism broken, dented side panel)..."
                                                className="min-h-[100px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="preferredDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Preferred Date (Optional)</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="space-y-3">
                                <FormLabel>Evidence Photos</FormLabel>
                                <div className="flex flex-wrap gap-4">
                                    {photos.map((photo, index) => (
                                        <div key={index} className="h-20 w-20 bg-muted flex items-center justify-center rounded-md border text-xs text-muted-foreground">
                                            {photo}
                                        </div>
                                    ))}
                                    <Button type="button" variant="outline" className="h-20 w-20 border-dashed" onClick={handleMockUpload}>
                                        <Upload className="h-4 w-4" />
                                        <span className="sr-only">Upload</span>
                                    </Button>
                                </div>
                                <FormDescription>
                                    Upload photos of the damage to help providers quote accurately.
                                </FormDescription>
                            </div>

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                                    </>
                                ) : (
                                    "Submit Request"
                                )}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
