# COMP-AUTH-001: Login Modal

**Component ID:** COMP-AUTH-001  
**Component Name:** Login Modal  
**Type:** Modal Dialog  
**Priority:** Must-have  
**Related Story:** ST-014  
**Status:** Specification Complete

---

## Purpose

A modal dialog that allows users to log in to the platform using email and password credentials. This is the primary authentication entry point for the MVP.

---

## Visual Structure

### Desktop (Modal Overlay)
```
+------------------------------------------+
|                                          |
|   +--------------------------------+     |
|   |  Login to Your Account         |     |
|   +--------------------------------+     |
|   |                                |     |
|   |  Email Address                 |     |
|   |  [________________________]    |     |
|   |                                |     |
|   |  Password                      |     |
|   |  [________________________]    |     |
|   |                                |     |
|   |  [ ] Remember me               |     |
|   |                                |     |
|   |  [Cancel]  [Login →]           |     |
|   |                                |     |
|   |  Don't have an account?        |     |
|   |  Sign up                       |     |
|   +--------------------------------+     |
|                                          |
+------------------------------------------+
```

### Mobile (Full Screen Modal)
```
+---------------------------+
| ← Back                    |
+---------------------------+
|                           |
|  Login to Your Account    |
|                           |
|  Email Address            |
|  [___________________]    |
|                           |
|  Password                 |
|  [___________________]    |
|                           |
|  [ ] Remember me          |
|                           |
|  [Login →]                |
|                           |
|  Don't have an account?   |
|  Sign up                  |
|                           |
+---------------------------+
```

---

## Component Breakdown

### ShadCN Components Used
- **Dialog** - Modal container
- **DialogContent** - Modal content wrapper
- **DialogHeader** - Title section
- **DialogTitle** - "Login to Your Account"
- **DialogDescription** - Optional subtitle
- **Input** - Email and password fields
- **Button** - Cancel and Login buttons
- **Checkbox** - Remember me option
- **Label** - Form labels

### Layout Structure
```tsx
<Dialog>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>Login to Your Account</DialogTitle>
    </DialogHeader>
    
    <form onSubmit={handleLogin}>
      <div className="space-y-4">
        {/* Email Field */}
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" required />
        </div>
        
        {/* Password Field */}
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        
        {/* Remember Me */}
        <div className="flex items-center">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        
        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button type="submit">Login →</Button>
        </div>
      </div>
    </form>
    
    {/* Sign Up Link */}
    <div className="text-center text-sm">
      Don't have an account? <Link href="/signup">Sign up</Link>
    </div>
  </DialogContent>
</Dialog>
```

---

## States & Variations

### Default State
- Empty form fields
- Login button enabled
- No error messages

### Loading State
- Login button shows spinner
- Button text: "Logging in..."
- Form inputs disabled

### Error State
- Red border on invalid fields
- Error message below form: "Invalid email or password"
- Shake animation on modal

### Success State
- Modal closes automatically
- User redirected to intended page or dashboard
- Session stored in localStorage

---

## Behavior & Interactions

### Opening the Modal
**Trigger:** User clicks "Login" button in header
**Animation:** Fade in overlay + scale up modal (200ms)

### Form Validation
- **Email:** Required, valid email format
- **Password:** Required, minimum 6 characters
- **Client-side validation:** Show errors on blur
- **Submit validation:** Prevent submission if invalid

### Login Flow
1. User enters credentials
2. Click "Login" button
3. Show loading state
4. Call auth API
5. On success: Close modal, update auth state, redirect
6. On error: Show error message, shake animation

### Closing the Modal
**Triggers:**
- Click "Cancel" button
- Click overlay (outside modal)
- Press Escape key
- Successful login

**Animation:** Fade out overlay + scale down modal (150ms)

---

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (≥768px) | Centered modal, max-width 28rem |
| Tablet (640-767px) | Centered modal, 90% width |
| Mobile (<640px) | Full-screen modal with back button |

---

## Accessibility

### Keyboard Navigation
- **Tab:** Move between fields
- **Enter:** Submit form
- **Escape:** Close modal

### ARIA Attributes
```tsx
<Dialog>
  <DialogContent role="dialog" aria-labelledby="login-title" aria-modal="true">
    <DialogTitle id="login-title">Login to Your Account</DialogTitle>
    {/* Form fields */}
  </DialogContent>
</Dialog>
```

### Focus Management
- Focus trapped within modal when open
- First field (email) receives focus on open
- Focus returns to trigger button on close

### Screen Reader Support
- Clear labels for all inputs
- Error messages announced
- Loading state announced

---

## Styling (Tailwind Classes)

### Modal Container
```tsx
className="sm:max-w-md"
```

### Form Fields
```tsx
// Input
className="w-full"

// Label
className="text-sm font-medium"

// Error message
className="text-sm text-destructive mt-1"
```

### Buttons
```tsx
// Login button
className="w-full sm:w-auto bg-primary hover:bg-primary/90"

// Cancel button
className="w-full sm:w-auto"
```

---

## Data Flow

### Props
```typescript
interface LoginModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onLoginSuccess?: () => void
}
```

### Form Data
```typescript
interface LoginFormData {
  email: string
  password: string
  remember: boolean
}
```

### Auth Context Integration
```typescript
const { login, isLoading, error } = useAuth()

const handleSubmit = async (data: LoginFormData) => {
  await login(data.email, data.password, data.remember)
  onLoginSuccess?.()
}
```

---

## Error Handling

### Validation Errors
- Empty email: "Email is required"
- Invalid email: "Please enter a valid email"
- Empty password: "Password is required"
- Short password: "Password must be at least 6 characters"

### API Errors
- Invalid credentials: "Invalid email or password"
- Network error: "Connection failed. Please try again."
- Server error: "Something went wrong. Please try again later."

---

## Out of Scope (MVP)

- Password reset/forgot password link
- Social login (Google, Facebook)
- Two-factor authentication
- Email verification
- CAPTCHA
- "Show password" toggle (can be added later)

---

## Implementation Notes

### File Location
```
components/auth/login-modal.tsx
```

### Dependencies
- `@/components/ui/dialog`
- `@/components/ui/input`
- `@/components/ui/button`
- `@/components/ui/label`
- `@/components/ui/checkbox`
- `@/lib/auth-context` (for useAuth hook)
- `react-hook-form` + `zod` for validation

### Example Usage
```tsx
import { LoginModal } from '@/components/auth/login-modal'

function Header() {
  const [showLogin, setShowLogin] = useState(false)
  
  return (
    <>
      <Button onClick={() => setShowLogin(true)}>Login</Button>
      <LoginModal 
        open={showLogin} 
        onOpenChange={setShowLogin}
        onLoginSuccess={() => router.push('/inventory')}
      />
    </>
  )
}
```

---

## Quality Gate Checklist

- [ ] All ShadCN components properly imported
- [ ] Form validation with Zod schema
- [ ] Loading states implemented
- [ ] Error states with clear messages
- [ ] Keyboard navigation works
- [ ] Focus management correct
- [ ] Mobile responsive (full-screen on small screens)
- [ ] ARIA attributes present
- [ ] Escape key closes modal
- [ ] Click outside closes modal
- [ ] Success callback fires on login
- [ ] Auth context integration complete
