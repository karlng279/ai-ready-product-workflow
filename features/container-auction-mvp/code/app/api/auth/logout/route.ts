import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        // Mock logout - in production, invalidate the token server-side

        return NextResponse.json({
            success: true,
        })
    } catch (error) {
        console.error('Logout error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
