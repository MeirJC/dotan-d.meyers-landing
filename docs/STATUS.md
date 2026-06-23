---
status: live
updated: 2026-06-23
---
# Status

> Timezone for all dates in these docs: **Asia/Jerusalem (IDT/IST)**.

## Now
- **Active spec:** `specs/001-astro-7-upgrade` — **upgrade done**, build/check/audit all clean.
  Pending: browser QA (islands + Lighthouse parity), then merge `feat/astro-7-upgrade` → `v3`.
- **On Astro 7.0.0** (+ @astrojs/react 6, @astrojs/mdx 7). `pnpm audit`: 0 vulns. Dev server: http://localhost:4321.
- **Branch:** working on `feat/astro-7-upgrade` (off `v3`). Live site stays on `main`.
- **Design exploration:** 6 `/new-design/` mocks built (each light/dark) — awaiting owner+Dotan pick → seeds creative-direction + design-system (3a). Gallery: `/new-design/`.
- **Vercel preview:** fixed (pnpm 9→11 via packageManager + Corepack on Preview); production untouched.
- **Blockers:** chrome-devtools MCP offline this session → browser QA deferred to owner / next session.

## v3 program (roadmap)

Branch model: `v3` base → one feature branch per dossier → merge to `v3` → single `v3 → main` at the end.
Each dossier runs the spec loop and opens with its own date-current research.

- [x] **Dossier 0 — Foundation & governance** — Dev-Docs System + power-ups, baseline + discovery research, v3 branch pushed.
- [~] **Dossier 1 — Platform upgrade**
  Astro 6.4.3 → 7 (`pnpm dlx @astrojs/upgrade`); resolves 2 Astro CVEs; JSX-whitespace RTL QA; adopt queued rendering + AI dev tooling.
- [ ] **Dossier 2 — Data-model modernization**
  Future-ready schemas (projects / services / testimonials / locations / certificates slot). Shaped right before design.
- [ ] **Dossier 3a — Design system**
  Design DNA: typography, OKLCH palette (keep logo, color open), motion, spatial; Tailwind v4 best practices; core components incl. before/after slider. Awesome at mobile/tablet/desktop.
- [ ] **Dossier 3b — Page rebuild**
  Apply the system to every page (project-led hero, trust strip, About, testimonials); folds in quick-win a11y/correctness fixes; browser-verified.
- [ ] **Dossier 4 — SEO / AIO / GEO + conversion**
  Schema graph from single NAP source + Person credentials; answer-first Hebrew content; before/after galleries; slots for reviews / sample reports / certificates / WhatsApp CTA.
- [ ] **Dossier 5 — QA & launch**
  Full responsive + Lighthouse + a11y sweep; doc reconciliation; ship `v3 → main`.

## Parked (post-launch backlog)
- **AI enhancements** — pipeline-first (Hebrew content drafting, schema/meta gen, alt-text, image upscaling). Product AI (chatbot, photo-as-lead-enrichment) needs a serverless endpoint. Research in discovery doc.
- **WhatsApp Business integration** — pending Dotan's decision; proposal kept on owner's Desktop, intentionally not in-repo. Design reserves a CTA slot.
- **Professional certificates** — Dotan to provide; format TBD. Design reserves a credentials slot.

## Legend
[x] done · [~] in progress · [ ] planned · [-] dropped
