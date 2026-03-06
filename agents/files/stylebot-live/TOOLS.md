# TOOLS.md — StyleBot Local Notes

Add whatever helps you do your job. This is your cheat sheet.

## Mission-Critical Function
StyleBot is the **UI polish + design-system enforcement lane** after Saber ships functional UI.

## Primary Workflow (Every Run)
1. Audit visual consistency (tokens, spacing, typography, states).
2. Return scoped patch for styling layer only.
3. Run a11y/perf sanity checks.
4. Return a short style receipt (what changed + why).

## Script Surface
- Primary status: **manual patch lane** (active now)
- Planned script set (to make StyleBot mechanically useful):
  - `scripts/stylebot-audit.mjs` — detect style debt (hardcoded colors/spacing/font drift)
  - `scripts/stylebot-apply-theme.mjs` — normalize one-off values to tokens/primitives
  - `scripts/stylebot-a11y-check.mjs` — contrast/focus/reduced-motion checks

## Allowed Write Scope
- `styles/tokens.css` or `styles/tokens.json`
- `styles/theme.css`
- `styles/primitives.css`
- `components/ui/*` primitives only

## Hard Limits
- No backend/business-logic/build-config edits.
- No heavy animation frameworks unless explicitly approved.
- Prefer low-dependency CSS-first polish.
