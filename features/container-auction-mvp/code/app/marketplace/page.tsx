
import { Metadata } from "next"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MarketplaceFilters } from "@/components/marketplace/filters"
import { ListingCard } from "@/components/marketplace/listing-card"
import { Search, SlidersHorizontal } from "lucide-react"
import { Listing } from "@/lib/types"

export const metadata: Metadata = {
    title: "Container Marketplace",
    description: "Buy and sell shipping containers",
}

// Fetch listings from API
async function getMarketplaceListings(): Promise<Listing[]> {
    try {
        const response = await fetch('http://localhost:3000/api/listings', {
            cache: 'no-store' // Ensure fresh data on each request
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

export default async function MarketplacePage() {
    const listings = await getMarketplaceListings()

    return (
        <div className="container mx-auto py-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="sticky top-4">
                        <MarketplaceFilters />
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1">
                    {/* Search Header */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search containers, location, type..."
                                className="pl-8"
                            />
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto">
                            <Button variant="outline" className="flex-1 sm:flex-none">
                                <SlidersHorizontal className="mr-2 h-4 w-4 md:hidden" />
                                Sort: Newest
                            </Button>
                        </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {listings.map((listing) => (
                            <ListingCard key={listing.id} listing={listing} />
                        ))}
                    </div>

                    {/* Pagination (Stub) */}
                    <div className="mt-8 flex justify-center">
                        <Button variant="ghost">Load More</Button>
                    </div>
                </main>
            </div>
        </div>
    )
}
