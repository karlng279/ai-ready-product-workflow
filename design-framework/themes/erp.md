# ERP/Dashboard Theme

**Status:** ✅ Production Ready
**Version:** 1.0.0
**Last Updated:** 2026-01-31
**Pattern:** Enterprise Gateway + Data-Dense Dashboard

---

## Overview

Data-dense, efficiency-focused theme optimized for enterprise resource planning, business intelligence dashboards, and data-heavy applications. Maximizes information density while maintaining usability.

**Best For:**
- Business intelligence dashboards
- ERP systems (finance, HR, inventory)
- Analytics platforms
- Admin panels
- Data warehousing interfaces
- Operational dashboards

**Not Recommended For:**
- Consumer e-commerce (use Ecommerce theme)
- Brand-focused marketing (use MDS theme)
- Simple informational sites (use Corporate or MDS theme)
- Mobile-first consumer apps

---

## Color Palette

### Brand Colors

| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| **Primary** | `#1E40AF` | `--color-blue-data` | Headers, primary data elements, navigation |
| **Secondary** | `#3B82F6` | `--color-blue-light` | Secondary elements, highlights |
| **CTA** | `#F59E0B` | `--color-amber-action` | Action buttons, important highlights |
| **Background** | `#F8FAFC` | `--color-bg-light` | Clean, light background |
| **Text** | `#1E3A8A` | `--color-text-data` | Dark blue text for data |

### Data Visualization Colors

| Token | Hex | Usage |
|-------|-----|-------|
| **Chart Blue** | `#3B82F6` | Primary chart color |
| **Chart Green** | `#10B981` | Positive trends, growth |
| **Chart Red** | `#EF4444` | Negative trends, alerts |
| **Chart Yellow** | `#F59E0B` | Warnings, neutral data |
| **Chart Purple** | `#8B5CF6` | Secondary data series |
| **Chart Teal** | `#14B8A6` | Tertiary data series |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| **Success** | `#10B981` | Successful operations, positive KPIs |
| **Warning** | `#F59E0B` | Warnings, pending states |
| **Error** | `#EF4444` | Errors, critical alerts |
| **Info** | `#3B82F6` | Information, help text |

### Neutrals

| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| **White** | `#FFFFFF` | `--color-white` | Cards, panels |
| **Gray 50** | `#F9FAFB` | `--color-gray-50` | Subtle backgrounds |
| **Gray 100** | `#F3F4F6` | `--color-gray-100` | Table row alt |
| **Gray 200** | `#E5E7EB` | `--color-gray-200` | Borders, dividers |
| **Gray 600** | `#4B5563` | `--color-gray-600` | Secondary text, labels |
| **Gray 900** | `#111827` | `--color-gray-900` | Primary text |

---

## Typography

### Font Families

```css
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Fira+Sans:wght@300;400;500;600;700&display=swap');
```

| Token | Family | Weights | Usage |
|-------|--------|---------|-------|
| **Headings** | Fira Code | 400, 500, 600, 700 | Metrics, KPI headings (monospace for data) |
| **Body** | Fira Sans | 300, 400, 500, 600, 700 | Labels, descriptions, UI text |

**Mood:** Dashboard, data, analytics, technical, precise

**Why Monospace for Headings?**
- Numbers align vertically in tables
- Precise, technical feel
- Easy to scan large datasets

### Type Scale

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-xs` | 0.75rem (12px) | 1rem (16px) | Table cells, compact labels |
| `text-sm` | 0.875rem (14px) | 1.25rem (20px) | UI labels, secondary text |
| `text-base` | 1rem (16px) | 1.5rem (24px) | Body text, descriptions |
| `text-lg` | 1.125rem (18px) | 1.75rem (28px) | Section labels |
| `text-xl` | 1.25rem (20px) | 1.75rem (28px) | Card headings |
| `text-2xl` | 1.5rem (24px) | 2rem (32px) | Panel titles |
| `text-3xl` | 1.875rem (30px) | 2.25rem (36px) | Page headings |
| `text-4xl` | 2.25rem (36px) | 2.5rem (40px) | Large KPIs |
| `text-5xl` | 3rem (48px) | 1 | Hero metrics |

### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `font-light` | 300 | Subtle text (Fira Sans only) |
| `font-normal` | 400 | Body text, table data |
| `font-medium` | 500 | Labels, emphasized text |
| `font-semibold` | 600 | Subheadings, important data |
| `font-bold` | 700 | Headings, KPI numbers |

---

## Spacing Scale

**Minimal padding, space-efficient layout for maximum data visibility:**

| Token | Size | Pixels | Usage |
|-------|------|--------|-------|
| `1` | 0.25rem | 4px | Tight spacing (table cells) |
| `2` | 0.5rem | 8px | Small gaps |
| `3` | 0.75rem | 12px | Compact spacing |
| `4` | 1rem | 16px | Standard spacing |
| `6` | 1.5rem | 24px | Medium gaps |
| `8` | 2rem | 32px | Panel spacing |
| `12` | 3rem | 48px | Section spacing |
| `16` | 4rem | 64px | Large sections |

**Philosophy:** Efficient use of space. Tables and data grids use tight spacing (p-2, p-3) while panels and sections use standard spacing for breathing room.

---

## Animation System

### Signature Animations

| Name | Effect | Duration | Easing | Usage |
|------|--------|----------|--------|-------|
| `row-highlight` | Background color transition | 150ms | ease-out | Table row hover |
| `chart-zoom` | Scale + shadow on click | 200ms | ease-out | Chart interaction |
| `tooltip-fade` | Fade in | 150ms | ease-out | Data point tooltips |
| `filter-slide` | Slide down + fade | 300ms | ease-out | Filter panel expansion |
| `spinner` | Rotate | 800ms | linear | Data loading |

### Timing Standards

| Speed | Duration | Usage |
|-------|----------|-------|
| **Instant** | 150ms | Row highlights, tooltips |
| **Quick** | 200ms | Chart interactions, button states |
| **Standard** | 300ms | Panel animations, filter changes |

**Note:** Minimal, functional animations. Focus is on data, not decoration.

### Animation Principles

1. **Functional Only:** Animations serve a purpose (feedback, loading, highlighting)
2. **Fast:** Quick animations don't interrupt workflow
3. **Subtle:** No distracting motion that takes focus from data
4. **Performance:** Smooth 60fps, especially on large datasets

---

## Visual Style

### Design Characteristics

- **Data-Dense Dashboard**
- **Multiple charts/widgets per view**
- **Data tables with sorting/filtering**
- **KPI cards prominently displayed**
- **Grid layout for space efficiency**
- **Minimal decorative elements**
- **Function over form**

### Key Visual Elements

**Dashboard Components:**
- KPI metric cards (large numbers, sparklines, trend indicators)
- Interactive charts (line, bar, pie, heatmap)
- Data tables (sortable, filterable, paginated)
- Filters (advanced multi-select, date ranges, saved sets)
- Breadcrumbs (navigation trail)
- Sidebar navigation (collapsible modules)

**Data Patterns:**
- Grid layouts (4 KPI cards across, charts in 2-column grid)
- Density controls (compact/comfortable/spacious views)
- Export buttons (CSV, Excel, PDF)
- Bulk actions (select rows, batch operations)
- Drill-down capability (click to see details)

### Effects & Treatments

**Shadows:**
```css
/* Minimal, functional shadows */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 2px 4px -1px rgb(0 0 0 / 0.08);
--shadow-lg: 0 4px 6px -1px rgb(0 0 0 / 0.1);
```

**Borders:**
- **Radius:** `rounded-md` (6px) for cards and panels
- **Style:** Clean borders with gray-200
- **Focus:** Blue focus rings for inputs and interactive elements

**Gradients:**
```css
/* Subtle gradient for headers */
background: linear-gradient(180deg, #1E40AF 0%, #3B82F6 100%);
```

---

## Component Defaults

### KPI Metric Cards

**Standard KPI Card:**
```tsx
<Card className="bg-white rounded-md border border-gray-200 p-6">
  {/* Metric */}
  <div className="flex items-baseline justify-between mb-2">
    <h3 className="text-sm font-medium text-gray-600">Total Revenue</h3>
    <span className="text-xs text-green-600 font-semibold flex items-center gap-1">
      <TrendingUp className="w-3 h-3" />
      +12.5%
    </span>
  </div>

  {/* Value */}
  <div className="text-4xl font-bold text-blue-data font-mono mb-3">
    $2.4M
  </div>

  {/* Sparkline (optional) */}
  <div className="h-12">
    <Sparkline data={revenueData} color="#3B82F6" />
  </div>
</Card>
```

**Alert KPI Card:**
```tsx
<Card className="bg-red-50 border-2 border-red-300 rounded-md p-6">
  <div className="flex items-center justify-between mb-2">
    <h3 className="text-sm font-semibold text-red-700">Critical Alerts</h3>
    <AlertCircle className="w-5 h-5 text-red-600" />
  </div>
  <div className="text-5xl font-bold text-red-600 font-mono">
    23
  </div>
  <p className="text-sm text-red-600 mt-2">Requires immediate attention</p>
</Card>
```

### Data Tables

**Standard Data Table:**
```tsx
<div className="bg-white rounded-md border border-gray-200 overflow-hidden">
  {/* Table Header with Filters */}
  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
    <h2 className="text-lg font-semibold text-gray-900">Transactions</h2>
    <div className="flex items-center gap-3">
      <Input
        type="search"
        placeholder="Search..."
        className="w-64"
      />
      <Button variant="outline" size="sm">
        <Filter className="w-4 h-4 mr-2" />
        Filters
      </Button>
      <Button variant="outline" size="sm">
        <Download className="w-4 h-4 mr-2" />
        Export
      </Button>
    </div>
  </div>

  {/* Table */}
  <Table>
    <TableHeader className="bg-gray-50">
      <TableRow>
        <TableHead className="w-12">
          <Checkbox />
        </TableHead>
        <TableHead className="cursor-pointer hover:text-blue-data">
          ID <ArrowUpDown className="inline w-4 h-4 ml-1" />
        </TableHead>
        <TableHead className="cursor-pointer hover:text-blue-data">
          Customer <ArrowUpDown className="inline w-4 h-4 ml-1" />
        </TableHead>
        <TableHead>Amount</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Date</TableHead>
        <TableHead className="text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow className="hover:bg-gray-50 transition-colors duration-150">
        <TableCell><Checkbox /></TableCell>
        <TableCell className="font-mono text-sm">#TXN-1234</TableCell>
        <TableCell>John Doe</TableCell>
        <TableCell className="font-mono font-semibold text-blue-data">$1,234.56</TableCell>
        <TableCell>
          <Badge className="bg-green-100 text-green-700 border-green-300">
            Completed
          </Badge>
        </TableCell>
        <TableCell className="text-sm text-gray-600">2026-01-31</TableCell>
        <TableCell className="text-right">
          <Button variant="ghost" size="sm">View</Button>
        </TableCell>
      </TableRow>
      {/* More rows... */}
    </TableBody>
  </Table>

  {/* Pagination */}
  <div className="p-4 border-t border-gray-200 flex items-center justify-between">
    <p className="text-sm text-gray-600">
      Showing <span className="font-medium">1-10</span> of <span className="font-medium">2,450</span> results
    </p>
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm" disabled>Previous</Button>
      <Button variant="outline" size="sm" className="bg-blue-data text-white">1</Button>
      <Button variant="outline" size="sm">2</Button>
      <Button variant="outline" size="sm">3</Button>
      <Button variant="outline" size="sm">Next</Button>
    </div>
  </div>
</div>
```

### Charts

**Chart Container:**
```tsx
<Card className="bg-white rounded-md border border-gray-200 p-6">
  {/* Header */}
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
    <div className="flex items-center gap-2">
      <Select defaultValue="7d">
        <SelectItem value="7d">Last 7 days</SelectItem>
        <SelectItem value="30d">Last 30 days</SelectItem>
        <SelectItem value="90d">Last 90 days</SelectItem>
      </Select>
      <Button variant="ghost" size="sm">
        <Download className="w-4 h-4" />
      </Button>
    </div>
  </div>

  {/* Chart (using Recharts, Chart.js, etc.) */}
  <div className="h-80">
    <LineChart data={chartData} />
  </div>
</Card>
```

### Filters

**Advanced Filter Panel:**
```tsx
<div className="bg-white rounded-md border border-gray-200 p-6">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
    <Button variant="ghost" size="sm" className="text-blue-data">
      Clear All
    </Button>
  </div>

  {/* Filter Groups */}
  <div className="space-y-6">
    {/* Date Range */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-2 block">
        Date Range
      </label>
      <DateRangePicker />
    </div>

    {/* Status */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-2 block">
        Status
      </label>
      <div className="space-y-2">
        <label className="flex items-center gap-2">
          <Checkbox />
          <span className="text-sm">Active (245)</span>
        </label>
        <label className="flex items-center gap-2">
          <Checkbox />
          <span className="text-sm">Pending (87)</span>
        </label>
        <label className="flex items-center gap-2">
          <Checkbox />
          <span className="text-sm">Inactive (12)</span>
        </label>
      </div>
    </div>

    {/* Amount Range */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-2 block">
        Amount Range
      </label>
      <div className="flex items-center gap-2">
        <Input type="number" placeholder="Min" className="w-24" />
        <span className="text-gray-500">to</span>
        <Input type="number" placeholder="Max" className="w-24" />
      </div>
    </div>
  </div>

  {/* Apply Button */}
  <Button className="w-full mt-6 bg-blue-data hover:bg-blue-800 text-white">
    Apply Filters
  </Button>
</div>
```

### Navigation

**Sidebar Navigation:**
```tsx
<aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
  {/* Logo */}
  <div className="p-6 border-b border-gray-200">
    <h1 className="text-xl font-bold text-blue-data">Dashboard</h1>
  </div>

  {/* Navigation */}
  <nav className="flex-1 overflow-y-auto p-4">
    <div className="space-y-1">
      <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md bg-blue-50 text-blue-data font-medium">
        <LayoutDashboard className="w-5 h-5" />
        Overview
      </a>
      <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
        <BarChart3 className="w-5 h-5" />
        Analytics
      </a>
      <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
        <Users className="w-5 h-5" />
        Customers
      </a>
      <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
        <Package className="w-5 h-5" />
        Products
      </a>
      <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
        <Settings className="w-5 h-5" />
        Settings
      </a>
    </div>
  </nav>

  {/* User Profile */}
  <div className="p-4 border-t border-gray-200">
    <div className="flex items-center gap-3">
      <Avatar className="w-10 h-10 bg-blue-data text-white">JD</Avatar>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
        <p className="text-xs text-gray-600 truncate">Admin</p>
      </div>
    </div>
  </div>
</aside>
```

---

## Anti-Patterns to Avoid

### 1. Information Overload

**Don't:**
- ❌ Showing all data at once without hierarchy
- ❌ Too many charts without clear purpose (chart for the sake of it)
- ❌ Cluttered dashboard with no focus
- ❌ Equal visual weight for all metrics

**Do:**
- ✅ Progressive disclosure (summary → detail views)
- ✅ Prioritize key metrics (top 3-5 KPIs prominently)
- ✅ Visual hierarchy (size, color, position)
- ✅ Allow users to customize dashboard

### 2. Poor Data Hierarchy

**Don't:**
- ❌ Equal visual weight for all data points
- ❌ No clear primary/secondary information
- ❌ Lack of visual grouping (related data scattered)

**Do:**
- ✅ Visual hierarchy: Size, color, position indicate importance
- ✅ Group related metrics together
- ✅ Use cards/panels to separate concerns

### 3. Lack of Contextual Help

**Don't:**
- ❌ Complex features without tooltips or help
- ❌ Cryptic abbreviations or codes (e.g., "MRR", "CAC" without explanation)
- ❌ No onboarding for new users
- ❌ Missing documentation links

**Do:**
- ✅ Tooltips on data points and metrics
- ✅ Info icons with explanations
- ✅ Inline help text for complex features
- ✅ "What is this?" links to documentation

### 4. Rigid Workflows

**Don't:**
- ❌ Forcing users through strict step-by-step processes
- ❌ No way to skip or reorder steps
- ❌ Preventing power users from using shortcuts
- ❌ Modal dialogs for every action

**Do:**
- ✅ Flexible task completion
- ✅ Keyboard shortcuts for common actions
- ✅ Batch operations for efficiency
- ✅ In-place editing where possible

### 5. Unclear Permissions

**Don't:**
- ❌ Users don't know what they can/cannot do
- ❌ Failed actions without explanation ("Access denied")
- ❌ Hidden features based on permissions (user doesn't know they exist)

**Do:**
- ✅ Disabled states with explanations ("Upgrade to Pro")
- ✅ Clear role indicators
- ✅ Permission-based UI (show what's available)

### 6. Design Elements to Avoid

**Don't:**
- ❌ Ornate design or decorative flourishes
- ❌ Playful animations that distract from data
- ❌ Missing filtering/search on data tables
- ❌ No bulk actions for repeated tasks
- ❌ Auto-play videos (data consumption concern)
- ❌ Tables that don't handle mobile responsively

**Do:**
- ✅ Function over form (minimal, purposeful design)
- ✅ Quick, functional animations only
- ✅ Powerful filtering and search
- ✅ Bulk actions (select all, batch delete, export selected)
- ✅ Responsive tables (horizontal scroll or card view on mobile)

### 7. Table/Data UX Issues

**Don't:**
- ❌ Tables overflow on mobile without horizontal scroll indicator
- ❌ No "No results" messaging with suggestions
- ❌ Missing autocomplete on search
- ❌ No multi-select for bulk operations
- ❌ Pagination without showing total count
- ❌ No way to adjust rows per page

**Do:**
- ✅ Responsive tables with horizontal scroll wrapper
- ✅ Empty states with helpful messaging ("No transactions found. Try adjusting filters.")
- ✅ Autocomplete/suggestions on search
- ✅ Checkbox column for multi-select
- ✅ Clear pagination ("Showing 1-10 of 2,450 results")
- ✅ Rows per page selector (10, 25, 50, 100)

### 8. Chart Accessibility Issues

**Don't:**
- ❌ Charts with no alt text or data table fallback
- ❌ Color-only differentiation (red/green without labels)
- ❌ No keyboard navigation for interactive charts
- ❌ Tiny touch targets on mobile charts

**Do:**
- ✅ Provide data table toggle for screen readers
- ✅ Use patterns/textures in addition to color
- ✅ Keyboard-accessible chart interactions
- ✅ Larger touch targets on mobile (min 44x44px)

---

## ui-ux-pro-max Integration

### Theme Constraint Template

When invoking ui-ux-pro-max, use this template:

```
Generate [component/page name] using ERP/Dashboard theme:

**Theme Constraints:**
- Colors: Blue Data (#1E40AF) primary, Amber (#F59E0B) for actions
- Typography: Fira Code headings (monospace for metrics), Fira Sans body
- Spacing: Minimal padding for density (p-2/p-3 for tables, p-6 for panels)
- Style: Data-dense, functional, grid-based, efficiency-focused
- Animations: Quick (150ms), subtle, functional only

**Anti-Patterns to Avoid:**
[Reference specific anti-patterns from above]

**Requirements:**
[List specific requirements here]
```

### Example Prompts

**Dashboard Overview:**
```
Generate an analytics dashboard overview using ERP theme:

**Theme Constraints:**
- Colors: Blue (#1E40AF) primary, Amber (#F59E0B) for highlights, semantic colors for trends
- Typography: Fira Code for metrics (text-4xl), Fira Sans for labels (text-sm)
- Layout: Grid of 4 KPI cards (4 columns), then 2 charts (2 columns), then data table
- Spacing: 24px gap between cards, 32px gap between sections
- Animations: Subtle hover on cards (150ms)

**Anti-Patterns to Avoid:**
- Don't overload (prioritize top 4 KPIs)
- Provide filtering and export options
- Show hierarchy clearly (KPIs > Charts > Table)

**Requirements:**
- 4 KPI Cards: Total Revenue, Active Users, Conversion Rate, Avg Order Value
- Each KPI: Large number (text-4xl font-mono), trend indicator (+/-%), sparkline
- 2 Charts: Revenue Trend (line chart), Top Products (bar chart)
- Chart features: Time range selector, export button
- Data Table: Recent transactions (ID, Customer, Amount, Status, Date, Actions)
- Table features: Sortable columns, search, pagination, export
- Responsive: 1 column on mobile, 2 on tablet, 4 on desktop
```

**Data Table with Advanced Filtering:**
```
Generate a data table with advanced filtering using ERP theme:

**Theme Constraints:**
- Colors: Blue headers, amber action buttons
- Typography: Fira Sans (text-sm for table), Fira Code for numbers
- Layout: Full-width table with fixed header, filter sidebar on left (collapsible)
- Spacing: Compact (p-2 cells, p-4 panels)
- Features: Sortable, filterable, paginated, bulk actions

**Anti-Patterns to Avoid:**
- Enable multi-facet filtering
- Provide bulk actions (select rows)
- Show result count and pagination clearly
- Responsive: horizontal scroll wrapper on mobile

**Requirements:**
- Table Columns: Checkbox, ID, Name, Email, Role, Status, Created Date, Actions
- Sortable: Click column header to sort (arrow indicator)
- Row Hover: bg-gray-50 transition
- Selected Row: bg-blue-50 with checkmark
- Filters Sidebar (collapsible):
  - Date range picker
  - Status multi-select checkboxes
  - Role dropdown
  - Search by name/email (autocomplete)
- Top Bar: Search input, "Filters" button, "Export" button, "Bulk Actions" dropdown
- Pagination: Showing X-Y of Z results, Previous/Next buttons, page numbers
- Empty State: "No results found. Try adjusting your filters."
```

**KPI Dashboard with Drill-Down:**
```
Generate a KPI dashboard with drill-down capability using ERP theme:

**Theme Constraints:**
- Colors: Blue for data, amber for alerts, green/red for trends
- Typography: Fira Code for all numbers (precise alignment)
- Layout: 3 levels - Summary (KPI cards) → Detail (charts) → Drill-down (modal/drawer)
- Animations: Click card → smooth transition to detail view (300ms)

**Anti-Patterns to Avoid:**
- Show hierarchy clearly (summary first)
- Provide contextual help (tooltips on metrics)
- Enable drill-down (click to see details)

**Requirements:**
- Level 1: KPI Cards Grid (4 columns)
  - Each card: Metric name, large number, trend (+/-%), sparkline, "View Details" link
  - Click card → navigate to detail view
- Level 2: Detail View (full-page chart + related metrics)
  - Large chart showing metric over time
  - Date range selector (7d, 30d, 90d, custom)
  - Related metrics in sidebar (3-4 related KPIs)
  - "Back to Overview" breadcrumb
- Level 3: Drill-Down (modal or drawer)
  - Click data point on chart → show detailed breakdown
  - Data table with granular data
  - Export option
  - Close button
```

---

## CSS Implementation

**File:** `codebase-framework/themes/erp.css`

```css
/* ERP/Dashboard Theme - Tailwind CSS Custom Theme */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Colors */
    --color-blue-data: #1E40AF;
    --color-blue-light: #3B82F6;
    --color-amber-action: #F59E0B;
    --color-bg-light: #F8FAFC;
    --color-text-data: #1E3A8A;

    /* Data Visualization */
    --color-chart-blue: #3B82F6;
    --color-chart-green: #10B981;
    --color-chart-red: #EF4444;
    --color-chart-yellow: #F59E0B;
    --color-chart-purple: #8B5CF6;
    --color-chart-teal: #14B8A6;

    /* Neutrals */
    --color-white: #FFFFFF;
    --color-gray-50: #F9FAFB;
    --color-gray-100: #F3F4F6;
    --color-gray-200: #E5E7EB;
    --color-gray-600: #4B5563;
    --color-gray-900: #111827;

    /* Typography */
    --font-heading: 'Fira Code', monospace;
    --font-body: 'Fira Sans', sans-serif;
  }

  body {
    @apply font-body text-base text-gray-900 bg-bg-light;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading font-semibold;
  }
}

@layer components {
  /* KPI Card */
  .kpi-card {
    @apply bg-white rounded-md border border-gray-200 p-6;
  }

  .kpi-card-alert {
    @apply bg-red-50 border-2 border-red-300 rounded-md p-6;
  }

  /* Data Table */
  .data-table {
    @apply bg-white rounded-md border border-gray-200 overflow-hidden;
  }

  .table-header {
    @apply bg-gray-50 font-medium text-gray-700;
  }

  .table-row-hover {
    @apply hover:bg-gray-50 transition-colors duration-150;
  }

  /* Filter Panel */
  .filter-panel {
    @apply bg-white rounded-md border border-gray-200 p-6;
  }

  /* Chart Container */
  .chart-container {
    @apply bg-white rounded-md border border-gray-200 p-6;
  }
}

@layer utilities {
  /* Custom Animations */
  @keyframes rowHighlight {
    from { background-color: transparent; }
    to { background-color: rgb(249 250 251); }
  }

  @keyframes tooltipFade {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes spinner {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .row-highlight:hover {
    animation: rowHighlight 150ms ease-out forwards;
  }

  .tooltip-fade {
    animation: tooltipFade 150ms ease-out;
  }

  .spinner {
    animation: spinner 800ms linear infinite;
  }

  /* Custom Colors */
  .text-blue-data { color: var(--color-blue-data); }
  .bg-blue-data { background-color: var(--color-blue-data); }
  .border-blue-data { border-color: var(--color-blue-data); }

  .text-amber-action { color: var(--color-amber-action); }
  .bg-amber-action { background-color: var(--color-amber-action); }

  .bg-blue-light { background-color: var(--color-blue-light); }
  .bg-bg-light { background-color: var(--color-bg-light); }
  .text-text-data { color: var(--color-text-data); }

  /* Chart Colors */
  .chart-blue { color: var(--color-chart-blue); }
  .chart-green { color: var(--color-chart-green); }
  .chart-red { color: var(--color-chart-red); }
  .chart-yellow { color: var(--color-chart-yellow); }
  .chart-purple { color: var(--color-chart-purple); }
  .chart-teal { color: var(--color-chart-teal); }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Usage Examples

See [Component Defaults](#component-defaults) section above for detailed code examples.

---

## Accessibility Compliance

### WCAG AA Standards (Minimum)

**Critical for ERP:** Many users will spend hours per day in these interfaces. Accessibility is essential.

- **Color Contrast:**
  - Blue Data (#1E40AF) on white: 9.7:1 ✅ AAA
  - Text Data (#1E3A8A) on white: 10.5:1 ✅ AAA
  - Gray 600 (#4B5563) on white: 7.0:1 ✅ AAA

- **Focus Indicators:** Blue ring (2px) on all interactive elements
- **Animation:** Respects `prefers-reduced-motion`
- **Keyboard Navigation:** ALL actions keyboard-accessible (critical for power users)
- **ARIA Labels:** Proper table markup, chart descriptions, filter labels
- **Screen Reader:** Data tables properly structured with headers

### Testing Checklist

- [ ] Test all keyboard shortcuts
- [ ] Verify table navigation with keyboard (Tab, Arrow keys)
- [ ] Test screen reader with data tables
- [ ] Validate chart accessibility (alt text, data table fallback)
- [ ] Test with `prefers-reduced-motion: reduce`
- [ ] Verify all filters keyboard-accessible
- [ ] Test bulk actions with keyboard
- [ ] Ensure tooltips accessible via keyboard

---

## Performance

**Targets:**
- ⚡ **Excellent** performance expected
- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices)
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- **Critical:** Data virtualization for large tables (10,000+ rows)

**Optimization Checklist:**
- [ ] Implement virtual scrolling for large tables (react-window, react-virtualized)
- [ ] Lazy load charts (render on viewport entry)
- [ ] Debounce search/filter inputs (300ms)
- [ ] Use memoization for expensive calculations
- [ ] Optimize chart libraries (tree-shaking, code splitting)
- [ ] Minimize bundle size (avoid large dependencies)
- [ ] Implement progressive loading (show summary first, details on demand)
- [ ] Cache API responses (React Query, SWR)

---

## Resources

- **Integration Guide:** [UI_UX_PROMAX_INTEGRATION.md](../UI_UX_PROMAX_INTEGRATION.md)
- **Full Plan:** [design-framework-uiux-promax-integration-plan.md](../../documentation/design-framework-uiux-promax-integration-plan.md)
- **Theme Catalog:** [README.md](./README.md)
- **CSS Implementation:** `codebase-framework/themes/erp.css`
- **Chart Libraries:** Recharts, Chart.js, D3.js
- **Table Libraries:** TanStack Table, AG Grid

---

**Theme Maintainer:** Design Framework Team
**Questions/Feedback:** Create an issue or update this document
