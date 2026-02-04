# Design Rules - Universal Standards

**Version:** 2.0.0 (Theme System)
**Last Updated:** 2026-01-31

---

## Overview

This directory contains **universal design standards** that apply to ALL projects, regardless of which theme is selected. Theme-specific rules (colors, typography, spacing, animations) have been moved to the [themes/](../themes/) catalog.

## What Changed?

### Version 1.x (OLD - Archived)
- ❌ Single design system (MDS only)
- ❌ Rigid color/typography/spacing rules
- ❌ Difficult to support multiple project styles

### Version 2.0 (NEW - Current)
- ✅ Multiple themes (MDS, Corporate, Ecommerce, ERP)
- ✅ Theme-specific visual rules in `themes/` catalog
- ✅ Universal standards (accessibility, responsive, conventions) here

**Archived Files:** See [design-rules-archive/](../design-rules-archive/) for old theme-specific rules.

---

## Universal Standards

These rules apply to **every project**, regardless of theme:

| Standard | File | Purpose |
|----------|------|---------|
| **Accessibility** | [accessibility.md](./accessibility.md) | WCAG compliance, ARIA patterns, keyboard navigation |
| **Responsive Design** | [responsive.md](./responsive.md) | Breakpoint strategy, mobile-first approach |
| **Naming Conventions** | [naming-conventions.md](./naming-conventions.md) | File naming, component naming, consistency |
| **Code Standards** | [code-standards.md](./code-standards.md) | TypeScript patterns, component structure, best practices |

---

## How to Use

### 1. Choose a Theme

Start by selecting a theme from the [themes/](../themes/) catalog:
- **MDS** (DEFAULT): Brand-focused, modern
- **Corporate**: Professional, trust-focused
- **Ecommerce**: Conversion-optimized, vibrant
- **ERP**: Data-dense, efficient

See [themes/README.md](../themes/README.md) for the decision tree.

### 2. Apply Universal Standards

Regardless of your theme, **always follow** these universal standards:

**Accessibility (REQUIRED):**
- WCAG AA compliance minimum (AAA preferred)
- Keyboard navigation for all interactions
- ARIA labels on all UI components
- Color contrast requirements met

**Responsive Design (REQUIRED):**
- Mobile-first approach
- Standard breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- Touch targets minimum 44x44px on mobile
- Responsive images with srcset

**Naming Conventions (REQUIRED):**
- Consistent file/component naming
- kebab-case for files
- PascalCase for components
- Clear, descriptive names

**Code Standards (REQUIRED):**
- TypeScript for type safety
- Component composition patterns
- Prop validation
- Error handling standards

### 3. Follow Theme-Specific Rules

After applying universal standards, follow your selected theme's specifications:
- Color palette
- Typography system
- Spacing scale
- Animation standards
- Component defaults

**Example Workflow:**
```
1. Choose theme: Corporate
2. Apply universal standards:
   ✓ WCAG AA accessibility
   ✓ Mobile-first responsive
   ✓ Naming conventions
   ✓ TypeScript code standards
3. Apply Corporate theme specifics:
   ✓ Trust Teal + Professional Blue colors
   ✓ Poppins + Open Sans typography
   ✓ Conservative spacing
   ✓ Subtle animations (200-300ms)
```

---

## When to Update These Standards

### Update Universal Standards When:
- New accessibility requirements emerge (WCAG updates)
- New responsive patterns are needed (foldable devices, etc.)
- Team agrees on new naming conventions
- New coding best practices are established

### Don't Update Universal Standards For:
- Theme-specific colors, typography, spacing (use themes/)
- Project-specific patterns (document in project)
- One-off exceptions (document in feature)

---

## Migration from 1.x

If you have existing projects using old design-rules:

1. **Identify Your Theme:**
   - Review old `color-system.md`, `typography.md`, `spacing-system.md`
   - Does it match MDS theme? If yes, use `themes/mds.md`
   - If custom, create a new theme using `themes/template.md`

2. **Apply Universal Standards:**
   - Update code to follow new `code-standards.md`
   - Ensure `accessibility.md` compliance
   - Verify `responsive.md` guidelines are met
   - Check `naming-conventions.md` adherence

3. **Reference Theme:**
   - Add theme metadata to wireframes, component specs
   - Include theme constraints in ui-ux-pro-max prompts
   - Apply theme CSS file in codebase

---

## File Structure

```
design-framework/
├── design-rules/                    # Universal standards (THIS DIRECTORY)
│   ├── README.md                    # This file
│   ├── accessibility.md             # WCAG, ARIA, keyboard nav
│   ├── responsive.md                # Breakpoints, mobile-first
│   ├── naming-conventions.md        # File/component naming
│   └── code-standards.md            # TypeScript, patterns
│
├── design-rules-archive/            # Archived theme-specific rules (v1.x)
│   ├── color-system.md              # Moved to themes/
│   ├── spacing-system.md            # Moved to themes/
│   ├── typography.md                # Moved to themes/
│   ├── animation-system.md          # Moved to themes/
│   ├── component-standards.md       # Moved to themes/
│   └── layout-system.md             # Moved to themes/
│
└── themes/                          # Theme-specific rules (v2.0)
    ├── README.md                    # Theme selection guide
    ├── mds.md                       # MDS theme (DEFAULT)
    ├── corporate.md                 # Corporate theme
    ├── ecommerce.md                 # Ecommerce theme
    ├── erp.md                       # ERP theme
    └── template.md                  # New theme template
```

---

## Quick Reference

| Need | Location |
|------|----------|
| Accessibility rules | `design-rules/accessibility.md` |
| Responsive breakpoints | `design-rules/responsive.md` |
| Naming conventions | `design-rules/naming-conventions.md` |
| TypeScript patterns | `design-rules/code-standards.md` |
| **Color palette** | `themes/[theme-name].md` |
| **Typography** | `themes/[theme-name].md` |
| **Spacing** | `themes/[theme-name].md` |
| **Animations** | `themes/[theme-name].md` |

---

## Resources

- **Theme Catalog:** [themes/README.md](../themes/README.md)
- **Integration Guide:** [UI_UX_PROMAX_INTEGRATION.md](../UI_UX_PROMAX_INTEGRATION.md)
- **Full Plan:** [design-framework-uiux-promax-integration-plan.md](../../documentation/design-framework-uiux-promax-integration-plan.md)
- **Archived Rules:** [design-rules-archive/](../design-rules-archive/)

---

**Maintained By:** Design Framework Team
**Questions/Feedback:** Create an issue or update this document
