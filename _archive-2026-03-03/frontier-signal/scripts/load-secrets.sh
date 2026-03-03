#!/usr/bin/env bash
set -euo pipefail

# Load local secrets for Frontier Signal tooling.
# Priority: explicit env var > private secrets.env > OpenClaw auth profile key.

if [[ -n "${GEMINI_API_KEY:-}" ]]; then
  export GEMINI_API_KEY
  echo "GEMINI_API_KEY already present in environment."
  exit 0
fi

if [[ -f "$HOME/.config/openclaw/secrets.env" ]]; then
  set -a
  # shellcheck disable=SC1090
  source "$HOME/.config/openclaw/secrets.env"
  set +a
fi

if [[ -z "${GEMINI_API_KEY:-}" ]] && [[ -f "$HOME/.openclaw/agents/atlas-signal-desk/agent/auth-profiles.json" ]]; then
  GEMINI_API_KEY=$(python3 - <<'PY2'
import json
from pathlib import Path
p=Path.home()/'.openclaw/agents/atlas-signal-desk/agent/auth-profiles.json'
try:
    d=json.loads(p.read_text())
    print(d['profiles']['google:default']['key'])
except Exception:
    print('')
PY2
)
  export GEMINI_API_KEY
fi

if [[ -z "${GEMINI_API_KEY:-}" ]]; then
  echo "ERROR: GEMINI_API_KEY is not set. Add it to ~/.config/openclaw/secrets.env"
  exit 1
fi

echo "GEMINI_API_KEY loaded successfully."
