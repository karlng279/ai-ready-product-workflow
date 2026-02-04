import { NextResponse } from 'next/server'
import users from '@/data/users.json'

export async function POST(request: Request) {
    try {
        const { email, password, remember } = await request.json()

        // Validate required fields
        if (!email || !password) {
            return NextResponse.json(
                { error: 'Email and password are required' },
                { status: 400 }
            )
        }

        // Find user by email
        const user = users.find(u => u.email === email)

        // Check if user exists and password matches
        if (!user || user.password !== password) {
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            )
        }

        // Return user data (excluding password)
        const { password: _, ...userWithoutPassword } = user

        // Mock token (in production, generate a real JWT)
        const mockToken = `mock_token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

        return NextResponse.json({
            user: userWithoutPassword,
            token: mockToken,
        })
    } catch (error) {
        console.error('Login error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
