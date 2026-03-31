# Remote Viewer Styles

This folder is the active style reference lane for Remote Viewer.

It is no longer a broad style archive with many equally live numbered systems.
The current goal is clarity: keep the visible style language simple, reusable, and easy to invoke during real work.

At this point, the live public style system is centered on:
- **Style One**
- **Style Two**
- **Cross-Surface Reference**

Older style experiments may still exist in the repo as legacy references, but they should not be treated as the active default vocabulary unless Christopher explicitly asks to revisit them.

---

## Purpose

The styles lane exists to do a few practical jobs:

1. provide a clear shared visual vocabulary
2. reduce ambiguity when Christopher asks for a page style
3. make future Remote Viewer pages easier to build consistently
4. preserve one stable default house system plus one strong reading-oriented alternative
5. support better desktop/mobile interpretation through explicit cross-surface thinking

This lane should now favor **legibility and operational usefulness** over sheer style proliferation.

---

## Current live entries

### Style One
**Role:** the default house style for standard Remote Viewer pages.

**Implementation:**
- `assets/styles/style-one/base.css`
- `assets/styles/style-one/theme.js`

**Best for:**
- standard menu-linked pages
- Today / Archive / Tools / Workflows / Agents / docs pages
- any new Remote Viewer page where Christopher does not request something else

**Core traits:**
- warm accent language
- clean browser-native presentation
- reusable hero/card/topbar grammar
- shared light/dark theme toggle
- strong default for hosted operational pages

**Default rule:** unless Christopher explicitly asks for another treatment, use **Style One**.

**Important implementation rule:** import the shared Style One package instead of rebuilding the house CSS/JS locally when the page belongs to the main standard system.

---

### Style Two
**Role:** the calmer document / markdown / reading-oriented alternative.

**Live page:**
- `styles/markdown-reader/index.html`

**Best for:**
- markdown-driven pages
- READMEs and reports
- continuity documents
- imported notes
- pages where reading clarity matters more than a stronger product-web posture

**Core traits:**
- quieter document-viewer energy
- lower-noise chrome
- stronger reading hierarchy
- good fit for internal writing and documentation surfaces

**Rule of thumb:** if the page’s main job is to be read carefully rather than to feel like a more designed hosted experience, Style Two is often the better fit.

---

### Cross-Surface Reference
**Role:** a design reference rather than a normal style.

**Live page:**
- `styles/cross-surface-reference/index.html`

**Best for:**
- deciding how a page should behave across desktop and mobile
- preserving intent across widescreen and portrait contexts
- avoiding the mistake of treating responsive design as only a technical resize problem

**Core traits:**
- desktop vs mobile composition thinking
- experience translation
- reference-oriented guidance

Use this when the real question is not “which style?” but “how should this page change across surfaces?”

---

## Legacy note

This folder still contains older style experiments and references from an earlier broader style-library phase.
They may still be useful as historical inspiration or for deliberate revival later, but they should not be treated as the current active public style naming system.

The active visible system is now:
- **Style One**
- **Style Two**
- **Cross-Surface Reference**

That simplification is intentional.

---

## How to think about the current system

The point is no longer to maintain a large menu of many parallel named styles.
The point is to keep one strong house system, one strong reading/document system, and one explicit cross-surface design reference.

This helps future work stay:
- clearer
- faster
- more consistent
- less ambiguous in conversation

A useful practical shorthand is:
- **Style One** = default house / operational / hosted standard
- **Style Two** = reading / markdown / documentation / lower-noise surface
- **Cross-Surface Reference** = desktop/mobile behavior reference

---

## Operational guidance

When making new pages or revising the style lane:
1. treat `styles/index.html` as the current canonical visible styles page
2. keep the public style system centered on Style One, Style Two, and Cross-Surface Reference
3. avoid reintroducing legacy numbered-style language unless Christopher explicitly wants that vocabulary back
4. update this README whenever the real visible style system changes

---

## Path

- `/mnt/chromeos/MyFiles/Downloads/shared_workspace/remote-viewer/styles`

This folder should reflect the real live style language Christopher is meant to use when asking for new pages.