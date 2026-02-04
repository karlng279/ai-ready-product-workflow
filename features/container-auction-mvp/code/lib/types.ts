export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'seller' | 'buyer' | 'provider';
}

export interface Container {
    id: string;
    number: string;
    type: string;
    condition: string;
    location: string;
    ownerId: string;
}

export interface Listing {
    id: string;
    containerId: string;
    type: 'sale' | 'auction';
    title: string;
    price?: number;
    currentBid?: number; // For auctions
    quantity: number;
    description?: string;
    endsAt?: string;
    status: 'active' | 'draft' | 'ended' | 'sold';
    sellerId: string;
    location: string; // Denormalized location for easier display
    condition: string; // Denormalized condition
    container?: Container; // Joined data
}

export interface RepairJob {
    id: string;
    containerId: string;
    ownerId: string;
    description: string;
    location: string;
    status: 'open' | 'quoted' | 'assigned' | 'completed';
    postedAt: string;
    preferredDate?: string;
    photos?: string[];
}
