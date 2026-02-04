# Component Specification: Create Listing (Sale)

**Component ID:** COMP-001
**Component Name:** Create Listing Form (Sale)
**Wireframe ID(s):** WF-001
**Story ID(s):** ST-001
**Acceptance Criteria IDs:** AC-001, AC-002, AC-003, AC-004, AC-005, AC-006, AC-008, AC-009, AC-010, AC-011
**Component Type:** Form
**Theme Reference:** mds
**Theme File:** ../../../design-framework/themes/mds.md
**Created:** 2026-02-03
**Last Updated:** 2026-02-03

---

## ui-ux-pro-max Prompt

Generate Create Listing Form (Sale) component using MDS theme:

**Pattern:** Form Pattern (form-patterns.md)

**Theme Constraints:**
- Colors: Primary Magenta (#bd1874), Secondary Teal (#004d6c), Accent Teal (#14b8a6)
- Typography: Inter for headings/body, JetBrains Mono for code
- Spacing: 4px base unit, forms use p-6 (24px) container, inputs gap-4 (16px)
- Animations: Form entry uses animate-reveal (1s), button hover 200ms transition
- Style: Modern, bold, energetic with reveal animations on mount

**Anti-Patterns to Avoid:**
- No dense information without hierarchy
- No mixing with generic blue/gray buttons
- avoid simple alerts if custom validation UI can be used

**Requirements:**
- Layout: Max-width 800px centrered. Card based layout for sections. Grid for photos.
- Elements: Title (text), Type (select), Condition (chips), Price (number currency), Quantity (number), Location (autocomplete), Description (textarea), Photos (upload zone + grid).
- States: Default, Loading (submitting), Error (validation inline), Success (redirect).
- Interactions: Drag & Drop photos, remove photo, validate on blur.
- Validation: Zod schema. Required fields. Price > 0.
- Accessibility: ARIA labels for inputs, keyboard nav for photo grid delete buttons.

**ShadCN Components:**
- Form, FormField, FormItem, FormLabel, FormControl, FormMessage
- Input, Select, Textarea
- Button (primary, outline)
- Card, CardContent
- Badge (for chips)

**Implementation Notes:**
- Use react-hook-form + zod.
- Mock the file upload (no actual server). Just store object URLs.

---

## 1. Component Overview

### Purpose
Allows sellers to list a container for fixed-price sale.

### Context
Accessed via "Sell" navigation or "Create Listing" button.

### User Interaction
User fills out container details, uploads photos, and publishes.

---

## 2. Component Structure

### Layout
**Container:**
- Max-width: 800px (centered)
- Padding: p-6
- Gap: space-y-8

### Responsive Behavior
**Mobile:**
- Single column, full width inputs.
**Desktop:**
- Card groupings (Basic Info, Pricing, Media).

---

## 3. UI Elements & ShadCN Components

### Header
**Element ID:** COMP-001-EL-001
**ShadCN Component:** Typography (H1)
**Content:** "Create New Listing"

### Basic Info Card
**Element ID:** COMP-001-EL-002
**ShadCN Component:** Card

### Title Input
**Element ID:** COMP-001-EL-003
**ShadCN Component:** Input
**Props:** placeholder="e.g. 20ft Dry Container - Good Condition"
**Validation:** Required, Min 10 chars.

### Type Select
**Element ID:** COMP-001-EL-004
**ShadCN Component:** Select
**Options:** 20ft Standard, 40ft Standard, 40ft High Cube, Refrigerated
**Validation:** Required.

### Condition Chips
**Element ID:** COMP-001-EL-005
**ShadCN Component:** RadioGroup (styled as chips) or custom Badge toggle
**Options:** New, Used - A, Used - B, Damaged
**Validation:** Required.

### Price Input
**Element ID:** COMP-001-EL-006
**ShadCN Component:** Input (type="number")
**Props:** startAdornment="$"
**Validation:** Required, > 0.

### Photo Upload
**Element ID:** COMP-001-EL-007
**ShadCN Component:** Custom Dropzone (using Input type=file hidden)
**States:** DragActive, Default, HasFiles.

### Publish Button
**Element ID:** COMP-001-EL-008
**ShadCN Component:** Button
**Variant:** default (Magenta)
**States:** Loading (spinner)

---

## 5. Component States

### Default
Form empty or pre-filled if editing (future).

### Loading
Submitting form - disable all inputs, show spinner in button.

### Error
Validation errors shown below fields (FormMessage).

---

## 10. Traceability

| Wireframe Element | Wireframe ID | Component Spec | Element ID |
|-------------------|--------------|----------------|------------|
| Title Input       | WF-001       | Title Input    | COMP-001-EL-003 |
| Type Select       | WF-001       | Type Select    | COMP-001-EL-004 |
| Publish Button    | WF-001       | Publish Button | COMP-001-EL-008 |
