# Signature Standard (Remote Viewer Artifacts)

Keep signatures concise, informative, and fun.

## Required fields
1. Project intent (1-2 lines)
2. User request (compressed)
3. Agent orchestration (who did what)
4. Model/tool trail (exact model IDs when relevant)
5. Asset/file references (when relevant)
6. Short fun note
7. Link back to artifact

## Formatting
- Lightweight HTML page in `artifacts/` named:
  - `<artifact-name>-signature.html`
- Add `🧠 Signature` link on Today card with `event.stopPropagation()`.

## Performance note
- Minimal added compute (mostly documentation + tiny HTML file).
- Main cost is generation itself, not signature pages.
