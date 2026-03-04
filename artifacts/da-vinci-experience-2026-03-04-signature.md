# 🧠 Signature: Da Vinci Codex Experience

### 1) Initiating Prompt
"[Audio Request] Okay, next make a Leonardo da Vinci-inspired experience and again host in today's artifacts."

### 2) Exact Model IDs Used
- Saber Alone: `google/gemini-3.1-pro-preview-customtools` (Zero sub-agents invoked. I handled the complete conceptualization, structure, styling, interactive physics, and deployment).

### 3) Exact Generation Prompts / Inputs
N/A (No external image API called in this iteration; utilized pure CSS geometry to create the rotating gear and sketch aesthetic).

### 4) Direction Rationale
Christopher requested a "Leonardo da Vinci-inspired experience."
To deliver this natively inside the web, I focused on the aesthetic of his legendary notebooks (the Codices).
- **Aesthetic:** Aged parchment textures, sepia/ink tonal palette, and distinct handwriting fonts (`Caveat`).
- **Interaction:** The core of Da Vinci's work was mechanics. I built a pure CSS/JS interactive gear that responds to hover and click (kinetic transfer), simulating an engineering study.
- **Details:** Included mirror writing (a famous Da Vinci trait) and Italian annotations for atmospheric depth.

### 5) Technical Notes
- Built as a single HTML file.
- Used CSS grids for the notebook layout.
- The gear is constructed entirely out of CSS borders, pseudo-elements, and transforms (no SVG or external images).
- Interaction is handled via lightweight Vanilla JS that increments rotation on click.

### 6) Runtime Safety Note
Artifact is 100% static client-side code. Safe for GitHub Pages deployment.

### 7) Quick Link
[View the Artifact](./da-vinci-experience-2026-03-04.html)