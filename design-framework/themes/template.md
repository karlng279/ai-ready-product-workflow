# [Theme Name] Theme

**Status:** [Draft/Ready/Deprecated]
**Version:** 1.0.0
**Created:** [Date]
**Last Updated:** [Date]

---

## Overview

[Brief description of the theme - 2-3 sentences explaining its purpose, visual style, and ideal use cases]

**Pattern:** [Landing page pattern name, e.g., "Hero-Centric", "Enterprise Gateway", "Funnel"]

**Best For:**
- [Use case 1]
- [Use case 2]
- [Use case 3]

**Not Suitable For:**
- [Anti-use case 1]
- [Anti-use case 2]

---

## Color Palette

### Primary Colors

| Role | Hex | RGB | Usage |
|------|-----|-----|-------|
| Primary | #XXXXXX | rgb(X, X, X) | [Primary buttons, main CTAs, emphasis] |
| Primary Dark | #XXXXXX | rgb(X, X, X) | [Hover/active states on primary] |
| Secondary | #XXXXXX | rgb(X, X, X) | [Secondary elements, navigation] |
| Accent | #XXXXXX | rgb(X, X, X) | [Highlights, success states, progress] |
| CTA | #XXXXXX | rgb(X, X, X) | [Main call-to-action elements] |

### Neutrals

| Role | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background | #XXXXXX | rgb(X, X, X) | [Page backgrounds] |
| Surface | #XXXXXX | rgb(X, X, X) | [Card/container backgrounds] |
| Border | #XXXXXX | rgb(X, X, X) | [Borders, dividers] |
| Text Primary | #XXXXXX | rgb(X, X, X) | [Primary text] |
| Text Secondary | #XXXXXX | rgb(X, X, X) | [Secondary text, captions] |
| Text Muted | #XXXXXX | rgb(X, X, X) | [Placeholder text, disabled] |

### Semantic Colors

| Role | Hex | Usage |
|------|-----|-------|
| Success | #XXXXXX | Success messages, confirmations |
| Warning | #XXXXXX | Warnings, cautions |
| Error | #XXXXXX | Errors, destructive actions |
| Info | #XXXXXX | Informational messages |

**Color Notes:**
- [Any specific color theory or reasoning]
- [Contrast ratios if notable]
- [Dark mode variations if applicable]

---

## Typography

### Font Families

- **Headings:** [Font Name] ([weights: 400, 500, 600, 700])
- **Body:** [Font Name] ([weights: 300, 400, 500, 600])
- **Mono:** [Font Name] ([weights: 400, 500])

**Mood:** [adjectives: modern, professional, playful, elegant, etc.]

### Google Fonts Import

```css
@import url('https://fonts.googleapis.com/css2?family=[Font+Name]:wght@[weights]&family=[Font+Name]:wght@[weights]&display=swap');
```

**Google Fonts Link:** [https://fonts.google.com/share?selection.family=...]

### Type Scale

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-xs` | 0.75rem (12px) | 1rem | Fine print, captions |
| `text-sm` | 0.875rem (14px) | 1.25rem | Small text, labels |
| `text-base` | 1rem (16px) | 1.5rem | Body text |
| `text-lg` | 1.125rem (18px) | 1.75rem | Large body text |
| `text-xl` | 1.25rem (20px) | 1.75rem | Small headings |
| `text-2xl` | 1.5rem (24px) | 2rem | H4 |
| `text-3xl` | 1.875rem (30px) | 2.25rem | H3 |
| `text-4xl` | 2.25rem (36px) | 2.5rem | H2 |
| `text-5xl` | 3rem (48px) | 1 | H1 |
| `text-6xl` | 3.75rem (60px) | 1 | Display |

**Typography Notes:**
- [Font pairing reasoning]
- [Readability considerations]
- [Accessibility notes]

---

## Spacing Scale

**Base Unit:** [4px or 8px] (0.25rem or 0.5rem)

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `1` | [0.25rem] | 4px | Tight spacing |
| `2` | [0.5rem] | 8px | Small gaps |
| `3` | [0.75rem] | 12px | Compact |
| `4` | [1rem] | 16px | Base spacing |
| `6` | [1.5rem] | 24px | Medium spacing |
| `8` | [2rem] | 32px | Large spacing |
| `12` | [3rem] | 48px | Section spacing |
| `16` | [4rem] | 64px | Large sections |
| `20` | [5rem] | 80px | Hero spacing |
| `24` | [6rem] | 96px | Extra large |

**Spacing Philosophy:**
- [Compact/Spacious/Balanced]
- [Breathing room approach]
- [Grid/flexbox alignment]

---

## Animation System

### Signature Animations

| Name | Effect | Duration | Easing | Usage |
|------|--------|----------|--------|-------|
| `[animation-name]` | [description] | [time] | [ease-in-out] | [where used] |
| `[animation-name-2]` | [description] | [time] | [ease-in-out] | [where used] |
| `[animation-name-3]` | [description] | [time] | [ease-in-out] | [where used] |

### Timing Standards

- **Quick:** [150ms] - Hover feedback, micro-interactions
- **Standard:** [300ms] - State changes, transitions
- **Slow:** [600ms] - Page entry, major state changes
- **Easing:** [ease-in-out / cubic-bezier(...)]

### Animation Principles

- [Animation philosophy: subtle, bold, minimal, energetic]
- [Performance: GPU-accelerated only]
- [Accessibility: Respect prefers-reduced-motion]
- [Properties: transform/opacity preferred]

**Key Effects:**
- [Effect 1 description]
- [Effect 2 description]
- [Effect 3 description]

---

## Visual Style

### Design Characteristics

**Style Keywords:** [glassmorphism, minimalism, bold, etc.]

**Visual Elements:**
- [Element 1]
- [Element 2]
- [Element 3]

**Design Principles:**
- [Principle 1]
- [Principle 2]
- [Principle 3]

### Component Defaults

#### Buttons
- **Primary:** [description of style]
- **Secondary:** [description of style]
- **Ghost:** [description of style]
- **Destructive:** [description of style]

#### Cards
- **Background:** [color]
- **Border:** [style]
- **Shadow:** [elevation]
- **Radius:** [border-radius]
- **Hover:** [interaction]

#### Forms
- **Inputs:** [style description]
- **Labels:** [placement and style]
- **Focus:** [focus ring style]
- **Error:** [error state style]

#### Tables
- **Header:** [style]
- **Rows:** [striping, hover]
- **Borders:** [style]
- **Density:** [compact/comfortable/spacious]

#### Modals/Dialogs
- **Backdrop:** [style]
- **Animation:** [entrance/exit]
- **Position:** [center/slide-up/etc.]

#### Navigation
- **Type:** [sidebar/topbar/mega-menu]
- **Style:** [sticky/floating/fixed]
- **Active:** [active state indication]

---

## Anti-Patterns to Avoid

### Critical Anti-Patterns

1. **[Anti-pattern Category 1]**
   - ❌ **Don't:** [specific mistake]
   - ✅ **Do:** [correct approach]
   - **Why:** [explanation]

2. **[Anti-pattern Category 2]**
   - ❌ **Don't:** [specific mistake]
   - ✅ **Do:** [correct approach]
   - **Why:** [explanation]

3. **[Anti-pattern Category 3]**
   - ❌ **Don't:** [specific mistake]
   - ✅ **Do:** [correct approach]
   - **Why:** [explanation]

### Design Elements to Avoid

- ❌ [Element to avoid 1]
- ❌ [Element to avoid 2]
- ❌ [Element to avoid 3]
- ✅ [What to do instead]

### UX Pitfalls

- ❌ [UX mistake 1]
- ❌ [UX mistake 2]
- ❌ [UX mistake 3]
- ✅ [Best practice]

---

## ui-ux-pro-max Integration

### Theme Constraint Prompt Template

```
Use [Theme Name] theme:

**Colors:**
- Primary: #XXXXXX ([color name])
- Secondary: #XXXXXX ([color name])
- CTA: #XXXXXX ([color name])

**Typography:**
- Headings: [Font Name]
- Body: [Font Name]
- Scale: [describe sizing approach]

**Spacing:**
- Base unit: [4px/8px]
- [Tight/Balanced/Spacious] spacing approach

**Style:**
- [Key style characteristics]
- [Visual approach]

**Animations:**
- Entry: [animation-name] ([duration])
- Interactions: [animation-name] ([duration])

**Anti-patterns to avoid:**
- [Anti-pattern 1]
- [Anti-pattern 2]

**Components:** ShadCN UI with [theme name] customization
```

### Example Prompts

**Component Generation:**
```
Generate a [component type] using [Theme Name] theme:
- Follow theme color palette
- Use theme typography scale
- Apply theme spacing
- Avoid: [theme anti-patterns]
[Specific requirements...]
```

**Layout Generation:**
```
Generate a [page type] layout using [Theme Name] theme:
- Pattern: [landing page pattern]
- Colors: [primary] primary, [secondary] secondary
- Sections: [list sections]
- Anti-patterns to avoid: [list]
[Specific requirements...]
```

---

## CSS Implementation

**File Location:** `codebase-framework/themes/[theme-name].css`

**How to Apply:**

**Option 1: Replace globals.css**
```bash
cp codebase-framework/themes/[theme-name].css src/app/globals.css
```

**Option 2: Import**
```css
@import 'codebase-framework/themes/[theme-name].css';
```

**Tailwind v4 Integration:**
```css
@import "tailwindcss";

@theme {
    --color-primary: #XXXXXX;
    --color-secondary: #XXXXXX;
    /* ... theme tokens */
}

:root {
    /* ShadCN variable mapping */
    --primary: [h] [s%] [l%];
    --secondary: [h] [s%] [l%];
    /* ... */
}

/* Custom animations */
@keyframes [animation-name] {
    /* ... keyframes */
}
```

---

## Use Cases

### Ideal For:
- [Use case 1 with detailed description]
- [Use case 2 with detailed description]
- [Use case 3 with detailed description]

### Not Recommended For:
- [Non-ideal use case 1]
- [Non-ideal use case 2]

### Example Projects:
- [Example project type 1]
- [Example project type 2]

---

## Performance & Accessibility

**Performance:** ⚡ [Excellent/Good/Fair]
- [Performance consideration 1]
- [Performance consideration 2]

**Accessibility:** ✓ [WCAG AAA/AA/A]
- [Accessibility feature 1]
- [Accessibility feature 2]

**Browser Support:**
- Modern browsers (Chrome, Firefox, Safari, Edge)
- [Any specific requirements]

---

## Version History

### Version 1.0.0 ([Date])
- Initial theme specification
- [Notable feature 1]
- [Notable feature 2]

---

## References

- **Pattern Source:** [ui-ux-pro-max search results]
- **Color Palette:** [Reasoning or source]
- **Typography:** [Google Fonts link]
- **Similar Themes:** [Other themes to compare]

---

**Maintained By:** Design Framework Team
**Review Frequency:** Quarterly
**Next Review:** [Date]
