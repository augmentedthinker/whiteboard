# Styles

This folder is the beginning of a reusable **style library / style archive** for Remote Viewer and related artifact work.

## Purpose

The goal of this area is to make page design more intentional and easier to reference.

Instead of loosely saying:
- "make it look cool"
- "use the usual style"
- "do something more like that other page"

we can build a named library of visual systems and then refer to them directly.

That means Christopher can say things like:
- use **Luminous Glass Noir**
- use **Paper Editorial Modern**
- use **Brutalist Monochrome**
- or later, use some future style in this archive

and the style choice becomes a clearer operational instruction.

## What belongs here

This folder should contain:
- a top-level showroom page (`index.html`)
- one folder per named style
- style detail pages explaining the look in plain English and technical terms
- any local assets needed for those style demonstrations
- eventually, supporting notes, tokens, screenshots, or examples if useful

## What each style entry should ideally include

A good style entry should usually make clear:

1. **what the style feels like**
2. **what it is good for**
3. **what its core visual ingredients are**
4. **how it differs from other styles**
5. **how to ask for it later in conversation**
6. **enough technical detail to reproduce it**

That technical detail may include things like:
- color values
- font choices
- shape language
- border radius logic
- layout grammar
- spacing logic
- shadow or depth treatment
- example CSS tokens

## Showroom principle

The main `styles/index.html` page should stay relatively neutral.

Its job is to act as a **showroom surface**, not to impose one dominant style over the whole page.

The better pattern is:
- neutral showroom background
- each card behaves like a miniature specimen of its own style
- click through for deeper explanation and replication details

## Why this matters

This gives the system a more durable design vocabulary.

Over time, it should let us:
- choose styles faster
- compare styles more clearly
- build new artifacts more intentionally
- avoid re-deriving the same look from scratch every time
- create continuity in the visual language of Remote Viewer

## Expected growth

This folder should keep expanding.

Likely future additions could include things like:
- retro terminal
- gallery minimal / luxury minimal
- playful post-digital
- monochrome utilitarian
- futuristic dashboard
- warm philosophical notebook

The point is not to collect styles for their own sake.
The point is to build a practical library that makes future artifact design more legible, selectable, and repeatable.
