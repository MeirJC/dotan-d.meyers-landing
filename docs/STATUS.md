---
status: live
updated: 2026-06-23
---
# Status

> Timezone for all dates in these docs: **Asia/Jerusalem (IDT/IST)**.

## Now
- **Active spec:** none yet — Dossier 0 (Foundation) bootstrapping in progress.
- **Focus:** stand up the Dev-Docs System, baseline, and v3 governance. Next: Dossier 1 (Astro 7 upgrade).
- **Branch:** `v3` (long-lived integration branch). Live site stays on `main`.
- **Blockers:** none.

## v3 program (roadmap)

Branch model: `v3` base → one feature branch per dossier → merge to `v3` → single `v3 → main` at the end.
Each dossier runs the spec loop and opens with its own date-current research.

- [~] **Dossier 0 — Foundation & governance**
  Create `v3`; Dev-Docs System + power-ups; remove stale docs; baseline audit; discovery research saved.
- [ ] **Dossier 1 — Platform upgrade**
  Astro 6.4.3 → 7 (`npx @astrojs/upgrade`); dep updates; JSX-whitespace RTL QA; adopt queued rendering + AI dev tooling.
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
