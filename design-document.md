# Mazda MX-5 NB Maintenance Manual — Design Document

## 1. Project Overview

A modern, responsive web application serving as a digital maintenance manual for the **Mazda MX-5 NB (1998–2005)**. The site prioritises clarity, visual guidance, and step-by-step instructions so that owners of all skill levels can confidently maintain and repair their cars.

### Core Principles

- **Clarity first** — every guide follows a predictable, scannable structure.
- **Visual-heavy** — photos and diagrams at every step; image galleries where multiple angles are needed.
- **Mobile-friendly** — mechanics work in garages with phones, not desktops.
- **Offline-capable** — optional PWA support so guides load without connectivity.
- **Static & fast** — no server required; deploys to any static host (GitHub Pages, Netlify, Cloudflare Pages).

---

## 2. Technology Stack

> **Philosophy: boring, proven technology.** The output is a fully static site — no server, no database, no runtime framework in the browser. We use modern component-based authoring (Astro components + Tailwind) for developer experience, but the build output is plain HTML, CSS, and minimal vanilla JS where interactivity is needed (lightbox, mobile menu, search).

| Layer | Choice | Rationale |
|---|---|---|
| **Static Site Generator** | [Astro](https://astro.build/) (v5+) | Mature, well-documented SSG. Outputs **zero client-side JS by default** — pages are plain HTML. Component-based `.astro` files give modern DX without shipping a framework to the browser. Large ecosystem, stable API. |
| **Content Format** | MDX (Markdown + components) | Proven format. Authors write Markdown; custom components handle structured content (galleries, callouts). MDX is an official Astro integration with wide tooling support. |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) v4 | Industry-standard utility CSS. Purged at build time so only used classes ship. No custom CSS framework to maintain. |
| **Image Handling** | Astro `<Image>` / `<Picture>` + `sharp` | Built-in to Astro. Automatic resizing, WebP/AVIF generation, lazy loading. `sharp` is the standard Node.js image library. |
| **Interactivity** | Vanilla JS (`<script>` tags in Astro components) | No React, Vue, or other runtime framework. The few interactive elements (lightbox, mobile nav toggle, search) use plain `<dialog>`, `<details>`, CSS scroll-snap, and small inline scripts. Progressive enhancement — everything works without JS where possible. |
| **Gallery** | Custom component (CSS scroll-snap + `<dialog>` lightbox) | Zero dependencies. CSS-only grid/scroll on mobile; vanilla JS `<dialog>` for lightbox. |
| **Search** | [Pagefind](https://pagefind.app/) (post-build static search) | Fully static, no backend, ~30 KB client bundle. Indexes at build time, searches entirely in the browser. |
| **Deployment** | GitHub Pages / Netlify / Cloudflare Pages | Free tier, automatic builds on git push. No servers to manage. |
| **Version Control** | Git + GitHub | Standard. Content and code in the same repo. |

---

## 3. Information Architecture

```
Home
├── Getting Started
│   ├── About the MX-5 NB
│   ├── Model Year Differences (NB1 vs NB2)
│   └── Essential Tools & Supplies
│
├── Guides (by system)
│   ├── Engine
│   │   ├── Oil & Filter Change
│   │   ├── Spark Plug Replacement
│   │   ├── Timing Belt Replacement
│   │   ├── Coolant Flush
│   │   └── …
│   ├── Drivetrain
│   │   ├── Gearbox Oil Change
│   │   ├── Clutch Replacement
│   │   └── …
│   ├── Brakes
│   │   ├── Brake Pad Replacement
│   │   ├── Brake Fluid Flush
│   │   ├── Rotor Replacement
│   │   └── …
│   ├── Suspension & Steering
│   ├── Electrical
│   ├── Interior & Soft Top
│   └── Body & Exterior
│
├── Maintenance Schedules
│   ├── Routine Service Intervals
│   └── Pre-Purchase Inspection Checklist
│
├── Reference
│   ├── Torque Specs
│   ├── Fluid Capacities
│   ├── Fuse Box Diagrams
│   └── Wiring Diagrams
│
└── About / Contributing
```

---

## 4. Guide Page Structure

Every guide follows an identical layout so users always know where to look.

### 4.1 Guide Header

```
┌─────────────────────────────────────────────┐
│  [Breadcrumb: Home > Brakes > Pad Replace]  │
│                                              │
│  # Brake Pad Replacement                    │
│                                              │
│  Short 1-2 sentence summary of what this    │
│  guide covers and why it matters.            │
│                                              │
│  ┌────────────┬───────────┬───────────────┐  │
│  │ Difficulty │ Est. Time │ Model Years   │  │
│  │ ★★☆☆☆      │ 45–60 min │ NB1 & NB2    │  │
│  │ Beginner   │           │               │  │
│  └────────────┴───────────┴───────────────┘  │
└─────────────────────────────────────────────┘
```

**Metadata fields (rendered as a card bar):**

| Field | Values / Format |
|---|---|
| **Difficulty** | `Beginner` / `Intermediate` / `Advanced` / `Expert` — plus star rating (1–5) |
| **Estimated Time** | Range in minutes or hours (e.g. "45–60 min") |
| **Applicable Models** | NB1 (1998–2000), NB2 (2001–2005), or both |
| **Last Updated** | Auto-generated from git/file date |

### 4.2 Materials & Tools Panel

Rendered as a collapsible sidebar on desktop, full-width card on mobile.

```mdx
<RequirementsList>
  <Tools>
    - 14mm socket
    - Torque wrench (set to 95 Nm)
    - Jack and axle stands
    - Brake caliper piston tool
  </Tools>
  <Materials>
    - Front brake pads (OEM: SHB-S261-33-28Z or equivalent)
    - Brake cleaner spray
    - High-temp brake grease
  </Materials>
</RequirementsList>
```

- Each item can optionally link to a product or reference page.
- A "print shopping list" button exports just the materials.

### 4.3 Step-by-Step Instructions

Each step is a numbered block containing:

```
┌──────────────────────────────────────────────┐
│  Step 3 of 12                                │
│                                              │
│  ## Remove the caliper bolts                 │
│                                              │
│  Using the 14mm socket, remove the two       │
│  sliding-pin bolts from the rear of the      │
│  caliper bracket.                            │
│                                              │
│  ┌─────────────────────────────────────┐     │
│  │  [Photo / diagram of caliper bolts] │     │
│  └─────────────────────────────────────┘     │
│                                              │
│  > ⚠ Warning: Do not let the caliper hang   │
│  > by the brake hose. Support it with a      │
│  > wire or bungee cord.                      │
│                                              │
│  > 💡 Tip: If the bolts are seized, apply   │
│  > penetrating oil and wait 10 minutes.      │
│                                              │
│  Torque spec: 95 Nm on reassembly            │
└──────────────────────────────────────────────┘
```

**Step features:**

- Numbered automatically via content collection index.
- Optional **image or gallery** per step.
- **Callout blocks**: `warning`, `tip`, `info`, `danger` — styled distinctly.
- **Torque specs** rendered in a highlighted pill/badge.
- Optional **sub-steps** (a, b, c) for complex operations.

### 4.4 Image Galleries

When a step (or a standalone section) requires multiple images:

```mdx
<Gallery columns={2} caption="Caliper removal — different angles">
  <GalleryImage src="./img/caliper-front.jpg" alt="Front view" />
  <GalleryImage src="./img/caliper-rear.jpg" alt="Rear view" />
  <GalleryImage src="./img/caliper-bolt-location.jpg" alt="Bolt location" />
</Gallery>
```

**Behaviour:**

- **Desktop**: grid layout (configurable 2–4 columns).
- **Mobile**: horizontal scroll strip with CSS `scroll-snap`.
- **Lightbox**: clicking any image opens a full-screen overlay with prev/next navigation. Implemented with a minimal `<dialog>`-based component (no heavy library).
- **Captions**: each image has an `alt` and optional visible caption.

### 4.5 Quotes & References

Quotes use standard Markdown blockquotes with a **prefix convention** that controls their visual classification. A client-side script processes each blockquote, strips the prefix, and renders a styled badge label.

**Prefix → badge mapping:**

| Blockquote prefix | Badge label | Style |
|---|---|---|
| `High-risk quote:` | Safety | Red (danger) |
| `Warning:` | Safety | Red (danger) |
| `Community quote:` | Community | Blue (info) |
| `Community confirmation quote:` | Community | Blue (info) |
| `Manual-reference quote:` | Reference | Purple (info) |
| *(other)* | Note | Amber (warning) |

**Example:**

```md
> High-risk quote: "Torque is critical." (NGK, retrieved 2026-02-26) https://ngksparkplugs.com/en/resources/spark-plug-installation
```

The URL at the end of each blockquote is automatically matched to the numbered `## Sources` list at the bottom of the article. When a match is found, the inline URL is replaced with a clickable superscript reference badge (e.g. `[3]`) that smooth-scrolls to the corresponding source item and highlights it. Each source item also receives a back-link arrow that scrolls back to the citing blockquote.

**Sources section format:**

```md
## Sources

1. NGK — *Spark Plug Installation*. Retrieved 2026-02-26. https://ngksparkplugs.com/en/resources/spark-plug-installation
2. The Apex Drag — *MX-5 NA/NB Torque Specs*. Retrieved 2026-02-26. https://theapexdrag.com/mx-5-na-nb-torque-assembly-specs/
```

The Sources section is automatically wrapped in a visually distinct container (`sources-wrapper` class) with a different background, border, and heading style. Each `<li>` receives an anchor ID (`#ref-1`, `#ref-2`, etc.) for deep-linking.

References can point to:

- Internal reference pages (torque specs, wiring diagrams).
- External URLs (forum threads, YouTube videos).
- Official Mazda documentation sections.

### 4.6 Side Navigation

The site features a persistent, hierarchical side navigation that serves as the primary way users browse the manual. It is always visible on desktop and available via a hamburger-menu slide-out on mobile/tablet.

#### Structure

```
┌──────────────────────────────┐
│  🔍 Search...                │
│                              │
│  ▾ Getting Started           │
│      About the MX-5 NB      │
│      Model Year Differences  │
│      Essential Tools         │
│                              │
│  ▾ Engine                    │
│      Oil & Filter Change     │
│      Spark Plug Replacement  │
│      Timing Belt             │
│      Coolant Flush           │
│      Valve Adjustment        │
│                              │
│  ▸ Drivetrain                │
│  ▸ Brakes                    │
│  ▸ Suspension & Steering     │
│  ▸ Electrical                │
│  ▸ Interior & Soft Top       │
│  ▸ Body & Exterior           │
│                              │
│  ▾ Reference                 │
│      Torque Specs            │
│      Fluid Capacities        │
│      Fuse Box Diagrams       │
│      Wiring Diagrams         │
│                              │
│  ▾ Schedules                 │
│      Service Intervals       │
│      Pre-Purchase Checklist  │
│                              │
│  About / Contributing        │
└──────────────────────────────┘
```

#### Behaviour

- **Collapsible categories**: each top-level section (Engine, Brakes, etc.) is a collapsible group. Clicking the section header toggles its children open/closed (▸ / ▾). Uses `<details>` / `<summary>` elements for zero-JS progressive enhancement.
- **Auto-expand active section**: when viewing a guide, its parent category automatically expands and the current page is highlighted with an accent bar and bold text.
- **Sticky on desktop**: the sidebar is `position: sticky` with `overflow-y: auto` and its own scrollbar, so it stays visible while the main content scrolls.
- **Mobile slide-out**: on screens < 1024px, the sidebar is hidden behind a hamburger icon (top-left of header). Tapping it slides the nav in from the left as an overlay with a backdrop. Closing via X button, backdrop tap, or swipe-left gesture.
- **Keyboard accessible**: all items are focusable, expandable via Enter/Space, and navigable via arrow keys.
- **Scroll spy** (optional enhancement): as the user scrolls through a guide, the table of contents in the right sidebar highlights the current section. The left nav highlights the current guide.
- **Search integration**: a compact search input at the top of the sidebar allows quick filtering. Typing filters the visible nav items in real-time (client-side, no network call).

#### Data Source

The sidebar tree is auto-generated at build time from the content collection. Each guide's `category` frontmatter field determines which section it appears under. Sort order within a category is controlled by an optional `order` frontmatter field (defaults to alphabetical).

```ts
// src/lib/navigation.ts
export interface NavItem {
  label: string;
  href: string;
  icon?: string;       // optional category icon
  children?: NavItem[];
  order?: number;
}

// Built at build time from Astro content collections
export function buildNavTree(guides: CollectionEntry<'guides'>[]): NavItem[];
```

#### Component

```
<SideNav>            — outer wrapper, handles sticky + mobile slide-out
  <SideNavSearch>    — inline filter input
  <SideNavSection>   — collapsible category group (uses <details>)
    <SideNavItem>    — individual link, highlights when active
```

### 4.7 Guide Footer

- **Previous / Next guide** navigation within the same category.
- **Related guides** (e.g. "Brake Fluid Flush" linked from "Brake Pad Replacement").
- **Revision history** link (points to git log for that file).

---

## 5. Component Library

All custom components are Astro components (`.astro` files). They accept props and render semantic HTML with Tailwind classes.

| Component | Purpose |
|---|---|
| `<GuideHeader>` | Title, summary, metadata card bar |
| `<DifficultyBadge>` | Star rating + label |
| `<TimeBadge>` | Estimated time pill |
| `<RequirementsList>` | Tools & materials panel |
| `<Step>` | Single numbered instruction block |
| `<StepList>` | Ordered wrapper that auto-numbers `<Step>` children |
| `<Gallery>` | Multi-image grid with lightbox |
| `<GalleryImage>` | Single image inside a gallery |
| `<Callout>` | Warning / tip / info / danger block |
| `<Quote>` | *(Not a component — uses Markdown blockquotes with prefix conventions; see §4.5)* |
| `<ReferenceList>` | *(Not a component — uses `## Sources` numbered list with client-side enhancement; see §4.5)* |
| `<TorqueSpec>` | Highlighted inline torque value |
| `<PartNumber>` | Styled OEM/aftermarket part number |
| `<Breadcrumb>` | Navigation breadcrumb |
| `<SideNav>` | Persistent side navigation with collapsible categories, mobile slide-out |
| `<SideNavSearch>` | Inline real-time filter input for sidebar items |
| `<SideNavSection>` | Collapsible category group (`<details>`/`<summary>` based) |
| `<SideNavItem>` | Individual nav link with active-page highlight |
| `<TableOfContents>` | Auto-generated from headings, sticky right sidebar on desktop |
| `<SearchBar>` | Pagefind search widget |
| `<PrintButton>` | Triggers `window.print()` with print-optimised stylesheet |

---

## 6. Content Authoring Format

Guides are written in **MDX** inside an Astro content collection. Frontmatter provides structured metadata; the body uses Markdown plus the custom components above.

```mdx
---
title: "Brake pad replacement"
category: "brakes"
difficulty: 2
difficultyLabel: "Beginner"
estimatedTime: "45-60 min"
applicableModels:
  - "NB1"
  - "NB2"
summary: "Replace worn front brake pads with new ones."
tags:
  - "brakes"
  - "pads"
relatedGuides: []
order: 1
updatedAt: "2026-02-26"
---

## Before You Start / Safety

- Work on a level, stable surface.
- Ensure the car is securely supported before getting underneath.

> Warning: Never work under a car supported only by a jack. https://example.com/safety-source

## Required Tools

- 14mm socket and ratchet
- Torque wrench
- Jack and axle stands
- Brake caliper piston tool

## Required Parts / Fluids

- Front brake pads (OEM: SHB-S261-33-28Z or equivalent)
- Brake cleaner spray
- High-temp brake grease

## Step-by-Step Procedure

### 1) Loosen the wheel bolts

With the car on the ground, use the 19mm socket to crack the wheel bolts loose (1/4 turn).

### 2) Jack up the car

Place the jack under the front jacking point and raise until the wheel is off the ground. Place an axle stand under the subframe.

### 3) Remove the caliper

Remove the two 14mm sliding-pin bolts.

> High-risk quote: "Caliper bracket bolts: 49–69 Nm." (Workshop Manual §04-12, retrieved 2026-02-26) https://example.com/workshop-manual

## Torque Specs / Capacities

- **Caliper bracket bolts:** 49–69 Nm

## Verification / Post-service checks

- Confirm no leaks at caliper
- Test brake pedal feel before driving

## Sources

1. Example Safety Source — *Workshop Safety Guidelines*. Retrieved 2026-02-26. https://example.com/safety-source
2. Workshop Manual — *Section 04-12: Brakes*. Retrieved 2026-02-26. https://example.com/workshop-manual
```

---

## 7. Visual Design System

### 7.1 Colour Palette

Inspired by Mazda's brand colours and garage/workshop aesthetics.

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| `--color-primary` | `#9B1B30` (Mazda soul red) | `#C8354D` | Links, active states, primary buttons |
| `--color-secondary` | `#1A1A2E` (deep navy) | `#E0E0E0` | Headings, body text |
| `--color-surface` | `#FFFFFF` | `#1E1E2E` | Page background |
| `--color-surface-alt` | `#F5F5F0` (warm grey) | `#2A2A3C` | Cards, code blocks, panels |
| `--color-warning` | `#E8A317` | `#F0B840` | Warning callouts |
| `--color-danger` | `#C0392B` | `#E74C3C` | Danger callouts |
| `--color-tip` | `#27AE60` | `#2ECC71` | Tip callouts |
| `--color-info` | `#2980B9` | `#3498DB` | Info callouts |

### 7.2 Typography

| Element | Font | Size |
|---|---|---|
| Headings | `Inter` (variable, sans-serif) | h1: 2.25rem, h2: 1.75rem, h3: 1.35rem |
| Body | `Inter` | 1rem / 1.6 line-height |
| Code / specs | `JetBrains Mono` | 0.875rem |
| UI labels | `Inter` semi-bold | 0.75rem uppercase |

### 7.3 Layout

- **Max content width**: 768px (comfortable reading width).
- **Sidebar** (desktop ≥ 1024px): sticky table of contents on the right; tools/materials panel on the left or collapsed.
- **Mobile**: single-column, full-width cards, bottom sticky nav.
- **Print**: hide nav, sidebar, search; single-column optimised layout.

---

## 8. Directory Structure

```
mazda_mx5b_maintenance_manual/
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── Breadcrumb.astro
│   │   ├── Callout.astro
│   │   ├── DifficultyBadge.astro
│   │   ├── Footer.astro
│   │   ├── Gallery.astro
│   │   ├── GalleryImage.astro
│   │   ├── GuideCard.astro          # Card for guide listings
│   │   ├── GuideHeader.astro
│   │   ├── Header.astro
│   │   ├── Lightbox.astro           # Dialog-based image viewer
│   │   ├── SideNav.astro            # Persistent side navigation wrapper
│   │   ├── SideNavSearch.astro      # Inline filter input for nav
│   │   ├── SideNavSection.astro     # Collapsible category group
│   │   ├── SideNavItem.astro        # Individual nav link
│   │   ├── PartNumber.astro
│   │   ├── PrintButton.astro
│   │   ├── Quote.astro
│   │   ├── ReferenceList.astro
│   │   ├── RequirementsList.astro
│   │   ├── SearchBar.astro
│   │   ├── Step.astro
│   │   ├── StepList.astro
│   │   ├── TableOfContents.astro
│   │   ├── TimeBadge.astro
│   │   └── TorqueSpec.astro
│   ├── content/
│   │   ├── config.ts                # Astro content collection schema
│   │   └── guides/
│   │       ├── engine/
│   │       │   ├── oil-change.mdx
│   │       │   ├── spark-plugs.mdx
│   │       │   └── img/
│   │       ├── brakes/
│   │       │   ├── brake-pad-replacement.mdx
│   │       │   └── img/
│   │       ├── drivetrain/
│   │       ├── suspension/
│   │       ├── electrical/
│   │       ├── interior/
│   │       └── body/
│   ├── layouts/
│   │   ├── BaseLayout.astro         # HTML shell, head, nav, footer
│   │   ├── GuideLayout.astro        # Guide-specific layout with sidebar
│   │   └── CategoryLayout.astro     # Listing page for a category
│   ├── pages/
│   │   ├── index.astro              # Home page
│   │   ├── guides/
│   │   │   ├── index.astro          # All guides listing
│   │   │   └── [...slug].astro      # Dynamic guide page
│   │   ├── reference/
│   │   │   ├── torque-specs.astro
│   │   │   ├── fluid-capacities.astro
│   │   │   └── fuse-diagrams.astro
│   │   ├── schedules/
│   │   │   └── index.astro
│   │   └── about.astro
│   └── styles/
│       ├── global.css               # Tailwind directives, custom properties
│       └── print.css                # Print-specific overrides
└── .github/
    └── workflows/
        └── deploy.yml               # CI: build + deploy to Pages
```

---

## 9. Implementation Phases

### Phase 1 — Scaffold & Core Layout

**Goal**: A working Astro project with the basic shell and one example guide.

- [ ] Initialise Astro project with Tailwind and MDX integrations.
- [ ] Define the content collection schema (`config.ts`) with all frontmatter fields.
- [ ] Build `BaseLayout`, `Header`, `Footer`, `Breadcrumb`.
- [ ] Build the home page with hero section and category grid.
- [ ] Build `GuideLayout` with table of contents sidebar.
- [ ] Create one complete example guide (e.g. "Oil & Filter Change") with placeholder images.

### Phase 2 — Component Library

**Goal**: All custom MDX components are functional and styled.

- [ ] `<GuideHeader>` — renders metadata bar (difficulty, time, models).
- [ ] `<DifficultyBadge>` and `<TimeBadge>`.
- [ ] `<RequirementsList>` with `<Tools>` and `<Materials>` sub-components.
- [ ] `<StepList>` and `<Step>` — auto-numbered steps with image and callout slots.
- [ ] `<Callout>` — warning, tip, info, danger variants.
- [ ] `<Gallery>` and `<GalleryImage>` with lightbox.
- [ ] `<Quote>` and `<ReferenceList>`.
- [ ] `<TorqueSpec>` and `<PartNumber>` inline components.
- [ ] `<PrintButton>` and print stylesheet.

### Phase 3 — Listing & Navigation Pages

**Goal**: Users can browse and discover guides.

- [ ] Category listing page (`/guides/`) with filter chips (difficulty, system, model year).
- [ ] Individual category pages (e.g. `/guides/engine/`).
- [ ] Guide card component for listings (thumbnail, title, difficulty, time).
- [ ] Previous / Next / Related Guides navigation in guide footer.
- [ ] Maintenance schedule pages.

### Phase 4 — Search & Discovery

**Goal**: Fast, full-text search across all content.

- [ ] Integrate Pagefind (runs post-build).
- [ ] Build `<SearchBar>` component with modal results overlay.
- [ ] Add search indexing attributes to guide content.
- [ ] Tag-based filtering on listing pages.

### Phase 5 — Reference Section

**Goal**: Standalone reference pages for quick look-up.

- [ ] Torque specs table (sortable, searchable).
- [ ] Fluid types and capacities table.
- [ ] Fuse box diagrams (interactive SVG or annotated image).
- [ ] Wiring diagram viewer (pan/zoom).

### Phase 6 — Progressive Enhancement & Polish

**Goal**: PWA support, dark mode, performance tuning.

- [ ] Dark mode toggle (respects `prefers-color-scheme` by default).
- [ ] PWA manifest and service worker for offline guide caching.
- [ ] Image optimisation audit (ensure all images use `<Picture>` with WebP/AVIF).
- [ ] Lighthouse performance, accessibility, SEO audit — target 95+ on all.
- [ ] Open Graph / social meta tags for sharing.
- [ ] 404 page.

### Phase 7 — Content Authoring

**Goal**: Populate with real guides.

- [ ] Write 3–5 guides per category (starting with most common maintenance tasks).
- [ ] Photograph or source images for each step.
- [ ] Peer-review guides for technical accuracy.
- [ ] Cross-link related guides and reference pages.

---

## 10. Content Guidelines for Authors

1. **Write for a first-timer.** Assume the reader has basic hand-tool knowledge but has never worked on an MX-5 before.
2. **One action per step.** If a step has "and" in it, consider splitting it.
3. **Show, don't just tell.** Every step should ideally have a photo or diagram.
4. **Call out safety.** Use `<Callout type="danger">` for anything that could cause injury. Use `<Callout type="warning">` for things that could damage the car.
5. **Include torque specs.** Always use `<TorqueSpec>` so values are visually distinct and searchable.
6. **Cite sources.** Use Markdown blockquotes with the appropriate prefix (`High-risk quote:`, `Community quote:`, etc.) and append the source URL. Add a `## Sources` numbered list at the end of each guide. The site automatically links inline citations to the matching source (see §4.5).
7. **Test the guide.** Ideally, follow your own guide while performing the task and revise any unclear steps.

---

## 11. Non-Functional Requirements

| Requirement | Target |
|---|---|
| First Contentful Paint | < 1.0s |
| Largest Contentful Paint | < 2.0s |
| Total JS shipped (per page) | < 20 KB (gzipped) |
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| Offline support | Full guide text + cached images via service worker |
| Browser support | Last 2 versions of Chrome, Firefox, Safari, Edge |
| Responsive breakpoints | 375px (mobile), 768px (tablet), 1024px (desktop) |

---

## 12. Future Considerations (Out of Scope for v1)

- **User accounts / progress tracking** — let users mark guides as completed.
- **Community contributions** — pull-request-based guide submissions via GitHub.
- **Multi-language support** — i18n for non-English markets.
- **Video embeds** — embedded video steps alongside photos.
- **Part cross-reference database** — OEM-to-aftermarket part number lookup.
- **VIN decoder** — auto-detect NB1/NB2 and filter applicable guides.
