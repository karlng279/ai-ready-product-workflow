# Ecommerce Theme

**Status:** ✅ Production Ready
**Version:** 1.0.0
**Last Updated:** 2026-01-31
**Pattern:** Funnel (3-Step Conversion)

---

## Overview

Vibrant, conversion-focused theme optimized for online stores, retail, and product pages. Emphasizes trust signals, clear CTAs, and streamlined checkout flows.

**Best For:**
- E-commerce stores
- Product landing pages
- Shopping carts and checkout flows
- Retail websites
- Consumer-focused apps
- Marketplaces

**Not Recommended For:**
- Enterprise B2B platforms (use Corporate theme)
- Data-heavy dashboards (use ERP theme)
- Professional services (use Corporate theme)
- Brand-focused marketing without products (use MDS theme)

---

## Color Palette

### Brand Colors

| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| **Primary** | `#F59E0B` | `--color-gold-trust` | Primary highlights, sale badges, trust signals |
| **Secondary** | `#FBBF24` | `--color-gold-light` | Secondary gold tones, accents |
| **CTA** | `#8B5CF6` | `--color-purple-tech` | "Add to Cart", primary CTAs |
| **Background Light** | `#F8FAFC` | `--color-bg-light` | Page backgrounds (light variant) |
| **Background Dark** | `#0F172A` | `--color-bg-dark` | Dark mode variant |

### Neutrals

| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| **White** | `#FFFFFF` | `--color-white` | Cards, product backgrounds |
| **Gray 100** | `#F3F4F6` | `--color-gray-100` | Subtle backgrounds |
| **Gray 300** | `#D1D5DB` | `--color-gray-300` | Borders, dividers |
| **Gray 600** | `#4B5563` | `--color-gray-600` | Secondary text |
| **Gray 900** | `#111827` | `--color-gray-900` | Primary text |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| **Success** | `#10B981` | Order confirmation, in stock |
| **Warning** | `#F59E0B` | Low stock, cautions |
| **Error** | `#EF4444` | Out of stock, errors |
| **Info** | `#3B82F6` | Shipping info, notifications |

---

## Typography

### Font Families

```css
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700&family=Rubik:wght@300;400;500;600;700&display=swap');
```

| Token | Family | Weights | Usage |
|-------|--------|---------|-------|
| **Headings** | Rubik | 300, 400, 500, 600, 700 | H1-H6, product names, section titles |
| **Body** | Nunito Sans | 300, 400, 500, 600, 700 | Body text, descriptions, UI labels |

**Mood:** Ecommerce, clean, shopping, product-focused, conversion-optimized

### Type Scale

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-xs` | 0.75rem (12px) | 1rem (16px) | Labels, badges |
| `text-sm` | 0.875rem (14px) | 1.25rem (20px) | Small UI text |
| `text-base` | 1rem (16px) | 1.5rem (24px) | Body text, descriptions |
| `text-lg` | 1.125rem (18px) | 1.75rem (28px) | Large body text |
| `text-xl` | 1.25rem (20px) | 1.75rem (28px) | Product names |
| `text-2xl` | 1.5rem (24px) | 2rem (32px) | Section headings |
| `text-3xl` | 1.875rem (30px) | 2.25rem (36px) | Page headings |
| `text-4xl` | 2.25rem (36px) | 2.5rem (40px) | Hero headings |
| `text-5xl` | 3rem (48px) | 1 | Large prices, hero text |

### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `font-light` | 300 | Subtle text |
| `font-normal` | 400 | Body text |
| `font-medium` | 500 | Emphasized text |
| `font-semibold` | 600 | Product names, subheadings |
| `font-bold` | 700 | Prices, CTAs, headings |

---

## Spacing Scale

**Large sections with breathing room for products:**

| Token | Size | Pixels | Usage |
|-------|------|--------|-------|
| `2` | 0.5rem | 8px | Tight spacing |
| `3` | 0.75rem | 12px | Small gaps |
| `4` | 1rem | 16px | Standard spacing |
| `6` | 1.5rem | 24px | Medium gaps |
| `8` | 2rem | 32px | Large spacing |
| `12` | 3rem | 48px | Section gaps (minimum for products) |
| `16` | 4rem | 64px | Large sections |
| `20` | 5rem | 80px | Major sections |
| `24` | 6rem | 96px | Hero spacing |

**Philosophy:** Products need space to breathe and stand out. Use larger gaps (48px+) between product sections.

---

## Animation System

### Signature Animations

| Name | Effect | Duration | Easing | Usage |
|------|--------|----------|--------|-------|
| `product-hover` | Scale + shadow + border color shift | 200ms | ease-out | Product card hovers |
| `add-to-cart` | Scale pulse + color flash | 300ms | ease-in-out | Add to Cart button feedback |
| `scroll-snap` | Smooth scroll to snap point | 300ms | ease-out | Product galleries, carousels |
| `price-highlight` | Pulse + glow effect | 500ms | ease-in-out | Sale prices, limited offers |
| `image-zoom` | Image scale on hover | 300ms | ease-out | Product image hover |

### Timing Standards

| Speed | Duration | Usage |
|-------|----------|-------|
| **Quick** | 200ms | Product hover, button states |
| **Standard** | 300ms | Add to Cart, filter changes |
| **Attention** | 500ms | Sale highlights, notifications |

**Note:** Quick, responsive animations that feel snappy and encourage interaction.

### Animation Principles

1. **Responsive & Snappy:** Immediate visual feedback on user actions
2. **Encourage Action:** Animations guide users toward conversion
3. **Product Focus:** Animations draw attention to products
4. **Performance:** Optimize for mobile (60fps minimum)

---

## Visual Style

### Design Characteristics

- **Vibrant & Block-Based**
- **Bold, Energetic, Playful**
- **High Color Contrast**
- **Geometric Shapes**
- **Duotone Effects**
- **Modern, Energetic Feel**
- **Conversion-Optimized**

### Key Visual Elements

**Trust Signals:**
- Customer reviews & ratings (prominently displayed)
- Security badges on checkout (SSL, payment icons)
- Social proof (X people bought this, trending badge)
- Free shipping/returns messaging
- Money-back guarantee
- Secure payment icons

**Conversion Elements:**
- Clear, large "Add to Cart" buttons (purple CTA)
- Persistent cart icon with item count
- Price prominence (large, bold, gold accent)
- Sale badges (gold background, bold text)
- Low stock warnings (create urgency)
- Recently viewed items
- Related products

### Effects & Treatments

**Shadows:**
```css
/* Bold shadows for product cards */
--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.15);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.2);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.25);
```

**Borders:**
- **Radius:** `rounded-lg` (8px) for product cards
- **Style:** Transparent borders that appear on hover (purple/gold)
- **Focus:** Purple focus rings for inputs

**Gradients:**
```css
/* Gold gradient for sale badges */
background: linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%);

/* Purple gradient for CTAs */
background: linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%);
```

---

## Component Defaults

### Buttons

**Primary CTA (Purple - Add to Cart):**
```tsx
<Button className="bg-purple-tech hover:bg-purple-700 text-white rounded-lg px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200 add-to-cart">
  Add to Cart
</Button>
```

**Secondary (Gold - Highlights):**
```tsx
<Button className="bg-gold-trust hover:bg-amber-600 text-white rounded-lg px-6 py-3 font-semibold transition-colors duration-200">
  Buy Now
</Button>
```

**Outline (Wishlist):**
```tsx
<Button variant="outline" className="border-2 border-purple-tech text-purple-tech hover:bg-purple-tech hover:text-white rounded-lg px-6 py-3 font-medium transition-all duration-200">
  Add to Wishlist
</Button>
```

### Product Cards

**Standard Product Card:**
```tsx
<Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden product-hover group">
  {/* Image */}
  <div className="relative overflow-hidden aspect-square">
    <img
      src="/product.jpg"
      alt="Product"
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
    />
    {/* Sale Badge */}
    <div className="absolute top-3 right-3 bg-gradient-to-r from-gold-trust to-gold-light text-white px-3 py-1 rounded-full text-xs font-bold">
      SALE 30%
    </div>
  </div>

  {/* Content */}
  <div className="p-4">
    {/* Rating */}
    <div className="flex items-center gap-2 mb-2">
      <div className="flex text-gold-trust">★★★★★</div>
      <span className="text-sm text-gray-600">(124 reviews)</span>
    </div>

    {/* Product Name */}
    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
      Premium Wireless Headphones
    </h3>

    {/* Price */}
    <div className="flex items-baseline gap-2 mb-4">
      <span className="text-3xl font-bold text-purple-tech">$99</span>
      <span className="text-lg text-gray-500 line-through">$149</span>
    </div>

    {/* CTA */}
    <Button className="w-full bg-purple-tech hover:bg-purple-700 text-white rounded-lg py-3 font-semibold">
      Add to Cart
    </Button>
  </div>
</Card>
```

**Featured Product Card (Hero):**
```tsx
<div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-purple-tech to-purple-600 text-white rounded-xl p-8 shadow-2xl">
  {/* Image */}
  <div className="relative">
    <img
      src="/featured-product.jpg"
      alt="Featured Product"
      className="rounded-lg shadow-xl"
    />
  </div>

  {/* Content */}
  <div>
    <div className="inline-block bg-gold-trust px-4 py-2 rounded-full text-sm font-bold mb-4">
      ✨ BEST SELLER
    </div>
    <h2 className="text-4xl font-bold mb-4">
      Ultra Noise Cancelling Pro
    </h2>
    <p className="text-xl mb-6">
      Experience studio-quality sound anywhere you go.
    </p>
    <div className="flex items-baseline gap-3 mb-6">
      <span className="text-5xl font-bold">$199</span>
      <span className="text-2xl line-through opacity-75">$299</span>
    </div>
    <Button className="bg-white text-purple-tech hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-lg">
      Shop Now
    </Button>
  </div>
</div>
```

### Shopping Cart

**Cart Icon with Badge:**
```tsx
<button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
  <ShoppingCart className="w-6 h-6 text-gray-900" />
  {/* Item count badge */}
  <span className="absolute -top-1 -right-1 bg-purple-tech text-white w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center">
    3
  </span>
</button>
```

**Cart Drawer/Modal:**
```tsx
<div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-2xl z-50 flex flex-col">
  {/* Header */}
  <div className="p-6 border-b border-gray-200">
    <h2 className="text-2xl font-bold text-gray-900">Shopping Cart (3)</h2>
  </div>

  {/* Items */}
  <div className="flex-1 overflow-y-auto p-6 space-y-4">
    {/* Cart item card */}
  </div>

  {/* Footer */}
  <div className="p-6 border-t border-gray-200 bg-gray-50">
    <div className="flex justify-between mb-4 text-lg">
      <span className="font-medium">Subtotal:</span>
      <span className="font-bold text-2xl text-purple-tech">$297</span>
    </div>
    <Button className="w-full bg-purple-tech hover:bg-purple-700 text-white py-4 text-lg font-bold rounded-lg">
      Checkout
    </Button>
    <p className="text-center text-sm text-gray-600 mt-3">
      Free shipping on orders over $50
    </p>
  </div>
</div>
```

### Checkout Flow

**Progress Indicator (3 Steps Maximum):**
```tsx
<div className="flex items-center justify-center mb-8">
  {/* Step 1 */}
  <div className="flex items-center">
    <div className="w-10 h-10 rounded-full bg-purple-tech text-white flex items-center justify-center font-bold">
      1
    </div>
    <span className="ml-2 font-medium">Cart</span>
  </div>

  {/* Connector */}
  <div className="w-16 h-1 bg-purple-tech mx-4"></div>

  {/* Step 2 */}
  <div className="flex items-center">
    <div className="w-10 h-10 rounded-full bg-purple-tech text-white flex items-center justify-center font-bold">
      2
    </div>
    <span className="ml-2 font-medium">Shipping</span>
  </div>

  {/* Connector */}
  <div className="w-16 h-1 bg-gray-300 mx-4"></div>

  {/* Step 3 */}
  <div className="flex items-center">
    <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-bold">
      3
    </div>
    <span className="ml-2 text-gray-600">Payment</span>
  </div>
</div>
```

---

## Anti-Patterns to Avoid

### 1. Hidden Costs

**Don't:**
- ❌ Shipping costs only shown at final checkout step
- ❌ Hidden taxes or fees appearing late
- ❌ Surprise "handling fees" at checkout
- ❌ Region-based pricing not disclosed early

**Do:**
- ✅ Show all costs early (product page or cart)
- ✅ Display shipping calculator on product pages
- ✅ Clear tax/fee breakdown in cart
- ✅ "Free shipping over $X" messaging

### 2. Complex Checkout

**Don't:**
- ❌ More than 3 checkout steps
- ❌ Forcing account creation before purchase
- ❌ Requiring unnecessary information (phone for digital products)
- ❌ Checkout process that isn't clear

**Do:**
- ✅ Guest checkout option prominently available
- ✅ Maximum 3 steps (Cart → Shipping → Payment)
- ✅ Progress indicator showing current step
- ✅ "Continue as guest" option

### 3. Poor Product Filtering

**Don't:**
- ❌ Single-dimension filtering only (price OR category)
- ❌ No way to combine multiple filters
- ❌ Filters that reset when navigating
- ❌ No sorting options

**Do:**
- ✅ Multi-facet filtering (price + color + size + brand)
- ✅ Active filters clearly shown with remove option
- ✅ Persistent filters across navigation
- ✅ Sorting (price, popularity, newest, rating)

### 4. Unclear CTAs

**Don't:**
- ❌ "Add to Cart" button not immediately visible above fold
- ❌ Weak CTA copy ("Submit", "Continue", "OK")
- ❌ Multiple competing CTAs on product page
- ❌ Small, hard-to-click buttons (especially mobile)

**Do:**
- ✅ Bold, clear "Add to Cart" button (purple, large)
- ✅ Action-oriented copy ("Buy Now", "Add to Cart", "Shop Now")
- ✅ Single primary CTA per section
- ✅ Mobile-friendly touch targets (min 44x44px)

### 5. Slow Load Times

**Don't:**
- ❌ Unoptimized product images (> 500KB)
- ❌ Loading entire catalog at once
- ❌ No lazy loading for images
- ❌ Heavy JavaScript bundles

**Do:**
- ✅ Lazy load product images below fold
- ✅ Use WebP format with fallbacks
- ✅ Implement CDN for images
- ✅ Code splitting for faster initial load
- ✅ Image placeholder/skeleton while loading

### 6. Missing Trust Signals

**Don't:**
- ❌ No customer reviews or ratings
- ❌ No security badges on checkout
- ❌ No return policy mentioned
- ❌ Anonymous business (no about/contact)

**Do:**
- ✅ Prominent reviews and star ratings on products
- ✅ Trust badges (SSL, payment icons) on checkout
- ✅ Clear return/refund policy linked in footer
- ✅ Social proof ("500 sold this week", "Trending")

### 7. Design Elements to Avoid

**Don't:**
- ❌ Flat design without depth (products need to "pop")
- ❌ Text-heavy product pages (show, don't tell)
- ❌ Forcing account creation before checkout
- ❌ Intrusive popups on page load
- ❌ Auto-playing product videos with sound

**Do:**
- ✅ Visual-first product display with depth (shadows, hover effects)
- ✅ Bullet points and short descriptions
- ✅ Optional account creation (save for later)
- ✅ Exit-intent popups only (offer discount)
- ✅ User-initiated video playback

### 8. Mobile UX Issues

**Don't:**
- ❌ Tiny product images on mobile
- ❌ Horizontal scrolling for product grids
- ❌ Form inputs too small to tap
- ❌ Modal filters that cover entire screen

**Do:**
- ✅ Large, tappable product images (full width)
- ✅ Single column on mobile, 2-3 on tablet
- ✅ Large form inputs (min 44px height)
- ✅ Slide-in filter drawer on mobile

---

## ui-ux-pro-max Integration

### Theme Constraint Template

When invoking ui-ux-pro-max, use this template:

```
Generate [component/page name] using Ecommerce theme:

**Theme Constraints:**
- Colors: Gold (#F59E0B) for highlights, Purple (#8B5CF6) for CTAs
- Typography: Rubik headings, Nunito Sans body
- Spacing: Large sections (48px+ gaps between products)
- Style: Vibrant, bold, high contrast, conversion-focused
- Animations: Quick (200-300ms), responsive, product-focused

**Anti-Patterns to Avoid:**
[Reference specific anti-patterns from above]

**Requirements:**
[List specific requirements here]
```

### Example Prompts

**Product Listing Page (PLP):**
```
Generate a product grid using Ecommerce theme:

**Theme Constraints:**
- Colors: Gold (#F59E0B) for sale badges, Purple (#8B5CF6) for "Add to Cart"
- Typography: Rubik headings (text-xl for product names), Nunito Sans descriptions
- Layout: 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Spacing: 48px gap between rows, 24px between columns
- Animations: product-hover on cards, add-to-cart on button click

**Anti-Patterns to Avoid:**
- Show prices prominently, no hidden costs
- Enable multi-facet filtering (price, category, brand, rating)
- Quick, responsive animations (200ms)

**Requirements:**
- Product cards with: image (aspect-square), sale badge (if on sale), rating, name, price, CTA
- Filters: Sidebar on desktop (price range, category checkboxes, brand, rating)
- Filters: Slide-in drawer on mobile
- Sorting: Dropdown (Featured, Price: Low to High, Price: High to Low, Newest, Top Rated)
- Pagination: 12 products per page, "Load More" button
- Trust signal: "Free shipping on orders over $50" banner
```

**Product Detail Page (PDP):**
```
Generate a product detail page using Ecommerce theme:

**Theme Constraints:**
- Colors: Gold for trust badges/sale, Purple for "Add to Cart"
- Typography: Rubik (text-4xl for product name), Nunito Sans (text-base for description)
- Layout: 2-column (desktop): image gallery left, details right
- Mobile: Single column, image top, details below
- Animations: image-zoom on hover, add-to-cart button pulse

**Anti-Patterns to Avoid:**
- Show all costs early (price, shipping estimate)
- Clear, large "Add to Cart" button
- Visual-first (large images, short text)

**Requirements:**
- Image Gallery: Main image + 4-5 thumbnails, click to zoom
- Product Details: Name, rating (with review count link), price (large, bold), sale badge if applicable
- Variant Selectors: Size (buttons), Color (color swatches), Quantity (number input)
- CTA: "Add to Cart" (purple, large, prominent), "Add to Wishlist" (outline, secondary)
- Tabs: Description, Reviews, Shipping & Returns
- Trust Signals: Free shipping message, return policy, secure checkout badge
- Related Products: Carousel at bottom (4 products visible)
```

**Checkout Flow (3 Steps):**
```
Generate a 3-step checkout using Ecommerce theme:

**Theme Constraints:**
- Colors: Purple CTAs, gold progress indicator
- Typography: Clear, large text for input labels (text-base font-medium)
- Layout: Single column, max-width 600px centered, progress bar at top
- Spacing: Generous (p-6 sections, gap-6 form fields)

**Anti-Patterns to Avoid:**
- Max 3 steps (Cart → Shipping → Payment)
- Guest checkout prominently available
- Show all costs (subtotal, shipping, tax, total) in sticky sidebar

**Steps:**
1. **Cart Review:** Items list, quantity adjust, remove option, coupon code, cost breakdown
2. **Shipping:** Email, shipping address form, shipping method selection (with cost), guest checkout option
3. **Payment:** Payment method (card, PayPal, etc.), billing address (same as shipping checkbox), trust badges, final review, "Place Order" button

**Features:**
- Progress indicator: Steps 1-2-3 at top
- Sticky order summary sidebar (desktop) showing items, costs
- Mobile: Order summary collapsible accordion
- Security badges: SSL, payment icons, money-back guarantee
- "Place Order" button: Large, purple, bold "Place Order - $297" with final price
```

---

## CSS Implementation

**File:** `codebase-framework/themes/ecommerce.css`

```css
/* Ecommerce Theme - Tailwind CSS Custom Theme */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Colors */
    --color-gold-trust: #F59E0B;
    --color-gold-light: #FBBF24;
    --color-purple-tech: #8B5CF6;
    --color-bg-light: #F8FAFC;
    --color-bg-dark: #0F172A;

    /* Neutrals */
    --color-white: #FFFFFF;
    --color-gray-100: #F3F4F6;
    --color-gray-300: #D1D5DB;
    --color-gray-600: #4B5563;
    --color-gray-900: #111827;

    /* Typography */
    --font-heading: 'Rubik', sans-serif;
    --font-body: 'Nunito Sans', sans-serif;
  }

  body {
    @apply font-body text-base text-gray-900 bg-bg-light;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading font-semibold;
  }
}

@layer components {
  /* Button Variants */
  .btn-add-to-cart {
    @apply bg-purple-tech hover:bg-purple-700 text-white rounded-lg px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200;
  }

  .btn-buy-now {
    @apply bg-gold-trust hover:bg-amber-600 text-white rounded-lg px-6 py-3 font-semibold transition-colors duration-200;
  }

  .btn-wishlist {
    @apply border-2 border-purple-tech text-purple-tech hover:bg-purple-tech hover:text-white rounded-lg px-6 py-3 font-medium transition-all duration-200;
  }

  /* Product Card */
  .product-card {
    @apply bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden;
  }

  .product-card-image {
    @apply relative overflow-hidden aspect-square;
  }

  /* Sale Badge */
  .sale-badge {
    @apply absolute top-3 right-3 bg-gradient-to-r from-gold-trust to-gold-light text-white px-3 py-1 rounded-full text-xs font-bold;
  }
}

@layer utilities {
  /* Custom Animations */
  @keyframes productHover {
    from {
      transform: translateY(0);
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.15);
    }
    to {
      transform: translateY(-4px);
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.25);
    }
  }

  @keyframes addToCart {
    0%, 100% { transform: scale(1); }
    25% { transform: scale(0.95); }
    50% { transform: scale(1.05); }
    75% { transform: scale(0.98); }
  }

  @keyframes priceHighlight {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.9; }
  }

  @keyframes imageZoom {
    from { transform: scale(1); }
    to { transform: scale(1.1); }
  }

  .product-hover:hover {
    animation: productHover 200ms ease-out forwards;
  }

  .add-to-cart:active {
    animation: addToCart 300ms ease-in-out;
  }

  .price-highlight {
    animation: priceHighlight 500ms ease-in-out infinite;
  }

  .image-zoom:hover img {
    animation: imageZoom 300ms ease-out forwards;
  }

  /* Custom Colors */
  .text-gold-trust { color: var(--color-gold-trust); }
  .bg-gold-trust { background-color: var(--color-gold-trust); }
  .border-gold-trust { border-color: var(--color-gold-trust); }

  .text-purple-tech { color: var(--color-purple-tech); }
  .bg-purple-tech { background-color: var(--color-purple-tech); }
  .border-purple-tech { border-color: var(--color-purple-tech); }

  .bg-gold-light { background-color: var(--color-gold-light); }
  .bg-bg-light { background-color: var(--color-bg-light); }
  .bg-bg-dark { background-color: var(--color-bg-dark); }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Usage Examples

See [Component Defaults](#component-defaults) section above for detailed code examples.

---

## Accessibility Compliance

### WCAG AA Standards (Minimum)

**Important:** Ecommerce sites must prioritize accessibility to reach all customers.

- **Color Contrast:**
  - Gold Trust (#F59E0B) on white: 3.9:1 ⚠️ (Use for badges only, not body text)
  - Purple Tech (#8B5CF6) on white: 5.7:1 ✅ AA
  - Gray 900 (#111827) on white: 16.1:1 ✅ AAA

- **Focus Indicators:** Purple ring (2px) on all interactive elements
- **Animation:** Respects `prefers-reduced-motion`
- **Keyboard Navigation:** All product actions accessible via keyboard
- **ARIA Labels:** Proper labeling on cart, wishlist, filters, ratings
- **Image Alt Text:** All product images have descriptive alt text

### Testing Checklist

- [ ] Test color contrast (gold for accents only, not text)
- [ ] Verify all product actions keyboard-accessible
- [ ] Test screen reader with product cards, cart, checkout
- [ ] Validate filter and sort interactions
- [ ] Test with `prefers-reduced-motion: reduce`
- [ ] Ensure all images have meaningful alt text
- [ ] Test checkout flow with keyboard only
- [ ] Verify form validation error messages

---

## Performance

**Targets:**
- ⚡ **Good** performance (optimize images critical!)
- Lighthouse Score: 85+ (Performance), 95+ (Accessibility, Best Practices, SEO)
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s

**Optimization Checklist:**
- [ ] Convert product images to WebP with JPEG fallback
- [ ] Implement lazy loading for below-fold products
- [ ] Use responsive images (`srcset`, `sizes`)
- [ ] Optimize image sizes (< 200KB per product image)
- [ ] Use CDN for product images
- [ ] Code splitting for checkout flow
- [ ] Minimize third-party scripts
- [ ] Implement service worker for offline support (optional)

---

## Resources

- **Integration Guide:** [UI_UX_PROMAX_INTEGRATION.md](../UI_UX_PROMAX_INTEGRATION.md)
- **Full Plan:** [design-framework-uiux-promax-integration-plan.md](../../documentation/design-framework-uiux-promax-integration-plan.md)
- **Theme Catalog:** [README.md](./README.md)
- **CSS Implementation:** `codebase-framework/themes/ecommerce.css`

---

**Theme Maintainer:** Design Framework Team
**Questions/Feedback:** Create an issue or update this document
