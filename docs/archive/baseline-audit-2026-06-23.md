---
status: frozen
updated: 2026-06-23
read_when: Comparing v3 before/after; deciding what to fix in the rebuild
---
# Baseline Audit — dmeyers.pro (2026-06-23, pre-v3)

Captured live via chrome-devtools MCP (screenshots desktop 1440 / mobile 390, Lighthouse, perf trace, DOM).
This is the "before" snapshot. The site is technically excellent — v3 is a design/brand + SEO/conversion effort, not a perf rescue.

## Metrics
- **Lighthouse:** Home A11y 93, Best-Practices 96, SEO 100. Contact A11y 96, BP 96, SEO 100.
- **Performance (trace, home):** LCP **262ms**, CLS **0.00**, no throttling — excellent.
- **Failing/weak audits:** color-contrast (muted gray `#6f7278` on `#14171e` = 3.71:1, below 4.5:1);
  target-size (carousel dots 2.5px); console errors; lab CLS noise (negligible).

## Per-page facts
- Unique keyword-rich Hebrew meta + canonical on every page. Single H1 per page (correct). All images WebP.
- JSON-LD present per page: Home = ProfessionalService + Organization + WebSite + WebPage + BreadcrumbList;
  Projects = CollectionPage; About = AboutPage; Blog = CollectionPage; Contact = ContactPage + ProfessionalService.
- Font: Heebo Variable. Dark theme (`oklch(0.145 …)`).

## Bugs / quick wins (fold into Dossier 3b)
- `<html>` has **no `dir`** attribute (RTL works via `body dir="rtl"`, but `<html dir="rtl" lang="he">` should be set).
- **`manifest.json` 404** → 2 console errors (PWA manifest referenced but missing).
- Muted-gray body text fails contrast (raise to ≥4.5:1).
- Carousel dot hit-area 2.5px (enlarge to ≥24px tap target).

## Design critique (drives Dossier 3)
- Generic "dark Tailwind starter" aesthetic; one blue accent; no depth/texture/personality.
- Hero is a floating logo, not project-led — no credibility hook above the fold.
- Recurring dead whitespace under page titles (About/Blog/Projects).
- Flat type scale; no motion/interaction polish; trust signals (23 yrs, big clients, before/after) buried.
- About page underuses a strong story (one tiny portrait). Projects page is the strongest (before/after carousels).
