---
description: Scaffold a new feature spec (requirements/design/tasks) and draft requirements only, then stop at the approval gate
argument-hint: <feature-name>
allowed-tools: Bash(ls:*)
---

You are creating a new feature spec under `specs/` following the Dev-Docs System.

Existing specs (to pick the next number):
!`ls -1 specs/ 2>/dev/null || echo "(no specs/ yet)"`

## Steps

1. Determine `NNN` = the next sequential 3-digit number after the folders above (start at `001`).
2. Create `specs/NNN-$ARGUMENTS/` with three files using the templates below.
3. Fill in **`requirements.md` only** — derive user stories and EARS acceptance criteria from what I've told you and from `docs/product.md`. Leave `design.md` and `tasks.md` as their template stubs for now.
4. Run `date '+%Y-%m-%d'` for the `updated:` frontmatter — never guess the date.
5. **STOP.** Present `requirements.md` and ask me to approve it. Do **not** write `design.md`, `tasks.md`, or any code until I approve the requirements.

## Templates

### requirements.md
```markdown
---
status: draft
updated: <YYYY-MM-DD>
---
# Requirements — <Feature>

## Story
As a <user>, I want <capability> so that <benefit>.

## Acceptance criteria  (EARS — each individually testable)
1. WHEN <trigger> THE SYSTEM SHALL <response>.
2. IF <condition> THEN THE SYSTEM SHALL <response>.
3. WHILE <state> THE SYSTEM SHALL <response>.

## Out of scope
- <explicitly excluded; link to a future spec if relevant>
```

### design.md  (stub — fill after requirements are approved)
```markdown
---
status: draft
updated: <YYYY-MM-DD>
---
# Design — <Feature>

## Approach
## Interfaces / files
## Data touchpoints
## Edge cases
## Test plan (how we'll verify)
```

### tasks.md  (stub — fill after design)
```markdown
---
status: draft
updated: <YYYY-MM-DD>
---
# Tasks — <Feature>

- [ ] 1. <task>  (-> req 1)
- [ ] 2. <task>  (-> req 2)
- [ ] N. Verification: <test/build/screenshot that proves it works>
```
