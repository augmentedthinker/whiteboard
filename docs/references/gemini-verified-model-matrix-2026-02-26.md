# Gemini Verified Model Matrix (quick validation) — 2026-02-26

I pulled the current Google docs pages directly and extracted model IDs that are actually referenced there.

## Sources checked
- https://ai.google.dev/gemini-api/docs/models
- https://ai.google.dev/gemini-api/docs/image-generation
- https://ai.google.dev/gemini-api/docs/music-generation
- https://ai.google.dev/gemini-api/docs/speech-generation

---

## 1) Image generation (currently visible in docs)
- `gemini-2.5-flash-image`
- `gemini-3.1-flash-image-preview`
- `gemini-3-pro-image-preview`

### Notes
- `gemini-3.1-flash-image-preview` is present and appears to map to the "Nano Banana 2" positioning.
- The docs we checked do **not** clearly expose `nano-banana-pro-preview` as the canonical API model string on-page; treat Nano Banana naming as product branding and verify API IDs live per project.

---

## 2) Music generation (currently visible in docs)
- `lyria-realtime-exp`

### Notes
- The page is titled Lyria/music generation, but the extracted model string currently visible is `lyria-realtime-exp`.
- IDs like `lyria-3-preview` / `lyria-002` may exist in rollout channels, but they were not clearly surfaced in the current pulled doc HTML.

---

## 3) Voice / TTS (currently visible in docs)
- `gemini-2.5-flash-preview-tts`
- `gemini-2.5-pro-preview-tts`
- Also visible under broader audio/live category: `gemini-2.5-flash-native-audio-preview-12-2025`

---

## 4) Practical rule for our apps
Do not hardcode marketing names as model IDs. Use this order:
1. Prefer IDs shown on official docs pages at time of build.
2. Probe with a manual button-run request.
3. Surface raw HTTP + error payload in UI.
4. Keep a fallback candidate list in the app.

---

## 5) Candidate fallback sets for our demo tools

### Image candidates
1. `gemini-3.1-flash-image-preview`
2. `gemini-2.5-flash-image`
3. `gemini-3-pro-image-preview`

### Music candidates
1. `lyria-realtime-exp`
2. (optional experimental list to test manually if exposed in account/project)

### TTS candidates
1. `gemini-2.5-flash-preview-tts`
2. `gemini-2.5-pro-preview-tts`
3. `gemini-2.5-flash-native-audio-preview-12-2025` (live/audio class)

---

## 6) Why this matters
We had false starts from plausible-but-unverified IDs. This matrix is intentionally based on what is currently referenced in docs + can be tested via button-triggered probes in our own tools.
