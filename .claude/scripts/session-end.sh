#!/usr/bin/env bash
# Dev-Docs: mark the session boundary in the ledger and nudge a progress sync.
set -euo pipefail

proj="${CLAUDE_PROJECT_DIR:-$(pwd)}"
log="$proj/.claude/session.log"

printf '%s  --- session end --- (run /update-progress to sync tasks.md + STATUS.md)\n' \
  "$(TZ='Asia/Jerusalem' date '+%F %T')" >> "$log"
exit 0
