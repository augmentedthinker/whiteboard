# Saber Junior Protocol: Automated Delegation (2026-02-25)

## 1. Intent
To increase Saber's operational bandwidth by offloading routine, repetitive, or "push-based" tasks to Saber Junior.

## 2. Delegation Criteria
Saber is authorized to delegate tasks to Saber Junior that meet any of the following:
- **Synchronization:** GitHub pushes, repo mirroring, and file backups to the Remote Viewer.
- **Reporting:** End-of-session summaries, daily logs, and status updates.
- **Scouting:** Basic web research or documentation retrieval.
- **Formatting:** Markdown cleanup, CSS tweaks, or boilerplate generation.

## 3. Communication Rules
- Saber will announce delegations in the chat (e.g., *"🤖 Junior, sync the current workspace to Remote Viewer."*).
- Junior's output should be clearly attributed (e.g., using the 🤖 emoji).
- If Junior encounters a technical error, he must notify Saber immediately for escalation.

## 4. Operational Guardrail
- Saber remains the **Lead Architect**. All core architectural decisions and safety-critical operations (like system config changes) must be initiated by Saber.


## 5. Execution Contract (v1)
- Canonical contract path:
  `/mnt/chromeos/MyFiles/Downloads/SHARE/core/ops/junior-task-contract-v1.md`
- Junior must run the contract preflight before implementation tasks.
- For `/mnt/chromeos/...` paths, prefer shell-based file operations to avoid workspace-boundary write failures.
