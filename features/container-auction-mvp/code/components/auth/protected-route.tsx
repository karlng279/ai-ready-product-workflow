"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { LoginModal } from '@/components/auth/login-modal'

interface ProtectedRouteProps {
    children: React.ReactNode
    redirectTo?: string
}

export function ProtectedRoute({ children, redirectTo = '/' }: ProtectedRouteProps) {
    const { isAuthenticated, isLoading } = useAuth()
    const router = useRouter()
    const [showLoginModal, setShowLoginModal] = useState(false)

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            // Show login modal instead of redirecting
            setShowLoginModal(true)
        }
    }, [isAuthenticated, isLoading])

    const handleLoginSuccess = () => {
        setShowLoginModal(false)
        // User is now authenticated, component will re-render with children
    }

    const handleLoginCancel = () => {
        setShowLoginModal(false)
        router.push(redirectTo)
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading...</p>
                </div>
            </div>
        )
    }

    if (!isAuthenticated) {
        return (
            <>
                <div className="flex items-center justify-center min-h-[400px]">
                    <div className="text-center max-w-md">
                        <h2 className="text-2xl font-bold mb-2">Authentication Required</h2>
                        <p className="text-muted-foreground mb-4">
                            Please log in to access this page.
                        </p>
                    </div>
                </div>
                <LoginModal
                    open={showLoginModal}
                    onOpenChange={(open) => {
                        if (!open) handleLoginCancel()
                        setShowLoginModal(open)
                    }}
                    onLoginSuccess={handleLoginSuccess}
                    title="Login Required"
                    description="Please log in to access this page"
                />
            </>
        )
    }

    return <>{children}</>
}
