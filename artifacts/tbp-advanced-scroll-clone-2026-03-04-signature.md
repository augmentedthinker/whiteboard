# 🧠 Signature: The Builder's Canvas | Advanced Scroll Clone

### 1) Initiating Prompt
"So, this is a very complex website, the TBP Studio... I want you to try to incorporate all this stuff into the website that you're building... make a plan for multi-step improvement to mimic this as closely as possible." -> "Go!" (Executing Steps 1 & 2)

### 2) Exact Model IDs Used
- Saber + StyleBot (Simulated Extraction): `google/gemini-3.1-pro-preview-customtools`

### 3) Exact Generation Prompts / Inputs
N/A (Curated Unsplash placeholders utilized for layout structure).

### 4) Direction Rationale
Christopher reviewed the live browser screenshot of `tbp.studio` and noted the deep scroll-jacking, GSAP-style timeline animations, and typographic masking. 
To replicate this level of interaction without relying on heavy external libraries like GSAP, I engineered a raw Vanilla JS and CSS `position: sticky` solution to execute Steps 1 and 2 of our plan:

- **The Sticky Stage:** Built a `400vh` scroll container that pins a `100vh` stage in place.
- **The Parallax Image Stack:** Instead of crossfading, images are stacked on the right side of the screen. As the user scrolls, Javascript calculates the scroll percentage and dynamically manipulates the CSS `clip-path` of the images, creating the illusion of panels sliding up over one another in sync with the mouse wheel.
- **The Typographic Mask (The "HILTON" effect):** Positioned a massive text layer overlapping the image stack. Applied `mix-blend-mode: difference` so the text inverts its color dynamically as the imagery slides beneath it, creating a seamless, premium mask effect.

### 5) Technical Notes
- Built as a single HTML file.
- Used `position: sticky` for the main pinning architecture.
- Replaced GSAP ScrollTrigger with a custom, lightweight `window.addEventListener('scroll')` script calculating fractional progress.
- Manipulated `clip-path: inset()` dynamically for the sliding image reveal.
- Used `mix-blend-mode: difference` for typography color inversion over changing background contexts.

### 6) Runtime Safety Note
Artifact is 100% static client-side code. Safe for GitHub Pages deployment.

### 7) Quick Link
[View the Artifact](./tbp-advanced-scroll-clone-2026-03-04.html)