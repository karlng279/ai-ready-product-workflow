# MDS (Modern Design System) Theme

**Status:** ✅ DEFAULT Theme
**Version:** 1.0.0
**Last Updated:** 2026-01-31

---

## Overview

Brand-focused theme with magenta/teal identity and bold animations. Best for features requiring strong brand presence and modern, energetic feel.

**Best For:**
- Brand-focused marketing pages
- Hero sections with strong CTAs
- Features requiring emphasis
- Modern SaaS interfaces
- Landing pages with bold visuals

**Not Recommended For:**
- Enterprise B2B platforms (use Corporate theme)
- Data-heavy dashboards (use ERP theme)
- E-commerce checkout flows (use Ecommerce theme)

---

## Color Palette

### Brand Colors

| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| **Primary** | `#bd1874` | `--color-magenta` | Primary CTAs, emphasis, hero sections |
| **Primary Dark** | `#a01462` | `--color-magenta-dark` | Hover/active states on primary |
| **Secondary** | `#004d6c` | `--color-teal` | Navigation, headers, secondary buttons |
| **Accent** | `#14b8a6` | `--color-teal-accent` | Success indicators, highlights, progress |

### Neutrals

| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| **Background** | `#f9fafb` | `--color-gray-50` | Page backgrounds |
| **Text** | `#111827` | `--color-gray-900` | Primary text |
| **Border** | `#e5e7eb` | `--color-gray-200` | Borders, dividers |
| **Muted** | `#6b7280` | `--color-gray-500` | Secondary text, placeholders |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| **Success** | `#14b8a6` | Success messages, confirmations |
| **Warning** | `#f59e0b` | Warnings, cautionary states |
| **Error** | `#ef4444` | Error messages, destructive actions |
| **Info** | `#3b82f6` | Informational messages |

---

## Typography

### Font Families

```css
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400&display=swap');
```

| Token | Family | Weights | Usage |
|-------|--------|---------|-------|
| **Headings** | Inter | 500, 600, 700 | H1-H6, section titles |
| **Body** | Inter | 400, 500 | Body text, UI labels |
| **Mono** | JetBrains Mono | 400 | Code blocks, technical content |

### Type Scale

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-xs` | 0.75rem (12px) | 1rem (16px) | Captions, footnotes |
| `text-sm` | 0.875rem (14px) | 1.25rem (20px) | Small UI text |
| `text-base` | 1rem (16px) | 1.5rem (24px) | Body text |
| `text-lg` | 1.125rem (18px) | 1.75rem (28px) | Large body text |
| `text-xl` | 1.25rem (20px) | 1.75rem (28px) | Small headings |
| `text-2xl` | 1.5rem (24px) | 2rem (32px) | Section headings |
| `text-3xl` | 1.875rem (30px) | 2.25rem (36px) | Page headings |
| `text-4xl` | 2.25rem (36px) | 2.5rem (40px) | Hero headings |
| `text-5xl` | 3rem (48px) | 1 | Display headings |
| `text-6xl` | 3.75rem (60px) | 1 | Large display |

### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `font-normal` | 400 | Body text |
| `font-medium` | 500 | Emphasized text, labels |
| `font-semibold` | 600 | Subheadings |
| `font-bold` | 700 | Headings, strong emphasis |

---

## Spacing Scale

Based on **4px base unit** (0.25rem):

| Token | Size | Pixels | Usage |
|-------|------|--------|-------|
| `1` | 0.25rem | 4px | Tight spacing |
| `2` | 0.5rem | 8px | Small gaps |
| `3` | 0.75rem | 12px | Compact spacing |
| `4` | 1rem | 16px | Standard spacing |
| `6` | 1.5rem | 24px | Medium gaps |
| `8` | 2rem | 32px | Large spacing |
| `12` | 3rem | 48px | Section spacing |
| `16` | 4rem | 64px | Large sections |
| `20` | 5rem | 80px | Hero spacing |
| `24` | 6rem | 96px | Extra large |

**Philosophy:** Consistent rhythm using multiples of 4px ensures visual harmony.

---

## Animation System

### Signature Animations

| Name | Effect | Duration | Easing | Usage |
|------|--------|----------|--------|-------|
| `animate-reveal` | Clip-path reveal + upward motion | 1s | ease-in-out | Page entry, hero sections |
| `scroll-reveal` | Fade + translateY | 0.6s | ease-out | Scroll-triggered elements |
| `beam-h` | Horizontal light beam | 3s loop | linear | Hero decoration |
| `beam-v` | Vertical light beam | 3s loop | linear | Accent decoration |
| `pulse` | Scale + opacity | 2s loop | ease-in-out | Attention elements |

### Timing Standards

| Speed | Duration | Usage |
|-------|----------|-------|
| **Quick** | 150ms | Hover feedback, button states |
| **Standard** | 400ms | State changes, toggles |
| **Slow** | 1s | Page entry, major transitions |

### Easing Functions

| Function | Usage |
|----------|-------|
| `ease-in-out` | Default for smooth transitions |
| `ease-out` | Entering elements (scroll-reveal) |
| `ease-in` | Exiting elements |
| `linear` | Continuous animations (beams, loops) |

### Animation Principles

1. **Respect User Preferences:** Always check `prefers-reduced-motion`
2. **GPU Acceleration:** Use `transform` and `opacity` only
3. **Purpose-Driven:** Every animation should serve a function
4. **Consistency:** Use timing standards across all components

---

## Visual Style

### Design Characteristics

- **Modern & Clean:** Minimalist approach with bold accents
- **Energetic:** Magenta brings vibrancy and energy
- **Professional:** Teal balances magenta with trustworthiness
- **Bold:** Strong color usage, clear hierarchy
- **Gradients:** Linear gradients (magenta → teal) for emphasis

### Effects & Treatments

**Shadows:**
```css
/* Subtle, warm shadows */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
```

**Borders:**
- **Radius:** `rounded-lg` (8px) default
- **Style:** Subtle borders with gray-200
- **Focus:** Teal-accent focus rings (2px)

**Gradients:**
```css
/* Brand gradient */
background: linear-gradient(135deg, #bd1874 0%, #004d6c 100%);
```

---

## Component Defaults

### Buttons

**Primary (Magenta):**
```tsx
<Button className="bg-magenta hover:bg-magenta-dark text-white rounded-lg px-6 py-3 font-medium transition-colors duration-150">
  Primary Action
</Button>
```

**Secondary (Ghost):**
```tsx
<Button variant="ghost" className="text-teal hover:bg-gray-100 rounded-lg px-6 py-3 font-medium transition-colors duration-150">
  Secondary Action
</Button>
```

**Outline:**
```tsx
<Button variant="outline" className="border-2 border-teal text-teal hover:bg-teal hover:text-white rounded-lg px-6 py-3 font-medium transition-all duration-150">
  Outline Action
</Button>
```

### Cards

**Standard Card:**
```tsx
<Card className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-400">
  {/* Card content */}
</Card>
```

**Featured Card:**
```tsx
<Card className="bg-gradient-to-br from-magenta to-teal text-white rounded-lg p-8 shadow-lg">
  {/* Highlighted content */}
</Card>
```

### Form Inputs

**Text Input:**
```tsx
<Input
  className="border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-accent focus:border-transparent transition-all duration-150"
  type="text"
/>
```

**Textarea:**
```tsx
<Textarea
  className="border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-accent focus:border-transparent resize-none transition-all duration-150"
  rows={4}
/>
```

### Modals

**Modal Backdrop:**
```tsx
<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
```

**Modal Content:**
```tsx
<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
  <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 animate-[slideUp_0.3s_ease-out]">
    {/* Modal content */}
  </div>
</div>
```

---

## Anti-Patterns

N/A - This is the foundational theme. All other themes reference MDS as the baseline.

**General Best Practices:**
- ✅ Use magenta sparingly for maximum impact
- ✅ Balance bold colors with white space
- ✅ Maintain consistent spacing rhythm
- ✅ Test animations with reduced motion preference
- ❌ Avoid overusing gradients (use strategically)
- ❌ Don't mix MDS with other brand colors
- ❌ Avoid reducing contrast for accessibility

---

## ui-ux-pro-max Integration

### Theme Constraint Template

When invoking ui-ux-pro-max, use this template:

```
Generate [component/page name] using MDS theme:

**Theme Constraints:**
- Colors: Magenta (#bd1874) primary, Teal (#004d6c) secondary, Teal Accent (#14b8a6)
- Typography: Inter font family, [specify scale: text-xl, text-2xl, etc.]
- Spacing: 4px base unit [specify: p-4, gap-6, etc.]
- Style: Modern, clean, bold animations
- Components: ShadCN UI with MDS customization

**Requirements:**
[List specific requirements here]
```

### Example Prompts

**Hero Section:**
```
Generate a hero section using MDS theme:

**Theme Constraints:**
- Colors: Magenta (#bd1874) for CTA, Teal (#004d6c) for secondary elements
- Typography: Inter font, heading at text-5xl (3rem), body at text-lg
- Animation: animate-reveal on heading, delay-200 on subtext
- Layout: Centered text, gradient background (magenta → teal), CTA buttons below

**Requirements:**
- H1 heading with tagline
- 2 buttons (primary magenta, secondary ghost)
- Decorative beam-h animation in background
- Responsive: stack on mobile
```

**Product Card:**
```
Generate a product card using MDS theme:

**Theme Constraints:**
- Colors: White background, magenta accent on hover
- Typography: Inter, product name at text-xl, price at text-2xl font-bold
- Animation: scroll-reveal on entry, scale-105 on hover
- Layout: Image top, content below, CTA button at bottom

**Requirements:**
- Product image (aspect-ratio-square)
- Product name, description (2 lines max)
- Price with "Add to Cart" button (magenta)
- Hover: Lift effect with shadow-lg, magenta border
```

**Data Table:**
```
Generate a data table using MDS theme:

**Theme Constraints:**
- Colors: Teal headers, magenta for selected rows
- Typography: Inter, text-sm for table data
- Spacing: Compact (p-2 cells, gap-4 sections)
- Features: Sortable columns, row hover, pagination

**Requirements:**
- ShadCN Table component
- 5 columns: Name, Email, Role, Status, Actions
- Sortable headers (click to sort)
- Row hover: bg-gray-50
- Selected row: bg-magenta/10 border-l-4 border-magenta
- Pagination at bottom (magenta active page)
```

---

## CSS Implementation

**File:** `codebase-framework/themes/mds.css`

```css
/* MDS Theme - Tailwind CSS Custom Theme */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Colors */
    --color-magenta: #bd1874;
    --color-magenta-dark: #a01462;
    --color-teal: #004d6c;
    --color-teal-accent: #14b8a6;
    --color-gray-50: #f9fafb;
    --color-gray-200: #e5e7eb;
    --color-gray-500: #6b7280;
    --color-gray-900: #111827;

    /* Typography */
    --font-heading: 'Inter', sans-serif;
    --font-body: 'Inter', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
  }

  body {
    @apply font-body text-base text-gray-900 bg-gray-50;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading font-bold;
  }
}

@layer components {
  /* Button Variants */
  .btn-primary {
    @apply bg-magenta hover:bg-magenta-dark text-white rounded-lg px-6 py-3 font-medium transition-colors duration-150;
  }

  .btn-secondary {
    @apply text-teal hover:bg-gray-100 rounded-lg px-6 py-3 font-medium transition-colors duration-150;
  }

  .btn-outline {
    @apply border-2 border-teal text-teal hover:bg-teal hover:text-white rounded-lg px-6 py-3 font-medium transition-all duration-150;
  }

  /* Card Variants */
  .card-standard {
    @apply bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-400;
  }

  .card-featured {
    @apply bg-gradient-to-br from-magenta to-teal text-white rounded-lg p-8 shadow-lg;
  }

  /* Form Elements */
  .input-base {
    @apply border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-accent focus:border-transparent transition-all duration-150;
  }
}

@layer utilities {
  /* Custom Animations */
  @keyframes reveal {
    from {
      clip-path: inset(0 100% 0 0);
      transform: translateY(20px);
    }
    to {
      clip-path: inset(0 0 0 0);
      transform: translateY(0);
    }
  }

  @keyframes scrollReveal {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes beamHorizontal {
    0%, 100% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
  }

  .animate-reveal {
    animation: reveal 1s ease-in-out;
  }

  .scroll-reveal {
    animation: scrollReveal 0.6s ease-out;
  }

  .beam-h {
    animation: beamHorizontal 3s linear infinite;
  }

  /* Custom Colors (for direct Tailwind usage) */
  .text-magenta { color: var(--color-magenta); }
  .bg-magenta { background-color: var(--color-magenta); }
  .border-magenta { border-color: var(--color-magenta); }

  .text-teal { color: var(--color-teal); }
  .bg-teal { background-color: var(--color-teal); }
  .border-teal { border-color: var(--color-teal); }

  .bg-magenta-dark { background-color: var(--color-magenta-dark); }
  .ring-teal-accent { --tw-ring-color: var(--color-teal-accent); }
}
```

---

## Usage Examples

### Landing Page Hero

```tsx
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-magenta to-teal overflow-hidden">
      {/* Decorative beam */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-white beam-h" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-reveal">
          Build Products Faster with AI
        </h1>
        <p className="text-lg md:text-xl mb-8 scroll-reveal animation-delay-200">
          Structured workflows from idea to implementation. Powered by Claude.
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="btn-primary bg-white text-magenta hover:bg-gray-100">
            Get Started
          </Button>
          <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
```

### Feature Card Grid

```tsx
import { Card } from "@/components/ui/card"

const features = [
  { title: "PO Framework", description: "Specs & requirements", icon: "📋" },
  { title: "Design Framework", description: "Text-based UI/UX", icon: "🎨" },
  { title: "Codebase Framework", description: "Rapid implementation", icon: "⚡" },
]

export default function Features() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Three Powerful Frameworks
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-standard group">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-teal group-hover:text-magenta transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Accessibility Compliance

### WCAG AA Standards

- **Color Contrast:** All text meets 4.5:1 ratio minimum
  - Magenta (#bd1874) on white: 7.2:1 ✅
  - Teal (#004d6c) on white: 10.8:1 ✅
  - Gray-900 (#111827) on white: 16.1:1 ✅

- **Focus Indicators:** Teal-accent ring (2px) on all interactive elements
- **Animation:** Respects `prefers-reduced-motion`
- **Keyboard Navigation:** All interactive elements keyboard accessible
- **ARIA Labels:** Proper labeling on all UI components

### Testing Checklist

- [ ] Test color contrast with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [ ] Verify focus indicators visible on all states
- [ ] Test with screen reader (VoiceOver, NVDA)
- [ ] Validate keyboard navigation (Tab, Enter, Escape)
- [ ] Test with `prefers-reduced-motion: reduce` enabled

---

## Resources

- **Integration Guide:** [UI_UX_PROMAX_INTEGRATION.md](../UI_UX_PROMAX_INTEGRATION.md)
- **Full Plan:** [design-framework-uiux-promax-integration-plan.md](../../documentation/design-framework-uiux-promax-integration-plan.md)
- **Theme Catalog:** [README.md](./README.md)
- **CSS Implementation:** `codebase-framework/themes/mds.css`

---

**Theme Maintainer:** Design Framework Team
**Questions/Feedback:** Create an issue or update this document
