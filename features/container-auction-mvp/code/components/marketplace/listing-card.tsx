
import Link from "next/link"
import { Listing } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MapPin, Clock } from "lucide-react"

interface ListingCardProps {
    listing: Listing
}

export function ListingCard({ listing }: ListingCardProps) {
    const formatPrice = (price?: number) => {
        if (!price) return "Contact for Price"
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
        }).format(price)
    }

    return (
        <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
            <div className="aspect-video w-full bg-muted relative flex items-center justify-center text-muted-foreground">
                {/* Placeholder for Image */}
                <span>Image Placeholder</span>
                <div className="absolute top-2 right-2">
                    <Badge variant={listing.type === 'auction' ? 'destructive' : 'default'} className="uppercase">
                        {listing.type}
                    </Badge>
                </div>
            </div>
            <CardHeader className="p-4 pb-2">
                <h3 className="font-semibold text-lg line-clamp-1" title={listing.title}>
                    {listing.title}
                </h3>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <MapPin className="mr-1 h-3 w-3" />
                    {listing.location}
                </div>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-1">
                <div className="mt-2 text-sm">
                    <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Condition:</span>
                        <span className="font-medium">{listing.condition}</span>
                    </div>
                    {listing.type === 'auction' && listing.endsAt && (
                        <div className="flex justify-between py-1 text-orange-600 font-medium">
                            <span className="flex items-center"><Clock className="mr-1 h-3 w-3" /> Ends in:</span>
                            {/* Simplified timeframe for MVP */}
                            <span>2d 4h</span>
                        </div>
                    )}
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex items-center justify-between border-t bg-muted/20 mt-auto">
                <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">
                        {listing.type === 'auction' ? 'Current Bid' : 'Price'}
                    </span>
                    <span className="font-bold text-lg">
                        {listing.type === 'auction' ? formatPrice(listing.currentBid) : formatPrice(listing.price)}
                    </span>
                </div>
                <Link href={`/marketplace/${listing.id}`}>
                    <Button size="sm">
                        {listing.type === 'auction' ? 'Bid Now' : 'Buy Now'}
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
