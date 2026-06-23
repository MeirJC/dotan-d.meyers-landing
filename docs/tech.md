---
status: stable
updated: 2026-06-23
read_when: Tooling, dependencies, build, env vars, deploy questions
---
# Tech

## Stack
| Layer | Tech | Version | Notes |
|-------|------|---------|-------|
| Framework | Astro | 6.4.3 | → 7 in Dossier 1. Fully static, **no adapter** |
| UI islands | React | 19 | via `@astrojs/react`; hydrate with `client:visible`/`client:idle` |
| Styling | Tailwind CSS | v4 | `@tailwindcss/vite`; tokens via `@theme` in `src/styles/globals.css` |
| Typography plugin | @tailwindcss/typography | — | blog prose |
| Content | MDX | `@astrojs/mdx` | blog content collection only |
| Carousel | embla-carousel-react (+ autoplay) | 8.6 | keep; plan Embla v9 upgrade later |
| Email | @emailjs/browser | — | client-side contact form |
| Images | sharp + Astro `<Image>` | — | all assets WebP |
| Icons | astro-icon + @iconify-json/ic | — | SSR'd SVGs, no runtime |
| SEO | astro-seo | — | + custom schema in `src/seo/seoData.ts` |
| Feeds | @astrojs/rss | — | `/rss.xml` |
| Font | @fontsource-variable/heebo | — | self-hosted Hebrew variable font |

## Commands
```
pnpm dev / build / preview        # astro dev / build / preview
pnpm format / format:check        # prettier (+ astro & tailwind plugins)
pnpm knip                         # unused files/deps/exports
pnpm clean / clean:all            # remove dist / full reset
```

## Build & hosting
- Static output (`dist/`). `site: https://www.dmeyers.pro` in `astro.config.mjs`.
- Custom SEO routes instead of plugins: `src/pages/sitemap.xml.ts`, `robots.txt.ts`, `rss.xml.ts`.
- Deployed live (site runs from `main`).

## Environment
| Variable | Purpose | Required |
|----------|---------|----------|
| EmailJS keys (service/template/public) | contact form send | yes (client-side) |

`.env` is gitignored. EmailJS public key is exposed client-side by design.

## Tooling
- **pnpm** package manager (`pnpm-lock.yaml`). Overrides: `@iconify/tools`, `yaml`.
- **Prettier** with astro + tailwind plugins (`.prettierrc`).
- **knip** for dead-code detection (`knip.json`).
- TypeScript (`tsconfig.json`).

## MCP servers available to agents (use for date-current facts)
- **astro-docs** (`search_astro_docs`) — official Astro docs; use for any Astro/v7 question.
- **context7** — current library docs (Tailwind v4, React, etc.).
- **chrome-devtools** — live browser testing, Lighthouse, screenshots (visual QA).
- **vercel**, **github** — deploy/repo ops as needed.

## Notable upgrade watch-items (Astro 7, Dossier 1)
- Rust compiler: stricter HTML (close all tags), no auto-correction.
- `compressHTML` default `true → 'jsx'`: whitespace between inline elements collapses — **QA RTL spacing**.
- Markdown pipeline → Sätteri (Rust); reinstall `@astrojs/markdown-remark` only if adding remark/rehype plugins.
- Vite 8 / Rolldown. Skip (static site): route caching, `src/fetch.ts`, live content collections.
