# Remote Viewer

Remote Viewer is Christopher’s live browser surface for the broader human + agent workspace.

It is no longer best understood as just an artifact gallery. In its current form, it is a hybrid of:
- **main menu / launcher**
- **artifact review surface**
- **documentation browser**
- **tool and experiment hub**
- **continuity / re-entry layer**

In practice, Remote Viewer is the browser-native place where current pages, working concepts, documentation, tools, and selected experiments are made visible and revisitable.

---

## Current live structure

At the moment, Remote Viewer is organized around a small set of active front-door surfaces.

### Main menu (`index.html`)
The main menu is intentionally more selective than it used to be.

Current active buttons on the main menu are:
- **Artifacts** → `today/index.html`
- **Balance** → `artifacts/balance-force-map-widescreen-2026-03-25/index.html`
- **Next Steps** → `ideas/index.html`
- **Styles** → `styles/index.html`
- **Tools** → `tools/index.html`
- **Agents** → `agents/index.html`
- **Games** → `games/index.html`
- **Share** → `docs/friend-viewer/index.html`
- **Archive** → `archive/index.html`

Notably, some pages that were previously on the main menu have now been moved off the front door and into Today’s Artifacts instead, including:
- **X Social**
- **Blogger**
- **Value**

That reflects an active curation decision: the main menu should stay lean, while Today’s Artifacts can hold more of the currently relevant but not permanently front-stage surfaces.

---

## Today’s Artifacts (`today/`)

Today’s Artifacts is now acting less like a broad historical gallery and more like a curated live working shelf.

Current notable entries include:
- **Value**
- **X Social**
- **Blogger**
- **Time Management · 2026-03-26**
- **Daylight Ring · 2026-03-26**
- **Image Generation Checker · 2026-03-25**
- plus any short-lived temporary items that have not yet been cleared

A major recent cleanup happened here:
- older TEMP artifacts were removed
- many stale EXPANSION artifacts that were no longer in active use were also deleted
- only a tighter set of currently relevant surfaces remain

This means Today’s Artifacts should now be read as a **live curation lane**, not a full archive of everything ever made.

---

## Active lane descriptions

### 1. Artifacts / Today
This is the current front-stage artifact lane.

Right now it includes:
- the two new ring-based thinking tools built on 2026-03-26
- selected publishing / value surfaces moved off the main menu
- a small number of still-useful support pages

### 2. Balance
Balance currently points to the live widescreen force-map version inside `artifacts/`.

This means Balance is currently represented in Remote Viewer as a **browser-based conceptual operating surface**, not as the older standalone app entry path.

### 3. Next Steps
`ideas/index.html` is the current structured next-step page.

This page is organized around the four-force structure and is meant to hold practical next-step thinking in a more usable form than scattered notes.

### 4. Styles
`styles/index.html` is the visual style library.

This remains important because style selection and reusable visual language are becoming a recurring part of artifact production.

### 5. Tools
`tools/index.html` is the operational utility lane.

Current highlighted tools include:
- Gemini diagnostics / ping checker
- Image generation checker
- Veo / video generation checker
- TTS voice checker

This lane is meant for things that are genuinely useful to operate with, not just things that are visually interesting.

### 6. Agents
`agents/index.html` remains the surface for agent/user-facing profiles and related context.

### 7. Games
`games/index.html` remains a portal to external and experimental game experiences, including links out to projects like RPG 2.0.

### 8. Share
`docs/friend-viewer/index.html` is the sharing-oriented lane.

### 9. Archive
`archive/index.html` remains the holding area for older material that is no longer front-stage but not necessarily gone forever.

---

## Documentation layer

Remote Viewer still contains an important documentation / context layer under `docs/`.

Some of the most practically relevant live pages there now include:
- `docs/x-social/`
- `docs/blogger-hub/`
- `docs/friend-viewer/`
- other context and inspection surfaces built over time

An important recent curation move is that **X Social** and **Blogger** are no longer on the main menu, but they are still active and accessible through Today’s Artifacts.

---

## Architecture notes

### Multi-page site, not single-file app
One important lesson from the recent iteration cycle is that Remote Viewer behaves like a **multi-page site**, not like a single-page game/app such as RPG 2.0.

That matters because features like persistent fullscreen and universal floating controls behave differently in this architecture.

### Shared floating navigation assets
A recent architectural improvement is that the floating Remote Viewer control is no longer embedded separately in every page.

It now lives in shared assets:
- `assets/shared/rv-floating-nav.css`
- `assets/shared/rv-floating-nav.js`

This is an important step because it introduces a more reusable system pattern:
- shared styling
- shared UI behavior
- less page-by-page duplication
- lower risk when future global changes are needed

This is not yet a full app shell architecture, but it is a meaningful move in that direction.

---

## Recent important changes

### Curation changes
Recent cleanup materially changed the structure of the repo:
- most TEMP Today-page artifacts were deleted
- many stale EXPANSION artifacts were also removed
- Today’s Artifacts was reduced to a smaller active set
- X Social, Blogger, and Value were moved off the main menu and into Today’s Artifacts

### New 2026-03-26 artifact lane
Two new ring-based artifacts were created and kept:
- **Time Management**
- **Daylight Ring**

These are useful because they are simple, visually legible, and conceptually aligned with larger life-structure thinking.

### Shared component direction
The floating navigation refactor clarified an important broader design direction:
- Remote Viewer should increasingly use **shared CSS / JS assets** for universal behavior
- not every page should remain a fully isolated handcrafted object forever

That is a meaningful architectural shift in how this repo should be maintained.

---

## What belongs here now

Remote Viewer is currently best used for things that satisfy at least one of these roles:
- a page worth opening repeatedly
- a page that clarifies live priorities
- a tool that helps operate the broader system
- a documentation surface that improves re-entry
- a concept page that is still actively steering decisions

This means the project should continue favoring:
- **legibility**
- **curation**
- **mobile usability**
- **browser-native usefulness**
- **shared components where possible**

And it should continue avoiding:
- front-stage clutter
- stale conceptual debris
- duplicated universal UI logic when shared assets would do better

---

## High-level folder roles

### `index.html`
The main menu / front door.

### `today/`
The current curated artifact shelf.

### `artifacts/`
The underlying artifact store for pages that are still being actively surfaced or directly linked.

### `docs/`
Context, publishing, friend-viewing, and other documentation-style surfaces.

### `tools/`
Operational browser-side utilities.

### `styles/`
Style library / visual systems showroom.

### `ideas/`
Current structured next-step thinking.

### `agents/`
Agent and participant profile surfaces.

### `games/`
Game portal / external interactive experiments.

### `archive/`
Cooling-off and preservation lane for older material.

### `assets/shared/`
Shared reusable browser assets, currently including the floating nav system.

---

## Operational guidance

### When updating Remote Viewer
A good update pass usually includes:
1. inspect what is actually live now
2. decide whether something belongs on the main menu, Today page, docs, tools, or archive
3. prefer shared assets for universal behavior
4. smoke-test key navigation paths
5. push with rollback-friendly commits

### Important smoke-test surfaces
After meaningful edits, the most important pages to check are usually:
- `index.html`
- `today/index.html`
- `tools/index.html`
- `styles/index.html`
- any newly edited artifact pages
- any shared asset changes under `assets/shared/`

### Curation rule
The current direction is clear:
- **main menu = lean**
- **Today’s Artifacts = curated but active**
- **archive = cooling-off lane**
- **deleted = genuinely no longer useful**

---

## Relationship to continuity

Remote Viewer remains one of the best browser-native continuity objects in the whole workspace.

It helps answer:
- what is currently active
- what has moved off the front door
- what still matters enough to keep visible
- what the larger system is trying to become

That makes it more than presentation. It is increasingly part of the re-entry and orientation workflow.

---

## Path

- `/mnt/chromeos/MyFiles/Downloads/shared_workspace/remote-viewer`

This repo remains one of the primary active browser-facing projects in the shared workspace.
