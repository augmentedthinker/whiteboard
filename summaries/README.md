# Session Summaries (Christopher + Saber)

## Default rule
When Christopher asks for an end-of-day / end-of-session summary, Saber should:

1. Use the structure from:
   - `/mnt/chromeos/MyFiles/Downloads/SHARE/core/conversation_analysis_prompt_template.md`
2. Save the summary as:
   - `/mnt/chromeos/MyFiles/Downloads/SHARE/core/session-summaries/YYYY-MM-DD-<block-or-eod>-summary.md`
3. Commit key outcomes into OpenClaw memory files (`memory/YYYY-MM-DD.md`, and long-term memory when relevant).
4. Return a clickable link to the saved summary.

## Optional pair
Saber may also produce a short operational recap in chat, but the template-form analysis is the canonical artifact.
