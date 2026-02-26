# How to Add an Article / Instruction

Scope reminder: this manual is for Mazda MX-5 NB only (built 1998-2005), including NB1 and NB2.

This project uses Astro content collections. New guides are written as `.mdx` files and automatically routed.

## 1. Choose a category and file path

Create your file in:

`src/content/guides/<category>/<slug>.mdx`

Valid categories:
- `engine-mechanical`
- `cooling-system`
- `intake-fuel-system`
- `ignition-system`
- `clutch-transmission`
- `brakes`
- `suspension`
- `steering-alignment`
- `electrical-system`
- `tires-wheels`
- `convertible-top-exterior-trim`
- `rust-prevention`
- `appendices`

Example:

`src/content/guides/brakes/brake-fluid-flush.mdx`

The public URL becomes:

`/guides/brakes/brake-fluid-flush/`

## 2. Add required frontmatter

Use this template:

```mdx
---
title: "Brake fluid flush & bleed"
category: "brakes"
difficulty: 3
difficultyLabel: "Intermediate"
estimatedTime: "60-90 min"
applicableModels:
  - "NB1"
  - "NB2"
summary: "Replace old brake fluid and bleed all four corners."
tags:
  - "brakes"
  - "fluids"
relatedGuides: []
order: 2
updatedAt: "2026-02-26"
---
```

Notes:
- `difficulty` must be `1` to `5`.
- `difficultyLabel` must be one of: `Beginner`, `Intermediate`, `Advanced`, `Expert`.
- `applicableModels` must include `NB1`, `NB2`, or both.
- `applicableModels` in this project always maps to Mazda MX-5 NB (1998-2005) variants only.
- `order` controls sort order in sidebar/category lists.

## 3. Write the article body

Use normal Markdown headings and content. Prefer:
- `##` for major sections
- `###` for sub-sections

`##` and `###` headings are used by the right-side table of contents.

## 4. Run locally

```bash
npm run dev
```

Open your article route in the browser and verify:
- it appears in the sidebar under the correct category
- title/summary/metadata render correctly
- headings appear in the table of contents

## 5. Validate build

```bash
npm run build
```

If build passes, the article is ready.

Final scope check before marking complete:
- content matches Mazda MX-5 NB (1998-2005)
- no generation-mix assumptions from NA, NC, or ND without explicit notes
