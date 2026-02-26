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

### Blockquote conventions

Blockquotes are automatically classified and styled based on their text prefix. Use these prefixes at the start of each blockquote paragraph:

| Prefix | Rendered as | Colour |
|---|---|---|
| `High-risk quote:` | **Safety** badge (red) | Red left border, pink background |
| `Warning:` | **Safety** badge (red) | Red left border, pink background |
| `Community quote:` or `Community confirmation quote:` | **Community** badge (blue) | Blue left border, blue background |
| `Manual-reference quote:` | **Reference** badge (purple) | Purple left border, purple background |
| *(anything else)* | **Note** badge (amber) | Amber left border, amber background |

The prefix text is stripped from display and replaced with the badge label.

**Important:** always append the source URL at the end of the blockquote line. GFM will auto-link it, and the reference system will match it to the corresponding item in the Sources section and replace it with a clickable superscript badge (e.g. `[3]`) that scrolls to the source.

Example:

```md
> High-risk quote: "Torque is critical." (NGK, retrieved 2026-02-26) https://ngksparkplugs.com/en/resources/spark-plug-installation
```

### Sources section

Every article with external references must end with a `## Sources` section containing a **numbered list** (`1.`, `2.`, etc.) of all cited sources. Each item should include:
- Author/publisher name
- Title (in italics)
- Retrieval date
- Full URL

The reference system automatically:
1. Wraps the Sources section in a visually distinct container
2. Adds anchor IDs (`#ref-1`, `#ref-2`, ...) to each source item
3. Matches URLs in blockquotes to source URLs and replaces them with clickable `[N]` superscript badges
4. Adds back-links from each source to the blockquote that cites it

For the URL matching to work, **the URL at the end of a blockquote must exactly match a URL in the Sources list** (path-level matching, trailing slashes are ignored).

Example Sources section:

```md
## Sources

1. NGK — *Spark Plug Installation*. Retrieved 2026-02-26. https://ngksparkplugs.com/en/resources/spark-plug-installation
2. The Apex Drag — *MX-5 NA/NB Torque & Assembly Specs*. Retrieved 2026-02-26. https://theapexdrag.com/mx-5-na-nb-torque-assembly-specs/
```

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
