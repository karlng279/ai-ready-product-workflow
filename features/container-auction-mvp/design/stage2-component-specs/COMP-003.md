# Component Specification: Listings Dashboard

**Component ID:** COMP-003
**Component Name:** Seller Listings Dashboard
**Wireframe ID(s):** WF-003
**Story ID(s):** ST-003
**Component Type:** Table
**Theme Reference:** mds
**Theme File:** ../../../design-framework/themes/mds.md

---

## ui-ux-pro-max Prompt

Generate Listing Dashboard component using MDS theme:

**Pattern:** Data Table Pattern

**Theme Constraints:**
- Colors: Teal headers, white body, magenta hover/actions.
- Typography: Inter
- Spacing: Compact table rows (h-12).

**Requirements:**
- Layout: Header with "Create" button dropdown. Tabs for filters. Main Table.
- Table Columns: Image (thumbnail), Title, Type, Price/Current Bid, Status (Badge), Actions (Edit/View).
- Tabs: All, Sales, Auctions, Drafts.
- Empty State: "No listings found" with CTA "Create your first listing".

**ShadCN Components:**
- Table (Header, Body, Row, Cell)
- Tabs, TabsList, TabsTrigger
- DropdownMenu (for Create button)
- Badge (variants: outline, secondary, destructive)
- Button (ghost for actions)

---

## 4. Data Table Configuration

### Columns
1. **Image**: Accessor `image` (Cell: `<img src={...} className="h-10 w-10 object-cover rounded" />`)
2. **Title**: Accessor `title` (Sortable)
3. **Type**: Accessor `type` (Sale/Auction)
4. **Price**: Accessor `price` (Cell: Formatting currency)
5. **Status**: Accessor `status` (Cell: Badge - Active=green, Draft=gray, Ended=red)
6. **Actions**: Menu (Edit, Delete, View)

---

## 5. States

### Empty State
**Trigger:** No data in list.
**UI:** Icon (Box), Text "You have no listings", Button "Create Listing".

---

## 10. Traceability

| Wireframe Element | Wireframe ID | Component Spec  | Element ID |
|-------------------|--------------|-----------------|------------|
| Table             | WF-003       | Listings Table  | COMP-003-EL-001|
| Tabs              | WF-003       | Filter Tabs     | COMP-003-EL-002|
