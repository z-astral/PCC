# Contributing to Pretty and Clean Codes

Thank you for your interest in improving PCC. This document explains how to get the project running locally so you can test changes before submitting them.

---

## Prerequisites

- **Node.js** `>= 18.0.0` — verify with `node -v`
- **npm** `>= 9` — verify with `npm -v` (comes bundled with Node.js)

---

## Local Setup

```bash
# 1. Clone or download the project folder
cd pretty-and-clean-codes

# 2. No install step needed — the CLI has zero external dependencies
```

---

## Testing the CLI Locally

Run any command directly against `bin/cli.mjs` with Node.js:

```bash
# Show help
node bin/cli.mjs help

# Check version
node bin/cli.mjs --version

# Dry-run a setup (no files written)
node bin/cli.mjs setup cursor --dry-run
node bin/cli.mjs setup antigravity/claude --dry-run
node bin/cli.mjs setup all --dry-run

# Preview the global template output
node bin/cli.mjs user_global_template

# Save the template as a file
node bin/cli.mjs user_global_template --save
```

To test a real write, point it at a temporary directory:

```bash
mkdir ../test-project
cd ../test-project
node ../pretty-and-clean-codes/bin/cli.mjs setup cursor
```

---

## Project Structure

```
pretty-and-clean-codes/
├── bin/
│   └── cli.mjs              # CLI entry point (zero dependencies)
├── zann-desu/
│   └── skills/
│       └── SKILL.md         # PCC source — copied verbatim to all agent destinations
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── package.json
└── README.md
```

---

## Editing the Skill Content

All agent destinations receive an exact copy of `zann-desu/skills/SKILL.md`. Edit that single file to update the rules across every supported agent.

---

## Adding a New Agent

Open `bin/cli.mjs` and add an entry to the `AGENTS` map:

```js
mynewagent: {
    label: 'My New Agent',
    project: ['.mynewagent/rules/pretty-and-clean-codes.md'],
    global: [path.join(homeDir(), '.mynewagent', 'rules', 'pretty-and-clean-codes.md')],
},
```

That's all — `setup mynewagent` and `setup all` will pick it up automatically.

---

## Code Style

This project follows its own PCC standard. When editing `cli.mjs`:

- Zero inline comments inside function bodies.
- Full JSDoc docblock above every exported or complex function.
- Guard clauses first; no `else` after `return`.
- Keep each function under 20 lines of executable statements.

