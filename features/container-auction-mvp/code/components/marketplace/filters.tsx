"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"

export function MarketplaceFilters() {
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [expandType, setExpandType] = useState(true)
    const [expandCondition, setExpandCondition] = useState(true)

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Filters</h3>
                <Button variant="link" className="p-0 h-auto text-sm">Reset</Button>
            </div>

            <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Listing Type</h4>
                <RadioGroup defaultValue="all">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="all-types" />
                        <Label htmlFor="all-types">All</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sale" id="sale" />
                        <Label htmlFor="sale">Buy Now</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="auction" id="auction" />
                        <Label htmlFor="auction">Auction</Label>
                    </div>
                </RadioGroup>
            </div>

            <div className="border-t pt-4">
                <button
                    className="flex items-center justify-between w-full font-medium mb-2"
                    onClick={() => setExpandType(!expandType)}
                >
                    Container Type
                    <span className="text-xs">{expandType ? "—" : "+"}</span>
                </button>
                {expandType && (
                    <div className="space-y-2 pl-1">
                        {/* Simulated checkboxes using native inputs for MVP since UI component missing */}
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="20ft-std" className="h-4 w-4 rounded border-gray-300" />
                            <Label htmlFor="20ft-std">20ft Standard</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="40ft-std" className="h-4 w-4 rounded border-gray-300" />
                            <Label htmlFor="40ft-std">40ft Standard</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="40ft-hc" className="h-4 w-4 rounded border-gray-300" />
                            <Label htmlFor="40ft-hc">40ft High Cube</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="reefer" className="h-4 w-4 rounded border-gray-300" />
                            <Label htmlFor="reefer">Refrigerated</Label>
                        </div>
                    </div>
                )}
            </div>

            <div className="border-t pt-4">
                <button
                    className="flex items-center justify-between w-full font-medium mb-2"
                    onClick={() => setExpandCondition(!expandCondition)}
                >
                    Condition
                    <span className="text-xs">{expandCondition ? "—" : "+"}</span>
                </button>
                {expandCondition && (
                    <div className="space-y-2 pl-1">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="new" className="h-4 w-4 rounded border-gray-300" />
                            <Label htmlFor="new">New (One Trip)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="used-a" className="h-4 w-4 rounded border-gray-300" />
                            <Label htmlFor="used-a">Used - Grade A</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="used-b" className="h-4 w-4 rounded border-gray-300" />
                            <Label htmlFor="used-b">Used - Grade B</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="damaged" className="h-4 w-4 rounded border-gray-300" />
                            <Label htmlFor="damaged">Damaged / As Is</Label>
                        </div>
                    </div>
                )}
            </div>

            <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Price Range</h4>
                <div className="flex items-center space-x-2">
                    <Input
                        type="number"
                        placeholder="Min"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="w-24"
                    />
                    <span className="text-muted-foreground">-</span>
                    <Input
                        type="number"
                        placeholder="Max"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="w-24"
                    />
                </div>
            </div>
        </div>
    )
}
