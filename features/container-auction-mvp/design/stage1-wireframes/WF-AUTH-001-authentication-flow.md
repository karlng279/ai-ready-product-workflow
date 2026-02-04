# WF-AUTH-001: Authentication Flow Wireframe

**Wireframe ID:** WF-AUTH-001  
**Feature:** User Authentication  
**Related Story:** ST-014  
**Status:** Draft  
**Last Updated:** 2026-02-04

---

## Overview

This wireframe documents the complete authentication flow including login, logout, and navigation state changes for both authenticated and non-authenticated users.

---

## 1. Header Navigation (Not Logged In)

```
+-------------------------------------------------------------------------+
|  [Logo]   Container Marketplace   Auctions              [Login Button] |
+-------------------------------------------------------------------------+
```

**Elements:**
- Logo (left): Links to homepage
- Container Marketplace: Public link to /marketplace
- Auctions: Public link to /marketplace (filtered for auctions)
- Login Button (right): Opens login modal

**Behavior:**
- All navigation items are public and accessible
- Login button is prominent (primary button style)

---

## 2. Login Modal (Overlay)

```
+-------------------------------------------------------------------------+
|                                                                         |
|                    +----------------------------------+                 |
|                    |  Login to Your Account           |                 |
|                    +----------------------------------+                 |
|                    |                                  |                 |
|                    |  Email Address                   |                 |
|                    |  [____________________________]  |                 |
|                    |                                  |                 |
|                    |  Password                        |                 |
|                    |  [____________________________]  |                 |
|                    |                                  |                 |
|                    |  [ ] Remember me                 |                 |
|                    |                                  |                 |
|                    |  [Cancel]  [Login →]             |                 |
|                    |                                  |                 |
|                    |  Don't have an account? Sign up  |                 |
|                    +----------------------------------+                 |
|                                                                         |
+-------------------------------------------------------------------------+
```

**Elements:**
- Modal overlay (semi-transparent background)
- Modal content (centered, max-width 28rem)
- Email input field (required, email validation)
- Password input field (required, min 6 characters)
- Remember me checkbox
- Cancel button (closes modal)
- Login button (submits form)
- Sign up link (future feature)

**States:**
- Default: Empty fields, login button enabled
- Loading: Login button shows spinner, inputs disabled
- Error: Red borders on fields, error message displayed
- Success: Modal closes, user logged in

---

## 3. Header Navigation (Logged In)

```
+-------------------------------------------------------------------------+
|  [Logo]   Container Marketplace   Auctions                    [👤 JD ▼]|
+-------------------------------------------------------------------------+
```

**Elements:**
- Logo (left): Links to homepage
- Container Marketplace: Public link
- Auctions: Public link
- User Avatar (right): Shows user initials or photo, opens dropdown on click

**Changes from Not Logged In:**
- Login button replaced with user avatar
- Avatar shows user initials (e.g., "JD" for John Doe)

---

## 4. User Menu Dropdown (Logged In)

```
+-------------------------------------------------------------------------+
|  [Logo]   Container Marketplace   Auctions                    [👤 JD ▼]|
+-------------------------------------------------------------------------+
                                                                     |
                                                    +----------------------+
                                                    | 👤 John Doe          |
                                                    | john@example.com     |
                                                    +----------------------+
                                                    | 👤 User Profile      |
                                                    | 📦 Manage Inventory  |
                                                    | 🔨 My Bids           |
                                                    +----------------------+
                                                    | 🚪 Logout            |
                                                    +----------------------+
```

**Elements:**
- User info header: Name and email
- User Profile: Link to /profile
- Manage Inventory: Link to /inventory (seller dashboard)
- My Bids: Link to /bids (track active bids)
- Logout: Ends session, redirects to homepage

**Behavior:**
- Click avatar to toggle dropdown
- Click outside or press Escape to close
- Click menu item to navigate
- Hover highlights menu items

---

## 5. Protected Page Access (Not Logged In)

### Scenario: User tries to access /inventory without login

```
+-------------------------------------------------------------------------+
|  [Logo]   Container Marketplace   Auctions              [Login Button] |
+-------------------------------------------------------------------------+
|                                                                         |
|                    +----------------------------------+                 |
|                    |  Login Required                  |                 |
|                    +----------------------------------+                 |
|                    |                                  |                 |
|                    |  Please log in to access         |                 |
|                    |  Manage Inventory                |                 |
|                    |                                  |                 |
|                    |  Email Address                   |                 |
|                    |  [____________________________]  |                 |
|                    |                                  |                 |
|                    |  Password                        |                 |
|                    |  [____________________________]  |                 |
|                    |                                  |                 |
|                    |  [Cancel]  [Login →]             |                 |
|                    +----------------------------------+                 |
|                                                                         |
+-------------------------------------------------------------------------+
```

**Behavior:**
- User navigates to protected route (e.g., /inventory)
- System detects no auth session
- Login modal opens automatically
- Modal title: "Login Required"
- Subtitle: "Please log in to access [Page Name]"
- After successful login, user is redirected to intended page

---

## 6. Logout Flow

### Step 1: User clicks Logout
```
+----------------------+
| 👤 John Doe          |
| john@example.com     |
+----------------------+
| 👤 User Profile      |
| 📦 Manage Inventory  |
| 🔨 My Bids           |
+----------------------+
| 🚪 Logging out... ⏳ |  ← Loading state
+----------------------+
```

### Step 2: After Logout
```
+-------------------------------------------------------------------------+
|  [Logo]   Container Marketplace   Auctions              [Login Button] |
+-------------------------------------------------------------------------+
```

**Behavior:**
1. User clicks "Logout" in dropdown
2. Logout item shows loading spinner
3. Auth session cleared (localStorage)
4. Dropdown closes
5. User avatar replaced with Login button
6. User redirected to homepage
7. Success message (optional): "You have been logged out"

---

## Mobile Responsive Views

### Mobile Header (Not Logged In)
```
+---------------------------+
| ☰  [Logo]    [Login]      |
+---------------------------+
```

### Mobile Header (Logged In)
```
+---------------------------+
| ☰  [Logo]    [👤 JD]      |
+---------------------------+
```

### Mobile Navigation Drawer
```
+---------------------------+
| ← Back                    |
+---------------------------+
|                           |
| Container Marketplace     |
| Auctions                  |
|                           |
| ─────────────────────     |
|                           |
| 👤 User Profile           |
| 📦 Manage Inventory       |
| 🔨 My Bids                |
|                           |
| ─────────────────────     |
|                           |
| 🚪 Logout                 |
|                           |
+---------------------------+
```

### Mobile Login Modal (Full Screen)
```
+---------------------------+
| ← Back                    |
+---------------------------+
|                           |
| Login to Your Account     |
|                           |
| Email Address             |
| [___________________]     |
|                           |
| Password                  |
| [___________________]     |
|                           |
| [ ] Remember me           |
|                           |
| [Login →]                 |
|                           |
| Don't have an account?    |
| Sign up                   |
|                           |
+---------------------------+
```

---

## User Flow Diagram

```
┌─────────────┐
│   Landing   │
│    Page     │
└──────┬──────┘
       │
       ├─────────────────────────────────────┐
       │                                     │
       ▼                                     ▼
┌──────────────┐                    ┌──────────────┐
│ Click Login  │                    │ Try Access   │
│   Button     │                    │  Protected   │
└──────┬───────┘                    │    Route     │
       │                            └──────┬───────┘
       │                                   │
       ├───────────────────────────────────┤
       │                                   │
       ▼                                   ▼
┌──────────────────────────────────────────────┐
│          Login Modal Opens                   │
│  (Auto-open if accessing protected route)    │
└──────┬───────────────────────────────────────┘
       │
       ▼
┌──────────────┐
│ Enter Email  │
│ & Password   │
└──────┬───────┘
       │
       ▼
┌──────────────┐      ┌──────────────┐
│   Submit     │─────▶│   Invalid    │
│    Form      │      │ Credentials  │
└──────┬───────┘      └──────┬───────┘
       │                     │
       │                     └──────┐
       ▼                            │
┌──────────────┐                    │
│   Success    │                    │
│  Modal Close │                    │
└──────┬───────┘                    │
       │                            │
       ▼                            │
┌──────────────┐                    │
│ Avatar Shows │                    │
│ in Header    │                    │
└──────┬───────┘                    │
       │                            │
       ▼                            │
┌──────────────┐                    │
│  Redirect to │                    │
│   Intended   │                    │
│     Page     │                    │
└──────────────┘                    │
                                    │
       ┌────────────────────────────┘
       │
       ▼
┌──────────────┐
│ Show Error   │
│   Message    │
└──────────────┘
```

---

## Protected Routes

| Route | Requires Auth | Redirect Behavior |
|-------|---------------|-------------------|
| `/` | No | N/A |
| `/marketplace` | No | N/A |
| `/maintenance` | No | N/A (job board is public) |
| `/inventory` | Yes | Open login modal |
| `/inventory/create` | Yes | Open login modal |
| `/maintenance/request` | Yes | Open login modal |
| `/profile` | Yes | Open login modal |
| `/bids` | Yes | Open login modal |

---

## Accessibility Notes

- Login modal is keyboard accessible (Tab, Enter, Escape)
- User menu dropdown navigable with arrow keys
- Focus trapped in modal when open
- ARIA labels on all interactive elements
- Screen reader announces login status changes

---

## Technical Notes

- Auth state stored in localStorage: `{ user, token, expiresAt }`
- Session expiry: 7 days (if "Remember me" checked), 24 hours (default)
- Protected routes checked via Next.js middleware
- Login API endpoint: `POST /api/auth/login`
- Logout API endpoint: `POST /api/auth/logout`

---

## Related Documents

- [ST-014: User Authentication Flow](../../features/container-auction-mvp/po/usd/ST-014.md)
- [COMP-AUTH-001: Login Modal](../stage2-component-specs/COMP-AUTH-001-login-modal.md)
- [COMP-AUTH-002: User Menu](../stage2-component-specs/COMP-AUTH-002-user-menu.md)
