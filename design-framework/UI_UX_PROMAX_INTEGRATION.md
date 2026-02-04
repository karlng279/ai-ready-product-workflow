# UI/UX Pro Max Integration Guide

**Version:** 2.0.0
**Last Updated:** 2026-02-01

---

## Overview

This guide explains how to use the **ui-ux-pro-max** skill with the Design Framework to accelerate UI/UX development. The ui-ux-pro-max skill provides AI-powered code generation for layouts, styling, animations, and responsive designs across multiple tech stacks.

**What ui-ux-pro-max Does:**
- Generates implementation code from design specifications
- Applies theme constraints (colors, typography, spacing, animations)
- Creates responsive, accessible components
- Implements patterns consistently across the codebase

**What ui-ux-pro-max Does NOT Do:**
- Create wireframes (use Design Framework Stage 1)
- Define component specifications (use Design Framework Stage 2)
- Design interaction flows (use Design Framework Stage 3)
- Make design decisions (use Theme Catalog)

---

## Quick Start

### Step 1: Choose Your Theme

Select a theme from the [Theme Catalog](./themes/README.md):

- **MDS** (Default): Modern, bold, brand-focused
- **Corporate**: Professional, trust-focused, enterprise
- **Ecommerce**: Vibrant, conversion-optimized, online stores
- **ERP**: Data-dense, efficient, dashboards

### Step 2: Create Design Specifications

Follow the Design Framework workflow:

1. **Stage 1 - Wireframes:** Define layout structure
2. **Stage 2 - Component Specs:** Specify UI elements, states, interactions
3. **Stage 3 - Interactions:** Define state transitions, data flow

Each stage template now includes a **ui-ux-pro-max Prompt** section.

### Step 3: Invoke ui-ux-pro-max

Copy the prompt from your component spec and invoke ui-ux-pro-max:

```bash
/ui-ux-pro-max [your prompt]
```

Or through the Skill tool in Claude Code.

### Step 4: Validate Generated Code

Check that the generated code:
- Matches your wireframe (WF-XXX)
- Implements all component spec requirements (COMP-XXX)
- Follows theme constraints
- Handles all states and interactions (INT-XXX)
- Meets accessibility standards

---

## Workflow Integration

### Design Framework → ui-ux-pro-max Flow

```
┌──────────────────────────────────────────────────────────────┐
│ 1. PLANNING PHASE (Human-Driven)                             │
├──────────────────────────────────────────────────────────────┤
│ ✓ Choose theme from catalog                                  │
│ ✓ Create wireframe (Stage 1)                                 │
│ ✓ Define component spec (Stage 2)                            │
│ ✓ Define interactions (Stage 3)                              │
└──────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌──────────────────────────────────────────────────────────────┐
│ 2. IMPLEMENTATION PHASE (ui-ux-pro-max)                      │
├──────────────────────────────────────────────────────────────┤
│ → Copy ui-ux-pro-max prompt from component spec              │
│ → Fill in theme constraints from theme file                  │
│ → Invoke ui-ux-pro-max skill                                 │
│ → ui-ux-pro-max generates implementation code                │
└──────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌──────────────────────────────────────────────────────────────┐
│ 3. VALIDATION PHASE (Human QA)                               │
├──────────────────────────────────────────────────────────────┤
│ ✓ Verify code matches wireframe                              │
│ ✓ Test all states and interactions                           │
│ ✓ Check accessibility (keyboard, screen reader, ARIA)        │
│ ✓ Validate responsiveness (mobile, tablet, desktop)          │
│ ✓ Confirm theme constraints applied correctly                │
└──────────────────────────────────────────────────────────────┘
```

---

## Theme Constraint Integration

### How Themes Work with ui-ux-pro-max

Each theme provides:
- **Color Palette:** Hex codes for primary, secondary, accents, states
- **Typography System:** Font families, sizes, weights, line heights
- **Spacing Scale:** Padding, margins, gaps based on theme philosophy
- **Animation Standards:** Entry, hover, transition animations with durations
- **Component Defaults:** Default styles for buttons, inputs, cards, etc.
- **Anti-Patterns:** What NOT to do for this theme

### Filling Theme Constraints in Prompts

When using a ui-ux-pro-max prompt template, replace placeholders with actual values from your theme file.

**Example:**

**Component Spec Template Prompt:**
```
Generate Login Form component using [Theme Name] theme:

**Theme Constraints:**
- Colors: [Copy from theme file]
- Typography: [Copy from theme file]
- Spacing: [Copy from theme file]
- Animations: [Copy from theme file]
```

**Filled Prompt (MDS Theme):**
```
Generate Login Form component using MDS theme:

**Theme Constraints:**
- Colors: Primary Magenta (#bd1874), Secondary Teal (#004d6c), Accent Teal (#14b8a6)
- Typography: Inter for headings/body, JetBrains Mono for code
- Spacing: 4px base unit, forms use p-6 (24px) container, inputs gap-4 (16px)
- Animations: Form entry uses animate-reveal (1s), button hover 200ms transition
- Style: Modern, bold, energetic with reveal animations on mount
```

**Where to Find Theme Values:**

Open your theme file (e.g., `themes/mds.md`) and reference:
- Section 2: Color Palette (hex codes)
- Section 3: Typography (font families, Google Fonts imports)
- Section 4: Spacing (scale, component-specific padding/margins)
- Section 5: Animations (keyframes, durations, triggers)
- Section 7: Component Defaults (button styles, input heights, card padding)

---

## Prompt Engineering Best Practices

### 1. Be Specific and Detailed

**❌ Bad Prompt:**
```
Create a button
```

**✅ Good Prompt:**
```
Generate a primary CTA button using Corporate theme:

**Theme Constraints:**
- Colors: Trust Teal (#0F766E) background, white text
- Typography: Open Sans font-semibold
- Spacing: px-6 py-3 (24px/12px)
- Hover: Professional Blue (#0369A1) background, subtle shadow
- Style: Professional, trust-focused

**Requirements:**
- Label: "Contact Sales"
- Size: Large (h-12, min-w-32)
- Icon: Arrow right (→) trailing
- Variant: default (filled background)
- States: default, hover, focus, active, disabled, loading
- Accessibility: aria-label, keyboard support (Enter/Space), focus ring
```

### 2. Reference Design Patterns

**Always reference relevant patterns from the Pattern Library:**

```
Generate a navigation component using Ecommerce theme:

**Pattern:** Top Navigation Bar (navigation-patterns.md - Ecommerce variant)

**Theme Constraints:**
- Colors: White background, dark text, purple (#8B5CF6) accents
- Cart icon with item count badge (purple background)
- Search bar prominent (center)

**Requirements:**
[List specific requirements from your component spec]
```

**Why this works:**
- ui-ux-pro-max knows common navigation patterns
- Pattern reference ensures consistency
- Theme variant specifies which version to use

### 3. Include Theme Anti-Patterns

**Tell ui-ux-pro-max what NOT to do:**

```
Generate checkout flow using Ecommerce theme:

**Anti-Patterns to Avoid:**
- No hidden costs (show shipping/taxes early)
- Max 3 checkout steps (cart → info → payment)
- No forced account creation before checkout
- Show progress indicator clearly
- Enable guest checkout

**Requirements:**
[Your checkout flow requirements]
```

**Why this works:**
- Prevents common theme-specific mistakes
- Ensures best practices for theme category
- Aligns with theme design philosophy

### 4. Specify All States

**Don't forget edge cases:**

```
Generate user profile card using MDS theme:

**States to Implement:**
- Default: Loaded user data
- Loading: Skeleton placeholder with pulse animation
- Error: Alert with retry button
- Empty: No user found, "Create Profile" CTA
- Disabled: Grayed out, cursor not-allowed

**Requirements:**
[Card structure and content]
```

### 5. Be Explicit About Responsive Behavior

```
Generate product grid using Ecommerce theme:

**Responsive Behavior:**
- Mobile (< 640px): 1 column, cards stack vertically, full width
- Tablet (640px - 1024px): 2 columns, grid gap-4
- Desktop (> 1024px): 4 columns, grid gap-6, max-width 1280px

**Requirements:**
[Product card details]
```

### 6. Include Accessibility Requirements

```
Generate modal dialog using Corporate theme:

**Accessibility:**
- Focus trap when open
- Escape to close
- Focus returns to trigger button on close
- ARIA: role="dialog", aria-modal="true", aria-labelledby
- Keyboard: Tab through interactive elements
- Screen reader: Announce modal title and description
- Touch targets: Minimum 44x44px for close button

**Requirements:**
[Modal structure and content]
```

---

## Common Workflows

### Workflow 1: Generating a New Component

**Input:** Component Spec (COMP-XXX) with theme reference

**Steps:**
1. Open component spec file
2. Locate the **ui-ux-pro-max Prompt** section
3. Fill in theme constraints from theme file
4. Add specific requirements from spec sections:
   - Section 3: UI Elements
   - Section 5: Component States
   - Section 6: Interactions
   - Section 7: Validation
   - Section 8: Accessibility
5. Invoke ui-ux-pro-max with filled prompt
6. Review generated code
7. Test against component spec requirements

**Example:**

```
Generate User Profile Card component using MDS theme:

**Pattern:** Card Pattern (data-display-patterns.md)

**Theme Constraints:**
- Colors: White background, Magenta (#bd1874) accents, Teal (#004d6c) borders
- Typography: Inter font-semibold for name (text-xl), font-normal for details (text-base)
- Spacing: p-6 (24px) container, gap-4 (16px) between elements
- Animations: Reveal-up on mount (1s), hover shadow transition (200ms)

**Requirements:**
- Layout: Card with CardHeader, CardContent, CardFooter
- Elements:
  - Avatar: 96x96px, circular, fallback initials
  - Name: text-xl font-semibold
  - Email: text-base text-muted-foreground
  - Bio: text-sm, max 3 lines with ellipsis
  - Edit button: variant="outline", size="sm"
- States: Default, Loading (skeleton), Error (alert)
- Accessibility: ARIA labels, keyboard navigable, focus visible

**ShadCN Components:**
- Card, CardHeader, CardContent, CardFooter
- Avatar, AvatarImage, AvatarFallback
- Button (variant: outline)
- Alert (for error state)
- Skeleton (for loading state)
```

### Workflow 2: Implementing an Interaction Flow

**Input:** Interaction Spec (INT-XXX) with state diagram

**Steps:**
1. Open interaction spec file
2. Locate the **ui-ux-pro-max Prompt** section
3. Fill in theme animation constraints
4. Include all states from Section 3
5. Include all transitions from Section 4
6. Add data flow from Section 7
7. Add accessibility from Section 10
8. Invoke ui-ux-pro-max with filled prompt
9. Test all state transitions
10. Verify error handling

**Example:**

```
Implement Login Form Submission flow using Corporate theme:

**Pattern:** Form Flow (interaction patterns)

**Theme Constraints:**
- Colors: Trust Teal (#0F766E) for success, destructive for errors
- Animations: Subtle transitions (300ms), no bold animations
- Timing: Form validation debounce 300ms, API timeout 10s

**States to Implement:**
- Idle: Empty form, submit button disabled
- Validating: Check email/password format, show inline errors
- Valid: Submit button enabled, ready to submit
- Submitting: Show loading spinner on button, disable form
- Success: Show success toast, navigate to dashboard
- Error: Show error alert, enable retry, focus first invalid field

**Transitions:**
- Idle → Validating: User types in field (debounced 300ms)
- Validating → Valid: [if all fields valid]
- Validating → Idle: [if any field invalid] /show errors
- Valid → Submitting: User clicks submit /call login API
- Submitting → Success: API returns 200 /show toast, /navigate
- Submitting → Error: API returns error /show alert, /enable retry

**Data Flow:**
- API Endpoint: POST /api/auth/login
- Request: { email, password }
- Response Success: { token, user }
- Response Error: { message, errors }

**Accessibility:**
- Keyboard: Tab through fields, Enter to submit, Escape to clear errors
- Screen reader: Announce validation errors, loading state, success/error
- Focus: Initial focus on email, error focus on first invalid field
- ARIA live regions: aria-live="polite" for validation, "assertive" for errors
```

### Workflow 3: Creating a Responsive Layout

**Input:** Wireframe (WF-XXX) with theme reference

**Steps:**
1. Open wireframe file
2. Review **Theme Context** section
3. Note responsive breakpoints from wireframe
4. Identify theme-specific layout patterns
5. Create prompt with layout structure
6. Include all responsive views (mobile, tablet, desktop)
7. Invoke ui-ux-pro-max
8. Test on multiple screen sizes

**Example:**

```
Generate Dashboard Layout using ERP theme:

**Pattern:** Enterprise Gateway + Data-Dense Dashboard (erp.md)

**Theme Constraints:**
- Colors: Blue (#1E40AF) header, white content area
- Layout: Sidebar + header + main content (compact)
- Spacing: Minimal padding (p-4), tight gaps (gap-2)
- Style: Data-dense, maximum screen real estate

**Responsive Behavior:**
- Mobile (< 640px): Hamburger menu, sidebar as drawer, single column content
- Tablet (640px - 1024px): Collapsible sidebar (icons only), 2 column grid
- Desktop (> 1024px): Full sidebar (256px), 3 column grid, max-width 1440px

**Layout Structure:**
- Header: Compact (h-14), logo left, breadcrumbs center, user menu right
- Sidebar: Navigation links with icons, active state blue left border
- Main: KPI cards grid, data table below, filters panel on right
- Footer: Minimal, sticky to bottom

**Components:**
- Header: ShadCN NavigationMenu
- Sidebar: Sheet (mobile), fixed div (desktop)
- Main: Grid layout, ShadCN Card for KPIs, Table for data
```

### Workflow 4: Styling an Existing Component with Theme

**Input:** Existing unstyled component code

**Steps:**
1. Identify component type (button, card, form, etc.)
2. Choose theme
3. Reference theme component defaults
4. Create prompt to apply theme styling
5. Invoke ui-ux-pro-max
6. Replace existing component with themed version

**Example:**

```
Apply MDS theme styling to existing Button component:

**Current Component:** Unstyled button with onClick handler

**Theme Constraints:**
- Colors: Magenta (#bd1874) background, white text
- Typography: Inter font-medium, text-base
- Spacing: px-4 py-2 (16px/8px)
- Animations: Hover background transition (200ms), scale subtle
- Variants:
  - default: Magenta background, white text
  - secondary: Teal (#004d6c) background, white text
  - outline: Transparent bg, magenta border/text
  - ghost: Transparent bg, magenta text on hover

**Requirements:**
- Preserve existing onClick logic
- Add hover/focus/active states
- Add disabled state (opacity-50)
- Add loading state (spinner)
- Accessibility: focus ring, keyboard support

**Component Defaults (from mds.md Section 7):**
- Height: h-10 (40px) for default size
- Border radius: rounded-md
- Focus ring: ring-2 ring-magenta ring-offset-2
- Transition: transition-colors duration-200
```

---

## Theme-Specific Prompt Examples

### MDS Theme Prompts

**Hero Section:**
```
Generate hero section using MDS theme:

**Pattern:** Hero with Reveal Animation

**Theme Constraints:**
- Colors: Magenta (#bd1874) accent text, Teal (#004d6c) background gradient
- Typography: Inter font-bold text-5xl for headline
- Animations: animate-reveal-up (1s) for headline, stagger delays (100ms, 200ms, 300ms)
- Style: Modern, bold, energetic

**Requirements:**
- Headline: Large, bold, magenta accent color
- Subheadline: text-xl, muted color
- CTA buttons: Primary (magenta), Secondary (teal outline)
- Background: Teal gradient with abstract shapes
- Entry animation: Reveal-up with stagger
```

**Navigation:**
```
Generate top navigation using MDS theme:

**Pattern:** Top Navigation Bar (navigation-patterns.md - MDS variant)

**Theme Constraints:**
- Colors: Teal (#004d6c) background, white text, magenta (#bd1874) active/hover
- Typography: Inter font-medium
- Spacing: py-4 px-6, gap-8 between links
- Animations: Quick hover transitions (150ms)

**Requirements:**
- Logo left (magenta color)
- Nav links center: Home, Features, Pricing, About
- User menu right with avatar dropdown
- Mobile: Hamburger → Sheet drawer
- Sticky header with subtle shadow on scroll
- Active link: magenta underline (4px thick)
```

### Corporate Theme Prompts

**Landing Page:**
```
Generate corporate landing page using Corporate theme:

**Pattern:** Enterprise Gateway

**Theme Constraints:**
- Colors: Trust Teal (#0F766E) primary, Professional Blue (#0369A1) CTAs
- Typography: Poppins (headings), Open Sans (body)
- Spacing: Conservative spacing (p-8), breathing room (gap-6)
- Animations: Subtle (200-300ms), professional transitions

**Anti-Patterns to Avoid:**
- No playful animations
- No generic stock imagery
- No hidden contact information
- No over-formalization (keep hierarchy clear)

**Requirements:**
- Hero: Trust headline, certification badges visible
- Mega menu: Solutions and Industries with tab switching
- CTA: "Contact Sales" (Professional Blue, prominent)
- Trust signals: Client logos, case studies, expert credentials
- Contact form: Easy to find, professional styling
```

**Case Study Card:**
```
Generate case study card using Corporate theme:

**Theme Constraints:**
- Colors: White background, Trust Teal (#0F766E) accents
- Typography: Poppins font-semibold for title, Open Sans for body
- Spacing: p-6 container, gap-4 between elements
- Style: Professional, credible, organized

**Requirements:**
- Client logo at top
- Case study title (font-semibold, text-xl)
- Industry tag (Badge, Trust Teal)
- Key results: 3 metric cards with icons
- "Read Case Study" link (Professional Blue)
- Hover: Subtle shadow increase (transition 200ms)
```

### Ecommerce Theme Prompts

**Product Card:**
```
Generate product card using Ecommerce theme:

**Pattern:** Product Card with Quick Actions

**Theme Constraints:**
- Colors: White background, Purple (#8B5CF6) CTAs, Gold (#F59E0B) trust signals
- Typography: Rubik (product name), Nunito Sans (description)
- Spacing: p-4, tight spacing for density
- Animations: Quick hover (200ms), add-to-cart feedback

**Anti-Patterns to Avoid:**
- No hidden costs (show price clearly)
- No poor filtering (enable product comparison)
- No slow load times (optimize images)

**Requirements:**
- Image: 1:1 aspect ratio, lazy load, hover zoom
- Product name: text-lg font-semibold, truncate 2 lines
- Price: Large, bold, Gold color if on sale
- Rating: Stars + review count
- Add to Cart button: Purple (#8B5CF6), icon + text
- Wishlist icon: Heart, top-right corner
- Badge: "Sale" or "New" if applicable
- Hover: Shadow, scale image subtle
```

**Checkout Flow:**
```
Generate 3-step checkout flow using Ecommerce theme:

**Pattern:** Funnel (3-Step Conversion)

**Theme Constraints:**
- Colors: Purple (#8B5CF6) active step, gray inactive, Gold trust signals
- Progress bar: Shows current step clearly
- Spacing: Tight steps, clear CTAs

**Anti-Patterns to Avoid:**
- Max 3 steps (Cart → Info → Payment)
- Show shipping/tax early
- No forced account creation
- Guest checkout enabled

**Steps:**
1. Cart Review: Item list, quantity controls, promo code
2. Shipping Info: Form with validation, address autocomplete
3. Payment: Secure badges, payment options, final total

**Requirements:**
- Progress indicator: Step 1/3, visual progress bar
- Back/Next buttons: Clear labels
- Summary sidebar: Order total, items, shipping
- Trust signals: Secure checkout badge, money-back guarantee
```

### ERP Theme Prompts

**Dashboard KPI Grid:**
```
Generate KPI dashboard using ERP theme:

**Pattern:** Data-Dense Dashboard

**Theme Constraints:**
- Colors: Blue (#1E40AF) primary, Amber (#F59E0B) highlights
- Typography: Fira Code (metrics), Fira Sans (labels)
- Spacing: Minimal padding (p-4), tight gaps (gap-2)
- Style: Data-dense, efficient, maximum screen real estate

**Anti-Patterns to Avoid:**
- No information overload (show clear hierarchy)
- Enable filtering on all data
- Provide contextual help tooltips
- Show bulk actions for repeated tasks

**Requirements:**
- Grid: 4 columns desktop, 2 tablet, 1 mobile
- KPI Cards:
  - Metric: Large (text-3xl), bold, Fira Code
  - Label: Small (text-sm), muted
  - Trend: Arrow + percentage, Amber if positive
  - Sparkline: Mini chart (optional)
- Compact: Minimal padding, maximize data density
- Icons: Small (16px), blue color
- Tooltips: On hover, explain metric
```

**Data Table:**
```
Generate data table using ERP theme:

**Pattern:** Data Table with Advanced Filtering

**Theme Constraints:**
- Colors: Blue (#1E40AF) active/selected, white background
- Typography: Fira Sans text-sm (compact)
- Spacing: Row height 40px (compact), cell padding p-2
- Style: Data-efficient, scannable, functional

**Requirements:**
- Columns: [List columns from table spec]
- Features: Multi-column sorting, column filters, global search, pagination, row selection
- Filters: Visible by default, not hidden in dropdowns
- Actions column: Dropdown menu with Edit, Delete, Export
- Bulk actions: Delete selected, Export selected
- Responsive: Horizontal scroll mobile, full table desktop
- Performance: Virtual scrolling for 1000+ rows
```

---

## Validation Checklist

After ui-ux-pro-max generates code, validate:

### ✅ Theme Compliance

- [ ] Colors match theme palette exactly (check hex codes)
- [ ] Typography uses theme fonts (Google Fonts imported)
- [ ] Spacing follows theme scale (4px base unit, component padding)
- [ ] Animations use theme durations and keyframes
- [ ] Component defaults applied (button sizes, input heights, etc.)

### ✅ Component Spec Compliance

- [ ] All UI elements from Section 3 implemented
- [ ] All states from Section 5 handled (default, loading, error, success, empty)
- [ ] All interactions from Section 6 working (event handlers)
- [ ] All validation rules from Section 7 implemented
- [ ] All accessibility requirements from Section 8 met

### ✅ Wireframe Compliance

- [ ] Layout matches wireframe structure
- [ ] Responsive behavior matches wireframe views (mobile, tablet, desktop)
- [ ] All elements from wireframe present
- [ ] Visual hierarchy correct

### ✅ Interaction Compliance

- [ ] All states from state diagram implemented
- [ ] All transitions working correctly
- [ ] Error handling for all error scenarios
- [ ] Data flow matches specification (API calls, validation)

### ✅ Accessibility Compliance

- [ ] Keyboard navigation working (Tab, Enter, Escape, Arrow keys)
- [ ] Screen reader support (ARIA labels, announcements, live regions)
- [ ] Focus management (visible focus, focus trap for modals, focus return)
- [ ] Color contrast meets WCAG AA (4.5:1 for text, 3:1 for UI)
- [ ] Touch targets minimum 44x44px
- [ ] Semantic HTML used

### ✅ Code Quality

- [ ] TypeScript types defined for all props, state, data
- [ ] Error boundaries implemented where needed
- [ ] Loading states with proper feedback
- [ ] No console errors or warnings
- [ ] Performance optimized (memoization, lazy loading where appropriate)

---

## Common Issues and Solutions

### Issue 1: Generated Code Doesn't Match Theme

**Symptom:** Colors, fonts, or spacing don't match theme specification

**Solution:**
1. Verify theme constraints were included in prompt
2. Check that hex codes are exact (copy from theme file)
3. Ensure Google Fonts imports included for custom fonts
4. Re-invoke with explicit color values in prompt

**Example Fix:**
```
// ❌ Vague prompt
"Use corporate colors"

// ✅ Explicit prompt
"Colors: Trust Teal (#0F766E) background, Professional Blue (#0369A1) CTAs, hex codes exact"
```

### Issue 2: Missing States

**Symptom:** Component doesn't handle loading, error, or empty states

**Solution:**
1. Explicitly list ALL states in prompt
2. Reference component spec Section 5
3. Include UI for each state (skeleton, alert, empty illustration)

**Example Fix:**
```
**States to Implement:**
- Default: Loaded data displayed
- Loading: Skeleton placeholder (ShadCN Skeleton component, 5 rows)
- Error: Alert variant="destructive" with retry button
- Empty: "No items found" message with "Create Item" CTA
- Disabled: Opacity 50%, cursor not-allowed
```

### Issue 3: Accessibility Missing

**Symptom:** No ARIA labels, keyboard navigation doesn't work

**Solution:**
1. Add dedicated **Accessibility** section to prompt
2. Specify ARIA attributes explicitly
3. List keyboard shortcuts
4. Include focus management details

**Example Fix:**
```
**Accessibility (Required):**
- ARIA: role="dialog", aria-modal="true", aria-labelledby="modal-title"
- Keyboard: Escape to close, Tab cycles through elements, Enter on button
- Focus trap: Focus stays within modal when open
- Focus return: Returns to trigger button on close
- Screen reader: Announce "Modal opened: [title]" on open
```

### Issue 4: Responsive Behavior Wrong

**Symptom:** Layout breaks on mobile or doesn't match wireframe

**Solution:**
1. Specify breakpoints explicitly (640px, 1024px)
2. Describe layout for EACH breakpoint
3. Reference wireframe views

**Example Fix:**
```
**Responsive Behavior:**
- Mobile (< 640px):
  - Grid: 1 column
  - Cards: Full width, stack vertically
  - Padding: p-4 (reduced from p-6)
  - Sidebar: Hidden, hamburger menu reveals Sheet drawer
- Tablet (640px - 1024px):
  - Grid: 2 columns, gap-4
  - Cards: 50% width
  - Padding: p-6
  - Sidebar: Collapsible, icons only
- Desktop (> 1024px):
  - Grid: 4 columns, gap-6
  - Cards: 25% width, max-width 300px
  - Padding: p-8
  - Sidebar: Full width 256px, always visible
```

### Issue 5: Animations Not Applied

**Symptom:** No entry animations, hover effects missing

**Solution:**
1. Reference theme animation section
2. Specify animation names from theme (e.g., animate-reveal, scroll-reveal)
3. Include durations and triggers
4. Add reduced motion alternatives

**Example Fix:**
```
**Animations (MDS Theme):**
- Entry: animate-reveal-up (1s cubic-bezier(0.16, 1, 0.3, 1))
- Trigger: On component mount
- Stagger: Delay 100ms between elements (delay-100, delay-200, delay-300)
- Hover: Shadow transition (transition-shadow duration-200)
- Button hover: Background color transition (transition-colors duration-200)
- Reduced motion: @media (prefers-reduced-motion) → instant (duration-0)
```

---

## Tips for Success

### 1. Start with Patterns

Always reference a pattern from the pattern library. Don't try to invent new patterns—use proven, accessible patterns.

### 2. One Component at a Time

Generate one component per prompt. Don't try to generate an entire page in one prompt. Break it down:
- Header component
- Hero component
- Feature grid component
- Footer component

Then compose them together.

### 3. Iterate with Feedback

If the first generation isn't perfect:
1. Identify what's wrong
2. Update prompt with more specific constraints
3. Re-generate
4. Update pattern library with improved prompt

### 4. Theme First, Customization Second

Apply theme constraints first, then customize. Don't skip theme application.

### 5. Test Immediately

Test generated code immediately:
- Visual test (does it look right?)
- Interaction test (do all interactions work?)
- Responsive test (test all breakpoints)
- Accessibility test (keyboard, screen reader)
- Edge case test (error states, empty states)

### 6. Document Learnings

When you find a good prompt that works well:
- Save it to the pattern library
- Update the ui-ux-pro-max prompt section in templates
- Share with the team

---

## Advanced Usage

### Custom Theme Prompts

If you create a custom theme (using `themes/template.md`):

1. Fill out ALL sections of theme template
2. Include complete color palette with hex codes
3. Define typography system with Google Fonts imports
4. Specify spacing scale and component padding
5. Create animation keyframes and durations
6. Document component defaults
7. List anti-patterns for your theme category

Then use in prompts:
```
Generate component using [Custom Theme Name] theme:

**Theme Constraints:**
[Copy from your custom theme file]
```

### Multi-Theme Support

If building a component library that supports multiple themes:

```
Generate Button component with multi-theme support:

**Themes:**
1. MDS: Magenta primary, Teal secondary
2. Corporate: Trust Teal primary, Professional Blue secondary
3. Ecommerce: Purple primary, Gold secondary
4. ERP: Blue primary, Amber secondary

**Requirements:**
- Use CSS variables for colors
- Accept theme prop: "mds" | "corporate" | "ecommerce" | "erp"
- Apply theme class to container
- Use Tailwind variants for theme-specific styling
```

### Pattern Composition

Combine multiple patterns:

```
Generate Dashboard Page using ERP theme:

**Patterns:**
1. Top Navigation (compact, breadcrumbs)
2. Sidebar Navigation (collapsible)
3. KPI Grid (data-dense)
4. Data Table (advanced filtering)

**Layout:**
- Header: Pattern 1
- Sidebar: Pattern 2
- Main top: Pattern 3
- Main bottom: Pattern 4

**Theme Constraints:**
[ERP theme constraints]
```

---

## Resources

- **Theme Catalog:** [themes/README.md](./themes/README.md)
- **Pattern Library:** [patterns/README.md](./patterns/README.md)
- **Design Rules:** [design-rules/README.md](./design-rules/README.md)
- **Code Standards:** [design-rules/code-standards.md](./design-rules/code-standards.md)
- **Stage Templates:**
  - [Stage 1 Wireframes](./stage1-wireframes/)
  - [Stage 2 Component Specs](./stage2-component-specs/)
  - [Stage 3 Interactions](./stage3-interactions/)

---

## Support

**Questions?**
- Check the pattern library for similar examples
- Review theme file for complete specifications
- Refer to component spec template for prompt structure
- Consult code standards for implementation details

**Found an issue?**
- Update the prompt template with improved constraints
- Document in pattern library
- Share learnings with the team

---

**Last Updated:** 2026-02-01
**Version:** 2.0.0
**Maintained By:** Design Framework Team
