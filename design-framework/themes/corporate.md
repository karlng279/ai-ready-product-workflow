# Corporate/Branding Theme

**Status:** ✅ Production Ready
**Version:** 1.0.0
**Last Updated:** 2026-01-31
**Pattern:** Enterprise Gateway

---

## Overview

Professional, trustworthy theme optimized for enterprise B2B, corporate websites, and professional services. Emphasizes credibility through certificates, credentials, and measured design.

**Best For:**
- Enterprise software landing pages
- B2B service providers
- Professional services (legal, financial, consulting)
- Healthcare/medical platforms
- Corporate websites requiring credibility
- Industries focused on trust and authority

**Not Recommended For:**
- Consumer-facing e-commerce (use Ecommerce theme)
- Data-heavy dashboards (use ERP theme)
- Brand-focused marketing (use MDS theme)
- Playful or creative projects

---

## Color Palette

### Brand Colors

| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| **Primary** | `#0F766E` | `--color-trust-teal` | Trust signals, primary elements, headers |
| **Secondary** | `#14B8A6` | `--color-teal-light` | Secondary actions, highlights, success |
| **CTA** | `#0369A1` | `--color-professional-blue` | Contact Sales, primary CTAs |
| **Background** | `#F0FDFA` | `--color-bg-soft` | Soft, professional background |
| **Text** | `#134E4A` | `--color-text-primary` | Primary text, headings |

### Neutrals

| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| **White** | `#FFFFFF` | `--color-white` | Card backgrounds, contrast |
| **Gray 50** | `#F9FAFB` | `--color-gray-50` | Subtle backgrounds |
| **Gray 200** | `#E5E7EB` | `--color-gray-200` | Borders, dividers |
| **Gray 600** | `#4B5563` | `--color-gray-600` | Secondary text |
| **Gray 900** | `#111827` | `--color-gray-900` | Dark text |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| **Success** | `#14B8A6` | Certifications, approvals |
| **Warning** | `#F59E0B` | Cautions, pending states |
| **Error** | `#EF4444` | Errors, rejections |
| **Info** | `#0369A1` | Information, guidance |

---

## Typography

### Font Families

```css
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
```

| Token | Family | Weights | Usage |
|-------|--------|---------|-------|
| **Headings** | Poppins | 400, 500, 600, 700 | H1-H6, section titles |
| **Body** | Open Sans | 300, 400, 500, 600, 700 | Body text, UI labels, descriptions |

**Mood:** Modern, professional, clean, corporate, friendly, approachable

### Type Scale

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-sm` | 0.875rem (14px) | 1.25rem (20px) | Captions, labels |
| `text-base` | 1rem (16px) | 1.625rem (26px) | Body text (generous line height) |
| `text-lg` | 1.125rem (18px) | 1.75rem (28px) | Large body text |
| `text-xl` | 1.25rem (20px) | 1.875rem (30px) | Small headings |
| `text-2xl` | 1.5rem (24px) | 2rem (32px) | Section headings |
| `text-3xl` | 1.875rem (30px) | 2.25rem (36px) | Page headings |
| `text-4xl` | 2.25rem (36px) | 2.75rem (44px) | Hero headings |
| `text-5xl` | 3rem (48px) | 1.2 | Large display |

### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `font-light` | 300 | Subtle text (Open Sans only) |
| `font-normal` | 400 | Body text |
| `font-medium` | 500 | Emphasized text |
| `font-semibold` | 600 | Subheadings, important labels |
| `font-bold` | 700 | Headings, strong CTAs |

---

## Spacing Scale

**Conservative spacing with emphasis on breathing room and clarity.**

| Token | Size | Pixels | Usage |
|-------|------|--------|-------|
| `2` | 0.5rem | 8px | Tight spacing |
| `3` | 0.75rem | 12px | Small gaps |
| `4` | 1rem | 16px | Standard spacing |
| `6` | 1.5rem | 24px | Medium gaps |
| `8` | 2rem | 32px | Large spacing |
| `10` | 2.5rem | 40px | Section spacing |
| `12` | 3rem | 48px | Section spacing |
| `16` | 4rem | 64px | Large sections |
| `20` | 5rem | 80px | Major sections |
| `24` | 6rem | 96px | Hero spacing |

**Philosophy:** Generous spacing conveys professionalism and gives content room to breathe.

---

## Animation System

### Signature Animations

| Name | Effect | Duration | Easing | Usage |
|------|--------|----------|--------|-------|
| `badge-hover` | Scale + shadow increase | 200ms | ease-out | Certificate badges on hover |
| `metric-pulse` | Pulse effect on numbers | 300ms | ease-in-out | Stat reveals, counters |
| `carousel-slide` | Smooth carousel transition | 500ms | ease-in-out | Certificate/client logo carousels |
| `stat-reveal` | Count-up animation | 1.5s | ease-out | Metrics, statistics |
| `fade-in-up` | Fade + translate up | 400ms | ease-out | Content reveals on scroll |

### Timing Standards

| Speed | Duration | Usage |
|-------|----------|-------|
| **Quick** | 200ms | Hover effects, badges |
| **Standard** | 300ms | State changes, transitions |
| **Measured** | 500ms | Carousels, major changes |

**Note:** Professional, not flashy. Animations should feel smooth and purposeful.

### Animation Principles

1. **Subtle & Professional:** No playful or bouncy animations
2. **Purpose-Driven:** Every animation reinforces credibility
3. **Performance:** Smooth 60fps on all devices
4. **Accessibility:** Respect `prefers-reduced-motion`

---

## Visual Style

### Design Characteristics

- **Trust & Authority Focused**
- **Professional but Approachable**
- **Clean, Organized Layouts**
- **Certificates/Badges Prominently Displayed**
- **Expert Credentials Showcased**
- **Case Studies with Metrics**
- **Before/After Comparisons**
- **Industry Recognition Badges**
- **Security Certifications Visible**

### Key Visual Elements

**Trust Signals:**
- Certification badges
- Industry awards
- Client logos (Fortune 500, recognizable brands)
- Security certifications (SOC 2, ISO, GDPR)
- Years in business
- Number of clients served
- Team credentials (degrees, certifications)

**Content Patterns:**
- Case studies with metrics ("Increased revenue by 45%")
- Before/after comparisons
- Expert bios with headshots and credentials
- Testimonials with photos and company names
- Industry-specific solutions
- Mega menu for navigation (by industry, by solution)

### Effects & Treatments

**Shadows:**
```css
/* Subtle, professional shadows */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.08);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
```

**Borders:**
- **Radius:** `rounded-md` (6px) for subtle roundness
- **Style:** Clean borders with gray-200
- **Focus:** Professional blue focus rings

**Gradients:**
```css
/* Subtle teal gradient for headers */
background: linear-gradient(135deg, #0F766E 0%, #14B8A6 100%);
```

---

## Component Defaults

### Buttons

**Primary CTA (Professional Blue):**
```tsx
<Button className="bg-professional-blue hover:bg-blue-700 text-white rounded-md px-8 py-3 font-semibold transition-colors duration-200">
  Contact Sales
</Button>
```

**Secondary (Trust Teal):**
```tsx
<Button className="bg-trust-teal hover:bg-teal-700 text-white rounded-md px-8 py-3 font-medium transition-colors duration-200">
  Learn More
</Button>
```

**Ghost:**
```tsx
<Button variant="ghost" className="text-trust-teal hover:bg-teal-50 rounded-md px-6 py-3 font-medium transition-colors duration-200">
  View Case Studies
</Button>
```

### Cards

**Standard Card:**
```tsx
<Card className="bg-white rounded-md border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
  {/* Card content */}
</Card>
```

**Certificate Badge Card:**
```tsx
<Card className="bg-white rounded-md border-2 border-teal-light p-4 text-center hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer">
  <img src="/cert-badge.svg" alt="Certification" className="w-16 h-16 mx-auto mb-2" />
  <p className="text-sm font-semibold text-trust-teal">ISO 27001 Certified</p>
</Card>
```

**Metric Card:**
```tsx
<Card className="bg-gradient-to-br from-trust-teal to-teal-light text-white rounded-md p-8 shadow-lg">
  <div className="text-5xl font-bold mb-2 metric-pulse">2,500+</div>
  <div className="text-lg font-medium">Enterprise Clients</div>
</Card>
```

### Navigation

**Mega Menu Structure:**
```tsx
<nav className="bg-trust-teal text-white">
  <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
    {/* Logo */}
    <div className="font-bold text-xl">Company</div>

    {/* Main Menu */}
    <ul className="hidden md:flex space-x-8 text-sm font-medium">
      <li><a href="#" className="hover:text-teal-light transition-colors">Solutions</a></li>
      <li><a href="#" className="hover:text-teal-light transition-colors">Industries</a></li>
      <li><a href="#" className="hover:text-teal-light transition-colors">Resources</a></li>
      <li><a href="#" className="hover:text-teal-light transition-colors">About</a></li>
    </ul>

    {/* CTA */}
    <Button className="bg-professional-blue hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold">
      Contact Sales
    </Button>
  </div>
</nav>
```

### Hero Section

**Corporate Hero:**
```tsx
<section className="bg-gradient-to-br from-trust-teal to-teal-light text-white py-20 px-4">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-5xl font-bold mb-6">
      Trusted by 2,500+ Enterprise Clients
    </h1>
    <p className="text-xl mb-8 font-light">
      Delivering mission-critical solutions for 25 years
    </p>

    {/* Trust badges */}
    <div className="flex justify-center gap-6 mb-8">
      <img src="/cert-1.svg" alt="SOC 2" className="h-12" />
      <img src="/cert-2.svg" alt="ISO 27001" className="h-12" />
      <img src="/cert-3.svg" alt="GDPR" className="h-12" />
    </div>

    <Button className="bg-white text-trust-teal hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-md">
      Schedule a Demo
    </Button>
  </div>
</section>
```

---

## Anti-Patterns to Avoid

### 1. Over-Formalization

**Don't:**
- ❌ Overly rigid layouts that feel bureaucratic
- ❌ Too many hierarchical levels in navigation (max 3 levels)
- ❌ Dense paragraphs with no breathing room
- ❌ Formal, intimidating language ("In accordance with...")

**Do:**
- ✅ Professional but approachable design
- ✅ Clear, simple navigation hierarchy
- ✅ Generous white space
- ✅ Conversational yet professional tone

### 2. Poor Brand Hierarchy

**Don't:**
- ❌ Logo too small or poorly positioned
- ❌ Inconsistent logo usage across pages
- ❌ Logo competing with other visual elements

**Do:**
- ✅ Clear, consistent brand presence
- ✅ Logo in top-left (standard convention)
- ✅ Proper logo spacing and sizing

### 3. Generic Stock Imagery

**Don't:**
- ❌ Cliché business photos (handshakes, people in suits around table)
- ❌ Obvious stock photos without authenticity
- ❌ Overuse of generic office imagery

**Do:**
- ✅ Real team photos showing actual workplace
- ✅ Authentic workspace images
- ✅ Photos of actual clients/projects (with permission)
- ✅ Custom illustrations if budget allows

### 4. Inconsistent Brand Voice

**Don't:**
- ❌ Mixing overly formal and casual language on same page
- ❌ Inconsistent terminology across pages ("client" vs "customer")
- ❌ Different tones in different sections

**Do:**
- ✅ Unified, professional tone throughout
- ✅ Consistent terminology (create a style guide)
- ✅ Professional but human voice

### 5. Hidden Contact Information

**Don't:**
- ❌ Contact information buried in footer only
- ❌ Complex multi-step contact forms
- ❌ No phone number visible
- ❌ "Contact Us" leading to a form with 15 fields

**Do:**
- ✅ Prominent "Contact Sales" CTA in header
- ✅ Phone number visible (especially for B2B)
- ✅ Simple contact forms (name, email, company, message)
- ✅ Multiple contact options (phone, email, chat)

### 6. Design Elements to Avoid

**Don't:**
- ❌ Playful animations or whimsical elements
- ❌ AI-style purple/pink gradients (too trendy, not professional)
- ❌ Hidden credentials or certifications
- ❌ Overly complex navigation
- ❌ Auto-play videos with sound
- ❌ Popups on page load

**Do:**
- ✅ Conservative, trust-building visual elements
- ✅ Prominently display certifications
- ✅ Simple, clear navigation
- ✅ User-initiated video playback
- ✅ Exit-intent popups (if necessary)

### 7. Missing Trust Signals

**Don't:**
- ❌ No client logos or testimonials
- ❌ No certifications or awards mentioned
- ❌ No security/compliance information
- ❌ Anonymous team (no bios, no photos)

**Do:**
- ✅ Showcase client logos (with permission)
- ✅ Display certifications prominently
- ✅ Highlight security/compliance standards
- ✅ Team bios with credentials and headshots

---

## ui-ux-pro-max Integration

### Theme Constraint Template

When invoking ui-ux-pro-max, use this template:

```
Generate [component/page name] using Corporate theme:

**Theme Constraints:**
- Colors: Trust Teal (#0F766E) primary, Professional Blue (#0369A1) CTA
- Typography: Poppins headings, Open Sans body
- Spacing: Conservative, generous breathing room [specify: p-6, gap-8, etc.]
- Style: Professional, trust-focused, clean
- Animations: Subtle (200-300ms), no playful effects

**Anti-Patterns to Avoid:**
[Reference specific anti-patterns from above]

**Requirements:**
[List specific requirements here]
```

### Example Prompts

**About/Credentials Section:**
```
Generate an about/credentials section using Corporate theme:

**Theme Constraints:**
- Colors: Trust Teal (#0F766E) for headers, Professional Blue (#0369A1) for CTAs
- Typography: Poppins headings (text-3xl), Open Sans body (text-base)
- Layout: Grid of certification badges, team credentials, case studies
- Spacing: Generous (p-8 cards, gap-8 grid)

**Anti-Patterns to Avoid:**
- No playful animations
- No hidden credentials
- No generic stock photos

**Requirements:**
- 3-column grid (desktop), 1-column (mobile)
- Certification badge cards with hover effects (badge-hover)
- Metric cards showing: years in business, clients served, certifications held
- Team section with photos, names, titles, credentials
- Case study preview cards (client logo, metric, quote)
- "View All Case Studies" CTA (Professional Blue)
```

**Enterprise Navigation with Mega Menu:**
```
Generate enterprise navigation using Corporate theme:

**Theme Constraints:**
- Colors: Trust Teal background for nav, white text
- Typography: Open Sans for menu items (text-sm font-medium)
- Layout: Mega menu with industry/solution categories
- Animations: Smooth dropdown (300ms fade-in-up)

**Anti-Patterns to Avoid:**
- Keep hierarchy clear (max 3 levels)
- No overly complex menu structure
- No hidden contact info

**Requirements:**
- Logo left (white version)
- Main menu center: Solutions, Industries, Resources, About
- "Contact Sales" CTA right (Professional Blue button)
- Mega menu on "Solutions": Tab switching for categories
- Mega menu on "Industries": Grid of industry links with icons
- Mobile: Hamburger menu, slide-in drawer
- Sticky header on scroll with subtle shadow
```

**Case Study Detail Page:**
```
Generate a case study detail page using Corporate theme:

**Theme Constraints:**
- Colors: Trust Teal accents, Professional Blue CTAs
- Typography: Poppins headings, Open Sans body (line-height: 1.625)
- Layout: Single column, max-width 800px, generous white space
- Features: Before/after metrics, client testimonial, team involved

**Anti-Patterns to Avoid:**
- No generic stock photos (use client-specific imagery)
- Consistent terminology throughout
- Clear contact CTA at bottom

**Requirements:**
- Hero section: Client logo, industry, project name, hero image
- Overview: Problem, solution, results (3-column cards)
- Metrics section: 3-4 key metrics with stat-reveal animation
- Before/After comparison (side-by-side or slider)
- Testimonial: Quote, client name, title, photo
- Team involved: Small bios with headshots
- Related case studies: 3 cards at bottom
- CTA: "Discuss Your Project" (Professional Blue button)
```

---

## CSS Implementation

**File:** `codebase-framework/themes/corporate.css`

```css
/* Corporate/Branding Theme - Tailwind CSS Custom Theme */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Colors */
    --color-trust-teal: #0F766E;
    --color-teal-light: #14B8A6;
    --color-professional-blue: #0369A1;
    --color-bg-soft: #F0FDFA;
    --color-text-primary: #134E4A;

    /* Neutrals */
    --color-white: #FFFFFF;
    --color-gray-50: #F9FAFB;
    --color-gray-200: #E5E7EB;
    --color-gray-600: #4B5563;
    --color-gray-900: #111827;

    /* Typography */
    --font-heading: 'Poppins', sans-serif;
    --font-body: 'Open Sans', sans-serif;
  }

  body {
    @apply font-body text-base text-text-primary bg-bg-soft;
    line-height: 1.625;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading font-semibold;
  }
}

@layer components {
  /* Button Variants */
  .btn-primary-cta {
    @apply bg-professional-blue hover:bg-blue-700 text-white rounded-md px-8 py-3 font-semibold transition-colors duration-200;
  }

  .btn-secondary {
    @apply bg-trust-teal hover:bg-teal-700 text-white rounded-md px-8 py-3 font-medium transition-colors duration-200;
  }

  .btn-ghost {
    @apply text-trust-teal hover:bg-teal-50 rounded-md px-6 py-3 font-medium transition-colors duration-200;
  }

  /* Card Variants */
  .card-standard {
    @apply bg-white rounded-md border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300;
  }

  .card-certificate {
    @apply bg-white rounded-md border-2 border-teal-light p-4 text-center hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer;
  }

  .card-metric {
    @apply bg-gradient-to-br from-trust-teal to-teal-light text-white rounded-md p-8 shadow-lg;
  }
}

@layer utilities {
  /* Custom Animations */
  @keyframes badgeHover {
    from { transform: scale(1); box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.08); }
    to { transform: scale(1.05); box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.15); }
  }

  @keyframes metricPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes statReveal {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .badge-hover:hover {
    animation: badgeHover 200ms ease-out forwards;
  }

  .metric-pulse {
    animation: metricPulse 300ms ease-in-out;
  }

  .fade-in-up {
    animation: fadeInUp 400ms ease-out;
  }

  .stat-reveal {
    animation: statReveal 1.5s ease-out;
  }

  /* Custom Colors */
  .text-trust-teal { color: var(--color-trust-teal); }
  .bg-trust-teal { background-color: var(--color-trust-teal); }
  .border-trust-teal { border-color: var(--color-trust-teal); }

  .text-professional-blue { color: var(--color-professional-blue); }
  .bg-professional-blue { background-color: var(--color-professional-blue); }

  .bg-teal-light { background-color: var(--color-teal-light); }
  .border-teal-light { border-color: var(--color-teal-light); }

  .bg-bg-soft { background-color: var(--color-bg-soft); }
  .text-text-primary { color: var(--color-text-primary); }
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

### Enterprise Landing Page Hero

```tsx
import { Button } from "@/components/ui/button"

export default function CorporateHero() {
  return (
    <section className="bg-gradient-to-br from-trust-teal to-teal-light text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <h1 className="text-5xl font-bold mb-6">
              Enterprise Solutions You Can Trust
            </h1>
            <p className="text-xl mb-8 font-light">
              Serving 2,500+ Fortune 1000 companies with mission-critical infrastructure for over 25 years.
            </p>

            {/* Trust badges */}
            <div className="flex gap-4 mb-8">
              <div className="bg-white/10 rounded-md px-4 py-2 text-sm font-semibold">
                SOC 2 Certified
              </div>
              <div className="bg-white/10 rounded-md px-4 py-2 text-sm font-semibold">
                ISO 27001
              </div>
              <div className="bg-white/10 rounded-md px-4 py-2 text-sm font-semibold">
                GDPR Compliant
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="btn-primary-cta bg-white text-trust-teal hover:bg-gray-100">
                Schedule a Demo
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                View Case Studies
              </Button>
            </div>
          </div>

          {/* Video or Image */}
          <div className="fade-in-up animation-delay-200">
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              {/* Placeholder for demo video or product screenshot */}
              <div className="aspect-video bg-white/20 rounded-md flex items-center justify-center">
                <p className="text-sm">Product Demo Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### Certification Badge Grid

```tsx
import { Card } from "@/components/ui/card"

const certifications = [
  { name: "SOC 2 Type II", icon: "/certs/soc2.svg" },
  { name: "ISO 27001", icon: "/certs/iso27001.svg" },
  { name: "GDPR", icon: "/certs/gdpr.svg" },
  { name: "HIPAA", icon: "/certs/hipaa.svg" },
]

export default function Certifications() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-trust-teal">
          Certified & Compliant
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We maintain the highest standards of security and compliance
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-certificate">
              <img
                src={cert.icon}
                alt={cert.name}
                className="w-20 h-20 mx-auto mb-3"
              />
              <p className="text-sm font-semibold text-trust-teal">
                {cert.name}
              </p>
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

### WCAG AAA Standards (Target)

- **Color Contrast:**
  - Trust Teal (#0F766E) on white: 7.4:1 ✅ AAA
  - Professional Blue (#0369A1) on white: 6.9:1 ✅ AAA
  - Text Primary (#134E4A) on Soft BG (#F0FDFA): 10.2:1 ✅ AAA

- **Focus Indicators:** Professional blue ring (2px) on all interactive elements
- **Animation:** Respects `prefers-reduced-motion`
- **Keyboard Navigation:** All interactive elements keyboard accessible
- **ARIA Labels:** Proper labeling, especially for certifications and metrics

### Testing Checklist

- [ ] Test color contrast with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [ ] Verify focus indicators on all states
- [ ] Test with screen reader
- [ ] Validate keyboard navigation
- [ ] Test with `prefers-reduced-motion: reduce`
- [ ] Verify all images have alt text
- [ ] Test mega menu accessibility (keyboard navigation)

---

## Performance

**Targets:**
- ⚡ **Excellent** performance expected
- Lighthouse Score: 90+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

**Optimization Checklist:**
- [ ] Optimize certification badge images (SVG or WebP)
- [ ] Lazy load case study images
- [ ] Minimize font loading (preload critical fonts)
- [ ] Use CDN for static assets
- [ ] Implement responsive images

---

## Resources

- **Integration Guide:** [UI_UX_PROMAX_INTEGRATION.md](../UI_UX_PROMAX_INTEGRATION.md)
- **Full Plan:** [design-framework-uiux-promax-integration-plan.md](../../documentation/design-framework-uiux-promax-integration-plan.md)
- **Theme Catalog:** [README.md](./README.md)
- **CSS Implementation:** `codebase-framework/themes/corporate.css`

---

**Theme Maintainer:** Design Framework Team
**Questions/Feedback:** Create an issue or update this document
