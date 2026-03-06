# TOOLS.md - Local Notes

Add whatever helps you do your job. This is your cheat sheet.

## Messaging / Routing

### Telegram
- Direct target chat/user id: `8546776113`
- Confirmed working (2026-02-23): use explicit routing for scheduled sends.
- Preferred pattern for cron delivery:
  - Avoid cron `announce` for critical sends (can fail intermittently)
  - Use `--no-deliver` and send via `message` tool inside the scheduled task
  - Telegram target: `8546776113`
