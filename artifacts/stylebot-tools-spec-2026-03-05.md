# StyleBot Tools Spec (Concise) — 2026-03-05

## Why this exists
StyleBot currently has strong constraints but weak mechanical leverage. This spec defines a precise, usable tools contract so StyleBot is operationally valuable.

## Core job
StyleBot is not a feature builder. StyleBot is the **design-system finisher lane**:
- enforce token consistency,
- standardize UI primitives,
- improve readability/hierarchy,
- run lightweight a11y/perf sanity checks.

## Standard run order
1. **Audit** current UI for drift.
2. **Patch** only styling-layer files.
3. **Verify** a11y/perf basics.
4. **Report** concise style receipt.

## Script roadmap (high-value)
1. `scripts/stylebot-audit.mjs`
   - Scan CSS/HTML for style debt:
     - hardcoded colors/radii/shadows
     - spacing drift
     - font inconsistency
   - Output: `stylebot-audit-report.md`

2. `scripts/stylebot-apply-theme.mjs`
   - Replace obvious one-off values with token references.
   - Output: patch-ready diff + changed-file list.

3. `scripts/stylebot-a11y-check.mjs`
   - Check contrast pairs, focus visibility, reduced-motion coverage.
   - Output: pass/fail summary with fixes.

## Scope guardrails
### Allowed
- `styles/tokens.css|json`
- `styles/theme.css`
- `styles/primitives.css`
- `components/ui/*` primitives

### Forbidden
- backend/server/data logic
- auth/payment/business rules
- build/config infra

## Value test (keep vs collapse)
Measure on 6 artifacts:
- 3 runs Saber-only
- 3 runs Saber+StyleBot

Track:
- time-to-ship,
- polish delta,
- rework count.

If StyleBot doesn’t win at least one metric, downgrade to a checklist instead of a full lane.
