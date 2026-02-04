# Multi-Theme Integration Guide

> How to apply and customize themes in your Next.js application with Tailwind CSS v4 and ShadCN UI

## Overview

The codebase framework provides four production-ready themes, each optimized for specific use cases. All themes are built on ShadCN UI and Tailwind CSS v4, providing cohesive visual design systems with brand colors, animations, and utility classes.

**Available Themes:**
- **MDS** - Modern, bold, brand-focused (default)
- **Corporate** - Professional, trust-focused, enterprise
- **Ecommerce** - Vibrant, conversion-optimized, retail
- **ERP** - Data-dense, efficient, dashboard-focused

---

## Quick Start

### 1. Choose a Theme

See the [Theme Selection Guide](../themes/README.md#theme-selection-guide) to choose the right theme for your project.

### 2. Copy Theme File

Copy your chosen theme from the themes folder to your project:

```bash
# From project root

# MDS Theme (default - marketing, brand-focused)
cp codebase-framework/themes/mds.css src/app/globals.css

# Corporate Theme (B2B, professional services)
cp codebase-framework/themes/corporate.css src/app/globals.css

# Ecommerce Theme (online stores, retail)
cp codebase-framework/themes/ecommerce.css src/app/globals.css

# ERP Theme (dashboards, analytics)
cp codebase-framework/themes/erp.css src/app/globals.css
```

### 3. Import in Layout

Ensure your root layout imports the global styles:

```typescript
// app/layout.tsx
import './globals.css'
```

### 4. Add Fonts

Each theme uses specific Google Fonts. Import them in your layout:

**MDS Theme:**
```typescript
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

**Corporate Theme:**
```typescript
import { Poppins, Open_Sans } from 'next/font/google'
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })
const openSans = Open_Sans({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })

// Apply poppins to headings, openSans to body
```

**Ecommerce Theme:**
```typescript
import { Rubik, Nunito_Sans } from 'next/font/google'
const rubik = Rubik({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })
const nunitoSans = Nunito_Sans({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })
```

**ERP Theme:**
```typescript
import { Fira_Code, Fira_Sans } from 'next/font/google'
const firaCode = Fira_Code({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })
const firaSans = Fira_Sans({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })
```

### 5. Start Using Theme Classes

Each theme provides specific utility classes and components:

**MDS Theme:**
```tsx
<button className="bg-magenta text-white hover:bg-magenta-dark">
  Primary CTA
</button>

<h1 className="animate-reveal delay-100">Welcome</h1>
```

**Corporate Theme:**
```tsx
<button className="btn-primary-cta">Contact Sales</button>

<div className="card-certificate badge-hover">
  <img src="/cert.svg" alt="ISO 27001" />
  <p className="text-trust-teal">Certified</p>
</div>
```

**Ecommerce Theme:**
```tsx
<button className="btn-add-to-cart">Add to Cart</button>

<div className="product-card product-hover">
  <div className="product-card-image">
    <img src="/product.jpg" alt="Product" />
    <span className="sale-badge">SALE 30%</span>
  </div>
</div>
```

**ERP Theme:**
```tsx
<div className="kpi-card kpi-reveal">
  <h3 className="text-sm text-gray-600">Total Revenue</h3>
  <div className="metric-number">$2.4M</div>
  <span className="trend-up">+12.5%</span>
</div>

<table className="data-table">
  <tr className="table-row-hover">...</tr>
</table>
```

---

## Theme Comparison

| Feature | MDS | Corporate | Ecommerce | ERP |
|---------|-----|-----------|-----------|-----|
| **Primary Color** | Magenta (#bd1874) | Trust Teal (#0F766E) | Purple (#8B5CF6) | Blue Data (#1E40AF) |
| **Secondary Color** | Teal (#004d6c) | Professional Blue (#0369A1) | Gold (#F59E0B) | Amber (#F59E0B) |
| **Heading Font** | Inter | Poppins | Rubik | Fira Code (mono) |
| **Body Font** | Inter | Open Sans | Nunito Sans | Fira Sans |
| **Animation Speed** | Bold (1s) | Subtle (200-300ms) | Quick (200ms) | Minimal (150ms) |
| **Border Radius** | 0.5rem (8px) | 0.375rem (6px) | 0.5rem (8px) | 0.375rem (6px) |
| **Use Case** | Marketing, Brand | B2B, Enterprise | Retail, Products | Dashboards, Data |
| **Spacing** | Standard | Generous | Large sections | Minimal, dense |

---

## MDS Theme Usage

### Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Magenta | `#bd1874` | Primary CTAs, brand emphasis |
| Magenta Dark | `#a01462` | Hover states |
| Teal | `#004d6c` | Navigation, secondary elements |
| Teal Accent | `#14b8a6` | Highlights, success states |

### Common Patterns

```tsx
// Hero with brand gradient
<section className="bg-gradient-to-r from-magenta to-teal text-white">
  <h1 className="text-5xl animate-reveal">Welcome</h1>
  <Button className="bg-white text-magenta">Get Started</Button>
</section>

// Staggered entry animation
<div className="animate-reveal delay-100">First</div>
<div className="animate-reveal delay-200">Second</div>
<div className="animate-reveal delay-300">Third</div>

// Scroll-triggered animation (requires JS)
<Card className="scroll-reveal">Content</Card>
```

---

## Corporate Theme Usage

### Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Trust Teal | `#0F766E` | Primary elements, headers |
| Professional Blue | `#0369A1` | Primary CTAs |
| Teal Light | `#14B8A6` | Secondary actions, success |
| Soft Background | `#F0FDFA` | Page background |

### Common Patterns

```tsx
// Enterprise hero with certifications
<section className="bg-gradient-to-br from-trust-teal to-teal-light text-white py-20">
  <h1 className="text-5xl font-bold fade-in-up">
    Trusted by 2,500+ Enterprise Clients
  </h1>
  <div className="flex gap-4 mt-6">
    <img src="/soc2.svg" alt="SOC 2" className="h-12" />
    <img src="/iso.svg" alt="ISO 27001" className="h-12" />
  </div>
  <button className="btn-primary-cta mt-8">Schedule Demo</button>
</section>

// Certificate badge grid
<div className="grid grid-cols-4 gap-6">
  {certs.map(cert => (
    <div key={cert.id} className="card-certificate badge-hover">
      <img src={cert.icon} alt={cert.name} className="w-16 h-16 mx-auto" />
      <p className="text-trust-teal font-semibold">{cert.name}</p>
    </div>
  ))}
</div>

// Metric card with pulse animation
<div className="card-metric">
  <div className="text-5xl font-bold metric-pulse">2,500+</div>
  <div className="text-lg">Enterprise Clients</div>
</div>
```

---

## Ecommerce Theme Usage

### Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Gold Trust | `#F59E0B` | Sale badges, trust signals |
| Purple Tech | `#8B5CF6` | Primary CTAs, "Add to Cart" |
| Gold Light | `#FBBF24` | Secondary gold tones |

### Common Patterns

```tsx
// Product card with hover effects
<div className="product-card product-hover">
  <div className="product-card-image">
    <img src="/product.jpg" alt="Product" className="w-full" />
    <span className="sale-badge">SALE 30%</span>
  </div>
  <div className="p-4">
    <div className="rating-stars">★★★★★</div>
    <h3 className="text-xl font-semibold">Product Name</h3>
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold text-purple-tech">$99</span>
      <span className="text-lg line-through text-gray-500">$149</span>
    </div>
    <button className="btn-add-to-cart w-full mt-4">Add to Cart</button>
  </div>
</div>

// Cart badge
<button className="relative">
  <ShoppingCart className="w-6 h-6" />
  <span className="cart-badge">3</span>
</button>

// Sale price with pulse
<span className="text-4xl font-bold text-purple-tech price-highlight">
  $99.99
</span>
```

---

## ERP Theme Usage

### Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Blue Data | `#1E40AF` | Primary data, navigation |
| Blue Light | `#3B82F6` | Charts, secondary elements |
| Amber Action | `#F59E0B` | Action buttons, highlights |

### Chart Colors

Available for data visualization: `chart-blue`, `chart-green`, `chart-red`, `chart-yellow`, `chart-purple`, `chart-teal`

### Common Patterns

```tsx
// KPI metric card
<div className="kpi-card kpi-reveal">
  <div className="flex items-baseline justify-between mb-2">
    <h3 className="text-sm font-medium text-gray-600">Total Revenue</h3>
    <span className="trend-up">+12.5%</span>
  </div>
  <div className="metric-number">$2.4M</div>
  <div className="h-12 mt-3">
    <Sparkline data={data} color="#3B82F6" />
  </div>
</div>

// Data table with hover
<div className="data-table">
  <table>
    <thead className="table-header">
      <tr>
        <th>ID</th>
        <th>Customer</th>
        <th>Amount</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr className="table-row-hover">
        <td className="font-mono">#TXN-1234</td>
        <td>John Doe</td>
        <td className="font-mono-data text-blue-data">$1,234.56</td>
        <td><span className="badge-success">Completed</span></td>
      </tr>
    </tbody>
  </table>
</div>

// Alert KPI card
<div className="kpi-card-alert">
  <div className="flex items-center justify-between mb-2">
    <h3 className="text-sm font-semibold text-red-700">Critical Alerts</h3>
    <AlertCircle className="w-5 h-5 text-red-600" />
  </div>
  <div className="metric-number-large text-red-600">23</div>
</div>
```

---

## Customizing Themes

### Overriding Colors

Edit the `@theme` block in your theme file:

```css
@theme {
    /* Override primary color */
    --color-magenta: #your-brand-color;
    --color-magenta-dark: #your-darker-variant;
}
```

### Adding New Colors

```css
@theme {
    /* Add new brand colors */
    --color-brand-gold: #fbbf24;
    --color-brand-navy: #1e3a5f;
}
```

Then use in components:

```tsx
<div className="bg-brand-gold text-brand-navy">
  Custom brand element
</div>
```

### Adjusting ShadCN Primary

To change the primary color used by ShadCN components:

```css
:root {
    /* Change primary to different color */
    --primary: 195 100% 21%;  /* Teal HSL */
    --primary-foreground: 210 40% 98%;
}
```

---

## Dark Mode Support

### Adding Dark Mode to a Theme

Add dark mode variables to your theme:

```css
.dark {
    --background: #171717;
    --foreground: #ffffff;

    /* MDS Theme dark colors */
    --primary-magenta: #d946ef;  /* Lighter for dark mode */
    --primary-teal: #0891b2;

    /* ShadCN dark variables */
    --card: 0 0% 10%;
    --card-foreground: 0 0% 100%;
    --primary: 326 77% 58%; /* Lighter magenta */
    --border: 217.2 32.6% 17.5%;
}
```

### Theme Toggle

See [shadcn-setup.md](shadcn-setup.md) for theme toggle implementation.

---

## Multi-Theme Support in One App

To use multiple themes in a single application (e.g., corporate theme for public site, ERP theme for admin dashboard):

### Option 1: Route-based Themes

```typescript
// app/layout.tsx (public site - Corporate theme)
import '../themes/corporate.css'

// app/dashboard/layout.tsx (admin - ERP theme)
import '../../themes/erp.css'
```

### Option 2: CSS Scoping

```css
/* globals.css */
.theme-corporate {
  /* Corporate theme variables */
}

.theme-erp {
  /* ERP theme variables */
}
```

```tsx
// Public layout
<body className="theme-corporate">{children}</body>

// Admin layout
<body className="theme-erp">{children}</body>
```

---

## Integration with ShadCN Components

### Button with Theme Variants

```tsx
// components/ui/button.tsx
import { cva } from "class-variance-authority"

const buttonVariants = cva("...", {
  variants: {
    variant: {
      // MDS Theme
      brand: "bg-magenta text-white hover:bg-magenta-dark",

      // Corporate Theme
      corporate: "btn-primary-cta", // Uses theme class

      // Ecommerce Theme
      cart: "btn-add-to-cart",      // Uses theme class

      // ERP Theme
      data: "bg-blue-data text-white hover:bg-blue-800",
    },
  },
})
```

### Card with Theme Animations

```tsx
// Animated card component
export function AnimatedCard({ children, delay = 0, theme = "mds" }) {
  const animations = {
    mds: "scroll-reveal",
    corporate: "fade-in-up",
    ecommerce: "product-hover",
    erp: "kpi-reveal",
  }

  return (
    <Card className={cn(
      animations[theme],
      delay && `delay-${delay}`
    )}>
      {children}
    </Card>
  )
}
```

---

## Best Practices

### Do's

- Choose one primary theme for your application
- Use theme-specific component classes (`.btn-add-to-cart`, `.kpi-card`, etc.)
- Apply brand colors consistently
- Follow theme animation guidelines (fast for ecommerce, subtle for corporate)
- Test accessibility with theme colors

### Don'ts

- Don't mix arbitrary Tailwind colors with theme colors
- Don't combine incompatible themes (e.g., MDS animations with ERP styling)
- Don't forget hover/focus states when using brand colors
- Don't hardcode hex values - use CSS variables
- Don't ignore theme-specific anti-patterns (see theme spec files)

---

## Related Documentation

- **Theme Catalog:** [Themes README](../themes/README.md)
- **Theme Specifications:**
  - [MDS Theme](../../design-framework/themes/mds.md)
  - [Corporate Theme](../../design-framework/themes/corporate.md)
  - [Ecommerce Theme](../../design-framework/themes/ecommerce.md)
  - [ERP Theme](../../design-framework/themes/erp.md)
- **ShadCN Setup:** [shadcn-setup.md](shadcn-setup.md)
- **Animation Guide:** [animations.md](animations.md)
- **Design Framework:** [Design Framework README](../../design-framework/README.md)

---

**Last Updated:** 2026-02-01
