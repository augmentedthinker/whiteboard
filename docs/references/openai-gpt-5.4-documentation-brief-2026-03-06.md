# OpenAI GPT-5.4 Documentation Brief

Date: 2026-03-06  
Scope: New GPT-5.4 model release notes + practical API implementation notes for Remote Viewer docs.

## Source Links (Primary)
- Models catalog: https://developers.openai.com/api/docs/models
- GPT-5.4 model page: https://developers.openai.com/api/docs/models/gpt-5.4
- GPT-5.4 pro model page: https://developers.openai.com/api/docs/models/gpt-5.4-pro
- Changelog (Mar 5, 2026 release): https://developers.openai.com/api/docs/changelog
- Reasoning guide: https://developers.openai.com/api/docs/guides/reasoning
- Tool Search guide: https://developers.openai.com/api/docs/guides/tools-tool-search

---

## What was released

Per OpenAI changelog (Mar 5, 2026):
- `gpt-5.4` released to:
  - `v1/responses`
  - `v1/chat/completions`
- `gpt-5.4-pro` released to:
  - `v1/responses` (pro positioned for harder/longer problems)

Also announced with the same release window:
- Tool Search in Responses API
- Built-in Computer Use support in GPT-5.4 via Responses API computer tool
- 1M+ context support with native compaction workflow for long-running agent systems

---

## GPT-5.4 / 5.4-pro practical notes

### Positioning
- `gpt-5.4`: newest frontier model for professional work.
- `gpt-5.4-pro`: higher-compute variant focused on smarter, more precise responses; may run longer on tough tasks.

### Context and output (notable)
- 1,050,000 context window class for `gpt-5.4` + `gpt-5.4-pro`.
- Up to 128,000 max output tokens on `gpt-5.4-pro` page.

### Pricing signal (from model pages)
- `gpt-5.4`: listed at $2.50 input / $15 output per 1M tokens.
- `gpt-5.4-pro`: listed at $30 input / $180 output per 1M tokens.
- For prompts above 272k input tokens (in 1.05M window class), special multipliers are documented.

### Reasoning behavior
- These models are in the reasoning-model operating pattern:
  - use Responses API when possible
  - control with `reasoning.effort` (e.g., low/medium/high/xhigh where supported)
  - track reasoning-token usage in the `usage.output_tokens_details.reasoning_tokens` object

---

## API usage examples

### Responses API (recommended path)

```json
{
  "model": "gpt-5.4",
  "reasoning": { "effort": "medium" },
  "input": "Analyze this issue and propose a fix plan."
}
```

### Chat Completions (supported for gpt-5.4)

```json
{
  "model": "gpt-5.4",
  "messages": [
    { "role": "user", "content": "Summarize this architecture doc and list risks." }
  ]
}
```

### GPT-5.4-pro
Use when problem depth justifies higher latency/cost; prefer background mode for long-running requests.

---

## Tool Search (important with 5.4)

Tool Search enables deferred tool loading so you do **not** preload full tool schemas into context.

High-level workflow:
1. Add `{"type": "tool_search"}` in tools list.
2. Mark tool surfaces as `defer_loading: true` (functions/namespaces/MCP surfaces).
3. Model loads only relevant subsets at runtime.

Operational impact:
- lower token overhead
- better cache behavior
- improved latency on large tool surfaces

---

## Recommended Remote Viewer policy update

- Default “deep reasoning” lane:
  - `gpt-5.4` on Responses API
- Escalation lane:
  - `gpt-5.4-pro` for high-stakes/long-horizon tasks only
- Cost guardrail:
  - enforce `max_output_tokens` + monitor reasoning token burn
- Tool architecture:
  - adopt deferred tool-loading pattern (Tool Search) for large agent toolchains

---

## Caveat

OpenAI model pages update quickly. Treat this brief as a snapshot from 2026-03-06 and re-check source pages before production policy changes.
