# Design Framework - Quick Start Guide

**Get from acceptance criteria to implementation-ready specs in 4 steps.**

---

## Prerequisites

- [✓] User Story Details (USD) with Acceptance Criteria complete
- [✓] Familiarity with ShadCN UI components
- [✓] Basic understanding of design systems

**Time:** 2-6 hours for a complete feature (simple form to complex dashboard)

---

## The 4-Step Process

```
Step 0: Choose Theme (5 minutes)
   ↓
Step 1: Create Wireframes (1-2 hours)
   ↓
Step 2: Create Component Specs (2-3 hours)
   ↓
Step 3: Create Interaction Specs (1-2 hours)
   ↓
Ready for ui-ux-pro-max Code Generation
```

---

## Step 0: Choose Your Theme

**Select one theme from the catalog:**

### MDS Theme (Default)
- **Style:** Modern, bold, brand-focused
- **Colors:** Magenta (#bd1874) + Teal (#004d6c)
- **Use for:** Marketing sites, hero sections, brand-focused apps
- **Spec:** [themes/mds.md](themes/mds.md)

### Corporate Theme
- **Style:** Professional, trust-focused, enterprise
- **Colors:** Trust Teal (#0F766E) + Professional Blue (#0369A1)
- **Use for:** B2B platforms, professional services, enterprise portals
- **Spec:** [themes/corporate.md](themes/corporate.md)

### Ecommerce Theme
- **Style:** Vibrant, conversion-optimized, engaging
- **Colors:** Gold Trust (#F59E0B) + Purple Tech (#8B5CF6)
- **Use for:** Online stores, product catalogs, checkout flows
- **Spec:** [themes/ecommerce.md](themes/ecommerce.md)

### ERP Theme
- **Style:** Data-dense, efficient, dashboard-focused
- **Colors:** Blue Data (#1E40AF) + Amber Highlights (#F59E0B)
- **Use for:** Business intelligence, admin dashboards, analytics
- **Spec:** [themes/erp.md](themes/erp.md)

**Decision Matrix:** [themes/README.md](themes/README.md)

---

## Step 1: Create Wireframes (WF-XXX)

**Goal:** Translate acceptance criteria into visual layout

### Process

1. **Read acceptance criteria** from USD file
2. **Pick a template:** [templates/](templates/)
   - Form layouts → `form-layout-template.md`
   - List/table views → `list-view-template.md`
   - Detail views → `detail-view-template.md`
   - Dashboards → `dashboard-template.md`
   - Modals → `modal-template.md`

3. **Create wireframe file:** Use [stage1-wireframes/template-text-wireframe.md](stage1-wireframes/template-text-wireframe.md)
   - Add metadata: WF-XXX, Story ID, AC IDs
   - **Add theme reference:** `Theme: [mds|corporate|ecommerce|erp]`
   - Write text description of layout
   - Draw ASCII wireframes (desktop, tablet, mobile)
   - List ShadCN components needed
   - Map elements to acceptance criteria

4. **Apply theme context:**
   - Reference theme file for color guidance
   - Apply theme-specific layout patterns
   - Use theme component defaults

5. **Validate:** [stage1-wireframes/quality-gate.md](stage1-wireframes/quality-gate.md)

### Example

```markdown
**Wireframe ID:** WF-001
**Theme:** corporate

## Theme Context
**Selected Theme:** Corporate
- Visual Style: Professional & trust-focused
- Color Approach: Trust teal with professional blue CTAs
- Pattern: Standard top navigation with mega menu

## ASCII Wireframe (Desktop)
+------------------------------------------------------------------+
| {Logo}  Solutions  Industries  Resources       [Contact Sales]  |
+------------------------------------------------------------------+
|                                                                  |
|                    +---------------------------+                 |
|                    | Sign In to Dashboard      |                 |
|                    |                           |                 |
|                    | Email *                   |                 |
|                    | <Input_________________> |                 |
|                    | Password *                |                 |
|                    | <Input_________________> |                 |
|                    | [Sign In_______________] |                 |
|                    +---------------------------+                 |
+------------------------------------------------------------------+
```

---

## Step 2: Create Component Specs (COMP-XXX)

**Goal:** Define ShadCN components and configurations + generate ui-ux-pro-max prompts

### Process

1. **Create component spec file:** Use [stage2-component-specs/template-component-spec.md](stage2-component-specs/template-component-spec.md)
   - Add metadata: COMP-XXX, Wireframe IDs, Story ID
   - **Add theme reference:** `Theme Reference: [theme-name]`

2. **Fill ui-ux-pro-max prompt section:**
   - Copy theme constraints from selected theme file
   - List anti-patterns to avoid (from theme file)
   - Specify requirements from sections below
   - List ShadCN components to use

3. **Map wireframe elements to ShadCN components:**
   - For each UI element: Component name, variant, size, props, states
   - Define validation rules (for forms)
   - Document all states (default, loading, error, success, empty)
   - Specify accessibility (ARIA, keyboard nav)

4. **Validate:** [stage2-component-specs/quality-gate.md](stage2-component-specs/quality-gate.md)

### Example

```markdown
**Component ID:** COMP-001
**Theme Reference:** corporate

## ui-ux-pro-max Prompt

Generate Login Form component using Corporate theme:

**Pattern:** Form Pattern (form-patterns.md)

**Theme Constraints:**
- Colors: Trust Teal (#0F766E) primary, Professional Blue (#0369A1) CTA
- Typography: Poppins (headings), Open Sans (body)
- Spacing: 8px base unit, 24px between sections
- Animations: Subtle 300ms transitions, minimal hover effects
- Style: Professional, organized, trust-building

**Anti-Patterns to Avoid:**
- No playful design elements
- No hidden credentials/certifications
- No generic stock imagery
- Consistent professional tone

**Requirements:**
- Layout: Centered card, max-width 400px
- Elements: Email input, password input, submit button
- States: Default, validating, submitting, success, error
- Validation: Required fields, email format, min 8 chars password
- Accessibility: WCAG AA, keyboard navigation, ARIA labels

**ShadCN Components:**
- Card, CardHeader, CardContent, Input, Button, Form, Label
```

---

## Step 3: Create Interaction Specs (INT-XXX)

**Goal:** Document behavior, state transitions, and flows

### Process

1. **Create interaction spec file:** Use [stage3-interactions/template-interaction-flow.md](stage3-interactions/template-interaction-flow.md)
   - Add metadata: INT-XXX, Component IDs, Story ID
   - **Add theme reference and animation constraints**

2. **Draw state diagram** using ASCII art:
   - All states (idle, loading, success, error, etc.)
   - All transitions (triggers, conditions, actions)
   - Use notation from [stage3-interactions/template-state-diagram.md](stage3-interactions/template-state-diagram.md)

3. **Define states and transitions:**
   - For each state: Description, UI appearance, available actions
   - For each transition: Trigger, condition, action, validation, error handling
   - Include theme-specific animation timing

4. **Document user flows:**
   - Happy path (primary flow)
   - Alternative paths (error scenarios)
   - Edge cases

5. **Validate:** [stage3-interactions/quality-gate.md](stage3-interactions/quality-gate.md)

### Example

```markdown
**Interaction ID:** INT-001
**Theme Reference:** corporate

## Theme Animation Constraints
**Animation Standards (Corporate theme):**
- Entry Animations: Subtle fade (300ms)
- Hover/Interaction: 200ms transitions, subtle shadow changes
- State Transitions: Smooth loading states, gentle error shakes

## State Diagram

→ +------------------+
  | Idle             |
  +------------------+
         |
         | submit [if valid] /call API
         v
  +------------------+
  | Submitting       |
  +------------------+
         |
    +----+----+
    |         |
 success    error
 /navigate  /show alert
    |         |
    v         v
+--------+ +------------------+
| Success| | Error            |
+--------+ +------------------+
   ⊗
```

---

## Step 4: Generate Code with ui-ux-pro-max

**Goal:** Generate implementation code from specs

### Process

1. **Open component spec** (COMP-XXX)
2. **Locate ui-ux-pro-max Prompt section**
3. **Fill in theme constraints** from theme file (copy exact values)
4. **Invoke ui-ux-pro-max:**
   ```
   /ui-ux-pro-max
   [Paste filled prompt here]
   ```

5. **Review generated code:**
   - Verify theme colors applied correctly
   - Check ShadCN components match spec
   - Validate all states implemented
   - Test accessibility features

6. **Iterate if needed:**
   - Adjust prompt for refinements
   - Add specific requirements
   - Regenerate code

### Example Workflow

```
1. Copy theme constraints from themes/corporate.md:
   - Colors: Trust Teal (#0F766E), Professional Blue (#0369A1)
   - Typography: Poppins headings, Open Sans body
   - Animations: 300ms subtle transitions

2. Fill ui-ux-pro-max prompt in COMP-001

3. Invoke: /ui-ux-pro-max [paste prompt]

4. Generated code includes:
   ✅ Corporate theme colors in Tailwind classes
   ✅ Poppins + Open Sans fonts
   ✅ 300ms transitions on hover
   ✅ Professional layout with trust elements
   ✅ All accessibility requirements

5. Validate against COMP-001 spec
```

---

## Example: Complete Flow (Login Form)

### Step 0: Theme Selection
**Choose:** Corporate theme (B2B SaaS application)

### Step 1: Wireframe (30 min)
- File: `wf-001-login-form.md`
- Theme: corporate
- Template: form-layout-template.md
- ASCII wireframe: Centered card with email, password, submit
- Components: Card, Input, Button
- ACs: AC-001 (email), AC-002 (password), AC-003 (submit)

### Step 2: Component Spec (1 hour)
- File: `comp-001-login-form.md`
- Theme Reference: corporate
- ui-ux-pro-max prompt filled with Corporate constraints
- Elements: 2 inputs (email, password), 1 button (submit)
- States: default, validating, submitting, success, error
- Validation: Required, email format, min 8 chars

### Step 3: Interaction Spec (45 min)
- File: `int-001-login-submission.md`
- Theme animations: Corporate 300ms transitions
- State diagram: Idle → Submitting → Success/Error
- API: POST /api/auth/login
- Error handling: Show alert, allow retry

### Step 4: Code Generation (15 min)
- Copy ui-ux-pro-max prompt from COMP-001
- Invoke `/ui-ux-pro-max` with filled prompt
- Generated code with Corporate theme
- Validate against spec
- **Total time: ~2.5 hours from AC to implementation-ready code**

---

## Tips for Success

1. **Always choose theme first** - Everything else depends on it
2. **Use templates** - Don't start from scratch
3. **Fill prompts completely** - Copy exact values from theme files
4. **Validate at each stage** - Use quality gates
5. **Maintain traceability** - Link back to acceptance criteria
6. **Leverage patterns** - Check [patterns/](patterns/) for common solutions
7. **Test accessibility** - Built into every stage
8. **Iterate with ui-ux-pro-max** - Regenerate code as specs evolve

---

## Common Workflows

### New Feature
1. Choose theme → 2. Wireframes → 3. Component specs → 4. Interactions → 5. Generate code

### Update Existing Feature
1. Find existing specs (WF, COMP, INT) → 2. Update specs with changes → 3. Regenerate code with ui-ux-pro-max

### Different Theme for Section
1. Choose alternate theme → 2. Create specs with new theme → 3. Generate code with new theme constraints

---

## Resources

### Documentation
- **Complete workflow:** [design-workflow.md](design-workflow.md)
- **ui-ux-pro-max integration:** [UI_UX_PROMAX_INTEGRATION.md](UI_UX_PROMAX_INTEGRATION.md)
- **Theme catalog:** [themes/README.md](themes/README.md)
- **Design rules:** [design-rules/](design-rules/)
- **Patterns:** [patterns/](patterns/)

### Templates
- **Wireframes:** [stage1-wireframes/template-text-wireframe.md](stage1-wireframes/template-text-wireframe.md)
- **Components:** [stage2-component-specs/template-component-spec.md](stage2-component-specs/template-component-spec.md)
- **Tables:** [stage2-component-specs/template-table-spec.md](stage2-component-specs/template-table-spec.md)
- **Interactions:** [stage3-interactions/template-interaction-flow.md](stage3-interactions/template-interaction-flow.md)

### Quality Gates
- **Stage 1:** [stage1-wireframes/quality-gate.md](stage1-wireframes/quality-gate.md)
- **Stage 2:** [stage2-component-specs/quality-gate.md](stage2-component-specs/quality-gate.md)
- **Stage 3:** [stage3-interactions/quality-gate.md](stage3-interactions/quality-gate.md)

---

## Need Help?

- **Theme selection unclear?** → [themes/README.md](themes/README.md)
- **Don't know which pattern to use?** → [patterns/README.md](patterns/README.md)
- **ui-ux-pro-max not generating correctly?** → [UI_UX_PROMAX_INTEGRATION.md](UI_UX_PROMAX_INTEGRATION.md)
- **Want detailed examples?** → [design-workflow.md](design-workflow.md)

---

**Ready to start?** Pick your theme and create your first wireframe!
