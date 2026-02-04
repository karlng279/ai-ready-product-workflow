"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

interface User {
    id: string
    name: string
    email: string
    avatar?: string
    initials: string
}

interface AuthContextType {
    user: User | null
    isAuthenticated: boolean
    isLoading: boolean
    login: (email: string, password: string, remember: boolean) => Promise<void>
    logout: () => Promise<void>
    checkSession: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    // Check for existing session on mount
    useEffect(() => {
        checkSession()
    }, [])

    const checkSession = () => {
        try {
            const authData = localStorage.getItem('auth')
            if (authData) {
                const { user: storedUser, expiresAt } = JSON.parse(authData)

                // Check if session is still valid
                if (new Date(expiresAt) > new Date()) {
                    setUser(storedUser)
                } else {
                    // Session expired, clear it
                    localStorage.removeItem('auth')
                }
            }
        } catch (error) {
            console.error('Error checking session:', error)
            localStorage.removeItem('auth')
        } finally {
            setIsLoading(false)
        }
    }

    const login = async (email: string, password: string, remember: boolean) => {
        setIsLoading(true)
        try {
            // Mock API call - replace with actual API endpoint
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, remember }),
            })

            if (!response.ok) {
                const error = await response.json()
                throw new Error(error.error || 'Login failed')
            }

            const data = await response.json()

            // Generate initials from name
            const initials = data.user.name
                .split(' ')
                .map((part: string) => part[0])
                .join('')
                .toUpperCase()
                .slice(0, 2)

            const userWithInitials = { ...data.user, initials }

            // Calculate expiry time
            const expiryHours = remember ? 24 * 7 : 24 // 7 days or 24 hours
            const expiresAt = new Date(Date.now() + expiryHours * 60 * 60 * 1000).toISOString()

            // Store in localStorage
            localStorage.setItem('auth', JSON.stringify({
                user: userWithInitials,
                token: data.token,
                expiresAt,
                remember,
            }))

            setUser(userWithInitials)
        } catch (error) {
            console.error('Login error:', error)
            throw error
        } finally {
            setIsLoading(false)
        }
    }

    const logout = async () => {
        setIsLoading(true)
        try {
            // Optional: Call logout API to invalidate token server-side
            await fetch('/api/auth/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            })
        } catch (error) {
            console.error('Logout error:', error)
        } finally {
            // Clear local state regardless of API call result
            localStorage.removeItem('auth')
            setUser(null)
            setIsLoading(false)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                isLoading,
                login,
                logout,
                checkSession,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
