# Design Framework

## Overview

The **Design Framework** provides a complete, text-based design system for creating UI/UX specifications without visual design tools. It bridges the gap between Product Owner specifications and code implementation.

**Philosophy:** Design through text and ASCII art, leverage AI assistance, maintain traceability from requirements to implementation.

**Version:** 2.0.0 - Multi-Theme System with ui-ux-pro-max Integration

---

## Why This Framework?

- **No design tools required:** Uses text descriptions and ASCII wireframes
- **AI-friendly:** Optimized for AI-assisted design work with ui-ux-pro-max integration
- **Multi-theme support:** 4 production-ready themes (MDS, Corporate, Ecommerce, ERP)
- **Complete traceability:** Links wireframes → components → interactions → code
- **ShadCN UI integration:** Built around ShadCN UI component library
- **Tanstack Table support:** Comprehensive table specifications
- **Accessible by default:** WCAG AA compliance built into design rules
- **AI-powered code generation:** Ready-to-use prompts for ui-ux-pro-max skill

---

## Framework Structure

```
design-framework/
├── README.md                      # This file
├── QUICK_START.md                 # Quick start guide
├── design-workflow.md             # Complete workflow guide
├── UI_UX_PROMAX_INTEGRATION.md    # ui-ux-pro-max integration guide
│
├── themes/                        # Theme catalog (NEW in v2.0)
│   ├── README.md                  # Theme selection guide
│   ├── template.md                # Blank theme template
│   ├── mds.md                     # MDS theme (DEFAULT)
│   ├── corporate.md               # Corporate/B2B theme
│   ├── ecommerce.md               # Ecommerce/Retail theme
│   └── erp.md                     # ERP/Dashboard theme
│
├── design-rules/                  # Universal design standards
│   ├── README.md                  # Overview of universal vs theme-specific rules
│   ├── accessibility.md           # WCAG AA/AAA compliance (universal)
│   ├── responsive.md              # Breakpoints, mobile-first (universal)
│   ├── naming-conventions.md      # File, component naming (universal)
│   └── code-standards.md          # TypeScript, component patterns (universal)
│
├── stage1-wireframes/             # Text + ASCII wireframes
│   ├── rules.md
│   ├── template-text-wireframe.md # (Updated with theme support)
│   ├── template-ascii-wireframe.md # (Updated with theme support)
│   ├── examples.md
│   ├── prompts.md
│   └── quality-gate.md
│
├── stage2-component-specs/        # ShadCN + Tanstack Table specs
│   ├── rules.md
│   ├── shadcn-component-catalog.md
│   ├── tanstack-table-reference.md
│   ├── template-component-spec.md # (Updated with ui-ux-pro-max prompts)
│   ├── template-table-spec.md     # (Updated with ui-ux-pro-max prompts)
│   ├── examples.md
│   ├── prompts.md
│   └── quality-gate.md
│
├── stage3-interactions/           # State diagrams & flows
│   ├── rules.md
│   ├── template-state-diagram.md
│   ├── template-interaction-flow.md # (Updated with theme animations)
│   ├── examples.md
│   ├── prompts.md
│   └── quality-gate.md
│
├── templates/                     # Reusable wireframe templates
│   ├── form-layout-template.md
│   ├── list-view-template.md
│   ├── detail-view-template.md
│   ├── dashboard-template.md
│   └── modal-template.md
│
└── patterns/                      # Common UI patterns
    ├── README.md                  # (Updated with ui-ux-pro-max prompts)
    ├── navigation-patterns.md
    ├── form-patterns.md
    ├── feedback-patterns.md
    ├── data-display-patterns.md
    └── responsive-patterns.md
```

---

## Theme Selection (Step 0)

**Before starting the design process, choose a theme from the catalog:**

### Available Themes

1. **MDS Theme (Default)** - Modern, bold, brand-focused
   - Colors: Magenta (#bd1874) primary, Teal (#004d6c) secondary
   - Use case: Brand-focused applications, marketing sites, hero sections
   - [Full spec](themes/mds.md)

2. **Corporate Theme** - Professional, trust-focused, enterprise
   - Colors: Trust Teal (#0F766E) primary, Professional Blue (#0369A1) CTA
   - Use case: B2B platforms, professional services, enterprise gateways
   - [Full spec](themes/corporate.md)

3. **Ecommerce Theme** - Vibrant, conversion-optimized, engaging
   - Colors: Gold Trust (#F59E0B) primary, Purple Tech (#8B5CF6) CTA
   - Use case: Online stores, product catalogs, checkout flows
   - [Full spec](themes/ecommerce.md)

4. **ERP Theme** - Data-dense, efficient, dashboard-focused
   - Colors: Blue Data (#1E40AF) primary, Amber Highlights (#F59E0B) CTA
   - Use case: Business intelligence, admin dashboards, analytics tools
   - [Full spec](themes/erp.md)

**See [themes/README.md](themes/README.md) for complete theme selection guide.**

---

## Three-Stage Design Process

### Stage 1: Wireframes (Text + ASCII)

**Input:** User Story Details (`usd/*.md`) with Acceptance Criteria
**Output:** Wireframes (WF-XXX) with theme reference

**Purpose:** Translate acceptance criteria into visual layout using text descriptions and ASCII art, applying selected theme constraints.

**Deliverables:**
- Text description of layout and UI elements
- ASCII wireframes (desktop, tablet, mobile)
- Component list (what ShadCN components needed)
- AC mapping (which wireframe elements address which ACs)

**Example:**
```
WF-001: Login Form
- Email input
- Password input
- Submit button
- Remember me checkbox

ASCII:
+---------------------------+
| Email                     |
| <Input_________________>  |
| Password                  |
| <Input_________________>  |
| [×] Remember me           |
| [Sign In]                 |
+---------------------------+
```

**Templates:** form-layout, list-view, detail-view, dashboard, modal

**Theme Integration:** Each wireframe references the selected theme for color, typography, and layout guidance.

**Documentation:** [stage1-wireframes/](stage1-wireframes/)

---

### Stage 2: Component Specifications (ShadCN + Tanstack Table)

**Input:** Approved wireframes (WF-XXX)
**Output:** Component specs (COMP-XXX), Table specs (TBL-XXX) with ui-ux-pro-max prompts

**Purpose:** Define which ShadCN components to use and how to configure them. For tables, provide full Tanstack Table configuration. Each spec includes a ready-to-use ui-ux-pro-max prompt for code generation.

**Deliverables:**
- Component specs with ShadCN component names, variants, props, states
- Table specs with complete column definitions, sorting, filtering, pagination
- Validation rules (for forms)
- Accessibility specifications
- Design rules application

**Example:**
```
COMP-001: Login Form
Theme Reference: mds

ui-ux-pro-max Prompt:
Generate Login Form component using MDS theme:
- Pattern: Form Pattern (form-patterns.md)
- Theme Constraints: Magenta primary, Teal secondary, Inter font
- Anti-Patterns: No generic error messages, no missing validation
- Requirements: Email input, password input, submit button
- ShadCN Components: Card, Input, Button, Form

Element 1: Email Input
- Component: Input (ShadCN)
- Variant: default
- Size: default (h-10)
- Props: type="email", required=true
- States: default, focus, error
- Validation: Required, email format
```

**ui-ux-pro-max Integration:** Each component spec includes a prompt template for generating implementation code with theme constraints.

**Simple Component References:** No code snippets, just component names and variants

**Full Table Configurations:** Complete Tanstack Table setup with all options

**Documentation:** [stage2-component-specs/](stage2-component-specs/)

---

### Stage 3: Interactions (State Diagrams)

**Input:** Approved component specs (COMP-XXX)
**Output:** Interaction specs (INT-XXX) with theme animation constraints

**Purpose:** Document how components behave, state transitions, user flows using ASCII state diagrams. Each interaction references theme-specific animation standards.

**Deliverables:**
- ASCII state diagrams showing all states and transitions
- State definitions (what each state means)
- Transition definitions (triggers, conditions, actions)
- User flows (happy path + alternatives)
- Edge cases and error scenarios
- API integration (if applicable)

**Example:**
```
INT-001: Login Form Submission

State Diagram:
→ [Idle] --submit--> [Submitting] --success--> [Success]
                          |
                          +--error--> [Error]
```

**Format:** State diagrams (Format B) using ASCII art

**Documentation:** [stage3-interactions/](stage3-interactions/)

---

## Design Rules (Foundation)

**Version 2.0 Change:** Design rules are now split into **universal standards** (apply to all themes) and **theme-specific rules** (defined per theme).

### Universal Standards (design-rules/)

These apply to ALL themes and ALL projects:

1. **Accessibility:** WCAG AA/AAA compliance, keyboard nav, screen readers, ARIA patterns, reduced motion
2. **Responsive Design:** Breakpoints (375px, 768px, 1024px, 1440px), mobile-first, touch targets
3. **Naming Conventions:** Component naming (PascalCase), file naming (kebab-case), directory structure
4. **Code Standards:** TypeScript patterns, prop interfaces, component composition, error handling

**Documentation:** [design-rules/](design-rules/)

### Theme-Specific Rules (themes/)

These vary by selected theme:

1. **Color System:** Primary, secondary, accent colors (defined per theme)
2. **Typography:** Font families, sizes, weights (defined per theme)
3. **Spacing System:** Base unit, spacing scale (defined per theme)
4. **Animation System:** Entry animations, hover effects, timing (defined per theme)
5. **Visual Style:** Component defaults, layout patterns (defined per theme)
6. **Anti-Patterns:** Theme-specific patterns to avoid (defined per theme)

**Documentation:** [themes/](themes/)

**All wireframes, component specs, and interactions must follow universal standards + selected theme rules.**

---

## UI Libraries

### ShadCN UI

**Component library** built on Radix UI + Tailwind CSS

**Why ShadCN:**
- Copy-paste components (not npm dependency)
- Full customization control
- Built on solid foundations (Radix + Tailwind)
- Excellent accessibility
- TypeScript support

**Reference:** [shadcn-component-catalog.md](stage2-component-specs/shadcn-component-catalog.md)

**Official Docs:** https://ui.shadcn.com

---

### Tanstack Table

**Headless table library** for complex data tables

**Why Tanstack Table:**
- Headless (full UI control)
- Sorting, filtering, pagination built-in
- Row selection, column visibility
- Excellent performance
- Framework agnostic

**Reference:** [tanstack-table-reference.md](stage2-component-specs/tanstack-table-reference.md)

**Official Docs:** https://tanstack.com/table

---

## Traceability System

**ID System:**
- `WF-XXX` - Wireframes
- `COMP-XXX` - Component specs
- `TBL-XXX` - Table specs
- `INT-XXX` - Interactions
- `AC-XXX` - Acceptance criteria (from USD)

**Mapping:**
```
Acceptance Criteria (AC-XXX)
  ↓
Wireframes (WF-XXX)
  ↓
Component Specs (COMP-XXX)
  ↓
Interactions (INT-XXX)
  ↓
Code Implementation
  ↓
Test Cases (UAT → Tests)
```

**Every design artifact must map back to acceptance criteria.**

---

## Quality Gates

Each stage has quality gates that must pass before proceeding:

- **Stage 1:** [Wireframes Quality Gate](stage1-wireframes/quality-gate.md)
- **Stage 2:** [Component Specs Quality Gate](stage2-component-specs/quality-gate.md)
- **Stage 3:** [Interactions Quality Gate](stage3-interactions/quality-gate.md)

**No stage is complete until it passes its quality gate.**

---

## AI Assistance & ui-ux-pro-max Integration

### ui-ux-pro-max Skill (Recommended)

The framework is optimized for the **ui-ux-pro-max** skill, which generates production-ready code from design specs.

**Integration Guide:** [UI_UX_PROMAX_INTEGRATION.md](UI_UX_PROMAX_INTEGRATION.md)

**Workflow:**
1. Create component spec with theme reference
2. Fill ui-ux-pro-max prompt template (included in spec)
3. Invoke `/ui-ux-pro-max` with filled prompt
4. Generated code follows theme constraints automatically
5. Validate against component spec requirements

**Benefits:**
- Theme-aware code generation
- Consistent styling across components
- Built-in accessibility compliance
- ShadCN UI component integration

### Traditional AI Prompts

Each stage includes AI prompts for generating specifications:

- **Wireframes:** [stage1-wireframes/prompts.md](stage1-wireframes/prompts.md)
- **Component Specs:** [stage2-component-specs/prompts.md](stage2-component-specs/prompts.md)
- **Interactions:** [stage3-interactions/prompts.md](stage3-interactions/prompts.md)

**Use AI to:**
- Generate wireframes from acceptance criteria
- Create component specs from wireframes
- Build state diagrams from component specs
- Validate against quality gates

---

## Templates & Patterns

### Templates (Reusable Wireframe Structures)

Pre-built wireframe templates for common screen types:

- **Form Layout:** [form-layout-template.md](templates/form-layout-template.md)
- **List View:** [list-view-template.md](templates/list-view-template.md)
- **Detail View:** [detail-view-template.md](templates/detail-view-template.md)
- **Dashboard:** [dashboard-template.md](templates/dashboard-template.md)
- **Modal/Dialog:** [modal-template.md](templates/modal-template.md)

**Use templates as starting points, customize as needed.**

### Patterns (Common UI Solutions)

Reference patterns for common UI challenges:

- **Navigation:** [navigation-patterns.md](patterns/navigation-patterns.md)
- **Forms:** [form-patterns.md](patterns/form-patterns.md)
- **Feedback:** [feedback-patterns.md](patterns/feedback-patterns.md)
- **Data Display:** [data-display-patterns.md](patterns/data-display-patterns.md)
- **Responsive:** [responsive-patterns.md](patterns/responsive-patterns.md)

**Patterns show best practices and proven solutions.**

---

## Getting Started

1. **Choose a theme:** [themes/README.md](themes/README.md) - Select from MDS (default), Corporate, Ecommerce, or ERP
2. **Learn ui-ux-pro-max integration:** [UI_UX_PROMAX_INTEGRATION.md](UI_UX_PROMAX_INTEGRATION.md)
3. **Read the workflow:** [design-workflow.md](design-workflow.md) or [QUICK_START.md](QUICK_START.md)
4. **Understand universal standards:** [design-rules/](design-rules/)
5. **Review examples:**
   - [Wireframe examples](stage1-wireframes/examples.md)
   - [Component spec examples](stage2-component-specs/examples.md)
   - [Interaction examples](stage3-interactions/examples.md)
6. **Use templates:** Pick appropriate template from [templates/](templates/)
7. **Follow the stages:** Theme Selection → Wireframes → Components → Interactions
8. **Pass quality gates:** Validate before moving to next stage

---

## Quick Start Example

**Scenario:** Design a login form for a B2B SaaS application

**Step 0: Theme Selection**
- Choose **Corporate theme** (professional, trust-focused)
- Reference: [themes/corporate.md](themes/corporate.md)

**Step 1: Wireframes (WF-001)**
- Use [form-layout-template.md](templates/form-layout-template.md)
- Add theme reference: `Theme: corporate`
- Draw ASCII wireframe
- List components needed: Input, Button, Checkbox
- Apply Corporate theme patterns (professional layout, trust colors)

**Step 2: Component Spec (COMP-001)**
- Map wireframe elements to ShadCN components
- Add theme reference: `Theme Reference: corporate`
- Fill ui-ux-pro-max prompt with Corporate theme constraints
- Specify variants: Button variant="default" with Professional Blue (#0369A1)
- Define validation rules for email and password
- Document all states: default, loading, error, success

**Step 3: Interaction Spec (INT-001)**
- Add theme animation constraints (Corporate: subtle 300ms transitions)
- Draw state diagram: Idle → Validating → Submitting → Success/Error
- Document transitions with Corporate animation timing
- Define error handling and recovery paths

**Step 4: Code Generation with ui-ux-pro-max**
- Copy ui-ux-pro-max prompt from COMP-001
- Invoke: `/ui-ux-pro-max` with filled prompt
- Generated code follows Corporate theme automatically

**Step 5: Quality Gates**
- Validate each stage passes before proceeding
- Verify theme constraints applied correctly

**Step 6: Handoff to Dev**
- All specs ready for implementation with theme-specific code

---

## Best Practices

1. **Mobile-First:** Always start with mobile wireframes, enhance for desktop
2. **Design Rules First:** Apply design system rules from the start
3. **Traceability:** Link every design element back to acceptance criteria
4. **Accessibility:** Build WCAG AA compliance into every spec
5. **Simple References:** Use component names, not code snippets
6. **Full Table Configs:** Provide complete Tanstack Table specifications
7. **State Diagrams:** Document all states, transitions, and error paths
8. **Quality Gates:** Don't skip validation checklists
9. **AI Assistance:** Leverage AI prompts to speed up work
10. **Iterate:** Design is iterative, refine based on feedback

---

## Integration with PO Framework

The Design Framework integrates seamlessly with the PO Framework:

**PO Framework Output → Design Framework Input:**
- USD files (`usd/*.md`) with Acceptance Criteria → Stage 1 Wireframes

**Design Framework Output → Code Implementation:**
- Interaction Specs → Developer Implementation
- UAT (User Acceptance Tests) → Test Cases

**Complete Flow:**
```
PRD → USM → USL → USD (AC) → Wireframes → Components → Interactions → Code → Tests
```

---

## Who Uses This Framework?

**Product Designers:** Create wireframes, component specs, interactions
**UI/UX Designers:** Define design system, create patterns
**Frontend Developers:** Implement based on complete specifications
**QA Engineers:** Generate test cases from interaction specs
**Product Owners:** Review designs against acceptance criteria
**AI Assistants:** Generate specs using provided prompts

---

## Support & Resources

**Framework Documentation:**
- [Design Workflow](design-workflow.md) - Complete workflow guide
- [Design Rules](design-rules/) - Design system rules
- [Stage 1](stage1-wireframes/) - Wireframes
- [Stage 2](stage2-component-specs/) - Component specs
- [Stage 3](stage3-interactions/) - Interactions

**External Resources:**
- [ShadCN UI Docs](https://ui.shadcn.com)
- [Tanstack Table Docs](https://tanstack.com/table)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## Contributing

To improve this framework:

1. Propose changes via issues or pull requests
2. Follow existing structure and conventions
3. Update all related documentation
4. Ensure examples remain accurate
5. Maintain consistency across all stages

---

**Ready to start designing?** Begin with [design-workflow.md](design-workflow.md) for a complete walkthrough.
