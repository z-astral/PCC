#!/usr/bin/env node

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

/** @type {Record<string, string>} */
const c = {
    reset: '\x1b[0m',
};

/**
 * Wraps a string with an ANSI SGR sequence and auto-resets.
 *
 * @param {number} code - SGR code.
 * @param {string} s - Input string.
 * @returns {string}
 */
const sgr = (code, s) => `\x1b[${code}m${s}\x1b[0m`;

const bold    = (s) => sgr(1, s);
const dim     = (s) => sgr(2, s);
const cyan    = (s) => sgr(36, s);
const green   = (s) => sgr(32, s);
const yellow  = (s) => sgr(33, s);
const red     = (s) => sgr(31, s);
const magenta = (s) => sgr(35, s);

/**
 * Reads the version field from the package's own package.json.
 *
 * @returns {string}
 */
function getVersion() {
    try {
        const pkg = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'package.json'), 'utf-8'));
        return pkg.version ?? '1.0.0';
    } catch {
        return '1.0.0';
    }
}

/**
 * Reads the canonical SKILL.md source from the package bundle.
 *
 * @returns {string}
 */
function getSkillSource() {
    const src = path.join(ROOT_DIR, 'zann-desu', 'skills', 'SKILL.md');
    return fs.existsSync(src) ? fs.readFileSync(src, 'utf-8') : '';
}

/**
 * Resolves the home directory, cross-platform.
 *
 * @returns {string}
 */
const homeDir = () => os.homedir();

/**
 * Agent target registry.
 * Each entry maps a CLI name to the project-local and global destination paths.
 *
 * @type {Record<string, { label: string; project: string[]; global: string[] }>}
 */
const AGENTS = {
    antigravity: {
        label: 'Google Antigravity',
        project: [
            '.antigravity/rules/pretty-and-clean-codes.md',
            '.idx/airules.md',
        ],
        global: [
            path.join(homeDir(), '.antigravity', 'global_rules.md'),
        ],
    },
    claude: {
        label: 'Claude Code',
        project: [
            '.claude/skills/pretty-and-clean-codes/SKILL.md',
            'CLAUDE.md',
        ],
        global: [
            path.join(homeDir(), '.claude', 'CLAUDE.md'),
        ],
    },
    opencode: {
        label: 'OpenCode',
        project: [
            '.opencode/skills/pretty-and-clean-codes/SKILL.md',
            'OPENCODE.md',
        ],
        global: [
            path.join(homeDir(), '.config', 'opencode', 'OPENCODE.md'),
        ],
    },
    cursor: {
        label: 'Cursor IDE',
        project: [
            '.cursor/rules/pretty-and-clean-codes.mdc',
            '.cursorrules',
        ],
        global: [
            path.join(homeDir(), '.cursor', 'rules', 'pretty-and-clean-codes.mdc'),
        ],
    },
    devin: {
        label: 'Devin AI',
        project: [
            '.devin/skills/pretty-and-clean-codes/SKILL.md',
            '.devin/guidelines.md',
        ],
        global: [
            path.join(homeDir(), '.devin', 'guidelines.md'),
        ],
    },
    windsurf: {
        label: 'Windsurf IDE',
        project: [
            '.windsurf/rules/pretty-and-clean-codes.md',
            '.windsurfrules',
        ],
        global: [
            path.join(homeDir(), '.codeium', 'windsurf', 'memories', 'global_rules.md'),
        ],
    },
    copilot: {
        label: 'GitHub Copilot',
        project: [
            '.github/copilot-instructions.md',
        ],
        global: [
            path.join(homeDir(), '.github', 'copilot-instructions.md'),
        ],
    },
    cline: {
        label: 'Cline',
        project: ['.clinerules'],
        global: [path.join(homeDir(), '.clinerules')],
    },
    roocode: {
        label: 'RooCode',
        project: [
            '.roo/rules/pretty-and-clean-codes.md',
            '.roorules',
        ],
        global: [
            path.join(homeDir(), '.roo', 'rules', 'pretty-and-clean-codes.md'),
        ],
    },
    codex: {
        label: 'OpenAI Codex CLI',
        project: ['AGENTS.md'],
        global: [path.join(homeDir(), '.codex', 'AGENTS.md')],
    },
    gemini: {
        label: 'Google Gemini CLI / Assistant',
        project: [
            'GEMINI.md',
            '.gemini/skills/pretty-and-clean-codes/SKILL.md',
        ],
        global: [
            path.join(homeDir(), '.gemini', 'GEMINI.md'),
        ],
    },
    zed: {
        label: 'Zed Editor',
        project: ['.rules'],
        global: [path.join(homeDir(), '.config', 'zed', 'rules.md')],
    },
    agents: {
        label: 'Universal Agents',
        project: [
            '.agents/skills/pretty-and-clean-codes/SKILL.md',
        ],
        global: [
            path.join(homeDir(), '.agents', 'skills', 'pretty-and-clean-codes', 'SKILL.md'),
        ],
    },
};

/**
 * Resolves the agent keys from a slash/comma-delimited target string or "all".
 *
 * @param {string} raw - Raw CLI positional (e.g. "antigravity/claude" or "all").
 * @returns {string[]} Resolved agent keys.
 */
function resolveAgentKeys(raw) {
    if (raw === 'all') return Object.keys(AGENTS);
    return raw.split(/[/,]+/).map((k) => k.trim().toLowerCase()).filter(Boolean);
}

/**
 * Writes content to a destination path, creating parent directories as needed.
 *
 * @param {string} dest - Absolute destination path.
 * @param {string} content - File content.
 * @param {boolean} dryRun - Skip disk write when true.
 */
function writeDestination(dest, content, dryRun) {
    const exists = fs.existsSync(dest);
    const tag    = exists ? yellow('[UPDATE]') : green('[CREATE]');
    const size   = dim(`(${Buffer.byteLength(content, 'utf-8')} bytes)`);

    if (dryRun) {
        console.log(`  ${tag} ${dest} ${dim('(dry-run)')} ${size}`);
        return;
    }

    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, content, 'utf-8');
    console.log(`  ${tag} ${dest} ${green('✓')}`);
}

/**
 * Executes the `setup` subcommand.
 *
 * @param {string[]} positionals - CLI positional args after "setup".
 * @param {boolean} isGlobal - Write to global home paths.
 * @param {boolean} dryRun - Simulate without writing.
 */
function cmdSetup(positionals, isGlobal, dryRun) {
    const rawTarget = positionals[0];

    if (!rawTarget) {
        console.error(red('✘ Tentukan nama agen. Contoh: npx pretty-and-clean-codes setup cursor'));
        console.error(dim('  Jalankan: npx pretty-and-clean-codes help  untuk daftar agen.'));
        process.exit(1);
    }

    const keys = resolveAgentKeys(rawTarget);
    const unknown = keys.filter((k) => !AGENTS[k]);

    if (unknown.length) {
        console.error(red(`✘ Agen tidak dikenal: ${unknown.join(', ')}`));
        console.error(dim(`  Agen yang didukung: ${Object.keys(AGENTS).join(', ')}`));
        process.exit(1);
    }

    const content = getSkillSource();

    if (!content) {
        console.error(red('✘ File SKILL.md sumber tidak ditemukan di bundle paket.'));
        process.exit(1);
    }

    if (dryRun) {
        console.log(yellow('\n⚠  MODE DRY-RUN: Tidak ada file yang akan ditulis ke disk.\n'));
    }

    for (const key of keys) {
        const agent  = AGENTS[key];
        const dests  = isGlobal ? agent.global : agent.project;
        console.log(bold(`\n▸ ${agent.label}`));

        for (const rel of dests) {
            const dest = isGlobal ? rel : path.join(process.cwd(), rel);
            writeDestination(dest, content, dryRun);
        }
    }

    if (dryRun) {
        console.log(yellow('\n✨ Pratinjau selesai. Jalankan tanpa --dry-run untuk menerapkan perubahan.\n'));
    } else {
        console.log(green('\n✅ PCC berhasil dipasang. Buka AI agent kamu dan mulai coding!\n'));
    }
}

/**
 * Executes the `user_global_template` subcommand.
 *
 * @param {boolean} save - Write output to PCC_USER_GLOBAL_RULES.md.
 */
function cmdUserGlobalTemplate(save) {
    const content = getSkillSource();

    if (!content) {
        console.error(red('✘ File SKILL.md sumber tidak ditemukan di bundle paket.'));
        process.exit(1);
    }

    if (save) {
        const dest = path.join(process.cwd(), 'PCC_USER_GLOBAL_RULES.md');
        fs.writeFileSync(dest, content, 'utf-8');
        console.log(green(`\n✅ Template disimpan ke: ${dest}\n`));
        return;
    }

    console.log('\n' + dim('─'.repeat(60)));
    console.log(bold(cyan('  PCC User Global Rules Template')));
    console.log(dim('─'.repeat(60)) + '\n');
    console.log(content);
    console.log(dim('─'.repeat(60)));
    console.log(dim('  Copy teks di atas ke User Rules / System Prompt IDE kamu.\n'));
}

/**
 * Prints the help reference to stdout.
 */
function cmdHelp() {
    const v = getVersion();
    const agentRows = Object.entries(AGENTS)
        .map(([k, a]) => `  ${cyan(k.padEnd(14))} ${a.label}`)
        .join('\n');

    console.log(`
${bold(cyan('Pretty and Clean Codes (PCC)'))} ${dim(`v${v}`)}
Principal OOP AI Engineering Skill — Zero Inline Noise, Terse Naming, Flat Flow.

${bold('PENGGUNAAN:')}
  $ npx pretty-and-clean-codes <perintah> [opsi]

${bold('PERINTAH:')}
  ${cyan('setup <agen> [agen2/agen3]')}   Pasang PCC ke satu atau lebih AI agent
  ${cyan('setup all')}                    Pasang ke semua AI agent yang didukung
  ${cyan('user_global_template')}         Tampilkan template Global Rules untuk di-copy-paste
  ${cyan('help')}                         Tampilkan bantuan ini

${bold('OPSI:')}
  ${cyan('--global, -g')}    Pasang ke direktori home global (~/) bukan direktori proyek
  ${cyan('--dry-run, -d')}   Simulasi tanpa menulis file ke disk
  ${cyan('--save')}          (user_global_template) Simpan sebagai PCC_USER_GLOBAL_RULES.md
  ${cyan('--version, -v')}   Tampilkan versi
  ${cyan('--help, -h')}      Tampilkan bantuan ini

${bold('CONTOH:')}
  $ npx pretty-and-clean-codes setup antigravity
  $ npx pretty-and-clean-codes setup cursor/claude/opencode
  $ npx pretty-and-clean-codes setup all --global
  $ npx pretty-and-clean-codes setup devin --dry-run
  $ npx pretty-and-clean-codes user_global_template --save

${bold('AI AGENT YANG DIDUKUNG:')}
${agentRows}
`);
}

/**
 * CLI entry point.
 */
function main() {
    const argv    = process.argv.slice(2);
    const flags   = new Set();
    const positionals = [];

    for (const arg of argv) {
        if (arg === '--global' || arg === '-g')   { flags.add('global');  continue; }
        if (arg === '--dry-run' || arg === '-d')  { flags.add('dryRun');  continue; }
        if (arg === '--save')                     { flags.add('save');    continue; }
        if (arg === '--version' || arg === '-v')  { flags.add('version'); continue; }
        if (arg === '--help' || arg === '-h')     { flags.add('help');    continue; }
        if (!arg.startsWith('-'))                 { positionals.push(arg); continue; }
    }

    if (flags.has('version')) {
        console.log(getVersion());
        return;
    }

    const cmd = positionals[0];
    const rest = positionals.slice(1);

    if (!cmd || cmd === 'help' || flags.has('help')) {
        cmdHelp();
        return;
    }

    if (cmd === 'setup') {
        cmdSetup(rest, flags.has('global'), flags.has('dryRun'));
        return;
    }

    if (cmd === 'user_global_template') {
        cmdUserGlobalTemplate(flags.has('save'));
        return;
    }

    console.error(red(`✘ Perintah tidak dikenal: "${cmd}"`));
    console.error(dim('  Jalankan: npx pretty-and-clean-codes help'));
    process.exit(1);
}

main();
