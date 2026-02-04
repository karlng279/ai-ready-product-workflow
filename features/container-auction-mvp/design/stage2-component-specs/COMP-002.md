# Component Specification: Create Auction Form

**Component ID:** COMP-002
**Component Name:** Create Auction Form
**Wireframe ID(s):** WF-002
**Story ID(s):** ST-002
**Component Type:** Form
**Theme Reference:** mds
**Theme File:** ../../../design-framework/themes/mds.md

---

## ui-ux-pro-max Prompt

Generate Create Auction Form component using MDS theme:

**Pattern:** Form Pattern

**Theme Constraints:**
- Colors: Magenta (#bd1874), Teal (#004d6c)
- Typography: Inter/JetBrains Mono
- Spacing: 4px base
- Animations: Reveal entry

**Requirements:**
- Extends COMP-001 layout but replaces Pricing section with Auction Settings.
- Elements: Starting Bid (price), Reserve Price (price, optional), Duration (3/7/14 days toggle), End Date Preview (calculated).
- Logic: End Date = Current Date + Duration.
- Warning Modal: On submit, show "Auctions cannot be edited once live" (Dialog).

**ShadCN Components:**
- Form, Input
- ToggleGroup (for Duration)
- Dialog, DialogContent, DialogFooter (for warning)

---

## 3. UI Elements

### Starting Bid
**Element ID:** COMP-002-EL-001
**ShadCN Component:** Input (type="number")
**Label:** Starting Bid ($)

### Duration Select
**Element ID:** COMP-002-EL-002
**ShadCN Component:** ToggleGroup (single select)
**Options:** 3 Days, 7 Days, 14 Days

### End Date Preview
**Element ID:** COMP-002-EL-003
**ShadCN Component:** Typography (muted, sm)
**Content:** "Ends on [Formatted Date]"

### Start Auction Button
**Element ID:** COMP-002-EL-004
**ShadCN Component:** Button (default)

### Confirmation Modal
**Element ID:** COMP-002-EL-005
**ShadCN Component:** Dialog
**Content:** "Are you sure? Fees apply..."

---

## 10. Traceability

| Wireframe Element | Wireframe ID | Component Spec | Element ID |
|-------------------|--------------|----------------|------------|
| Duration          | WF-002       | Duration Select| COMP-002-EL-002|
