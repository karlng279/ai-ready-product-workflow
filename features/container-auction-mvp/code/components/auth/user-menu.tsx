"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { User, Package, Gavel, LogOut } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { Loader2 } from 'lucide-react'

interface UserMenuProps {
    onLoginClick: () => void
}

export function UserMenu({ onLoginClick }: UserMenuProps) {
    const { user, logout, isAuthenticated } = useAuth()
    const router = useRouter()
    const [isLoggingOut, setIsLoggingOut] = useState(false)

    const handleLogout = async () => {
        setIsLoggingOut(true)
        try {
            await logout()
            router.push('/')
        } catch (error) {
            console.error('Logout failed:', error)
        } finally {
            setIsLoggingOut(false)
        }
    }

    // Not logged in state
    if (!isAuthenticated || !user) {
        return (
            <Button onClick={onLoginClick} className="bg-primary hover:bg-primary/90">
                Login
            </Button>
        )
    }

    // Logged in state
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full hover:ring-2 hover:ring-primary/20 transition-all"
                    aria-label="User menu"
                >
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                            {user.initials}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56 mt-2">
                {/* User Info Header */}
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {user.email}
                        </p>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                {/* Menu Items */}
                <DropdownMenuItem
                    onClick={() => router.push('/profile')}
                    className="cursor-pointer"
                >
                    <User className="mr-2 h-4 w-4" />
                    User Profile
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() => router.push('/inventory')}
                    className="cursor-pointer"
                >
                    <Package className="mr-2 h-4 w-4" />
                    Manage Inventory
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() => router.push('/bids')}
                    className="cursor-pointer"
                >
                    <Gavel className="mr-2 h-4 w-4" />
                    My Bids
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* Logout */}
                <DropdownMenuItem
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="cursor-pointer"
                >
                    {isLoggingOut ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Logging out...
                        </>
                    ) : (
                        <>
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </>
                    )}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
