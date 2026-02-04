"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { useAuth } from '@/lib/auth-context'
import { Loader2 } from 'lucide-react'

const loginSchema = z.object({
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    remember: z.boolean().optional().default(false),
})

type LoginFormData = z.infer<typeof loginSchema>

interface LoginModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onLoginSuccess?: () => void
    title?: string
    description?: string
}

export function LoginModal({
    open,
    onOpenChange,
    onLoginSuccess,
    title = 'Login to Your Account',
    description,
}: LoginModalProps) {
    const { login } = useAuth()
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
        setValue,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema) as any,
        defaultValues: {
            email: '',
            password: '',
            remember: false,
        },
    })

    const rememberValue = watch('remember')

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true)
        setError('')

        try {
            await login(data.email, data.password, data.remember ?? false)
            reset()
            onOpenChange(false)
            onLoginSuccess?.()
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Invalid email or password')
            // Shake animation is handled by CSS
        } finally {
            setIsLoading(false)
        }
    }

    const handleClose = () => {
        if (!isLoading) {
            reset()
            setError('')
            onOpenChange(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Email Field */}
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            {...register('email')}
                            disabled={isLoading}
                            className={errors.email ? 'border-destructive' : ''}
                        />
                        {errors.email && (
                            <p className="text-sm text-destructive">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            {...register('password')}
                            disabled={isLoading}
                            className={errors.password ? 'border-destructive' : ''}
                        />
                        {errors.password && (
                            <p className="text-sm text-destructive">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="remember"
                            checked={rememberValue}
                            onCheckedChange={(checked: boolean) => setValue('remember', checked)}
                            disabled={isLoading}
                        />
                        <Label
                            htmlFor="remember"
                            className="text-sm font-normal cursor-pointer"
                        >
                            Remember me
                        </Label>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md border border-destructive/20">
                            {error}
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-col-reverse sm:flex-row gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleClose}
                            disabled={isLoading}
                            className="w-full sm:w-auto"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full sm:w-auto"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Logging in...
                                </>
                            ) : (
                                'Login →'
                            )}
                        </Button>
                    </div>
                </form>

                {/* Sign Up Link - Future Feature */}
                {/* <div className="text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link href="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </div> */}
            </DialogContent>
        </Dialog>
    )
}
