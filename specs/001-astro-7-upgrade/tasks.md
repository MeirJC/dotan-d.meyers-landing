---
status: in-progress
updated: 2026-06-23
---
# Tasks — Astro 7 Upgrade

- [x] 1. Create dossier branch `feat/astro-7-upgrade` off `v3`  (-> req 1)
- [x] 2. Pre-upgrade snapshot: build baseline + captured `pnpm audit` (1 high, 1 mod, 1 low)  (-> req 9, 10)
- [x] 3. `package.json`: add `engines.node >=22.12.0`; remove dead `pnpm.overrides`  (-> req 11)
- [x] 4. Bump to astro 7 / @astrojs/react 6 / @astrojs/mdx 7; clean reinstall  (-> req 1, 9)
- [x] 5. `pnpm build` clean (no Rust-compiler/HTML errors)  (-> req 2)
- [x] 6. `pnpm exec astro check` → 0 errors / 0 warnings / 0 hints (fixed SEOHead `is:inline`)  (-> req 3)
- [x] 7. All 9 routes build; `dist/` emits sitemap.xml + robots.txt + rss.xml  (-> req 4, 5)
- [x] 8. Verified RTL author-line/meta spacing intact in built HTML (no `compressHTML` collapse)  (-> req 6)
- [x] 9. MDX/Markdown renders under Sätteri (build clean, posts generated)  (-> req 8)
- [~] 10. React islands (Embla, EmailJS) hydrate — dev server up; **owner to eyeball / browser QA pending**  (-> req 7)
- [x] 11. `pnpm audit` → "No known vulnerabilities found" (migrated `yaml` override)  (-> req 9, 10)
- [~] 12. Lighthouse parity on `/`, `/blog`, a post — **browser QA pending** (chrome-devtools MCP offline this session)  (-> req 12)
- [x] 13. Updated CLAUDE.md, tech.md, decisions.md, STATUS.md  (-> req 13)
- [x] 14. pnpm-workspace.yaml: `allowBuilds` sharp/esbuild; SEOHead `is:inline` best-practice fix
- [ ] 15. Verification gate: re-run build + astro check + audit before merge to `v3`; confirm browser QA (10, 12)

## Notes
- Browser-dependent QA (10, 12) deferred: chrome-devtools MCP disconnected this session. Dev server is
  running at http://localhost:4321 for the owner to inspect. Functional parity is high-confidence (build
  clean, zero-JS preserved, RTL spacing verified in HTML). Complete before merging to `v3`.
