import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const body = await request.json();

    // In a real app, we would validate and save to DB
    console.log('Received listing:', body);

    return NextResponse.json({
        success: true,
        message: "Listing created successfully",
        id: "l_new_" + Date.now()
    });
}
