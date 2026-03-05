# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

## Messaging / Routing

### Telegram
- Direct target chat/user id: `8546776113`
- Confirmed working (2026-02-23): use explicit routing for scheduled sends.
- Preferred pattern for cron delivery:
  - Avoid cron `announce` for critical sends (can fail intermittently)
  - Use `--no-deliver` and send via `message` tool inside the scheduled task
  - Telegram target: `8546776113`

Add whatever helps you do your job. This is your cheat sheet.
