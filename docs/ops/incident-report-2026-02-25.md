# 🐞 Bug / Incident Report: Fatal Config Crash Loop

**Date of Incident:** February 25, 2026\
**Environment:** ChromeOS (Crostini Linux Container), Debian/Ubuntu\
**OpenClaw Version:** Gateway v2026.2.19-2 (Updated via Doctor to
2026.2.23)\
**Setup:** Running as a background `systemd` service

------------------------------------------------------------------------

## 📝 Summary

The OpenClaw gateway entered an infinite `systemd` crash-loop due to an
unrecognized configuration key (`agents.list.0.subagents.allow`) being
injected into `openclaw.json`. Because the gateway treats unrecognized
config keys as fatal errors, the daemon refused to start, resulting in
119 automatic restart attempts by `systemd` over a 30-minute period.

------------------------------------------------------------------------

## ⏱️ Timeline of Events (from journalctl)

-   **11:11 - 11:20 AM:** The `health-monitor` logged multiple errors
    from the embedded agent:\
    `The AI service is temporarily overloaded. Please try again in a moment.`

-   **11:29:15 AM:** A configuration reload was attempted and skipped:\
    `[reload] config reload skipped (invalid config): agents.list.0.subagents: Unrecognized key: "allow"`

-   **11:29:29 AM:** The gateway received a `SIGTERM` and cleanly shut
    down.

-   **11:29:41 AM - 11:59:58 AM:** `systemd` attempted to restart the
    service. The Node process encountered the invalid config, prompted
    the user to run `openclaw doctor --fix`, and immediately exited with
    `status=1/FAILURE`. `systemd` continuously attempted to restart the
    service, reaching restart counter **#119** before manual
    intervention.

------------------------------------------------------------------------

## 💥 The Exact Error

``` text
Invalid config at ~/.openclaw/openclaw.json:
- agents.list.0.subagents: Unrecognized key: "allow"
```

------------------------------------------------------------------------

## 🛠️ Resolution

The issue was manually resolved by running `openclaw doctor --fix` in
the terminal. The doctor successfully removed the rogue `"allow"` key,
canonicalized legacy sessions, cleaned up 75 orphaned transcript files,
and successfully restarted the `systemd` service.

------------------------------------------------------------------------

## 💡 Suggestions for the Dev Team

1.  **Graceful Config Fallback:** Instead of a fatal crash upon
    detecting an unrecognized key in `openclaw.json`, the gateway could
    emit a `WARN`, ignore the unknown key, and continue booting. A
    strict structural crash takes down remote, headless setups
    unexpectedly.

2.  **Systemd Restart Limits:** The default OpenClaw `systemd` template
    might need `StartLimitIntervalSec` and `StartLimitBurst` directives
    to prevent it from continuously thrashing the CPU if the Node app
    immediately exits with a structural error.

3.  **Investigation into the Injection:** The user did not manually edit
    the JSON file. It is unclear if the `"allow"` key was a remnant of a
    previous version, injected by a subagent attempting to modify its
    own permissions, or an artifact of an interrupted OTA update.
