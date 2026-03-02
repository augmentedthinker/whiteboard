# Junior XR Lab — Compatibility Test Matrix

## Release Gate (quick)

Run before deploy:
- [ ] Desktop Chrome: click-to-move works, action dropdown animates, typed chat responds, browser voice plays.
- [ ] Android Chrome (portrait + landscape): touch movement works, HUD compact toggle works, audio unlock works.
- [ ] iOS Safari: send + action works, browser TTS fallback works, no hard JS errors.
- [ ] Meta Quest Browser (2D): laser/click movement works, status updates visible.
- [ ] Meta Quest Browser (immersive VR): Enter VR works, controller select can set move target.

## Pass/Fail Criteria

- Movement latency: under ~300ms perceived for target set feedback.
- Chat response fallback: if network fails, local fallback message still appears.
- Voice path: browser TTS always available even without Gemini key.
- Performance: no sustained frame collapse or frozen UI during idle + movement.

## Step Validation Logging Format

`Step X/10 — Success|Partial|Failed — one-line proof`
