# Gemini API Quick Reference (Saber Notes)

Updated: 2026-02-21 (EST)
Source focus: Google AI for Developers docs (Gemini API)

## 1) API key essentials
- Treat Gemini API keys like passwords.
- Keep keys out of client-side browser code whenever possible (route calls through your backend).
- Use environment variables (`GEMINI_API_KEY`) instead of hardcoding.
- Restrict keys to the Generative Language API when possible.
- Rotate immediately if a key is exposed.

## 2) Model naming + compatibility gotcha
- Gemini model availability changes over time; don’t assume older model IDs are still valid.
- In this project, `gemini-1.5-flash` on `v1beta` returned 404.
- Verified working for text in this environment:
  - `gemini-2.0-flash`
  - `gemini-2.5-flash`
- Practical rule: if you get 404 model-not-found, verify via docs/ListModels and switch model ID, not just payload.

## 3) TTS with Gemini (important implementation details)
- Working TTS endpoint pattern:
  - `models/gemini-2.5-flash-preview-tts:generateContent`
- Required config pattern includes:
  - `generationConfig.responseModalities = ["AUDIO"]`
  - `generationConfig.speechConfig.voiceConfig.prebuiltVoiceConfig.voiceName = "Kore"` (or other voice)
- Response audio arrives as `inlineData.data` (base64).
- MIME may be PCM (`audio/L16;codec=pcm;rate=24000`) rather than WAV.
- Browser playback is most reliable if PCM is wrapped/converted to WAV server-side.

## 4) Rate limits and quota behavior
- Limits are applied per **project**, not per API key.
- RPD (requests/day) resets at midnight Pacific time.
- Limits vary by model and capability; check current docs for model-specific ceilings.

## 5) Architecture recommendation for Saber + Christopher app
- Keep Gemini calls server-side (`server.mjs`) to protect keys.
- Frontend calls local backend endpoints (e.g., `/api/ai`, `/api/explain-audio`).
- Add graceful fallback behavior:
  1. Try primary TTS model.
  2. If model fails/rate-limited, return script text + UI message instead of hard fail.
  3. Optional: add secondary provider fallback later.

## 6) Debug checklist (fast)
1. 401/403 → key invalid/restricted/project mismatch.
2. 404 model not found → wrong model ID for API version.
3. 429 → hit quota/rate limit.
4. TTS returns data but no playback → likely MIME/container mismatch; wrap PCM to WAV.
5. Works in curl but not browser → CORS/backend route/JSON body issue.

## 7) Next practical upgrades
- Add `GEMINI_TEXT_MODEL` and `GEMINI_TTS_MODEL` env vars for easy switching.
- Add `/api/health/gemini` endpoint for quick model/key diagnostics.
- Add voice selector + per-section speaking style presets.
- Add retry/backoff + clearer error surface in UI.
