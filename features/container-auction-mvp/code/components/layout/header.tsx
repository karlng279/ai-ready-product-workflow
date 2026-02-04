"use client"

import { useState } from 'react'
import Link from "next/link"
import { UserMenu } from "@/components/auth/user-menu"
import { LoginModal } from "@/components/auth/login-modal"

export function Header() {
    const [showLoginModal, setShowLoginModal] = useState(false)

    return (
        <>
            <header className="border-b bg-white sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <div className="h-8 w-8 bg-gradient-to-br from-magenta to-teal rounded-lg"></div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">Container Marketplace</span>
                    </Link>

                    {/* Public Navigation - Center */}
                    <nav className="hidden md:flex gap-8">
                        <Link href="/marketplace" className="text-sm font-medium text-gray-600 hover:text-magenta transition-colors">
                            Container Marketplace
                        </Link>
                        <Link href="/maintenance" className="text-sm font-medium text-gray-600 hover:text-magenta transition-colors">
                            Repair Service
                        </Link>
                    </nav>

                    {/* User Menu - Right */}
                    <div className="flex items-center gap-4">
                        <UserMenu onLoginClick={() => setShowLoginModal(true)} />
                    </div>
                </div>
            </header>

            {/* Login Modal */}
            <LoginModal
                open={showLoginModal}
                onOpenChange={setShowLoginModal}
            />
        </>
    )
}
