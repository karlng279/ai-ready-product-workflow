# Code Standards

**Version:** 2.0.0
**Last Updated:** 2026-01-31

---

## Overview

This document defines universal code standards that apply to all projects, regardless of which theme is selected. These standards ensure code quality, maintainability, and consistency across the codebase.

---

## TypeScript Standards

### Required TypeScript Configuration

**Always use TypeScript** for type safety and better developer experience.

**tsconfig.json (Minimum Requirements):**
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### Type Definitions

**Component Props:**
```typescript
// ✅ GOOD - Explicit prop types
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: () => void
  children: React.ReactNode
}

export function Button({ variant = 'primary', size = 'md', disabled = false, onClick, children }: ButtonProps) {
  // Implementation
}

// ❌ BAD - No types
export function Button(props) {
  // Implementation
}
```

**State Types:**
```typescript
// ✅ GOOD - Typed state
interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
}

const [user, setUser] = useState<User | null>(null)

// ❌ BAD - Untyped state
const [user, setUser] = useState(null)
```

**API Response Types:**
```typescript
// ✅ GOOD - Typed API responses
interface ApiResponse<T> {
  data: T
  status: number
  message?: string
}

async function fetchUser(id: string): Promise<ApiResponse<User>> {
  const response = await fetch(`/api/users/${id}`)
  return response.json()
}

// ❌ BAD - Untyped API responses
async function fetchUser(id) {
  const response = await fetch(`/api/users/${id}`)
  return response.json()
}
```

---

## Component Structure

### File Organization

**Component File Structure:**
```
components/
├── ui/                          # ShadCN UI components
│   ├── button.tsx
│   ├── card.tsx
│   └── input.tsx
├── features/                    # Feature-specific components
│   ├── user-profile/
│   │   ├── UserProfile.tsx      # Main component
│   │   ├── UserAvatar.tsx       # Sub-component
│   │   └── index.ts             # Barrel export
│   └── dashboard/
│       ├── Dashboard.tsx
│       ├── KpiCard.tsx
│       └── index.ts
└── layout/                      # Layout components
    ├── Header.tsx
    ├── Sidebar.tsx
    └── Footer.tsx
```

### Component Template

**Standard Component Structure:**
```typescript
// UserProfile.tsx
import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// 1. Types/Interfaces (at top)
interface UserProfileProps {
  userId: string
  onEdit?: () => void
}

interface User {
  id: string
  name: string
  email: string
}

// 2. Component
export function UserProfile({ userId, onEdit }: UserProfileProps) {
  // 3. State
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // 4. Effects
  useEffect(() => {
    fetchUser()
  }, [userId])

  // 5. Event Handlers
  async function fetchUser() {
    setLoading(true)
    try {
      const response = await fetch(`/api/users/${userId}`)
      const data = await response.json()
      setUser(data)
    } catch (error) {
      console.error('Failed to fetch user:', error)
    } finally {
      setLoading(false)
    }
  }

  // 6. Early Returns
  if (loading) return <div>Loading...</div>
  if (!user) return <div>User not found</div>

  // 7. Render
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
      <p className="text-gray-600 mb-4">{user.email}</p>
      {onEdit && (
        <Button onClick={onEdit}>Edit Profile</Button>
      )}
    </Card>
  )
}
```

### Component Composition

**Prefer Composition Over Props:**
```typescript
// ✅ GOOD - Composition
<Dialog>
  <DialogTrigger>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
    </DialogHeader>
    <DialogBody>
      Content here
    </DialogBody>
  </DialogContent>
</Dialog>

// ❌ BAD - Too many props
<Dialog
  trigger={<Button>Open</Button>}
  title="Title"
  content="Content here"
  showHeader={true}
  showFooter={false}
/>
```

---

## State Management

### Local State (useState)

Use for component-specific state:
```typescript
function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
```

### Context (React Context)

Use for sharing state across components without prop drilling:
```typescript
// contexts/ThemeContext.tsx
interface ThemeContextType {
  theme: 'mds' | 'corporate' | 'ecommerce' | 'erp'
  setTheme: (theme: ThemeContextType['theme']) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeContextType['theme']>('mds')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

// Usage
function App() {
  const { theme, setTheme } = useTheme()
  return <div className={theme}>...</div>
}
```

### Server State (API Data)

**Don't use useState for API data**. Use proper data fetching libraries:

```typescript
// ✅ GOOD - Using SWR or React Query
import useSWR from 'swr'

function UserList() {
  const { data, error, isLoading } = useSWR<User[]>('/api/users', fetcher)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <ul>
      {data?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

// ❌ BAD - Manual state management for API data
function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  // ... render
}
```

---

## Error Handling

### API Error Handling

**Always handle errors gracefully:**
```typescript
async function fetchUser(id: string): Promise<User> {
  try {
    const response = await fetch(`/api/users/${id}`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw error // Re-throw for upstream handling
  }
}

// Usage in component
function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchUser(userId)
      .then(setUser)
      .catch(err => setError(err.message))
  }, [userId])

  if (error) return <ErrorMessage message={error} />
  if (!user) return <Loading />

  return <div>{user.name}</div>
}
```

### Error Boundaries

**Use Error Boundaries for React errors:**
```typescript
// components/ErrorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 bg-red-50 border border-red-300 rounded-md">
          <h2 className="text-red-700 font-bold mb-2">Something went wrong</h2>
          <p className="text-red-600">{this.state.error?.message}</p>
        </div>
      )
    }

    return this.props.children
  }
}

// Usage
<ErrorBoundary>
  <UserProfile userId={userId} />
</ErrorBoundary>
```

---

## Performance Optimization

### Memoization

**Use React.memo for expensive components:**
```typescript
// ✅ GOOD - Memoized component
export const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }: Props) {
  // Expensive calculations here
  return <div>{data}</div>
})

// ✅ GOOD - useMemo for expensive calculations
function DataTable({ data }: { data: Item[] }) {
  const sortedData = useMemo(() => {
    return data.sort((a, b) => a.name.localeCompare(b.name))
  }, [data])

  return <table>...</table>
}

// ✅ GOOD - useCallback for event handlers passed as props
function Parent() {
  const handleClick = useCallback(() => {
    console.log('Clicked')
  }, [])

  return <ChildComponent onClick={handleClick} />
}
```

### Code Splitting

**Use dynamic imports for large components:**
```typescript
import dynamic from 'next/dynamic'

// ✅ GOOD - Lazy load heavy components
const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false // Don't render on server
})

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <HeavyChart data={chartData} />
    </div>
  )
}
```

---

## Best Practices

### 1. Keep Components Small

**Max 200 lines per component**. If larger, split into sub-components.

```typescript
// ❌ BAD - Too large (500 lines)
function Dashboard() {
  // 500 lines of code
}

// ✅ GOOD - Split into smaller components
function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <KpiCards />
      <ChartSection />
      <DataTable />
    </div>
  )
}
```

### 2. Avoid Prop Drilling

**Use Context or composition instead:**
```typescript
// ❌ BAD - Prop drilling
<Parent user={user}>
  <Child user={user}>
    <GrandChild user={user}>
      <GreatGrandChild user={user} />
    </GrandChild>
  </Child>
</Parent>

// ✅ GOOD - Context
<UserProvider user={user}>
  <Parent>
    <Child>
      <GrandChild>
        <GreatGrandChild /> {/* Uses useUser() hook */}
      </GreatGrandChild>
    </GrandChild>
  </Child>
</Parent>
```

### 3. Use Descriptive Names

```typescript
// ❌ BAD - Unclear names
const d = new Date()
const u = fetchUser()
const btn = <button>Click</button>

// ✅ GOOD - Descriptive names
const currentDate = new Date()
const userData = fetchUser()
const submitButton = <button>Submit</button>
```

### 4. Avoid Magic Numbers

```typescript
// ❌ BAD - Magic numbers
if (user.age > 18) {
  // Can vote
}

// ✅ GOOD - Named constants
const VOTING_AGE = 18
if (user.age >= VOTING_AGE) {
  // Can vote
}
```

### 5. DRY (Don't Repeat Yourself)

```typescript
// ❌ BAD - Repeated code
function getUserName() {
  return user.firstName + ' ' + user.lastName
}

function displayUserName() {
  return user.firstName + ' ' + user.lastName
}

// ✅ GOOD - Reusable utility
function formatFullName(user: User): string {
  return `${user.firstName} ${user.lastName}`
}
```

---

## Testing Standards

### Unit Tests (Required)

**Test all utility functions and hooks:**
```typescript
// utils/formatCurrency.test.ts
import { formatCurrency } from './formatCurrency'

describe('formatCurrency', () => {
  it('formats USD correctly', () => {
    expect(formatCurrency(1234.56, 'USD')).toBe('$1,234.56')
  })

  it('handles zero', () => {
    expect(formatCurrency(0, 'USD')).toBe('$0.00')
  })

  it('handles negative numbers', () => {
    expect(formatCurrency(-100, 'USD')).toBe('-$100.00')
  })
})
```

### Component Tests (Recommended)

**Test user interactions:**
```typescript
// components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>)
    expect(screen.getByText('Click me')).toBeDisabled()
  })
})
```

---

## File Naming Conventions

See [naming-conventions.md](./naming-conventions.md) for detailed naming standards.

**Quick Reference:**
- **Components:** PascalCase (`UserProfile.tsx`, `KpiCard.tsx`)
- **Utilities:** camelCase (`formatCurrency.ts`, `fetchUser.ts`)
- **Hooks:** camelCase with `use` prefix (`useAuth.ts`, `useTheme.ts`)
- **Types:** PascalCase (`User.ts`, `ApiResponse.ts`)
- **Constants:** UPPER_SNAKE_CASE (`API_BASE_URL`, `MAX_RETRIES`)

---

## Git Commit Standards

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build process, dependency updates

**Examples:**
```
feat(dashboard): add KPI card component

Add reusable KPI card component with sparkline support.
Includes trend indicator and customizable colors.

Closes #123

---

fix(auth): resolve token expiration issue

Fix bug where expired tokens weren't being refreshed.
Added automatic token refresh on 401 responses.

---

docs(readme): update setup instructions

Add detailed instructions for environment variables.
```

---

## Resources

- **TypeScript Handbook:** https://www.typescriptlang.org/docs/handbook/
- **React TypeScript Cheatsheet:** https://react-typescript-cheatsheet.netlify.app/
- **Testing Library Docs:** https://testing-library.com/docs/react-testing-library/intro/
- **SWR Documentation:** https://swr.vercel.app/
- **Next.js Best Practices:** https://nextjs.org/docs

---

**Maintained By:** Design Framework Team
**Questions/Feedback:** Create an issue or update this document
