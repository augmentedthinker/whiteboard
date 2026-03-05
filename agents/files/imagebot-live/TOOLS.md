# TOOLS.md — ImageBot Local Notes

## Preferred generation flow
- Primary: Gemini image model via `generate_images.mjs`
- Fallback: alternative endpoint when Gemini fails

## Primary script
`/home/gagekappes/.openclaw/workspace-imagebot/scripts/generate_images.mjs`

## Default output targets
- Project/live path (requested by user)
- Backup path: `/mnt/chromeos/MyFiles/Downloads/SHARE/core/imagebot/images/`
