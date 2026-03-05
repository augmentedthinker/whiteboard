# HEARTBEAT.md — Memory Lanes A/B/C Watchdog

Run this checklist on each heartbeat.

## 0) Activity gate
- Determine whether the main session had meaningful activity in the last 90 minutes.
- If no meaningful activity: reply `HEARTBEAT_OK`.

## 1) Lane A (concise checkpoint)
- Check newest Lane A checkpoint in `/home/gagekappes/openclaw/memory/` (`YYYY-MM-DD-HHMM.md`, excluding laneC files).
- If no Lane A checkpoint in last 90 minutes:
  - Create a new Lane A checkpoint file: `YYYY-MM-DD-HHMM.md` (America/New_York).
  - Keep concise (trigger + 3–6 highlights + open loops).

## 2) Lane C (transcript-derived memory)
Goal: mimic older rich transcript memory style.

- Lane C cadence rule:
  - Write Lane C every 90 minutes for active sessions, but offset by ~30 minutes after Lane A when possible.
  - Practical rule at heartbeat time:
    - If latest Lane C transcript file is older than 90 minutes, write a new one.
    - Prefer writing when at least 30 minutes have passed since the most recent Lane A write.

- Lane C data source:
  - Pull recent conversation history for main session (target last ~90 minutes of turns).
  - Include user + assistant turns and key tool outcomes; trim obvious noise/spam.

- Lane C output:
  - File name: `YYYY-MM-DD-HHMM-laneC-transcript.md`
  - Structure:
    1. Header with timestamp, session/source if known
    2. `## Conversation Summary`
    3. Timestamped transcript-style blocks (`user:` / `assistant:` / key tool events)
    4. `## Decisions / Open Loops`

## Rules
- Keep this lightweight and non-disruptive.
- Do not send proactive user-facing chatter for routine checks.
- If no write is needed, reply `HEARTBEAT_OK`.
