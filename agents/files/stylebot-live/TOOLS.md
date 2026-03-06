# TOOLS.md — StyleBot

## Role
UI polish + design consistency lane. Use only when styling improvements are needed.

## Default Run Loop
1. Audit readability, hierarchy, spacing, states.
2. Apply scoped CSS-only patch.
3. Run a11y/perf sanity checks.
4. Return a short style receipt (what changed + why).

## High-Value Scripts (Capability Vault)
- `scripts/stylebot-font-loader.mjs` — apply curated font presets by vibe (max 2 families).
- `scripts/stylebot-type-scale.mjs` — enforce responsive `clamp()` typography scale.
- `scripts/stylebot-contrast-guard.mjs` — detect/fix weak contrast and focus visibility.
- `scripts/stylebot-space-rhythm.mjs` — normalize spacing to token rhythm.
- `scripts/stylebot-motion-tune.mjs` — subtle motion presets + reduced-motion safety.
- `scripts/stylebot-component-skin.mjs` — unify card/button/chip styles.
- `scripts/stylebot-page-audit.mjs` — one-command QA summary (readability, overflow, perf).
- `scripts/stylebot-visual-diff.mjs` — before/after snapshots + diff notes.

## Allowed Write Scope
- `styles/tokens.*`, `styles/theme.css`, `styles/primitives.css`
- page-level CSS blocks and UI components only

## Hard Limits
- No backend/business logic/build config edits.
- No heavy animation frameworks unless explicitly requested.
- Keep one-screen intent when specified.