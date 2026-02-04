import { NextResponse } from 'next/server';
import { Listing } from '@/lib/types';
import listings from '@/data/listings.json';

export async function GET() {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(listings as Listing[]);
}
