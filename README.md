# Remote Viewer

Remote Viewer is Christopher’s live browser-facing collaboration surface.

It is not just a repo and not just an artifact shelf.
In practice it functions as a hybrid of:
- front door / launcher
- curated hosted artifact surface
- documentation and continuity browser
- browser-side tools lane
- operational workflow surface
- visible expression of the broader collaboration

Its deeper value is not merely that files exist locally in shared workspace.
Its value is that pages, tools, workflows, and artifacts become **hosted, visible, and inspectable** from phone or Chromebook through browser-accessible surfaces such as GitHub Pages.

---

## Core role

Remote Viewer is where a large portion of the collaboration becomes tangible.

It helps convert:
- conversation into visible pages
- ideas into hosted artifacts
- workflows into inspectable surfaces
- documentation into re-entry tools
- architectural thinking into browser-native objects

That makes it one of the strongest continuity and review layers in the system.

---

## Current front-door structure

The current main menu (`index.html`) is intentionally lean, but it has changed from earlier versions.

Current front-door buttons are:
- **Artifacts** → `today/index.html`
- **Styles** → `styles/index.html`
- **Primer** → `docs/primer/index.html`
- **Workflows** → `workflows/index.html`
- **Vercel** → `vercel/index.html`
- **Tools** → `tools/index.html`
- **Troubleshooting** → `docs/troubleshooting/index.html`
- **Agents** → `agents/index.html`
- **Games** → `games/index.html`
- **Share** → `docs/friend-viewer/index.html`
- **Archive** → `archive/index.html`

This menu should stay selective.
The operating principle remains:
- **front door = lean launcher**
- **Today’s Artifacts = active curated shelf**
- **Archive = cooling-off / preservation lane**

A page does not need to live on the main menu to be important.
Many important surfaces are better treated as artifact entries, docs pages, or workflow pages rather than permanent front-door buttons.

---

## Current major sections

### 1. Artifacts / Today (`today/`)
This is the live curated artifact shelf.

It is not a full historical dump of everything ever made.
It is the front-stage lane for what is currently worth reopening, reviewing, or using.

Recent items include things like:
- Daily Session Primers
- Today Reviews
- capability-review surfaces
- active concept artifacts
- selected operational or philosophical hosted pages

The key curation rule is:
- stale pages should move to archive or be removed
- Today should stay legible and current

### 2. Styles (`styles/`)
This is the current style reference lane.

The visible active style system is now intentionally simplified around:
- **Style One**
- **Style Two**
- **Cross-Surface Reference**

That simplification is deliberate.
The goal is to keep style requests easier to understand and easier to reuse in real work.

**Current default rule:** unless Christopher asks for another treatment, standard Remote Viewer pages should use **Style One** and import the shared package.

### 3. Primer (`docs/primer/`)
This is the hosted primer / re-entry lane.

It exists because discussion primers, daily session primers, and related rehydration surfaces are no longer just side artifacts — they are becoming part of the actual operating architecture of the collaboration.

### 4. Workflows (`workflows/`)
This is the hosted operational workflow lane.

It holds browser-readable workflow pages tied to durable shared-workspace playbooks.
This matters because a workflow is more reusable when Christopher can open it directly in a browser-facing surface rather than only relying on local markdown files.

### 5. Vercel (`vercel/`)
This lane now matters in its own right.

Vercel is no longer merely a concept or future option.
It is now an active operational lane because:
- token-based access works
- a durable workflow exists
- a live proof app exists
- Vercel is now the practical backend/app lane for semi-private tools that should not expose raw keys client-side

### 6. Tools (`tools/`)
This is the browser-side operational utility lane.

It should favor practical tools and honest capability testing rather than decorative demos.
Current examples include diagnostic and media-related tools.

### 7. Troubleshooting (`docs/troubleshooting/`)
This is the hosted troubleshooting lane.

It matters because the ecosystem now contains enough real infrastructure that preserving debugging context in browser-facing form has become useful, not excessive.

### 8. Agents (`agents/`)
This remains the lane for participant/agent profile pages, identity/context surfaces, and related collaboration-facing views.

### 9. Games (`games/`)
This remains the portal for game-like or externally linked interactive experiments.

### 10. Share (`docs/friend-viewer/`)
This is the outward-facing share lane.

It functions as a bridge between internal work and things that may be shown to others.

### 11. Archive (`archive/`)
This is the cooling-off and preservation lane for materials no longer front-stage but still worth keeping available.

---

## Documentation and hosted context

Remote Viewer is not just for polished artifacts.
It also hosts:
- workflow pages
- primers
- troubleshooting pages
- documentation surfaces
- sharing surfaces
- continuity objects

That matters because the collaboration increasingly benefits from browser-facing context, not only local repo state.

---

## Architecture notes

### Multi-page site, not single-page app
A key practical truth remains that Remote Viewer is a **multi-page site**.

That means:
- page transitions matter
- fullscreen state is not guaranteed across navigation
- navigation and shell behavior should be designed around multi-page reality
- shared infrastructure should be added carefully and intentionally

### Shared style infrastructure
A major architectural improvement is the shared Style One package:
- `assets/styles/style-one/base.css`
- `assets/styles/style-one/theme.js`

This matters because it:
- reduces duplicated page-level house CSS
- gives standard pages one real reusable system
- keeps light/dark behavior more consistent
- makes new standard pages faster to create and easier to maintain

The main implementation rule is:
- use Style One for standard pages unless Christopher explicitly wants another treatment
- add local CSS/JS only when the page genuinely needs page-specific behavior or layout

### Legacy style references
Older style experiments still exist in the repo, but the active public visible style language has been intentionally simplified.
That means future work should not casually reference the older numbered-style vocabulary unless Christopher explicitly wants to revive it.

### Shared navigation / reusable assets
Shared assets remain useful when the behavior is truly universal, but earlier refactors also showed that broad global changes can accidentally damage handcrafted artifact logic.
Use shared infrastructure when it clearly helps, but be careful with sweeping replacements.

---

## Curation philosophy

Remote Viewer works best when these rules stay true:
- the main menu stays lean
- Today’s Artifacts stays curated and current
- archive remains a preservation lane, not a landfill
- stale conceptual debris gets removed instead of lingering forever
- shared architecture is used where it genuinely reduces drift

The project gets stronger when it feels intentionally maintained.

---

## What belongs in Remote Viewer now

A page belongs in Remote Viewer when it does at least one of these jobs well:
- gives Christopher something worth reopening repeatedly
- makes an idea more inspectable or discussable
- turns recent thinking into a visible hosted object
- functions as a useful browser-side tool
- improves continuity or re-entry
- acts as stronger public-facing proof-of-work
- creates a more usable browser-facing workflow or reference surface

That means Remote Viewer should continue favoring:
- legibility
- curation
- mobile usability
- hosted usefulness
- design intentionality
- shared architecture when it is actually warranted

And it should continue avoiding:
- front-stage clutter
- stale conceptual debris
- duplicated universal logic
- pages that remain visible only because they once existed

---

## High-level folder roles

### `index.html`
Main front door / launcher.

### `today/`
Curated live artifact shelf.

### `artifacts/`
Underlying artifact store for active linked pieces.

### `docs/`
Hosted documentation, primer, troubleshooting, and share/context surfaces.

### `tools/`
Browser-side operational tools.

### `styles/`
Style reference lane centered on Style One, Style Two, and Cross-Surface Reference.

### `workflows/`
Hosted workflow lane tied to durable shared-workspace playbooks.

### `vercel/`
Hosted Vercel / backend-app lane.

### `agents/`
Agent and participant context surfaces.

### `games/`
Portal for interactive or external game-like surfaces.

### `archive/`
Cooling-off and preservation lane.

---

## Operational guidance

When updating Remote Viewer, a good pass usually includes:
1. inspect what is actually live now
2. decide whether the change belongs on the front door, Today, docs, styles, workflows, tools, or archive
3. prefer shared assets when the behavior is truly universal
4. smoke-test the important navigation paths
5. preserve rollback-friendly commits when appropriate

Important smoke-test surfaces often include:
- `index.html`
- `today/index.html`
- `styles/index.html`
- `tools/index.html`
- `workflows/index.html`
- `vercel/index.html`
- any edited artifact or docs page

---

## Relationship to continuity

Remote Viewer remains one of the strongest browser-native continuity objects in the ecosystem.

It helps answer:
- what is active right now
- what is worth reopening
- what the collaboration is trying to become
- which lanes are genuinely live
- what Christopher can inspect quickly from phone or Chromebook

That makes it more than presentation.
It is part of the real operating architecture of the collaboration.

---

## Path

- `/mnt/chromeos/MyFiles/Downloads/shared_workspace/remote-viewer`

This repo should be updated whenever the real visible structure, style system, front-door architecture, or hosted operating model changes.