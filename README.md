# Remote Viewer

Remote Viewer is the live browser surface for Christopher’s evolving human+agent workspace.

It is no longer just an artifact launcher. It has become a hybrid of:
- **dashboard**
- **documentation site**
- **artifact gallery**
- **continuity browser**
- **personal operating surface**

In practice, Remote Viewer is where current work, identity context, capability maps, analysis pages, and selected experiments become visible, legible, and re-enterable.

---

## Current state

Remote Viewer now serves five main roles:

1. **Launcher for current work**  
   A clean browser entrypoint for the most relevant pages, tools, and featured artifacts.

2. **Context surface**  
   Important files and operating context can be viewed in-browser instead of remaining trapped in local markdown.

3. **Continuity layer**  
   Discussion primers, analyses, and summaries can be published as readable pages that support fast re-entry after a break or reboot.

4. **Capability / priority surface**  
   The repo now includes practical pages for thinking about what the system can do, what it should do next, and where effort should be focused.

5. **Public-facing proof-of-work layer**  
   Interactive artifacts, experiments, demos, and visual concept pages make the broader Christopher & Co. system easier to show, understand, and eventually share.

---

## What changed recently

Remote Viewer has moved meaningfully beyond its earlier form.

### Major direction changes

- The old landing flow was simplified so the **main menu is now the actual landing page**.
- The project now includes more explicit **priority / capability thinking**, not just aesthetic artifacts.
- It has become a stronger **continuity instrument** through analysis pages and discussion primers.
- Today’s Artifacts increasingly includes **conceptual operating pages**, not only visual experiments.
- The system is starting to hold more of Christopher’s broader context: work, learning, publishing ideas, life architecture, and strategic direction.

### Recent notable additions

Recent artifacts and pages include things like:
- **Capability Map** — capabilities, near-horizon jobs, and priority direction
- **X Post Lab** — early thinking on credibility-first public posting
- **Learning Radar** — curation + next-horizon learning framework
- **Life Constellation** — a nine-part life map / balance framework
- **Threshold of Voice** and other reflective/artistic artifacts
- discussion primers and analysis pages that help reconstruct context quickly

This means Remote Viewer is increasingly useful both as a **creative surface** and as a **thinking surface**.

---

## Why this repo matters operationally

Remote Viewer is becoming one of the best context objects in the whole system.

Why that matters:
- it gives Christopher a browser-native way to inspect the state of the project
- it gives the agent a stable place to publish structured context
- it supports session re-entry and discussion priming
- it turns scattered ideas into durable, navigable objects
- it can eventually function as a lightweight command center for what to learn, build, review, and share

For that reason, it should increasingly be treated as part of the broader startup / re-entry workflow, especially when trying to quickly recover the current state of the system.

---

## Core design principles

### 1. Legibility
Pages should be easy to scan, especially on mobile.

### 2. Inspectability
Important parts of the system should be visible in-browser instead of hidden in backend-only files.

### 3. Continuity
The repo should help preserve momentum across sessions, not just host isolated pages.

### 4. Curation over clutter
The landing page should stay selective. Not every experiment deserves front-stage placement.

### 5. Operational usefulness
Each lane should either help run the system, understand the system, or preserve meaningful work.

### 6. Layered meaning
Remote Viewer should support multiple depths at once:
- quick launch
- medium-depth inspection
- long-form reflection / analysis

---

## High-level structure

### `index.html`
Main menu / root launcher.

This should stay clean, fast, and readable. It is the front door.

### `today/`
The curated “show now” lane.

This is where the most relevant current artifacts are surfaced.

### `artifacts/`
The underlying artifact store.

This includes:
- visual and interactive experiments
- conceptual pages
- planning / framework pages
- signature / provenance pages
- generated media used by artifacts

### `docs/`
The documentation and inspection layer.

This area includes pages for:
- identity and soul context
- user context
- tools/environment context
- skills and capabilities
- long-form analysis
- discussion primers and summaries

### `docs/analysis/`
The long-form continuity archive.

This lane is especially important for:
- discussion primers
- end-of-session analyses
- strategic writeups
- future narrative continuity docs

### `agents/`
Agent and user-facing profile surfaces.

This helps make the participants in the system legible, not just the outputs.

### `archive/`
Older but still meaningful material.

### Other lanes
Additional areas may exist as needed, including:
- `games/`
- `ideas/`
- project-specific experiments

---

## What belongs in Today’s Artifacts now

Today’s Artifacts is no longer only for purely aesthetic experiments.

It can now reasonably include:
- interactive art / visual pieces
- concept pages
- capability maps
- operating frameworks
- publishing strategy pages
- learning systems
- life architecture pages

The common requirement is not “art.”
The common requirement is **that the page is worth opening and thinking with**.

---

## Artifact standard

A good artifact now usually has some combination of:
- a clear idea or purpose
- a visually coherent presentation layer
- a stable live URL
- a place in the curation flow
- a signature page when useful

Artifacts do not all need the same tone.
Some will be:
- atmospheric
- practical
- strategic
- reflective
- demonstrative

That variety is a feature, not a bug.

---

## Relationship to continuity and re-entry

One of the strongest emerging uses of Remote Viewer is **re-entry**.

It helps answer questions like:
- What have we been building?
- What matters right now?
- What capabilities are emerging?
- What should we focus on next?
- What should be shared publicly?

That makes Remote Viewer more than presentation. It becomes memory-shaped infrastructure.

This is also why discussion primers, analysis pages, priority maps, and similar artifacts matter: they reduce the cost of recovering context.

---

## Relationship to the shared workspace

Path:
- `/mnt/chromeos/MyFiles/Downloads/shared_workspace/remote-viewer`

This repo lives inside the shared workspace and should be treated as one of the primary active projects in Christopher’s environment.

It is one of the clearest browser-facing representations of the larger Christopher + OpenClaw ecosystem.

---

## Publishing workflow

Typical workflow:

1. build or update a page locally
2. connect it to the appropriate navigation surface
3. sanity-check links and reading flow
4. add a signature page when appropriate
5. commit with a clear message
6. push to `main`
7. let GitHub Pages publish the live version

---

## Curation / cleanup workflow

Keep the system alive without letting it become noisy.

1. identify what is truly current
2. reduce navigation exposure before deleting anything
3. archive or quarantine stale material when appropriate
4. smoke-test key lanes
5. commit and push with rollback-friendly messages

Important smoke-test areas usually include:
- root landing page
- today
- artifacts referenced from today
- docs
- analysis
- any newly promoted priority or operating pages

---

## Project principle

**Keep Remote Viewer legible, intentional, alive, and increasingly useful as context.**

Every page should do at least one of these well:
- help run the system
- help explain the system
- help re-enter the system
- preserve meaningful continuity
- present a worthwhile artifact, framework, or experiment

Everything else should be refined, archived, or left out.

---

## Privacy and boundary note

Some material is appropriate for local/shared use but not for broad public exposure.

When deciding what to surface, prefer:
- curated context over raw private detail
- useful summaries over sensitive internals
- legibility without oversharing

As Remote Viewer becomes more central, this boundary becomes more important — not less.
