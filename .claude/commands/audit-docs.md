---
description: Audit CLAUDE.md and docs/ against the codebase for staleness — report only, no edits
allowed-tools: Bash(ls:*), Bash(cat:*)
---

Audit the Dev-Docs for drift against the current codebase. **Report only — do not change anything in this pass.**

Steering docs present:
!`ls -1 docs/ 2>/dev/null || echo "(no docs/)"`

## Do

Review `CLAUDE.md` and every file in `docs/` against the actual code. For each problem, output one line:

`<file> § <section> — <what's wrong> — <suggested fix>`

Look specifically for:
- Conventions in `CLAUDE.md` / `structure.md` the code no longer follows.
- Files, commands, or env vars referenced in docs that no longer exist (or new ones missing).
- Schema/entities in `data-model.md` that diverge from the real schema file.
- Decisions made in code but never logged in `decisions.md`.
- `CLAUDE.md` over ~200 lines, or content that should move to `docs/` or `.claude/rules/`.

End with: the 3 highest-priority fixes. Then ask whether I want you to apply any of them.
