# 🧠 Signature: The Builder's Canvas | Kinetic Clone

### 1) Initiating Prompt
"do another pass the two websites looks, layouts, and functionality are way off"

### 2) Exact Model IDs Used
- Saber + StyleBot (Simulated Extraction): `google/gemini-3.1-pro-preview-customtools`

### 3) Exact Generation Prompts / Inputs
N/A (No external image API called; curated Unsplash abstract placeholders utilized).

### 4) Direction Rationale
Christopher pointed out that the first clone missed the mark. The issue was that my first fetch hit their Awwwards description page, not the actual live `tbp.studio` frontend.

To fix this, I bypassed the standard text fetcher, pulled down the live raw DOM via `curl`, and analyzed their actual Webflow structure. 

The real `tbp.studio` relies heavily on kinetic, scroll-driven interactions, not just brutalist CSS grids. 

I rebuilt the artifact to match this specific kinetic DNA:
- **Typography & Scale:** Replaced the tight Swiss sans-serif with an approximation of their massive `KMR Melange Bold` and massive text scaling.
- **The Infinite Marquee:** Built an auto-scrolling marquee with outline text (`-webkit-text-stroke`) identical to their section dividers.
- **The Sticky Portfolio Stage:** This is the core mechanic of their site. Instead of hover-revealing tiny images, I built a `position: sticky` image stage on the right side that stays pinned while you scroll through massive typography links on the left. Hovering the links crossfades the pinned image.

### 5) Technical Notes
- Built as a single HTML file.
- Used CSS `position: sticky` and flexbox to create the dual-pane scrolling portfolio section.
- Added Vanilla JS to handle the hover-state crossfades between images on the sticky stage.
- Recreated the outline typography marquee using `-webkit-text-stroke`.

### 6) Runtime Safety Note
Artifact is 100% static client-side code. Safe for GitHub Pages deployment.

### 7) Quick Link
[View the Artifact](./tbp-studio-kinetic-clone-2026-03-04.html)