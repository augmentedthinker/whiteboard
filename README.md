# Remote Viewer

Remote Viewer is the live, mobile-first command surface for Christopher’s active artifacts and operating context.

It is designed to do two things well:
1. Give a clean, fast launcher for current work.
2. Keep artifact history structured without turning root into clutter.

---

## Vision

Remote Viewer is not just a file dump — it is a curated operational interface.

- **Fast to scan** on phone during shifts
- **Clear lanes** for today, docs, summaries, signal, and experiments
- **Safe cleanup** rules so old work can be removed without breaking live navigation
- **Consistent artifact pattern** (including 🧠 signature analysis pages)

---

## Current Structure

- `index.html`
  - Root launcher page (the main app entrypoint)

- `today/`
  - `index.html` for the “Today’s Artifacts” lane (list/curation page)

- `artifacts/`
  - Individual artifact pages and their `*-signature.html` analysis pages

- `frontier-signal/`
  - Signal desk/report pages and related assets

- `junior-xr-lab-2026-02-28/`
  - WebXR lab experience

- `summaries/`
  - `index.html` summary browser + summary markdown files

- `docs/`
  - `index.html` docs hub + contracts/references/ops docs

- `tools/`
  - Utility tools (currently Gemini Ping Checker)

- `archive/`
  - Archive lane page (currently empty/reset)

- `assets/`
  - Shared static resources (icons, backgrounds, generated images)

- `.nojekyll`
  - Keeps GitHub Pages from applying Jekyll processing

- `site.webmanifest`
  - Web app manifest metadata for installable/mobile behavior

---

## Why `today/` and `artifacts/` are separate

We separate them intentionally:
- `today/` = curated lane (what to show now)
- `artifacts/` = content store (actual artifact pages)

This keeps curation logic independent from content files and makes cleanup easier.

If preferred, this can be nested later (`today/artifacts/`) via a controlled link-migration pass.

---

## Publishing Workflow

1. Build/update artifact locally in this repo.
2. Add artifact card to `today/index.html` (newest first).
3. Include a 🧠 signature analysis page when appropriate.
4. Commit with clear message.
5. Push to `main` (GitHub Pages publishes live).

---

## Cleanup Workflow (Safe)

1. Identify candidates not linked by active lanes.
2. Remove from navigation first (if needed).
3. Delete or quarantine by policy.
4. Smoke-test core lanes:
   - root index
   - today
   - docs
   - summaries
   - frontier-signal
5. Commit + push with rollback-friendly messages.

---

## Project Principle

**Keep Remote Viewer small, legible, and operational.**

Every page should either:
- help run the current system, or
- preserve meaningful continuity.

Everything else should be archived or removed.
