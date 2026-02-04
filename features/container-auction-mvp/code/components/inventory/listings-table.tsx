
"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Listing } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Eye, MoreHorizontal } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

interface ListingsTableProps {
    data: Listing[]
}

export function ListingsTable({ data }: ListingsTableProps) {
    const formatPrice = (price?: number) => {
        if (!price) return "-"
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
        }).format(price)
    }

    const getStatusColor = (status: Listing["status"]) => {
        switch (status) {
            case "active":
                return "default" /// Primary color usually
            case "draft":
                return "secondary"
            case "sold":
                return "outline"
            case "ended":
                return "destructive"
            default:
                return "default"
        }
    }

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[300px]">Title</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Condition</TableHead>
                        <TableHead>Price / Current Bid</TableHead>
                        <TableHead>Qty</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={8} className="h-24 text-center">
                                No listings found.
                            </TableCell>
                        </TableRow>
                    ) : (
                        data.map((listing) => (
                            <TableRow key={listing.id}>
                                <TableCell className="font-medium">
                                    <div className="flex flex-col">
                                        <span>{listing.title}</span>
                                        <span className="text-xs text-muted-foreground">ID: {listing.id}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="capitalize">{listing.type}</TableCell>
                                <TableCell>{listing.condition}</TableCell>
                                <TableCell>
                                    {listing.type === "auction" ? (
                                        <div className="flex flex-col">
                                            <span>{formatPrice(listing.currentBid)} (Bid)</span>
                                            {listing.endsAt && (
                                                <span className="text-xs text-muted-foreground">Ends: {new Date(listing.endsAt).toLocaleDateString()}</span>
                                            )}
                                        </div>
                                    ) : (
                                        formatPrice(listing.price)
                                    )}
                                </TableCell>
                                <TableCell>{listing.quantity}</TableCell>
                                <TableCell>{listing.location}</TableCell>
                                <TableCell>
                                    <Badge variant={getStatusColor(listing.status)} className="capitalize">
                                        {listing.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem asChild>
                                                <Link href={`/inventory/${listing.id}`} className="flex items-center cursor-pointer">
                                                    <Eye className="mr-2 h-4 w-4" /> View Details
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href={`/inventory/edit/${listing.id}`} className="flex items-center cursor-pointer">
                                                    <Edit className="mr-2 h-4 w-4" /> Edit Listing
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
