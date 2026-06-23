---
status: draft
updated: 2026-06-23
---
# Requirements — Astro 7 Upgrade (Dossier 1)

## Story
As the site maintainer, I want the project upgraded from Astro 6.4.3 to Astro 7 (with its official
integrations and security fixes) so that the v3 rebuild is built on a current, secure, faster
foundation — without regressing the live site's behavior, quality, or RTL correctness.

## Context (from JIT research, 2026-06-23)
Astro 7 released 2026-06-22. Risk for this static RTL site is **LOW**. Upgrade resolves two known
Astro security advisories. The one real QA item is inline-whitespace under the new `compressHTML: 'jsx'`
default (notably the Hebrew author line in `BlogPost.astro`). Full audit in
`docs/archive/research/v3-discovery-2026-06-23.md` and the Dossier 1 research summary.

## Acceptance criteria (EARS — each individually testable)
1. THE SYSTEM SHALL run on Astro 7 with `@astrojs/react` and `@astrojs/mdx` at their v7-compatible majors.
2. WHEN `pnpm build` runs THE SYSTEM SHALL complete with no errors.
3. WHEN `pnpm exec astro check` runs THE SYSTEM SHALL report no new type/content errors versus pre-upgrade.
4. THE SYSTEM SHALL preserve all existing routes (`/`, `/about`, `/contact`, `/projects`, `/blog`, `/blog/[slug]`, `/404`) rendering correctly.
5. WHEN the production build runs THE SYSTEM SHALL emit `/sitemap.xml`, `/robots.txt`, and `/rss.xml` with content equivalent to pre-upgrade.
6. WHILE viewing pages in Hebrew/RTL THE SYSTEM SHALL preserve correct inline spacing — specifically the blog author line ("מאת: …") and blog meta row — with no whitespace collapsed by `compressHTML`.
7. THE SYSTEM SHALL keep all React islands (Embla carousels in Hero/Projects, EmailJS contact form) hydrating and functioning.
8. THE SYSTEM SHALL render MDX/Markdown blog content correctly under the new default (Sätteri) processor.
9. THE SYSTEM SHALL resolve the known Astro security advisories (Host-header SSRF; spread-prop attribute XSS) by running a fixed version.
10. WHEN `pnpm audit` runs after the upgrade THE SYSTEM SHALL report no HIGH/CRITICAL vulnerabilities, or any remaining finding SHALL be documented in `decisions.md` with rationale.
11. THE SYSTEM SHALL declare a supported Node version via an `engines` field (`>=22.12.0`).
12. THE SYSTEM SHALL retain baseline quality: Lighthouse Performance, SEO, Accessibility, and Best-Practices at or above pre-upgrade scores (within normal variance) on `/`, `/blog`, and a blog post.
13. WHEN the upgrade is complete THE SYSTEM SHALL update affected steering docs (`tech.md` version table; `decisions.md` if a choice was made) and `STATUS.md` in the same change.

## Out of scope
- Visual redesign / new design language → Dossiers 3a, 3b.
- Data-schema modernization → Dossier 2.
- Adapter-dependent v7 features (route caching / `Astro.cache`, `src/fetch.ts`, live content collections) — site stays static.
- Embla v9 upgrade — deferred until stable (tracked in decisions.md #5).
- SEO/AIO content & schema changes → Dossier 4.
- Quick-win a11y fixes (carousel dot size, `<html dir>`, manifest 404, contrast) → Dossier 3b, unless an upgrade error forces one.
- Wholesale upgrade of unrelated dependencies beyond what the Astro 7 upgrade and security fixes require (design-related deps handled in their own dossiers).
