# Remote Viewer Artifacts — README

This folder contains standalone, shareable artifact pages used by **Remote Viewer → Today’s Artifacts**.

## Purpose

Artifacts are meant to be:
- visually compelling,
- easy to open/share,
- static-host friendly (GitHub Pages safe),
- and traceable through a matching **🧠 Signature** page.

---

## Artifact + Signature Standard (Required)

Each new artifact should include:
1. `artifact-name-YYYY-MM-DD.html`
2. `artifact-name-YYYY-MM-DD-signature.html`

The signature file is not optional. It is the reproducibility + design-intent ledger.

---

## Signature Template (Default)

Use this structure for every signature page:

### 1) Initiating Prompt (verbatim or near-verbatim)
Capture the user’s original request with enough detail to preserve intent.

### 2) Exact Model IDs Used
List exact model IDs per generated asset. Example:
- Image: `gemini-3.1-flash-image-preview`
- TTS: `gemini-2.5-flash-preview-tts`

### 3) Exact Generation Prompts / Inputs
Include exact text prompt(s) used for image/video/audio generation.

### 4) Direction Rationale
Explain why the artifact took this visual/interaction direction based on the initiating prompt.

### 5) Technical Notes
Summarize implementation details (asset pipeline, animation stack, playback behavior, runtime constraints).

### 6) Runtime Safety Note
State whether artifact is static-only and confirm no runtime API key dependency.

### 7) Quick Link
Include a direct link back to the artifact page.

---

## Historical Artifact Types (examples)

This lane has included:
- cinematic generated-image scenes,
- interactive generative visual experiments (particle fields, wavefields, reactive backgrounds),
- greeting/primer pages,
- atmospheric motion demos,
- audio-enhanced pages with generated voice snippets,
- signature-linked design artifacts.

Representative entries (not exhaustive):
- `cosmic-bloom-2026-03-01.html`
- `aether-sphere-2026-03-01.html`
- `neon-tide-2026-03-01.html`
- `biomech-heart-2026-02-28.html`
- `oracle-vault-2026-03-02.html`

---

## Naming Conventions

- Artifact page: `kebab-name-YYYY-MM-DD.html`
- Signature page: `kebab-name-YYYY-MM-DD-signature.html`
- Generated assets: store under `artifacts/generated/YYYY-MM-DD/` when applicable.

---

## Update Checklist (when shipping a new artifact)

1. Create artifact HTML.
2. Generate/store any static assets (image/audio/video files).
3. Create signature page using the template above.
4. Add artifact card to `today/index.html` at the top.
5. Include signature link (`🧠 Signature`) in the card.
6. Commit and push.

