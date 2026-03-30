# Style One

Style One is the **default house style package** for standard Remote Viewer pages.

It exists to give the project a reusable visual and behavioral baseline so new pages do not need to reinvent the same house CSS and theme logic over and over.

---

## Purpose

Use Style One when a page should feel:
- clean
- legible
- warm
- browser-native
- mobile-capable
- consistent with the current main Remote Viewer system

This is the default answer for most standard pages unless Christopher explicitly asks for another style.

---

## Files

- `base.css` — shared visual system and component grammar
- `theme.js` — shared light/dark toggle behavior with saved browser preference

---

## What Style One is for

Style One is best for:
- menu-linked standard pages
- Today / Archive / Tools / Workflows / Ideas / Agents pages
- documentation pages
- new utility pages
- review or continuity surfaces that should feel like part of the main house system

---

## What Style One is not for

Style One is not automatically the right choice for:
- premium concept pages that should use Style 006
- heavily atmospheric pages
- highly custom artifact experiences
- pages whose job depends on a very different visual language

In those cases, page-specific styles or another named style may be the better fit.

---

## Default implementation rule

When building a new standard Remote Viewer page:

1. import `assets/styles/style-one/base.css`
2. use `body class="rv-style-one"`
3. use the shared topbar / hero / card / note grammar where it fits
4. include `assets/styles/style-one/theme.js`
5. add local CSS only for page-specific layout extensions
6. add local JS only for page-specific behavior

The goal is:
- shared base
- local exceptions only when justified

---

## Why this matters

Without a shared package, new pages tend to drift toward:
- duplicated CSS
- slightly inconsistent spacing and color logic
- repeated theme logic
- slower page creation
- harder future maintenance

Style One reduces that drift.

---

## Current rule for future sessions

If Christopher asks for a new linked Remote Viewer page and does not specify a different style, the default assumption should be:

> build it in Style One using the shared package, not by recreating house CSS/JS locally.

If a page needs a different experience, say so explicitly and depart from Style One on purpose.
