# Remote Viewer

Remote Viewer is Christopher’s live browser-facing collaboration surface for the broader human + agent workspace.

It is not best understood as only a repo, an artifact gallery, or a pile of static pages.
In practice, it is a hybrid of:
- **front door / launcher**
- **curated artifact shelf**
- **documentation and continuity browser**
- **tool and experiment hub**
- **hosted review surface**
- **visible expression of the collaboration itself**

Its deeper value is usually not just that the files exist locally in shared workspace.
Its real importance is that ideas, tools, pages, and operating structures become **hosted, visible, and inspectable** from phone or Chromebook through browser-accessible surfaces such as GitHub Pages.

---

## Core role

Remote Viewer is where a large portion of the collaboration becomes tangible.

It helps convert:
- conversation into visible pages
- ideas into hosted artifacts
- workflows into inspectable surfaces
- design experiments into reusable references
- strategic thinking into browser-native objects

That makes it one of the most important continuity and review layers in the entire system.

---

## Current main menu structure

The current main menu (`index.html`) is intentionally lean.

Active front-door buttons are:
- **Artifacts** → `today/index.html`
- **Balance** → `artifacts/balance-force-map-widescreen-2026-03-25/index.html`
- **Next Steps** → `ideas/index.html`
- **Styles** → `styles/index.html`
- **Tools** → `tools/index.html`
- **Agents** → `agents/index.html`
- **Games** → `games/index.html`
- **Share** → `docs/friend-viewer/index.html`
- **Archive** → `archive/index.html`

This main menu should stay selective.
The operating principle is:
- **main menu = lean front door**
- **Today’s Artifacts = active curation lane**
- **Archive = cooling-off / preservation lane**

Several pages that were previously front-door items were intentionally moved off the main menu and into Today’s Artifacts instead, including:
- **X Social**
- **Blogger**
- **Value**

That change reflects a stronger curation philosophy: not everything useful should remain permanently on the front door.

---

## Current major sections

### 1. Artifacts / Today (`today/`)
This is the live curated artifact shelf.

It is no longer best understood as a historical gallery of everything ever made.
It is a tighter front-stage lane for what is currently worth opening, reviewing, or using.

Recent notable surfaces include:
- **Value**
- **X Social**
- **Blogger**
- **Time Management · 2026-03-26**
- **Daylight Ring · 2026-03-26**
- **Image Generation Checker · 2026-03-25**
- other short-lived but still relevant current items

The important curation principle here is that stale work should move to archive or be deleted rather than lingering as conceptual debris.

### 2. Balance
The main menu Balance button currently points to:
- `artifacts/balance-force-map-widescreen-2026-03-25/index.html`

This means Balance is currently represented inside Remote Viewer as a live browser-facing force-map artifact rather than the older standalone app route.

Conceptually, Balance is now centered less on the older symmetrical nine-domain model and more on a newer four-force structure:
- **Venture / Applied AI**
- **Connection / Relational Identity**
- **Life Stewardship**
- **Adventure / Aliveness**

### 3. Next Steps (`ideas/`)
This is the structured next-step lane.

It is meant to hold practical forward motion in a more usable form than scattered notes.
The page is currently aligned to the four-force logic and functions as a bridge between conceptual thinking and action.

### 4. Styles (`styles/`)
This is the visual style library and design-reference lane.

It now functions as a real operating surface, not just a loose idea.
Current style entries include:
- **Style 001 / Luminous Glass Noir**
- **Style 002 / Paper Editorial Modern**
- **Style 003 / Brutalist Monochrome**
- **Style 004 / Amber Arcade Portal**
- **Style 005 / Markdown Reader**
- **Style 006 / Taste-Skill Inspired**
- **Cross-Surface Reference** (special reference entry, not a numbered style)

This lane matters because style choice is increasingly part of the actual work, not an afterthought.

### 5. Tools (`tools/`)
This is the operational utility lane.

It is for browser-side tools that are genuinely useful to operate with, not merely decorative pages.
Current highlighted tools include:
- Gemini diagnostics / ping checker
- Image Generation Checker
- Veo / video generation checker
- TTS voice checker

This lane should continue favoring practical utility, honest capability checks, and lightweight testing surfaces.

### 6. Agents (`agents/`)
This remains the lane for agent and participant profile surfaces, identity/context pages, and related collaboration-facing views.

### 7. Games (`games/`)
This remains a portal to external or experimental game-like experiences, including links out to projects such as RPG 2.0.

### 8. Share (`docs/friend-viewer/`)
This is the outward-facing or sharing-oriented lane.
It functions as a bridge between internal build work and surfaces that may be shown to other people.

### 9. Archive (`archive/`)
This is the holding area for older materials that are no longer front-stage but are still worth preserving for reference, cooling-off, or possible future reuse.

---

## Documentation layer

Remote Viewer also contains a meaningful documentation / context layer under `docs/`.

Important live examples include:
- `docs/x-social/`
- `docs/blogger-hub/`
- `docs/friend-viewer/`
- other context or review surfaces created over time

This matters because Remote Viewer is not just for polished artifacts.
It also functions as a browser-facing place to host operational context, publishing surfaces, and continuity objects.

---

## Architecture notes

### Multi-page site, not single-page app
A key practical lesson is that Remote Viewer behaves like a **multi-page site**, not like a single-page app or self-contained game environment.

That means:
- page transitions matter
- fullscreen persistence is limited
- navigation behavior must be designed with multi-page reality in mind
- universal UI should increasingly rely on shared assets rather than per-page duplication

### Shared floating navigation assets
A major architectural improvement was the extraction of the floating Remote Viewer navigation into shared assets:
- `assets/shared/rv-floating-nav.css`
- `assets/shared/rv-floating-nav.js`

This matters because it:
- reduces duplicated page code
- makes future updates less fragile
- moves the repo toward reusable UI infrastructure
- supports a more coherent site-wide experience

A practical maintenance lesson also came with that refactor: broad repo-wide replacement passes can accidentally break page-specific logic in handcrafted artifacts, so global changes should be made carefully and smoke-tested afterward.

---

## Curation philosophy

Remote Viewer now works best when the following rules stay true:

- **main menu stays lean**
- **Today’s Artifacts stays curated and current**
- **archive serves as a pre-deletion or preservation lane**
- **stale pages are removed instead of accumulating endlessly**
- **shared assets are preferred when behavior is truly universal**

This is important because the project’s value rises when it feels intentionally maintained rather than like a landfill of half-active ideas.

---

## What belongs in Remote Viewer now

A page belongs in Remote Viewer when it does at least one of these jobs well:
- gives Christopher a page worth reopening repeatedly
- makes a concept more inspectable or discussable
- turns recent thinking into a visible hosted object
- functions as a useful browser-side tool
- improves continuity or re-entry
- acts as a stronger public-facing proof-of-work surface

That means Remote Viewer should keep favoring:
- **legibility**
- **curation**
- **mobile usability**
- **hosted usefulness**
- **design intentionality**
- **shared architecture where appropriate**

And it should continue avoiding:
- front-stage clutter
- stale conceptual debris
- duplicated universal UI logic
- pages that exist only because they were once made

---

## High-level folder roles

### `index.html`
Main front door / launcher.

### `today/`
Curated live artifact shelf.

### `artifacts/`
Underlying artifact store for pages still being actively surfaced or directly linked.

### `docs/`
Documentation, publishing, sharing, and context surfaces.

### `tools/`
Browser-side operational utilities.

### `styles/`
Visual style library and design-reference showroom.

### `ideas/`
Structured next-step and directional thinking lane.

### `agents/`
Agent and participant profile/context surfaces.

### `games/`
Portal for game-like or external interactive experiments.

### `archive/`
Cooling-off and preservation lane.

### `assets/shared/`
Shared reusable browser assets, currently including the floating navigation system.

---

## Operational guidance

When updating Remote Viewer, a good pass usually includes:
1. inspect what is actually live now
2. decide whether the change belongs on the main menu, Today page, docs, tools, styles, or archive
3. prefer shared assets when the behavior is universal
4. smoke-test key navigation paths
5. preserve rollback-friendly commits when possible

Important smoke-test surfaces usually include:
- `index.html`
- `today/index.html`
- `styles/index.html`
- `tools/index.html`
- any edited artifact page
- any shared asset touched under `assets/shared/`

---

## Relationship to continuity

Remote Viewer remains one of the strongest browser-native continuity objects in the ecosystem.

It helps answer:
- what is active right now
- what has moved off the front door
- what deserves continued visibility
- what the broader collaboration is trying to become
- what Christopher can open quickly from phone or Chromebook to re-enter the work

That makes it more than presentation.
It is part of the collaboration’s real operating architecture.

---

## Path

- `/mnt/chromeos/MyFiles/Downloads/shared_workspace/remote-viewer`

This repo remains one of the most important active browser-facing projects in the shared workspace and should be updated whenever major structural, curation, or architecture changes alter how it is actually organized or used.
