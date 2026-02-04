# Themes

This directory contains theme files for styling Next.js applications using Tailwind CSS v4 and ShadCN UI.

## Available Themes

### MDS Theme (`mds.css`) - Default

The Modern Design System (MDS) theme provides a bold, brand-focused design:

**Brand Colors:**
- **Magenta** (`#bd1874`) - Primary CTA color
- **Teal** (`#004d6c`) - Secondary/navigation color
- **Teal Accent** (`#14b8a6`) - Highlight color

**Font:** Inter

**Best For:** Brand-focused applications, marketing sites, hero sections

**Animations:**
- `animate-reveal` - Clip-path reveal with upward motion (1s)
- `scroll-reveal` - Viewport-triggered fade in
- `delay-100/200/300/500` - Staggered animation delays
- `beam-h/beam-v` - Decorative beam effects
- `animate-marquee` - Continuous scroll animation

**Utilities:**
- `mask-linear-fade` - Soft edge masking
- `duration-400` - Extended transition duration
- Custom scrollbar styling

---

### Corporate Theme (`corporate.css`)

Professional, trust-focused theme for enterprise and B2B platforms:

**Brand Colors:**
- **Trust Teal** (`#0F766E`) - Primary elements, headers
- **Professional Blue** (`#0369A1`) - Primary CTAs
- **Teal Light** (`#14B8A6`) - Secondary actions, success
- **Soft Background** (`#F0FDFA`) - Page background

**Fonts:**
- **Headings:** Poppins
- **Body:** Open Sans

**Best For:** B2B platforms, professional services, enterprise gateways, healthcare, corporate websites

**Animations:**
- `badge-hover` - Certificate badges scale + shadow (200ms)
- `metric-pulse` - Stat number pulse (300ms)
- `fade-in-up` - Content fade + translate (400ms)
- `stat-reveal` - Metric count-up animation (1.5s)
- `carousel-slide` - Smooth carousel transition (500ms)

**Component Classes:**
- `.btn-primary-cta`, `.btn-secondary`, `.btn-ghost`
- `.card-standard`, `.card-certificate`, `.card-metric`

**Philosophy:** Professional, approachable, trust-building with subtle animations

---

### Ecommerce Theme (`ecommerce.css`)

Vibrant, conversion-optimized theme for online stores and retail:

**Brand Colors:**
- **Gold Trust** (`#F59E0B`) - Sale badges, trust signals
- **Purple Tech** (`#8B5CF6`) - Primary CTAs, "Add to Cart"
- **Gold Light** (`#FBBF24`) - Secondary gold tones
- **Light Background** (`#F8FAFC`) - Page background

**Fonts:**
- **Headings:** Rubik
- **Body:** Nunito Sans

**Best For:** E-commerce stores, product pages, shopping carts, checkout flows, retail websites, marketplaces

**Animations:**
- `product-hover` - Product card lift + shadow (200ms)
- `add-to-cart` - Button scale pulse (300ms)
- `price-highlight` - Sale price glow + pulse (500ms infinite)
- `image-zoom` - Product image scale on hover (300ms)
- `badge-pulse` - Badge pulse animation (2s infinite)

**Component Classes:**
- `.btn-add-to-cart`, `.btn-buy-now`, `.btn-wishlist`
- `.product-card`, `.product-card-image`
- `.sale-badge`, `.cart-badge`
- `.rating-stars`

**Philosophy:** Quick, responsive, snappy animations that encourage action and conversion

---

### ERP Theme (`erp.css`)

Data-dense, efficiency-focused theme for dashboards and business intelligence:

**Brand Colors:**
- **Blue Data** (`#1E40AF`) - Primary data elements, navigation
- **Blue Light** (`#3B82F6`) - Secondary elements, charts
- **Amber Action** (`#F59E0B`) - Action buttons, highlights
- **Light Background** (`#F8FAFC`) - Page background

**Data Visualization Colors:**
- Chart Blue (`#3B82F6`), Chart Green (`#10B981`), Chart Red (`#EF4444`)
- Chart Yellow (`#F59E0B`), Chart Purple (`#8B5CF6`), Chart Teal (`#14B8A6`)

**Fonts:**
- **Headings:** Fira Code (monospace for data alignment)
- **Body:** Fira Sans

**Best For:** Business intelligence dashboards, ERP systems, analytics platforms, admin panels, data warehousing, operational dashboards

**Animations:**
- `row-highlight` - Table row hover (150ms)
- `chart-zoom` - Chart interaction scale (200ms)
- `tooltip-fade` - Data point tooltip fade (150ms)
- `filter-slide` - Filter panel expansion (300ms)
- `spinner` - Data loading rotation (800ms)
- `kpi-reveal` - KPI metric reveal (300ms)

**Component Classes:**
- `.kpi-card`, `.kpi-card-alert`
- `.data-table`, `.table-header`, `.table-row-hover`, `.table-row-selected`
- `.filter-panel`, `.chart-container`
- `.sidebar-nav`, `.nav-item`, `.nav-item-active`
- `.badge-success`, `.badge-warning`, `.badge-error`, `.badge-info`
- `.metric-number`, `.metric-number-large`
- `.trend-up`, `.trend-down`, `.trend-neutral`

**Philosophy:** Minimal, functional animations. Maximum data density with optimal usability

---

## Usage

### Option 1: Replace globals.css (New Projects)

Choose one theme and copy it as your global stylesheet:

```bash
# MDS Theme (default)
cp codebase-framework/themes/mds.css src/app/globals.css

# Corporate Theme
cp codebase-framework/themes/corporate.css src/app/globals.css

# Ecommerce Theme
cp codebase-framework/themes/ecommerce.css src/app/globals.css

# ERP Theme
cp codebase-framework/themes/erp.css src/app/globals.css
```

### Option 2: Merge with Existing

Copy relevant sections from the theme file into your existing `globals.css`:

1. `@theme` block for Tailwind v4 color tokens
2. `:root` variables for CSS custom properties
3. Animation keyframes
4. Utility classes
5. Component classes (if desired)

### Option 3: Multi-Theme Support

To support multiple themes in one application:

```typescript
// app/layout.tsx
import './themes/mds.css'      // Default
import './themes/corporate.css' // Add as body class: <body className="theme-corporate">
```

Or use CSS layers:

```css
/* globals.css */
@import "tailwindcss";

@layer themes {
  @import "./themes/mds.css";
  @import "./themes/corporate.css";
  @import "./themes/ecommerce.css";
  @import "./themes/erp.css";
}
```

---

## Theme Selection Guide

| Use Case | Recommended Theme | Why |
|----------|------------------|-----|
| Marketing website | MDS | Bold, brand-focused, engaging animations |
| B2B SaaS | Corporate | Professional, trust-building, credible |
| Online store | Ecommerce | Conversion-optimized, vibrant, quick feedback |
| Admin dashboard | ERP | Data-dense, efficient, functional |
| E-commerce checkout | Ecommerce | Optimized for conversions, trust signals |
| Corporate website | Corporate | Professional, organized, certificate display |
| Analytics platform | ERP | Chart-heavy, KPI-focused, data alignment |
| Product landing page | MDS or Ecommerce | High engagement (MDS) or conversion focus (Ecommerce) |

---

## Font Setup

Each theme uses specific Google Fonts. Add imports to your layout:

### MDS Theme
```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
```

### Corporate Theme
```typescript
import { Poppins, Open_Sans } from 'next/font/google'
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })
const openSans = Open_Sans({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })
```

### Ecommerce Theme
```typescript
import { Rubik, Nunito_Sans } from 'next/font/google'
const rubik = Rubik({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })
const nunitoSans = Nunito_Sans({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })
```

### ERP Theme
```typescript
import { Fira_Code, Fira_Sans } from 'next/font/google'
const firaCode = Fira_Code({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })
const firaSans = Fira_Sans({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })
```

---

## Documentation

- [Theming Guide](../component-patterns/theming.md) - Comprehensive theming documentation
- [Animation Patterns](../component-patterns/animations.md) - Animation usage guide
- [ShadCN Setup](../component-patterns/shadcn-setup.md) - ShadCN configuration
- [Design Framework Themes](../../design-framework/themes/README.md) - Design specifications

**Theme Specifications:**
- [MDS Theme](../../design-framework/themes/mds.md)
- [Corporate Theme](../../design-framework/themes/corporate.md)
- [Ecommerce Theme](../../design-framework/themes/ecommerce.md)
- [ERP Theme](../../design-framework/themes/erp.md)

---

**Last Updated:** 2026-02-01
