---
status: stable
updated: 2026-06-23
read_when: Adding files, architecture or convention questions
---
# Structure

## Directory map
```
src/
├── pages/            # file-based routes
│   ├── index.astro   about.astro  contact.astro  projects.astro  blog.astro
│   ├── blog/[slug].astro          # dynamic blog post
│   ├── 404.astro
│   └── robots.txt.ts  rss.xml.ts  sitemap.xml.ts   # custom SEO endpoints
├── sections/         # large page sections: Hero, Features, Projects
├── components/       # reusable UI — .astro mostly; islands: ContactForm.jsx,
│                     #   ImageCarousel.tsx, ImageBadge.tsx
├── layouts/          # Layout.astro (shell + SEO), BlogPost.astro
├── data/             # heroData.ts, featuresData.ts, projectsData.ts, types.ts
├── seo/              # seoData.ts (schema + meta config), README.md
├── content/          # blog/*.md(x) + content.config.ts (Zod schema)
├── styles/           # globals.css — the OKLCH design system
├── utils/            # readingTime.ts
└── assets/           # images/ (by project & section), blog-images/
```

## Layering / boundaries
- **pages** compose **sections** + **components**; they pull copy from **data**, not inline strings.
- **sections** = page-specific large blocks. **components** = reusable, smaller, often cross-page.
- **SEO/schema** is centralized: pages pass props → `Layout.astro` → `SEOHead.astro` ← `seo/seoData.ts`.
- **Design tokens** live only in `styles/globals.css` (`@theme`); components consume semantic classes.

## Conventions
- **Naming:** Astro/React components `PascalCase.(astro|tsx)`; data files `camelCase.ts`; pages `lowercase.astro`.
- **Islands:** default to `.astro` (zero JS). Use React only for real interactivity; hydrate `client:visible`/`client:idle`, avoid `client:load`.
- **RTL-first:** Hebrew copy; logical properties (`ms/me/ps/pe`, `inline-start/end`), never hard left/right. `dir="rtl"`.
- **Colors:** semantic Tailwind classes mapped from tokens (`bg-surface`, `text-text-secondary`, `text-primary`) — never raw hex/oklch in markup.
- **Images:** Astro `<Image>` with explicit width/height (CLS), WebP, descriptive Hebrew `alt`.
- **Content:** page copy and lists live in `src/data/*.ts`; blog in `src/content/blog`.

## Patterns to follow / anti-patterns to avoid
- Follow: small focused components; data-driven content; one source of truth for tokens & NAP.
- Avoid: hardcoded copy in components; raw color values; `client:load`; left/right physical props in RTL; pasting schema/values into docs (reference the file).
