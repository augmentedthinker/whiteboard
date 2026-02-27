# ChatGPT Plus + Codex Usage Quick Reference

Date: 2026-02-22

## Key clarification
If Saber is running via your **ChatGPT Plus account context** (not direct paid API calls), then:
- OpenAI **API org limits/billing pages** are not the only source of truth for runtime availability.
- Plus has separate product-level limits/caps that can vary by demand and system conditions.

## Confirmed from OpenAI Help Center
- ChatGPT Plus is a **$20/month ChatGPT app subscription**.
- **API usage is separate and billed independently**.
- Plus can include **usage limits/message caps** that vary with system conditions.

## What this means for Mission Control
- Keep a clear label: **Runtime lane = ChatGPT Plus/Codex session telemetry**.
- Treat “5h left / Day left” as operational buckets from runtime telemetry.
- Do not assume those numbers map 1:1 to API org spend dashboards.

## Practical policy
- Use burn-rate tracking (daily experiment gauge) for operations.
- Keep API limits panel as reference only unless this specific workflow is confirmed to be API-billed.
