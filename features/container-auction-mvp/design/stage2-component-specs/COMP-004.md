# Component Specification: Marketplace Search

**Component ID:** COMP-004
**Component Name:** Marketplace Search & Browse
**Wireframe ID(s):** WF-004
**Story ID(s):** ST-004
**Component Type:** List/Grid
**Theme Reference:** mds
**Theme File:** ../../../design-framework/themes/mds.md

---

## ui-ux-pro-max Prompt

Generate Marketplace Search component using MDS theme:

**Pattern:** Browse/Search Pattern

**Theme Constraints:**
- Colors: White cards on Gray-50 bg, Magenta primaries.
- Animations: Staggered reveal for grid items.

**Requirements:**
- Layout: Sidebar (Filters) + Main Grid (Results).
- Filters: Price Range (Slider), Type (Checkbox), Condition (Checkbox).
- Search: Large input at top.
- Grid: Responsive (1 col mobile -> 4 col desktop).
- Card: Image, Title, Price, Location, Type Badge, "View" button.

**ShadCN Components:**
- Slider (Dual thumb for range)
- Checkbox
- Input (Search)
- Card (Result item)
- Button
- Badge

---

## 5. States

### Loading
Skeleton grid (8 items).

### Empty
"No containers found matching your search."

---

## 10. Traceability

| Wireframe Element | Wireframe ID | Component Spec |
|-------------------|--------------|----------------|
| Sidebar           | WF-004       | Filter Panel   |
| Grid              | WF-004       | Results Grid   |
