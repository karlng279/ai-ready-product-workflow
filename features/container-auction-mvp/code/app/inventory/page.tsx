
import { Metadata } from "next"
import Link from "next/link"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { ListingsTable } from "@/components/inventory/listings-table"
import { Listing } from "@/lib/types"

export const metadata: Metadata = {
    title: "Inventory Dashboard",
    description: "Manage your container listings",
}

// Fetch listings from API
async function getListings(): Promise<Listing[]> {
    try {
        const response = await fetch('http://localhost:3000/api/listings', {
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error('Failed to fetch listings');
        }

        const listings = await response.json();
        return listings;
    } catch (error) {
        console.error('Error fetching listings:', error);
        return [];
    }
}

export default function InventoryPage() {
    return (
        <ProtectedRoute>
            <InventoryPageContent />
        </ProtectedRoute>
    )
}

async function InventoryPageContent() {
    const listings = await getListings()

    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Inventory</h2>
                <div className="flex items-center space-x-2">
                    <Link href="/inventory/create">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" /> Create Listing
                        </Button>
                    </Link>
                </div>
            </div>
            <Tabs defaultValue="all" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="all">All Listings</TabsTrigger>
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="draft">Drafts</TabsTrigger>
                    <TabsTrigger value="sold">Sold</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>All Listings</CardTitle>
                            <CardDescription>
                                Manage all your container listings for sale and auction.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex mb-4">
                                <Input
                                    placeholder="Filter listings..."
                                    className="max-w-sm"
                                />
                            </div>
                            <ListingsTable data={listings} />
                        </CardContent>
                    </Card>
                </TabsContent>
                {/* Placeholder contents for other tabs for now */}
                <TabsContent value="active">
                    <Card>
                        <CardHeader>
                            <CardTitle>Active</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ListingsTable data={listings.filter(l => l.status === 'active')} />
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="draft">
                    <Card>
                        <CardHeader>
                            <CardTitle>Drafts</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ListingsTable data={listings.filter(l => l.status === 'draft')} />
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="sold">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sold / Ended</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ListingsTable data={listings.filter(l => ['sold', 'ended'].includes(l.status))} />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
