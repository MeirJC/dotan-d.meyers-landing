---
status: frozen
updated: 2026-06-23
read_when: Starting a dossier — the date-current discovery that informs it
---
# v3 Discovery Research (2026-06-23)

Light cross-cutting research done before planning. Each dossier should still run its own JIT deep-dive.
Findings are as of June 2026; re-verify fast-moving facts (AIO/SEO, Astro/Tailwind versions) when a dossier starts.

---
## 1. Competitor & market (יועץ איטום / בדק בית, Israel)
Sites reviewed: agalor.co.il, bedekb.co.il, itumariel.co.il, **inspect-in.co.il** (the modern benchmark),
doobie.co.il, marton-itum.co.il, at-terminal.co.il; aggregators midrag.co.il, hadashim, pro.co.il.

- Leaders trade on **years + court-expert status** (legal credibility = #1 currency), sample reports,
  multi-channel contact (sticky phone, WhatsApp, repeated short forms), educational SEO citing Israeli
  standards (ת"י 789/1004/1752, חוק המכר), guarantee framing (Ariel: "didn't solve = didn't pay"), before/after.
- Most look ~2015. Only "Inspect" is modern (cards, 1-click quote, 100+ reviews @4.8, client logos, disclosed prices).
- Organic "best company" queries are owned by **aggregators**, not individual sites.

**Top opportunities:** (1) ship a modern fast mobile-first RTL design — beats 90% of the field on first impression;
(2) stack visible proof (embedded Google reviews, before/after sliders, downloadable sample reports);
(3) Google Business Profile + Midrag presence + active reviews; (4) unique USP (combined איטום+בדק בית, 23 yrs,
court-grade) + guarantee hook; (5) local SEO city/region pages + schema-marked educational hub.

---
## 2. SEO + AIO/GEO (2026)
**Classic/local:** use specific schema `HomeAndConstructionBusiness`/`ProfessionalService` + `Person`
(license/credentials, E-E-A-T) + `Service` + `BreadcrumbList`, from one NAP source. GBP as **service-area
business** (verify then hide address; WhatsApp/SMS since GBP chat ended). Byte-identical NAP across Zap, B144,
דפי זהב, Easy, Maps, FB. Hebrew-native copy, `lang="he" dir="rtl"`, `.co.il`. CWV unchanged: LCP<2.5s, INP<200ms, CLS<0.1.

**AIO/GEO:** **skip llms.txt/ai.txt** (~97% unused; Google ignores). Google line: strong normal SEO *is* GEO.
Structure for extraction (Princeton GEO): question-format Hebrew headings + 40–60 word direct answers, stats,
lists/tables (~2.5× citation). Get indexed in **Bing** (≈87% of ChatGPT citations match Bing top-10). Build the
consultant as an **entity** (`Person` + `sameAs`: LinkedIn, GBP, Wikidata). For LOCAL queries the business's own
site is the most-cited AI source.

**2026 changes:** Hebrew added to Google AI Mode (Nov 2025). **FAQ/HowTo rich results removed (May 2026)** — markup
still valid for AI but yields no SERP feature. Self-serving Review/AggregateRating stars still not shown. Googlebot
per-resource crawl limit 15MB→2MB (Feb 2026) — keep pages lean. GBP review gating/incentives banned (2026). Mar 2026
spam update targets **doorway pages** — do NOT mass-produce near-duplicate city pages.

**Astro how-to:** JSON-LD via a reusable component + typed `schema.ts` (single NAP); keep custom sitemap; static
`public/robots.txt` allowing AI bots + sitemap link; minimal islands (`client:visible`); preload Heebo subset;
`<Image>` w/h to hold CLS; expose RSS.

---
## 3. Astro 7 (released 2026-06-22) + carousel
- Upgrade via `npx @astrojs/upgrade`; risk LOW-MODERATE. Real gotcha: **`compressHTML` `true→'jsx'`** collapses
  whitespace between inline elements — **QA RTL spacing**. Rust compiler is strict (close all tags, no auto-correct).
  Vite 8/Rolldown; markdown→Sätteri (reinstall `@astrojs/markdown-remark` only if adding remark/rehype plugins).
- **Adopt:** queued rendering (free), AI dev tooling (`astro dev --background`/`--json`). **Skip (static):** route
  caching, `src/fetch.ts`, live content collections.
- **Build-with-AI guide:** wire the official Astro docs MCP (`mcp.docs.astro.build`) into agent config; use `astro add`.
- **Carousel:** keep `embla-carousel-react` (~7KB, native RTL, maintained). Plan Embla **v9** (a11y + SSR plugins).
  Fix dots to `role="group"`+`aria-roledescription="slide"`, ≥24px, arrow-key support.

---
## 4. UI libraries to add (lean — every dep must earn its bytes)
- **MUST-ADD:** before/after slider — `react-compare-slider` v3 (~7KB, a11y, RTL-safe) **or** the
  `img-comparison-slider` web component (zero React island). Native **CSS scroll-driven animations** (0KB) for motion.
- **NICE-TO-HAVE:** lightbox `yet-another-react-lightbox-lite` (~5KB) or Bigger Picture; `motion` v12 only for a
  specific island CSS can't do; `zod` only to validate the contact payload.
- **SKIP:** shadcn/any full kit (use native `<dialog>`/`<details>`, or Base UI/Radix à la carte), GSAP,
  Lenis/smooth-scroll (use native `scroll-behavior`), react-hook-form (native constraint validation),
  toast libs (use `aria-live`), Astro `<ClientRouter />` (prefer native `@view-transition`).

---
## 5. AI features (deferred to post-launch — value assessment kept here)
- **Worth it (pipeline, low-risk):** Hebrew SEO/AIO content drafting (human-edited); schema/meta generation;
  Hebrew alt-text; Astro MCP + AI coding agents; before/after image upscaling (Topaz, one-time).
- **Conditional (product, needs serverless):** photo-upload as *lead-enrichment* (AI summarizes internally, human
  decides); lead-qual WhatsApp/chatbot only if after-hours leads leak.
- **Skip:** public photo-diagnosis tool (liability), AI site search, AI-generated hero imagery, dynamic FAQ.
- Any live AI needs a serverless endpoint (site is static; keys can't be client-side).

---
## 6. Framework decision: Astro 7 vs Next.js 16
Two independent probes converged: the deciding variable is **whether this becomes a real interactive app** (it isn't).
- **Stay on Astro 7** (chosen): ~1 day upgrade-in-place; keeps zero-JS/LCP 262ms/CLS 0; preserves schema/SEO
  investment; content collections fit the blog; future serverless reachable via adapters + **Astro Actions** +
  **server islands** + `prerender=false` — **no migration needed** for the deferred AI endpoint.
- Next.js 16 would only win if the product pivots to auth/dashboards/accounts; otherwise it's overkill, ships a React
  runtime (likely perf regression), `next/image` doesn't optimize under static export, and it's a full rewrite (~weeks).
