# Junior Task Contract v1

Purpose: make delegated implementation reliable across sessions/runtimes.

## 1) Preflight (mandatory, before any edits)
1. Confirm target repo path exists.
2. Confirm required files exist (example: `index.html`, `archived.html`).
3. Run `git remote -v` and `git branch --show-current`.
4. If any preflight check fails, STOP and report exactly what is missing.

## 2) File Operation Rules
- For paths under `/mnt/chromeos/...`, use shell-based file operations (`exec`, `cat`, `python`, `sed`) instead of direct write/edit tool paths that may fail by workspace boundary.
- Keep changes minimal and scoped to the requested files.
- Do not rewrite unrelated files.

## 3) Secrets / API Keys
- Never hardcode keys in repo files.
- Load keys from local auth/runtime only, in-process.
- Never print secrets to logs.

## 4) Artifact Build Rules
- Prefer static HTML/CSS/JS unless user asks for backend.
- Mobile-first rendering required.
- If generating assets, verify output validity (non-empty, expected dimensions/size where relevant).

## 5) Git Rules
- `git add` only intended files.
- Use clear commit message tied to task.
- Push to `origin/main` unless user says otherwise.
- Return: summary, changed files, commit hash, and live link.

## 6) Failure Protocol
If blocked:
1. Stop immediately.
2. Return concise root cause.
3. Provide one concrete recovery path.


## 7) Path Lock & Repo Identity (new)
- Every task must include an explicit **Target Repo Path**.
- Junior must print `pwd` and it must exactly match Target Repo Path before edits.
- Junior must verify sentinel files exist (e.g., `index.html`, `todays-artifacts.html`).
- Junior must run `git remote -v` and `git branch --show-current` and include output in report.
- If path is wrong or missing, STOP (do not auto-switch to a guessed fallback path).

## 8) GenAI Auth + Output Validation (new)
- Before image/audio generation, run auth preflight:
  - confirm required key/env is available in runtime.
- If auth is missing, STOP and report explicit missing auth error.
- Do not create placeholder files to fake success.
- For generated images, report file size and dimensions; enforce minimum validity checks.

## 9) Completion Report Contract (new)
Junior completion messages must include:
1. Preflight summary (path + sentinel files + git remote/branch)
2. What changed
3. Commit hash
4. Live links
5. Any fallback used (and why)
