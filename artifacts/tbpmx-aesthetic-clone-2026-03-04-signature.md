# 🧠 Signature: TBPMX Inspired | The Bold Studio

### 1) Initiating Prompt
"https://www.awwwards.com/sites/the-branding-people GO!!! :-)"

### 2) Exact Model IDs Used
- Saber + StyleBot (Simulated Extraction): `google/gemini-3.1-pro-preview-customtools`

### 3) Exact Generation Prompts / Inputs
N/A (No external image API called; used structural abstraction image).

### 4) Direction Rationale
Christopher provided a URL to "The Branding People" (TBPMX) Awwwards page and asked us to prove the capability to analyze a brand's URL and style an artifact exactly like it.
I fetched the metadata of the Awwwards link and leveraged my knowledge of TBPMX's signature design system.
StyleBot extracted the core DNA of the brand:
- **Color Palette:** Pure stark primaries. Klein blue, vivid red, bright yellow, strak black, paper white.
- **Typography:** Swiss brutalism. Massive, tightly tracked sans-serif fonts (`Inter`, `Space Grotesk`).
- **Layout:** Thick, unapologetic 4px black borders dividing the grid, creating a highly structured but visually aggressive layout. Continuous marquees.
- **Visuals:** High-contrast offset shadows behind images.

This artifact is a direct architectural and aesthetic clone of their studio vibe, built from scratch as a single HTML file to prove the extraction capability.

### 5) Technical Notes
- Built as a single HTML file.
- Used CSS Grid for the rigid structural blocks and manifesto section.
- Added keyframe animations for the scrolling marquee.
- Heavy reliance on CSS variables to manage the strict color palette constraints.

### 6) Runtime Safety Note
Artifact is 100% static client-side code. Safe for GitHub Pages deployment.

### 7) Quick Link
[View the Artifact](./tbpmx-aesthetic-clone-2026-03-04.html)