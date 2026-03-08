# Remote Viewer

Remote Viewer is the live browser surface for Christopher’s evolving AI workspace.

It functions as a practical control surface, an artifact gallery, a documentation hub, and an inspection layer for the human-agent collaboration itself.

It is designed to do several things at once:

1. provide a clean mobile-friendly launcher for current work
2. surface important documents and operating context in readable form
3. preserve meaningful artifacts and continuity without turning the root into clutter
4. make the system more visible, inspectable, and easier to re-enter over time

---

## Current role

Remote Viewer is no longer just a small artifact launcher.
It has evolved into a broader interface for:

- **active artifacts**
- **agent and user profile surfaces**
- **skills and capabilities documentation**
- **analysis and end-of-session continuity documents**
- **archival and experimental lanes**

In practice, it now sits somewhere between:
- dashboard
- documentation site
- personal AI operating surface
- continuity browser

---

## Core design principles

### 1. Legibility
The system should be easy to scan and understand, especially from a phone.

### 2. Inspectability
Important parts of the system should be visible instead of hidden in backend-only files.

### 3. Continuity
The repo should help preserve momentum across sessions, not just host isolated pages.

### 4. Curation over clutter
Not everything belongs on the landing page. The viewer should stay selective and intentional.

### 5. Operational usefulness
Each lane should either help run the system, understand the system, or preserve meaningful work.

---

## High-level structure

### `index.html`
The main landing page / root launcher.

This is the primary navigation surface and should remain clean, fast, and easy to understand.

### `agents/`
Agent and user-facing profile surfaces.

Current examples include:
- Primary Agent page
- User page for Christopher
- supporting markdown-viewer pages and profile assets

This area helps make identity, role, and operating context visible in browser form.

### `docs/`
The documentation and inspection layer.

This area now includes multiple lanes such as:
- agent identity
- soul
- tools
- user profile
- skills registry
- capability dossier pages
- summaries
- analysis archive

This section is increasingly important because it turns internal context into something legible and navigable.

### `docs/analysis/`
The analysis archive for long-form continuity reading.

This area is meant for:
- end-of-session summaries
- state-of-the-union analyses
- discussion primers
- future strategic memos or continuity documents

This lane should preserve rich narrative and interpretive context, not just minimal notes.

### `today/`
The curated lane for currently featured artifacts or experiences.

This is the “show now” layer.

### `artifacts/`
The content store for built pieces, experiments, and presentation artifacts.

This includes:
- standalone artifacts
- signature/provenance pages
- generated media
- special one-off experiences

### `archive/`
The archive lane for content that is no longer current but still worth preserving.

### `assets/`
Shared static resources such as:
- images
- generated portraits
- icons
- audio
- video
- backgrounds

### Other lanes
Additional project or experimental areas may appear as needed, such as:
- `games/`
- `ideas/`
- specific lab folders

---

## Why `today/` and `artifacts/` stay separate

This separation is intentional:

- `today/` = curated presentation lane
- `artifacts/` = actual artifact storage

That makes it easier to:
- rotate what is featured
- preserve older work without cluttering the active view
- change curation without moving the underlying files

---

## Continuity function

One of the most important newer roles of Remote Viewer is continuity.

It is not only for showing outputs.
It is also for helping Christopher and the agent quickly re-enter an ongoing body of work.

That is why the repo now includes pages for:
- identity and persona documents
- user context
- tools/environment context
- skills and capabilities
- summaries and analysis

This makes the system more interpretable across time.

---

## Artifact standard

Artifacts in this repo should ideally be more than random experiments.

Good artifacts usually have some combination of:
- a presentation page
- a clear purpose or theme
- provenance or signature information
- stable links
- a place in either `today/` or the archive structure

Where useful, artifacts should include signature or analysis pages that explain:
- what the artifact is
- how it was created
- which capabilities were used
- what model or workflow was involved

---

## Publishing workflow

Typical workflow:

1. build or update content locally in the repo
2. wire it into the appropriate navigation surface
3. sanity-check links and reading flow
4. commit with a clear message
5. push to `main`
6. let GitHub Pages publish the live site

---

## Cleanup workflow

Safe cleanup should follow a curation-first approach:

1. identify pages no longer active
2. remove or reduce navigation exposure first
3. archive or quarantine if appropriate
4. smoke-test important lanes
5. commit and push with rollback-friendly messages

Important smoke-test areas usually include:
- root landing page
- agents
- docs
- analysis
- today
- active featured artifacts

---

## Relationship to the shared workspace

The Remote Viewer repo lives inside the shared workspace and should be treated as one of the main active projects in that environment.

Path:
- `/mnt/chromeos/MyFiles/Downloads/shared_workspace/remote-viewer`

It serves as one of the clearest browser-facing representations of the broader Christopher + OpenClaw ecosystem.

---

## Project principle

**Keep Remote Viewer legible, intentional, and alive.**

Every page should do at least one of the following:
- help run the current system
- help explain the current system
- preserve meaningful continuity
- present a worthwhile artifact or experiment

Everything else should be archived, refined, or removed.

---

## Privacy and boundary note

Some materials may be appropriate for local/shared use but not for broad public exposure.

When deciding what to surface publicly, prefer:
- curated context over raw private detail
- useful summaries over sensitive internals
- inspectability without oversharing

As the system grows, this boundary should remain an active design concern.
