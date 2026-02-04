# Design Framework + ui-ux-pro-max Integration Plan

**Version:** 2.0.0
**Date:** 2026-01-31
**Status:** Ready for Implementation

---

## Executive Summary

This plan restructures the Design Framework to leverage ui-ux-pro-max's full capabilities while maintaining centralized design governance for multiple projects under a single product umbrella.

**Key Changes:**
- Shift from rigid design rules → flexible theme catalog
- Enable ui-ux-pro-max to handle layout execution, animations, and visual styling
- Maintain structural planning through wireframes, component specs, and interactions
- Support multiple projects with different themes while centralizing standards

**Expected Outcomes:**
- 3x faster implementation time (ui-ux-pro-max handles visual decisions)
- Consistent quality across projects (theme catalog ensures coherence)
- Better design intelligence (leverage ui-ux-pro-max's 50 styles, 21 palettes)
- Clear handoffs between planning and implementation

---

## Current State & Challenges

### What Design Framework Provides Today

```
design-framework/
├── design-rules/               # Rigid, single-design rules
│   ├── color-system.md        # MDS colors only
│   ├── spacing.md             # One spacing scale
│   ├── typography.md          # One type system
│   ├── accessibility.md       # ✓ Keep
│   ├── responsive.md          # ✓ Keep
│   └── animation-system.md    # MDS animations only
├── patterns/                   # Static pattern library
│   ├── navigation.md
│   ├── forms.md
│   ├── feedback.md
│   └── data-display.md
├── stage1-wireframes/          # ✓ Good - structural planning
├── stage2-component-specs/     # ✓ Good - component mapping
└── stage3-interactions/        # ✓ Good - state diagrams
```

### Challenges

1. **Single Design Constraint:** Design rules enforce MDS theme only, limiting flexibility for multiple projects
2. **Static Patterns:** Patterns documented but not dynamically generated/optimized
3. **No Theme Switching:** Can't easily switch between design approaches per project
4. **Manual Visual Decisions:** Developer must interpret spacing/typography/colors manually
5. **Underutilized AI:** ui-ux-pro-max's 50 styles, 21 palettes, animation intelligence not leveraged

---

## Proposed Changes

### 1. Theme Catalog System

**Replace:** Rigid `design-rules/` → Flexible `themes/` catalog

**Structure:**
```
design-framework/
├── themes/                     # NEW - Theme catalog
│   ├── README.md              # How to choose/apply themes
│   ├── mds.md                 # MDS theme (DEFAULT)
│   ├── corporate.md           # Corporate/Branding theme
│   ├── ecommerce.md           # Ecommerce theme
│   ├── erp.md                 # ERP/Dashboard theme
│   └── template.md            # Template for new themes
```

**Four Production-Ready Themes:**

1. **MDS (Modern Design System)** - DEFAULT
   - Colors: Magenta (#bd1874) + Teal (#004d6c)
   - Use Case: Brand-focused, emphasis, hero sections

2. **Corporate/Branding**
   - Colors: Trust Teal (#0F766E) + Professional Blue (#0369A1)
   - Use Case: Enterprise, B2B, professional services

3. **Ecommerce**
   - Colors: Gold Trust (#F59E0B) + Purple Tech (#8B5CF6)
   - Use Case: Online stores, retail, product pages

4. **ERP/Dashboard**
   - Colors: Blue Data (#1E40AF) + Amber Highlights (#F59E0B)
   - Use Case: Business intelligence, dashboards, analytics

**Each theme file defines:**
- Color palette (primary, secondary, accent, neutrals)
- Typography system (font families, scales, weights)
- Spacing scale (rem-based system)
- Animation personality (signature animations, timing)
- Visual style characteristics
- Component defaults (button styles, card treatments)
- **Anti-patterns to avoid** (category-specific)

### 2. Reduce Design Rules to Essentials

**Keep only universal standards:**
```
design-framework/
├── design-rules/              # REDUCED - essentials only
│   ├── accessibility.md      # WCAG compliance, ARIA patterns
│   ├── responsive.md         # Breakpoint strategy, mobile-first
│   ├── naming-conventions.md # File naming, component naming
│   └── code-standards.md     # TypeScript, prop patterns
```

**Remove (move to themes):**
- `color-system.md` → Each theme defines its own
- `spacing.md` → Each theme defines its own
- `typography.md` → Each theme defines its own
- `animation-system.md` → Each theme defines its own

### 3. Dynamic Pattern Generation

**Replace:** Static pattern docs → ui-ux-pro-max generated patterns

**Old approach:**
```markdown
# patterns/navigation.md
Use <Sidebar> component with these props...
```

**New approach:**
```markdown
# patterns/navigation.md
## Pattern Description
Navigation should provide clear hierarchy and easy access to primary features.

## ui-ux-pro-max Prompt
"Create a responsive navigation component following [THEME_NAME] theme.
Requirements: logo placement, main menu, mobile hamburger, user profile dropdown."

## Reference Implementation
[Link to example in codebase]
```

### 4. Enhanced Stage Templates

**Update templates to reference themes:**

**stage1-wireframes/template.md:**
```markdown
## Wireframe Metadata
- Feature: [Feature Name]
- Theme: [mds/minimal/corporate]  ← NEW
- Responsive: [desktop-first/mobile-first]
```

**stage2-component-specs/template.md:**
```markdown
## Component Specifications
- Theme Reference: [mds/minimal/corporate]  ← NEW
- ui-ux-pro-max Prompt: [Specific prompt for implementation]  ← NEW
```

---

## New Structure

```
design-framework/
├── README.md                   # Updated - explains theme system
├── QUICK_START.md              # Updated - theme selection workflow
│
├── themes/                     # NEW - Theme catalog (4 themes ready)
│   ├── README.md              # Theme selection guide
│   ├── mds.md                 # MDS theme (DEFAULT)
│   ├── corporate.md           # Corporate/Branding theme
│   ├── ecommerce.md           # Ecommerce theme
│   ├── erp.md                 # ERP/Dashboard theme
│   └── template.md            # Template for creating new themes
│
├── design-rules/              # REDUCED - universal standards only
│   ├── README.md
│   ├── accessibility.md       # WCAG, ARIA, keyboard nav
│   ├── responsive.md          # Breakpoints, mobile-first
│   ├── naming-conventions.md  # File/component naming
│   └── code-standards.md      # TypeScript patterns
│
├── patterns/                  # UPDATED - ui-ux-pro-max prompts
│   ├── README.md             # How to use patterns
│   ├── navigation.md         # Navigation patterns + prompts
│   ├── forms.md              # Form patterns + prompts
│   ├── feedback.md           # Feedback patterns + prompts
│   ├── data-display.md       # Data display patterns + prompts
│   └── responsive-patterns.md # Responsive strategies
│
├── stage1-wireframes/         # ENHANCED - theme-aware
│   ├── README.md
│   ├── template.md           # Updated with theme metadata
│   └── examples/
│
├── stage2-component-specs/    # ENHANCED - ui-ux-pro-max integration
│   ├── README.md
│   ├── template.md           # Updated with prompts
│   └── examples/
│
└── stage3-interactions/       # ENHANCED - animation references
    ├── README.md
    ├── template.md           # Updated with theme animations
    └── examples/
```

---

## Workflow Integration

### Complete Workflow: Planning → Implementation

```
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 1: PROJECT SETUP                                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. Select Theme (Human Decision)                               │
│     ├─ Review theme catalog (themes/README.md)                  │
│     ├─ Choose theme for project (mds/corporate/ecommerce/erp)  │
│     └─ Document in project README                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 2: STRUCTURAL PLANNING (Design Framework)                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  2. Create Wireframes (WF-XXX)                                  │
│     ├─ Use stage1-wireframes/template.md                        │
│     ├─ Define information architecture                          │
│     ├─ ASCII layout structure                                   │
│     └─ Reference selected theme                                 │
│                                                                 │
│  3. Create Component Specs (COMP-XXX)                           │
│     ├─ Use stage2-component-specs/template.md                   │
│     ├─ List required ShadCN components                          │
│     ├─ Write ui-ux-pro-max prompts                              │
│     └─ Define component hierarchy                               │
│                                                                 │
│  4. Create Interaction Diagrams (INT-XXX)                       │
│     ├─ Use stage3-interactions/template.md                      │
│     ├─ Define state transitions                                 │
│     ├─ Reference theme animations                               │
│     └─ Specify user flows                                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 3: VISUAL IMPLEMENTATION (ui-ux-pro-max)                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  5. Invoke ui-ux-pro-max with Constraints                       │
│     ├─ Provide: WF-XXX, COMP-XXX, INT-XXX specs                 │
│     ├─ Constraint: Selected theme (colors, typography, spacing) │
│     ├─ Constraint: Accessibility standards                      │
│     └─ Constraint: Responsive requirements                      │
│                                                                 │
│  6. ui-ux-pro-max Generates Code                                │
│     ├─ Converts wireframe to responsive layout                  │
│     ├─ Applies theme visual styling                             │
│     ├─ Implements animations per theme                          │
│     ├─ Creates micro-interactions                               │
│     └─ Follows codebase-framework patterns                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 4: VALIDATION & ITERATION                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  7. Validate Implementation                                     │
│     ├─ Does layout match wireframes? (WF-XXX)                   │
│     ├─ Are components per specs? (COMP-XXX)                     │
│     ├─ Do interactions work? (INT-XXX)                          │
│     ├─ Is theme applied correctly?                              │
│     └─ Accessibility checks pass?                               │
│                                                                 │
│  8. Iterate if Needed                                           │
│     ├─ Update specs if requirements change                      │
│     ├─ Re-invoke ui-ux-pro-max with updated constraints         │
│     └─ Document any deviations                                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ PHASE 5: FRAMEWORK EVOLUTION (Optional)                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  9. Extract Reusable Patterns                                   │
│     ├─ Identify new component patterns                          │
│     ├─ Abstract from feature-specific code                      │
│     ├─ Add to patterns/ with ui-ux-pro-max prompt               │
│     └─ Update codebase-framework examples                       │
│                                                                 │
│  10. Evolve Themes (if needed)                                  │
│      ├─ Use ui-ux-pro-max to suggest theme improvements         │
│      ├─ Create new themes for new project types                 │
│      ├─ Document in themes/ catalog                             │
│      └─ Update theme CSS in codebase-framework/themes/          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## RACI Matrix

### Responsibility Assignment

| Task | Design Framework | ui-ux-pro-max | Human | External Tools |
|------|------------------|---------------|-------|----------------|
| **Planning & Structure** |
| Choose theme for project | I | C | R/A | - |
| Create wireframes (WF-XXX) | R | C | A | - |
| Define component hierarchy | R | C | A | - |
| Create interaction diagrams | R | C | A | - |
| **Visual Design & Implementation** |
| Layout execution | I | R | A | - |
| Apply theme styling | C | R | A | - |
| Implement animations | C | R | A | - |
| Create micro-interactions | I | R | A | - |
| Generate component code | C | R | A | - |
| **Assets & Graphics** |
| UI icons | I | C | A | Lucide React |
| Custom illustrations | I | C | A | DALL-E, Midjourney |
| Logos & brand assets | I | I | A | Designer, Figma |
| Stock images | I | I | A | Unsplash, Pexels |
| **Standards & Governance** |
| Define accessibility rules | R | I | A | - |
| Define responsive strategy | R | C | A | - |
| Create theme specifications | R | C | A | - |
| Maintain pattern library | R | C | A | - |
| **Quality & Validation** |
| Validate against specs | R | I | A | - |
| Accessibility testing | R | C | A | axe DevTools |
| Responsive testing | R | C | A | Browser DevTools |
| Code review | I | I | R/A | - |

**Legend:**
- **R** = Responsible (does the work)
- **A** = Accountable (final decision maker)
- **C** = Consulted (provides input)
- **I** = Informed (kept in the loop)

---

## Implementation Roadmap

### Phase 1: Foundation (Week 1-2)

#### 1.1 Create Theme Catalog Structure

**Tasks:**
- [ ] Create `design-framework/themes/` directory
- [ ] Write `themes/README.md` (theme selection guide)
- [ ] Write `themes/template.md` (blank theme template)
- [ ] Convert MDS design rules → `themes/mds.md`

**MDS Theme Specification Template:**
```markdown
# MDS (Modern Design System) Theme

## Overview
Brand-focused theme with magenta/teal identity and bold animations.

## Color Palette

### Brand Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `magenta` | #bd1874 | Primary CTAs, emphasis |
| `magenta-dark` | #a01462 | Hover/active states |
| `teal` | #004d6c | Navigation, headers |
| `teal-accent` | #14b8a6 | Success, highlights |

### Neutrals
| Token | Hex | Usage |
|-------|-----|-------|
| `gray-50` | #f9fafb | Backgrounds |
| `gray-900` | #111827 | Text |

## Typography

### Font Families
- **Headings:** Inter (700, 600, 500)
- **Body:** Inter (400, 500)
- **Mono:** JetBrains Mono (400)

### Scale
| Token | Size | Line Height |
|-------|------|-------------|
| `text-xs` | 0.75rem | 1rem |
| `text-sm` | 0.875rem | 1.25rem |
| `text-base` | 1rem | 1.5rem |
| `text-lg` | 1.125rem | 1.75rem |
| `text-xl` | 1.25rem | 1.75rem |
| `text-2xl` | 1.5rem | 2rem |
| `text-3xl` | 1.875rem | 2.25rem |
| `text-4xl` | 2.25rem | 2.5rem |

## Spacing Scale
Based on 4px base unit (0.25rem):
- `1` = 0.25rem (4px)
- `2` = 0.5rem (8px)
- `4` = 1rem (16px)
- `6` = 1.5rem (24px)
- `8` = 2rem (32px)
- `12` = 3rem (48px)
- `16` = 4rem (64px)

## Animation System

### Signature Animations
| Name | Effect | Duration | Usage |
|------|--------|----------|-------|
| `animate-reveal` | Clip-path reveal + upward | 1s | Page entry |
| `scroll-reveal` | Fade + translateY | 0.6s | Scroll triggers |
| `beam-h` | Horizontal light beam | 3s loop | Hero decoration |

### Timing
- **Quick:** 150ms (hover feedback)
- **Standard:** 400ms (state changes)
- **Slow:** 1s (page entry)
- **Easing:** ease-in-out (default)

## Visual Style

### Component Defaults
- **Buttons:** Solid with magenta primary, ghost secondary
- **Cards:** White background, subtle shadow, rounded-lg
- **Inputs:** Border-based, focus ring in teal-accent
- **Modals:** Backdrop blur, slide-up animation

### Effects
- **Shadows:** Subtle, warm (no harsh black shadows)
- **Borders:** Rounded corners (lg = 8px default)
- **Gradients:** Linear magenta → teal for emphasis

## ui-ux-pro-max Integration

### Theme Constraint Prompt Template
```
Use MDS theme:
- Colors: Magenta (#bd1874) primary, Teal (#004d6c) secondary
- Typography: Inter font family
- Spacing: 4px base unit
- Style: Modern, clean, bold animations
- Components: ShadCN UI with MDS customization
```

## CSS Implementation
File: `codebase-framework/themes/mds.css`
```

#### 1.2 Reduce Design Rules

**Tasks:**
- [ ] Archive current `design-rules/` → `design-rules-archive/`
- [ ] Create new minimal `design-rules/`:
  - [ ] `README.md` (overview of universal standards)
  - [ ] `accessibility.md` (WCAG, ARIA)
  - [ ] `responsive.md` (breakpoints, mobile-first)
  - [ ] `naming-conventions.md` (files, components)
  - [ ] `code-standards.md` (TypeScript, patterns)

#### 1.3 Update Stage Templates

**Tasks:**
- [ ] Update `stage1-wireframes/template.md`:
  - Add "Theme" metadata field
  - Add theme reference section
- [ ] Update `stage2-component-specs/template.md`:
  - Add "Theme Reference" field
  - Add "ui-ux-pro-max Prompt" section
- [ ] Update `stage3-interactions/template.md`:
  - Add theme animation references
  - Add ui-ux-pro-max interaction prompts

### Phase 2: Pattern Enhancement (Week 3-4)

#### 2.1 Update Pattern Library

**Tasks:**
- [ ] Update each pattern file in `patterns/`:
  - [ ] Add "ui-ux-pro-max Prompt Template" section
  - [ ] Add theme-specific variations
  - [ ] Link to reference implementations
- [ ] Create `patterns/README.md` with:
  - How to use patterns with ui-ux-pro-max
  - When to create new patterns
  - Pattern contribution guidelines

#### 2.2 Create Integration Documentation

**Tasks:**
- [ ] Write `design-framework/UI_UX_PROMAX_INTEGRATION.md`:
  - How to invoke ui-ux-pro-max
  - Prompt engineering guidelines
  - Theme constraint examples
  - Common workflows
- [ ] Update `design-framework/README.md`:
  - Explain new theme system
  - Reference ui-ux-pro-max integration
  - Update quick start guide

### Phase 3: Theme Development (Week 5-6)

#### 3.1 Create Four Production Themes ✓ COMPLETED

**Status:** All 4 themes defined via ui-ux-pro-max

**Completed Tasks:**
- [x] Create `themes/mds.md` (MDS theme - DEFAULT)
- [x] Create `themes/corporate.md` (Corporate/Branding theme)
- [x] Create `themes/ecommerce.md` (Ecommerce theme)
- [x] Create `themes/erp.md` (ERP/Dashboard theme)
- [x] Used ui-ux-pro-max to generate theme specifications:
  - ✓ Color palettes optimized per use case
  - ✓ Typography pairings (Google Fonts)
  - ✓ Animation systems
  - ✓ Component defaults
  - ✓ Anti-patterns for each category

**Theme Specifications:** See Appendix C for complete details

#### 3.2 Sync with Codebase Framework

**Tasks:**
- [ ] Update `codebase-framework/themes/`:
  - [ ] Ensure mds.css matches themes/mds.md
  - [ ] Create CSS files for new themes
- [ ] Update `codebase-framework/component-patterns/theming.md`:
  - Document theme switching
  - Multi-theme support patterns

### Phase 4: Testing & Documentation (Week 7-8)

#### 4.1 Pilot Project

**Tasks:**
- [ ] Choose a pilot feature to rebuild
- [ ] Create specs using new theme-aware templates
- [ ] Implement using ui-ux-pro-max
- [ ] Document lessons learned

#### 4.2 Create Training Materials

**Tasks:**
- [ ] Write quick start guide for new workflow
- [ ] Create video walkthrough (optional)
- [ ] Document ui-ux-pro-max prompt recipes
- [ ] Create troubleshooting guide

#### 4.3 Migration Guide

**Tasks:**
- [ ] Write migration guide for existing features
- [ ] Document how to extract theme from existing design-rules
- [ ] Provide scripts/tools for automated migration (optional)

---

## Migration Guide

### For Existing Projects

#### Step 1: Identify Current Design System
If your project uses custom design rules:
1. Review `design-rules/color-system.md`, `spacing.md`, `typography.md`
2. Determine if it matches MDS theme or is custom

#### Step 2: Create Theme Specification
If custom:
1. Copy `themes/template.md` → `themes/[project-name].md`
2. Fill in color palette, typography, spacing, animations
3. Create corresponding CSS file in `codebase-framework/themes/`

If MDS:
1. Reference existing `themes/mds.md`
2. No new theme creation needed

#### Step 3: Update Existing Specs
For each feature:
1. Add "Theme: [theme-name]" to wireframes
2. Add ui-ux-pro-max prompts to component specs
3. Update interaction diagrams with theme animation references

#### Step 4: Gradually Refactor
- Don't refactor all at once
- New features use new workflow
- Refactor old features opportunistically (when bugs/changes needed)

### For New Projects

1. **Start Here:** `design-framework/themes/README.md`
2. **Choose Theme:** Select from catalog or create new
3. **Follow Workflow:** Use updated stage templates
4. **Invoke ui-ux-pro-max:** Reference theme constraints
5. **Validate:** Check implementation against specs

---

## Success Criteria

### Quantitative Metrics

| Metric | Baseline (Current) | Target (After Integration) |
|--------|-------------------|---------------------------|
| Time to implement feature | 8 hours (avg) | 3 hours (avg) |
| Design consistency score | 70% (manual review) | 95% (theme enforcement) |
| Pattern reuse rate | 30% | 80% |
| Documentation coverage | 60% | 95% |
| Developer satisfaction | 6/10 | 9/10 |

### Qualitative Success

- [ ] Developers can choose appropriate theme for new projects
- [ ] ui-ux-pro-max generates code matching specs consistently
- [ ] Visual quality is high across all projects
- [ ] Design decisions are documented and traceable
- [ ] Theme catalog grows organically with new project needs
- [ ] Onboarding new developers takes < 1 day

---

## Appendix C: Complete Theme Specifications

### Theme 1: MDS (Modern Design System) - DEFAULT

**Overview:**
Brand-focused theme with magenta/teal identity and bold animations. Best for features requiring strong brand presence and modern, energetic feel.

**Color Palette:**

| Role | Hex | Usage |
|------|-----|-------|
| Primary | #bd1874 | Primary CTAs, emphasis, hero sections |
| Primary Dark | #a01462 | Hover/active states on primary |
| Secondary | #004d6c | Navigation, headers, secondary buttons |
| Accent | #14b8a6 | Success indicators, highlights, progress |
| Background | #f9fafb | Page backgrounds |
| Text | #111827 | Primary text |

**Typography:**
- **Headings:** Inter (700, 600, 500)
- **Body:** Inter (400, 500)
- **Mono:** JetBrains Mono (400)

**Google Fonts Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400&display=swap');
```

**Spacing Scale:**
Based on 4px base unit (0.25rem): 1, 2, 4, 6, 8, 12, 16

**Animation System:**
- `animate-reveal` - Clip-path reveal + upward motion (1s) - Page entry
- `scroll-reveal` - Fade + translateY (0.6s) - Scroll triggers
- `beam-h/beam-v` - Decorative light beams (3s loop) - Hero decoration
- Timing: Quick (150ms), Standard (400ms), Slow (1s)

**Visual Style:**
- Modern, clean, bold
- Solid buttons with magenta primary
- White cards with subtle shadows
- Linear gradients (magenta → teal)
- Rounded corners (8px default)

**Component Defaults:**
- **Buttons:** Solid magenta primary, ghost secondary
- **Cards:** White bg, subtle shadow, rounded-lg
- **Inputs:** Border-based, teal-accent focus ring
- **Modals:** Backdrop blur, slide-up animation

**Anti-Patterns:**
N/A - This is the foundational theme

**Use Cases:**
- Brand-focused marketing pages
- Hero sections with strong CTAs
- Features requiring emphasis
- Modern SaaS interfaces

---

### Theme 2: Corporate/Branding

**Overview:**
Professional, trustworthy theme optimized for enterprise B2B, corporate websites, and professional services. Emphasizes credibility through certificates, credentials, and measured design.

**Pattern:** Enterprise Gateway

**Color Palette:**

| Role | Hex | Usage |
|------|-----|-------|
| Primary | #0F766E | Trust signals, primary elements |
| Secondary | #14B8A6 | Secondary actions, highlights |
| CTA | #0369A1 | Contact Sales, primary CTAs |
| Background | #F0FDFA | Soft, professional background |
| Text | #134E4A | Primary text |

**Typography:**
- **Headings:** Poppins (400, 500, 600, 700)
- **Body:** Open Sans (300, 400, 500, 600, 700)
- **Mood:** Modern, professional, clean, corporate, friendly, approachable

**Google Fonts Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
```

**Spacing Scale:**
Conservative spacing with emphasis on breathing room and clarity

**Animation System:**
- Badge hover effects
- Metric pulse animations
- Certificate carousel
- Smooth stat reveal
- Timing: 200-300ms (professional, not flashy)

**Visual Style:**
- Trust & Authority focused
- Certificates/badges displayed prominently
- Expert credentials showcased
- Case studies with metrics
- Before/after comparisons
- Industry recognition badges
- Security certifications visible

**Component Defaults:**
- **Buttons:** Teal primary, blue CTAs, subtle hover states
- **Cards:** Clean, bordered, certification badges
- **Navigation:** Mega menu for industries/solutions
- **Hero:** Video or mission statement with trust signals
- **Sections:** Client logos, solutions by industry, contact sales

**Anti-Patterns to Avoid:**

1. **Over-Formalization**
   - ❌ Overly rigid layouts that feel bureaucratic
   - ❌ Too many hierarchical levels in navigation
   - ✅ Professional but approachable design

2. **Poor Brand Hierarchy**
   - ❌ Logo too small or poorly positioned
   - ❌ Inconsistent logo usage across pages
   - ✅ Clear, consistent brand presence

3. **Generic Stock Imagery**
   - ❌ Cliché business photos (handshakes, suits)
   - ❌ Obvious stock photos without authenticity
   - ✅ Real team photos, authentic workspace images

4. **Inconsistent Brand Voice**
   - ❌ Mixing overly formal and casual language
   - ❌ Inconsistent terminology across pages
   - ✅ Unified, professional tone throughout

5. **Hidden Contact Information**
   - ❌ Contact buried in footer only
   - ❌ Complex multi-step contact forms
   - ✅ Prominent "Contact Sales" CTA, easy access

6. **Design Elements to Avoid**
   - ❌ Playful animations or whimsical elements
   - ❌ AI-style purple/pink gradients (too trendy)
   - ❌ Hidden credentials or certifications
   - ✅ Conservative, trust-building visual elements

**Use Cases:**
- Enterprise software landing pages
- B2B service providers
- Professional services (legal, financial, consulting)
- Healthcare/medical platforms
- Corporate websites requiring credibility

**Performance:** ⚡ Excellent
**Accessibility:** ✓ WCAG AAA

---

### Theme 3: Ecommerce

**Overview:**
Vibrant, conversion-focused theme optimized for online stores, retail, and product pages. Emphasizes trust signals, clear CTAs, and streamlined checkout flows.

**Pattern:** Funnel (3-Step Conversion)

**Color Palette:**

| Role | Hex | Usage |
|------|-----|-------|
| Primary | #F59E0B | Gold trust, primary highlights |
| Secondary | #FBBF24 | Secondary gold tones |
| CTA | #8B5CF6 | Purple tech, "Add to Cart" buttons |
| Background | #0F172A | Dark, modern background (or light variant) |
| Text | #F8FAFC | Light text on dark bg (or inverse) |

**Typography:**
- **Headings:** Rubik (300, 400, 500, 600, 700)
- **Body:** Nunito Sans (300, 400, 500, 600, 700)
- **Mood:** Ecommerce, clean, shopping, product-focused, conversion-optimized

**Google Fonts Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700&family=Rubik:wght@300;400;500;600;700&display=swap');
```

**Spacing Scale:**
Large sections (48px+ gaps) for product breathing room

**Animation System:**
- Animated patterns on product cards
- Bold hover effects (color shift)
- Scroll-snap for product galleries
- Large type animations (32px+)
- Timing: 200-300ms (quick, responsive)

**Visual Style:**
- Vibrant & Block-based
- Bold, energetic, playful
- High color contrast
- Geometric shapes
- Duotone effects
- Modern, energetic feel

**Component Defaults:**
- **Buttons:** Purple CTA for "Add to Cart", gold for highlights
- **Cards:** Product cards with hover effects, price prominence
- **Navigation:** Sticky header with cart icon, category mega menu
- **Product Pages:** Large images, clear pricing, trust badges
- **Checkout:** Progressive disclosure, 3-step maximum

**Anti-Patterns to Avoid:**

1. **Hidden Costs**
   - ❌ Shipping costs only shown at final checkout step
   - ❌ Hidden taxes or fees
   - ✅ Show all costs early (product page or cart)

2. **Complex Checkout**
   - ❌ More than 3 checkout steps
   - ❌ Forcing account creation before purchase
   - ✅ Guest checkout option, minimal steps

3. **Poor Product Filtering**
   - ❌ Single-dimension filtering only
   - ❌ No way to combine filters
   - ✅ Multi-facet filtering (price, color, size, brand)

4. **Unclear CTAs**
   - ❌ "Add to Cart" button not immediately visible
   - ❌ Weak CTA copy ("Submit", "Continue")
   - ✅ Bold, clear "Add to Cart", "Buy Now" buttons

5. **Slow Load Times**
   - ❌ Unoptimized product images (> 500KB)
   - ❌ Loading entire catalog at once
   - ✅ Lazy loading, WebP images, CDN usage

6. **Missing Trust Signals**
   - ❌ No customer reviews or ratings
   - ❌ No security badges on checkout
   - ✅ Prominent reviews, trust badges, social proof

7. **Design Elements to Avoid**
   - ❌ Flat design without depth (products need to "pop")
   - ❌ Text-heavy product pages (show, don't tell)
   - ❌ Forced account creation workflow
   - ✅ Visual-first product display, optional accounts

**Use Cases:**
- E-commerce stores
- Product landing pages
- Shopping carts and checkout flows
- Retail websites
- Consumer-focused apps

**Performance:** ⚡ Good (optimize images!)
**Accessibility:** ◐ Ensure WCAG AA minimum

---

### Theme 4: ERP/Dashboard

**Overview:**
Data-dense, efficiency-focused theme optimized for enterprise resource planning, business intelligence dashboards, and data-heavy applications. Maximizes information density while maintaining usability.

**Pattern:** Enterprise Gateway + Data-Dense Dashboard

**Color Palette:**

| Role | Hex | Usage |
|------|-----|-------|
| Primary | #1E40AF | Blue data primary |
| Secondary | #3B82F6 | Secondary blue tones |
| CTA | #F59E0B | Amber highlights for actions |
| Background | #F8FAFC | Clean, light background |
| Text | #1E3A8A | Dark blue text |

**Typography:**
- **Headings:** Fira Code (400, 500, 600, 700) - Monospace for data
- **Body:** Fira Sans (300, 400, 500, 600, 700)
- **Mood:** Dashboard, data, analytics, technical, precise

**Google Fonts Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Fira+Sans:wght@300;400;500;600;700&display=swap');
```

**Spacing Scale:**
Minimal padding, space-efficient layout for maximum data visibility

**Animation System:**
- Hover tooltips on data points
- Chart zoom on click
- Row highlighting on hover
- Smooth filter animations
- Data loading spinners
- Timing: Quick interactions (150ms)

**Visual Style:**
- Data-Dense Dashboard
- Multiple charts/widgets per view
- Data tables with sorting/filtering
- KPI cards prominently displayed
- Grid layout for space efficiency
- Minimal decorative elements

**Component Defaults:**
- **Tables:** Sortable, filterable, pagination, row selection
- **Charts:** Interactive tooltips, zoom, export options
- **KPI Cards:** Large numbers, trend indicators, sparklines
- **Filters:** Advanced filtering, saved filter sets
- **Navigation:** Sidebar with module sections, breadcrumbs

**Anti-Patterns to Avoid:**

1. **Information Overload**
   - ❌ Showing all data at once without hierarchy
   - ❌ Too many charts without clear purpose
   - ✅ Progressive disclosure, prioritize key metrics

2. **Poor Data Hierarchy**
   - ❌ Equal visual weight for all data points
   - ❌ No clear primary/secondary information
   - ✅ Visual hierarchy (size, color, position)

3. **Lack of Contextual Help**
   - ❌ Complex features without tooltips or help
   - ❌ Cryptic abbreviations or codes
   - ✅ Tooltips, info icons, inline help text

4. **Rigid Workflows**
   - ❌ Forcing users through strict step-by-step processes
   - ❌ No way to skip or reorder steps
   - ✅ Flexible task completion, shortcuts for power users

5. **Unclear Permissions**
   - ❌ Users don't know what they can/cannot do
   - ❌ Failed actions without explanation
   - ✅ Disabled states with explanations, clear roles

6. **Design Elements to Avoid**
   - ❌ Ornate design or decorative flourishes
   - ❌ Missing filtering/search on data tables
   - ❌ No bulk actions for repeated tasks
   - ❌ Auto-play videos (data consumption concern)
   - ❌ Tables that don't handle mobile responsively
   - ✅ Function over form, efficiency-focused

7. **Table/Data UX Issues**
   - ❌ Tables overflow on mobile without horizontal scroll
   - ❌ No "No results" messaging with suggestions
   - ❌ Missing autocomplete on search
   - ❌ No multi-select for bulk operations
   - ✅ Responsive tables, helpful empty states, bulk actions

**Use Cases:**
- Business intelligence dashboards
- ERP systems (finance, HR, inventory)
- Analytics platforms
- Admin panels
- Data warehousing interfaces
- Operational dashboards

**Performance:** ⚡ Excellent (data virtualization critical)
**Accessibility:** ✓ WCAG AA (tables need proper markup)

---

## Appendix A: ui-ux-pro-max Prompt Templates

### Layout Implementation Prompt

```
Generate a [page/component name] implementation:

**Wireframe Reference:** [WF-XXX]
**Theme:** [mds/corporate/ecommerce/erp]
**Layout Structure:**
[ASCII wireframe paste]

**Requirements:**
- Responsive: [mobile-first/desktop-first]
- Breakpoints: [list specific breakpoints]
- Key interactions: [list]

**Constraints:**
- Follow [theme name] color palette
- Use [theme name] spacing scale
- Apply [theme name] component defaults
- Ensure WCAG AA accessibility
```

### Component Styling Prompt

```
Style this ShadCN component using [theme name] theme:

**Component:** [Button/Card/Form/etc.]
**Variant:** [primary/secondary/ghost/etc.]

**Theme Constraints:**
- Colors: [paste theme colors]
- Typography: [paste theme font specs]
- Spacing: [paste theme spacing]
- Effects: [shadows/borders/etc.]

**Output:** Tailwind classes for this component
```

### Animation Implementation Prompt

```
Implement animations from [INT-XXX] using [theme name] theme:

**Interaction:** [describe user action]
**Expected Animation:** [describe desired effect]

**Theme Animation Standards:**
[paste theme animation specs]

**Requirements:**
- Respect prefers-reduced-motion
- Use GPU-accelerated properties only
- Follow theme timing curves

**Output:** Tailwind animation classes + custom keyframes if needed
```

### New Theme Creation Prompt

```
Create a new theme specification for [project type]:

**Project Type:** [corporate/creative/minimal/etc.]
**Brand Colors:** [if any existing]
**Design Style:** [modern/classic/playful/etc.]

**Requirements:**
- Color palette (primary, secondary, accent, neutrals)
- Typography system (font families, scale)
- Spacing scale (rem-based)
- Animation personality
- Component defaults

**Format:** Match the structure of themes/template.md
```

---

## Appendix D: Theme-Specific Prompt Examples

### MDS Theme Prompts

**Hero Section:**
```
Create a hero section using MDS theme:
- Colors: Magenta (#bd1874) for CTA, Teal (#004d6c) for secondary elements
- Typography: Inter font, heading at text-5xl (3rem)
- Animation: animate-reveal on heading, delay-200 on subtext
- Layout: Centered text, gradient background (magenta → teal), CTA buttons below
- Components: 2 buttons (primary magenta, secondary ghost)
```

**Product Card:**
```
Create a product card using MDS theme:
- Colors: White background, magenta accent on hover
- Typography: Inter, product name at text-xl
- Animation: scroll-reveal on entry, scale-105 on hover
- Layout: Image top, content below, CTA button at bottom
- Effects: rounded-lg, subtle shadow, teal-accent border on hover
```

### Corporate Theme Prompts

**About Section:**
```
Create an about/credentials section using Corporate theme:
- Colors: Trust Teal (#0F766E) for headers, Professional Blue (#0369A1) for CTAs
- Typography: Poppins headings, Open Sans body text
- Layout: Grid of certification badges, team credentials, case studies
- Components: Badge cards with hover effects, metric counters
- Trust elements: Display certifications, years in business, client logos
- Anti-patterns to avoid: No playful animations, no hidden credentials
```

**Navigation:**
```
Create enterprise navigation using Corporate theme:
- Colors: Teal background for nav, white text
- Typography: Open Sans for menu items
- Layout: Mega menu with industry/solution categories
- Components: Logo left, main menu center, "Contact Sales" CTA right
- Features: Tab switching for industries, path selection dropdowns
- Anti-patterns to avoid: Keep hierarchy clear, don't over-formalize
```

### Ecommerce Theme Prompts

**Product Listing Page:**
```
Create product grid using Ecommerce theme:
- Colors: Gold (#F59E0B) for badges, Purple (#8B5CF6) for "Add to Cart"
- Typography: Rubik headings, Nunito Sans for descriptions
- Layout: 3-column grid (desktop), 1-column (mobile)
- Components: Product cards with image, price, rating, CTA
- Filters: Multi-facet filtering sidebar (price, category, brand)
- Features: Quick view modal, wishlist icon, trust badges
- Anti-patterns to avoid: Show prices early, don't hide costs, enable filtering
```

**Checkout Flow:**
```
Create 3-step checkout using Ecommerce theme:
- Colors: Purple CTAs, gold progress indicator
- Typography: Clear, large text for input labels
- Layout: Single column, progress bar at top
- Steps: 1) Cart review, 2) Shipping, 3) Payment
- Components: Guest checkout option, saved addresses, trust badges
- Features: Order summary sticky sidebar, clear cost breakdown
- Anti-patterns to avoid: Max 3 steps, guest checkout available, show all costs
```

### ERP Theme Prompts

**Dashboard Overview:**
```
Create analytics dashboard using ERP theme:
- Colors: Blue (#1E40AF) for primary, Amber (#F59E0B) for highlights
- Typography: Fira Code for metrics, Fira Sans for labels
- Layout: Grid of KPI cards (4 columns), charts below (2 columns)
- Components: Metric cards with sparklines, interactive charts, data tables
- Features: Date range selector, export buttons, filter sets
- Data visualization: Use Chart.js or Recharts for consistent styling
- Anti-patterns to avoid: Don't overload, provide filtering, show hierarchy
```

**Data Table:**
```
Create data table using ERP theme:
- Colors: Blue for headers, amber for action buttons
- Typography: Fira Sans, monospace for numbers
- Layout: Full-width table with fixed header
- Features: Sortable columns, row selection, pagination, bulk actions
- Filters: Column filters, saved filter sets, search autocomplete
- Mobile: Horizontal scroll wrapper, card view option
- Anti-patterns to avoid: Enable filtering, bulk actions, responsive handling
```

**Advanced Filtering Interface:**
```
Create filter panel using ERP theme:
- Colors: Light blue background, amber for apply button
- Typography: Fira Sans for clarity
- Layout: Collapsible sidebar or top panel
- Features: Multi-select filters, date range picker, saved filters
- Components: Dropdowns, checkboxes, range sliders
- UX: Auto-apply or manual "Apply" button, clear all option
- Anti-patterns to avoid: Provide search, allow complex queries, show result count
```

---

## Appendix B: File Changes Summary

### Files to Create

```
design-framework/
├── themes/
│   ├── README.md              [NEW]
│   ├── template.md            [NEW]
│   └── mds.md                 [NEW - extract from current design-rules]
├── design-rules/
│   ├── README.md              [REWRITE]
│   ├── accessibility.md       [KEEP/UPDATE]
│   ├── responsive.md          [KEEP/UPDATE]
│   ├── naming-conventions.md  [NEW]
│   └── code-standards.md      [NEW]
└── UI_UX_PROMAX_INTEGRATION.md [NEW]

documentation/
└── design-framework-uiux-promax-integration-plan.md [THIS FILE]
```

### Files to Update

```
design-framework/
├── README.md                  [UPDATE - reference themes]
├── QUICK_START.md            [UPDATE - new workflow]
├── stage1-wireframes/
│   └── template.md           [UPDATE - add theme metadata]
├── stage2-component-specs/
│   └── template.md           [UPDATE - add ui-ux-pro-max prompts]
├── stage3-interactions/
│   └── template.md           [UPDATE - theme animations]
└── patterns/
    ├── README.md             [UPDATE]
    ├── navigation.md         [UPDATE - add prompts]
    ├── forms.md              [UPDATE - add prompts]
    ├── feedback.md           [UPDATE - add prompts]
    └── data-display.md       [UPDATE - add prompts]
```

### Files to Archive

```
design-framework/
└── design-rules-archive/     [MOVE HERE]
    ├── color-system.md       [ARCHIVE - now in themes]
    ├── spacing.md            [ARCHIVE - now in themes]
    ├── typography.md         [ARCHIVE - now in themes]
    └── animation-system.md   [ARCHIVE - now in themes]
```

---

## Next Steps

1. **Review this plan** with stakeholders
2. **Approve structure changes** before implementation
3. **Pilot with one theme** (MDS) before creating others
4. **Test with one feature** before full rollout
5. **Iterate based on feedback**

---

## Decisions Made

1. **Timeline:** ✓ 8-week roadmap approved, Weeks 1-2 foundation in progress
2. **Themes:** ✓ **DECIDED:** Create 4 themes immediately (MDS, Corporate, Ecommerce, ERP) - all specifications completed via ui-ux-pro-max
3. **Migration:** ✓ **DECIDED:** Gradual adoption - new features use new workflow, refactor old features opportunistically
4. **Tooling:** Manual theme CSS creation first, automate later if needed
5. **Governance:** Product owner approves new themes, technical review for CSS implementation
6. **Anti-Patterns:** ✓ **DECIDED:** Include category-specific anti-patterns in each theme specification

---

**Document Status:** Ready for Implementation
**Implementation Started:** 2026-01-31
**Owner:** Development Team
