# AI Model Intelligence & Tiered Strategy (2026-02-25)

This document serves as the canonical reference for the models available in Christopher's OpenClaw environment, their capabilities, and their deployment strategy.

## 1. The Model Hierarchy

### Tier 1: The "Architect" (High Capability / Low Quota)
*   **Models:** `gemini-3.1-pro-preview-customtools`, `gemini-3-pro-preview`, `gemini-2.5-pro`
*   **Usage:** Complex architectural decisions, deep debugging, RAG analysis, and initial project structure.
*   **Quota Signal:** **50 Requests Per Day (RPD)**. 
*   **Deployment:** Reserve for high-leverage "Deep Build" blocks.

### Tier 2: The "Workhorse" (High Velocity / High Quota)
*   **Models:** `gemini-3-flash-preview` (Current Default), `gemini-2.5-flash`, `gemini-2.5-flash-lite`
*   **Usage:** General chat, remote/mobile dialogue, iterative UI tweaks, and routine file management.
*   **Quota Signal:** **1,500 Requests Per Day (RPD)**.
*   **Deployment:** Default for all remote hospital sessions and exploratory work.

### Tier 3: The "Specialist" (Legacy Powerhouse)
*   **Models:** `openai-codex/gpt-5.3-codex`
*   **Usage:** Extended "vibe coding" sessions, alternative reasoning, and when Google-tier models hit rate limits.
*   **Quota Signal:** **5-hour usage window** logic (Tier-based).
*   **Deployment:** Use for immersive coding sprints where we need the specific Codex reasoning flavor.

## 2. Shared Workspace Context
*   **Root Path:** `/mnt/chromeos/MyFiles/Downloads/SHARE/`
*   **Daily Folder:** `/mnt/chromeos/MyFiles/Downloads/SHARE/YYYY-MM-DD/`
*   **Protocol:** Default to the current day's folder for all active build artifacts, scripts, and temporary logs.

## 3. Operational Guardrails
- **Switching Engines:** When a Tier 1 model hits a rate limit, pivot immediately to a Tier 2 model to maintain momentum.
- **Burn Visibility:** Use the **API Burn Gauge** in the Frontier Signal Desk to track real-time depletion of the 50 RPD Pro quota.
- **Remote Stability:** While Christopher is at work, prioritize Tier 2 (Flash) models to ensure low latency and zero downtime on the 10-hour remote link.
