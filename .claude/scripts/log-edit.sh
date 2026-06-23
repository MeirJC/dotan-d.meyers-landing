#!/usr/bin/env bash
# Dev-Docs: append each edited file to the session ledger (PostToolUse on Edit|Write).
# Hook data arrives as JSON on stdin; we want tool_input.file_path.
set -euo pipefail

proj="${CLAUDE_PROJECT_DIR:-$(pwd)}"
log="$proj/.claude/session.log"
input="$(cat)"

# Prefer jq; fall back to grep/sed so this works without jq installed.
file="$(printf '%s' "$input" | jq -r '.tool_input.file_path // empty' 2>/dev/null || true)"
if [ -z "$file" ]; then
  file="$(printf '%s' "$input" | grep -o '"file_path"[[:space:]]*:[[:space:]]*"[^"]*"' | head -1 | sed 's/.*"\([^"]*\)"$/\1/')"
fi

[ -n "$file" ] && printf '%s  edit  %s\n' "$(TZ='Asia/Jerusalem' date '+%F %T')" "$file" >> "$log"
exit 0
