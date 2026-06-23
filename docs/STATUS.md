---
status: live
updated: 2026-06-23
---
# Status

> Timezone for all dates in these docs: **Asia/Jerusalem (IDT/IST)**.

## Now
- **Branch:** `feat/astro-7-upgrade` (off `v3`); both pushed to origin. Live site on `main` untouched.
- **Astro 7 upgrade — DONE** (astro 7.0.0 + @astrojs/react 6 + @astrojs/mdx 7; build/`astro check` 0/0/0; `pnpm audit` 0 vulns). *Pending:* browser QA (island hydration + Lighthouse parity), then merge `feat/astro-7-upgrade` → `v3`.
- **Design exploration — DONE.** 6 distinct `/new-design/` mocks (each light/dark + before/after slider + Embla gallery, browser-verified desktop+mobile). Gallery: `/new-design/`. Concepts:
  1 Dossier(editorial) · 2 Blueprint(industrial) · 3 Beneath-the-Surface(flagship) · 4 Home&Trust(warm) · 5 No-Compromise(bold/cobalt) · 6 Depth(aurora glass).
- **⏳ WAITING ON:** Dotan to pick a creative direction (a whole option, or a mix). That choice unblocks Dossier 3a.
- **Principle (decision #15):** v3 *evolves & re-skins* existing components (FeatureCard services, ProjectCard, ContactForm, OKLCH tokens) — not a blind rebuild. Mocks = direction-finding only.
- **Vercel preview:** fixed (pnpm pinned to 11 via packageManager + Corepack on Preview env only; production untouched).

## ▶ Resume here next session
1. Read `CLAUDE.md` → `docs/INDEX.md` → this file (the SessionStart hook prompts this automatically).
2. Confirm branch: `git checkout feat/astro-7-upgrade` (or `v3`).
3. Then either:
   - **Direction chosen:** "Start Dossier 3a — build the creative-direction doc + design system from `/new-design/option-N` (Dotan picked it)." Then Dossier 2 (data-model) and 3b (rebuild reusing existing components, restyled).
   - **Finish Dossier 1:** "Run the Astro 7 browser QA (islands + Lighthouse), then merge `feat/astro-7-upgrade` → `v3`."
   - **Tweak a mock:** "Fix `/new-design/option-N` — <what>."
4. Run `pnpm dev` if you want the local preview (dev server is not persistent across sessions).

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
