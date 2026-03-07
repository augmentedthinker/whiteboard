# Remote Viewer (Alt) — Dramatic Landing Style Guide

Practical direction for a static HTML/CSS landing page: cinematic, high-contrast, trustworthy, and fast.

## 1) Palette Tokens

Use CSS custom properties:

```css
:root {
  /* Core surfaces */
  --bg-950: #05070D;      /* page background */
  --bg-900: #0B1020;      /* section background */
  --surface-800: #11182B; /* cards/nav */

  /* Dramatic accents */
  --brand-500: #5B8CFF;   /* primary accent (electric blue) */
  --brand-400: #7AA4FF;   /* hover/soft accent */
  --violet-500: #8B5CF6;  /* secondary accent */
  --cyan-400: #22D3EE;    /* highlight/glow line */

  /* Text */
  --text-100: #F3F6FF;    /* primary text */
  --text-300: #C7D0E6;    /* body-muted */
  --text-500: #8B96B2;    /* captions/meta */

  /* Feedback */
  --ok-500: #22C55E;
  --warn-500: #F59E0B;
  --danger-500: #EF4444;

  /* Utility */
  --border-700: #25304A;
  --focus-400: #93C5FD;
  --shadow-900: rgba(2, 6, 23, 0.55);
}
```

Guidelines:
- Keep large backgrounds on `--bg-950` / `--bg-900`.
- Reserve bright colors (`--brand-*`, `--cyan-400`) for CTAs and key highlights.
- Maintain contrast ratio >= 4.5:1 for body text.

---

## 2) Typography Choices

**Font stack (no heavy deps):**
- Headings: `"Space Grotesk", "Inter", system-ui, sans-serif`
- Body/UI: `"Inter", "Segoe UI", Roboto, system-ui, sans-serif`

**Scale (mobile-first with clamp):**
```css
:root {
  --fs-hero: clamp(2rem, 7vw, 3.5rem);
  --fs-h1: clamp(1.625rem, 5vw, 2.5rem);
  --fs-h2: clamp(1.25rem, 3.8vw, 1.75rem);
  --fs-body: clamp(0.98rem, 2.3vw, 1.08rem);
  --fs-small: 0.875rem;
}
```

Type rules:
- Headings: weight 600–700, letter-spacing `-0.01em`.
- Body: weight 400–500, line-height `1.55–1.65`.
- Keep max text width ~65ch for readability.

---

## 3) Button Style Specs

### Primary Button (main CTA)
- Background: `linear-gradient(135deg, var(--brand-500), var(--violet-500))`
- Text: `var(--text-100)`
- Radius: `12px`
- Padding: `0.8rem 1.1rem` (mobile), `0.9rem 1.25rem` (desktop)
- Shadow: `0 8px 24px var(--shadow-900)`
- Border: `1px solid rgba(255,255,255,0.12)`

States:
- Hover: brighten gradient slightly + `transform: translateY(-1px)`
- Active: `transform: translateY(0)` + reduce shadow
- Focus-visible: `outline: 2px solid var(--focus-400); outline-offset: 2px;`
- Disabled: `opacity: .5; cursor: not-allowed; filter: grayscale(0.2)`

### Secondary Button
- Background: `rgba(255,255,255,0.03)`
- Text: `var(--text-100)`
- Border: `1px solid var(--border-700)`
- Hover: `background: rgba(122,164,255,0.08); border-color: var(--brand-400)`

### Ghost Button / Link CTA
- Background: transparent
- Text: `var(--brand-400)`
- Hover: underline or subtle bottom-border reveal

---

## 4) Motion Ideas (Subtle + Lightweight)

Use only CSS transitions/animations, no JS animation libs.

- Global transition timing:
  - `--ease-out: cubic-bezier(.22,.61,.36,1)`
  - duration `140ms–220ms` for interactive states
- Hero accent glow pulse (very soft):
  - opacity drift `0.18 -> 0.28 -> 0.18`
  - duration `5–7s`, infinite, alternate
- Card hover:
  - `transform: translateY(-2px)` + border tint
- Button micro-lift:
  - `translateY(-1px)` on hover only

Reduced motion support:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 5) Mobile-First Constraints

Design for **320px+ width** first.

Layout constraints:
- Single-column hero on mobile; split hero starts at `min-width: 768px`.
- Horizontal page padding: `16px` mobile, `24px` tablet, `32px` desktop.
- Tap targets: minimum `44px` height.
- Navigation: collapse to simple menu button under `768px`.

Content constraints:
- Keep hero copy to 2–3 short lines + one supporting sentence.
- Max two CTAs in hero (one primary, one secondary).
- Avoid heavy background video; use static gradient + subtle noise/glow image if needed.

Performance constraints (static page):
- Max 2 font files total.
- Prefer SVG icons over icon libraries.
- Keep above-the-fold CSS lean; avoid large box-shadow stacks and blur-heavy effects.

---

## Quick Starter Snippet

```css
body {
  margin: 0;
  background: radial-gradient(circle at 20% 0%, #111A33 0%, var(--bg-950) 42%);
  color: var(--text-100);
  font-family: "Inter", system-ui, sans-serif;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  padding: .8rem 1.1rem;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.12);
  background: linear-gradient(135deg, var(--brand-500), var(--violet-500));
  color: var(--text-100);
  font-weight: 600;
  text-decoration: none;
  transition: transform 180ms var(--ease-out), filter 180ms var(--ease-out);
}
.btn-primary:hover { transform: translateY(-1px); filter: brightness(1.06); }
.btn-primary:focus-visible { outline: 2px solid var(--focus-400); outline-offset: 2px; }
```
