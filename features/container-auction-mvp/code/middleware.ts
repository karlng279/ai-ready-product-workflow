import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Protected routes that require authentication
const protectedRoutes = [
    '/inventory',
    '/maintenance/request',
    '/profile',
    '/bids',
]

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Check if the current path is a protected route
    const isProtectedRoute = protectedRoutes.some(route =>
        pathname.startsWith(route)
    )

    if (isProtectedRoute) {
        // In a client-side app with localStorage auth, we can't check auth in middleware
        // Instead, we'll handle this on the client side in the page components
        // This middleware is here for future server-side auth implementation

        // For now, just pass through
        return NextResponse.next()
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
