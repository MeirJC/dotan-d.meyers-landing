#!/usr/bin/env bash
# Dev-Docs: inject the session-start ritual as context.
# SessionStart hooks can return additionalContext that Claude sees before its first action.
cat <<'JSON'
{"hookSpecificOutput":{"hookEventName":"SessionStart","additionalContext":"Dev-Docs ritual — read docs/INDEX.md, then docs/STATUS.md, then the active spec named there. Open ONLY the docs the INDEX routes you to; do not read the whole docs/ folder. For a non-trivial feature, follow the spec loop (requirements -> approval gate -> design -> tasks)."}}
JSON
exit 0
