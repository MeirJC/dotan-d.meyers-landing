---
status: stable
updated: 2026-06-23
read_when: Building or restyling UI — tokens, color, type, motion, components
---
# Design System

> Raw values live in `src/styles/globals.css` (`:root`, `:root.light`, `@theme`). This doc is the map.
> v3 will **modernize the palette/type/motion** but keep this token-driven architecture. Logo stays; color is open.

## Color — OKLCH, token-driven
- Format `oklch(L C H)`: L 0–1, C 0–0.4, H 0–360. Perceptually uniform.
- **Dark is default** (`:root`); light theme via `:root.light` (class-based toggle).
- Token groups: `--background[-secondary|-tertiary]`, `--surface[-hover|-active]`, `--border[-hover|-focus]`,
  `--text-primary|secondary|tertiary|inverse`, `--primary*` (blue ~hue 250, incl. 50–950 scale),
  `--accent` (purple 280), `--secondary` (teal 195), status `--success|warning|destructive`,
  fixed image badges `--badge-before/after-*`, `--overlay`, `--ring`, `--carousel-dot*`.
- Exposed to Tailwind as semantic classes via `@theme` (`bg-surface`, `text-text-secondary`, `bg-primary`, …).
  **Use the classes, never raw values.**

## Radius
`--radius-sm .375 · md .5 · lg .75 · xl 1rem · full 9999px`.

## Typography
- **Heebo Variable** (Hebrew-optimized), `--font-sans`. v3 to introduce a richer type scale (current scale is flat — a known weakness).

## Breakpoints (Tailwind)
`xs <480 · sm ≥640 · md ≥768 (tablet) · lg ≥1024 (desktop) · xl ≥1280 · 2xl ≥1536`.
**Hard req:** awesome at mobile / tablet / desktop. Container queries available (`.container-query`).

## Built-in a11y / motion / RTL utilities (in globals.css)
- `.sr-only`, `.skip-link`, `:focus-visible` rings, forced-colors support.
- `@media (prefers-reduced-motion)` honored; `scroll-behavior: smooth` gated on it.
- Touch targets ≥44px on coarse pointers (carousel dots currently excluded — a11y fix pending in 3b).
- RTL helpers: `.flip-rtl`, logical `ms-/me-/ps-/pe-`. Print styles included.

## Known design weaknesses to fix in v3 (from baseline audit)
- "Dark Tailwind starter" feel — flat near-black bg, single blue accent, no depth/texture/personality.
- Weak hero (floating logo, not project-led). Recurring dead whitespace under page titles.
- Flat type hierarchy. No motion/interaction polish. Trust signals buried.
- Contrast: muted gray `#6f7278` on dark = 3.71:1 (below 4.5:1). Carousel dots 2.5px (too small).

## v3 direction (set in Dossier 3a)
- Design DNA (type / OKLCH color / motion / spatial) via the frontend-design skill.
- Motion: prefer native CSS scroll-driven animations + native `@view-transition` (0 KB) over JS libs.
- Add a before/after comparison slider (signature niche feature). Keep Embla (upgrade v9).
- Tailwind v4 best practices to be JIT-researched via context7 at the start of 3a.
