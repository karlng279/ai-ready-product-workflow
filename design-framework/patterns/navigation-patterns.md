# Navigation Patterns

## Overview

Common navigation patterns using ShadCN UI components.

---

## Top Navigation Bar

**Use when:** Main site navigation, always visible

**Components:** NavigationMenu

**Desktop:**
```
+------------------------------------------------------------------+
| {Logo}  Nav Link 1  Nav Link 2  Nav Link 3       [User Menu ▼]  |
+------------------------------------------------------------------+
```

**Mobile:**
```
+------------------------------+
| ☰  {Logo}      [User Icon]   |
+------------------------------+
```

**Responsive:**
- Desktop: Horizontal links
- Mobile: Hamburger menu → Sheet (slide-in drawer)

**Accessibility:**
- role="navigation"
- Keyboard: Tab through links, Enter to activate
- Current page: aria-current="page"

---

## Sidebar Navigation

**Use when:** Dashboard, admin panels, complex applications

**Components:** Sheet (mobile), div with nav (desktop)

**Desktop:**
```
+------------+--------------------+
| {Logo}     |                    |
| Dashboard  |  Main Content      |
| Shipments  |                    |
| Reports    |                    |
| Settings   |                    |
|            |                    |
+------------+--------------------+
```

**Mobile:** Slide-in drawer (Sheet) triggered by hamburger

**States:**
- Active link: bg-accent text-accent-foreground
- Hover: bg-accent/50
- Collapsed (optional): Icons only, expand on hover

**Accessibility:**
- Keyboard navigable
- Focus visible
- Screen reader: Navigation landmark

---

## Breadcrumbs

**Use when:** Deep page hierarchies, help users understand location

```
Home > Section > Subsection > Current Page
```

**Components:** Custom breadcrumb component

**Interactions:**
- Click any segment to navigate up hierarchy
- Last segment (current page): Not a link, different style

**Accessibility:**
- role="navigation" aria-label="Breadcrumb"
- Current page: aria-current="page"

---

## Tabs

**Use when:** Multiple views of same content, settings panels

**Components:** Tabs (ShadCN)

```
+------------------------------------------+
| [Tab 1 (active)] [Tab 2] [Tab 3]        |
+------------------------------------------+
| Tab 1 Content                            |
|                                          |
+------------------------------------------+
```

**States:**
- Active: Underline or background highlight
- Hover: Subtle background change
- Focus: Focus ring

**Accessibility:**
- role="tablist", role="tab", role="tabpanel"
- Arrow keys to navigate tabs
- Selected: aria-selected="true"

---

## Pagination

**Use when:** Large lists, table data

**Components:** Custom pagination component with Button

**Pattern:**
```
Showing 1-10 of 234
[<< First] [< Previous] [1] [2] [3] ... [24] [Next >] [Last >>]
Rows per page: [10 ▼]
```

**States:**
- Current page: Highlighted, not clickable
- Disabled: First/Previous on page 1, Next/Last on last page

**Accessibility:**
- role="navigation" aria-label="Pagination"
- Buttons: aria-label with page number

---

## Dropdown Menu (Actions)

**Use when:** Row actions, more options

**Components:** DropdownMenu

```
[⋮]  →  +----------+
         | View     |
         | Edit     |
         | -------- |
         | Delete   |
         +----------+
```

**States:**
- Closed: Icon button
- Open: Menu overlay
- Focus: Ring on trigger, menu items navigable

**Accessibility:**
- Trigger: aria-label="Actions"
- Keyboard: Arrow keys, Enter to select, Escape to close

---

## Mobile Navigation (Sheet)

**Use when:** Mobile responsive nav

**Components:** Sheet

```
[☰] Click → +-----------------+
             |  {Logo}         |
             |  Dashboard      |
             |  Shipments      |
             |  Reports        |
             |  Settings       |
             |                 |
             |  [User Menu]    |
             +-----------------+
```

**Behaviors:**
- Swipe from left to open (optional)
- Click overlay to close
- Escape to close

**Accessibility:**
- Focus trap when open
- Focus returns to hamburger on close

---

## Back Button

**Use when:** Detail views, nested flows

```
[← Back to List]
```

**Component:** Button (variant: ghost or link)

**Behavior:** Navigate to previous page or parent list

**Accessibility:** Clear label, keyboard accessible

---

## User Authentication Menu

**Use when:** User login/logout, profile access

**Components:** DropdownMenu, Avatar, Button

**Logged In State:**
```
[👤 JD ▼]  →  +-------------------+
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

**Not Logged In State:**
```
[Login Button]
```

**States:**
- Not logged in: Primary button "Login"
- Logged in: Avatar with user initials or photo
- Dropdown open: Menu with user info and actions
- Loading (logout): Spinner on logout item

**Menu Items:**
- User Profile: Navigate to profile page
- Manage Inventory: Navigate to seller dashboard
- My Bids: Navigate to bid tracking page
- Logout: End session and redirect to homepage

**Accessibility:**
- Avatar trigger: aria-label="User menu"
- Keyboard: Arrow keys to navigate, Enter to select
- Focus management: Returns to trigger on close

**Related Components:**
- [COMP-AUTH-001: Login Modal](../stage2-component-specs/COMP-AUTH-001-login-modal.md)
- [COMP-AUTH-002: User Menu](../stage2-component-specs/COMP-AUTH-002-user-menu.md)

---

---

## ui-ux-pro-max Prompt Templates

### Top Navigation Bar

**MDS Theme:**
```
Generate a top navigation bar using MDS theme:

**Pattern:** Top Navigation Bar (navigation-patterns.md)

**Theme Constraints:**
- Colors: Teal (#004d6c) background, white text, magenta (#bd1874) for active/hover
- Typography: Inter font-medium for nav links
- Spacing: py-4 px-6, gap-8 between links
- Animations: Quick hover transitions (150ms)

**Requirements:**
- Logo left (magenta color)
- Navigation links center: Home, Features, Pricing, About
- User menu right with avatar dropdown
- Mobile: Hamburger menu → Sheet drawer
- Sticky header with subtle shadow on scroll
- Active link: magenta underline (4px)

**Accessibility:**
- role="navigation"
- Current page: aria-current="page"
- Keyboard navigable
```

**Corporate Theme:**
```
Generate a top navigation bar using Corporate theme:

**Pattern:** Top Navigation Bar (navigation-patterns.md)

**Theme Constraints:**
- Colors: Trust Teal (#0F766E) background, white text
- Typography: Open Sans font-medium
- Mega menu for "Solutions" and "Industries"
- CTA: "Contact Sales" button (Professional Blue #0369A1)

**Anti-Patterns to Avoid:**
- Keep hierarchy clear (max 3 levels in mega menu)
- No hidden contact info

**Requirements:**
- Logo left (white version)
- Main menu: Solutions, Industries, Resources, About
- "Contact Sales" CTA button right
- Mega menu: Tab switching for categories
- Mobile: Slide-in drawer with same structure
```

**Ecommerce Theme:**
```
Generate a top navigation bar using Ecommerce theme:

**Pattern:** Top Navigation Bar (navigation-patterns.md)

**Theme Constraints:**
- Colors: White background, dark text, purple (#8B5CF6) accents
- Cart icon with item count badge (purple background)
- Search bar prominent (center)

**Requirements:**
- Logo left
- Search bar center (expandable on mobile)
- Icons right: Wishlist, Cart (with count badge), User
- Categories dropdown: Shop All, New Arrivals, Sale
- Mobile: Bottom nav + search overlay
- Sticky with transparent → solid transition on scroll
```

**ERP Theme:**
```
Generate a top navigation bar using ERP theme:

**Pattern:** Top Navigation Bar (navigation-patterns.md)

**Theme Constraints:**
- Colors: Blue (#1E40AF) background, white text
- Compact design (py-2) for maximum screen real estate
- Breadcrumbs integrated into header

**Requirements:**
- Logo left (small, compact)
- Breadcrumbs center (Home > Dashboard > Reports)
- Icons right: Notifications (with badge), Help, User menu
- No mobile version (use sidebar instead)
- Always visible, minimal height
```

### Sidebar Navigation

**ERP Theme (Recommended):**
```
Generate a sidebar navigation using ERP theme:

**Pattern:** Sidebar Navigation (navigation-patterns.md)

**Theme Constraints:**
- Colors: White background, blue (#1E40AF) for active item
- Typography: Fira Sans text-sm
- Width: 256px (desktop), full width drawer (mobile)
- Icons: Lucide icons, 20px

**Requirements:**
- Logo at top (p-6)
- Navigation sections:
  - Overview: Dashboard, Analytics
  - Data: Customers, Products, Orders
  - Settings: Account, Team, Billing
- Active item: bg-blue-50 with blue left border (4px)
- Hover: bg-gray-100 transition (150ms)
- Mobile: Hamburger → slide-in drawer
- User profile at bottom with avatar, name, role
- Collapsible (icons only) with expand on hover (optional)
```

**Corporate Theme:**
```
Generate a sidebar navigation using Corporate theme:

**Pattern:** Sidebar Navigation (navigation-patterns.md)

**Theme Constraints:**
- Colors: Soft teal background (#F0FDFA), Trust Teal (#0F766E) for active
- Professional, organized structure

**Requirements:**
- Logo top
- Section headers with dividers
- Certification badges in sidebar footer
- "Contact Support" CTA at bottom
```

### Tabs

**All Themes:**
```
Generate a tabs component using [THEME_NAME] theme:

**Pattern:** Tabs (navigation-patterns.md)

**Theme Constraints:**
[Copy theme colors/typography]

**Requirements:**
- Tab items: [List tab names]
- Active style: [Underline/background highlight based on theme]
- Content area: [Specify content type]
- Lazy load tab content (render on first click)

**Accessibility:**
- role="tablist", role="tab", role="tabpanel"
- Arrow keys navigation
- aria-selected for active tab
```

---

## Theme Adaptations

### MDS Theme
**Style:** Modern, bold navigation with magenta accents
- **Top Nav:** Teal background, magenta active states, bold hover animations
- **Sidebar:** White with magenta left border on active items
- **Best For:** Brand-focused sites, marketing pages

### Corporate Theme
**Style:** Professional navigation with mega menus
- **Top Nav:** Trust Teal background, mega menus for solutions/industries, "Contact Sales" CTA
- **Sidebar:** Organized sections with certification badges in footer
- **Best For:** Enterprise sites, B2B platforms

### Ecommerce Theme
**Style:** Conversion-focused with cart/wishlist icons
- **Top Nav:** Search-prominent, cart with item count badge, category dropdown
- **Bottom Nav (Mobile):** Home, Categories, Cart, Account icons
- **Best For:** Online stores, product catalogs

### ERP Theme
**Style:** Data-efficient, compact navigation
- **Top Nav:** Minimal height with integrated breadcrumbs
- **Sidebar:** Primary navigation with collapsible sections, icons-only mode
- **Best For:** Dashboards, admin panels, business tools

---

## Reference Implementations

**Coming Soon:** Links to example implementations in codebase-framework

Example locations:
- `codebase-framework/component-patterns/navigation/top-nav-mds.tsx`
- `codebase-framework/component-patterns/navigation/sidebar-erp.tsx`
- `codebase-framework/component-patterns/navigation/mega-menu-corporate.tsx`

---

## Related
- [Theme Catalog](../themes/README.md)
- [Code Standards](../design-rules/code-standards.md)
- [Responsive Design](../design-rules/responsive.md)
- [UI_UX_PROMAX Integration Guide](../UI_UX_PROMAX_INTEGRATION.md)
