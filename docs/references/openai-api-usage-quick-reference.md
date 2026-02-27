# OpenAI Usage Quick Reference (for Saber Mission Control)

Date: 2026-02-22
Source: OpenAI platform pages viewed via Browser Relay (`/usage`, `/settings/organization/limits`) + live `session_status` readings in OpenClaw.

## What we confirmed

### 1) Two different concepts must stay separate
- **Context window** (example: `272k`) = how much conversation memory fits in the current session.
- **Usage/rate limits** = provider/org budget + throughput limits (RPM/TPM/TPD/RPD/monthly spend).

These are not the same meter.

### 2) OpenAI limits page exposes org-level hard limits
From the OpenAI Limits page we saw:
- **Usage tier:** Tier 1
- **Monthly usage limit:** **$120.00**
- **Current monthly budget card:** `February budget $0.00 / $20.00` (budget/alert card area)
- **Rate-limit framework:** RPM, TPM, TPD/RPD per model (org/project level)

Examples visible in table (snapshot):
- `gpt-5.1`: 500,000 TPM, 500 RPM, 900,000 TPD
- `gpt-5-mini`: 500,000 TPM, 500 RPM, 5,000,000 TPD
- `gpt-5-nano`: 200,000 TPM, 500 RPM, 2,000,000 TPD

## What remains ambiguous in our current setup

### 3) OpenClaw “5h X% left / Day Y% left”
In `session_status` we see short/long usage buckets (example: `5h 89% left`, `Day 21% left`).

These are useful operationally, but **they do not currently expose an exact window start timestamp** in the telemetry we can read. So:
- we can see **how much is left now**,
- we can estimate reset ETA,
- but we cannot yet prove the exact opening time of the long window from one snapshot.

## Practical operating model (current)

Until reset boundaries are observed precisely:
- Treat long-window remainder as a burn-rate signal.
- Current temporary heuristic agreed today: **~21% over ~3 days ≈ 7%/day target burn**.
- Alerting guidance:
  - Green: <=4% used today
  - Yellow: 5%
  - Red: 6-7%

## Mission Control integration notes

To keep this trustworthy:
1. Keep collecting usage history continuously.
2. Detect reset events (when long-window % jumps up).
3. After first full reset cycle, infer actual cadence and improve prediction confidence.
4. Keep OpenAI org limits page as source of truth for hard caps/tier.

## Caveat

If Saber/OpenClaw is running through OAuth/provider routing, some runtime “usage left” indicators may reflect that runtime path, while org API console limits reflect your OpenAI org/project account settings. Cross-check both when debugging budget confusion.
