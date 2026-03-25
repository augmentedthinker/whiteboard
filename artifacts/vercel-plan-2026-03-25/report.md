# Vercel Plan for the Citation App · 2026-03-25

This document turns the recent hosting discussion into a practical next-steps plan.

The core judgment now seems fairly clear:

- **GitHub Pages** is still a strong default for static public surfaces like Remote Viewer.
- **Vercel** is likely the better fit for more product-like apps such as the citation lane.

The reason is not fashion. The reason is architecture.

## Why Vercel is worth considering

The strongest concrete benefit is server-side capability.

Right now, a GitHub Pages version of the citation app pushes toward a frontend-only pattern. That creates a few problems:

- testers may need to paste their own Gemini API key into the app
- secrets cannot be stored server-side
- backend logic has nowhere native to live
- product trust is lower because the app feels more like a developer demo than a real service

Vercel changes that shape.

With Vercel, the likely improved architecture would be:

- browser frontend for the UI
- serverless API route for model calls
- Gemini API key stored as a server-side environment variable
- cleaner tester experience with no key-pasting requirement

That is the main gain.

## What Vercel would add over GitHub Pages

### 1. Server-side secret handling

The Gemini key can live in Vercel environment variables instead of the browser.

That means:

- better key safety
- less friction for testers like Rose
- less "developer tool" feeling

### 2. A more product-like tester flow

Instead of asking a tester to configure the app, the app can simply work.

That is a major difference psychologically. It turns the experience from:

> "Here is a prototype; please supply your own credentials"

into something closer to:

> "Here is the app; try it."

### 3. A natural home for backend logic

If the citation lane grows, it may want more than one request passthrough.

Possible backend concerns later:

- request validation
- prompt shaping
- rate limiting
- logging or debugging hooks
- usage controls
- structured extraction pipelines
- benchmark/test routes

GitHub Pages is not designed for that. Vercel is.

### 4. Preview deploys and app-oriented workflow

For product-like apps, preview deploys are useful. They make iteration easier without requiring every step to become the canonical live site immediately.

## What Vercel does **not** automatically solve

This is important.

Moving to Vercel does **not** magically make the citation engine reliable.

It does not solve:

- citation accuracy by itself
- source classification errors
- ambiguity handling by itself
- benchmark truth by itself
- prompt quality by itself

The main gain is cleaner architecture and user experience, not instant intelligence.

## Current environment reality

Christopher has not signed up for Vercel yet.

Also, in the current environment:

- Vercel CLI is not installed
- no Vercel auth is configured
- no Vercel token is known to be present

So the present state is:

- **zero configuration**
- but **not zero capability**

Once an account exists, Vercel could likely become an automatable deployment/runtime surface here. But we should not assume GitHub-like smoothness until auth and workflow are proven in practice.

## Recommended architecture split

The healthiest likely split is:

- **GitHub** = source-of-truth code surface
- **Vercel** = deployment/runtime surface for the citation app
- **GitHub Pages** = static surfaces like Remote Viewer and other documentation/artifact lanes

That division makes sense because each platform is then doing what it is naturally good at.

## Suggested next steps

### Phase 1 — Decide whether the citation app is worth this move now

Before signing up for anything, answer:

- Is the citation lane active enough right now to justify infrastructure work?
- Is Rose/testing the main target soon?
- Are we trying to make the app feel more like a real tool rather than a demo?

If yes, proceed.

### Phase 2 — Create the Vercel account and minimal setup

Do the smallest possible setup first:

- create Vercel account
- connect GitHub
- choose the app repo to attach
- confirm a first successful deploy path

### Phase 3 — Define the minimum backend route

Do not overbuild.

Start with one route whose job is simply:

- receive frontend request
- call Gemini server-side
- return structured result

That is enough to prove the architecture.

### Phase 4 — Move from key-pasting to real tester flow

The first real product win is not fancy UI. It is:

- no tester API key requirement
- stable deploy
- one clean task works end-to-end

That alone materially upgrades the app.

### Phase 5 — Only then extend reliability

After the infrastructure works, improve the actual citation logic:

- structured extraction
- visible confidence and ambiguities
- benchmark/test cases
- more deterministic formatting where possible

## Recommended near-term framing

The best framing is probably not:

> "Move everything to Vercel."

It is closer to:

> "Use Vercel to give the citation app the minimum backend it needs to start feeling like a real tool."

That is more disciplined and more honest.

## Bottom line

If Remote Viewer is the right home for static thought surfaces, then Vercel is likely the right next experiment for the citation lane once the goal becomes cleaner testing, server-side keys, and a more product-like experience.

The key question is not whether Vercel is cool.

The key question is whether the citation app is ready to deserve backend architecture.

My current judgment: it probably is — or at least it is the strongest lane where that move could matter.