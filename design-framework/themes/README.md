# Design Framework Theme Catalog

## Overview

This directory contains theme specifications for the PPO Automation Tasks framework. Themes provide complete design systems including colors, typography, spacing, animations, and component defaults that can be applied to different project types.

## Available Themes

| Theme | Best For | Colors | Status |
|-------|----------|--------|--------|
| **MDS (Modern Design System)** | Brand-focused features, marketing, hero sections | Magenta + Teal | ✅ DEFAULT |
| **Corporate/Branding** | Enterprise B2B, professional services | Trust Teal + Blue | ✅ Ready |
| **Ecommerce** | Online stores, retail, product pages | Gold + Purple | ✅ Ready |
| **ERP/Dashboard** | Business intelligence, analytics, dashboards | Blue + Amber | ✅ Ready |

## How to Choose a Theme

### Decision Tree

```
Start → What type of project?
    │
    ├─ Brand/Marketing focused? → MDS Theme (magenta/teal, bold animations)
    │
    ├─ Enterprise/Corporate site? → Corporate Theme (professional, trust-focused)
    │
    ├─ E-commerce/Retail? → Ecommerce Theme (conversion-optimized, vibrant)
    │
    └─ Data/Analytics dashboard? → ERP Theme (data-dense, efficient)
```

### Use Case Guidelines

#### Use MDS Theme When:
- Building brand-focused landing pages
- Creating hero sections with strong CTAs
- Need modern, energetic visual style
- Want bold animations and gradients
- Emphasizing brand identity

#### Use Corporate Theme When:
- Building enterprise B2B platforms
- Professional services websites
- Need to emphasize trust and credibility
- Showcasing certifications, credentials, case studies
- Target audience is decision-makers, executives

#### Use Ecommerce Theme When:
- Building online stores or marketplaces
- Product landing pages
- Checkout flows and shopping carts
- Need conversion-focused design
- Target audience is consumers

#### Use ERP Theme When:
- Building business intelligence dashboards
- Analytics platforms or admin panels
- Data-heavy applications (tables, charts, reports)
- Need maximum information density
- Target audience is data analysts, operations teams

## Theme Structure

Each theme file (`[theme-name].md`) includes:

1. **Overview** - Description and use case summary
2. **Color Palette** - Primary, secondary, accent, background, text colors
3. **Typography** - Font families, scale, Google Fonts import
4. **Spacing Scale** - Consistent spacing system
5. **Animation System** - Signature animations, timing, effects
6. **Visual Style** - Design characteristics and principles
7. **Component Defaults** - Default styles for buttons, cards, forms, etc.
8. **Anti-Patterns** - Common mistakes to avoid (theme-specific)
9. **ui-ux-pro-max Integration** - Prompt templates for code generation
10. **CSS Implementation** - Link to Tailwind CSS theme file

## How to Use Themes

### 1. Select Theme (Project Setup)

At the start of a project, choose the appropriate theme based on the decision tree above.

Document your choice in:
- Project README
- Feature specs (WF-XXX, COMP-XXX, INT-XXX)
- ui-ux-pro-max prompts

**Example:**
```markdown
## Project: Customer Dashboard
**Theme:** ERP/Dashboard
**Rationale:** Data-heavy application requiring efficient information display
```

### 2. Reference Theme in Design Specs

**Wireframes (WF-XXX):**
```markdown
## Metadata
- Theme: erp
- Colors: Blue primary (#1E40AF), Amber accents (#F59E0B)
```

**Component Specs (COMP-XXX):**
```markdown
## Theme Reference
- Theme: Corporate
- Follow corporate.md specifications
- Use Poppins + Open Sans typography
- Apply trust-focused visual style
```

**Interaction Diagrams (INT-XXX):**
```markdown
## Animation References
- Theme: MDS
- Entry: animate-reveal (1s)
- Scroll: scroll-reveal (0.6s)
```

### 3. Integrate with ui-ux-pro-max

When invoking ui-ux-pro-max to generate code, always include theme constraints:

**Template:**
```
Generate [component name] using [theme name] theme:

**Theme Constraints:**
- Colors: [reference theme color palette]
- Typography: [reference theme fonts]
- Spacing: [reference theme spacing scale]
- Animations: [reference theme animation system]
- Anti-patterns to avoid: [reference theme anti-patterns]

[Additional requirements...]
```

**Example (Corporate Theme):**
```
Generate a navigation component using Corporate theme:

**Theme Constraints:**
- Colors: Trust Teal (#0F766E) primary, Professional Blue (#0369A1) CTA
- Typography: Poppins headings, Open Sans body
- Style: Professional, trust-focused, mega menu for solutions
- Anti-patterns to avoid: No playful animations, keep hierarchy clear

Requirements:
- Logo left, main menu center, "Contact Sales" CTA right
- Mega menu with industry/solution categories
- Mobile: Hamburger menu
```

### 4. Apply CSS Theme

In your codebase, apply the corresponding CSS file:

**Option 1: Replace globals.css**
```bash
cp codebase-framework/themes/[theme-name].css src/app/globals.css
```

**Option 2: Import theme**
```css
/* src/app/globals.css */
@import '../../../codebase-framework/themes/mds.css';
```

## Theme Constraints

### MDS Theme Constraints
```
Colors: Magenta (#bd1874) primary, Teal (#004d6c) secondary
Typography: Inter font family
Spacing: 4px base unit (1, 2, 4, 6, 8, 12, 16)
Style: Modern, bold, energetic
Animations: reveal, scroll-reveal, beams (1s entry, 400ms interactions)
```

### Corporate Theme Constraints
```
Colors: Trust Teal (#0F766E), Professional Blue (#0369A1)
Typography: Poppins headings, Open Sans body
Spacing: Conservative, breathing room
Style: Professional, trust & authority
Animations: Subtle (200-300ms), badge hovers, stat reveals
Anti-patterns: No playful design, no hidden credentials, clear hierarchy
```

### Ecommerce Theme Constraints
```
Colors: Gold Trust (#F59E0B), Purple Tech (#8B5CF6)
Typography: Rubik headings, Nunito Sans body
Spacing: Large sections (48px+ gaps)
Style: Vibrant, bold, high contrast
Animations: Quick (200-300ms), color shifts, product hovers
Anti-patterns: Show costs early, max 3 checkout steps, enable filtering
```

### ERP Theme Constraints
```
Colors: Blue Data (#1E40AF), Amber Highlights (#F59E0B)
Typography: Fira Code headings (monospace), Fira Sans body
Spacing: Minimal padding, space-efficient
Style: Data-dense, functional, grid-based
Animations: Quick tooltips (150ms), row highlights, chart zoom
Anti-patterns: Don't overload, provide filters, show hierarchy clearly
```

## Creating New Themes

If none of the existing themes fit your project needs, you can create a custom theme.

### Process:

1. **Copy Template**
   ```bash
   cp design-framework/themes/template.md design-framework/themes/[new-theme-name].md
   ```

2. **Use ui-ux-pro-max for Theme Generation**
   ```bash
   cd /path/to/ui-ux-pro-max/skill
   python3 scripts/search.py "[project type] [keywords]" --design-system -p "Theme Name"
   ```

3. **Fill in Theme Specification**
   - Define color palette (use ui-ux-pro-max suggestions)
   - Choose typography (Google Fonts pairings)
   - Define spacing scale (4px or 8px base)
   - Create animation system (signature animations)
   - Document visual style
   - List component defaults
   - **Identify anti-patterns** specific to this category

4. **Create CSS Implementation**
   ```bash
   # Create theme CSS file in codebase-framework
   touch codebase-framework/themes/[new-theme-name].css
   ```

5. **Document in Catalog**
   - Add to table in this README
   - Update decision tree if needed
   - Add to integration plan documentation

## Theme Switching

### Single Theme per Project (Recommended)

Choose one theme for the entire project to maintain visual consistency.

### Multi-Theme Projects (Advanced)

If your project requires different themes for different sections:

1. **Define Theme Boundaries**
   ```
   /marketing → MDS theme (brand-focused)
   /dashboard → ERP theme (data-focused)
   /shop → Ecommerce theme (conversion-focused)
   ```

2. **Use CSS Scope**
   ```css
   /* Marketing pages */
   .theme-mds { @import 'mds.css'; }

   /* Dashboard pages */
   .theme-erp { @import 'erp.css'; }
   ```

3. **Document Clearly**
   - Explain why multiple themes are needed
   - Define clear boundaries
   - Ensure transitions are intentional, not accidental

## Theme Evolution

Themes can evolve over time based on:
- User feedback
- New design trends
- ui-ux-pro-max suggestions
- Project needs

### Update Process:

1. Propose changes to theme specification file
2. Get approval from product owner
3. Update CSS implementation
4. Update documentation
5. Communicate changes to team

## Resources

- **Theme Files:** `design-framework/themes/*.md`
- **CSS Implementations:** `codebase-framework/themes/*.css`
- **Integration Guide:** `design-framework/UI_UX_PROMAX_INTEGRATION.md`
- **Full Plan:** `documentation/design-framework-uiux-promax-integration-plan.md`
- **ui-ux-pro-max Skill:** `~/.claude/plugins/cache/ui-ux-pro-max-skill/`

## Quick Reference

| Need | Action |
|------|--------|
| Choose theme | Review decision tree above |
| Apply theme to specs | Add "Theme: [name]" to WF/COMP/INT docs |
| Generate code | Include theme constraints in ui-ux-pro-max prompt |
| Apply CSS | Copy theme file to globals.css or import |
| Create new theme | Copy template.md, use ui-ux-pro-max for generation |
| Switch themes | Document boundaries, use CSS scope |

---

**Last Updated:** 2026-01-31
**Maintained By:** Design Framework Team
