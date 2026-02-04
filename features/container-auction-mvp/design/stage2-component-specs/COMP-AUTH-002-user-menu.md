# COMP-AUTH-002: User Menu Dropdown

**Component ID:** COMP-AUTH-002  
**Component Name:** User Menu Dropdown  
**Type:** Dropdown Menu  
**Priority:** Must-have  
**Related Story:** ST-014  
**Status:** Specification Complete

---

## Purpose

A dropdown menu accessible from the user avatar in the top-right corner of the navigation bar. Provides quick access to user profile, inventory management, bid tracking, and logout functionality.

---

## Visual Structure

### Logged In State
```
+------------------------------------------+
| Logo  Marketplace  Auctions      [👤 JD] |
+------------------------------------------+
                                      ↓
                            +-------------------+
                            | 👤 John Doe       |
                            | john@example.com  |
                            +-------------------+
                            | User Profile      |
                            | Manage Inventory  |
                            | My Bids           |
                            +-------------------+
                            | Logout            |
                            +-------------------+
```

### Not Logged In State
```
+------------------------------------------+
| Logo  Marketplace  Auctions    [Login →] |
+------------------------------------------+
```

---

## Component Breakdown

### ShadCN Components Used
- **DropdownMenu** - Main dropdown container
- **DropdownMenuTrigger** - User avatar button
- **DropdownMenuContent** - Dropdown panel
- **DropdownMenuLabel** - User info header
- **DropdownMenuSeparator** - Divider lines
- **DropdownMenuItem** - Menu items
- **Avatar** - User profile picture
- **Button** - Login button (not logged in state)

### Layout Structure (Logged In)
```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
      <Avatar>
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback>{user.initials}</AvatarFallback>
      </Avatar>
    </Button>
  </DropdownMenuTrigger>
  
  <DropdownMenuContent align="end" className="w-56">
    {/* User Info Header */}
    <DropdownMenuLabel>
      <div className="flex flex-col space-y-1">
        <p className="text-sm font-medium">{user.name}</p>
        <p className="text-xs text-muted-foreground">{user.email}</p>
      </div>
    </DropdownMenuLabel>
    
    <DropdownMenuSeparator />
    
    {/* Menu Items */}
    <DropdownMenuItem onClick={() => router.push('/profile')}>
      <User className="mr-2 h-4 w-4" />
      User Profile
    </DropdownMenuItem>
    
    <DropdownMenuItem onClick={() => router.push('/inventory')}>
      <Package className="mr-2 h-4 w-4" />
      Manage Inventory
    </DropdownMenuItem>
    
    <DropdownMenuItem onClick={() => router.push('/bids')}>
      <Gavel className="mr-2 h-4 w-4" />
      My Bids
    </DropdownMenuItem>
    
    <DropdownMenuSeparator />
    
    <DropdownMenuItem onClick={handleLogout}>
      <LogOut className="mr-2 h-4 w-4" />
      Logout
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Layout Structure (Not Logged In)
```tsx
<Button onClick={() => setShowLoginModal(true)}>
  Login
</Button>
```

---

## States & Variations

### Logged In - Dropdown Closed
- Avatar visible with user initials or photo
- Subtle hover effect on avatar

### Logged In - Dropdown Open
- Dropdown panel visible below avatar
- Overlay/backdrop (optional)
- Menu items highlighted on hover

### Not Logged In
- "Login" button visible instead of avatar
- Primary button styling

### Loading State (After Logout Click)
- "Logout" item shows spinner
- Other items disabled

---

## Behavior & Interactions

### Opening the Dropdown
**Trigger:** Click on user avatar
**Animation:** Fade in + slide down (150ms)

### Menu Item Interactions
**Hover:** Background highlight (bg-accent)
**Click:** Navigate to respective page
**Keyboard:** Arrow keys to navigate, Enter to select

### Logout Flow
1. User clicks "Logout"
2. Show loading spinner on logout item
3. Call logout API
4. Clear auth state (localStorage)
5. Close dropdown
6. Redirect to homepage
7. Show "Login" button

### Closing the Dropdown
**Triggers:**
- Click menu item (navigate away)
- Click outside dropdown
- Press Escape key
- Click avatar again (toggle)

---

## Menu Items Specification

| Item | Icon | Action | Route |
|------|------|--------|-------|
| User Profile | User | View/edit profile | `/profile` |
| Manage Inventory | Package | Seller dashboard | `/inventory` |
| My Bids | Gavel | Track active bids | `/bids` |
| Logout | LogOut | End session | N/A (logout function) |

---

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (≥768px) | Dropdown aligned to right edge of avatar |
| Tablet (640-767px) | Same as desktop |
| Mobile (<640px) | Dropdown full-width or aligned right with padding |

---

## Accessibility

### Keyboard Navigation
- **Tab:** Focus on avatar trigger
- **Enter/Space:** Open dropdown
- **Arrow Down/Up:** Navigate menu items
- **Enter:** Activate selected item
- **Escape:** Close dropdown

### ARIA Attributes
```tsx
<DropdownMenuTrigger aria-label="User menu">
  <Avatar />
</DropdownMenuTrigger>

<DropdownMenuContent role="menu" aria-orientation="vertical">
  <DropdownMenuItem role="menuitem">User Profile</DropdownMenuItem>
  {/* ... */}
</DropdownMenuContent>
```

### Focus Management
- Focus returns to trigger on close
- Focus visible on menu items
- Keyboard navigation loops through items

---

## Styling (Tailwind Classes)

### Avatar Trigger
```tsx
className="relative h-10 w-10 rounded-full hover:ring-2 hover:ring-primary/20 transition-all"
```

### Dropdown Content
```tsx
className="w-56 mt-2"
align="end"
```

### Menu Items
```tsx
className="cursor-pointer focus:bg-accent focus:text-accent-foreground"
```

### User Info Header
```tsx
// Name
className="text-sm font-medium leading-none"

// Email
className="text-xs leading-none text-muted-foreground"
```

---

## Data Flow

### Props
```typescript
interface UserMenuProps {
  user: User | null
  onLoginClick: () => void
  onLogout: () => void
}

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  initials: string
}
```

### Auth Context Integration
```typescript
const { user, logout, isAuthenticated } = useAuth()

const handleLogout = async () => {
  await logout()
  router.push('/')
}
```

---

## Avatar Fallback Logic

### Priority Order
1. **User uploaded photo:** `user.avatar` URL
2. **Initials:** First letter of first name + first letter of last name
3. **Default icon:** Generic user icon

### Initials Generation
```typescript
function getInitials(name: string): string {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

// Examples:
// "John Doe" → "JD"
// "Alice" → "A"
// "Bob Smith Jr" → "BS"
```

---

## Not Logged In State

### Login Button
```tsx
<Button 
  onClick={onLoginClick}
  className="bg-primary hover:bg-primary/90"
>
  Login
</Button>
```

### Behavior
- Clicking opens Login Modal (COMP-AUTH-001)
- After successful login, button is replaced with user avatar
- Smooth transition between states

---

## Implementation Notes

### File Location
```
components/auth/user-menu.tsx
```

### Dependencies
- `@/components/ui/dropdown-menu`
- `@/components/ui/avatar`
- `@/components/ui/button`
- `@/lib/auth-context` (for useAuth hook)
- `lucide-react` (for icons: User, Package, Gavel, LogOut)
- `next/navigation` (for router)

### Example Usage
```tsx
import { UserMenu } from '@/components/auth/user-menu'

function Header() {
  const { user, logout } = useAuth()
  const [showLogin, setShowLogin] = useState(false)
  
  return (
    <header>
      {/* ... other nav items ... */}
      <UserMenu 
        user={user}
        onLoginClick={() => setShowLogin(true)}
        onLogout={logout}
      />
    </header>
  )
}
```

---

## Future Enhancements (Out of Scope for MVP)

- Notification badge on avatar
- Quick stats in dropdown header (e.g., "3 active bids")
- Theme toggle (dark/light mode)
- Language selector
- Settings submenu
- Profile completion progress bar

---

## Quality Gate Checklist

- [ ] Avatar displays user photo or initials
- [ ] Dropdown opens on click
- [ ] All menu items navigate correctly
- [ ] Logout clears auth state and redirects
- [ ] Keyboard navigation works
- [ ] Focus management correct
- [ ] ARIA attributes present
- [ ] Hover states visible
- [ ] Mobile responsive
- [ ] Smooth transitions between logged in/out states
- [ ] Icons aligned with text
- [ ] User info header displays correctly
