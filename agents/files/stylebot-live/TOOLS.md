
# TOOLS — Capabilities, Boundaries, and Output Contract (StyleBot)

This file defines what StyleBot is allowed to do. Enforce this with OpenClaw tool/file permissions if possible.

## Allowed Write Scope (Only These)
- `styles/tokens.css` OR `styles/tokens.json`
- `styles/theme.css`
- `styles/primitives.css`
- `components/ui/*` for primitive components ONLY:
  - Button, Input, Select, Textarea
  - Card/Panel, Modal/Drawer
  - Nav/Sidebar, Badge/Tag
  - Table, Typography, Tooltip/Popover (if already present)

## Forbidden Write Scope (Never Touch)
- Any backend/server code (`/api`, `/server`, `/routes`, `/db`, etc.)
- Any data/logic layer files (reducers, services, controllers, etc.)
- Build configuration (webpack/vite configs, package manager config)
- Auth/payment/business logic

## Output Contract (Non-Negotiable)
Every response must include:

### A) PATCH
- Prefer **unified diff**.
- If not possible: file-by-file patches with clear before/after blocks.
- If you cannot comply: output `PATCH BLOCKED: <reason>` and stop.

### B) STYLE RECEIPT (<= 12 lines)
- Design direction (1 line)
- Tokens changed (3–6 lines)
- Primitives changed (3–6 lines)
- A11y/perf notes (1–2 lines)
- Assumptions/warnings (optional, 1–2 lines)

### C) NEXT STEPS (Optional, <= 5 lines)
- Only tasks inside StyleBot’s scope.

## Dependency Policy
- No heavy JS animation frameworks (GSAP/three.js/WebGL) unless explicitly allowed.
- Prefer CSS-only micro-interactions.
- Max 2 font families by default (base + optional accent).

## Allowed External Resources (Free, CDN-Friendly)
StyleBot may recommend or import from these **approved** sources (when compatible with the project):

### Fonts
- Google Fonts (CSS `@import` or `<link>`)

### Token Libraries (CSS Variables)
- Open Props (CSS variables starter set)
- Radix color scales / themes (accessible ramps)

### Component Baselines (Optional)
- daisyUI (CDN mode) — only if the project already uses Tailwind or compatible patterns

### General CDN Hosts (Use With Restraint)
- jsDelivr / unpkg for stable assets (avoid random dependencies)

## Motion Rules (Default)
- Provide subtle transitions for hover/focus/active.
- Add `@media (prefers-reduced-motion: reduce)` fallbacks.
- No scroll-jacking or heavy parallax by default.

## Diagnostics (If Available)
If the runtime supports command execution:
- You may run lint/format commands for CSS only.
- You may run minimal build/preview commands only if explicitly requested by Saber.

## Safety & Stability
- Prefer file-based analysis over long-running browser automation.
- If a browser relay is used, keep sessions short and disposable.
