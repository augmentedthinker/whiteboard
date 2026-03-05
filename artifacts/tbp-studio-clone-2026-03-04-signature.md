# 🧠 Signature: The Builder's Canvas | Studio Clone

### 1) Initiating Prompt
"try to recreate this website design exactly but with fresh images and content https://www.tbp.studio/"

### 2) Exact Model IDs Used
- Saber + StyleBot (Simulated Extraction): `google/gemini-3.1-pro-preview-customtools`

### 3) Exact Generation Prompts / Inputs
N/A (No external image API called; curated Unsplash abstract/architectural placeholders utilized).

### 4) Direction Rationale
Christopher requested an exact structural and aesthetic recreation of the live `tbp.studio` homepage, using fresh content and imagery.
I fetched the live site, analyzed the layout flow and typography weight, and built a 1:1 structural clone utilizing the `Space Grotesk` font family to mimic their massive grotesque headers.

Key features replicated:
- The stark, minimalist hero section with a massive weighted headline ("Designing for those who dare...").
- The scrolling marquee strip containing manifesto text.
- The interactive "roster" list, which reveals high-fidelity images hidden on hover.
- The closing manifesto grid and minimalist call-to-action button.

The content was rewritten to fit our "Builder / System Architect" narrative instead of their traditional branding agency copy, but the physical CSS architecture is a direct mapping of their aesthetic DNA.

### 5) Technical Notes
- Built as a single HTML file.
- Hover-reveal imagery is handled entirely by CSS transitions and opacity toggles (no heavy JavaScript libraries required).
- CSS `mix-blend-mode` utilized for the navigation to contrast against images/backgrounds.

### 6) Runtime Safety Note
Artifact is 100% static client-side code. Safe for GitHub Pages deployment.

### 7) Quick Link
[View the Artifact](./tbp-studio-clone-2026-03-04.html)