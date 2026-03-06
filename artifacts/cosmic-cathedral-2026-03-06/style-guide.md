# Cosmic Cathedral — UI Style Guide

*Inspiration: visionary, luminous, sacred-geometry mood translated to practical UI. Do not replicate any specific artwork.*

## 1) Design Intent
- **Tone:** transcendent, precise, calm intensity
- **Product posture:** professional utility with mystical accent, never noisy
- **Accessibility floor:** WCAG AA for text and controls

## 2) Color Tokens
Use dark-base + radiant accents; keep content surfaces readable.

```css
:root {
  /* Neutrals */
  --cc-bg-0: #07090F;      /* app background */
  --cc-bg-1: #0D1220;      /* elevated background */
  --cc-surface: #121A2B;   /* cards/panels */
  --cc-surface-2: #19233A; /* hover/elevated */
  --cc-border: #2A3652;

  /* Text */
  --cc-text-1: #F4F7FF;    /* primary */
  --cc-text-2: #B9C4E0;    /* secondary */
  --cc-text-3: #8C98B7;    /* muted */

  /* Radiant accents */
  --cc-cyan: #3DEBFF;
  --cc-violet: #9B7CFF;
  --cc-magenta: #FF5FCF;
  --cc-gold: #FFD166;

  /* Semantic */
  --cc-primary: var(--cc-cyan);
  --cc-secondary: var(--cc-violet);
  --cc-success: #43D59A;
  --cc-warning: var(--cc-gold);
  --cc-danger: #FF6B7A;

  /* Effects */
  --cc-ring: color-mix(in srgb, var(--cc-cyan) 65%, white 35%);
  --cc-glow-soft: 0 0 0 1px color-mix(in srgb, var(--cc-cyan) 25%, transparent),
                  0 0 24px color-mix(in srgb, var(--cc-violet) 22%, transparent);
}
```

### Gradient recipes
- **Aurora line:** `linear-gradient(90deg, #3DEBFF 0%, #9B7CFF 52%, #FF5FCF 100%)`
- **Hero veil:** `radial-gradient(120% 120% at 50% 0%, rgba(155,124,255,.22) 0%, rgba(7,9,15,0) 60%)`

## 3) Typography Pairing
Max 2 families.
- **Display/Headings:** `"Space Grotesk", "Sora", sans-serif`
- **Body/UI:** `"Inter", "Manrope", system-ui, sans-serif`

### Type scale (rem)
- `--fs-hero: clamp(2rem, 3.5vw, 3.5rem)`
- `--fs-h1: clamp(1.5rem, 2.2vw, 2.25rem)`
- `--fs-h2: 1.25rem`
- `--fs-body: 1rem`
- `--fs-small: 0.875rem`

### Weights/usage
- Headings: 600–700, tracking `-0.01em`
- Body: 400–500, line-height `1.55`
- Labels/buttons: 500–600, letter-spacing `0.01em`

## 4) Spacing + Shape Tokens
Use 4px rhythm.

```css
:root {
  --cc-space-1: 0.25rem;  /* 4 */
  --cc-space-2: 0.5rem;   /* 8 */
  --cc-space-3: 0.75rem;  /* 12 */
  --cc-space-4: 1rem;     /* 16 */
  --cc-space-5: 1.5rem;   /* 24 */
  --cc-space-6: 2rem;     /* 32 */
  --cc-space-8: 3rem;     /* 48 */

  --cc-radius-sm: 10px;
  --cc-radius-md: 14px;
  --cc-radius-lg: 20px;

  --cc-shadow-1: 0 6px 20px rgba(2, 6, 20, .45);
  --cc-shadow-2: 0 14px 34px rgba(2, 6, 20, .55);
}
```

## 5) Motion Cues
Subtle, sacred-tech feel; no dramatic movement.

```css
:root {
  --cc-ease: cubic-bezier(.22,.61,.36,1);
  --cc-fast: 140ms;
  --cc-med: 220ms;
}

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

- Hover lift: `transform: translateY(-2px)` + border brighten
- Focus ring: 2px outer glow using `--cc-ring`
- Ambient pulse (hero accent only): opacity 0.85→1 over 3.2s, alternate, infinite (disable in reduced motion)

## 6) Component Recipes

### Card (data/content block)
- Background: `--cc-surface`
- Border: `1px solid --cc-border`
- Radius: `--cc-radius-md`
- Padding: `--cc-space-5`
- Shadow: `--cc-shadow-1`
- Hover: `--cc-surface-2`, `translateY(-2px)`, `--cc-glow-soft`
- Title: heading font 600, `--cc-text-1`
- Meta/body: body font, `--cc-text-2`
- Divider: `color-mix(in srgb, var(--cc-border) 75%, transparent)`

### Hero (landing/top section)
- Min-height: `clamp(380px, 56vh, 620px)`
- Layer stack:
  1. base `--cc-bg-0`
  2. hero veil radial gradient
  3. subtle top noise/mesh at <8% opacity (optional)
- Headline: display font, `--fs-hero`, gradient text (aurora line clipped)
- Subhead width: max `64ch`, `--cc-text-2`
- Primary CTA: cyan fill, dark text, strong focus ring
- Secondary CTA: transparent with violet border + soft glow on hover

## 7) Implementation Notes
- Keep accent usage to ~10–15% of visible UI area.
- Never place magenta/cyan text directly on busy gradients; use solid surface behind text.
- Validate contrast on all states (default/hover/focus/disabled).
- Use tokens first; avoid one-off hex values in components.
