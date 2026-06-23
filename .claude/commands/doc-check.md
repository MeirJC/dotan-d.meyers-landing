---
description: Validate docs/INDEX.md against the files actually on disk and report drift
allowed-tools: Bash(ls:*), Bash(cat docs/INDEX.md), Bash(grep:*)
---

Check the Dev-Docs INDEX for drift against reality.

Files in docs/:
!`ls -1 docs/ 2>/dev/null || echo "(no docs/ folder)"`

Current INDEX:
!`cat docs/INDEX.md 2>/dev/null || echo "(no INDEX.md)"`

## Do

1. **Missing rows** — list any `docs/*.md` (except INDEX.md itself) that has no row in INDEX.md. Propose a row (`Doc | Path | Read when | Status`) for each.
2. **Dead rows** — list any INDEX row whose `Path` does not exist on disk. Propose removing or fixing it.
3. **Status check** — flag rows whose status looks wrong (e.g. a doc whose frontmatter `updated:` is far older than recent code changes, or `wip` that's clearly done).
4. Present the findings as a checklist. **Apply fixes to `docs/INDEX.md` only** after I confirm — do not touch other files.
