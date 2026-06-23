# D.Meyer's — dmeyers.pro

Hebrew (RTL) lead-generation portfolio/landing site for Dotan Meyer (דותן מאיר), a certified
waterproofing consultant (יועץ איטום) + home-inspection expert (בדק בית) in Israel. Static Astro site.

> **We are in the v3 rebuild.** Long-lived branch `v3`; one feature branch per dossier → merged to
> `v3`; a single `v3 → main` ship at the very end. The site stays LIVE on `main` meanwhile.

## Read this first

- Read `docs/INDEX.md`, then open ONLY the docs whose "Read when" matches your task. Don't read all of `docs/`.
- Read `docs/STATUS.md` at the start of each session for current focus + the active spec.
- Non-trivial work follows the spec loop in `specs/NNN-<dossier>/` (requirements → **approval gate** → design → tasks → verify). Use `/new-spec`.
- Every dossier opens with its own fresh, date-current research (today's facts, not training data). MCPs available: astro-docs, context7, chrome-devtools, vercel, github.

## Commands

```
pnpm dev              # dev server (localhost:4321)
pnpm build            # production build to ./dist
pnpm preview          # preview the build
pnpm format           # prettier write
pnpm format:check     # prettier check
pnpm knip             # unused files/deps/exports
```

## Tech stack

| Layer | Tech | Version | Notes |
|-------|------|---------|-------|
| Framework | Astro | 6.4.3 (→ 7 in Dossier 1) | Static, no adapter |
| UI islands | React | 19 | `client:visible`/`client:idle`, not `client:load` |
| Styling | Tailwind CSS | v4 | `@tailwindcss/vite`; tokens via `@theme` in globals.css |
| Color | OKLCH tokens | — | `src/styles/globals.css` — dark default + `.light` theme |
| Content | MDX content collections | — | blog only (`src/content/blog`) |
| Carousel | embla-carousel-react | 8.6 | keep; upgrade to v9 later |
| Email | @emailjs/browser | — | contact form (client-side) |
| Images | sharp + Astro `<Image>` | — | all WebP |
| Font | Heebo Variable | — | self-hosted, Hebrew-optimized |
| PM | pnpm | — | |

## Architecture (map)

```
src/pages/        # file routing: index, about, contact, projects, blog, blog/[slug], 404
                  # + robots.txt.ts, rss.xml.ts, sitemap.xml.ts (custom, SEO-tuned)
src/sections/     # large page sections (Hero, Features, Projects)
src/components/   # reusable UI (.astro + a few .tsx/.jsx islands)
src/layouts/      # Layout.astro, BlogPost.astro
src/data/         # heroData/featuresData/projectsData + types.ts (data-driven content)
src/seo/          # seoData.ts (schema + meta) + README
src/content/      # MDX blog + content.config.ts (Zod schema)
src/styles/       # globals.css (the OKLCH design system)
src/utils/        # readingTime.ts
```

## Conventions (only the non-obvious)

- **RTL-first.** Hebrew copy; use logical properties (`ms-/me-/ps-/pe-`), not left/right. `dir="rtl"`.
- **Zero-JS by default.** Reach for a React island only when interaction needs it; prefer native CSS/HTML.
- **Color via tokens only** — semantic Tailwind classes mapped from `globals.css` (`bg-surface`, `text-text-secondary`), never raw hex.
- **Content is data-driven** — page copy lives in `src/data/*.ts`, not hardcoded in components.
- **Naming:** Astro/React components `PascalCase`; data files `camelCase`; pages `lowercase`.
- **SEO/schema** flow through `Layout.astro` → `SEOHead.astro` from `src/seo/seoData.ts`.

## Hard requirements for v3 (carry through every dossier)

- Astro 7 · Tailwind v4 · OKLCH palette · **awesome at mobile / tablet / desktop**.
- Preserve zero-JS-by-default + the excellent baseline (Lighthouse 93–100, LCP 262ms, CLS 0).
- Hebrew/RTL correctness. Keep the logo (color palette is open to redesign).
- Drastically improve SEO + AIO/GEO. AI features are **deferred to post-launch**.

## Definition of done

- Code matches `docs/structure.md` conventions; `pnpm build` is clean.
- A verification step ran and passed (build / Lighthouse / browser screenshot for UI).
- Affected steering docs, `docs/INDEX.md` status, and `docs/STATUS.md` updated in the same change.
- If a durable rule changed, this file updated too. Commit code + doc updates together.

<!-- Maintainer note: keep this file < 200 lines. Push detail into docs/ (routed) or .claude/rules/ (path-scoped). -->
