# AI-Ready Product Workflow — CLAUDE.md

## What This Repo Is
A proprietary AI-optimized product development framework.
Philosophy: structured inputs + AI-friendly formats = predictable, high-quality outputs.
Owner: Karl Nguyen © 2026. All rights reserved.

---

## Session Start Protocol
At the start of every session, ask the user: **"What is your role? (Product Manager / Designer / Developer / Solo Founder)"**
Then tailor your assistance to that role's workflow and focus areas.

---

## The 3-Framework System (Linear, Sequential)

```
PO Framework → Design Framework → Codebase Framework → Deployed MVP
```

### 1. PO Framework (`po-framework/`)
Translates product vision into testable specs. 5 stages:
| Stage | File | Description |
|-------|------|-------------|
| PRD | `prd.md` | Problem, goals, success metrics |
| USM | `usm.md` | User story map (high-level activities) |
| USL | `usl.md` | Prioritized story list (MoSCoW) |
| USD | `usd/*.md` | Per-story acceptance criteria — the validation source |
| UAT | `uat/*.md` | BDD (Given/When/Then) test scenarios |

Each stage has `rules.md`, `example.md`, `template.md`, `prompts.md`, `quality-gate.md`.

### 2. Design Framework (`design-framework/`)
Text-based UI/UX specs. No Figma needed. 3 stages:
| Stage | Artifact | Description |
|-------|----------|-------------|
| Wireframes | `WF-XXX` | ASCII layouts linked to USD ACs |
| Components | `COMP-XXX` | ShadCN UI component specs, props, states |
| Interactions | `INT-XXX` | ASCII state diagrams, user flows, error handling |

Theme system: MDS (Modern Design System) — `codebase-framework/themes/mds.css`

### 3. Codebase Framework (`codebase-framework/`)
Rapid MVP implementation. Tech stack:
- **Framework:** Next.js 14+ (App Router) + TypeScript
- **Styling:** TailwindCSS v4 + ShadCN UI
- **Tables:** TanStack Table
- **Forms:** React Hook Form + Zod
- **State:** React Context + useState (zero external dependencies)
- **Data:** Dummy JSON files via Next.js API routes (no backend needed)
- **Testing:** Playwright E2E (converted from UAT specs)
- **Deploy:** Vercel

---

## Feature Work Location

All actual project work lives in:
```
features/{feature-name}/
├── po/          # PO framework artifacts
│   ├── prd.md
│   ├── usm.md
│   ├── usl.md
│   ├── usd/*.md
│   └── uat/*.md
├── design/      # Design framework artifacts
└── code/        # Next.js implementation
```

Reference/sample project: `features/one-api-portal-mvp/`

---

## Key Conventions
- Every design element traces back to a USD acceptance criterion
- USD is the source of truth for validation
- Build UI with dummy data first; swap backend later
- MoSCoW prioritization: Must → Should → Could → Won't
- Story IDs: `ST-XXX` format
- Wireframe IDs: `WF-XXX`, Component IDs: `COMP-XXX`, Interaction IDs: `INT-XXX`

---

## When Asked to Work on This Repo
1. **New feature spec** → start in `features/{name}/po/`, follow 5-stage PO workflow
2. **Design work** → use `features/{name}/design/`, reference `design-framework/`
3. **Implementation** → work in `features/{name}/code/`, follow `codebase-framework/`
4. **Reference example** → `features/one-api-portal-mvp/` is the canonical example
5. **Templates** → `po-framework/stage{X}-*/template.md` for each stage
6. **Always follow the framework rules** — do not skip stages or deviate from templates
