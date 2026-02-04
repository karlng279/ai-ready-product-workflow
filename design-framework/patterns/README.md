# Design Patterns Library

**Version:** 2.0.0 (ui-ux-pro-max Integration)
**Last Updated:** 2026-01-31

---

## Overview

This directory contains reusable UI/UX patterns that can be applied across different themes. Each pattern includes:
- **Pattern Description:** What the pattern solves
- **ui-ux-pro-max Prompt Templates:** Ready-to-use prompts for code generation
- **Theme Variations:** How the pattern adapts to different themes
- **Reference Implementation:** Links to example code

---

## Available Patterns

| Pattern | File | Description |
|---------|------|-------------|
| **Navigation** | [navigation-patterns.md](./navigation-patterns.md) | Header, sidebar, breadcrumbs, mega menus |
| **Forms** | [form-patterns.md](./form-patterns.md) | Input fields, validation, multi-step forms |
| **Feedback** | [feedback-patterns.md](./feedback-patterns.md) | Alerts, toasts, modals, confirmations |
| **Data Display** | [data-display-patterns.md](./data-display-patterns.md) | Tables, cards, lists, charts |
| **Responsive** | [responsive-patterns.md](./responsive-patterns.md) | Mobile-first layouts, breakpoints |

---

## How to Use Patterns

### 1. Choose a Pattern

Browse the pattern files to find the UI pattern you need.

### 2. Select Your Theme

Patterns adapt to different themes:
- **MDS:** Modern, bold, magenta/teal
- **Corporate:** Professional, trust-focused, teal/blue
- **Ecommerce:** Vibrant, conversion-focused, gold/purple
- **ERP:** Data-dense, efficient, blue/amber

### 3. Use the ui-ux-pro-max Prompt

Each pattern includes ready-to-use prompts for ui-ux-pro-max:

**Example:**
```
Generate a navigation component using [THEME_NAME] theme:

**Pattern:** Primary Navigation (navigation-patterns.md)

**Theme Constraints:**
[Copy from theme specification]

**Requirements:**
- Logo left, menu center, CTA right
- Responsive: hamburger on mobile
- Sticky header on scroll
```

### 4. Implement & Validate

After ui-ux-pro-max generates the code:
1. Verify it matches your wireframes (WF-XXX)
2. Check component specs (COMP-XXX)
3. Test interactions (INT-XXX)
4. Validate accessibility (keyboard nav, screen reader)

---

## Pattern Structure

Each pattern file follows this structure:

```markdown
# Pattern Name

## Pattern Description
What problem does this pattern solve?

## Use Cases
When to use this pattern.

## Pattern Variants
Different variations of the pattern.

## ui-ux-pro-max Prompts

### Variant 1
Prompt template for ui-ux-pro-max

### Variant 2
Prompt template for ui-ux-pro-max

## Theme Adaptations

### MDS Theme
How this pattern adapts to MDS theme

### Corporate Theme
How this pattern adapts to Corporate theme

### Ecommerce Theme
How this pattern adapts to Ecommerce theme

### ERP Theme
How this pattern adapts to ERP theme

## Reference Implementations
Links to example code in codebase
```

---

## Adding New Patterns

### When to Create a New Pattern

Create a new pattern when:
- You've implemented the same component 3+ times
- The component is reusable across multiple features
- The pattern solves a common UI/UX problem

### How to Create a New Pattern

1. **Copy Template:**
   ```bash
   cp patterns/pattern-template.md patterns/new-pattern.md
   ```

2. **Fill in Sections:**
   - Pattern description
   - Use cases
   - Variants
   - ui-ux-pro-max prompts for each variant
   - Theme adaptations
   - Reference implementations

3. **Test with ui-ux-pro-max:**
   - Use your prompts with ui-ux-pro-max
   - Verify generated code quality
   - Iterate on prompts if needed

4. **Document in README:**
   - Add to Available Patterns table
   - Update this README

---

## Pattern vs. Component

**Pattern:**
- Abstract solution to a common problem
- Can be implemented in different ways
- Theme-agnostic (adapts to themes)
- Documented in `patterns/`

**Component:**
- Concrete implementation of a pattern
- Theme-specific styling
- Actual code in codebase
- Located in `src/components/`

**Example:**
- **Pattern:** "Primary Navigation with Mega Menu" (abstract)
- **Component:** `<Header>` component in Corporate theme (concrete implementation)

---

## Working with ui-ux-pro-max

### Prompt Engineering Tips

1. **Be Specific:**
   ```
   ❌ "Create a button"
   ✅ "Create a primary CTA button using Corporate theme with teal background, white text, and subtle hover effect"
   ```

2. **Include Theme Constraints:**
   Always specify colors, typography, spacing from your theme.

3. **Reference Patterns:**
   ```
   "Generate a form using Form Pattern (form-patterns.md), Variant: Multi-Step Form"
   ```

4. **Specify Requirements:**
   List exact requirements (responsive behavior, interactions, validation)

5. **Mention Anti-Patterns:**
   ```
   "Using Ecommerce theme, avoid: hidden costs, complex checkout (max 3 steps)"
   ```

### Iterating on Prompts

If ui-ux-pro-max output isn't perfect:
1. Review the generated code
2. Identify what's missing or incorrect
3. Update your prompt with more specifics
4. Re-generate
5. Document improved prompt in pattern file

---

## Theme-Specific Pattern Guidelines

### MDS Theme Patterns
- **Style:** Modern, bold, energetic
- **Colors:** Magenta primary, Teal secondary
- **Animations:** Bold (reveal, beams, scroll effects)
- **Best For:** Hero sections, brand-focused components

### Corporate Theme Patterns
- **Style:** Professional, trust-focused
- **Colors:** Trust Teal primary, Professional Blue CTAs
- **Animations:** Subtle (200-300ms, badge hovers)
- **Best For:** Navigation, credent ials, case studies

### Ecommerce Theme Patterns
- **Style:** Vibrant, conversion-focused
- **Colors:** Gold highlights, Purple CTAs
- **Animations:** Quick, responsive (200ms hovers)
- **Best For:** Product cards, checkout flows, carts

### ERP Theme Patterns
- **Style:** Data-dense, efficient
- **Colors:** Blue primary, Amber actions
- **Animations:** Minimal, functional (150ms)
- **Best For:** Tables, dashboards, filters, KPI cards

---

## Resources

- **Theme Catalog:** [themes/README.md](../themes/README.md)
- **Integration Guide:** [UI_UX_PROMAX_INTEGRATION.md](../UI_UX_PROMAX_INTEGRATION.md)
- **Design Rules:** [design-rules/README.md](../design-rules/README.md)
- **ui-ux-pro-max Skill:** `~/.claude/plugins/cache/ui-ux-pro-max-skill/`

---

## Quick Reference

| Need | Action |
|------|--------|
| Find a pattern | Browse pattern files in this directory |
| Use a pattern | Copy ui-ux-pro-max prompt from pattern file |
| Adapt to theme | Follow theme adaptation section in pattern |
| Create new pattern | Copy pattern-template.md, fill in sections |
| Generate code | Use ui-ux-pro-max with pattern prompt + theme constraints |

---

**Maintained By:** Design Framework Team
**Questions/Feedback:** Create an issue or update this document
