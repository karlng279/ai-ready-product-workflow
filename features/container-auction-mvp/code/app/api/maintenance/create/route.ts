
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, this would save to the database
    const body = await request.json();
    console.log("Maintenance Request Received:", body);

    return NextResponse.json({ success: true, message: "Request submitted successfully" });
}
