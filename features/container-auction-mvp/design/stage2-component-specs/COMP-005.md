# Component Specification: Auction Detail

**Component ID:** COMP-005
**Component Name:** Auction Detail & Bidding
**Wireframe ID(s):** WF-005
**Story ID(s):** ST-005
**Component Type:** Detail
**Theme Reference:** mds

---

## ui-ux-pro-max Prompt

Generate Auction Detail component using MDS theme:

**Pattern:** Product Detail + Bidding

**Requirements:**
- Layout: 2-column (Images Left, Info Right).
- Bidding Section (Sticky on mobile):
  - Current Bid (Large text).
  - Countdown Timer (Red if < 1h).
  - Bid Input (Step increments).
  - "Place Bid" button.
- History: List of recent bids (User***123 - $500 - 2m ago).
- Updates: Real-time updates (simulated for now).

**ShadCN Components:**
- Carousel (for images)
- Card (Bidding box)
- Input
- Button
- ScrollArea (Bid history)

---

## 10. Traceability

| Wireframe Element | Wireframe ID | Component Spec |
|-------------------|--------------|----------------|
| Bid Input         | WF-005       | Bid Form       |
| History           | WF-005       | History List   |
