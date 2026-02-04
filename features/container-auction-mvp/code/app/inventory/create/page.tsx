"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { ArrowLeft, Upload, X, Loader2, DollarSign } from "lucide-react"

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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/layout/header"
import { Label } from "@/components/ui/label"


const CONDITION_OPTIONS = ["New", "Used - A", "Used - B", "Damaged"] as const;

const formSchema = z.object({
    title: z.string().min(10, {
        message: "Title must be at least 10 characters.",
    }),
    type: z.string().min(1, { message: "Please select a container type." }),
    condition: z.enum(["New", "Used - A", "Used - B", "Damaged"], {
        message: "Please select a condition.",
    }),
    price: z.coerce.number().positive({
        message: "Price must be greater than 0.",
    }),
    quantity: z.coerce.number().int().positive().default(1),
    location: z.string().min(2, {
        message: "Location is required.",
    }),
    description: z.string().optional(),
})

export default function CreateListingPage() {
    const router = useRouter() // Use next/navigation for app router
    const [photos, setPhotos] = useState<string[]>([])
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema) as any,
        defaultValues: {
            title: "",
            price: undefined,
            quantity: 1,
            description: "",
            location: "",
        } as any, // Cast to any to handle type coercion in form
    })

    // Mock photo upload
    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            const url = URL.createObjectURL(file)
            setPhotos((prev) => [...prev, url])
        }
    }

    const removePhoto = (index: number) => {
        setPhotos((prev) => prev.filter((_, i) => i !== index))
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        try {
            const response = await fetch("/api/listings/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...values, photos }),
            })

            if (response.ok) {
                // Redirect to inventory
                // router.push("/inventory") -> import from next/navigation
                window.location.href = "/inventory"
            } else {
                alert("Failed to create listing")
            }
        } catch (error) {
            console.error(error)
            alert("Error submitting form")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <Header />

            <main className="container mx-auto px-6 py-8 max-w-4xl">
                <Button
                    variant="ghost"
                    className="mb-6 pl-0 hover:bg-transparent hover:text-magenta"
                    onClick={() => window.history.back()}
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Inventory
                </Button>

                <div className="flex flex-col gap-8 animate-reveal">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Create New Listing</h1>
                        <p className="text-muted-foreground mt-2">Fill in the details to list your container for sale.</p>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                            {/* Basic Info */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Basic Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Listing Title</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="e.g. 20ft Dry Container - Good Condition" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="type"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Container Type</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select type" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="20ft Standard">20ft Standard</SelectItem>
                                                            <SelectItem value="40ft Standard">40ft Standard</SelectItem>
                                                            <SelectItem value="40ft High Cube">40ft High Cube</SelectItem>
                                                            <SelectItem value="Refrigerated">Refrigerated</SelectItem>
                                                        </SelectContent>
                                                    </Select>
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
                                                        <Input placeholder="e.g. Rotterdam, NL" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="condition"
                                        render={({ field }) => (
                                            <FormItem className="space-y-3">
                                                <FormLabel>Condition</FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="flex flex-wrap gap-4"
                                                    >
                                                        {CONDITION_OPTIONS.map((cond) => (
                                                            <FormItem key={cond} className="flex items-center space-x-0 space-y-0">
                                                                <FormControl>
                                                                    <RadioGroupItem value={cond} className="peer sr-only" />
                                                                </FormControl>
                                                                <Label
                                                                    htmlFor={cond} // Fixed: Provide ID or handle implicitly if Label wraps. But RadioGroupItem has id={id}. 
                                                                    // Actually ShadCN Example uses FormItem around each RadioGroupItem.
                                                                    // Simplified: Just use peer-checked styling on a div/label.
                                                                    className="cursor-pointer rounded-full border-2 border-muted bg-white px-4 py-2 hover:bg-gray-50 peer-data-[state=checked]:border-magenta peer-data-[state=checked]:text-magenta transition-all"
                                                                >
                                                                    {cond}
                                                                </Label>
                                                            </FormItem>
                                                        ))}
                                                    </RadioGroup>
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
                                                <FormLabel>Description</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Describe the condition, history, or specific details..."
                                                        className="resize-none"
                                                        rows={4}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </CardContent>
                            </Card>

                            {/* Pricing */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Pricing & Quantity</CardTitle>
                                </CardHeader>
                                <CardContent className="grid md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="price"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Price (USD)</FormLabel>
                                                <FormControl>
                                                    <div className="relative">
                                                        <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                                        <Input type="number" placeholder="0.00" className="pl-10" {...field} />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="quantity"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Quantity</FormLabel>
                                                <FormControl>
                                                    <Input type="number" min={1} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </CardContent>
                            </Card>

                            {/* Photos */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Photos</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                        {photos.map((url, index) => (
                                            <div key={index} className="relative aspect-square rounded-lg overflow-hidden border bg-gray-100 group">
                                                <img src={url} alt={`Listing ${index}`} className="w-full h-full object-cover" />
                                                <button
                                                    type="button"
                                                    onClick={() => removePhoto(index)}
                                                    className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <X className="h-4 w-4" />
                                                </button>
                                            </div>
                                        ))}
                                        <label className="flex flex-col items-center justify-center aspect-square rounded-lg border-2 border-dashed border-gray-300 hover:border-magenta hover:bg-magenta/5 cursor-pointer transition-colors">
                                            <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                                            <span className="text-sm text-muted-foreground">Upload Photo</span>
                                            <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload} />
                                        </label>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Upload at least one photo. Supported formats: JPG, PNG.
                                    </p>
                                </CardContent>
                            </Card>

                            <div className="flex justify-end gap-4">
                                <Button type="button" variant="outline" onClick={() => window.history.back()}>
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="bg-magenta hover:bg-magenta-dark min-w-[150px]"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Publishing...
                                        </>
                                    ) : (
                                        "Publish Listing"
                                    )}
                                </Button>
                            </div>

                        </form>
                    </Form>
                </div>
            </main>
        </div>
    )
}
