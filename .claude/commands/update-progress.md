---
description: Sync progress — tick completed tasks and refresh STATUS.md from work actually done
allowed-tools: Bash(git status:*), Bash(git log:*), Bash(tail:*), Bash(cat docs/STATUS.md)
---

Update Dev-Docs progress based on evidence of what actually changed — not assumptions.

Recent edits (session ledger):
!`tail -n 50 .claude/session.log 2>/dev/null || echo "(no session log)"`

Uncommitted changes:
!`git status --short 2>/dev/null || echo "(not a git repo)"`

Recent commits:
!`git log --oneline -n 10 2>/dev/null || echo "(no git history)"`

Current status:
!`cat docs/STATUS.md 2>/dev/null || echo "(no STATUS.md)"`

## Do

1. Open the active spec's `tasks.md` (the active spec is named in `docs/STATUS.md` → "Now").
2. Check off `[x]` **only** tasks the evidence above clearly supports. If a task is partially done, leave it `[ ]` and note what remains. **Never invent progress.**
3. Update `docs/STATUS.md` "Now" section: current focus, blockers, active spec pointer. Collapse any finished phase to a one-line summary + archive pointer.
4. Refresh the `updated:` frontmatter (run `date '+%Y-%m-%d'`).
5. Report a one-paragraph summary of exactly what you changed.

Do not modify code or steering docs in this command — progress tracking only.
