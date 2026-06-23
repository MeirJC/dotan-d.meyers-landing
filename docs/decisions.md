---
status: stable
updated: 2026-06-23
read_when: Revisiting "why did we choose X"
---
# Decisions

One row per decision. Dates are Asia/Jerusalem.

| # | Decision | Date | Rationale (1 line) | Trade-off (1 line) |
|---|----------|------|--------------------|--------------------|
| 1 | v3 is a long-lived integration branch; one feature branch per dossier → `v3`; single `v3 → main` ship at the end | 2026-06-23 | Ship the whole rebuild at once; site stays live on `main` meanwhile | Longer-lived branch to keep in sync |
| 2 | **Stay on Astro 7** — do NOT migrate to Next.js 16 | 2026-06-23 | Static content/SEO site; Astro keeps zero-JS perf; serverless reachable later via adapters/Actions/server islands; ~1 day upgrade vs weeks rewrite | Smaller ecosystem; if it ever becomes a real app, revisit |
| 3 | Adopt the Dev-Docs System v4 (+ power-ups) as the doc backbone; remove the old `PROJECT-SPEC.md` | 2026-06-23 | Tiered, routed, self-maintaining context; old spec had already drifted (said Astro 5) | Upkeep discipline required |
| 4 | **Defer all AI features to post-launch** | 2026-06-23 | Keep v3 static + focused; product AI needs serverless + has Hebrew/liability caveats | AI value delayed |
| 5 | Keep **embla-carousel** (upgrade to v9 later); add a before/after comparison slider | 2026-06-23 | Smallest bundle, native RTL already used correctly, actively maintained | v9 a11y/SSR plugins wait for stable |
| 6 | Design dossier split: **3a design-system → 3b page-rebuild**; data-model (Dossier 2) shaped right before 3a | 2026-06-23 | Cleaner gates on the biggest work; data + design stay in sync | More handoffs |
| 7 | Hard reqs: Astro 7 · Tailwind v4 · OKLCH · awesome at mobile/tablet/desktop · keep logo (color open) | 2026-06-23 | Owner direction; preserve excellent baseline | Constrains some choices |
| 8 | **Skip `llms.txt`/`ai.txt`** for AIO/GEO | 2026-06-23 | 2026 research: ~97% unused, Google confirms ignored; strong normal SEO == GEO | — |
| 9 | Motion via native CSS scroll-driven animations + native `@view-transition`; avoid GSAP/Lenis/heavy JS | 2026-06-23 | 0 KB, off-main-thread, protects perf budget | Less imperative control |
| 10 | WhatsApp Business: deferred, proposal kept off-repo (owner's Desktop); design reserves a CTA slot | 2026-06-23 | Needs owner commitment + setup beyond the site | Conversion lever delayed |
| 11 | Migrate pnpm settings to `pnpm-workspace.yaml` (`allowBuilds` sharp/esbuild + `yaml` override); add `engines.node >=22.12.0` | 2026-06-23 | pnpm 11 ignores the package.json `pnpm` field; sharp needs its native build; keep the yaml CVE patched | One extra config file |
| 12 | Standard: code must pass `pnpm build` + `astro check` with **0 errors/warnings/hints**; fix root cause, don't suppress | 2026-06-23 | Owner directive — best-practice, optimal code; no warning debt | Slightly more rigor per change |
| 13 | Vercel: pin pnpm via `packageManager: pnpm@11.8.0` + Corepack (`ENABLE_EXPERIMENTAL_COREPACK=1`, **Preview env only** for now) | 2026-06-23 | Vercel defaulted to pnpm 9 which reads `pnpm-workspace.yaml` as a workspace (needs `packages:`) and fails; align CI to local pnpm 11 | ⚠️ Must also add the env var to **Production** before the final `v3 → main` merge |
| 14 | Design-direction exploration: 6 throwaway mocks under `/new-design/` (noindex), each with light/dark toggle | 2026-06-23 | Let owner + Dotan pick a creative direction before building the real design system | Throwaway code; removed once a direction is chosen |
