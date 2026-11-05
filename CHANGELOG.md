# Changelog

All notable changes to **pretty-and-clean-codes** are documented here. This project follows SemVer-ish discipline: patch releases fix bugs silently; minor releases extend the public surface without breaking it; major releases may change commands, flags, or output paths.

---

## [Unreleased]

Nothing pending at this time.

---

## 1.0.0 — 2026-11-06

Initial release of `pretty-and-clean-codes`.

- **`setup <agent>` subcommand:** Installs the PCC `SKILL.md` source into one or more AI agent config paths in the current working directory. Accepts a single target (`setup cursor`), a slash- or comma-delimited list (`setup antigravity/claude/opencode`), or the `all` shorthand to cover every supported agent in one pass.
- **`--global` / `-g` flag:** Redirects all write destinations from the project directory to the user home directory (`~/`), enabling a once-per-machine global install without touching individual project folders.
- **`user_global_template` subcommand:** Streams the canonical `SKILL.md` content to stdout for manual copy-paste into an IDE's global system prompt field. Add `--save` to write the output as `PCC_USER_GLOBAL_RULES.md` in the current directory instead.
- **`help` subcommand:** Prints the full command reference, flag list, usage examples, and the complete agent registry to stdout.
- **`--dry-run` / `-d` flag:** Resolves and prints every destination path that _would_ be written, with byte counts, without touching disk.
- **`--version` / `-v` flag:** Prints the package version and exits.
- **12-agent registry:** Covers `antigravity`, `claude`, `opencode`, `cursor`, `devin`, `windsurf`, `copilot`, `cline`, `roocode`, `codex`, `zed`, and `agents`. Each entry declares both project-local paths and global home paths resolved at runtime via `os.homedir()`.
- **Zero external dependencies:** Uses only `node:fs`, `node:os`, `node:path`, and `node:url` — no optional installs needed.
- **`zann-desu/skills/SKILL.md`** — Principal OOP Engineering Skill source file (the canonical content written to all agent destinations).
