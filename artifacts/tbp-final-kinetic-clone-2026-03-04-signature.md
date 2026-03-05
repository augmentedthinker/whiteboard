# 🧠 Signature: The Builder's Canvas | Final Kinetic Clone

### 1) Initiating Prompt
"Go!" (Executing Steps 3 & 4: Parallax GSAP-style stacking, custom cursors, Flobber button, and animated archive lists).

### 2) Exact Model IDs Used
- Saber + StyleBot (Simulated Extraction): `google/gemini-3.1-pro-preview-customtools`

### 3) Exact Generation Prompts / Inputs
N/A (Curated Unsplash placeholders utilized for layout structure).

### 4) Direction Rationale
Christopher authorized the final layers of the tbp.studio clone execution (Steps 3 & 4). 
With the sticky scroll-jacking architecture established in the previous pass, I layered in the high-fidelity micro-interactions that give the site its "premium" feel:

- **True Parallax Mapping (Step 3):** Modified the image panels to include an inner `img` tag that is 130% height. As the `clip-path` reveals the container, Javascript dynamically calculates a `translateY()` offset for the inner image based on fractional scroll progress. This creates the optical illusion that the image is scrolling at a different speed than the page (the GSAP parallax effect).
- **The Flobber Button (Step 4):** Engineered a CSS-only floating action button in the bottom right corner. Utilized complex `@keyframes` to continuously morph the `border-radius` and `translateY` values, simulating an organic, floating, gelatinous orb.
- **Custom Cursor & Blend Modes:** Replaced the system cursor with a custom CSS/JS tracking dot. Added hover states that expand the cursor over interactive elements, using `mix-blend-mode: difference` so it dynamically contrasts against any background.
- **Archive List Interaction:** Recreated the bottom text list with smooth `::after` pseudo-element underlines that expand on hover, revealing hidden secondary text spans (project categories) via CSS translations.

### 5) Technical Notes
- Built as a single HTML file.
- `mix-blend-mode: difference` applied to both the custom cursor and the massive typographic mask.
- Used fractional math in the scroll listener to drive `translateY` for buttery-smooth parallax.
- No external libraries (GSAP, jQuery) used; 100% Vanilla JS and CSS.

### 6) Runtime Safety Note
Artifact is 100% static client-side code. Safe for GitHub Pages deployment.

### 7) Quick Link
[View the Artifact](./tbp-final-kinetic-clone-2026-03-04.html)