<div align="center">

<img src="https://raw.githubusercontent.com/z-astral/PCC/main/public/nothing.jpg" alt="Pretty and Clean Codes (PCC) Banner" width="100%" />

<br />

# Pretty and Clean Codes (PCC)
### Principal OOP AI Engineering Skill

<p align="center">
  <b>High-Density Object-Oriented Programming</b> • <b>Zero Inline Noise</b> • <b>Terse Scope-Proportional Naming</b> • <b>Flat Control Flow</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/pretty-and-clean-codes"><img src="https://img.shields.io/npm/v/pretty-and-clean-codes?style=for-the-badge&logo=npm&color=CB3837&labelColor=18181B" alt="npm version" /></a>
  <a href="#quick-start--cli-commands"><img src="https://img.shields.io/badge/npx-pretty--and--clean--codes-000000?style=for-the-badge&logo=node.js&labelColor=18181B" alt="npx" /></a>
  <a href="#-why-pcc-explained-for-everyone"><img src="https://img.shields.io/badge/Token_Savings-~45%25_Output-22C55E?style=for-the-badge&labelColor=18181B" alt="Token Savings" /></a>
  <a href="#supported-ai-agents-matrix"><img src="https://img.shields.io/badge/AI_Agents-Antigravity_%7C_Claude_%7C_OpenCode_%7C_Cursor_%7C_Devin-0EA5E9?style=for-the-badge&labelColor=18181B" alt="Agents" /></a>
  <a href="#the-4-engineering-pillars"><img src="https://img.shields.io/badge/Paradigm-Strict_OOP-8B5CF6?style=for-the-badge&labelColor=18181B" alt="Paradigm" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-3B82F6?style=for-the-badge&labelColor=18181B" alt="License" /></a>
</p>

<p align="center">
  <a href="#-english-documentation">🇬🇧 English</a> •
  <a href="#-dokumentasi-bahasa-indonesia">🇮🇩 Bahasa Indonesia</a> •
  <a href="#-日本語ドキュメント">🇯🇵 日本語</a> •
  <a href="#-简体中文文档">🇨🇳 简体中文</a> •
  <a href="#-हिन्दी-दस्तावेज़-india">🇮🇳 हिन्दी</a> •
  <a href="#-документация-на-русском-языке">🇷🇺 Русский</a>
</p>

</div>

---

# 🇬🇧 English Documentation

> [!NOTE]
> **What is Pretty and Clean Codes (`PCC`) in simple terms?**
> Think of **PCC** as a "Senior Engineer Brain Chip" (Instruction Manual) for your AI coding assistant (such as **Cursor, Claude Code, Google Antigravity, OpenCode, Devin, Windsurf, or GitHub Copilot**). Once installed, your AI stops writing messy, overly long beginner code and starts writing clean, compact, Object-Oriented code like a Principal Software Architect.

---

## 💡 Why PCC? (Explained for Everyone)

If you have ever asked an AI to write code, you probably noticed three annoying habits:

1. **Narrator Comments Everywhere:** The AI writes useless comments on almost every line (`// initialize variable`, `// loop through users`), making your file look like a beginner's textbook.
2. **Essay-Length Variable Names:** The AI creates 40-character variable names like `temporaryCustomerAuthenticationTokenString` instead of clean, industry-standard names like `tok` or `cfg`.
3. **Spaghetti `if/else` Pyramids:** The AI nests `if` inside `else` inside `if` up to 6 levels deep, scattering loose functions everywhere instead of organizing them into neat **Object-Oriented Programming (OOP)** classes.

> [!TIP]
> **Save 35%–45% of Your AI Token Quota & Speed Up Generation!**
> Because PCC eliminates useless inline comments, compresses verbose variable names, and flattens nested blocks, your AI generates **nearly half as many output tokens** for the exact same functionality. Responses finish almost **2x faster** and cost significantly less on paid API tiers.

---

## 🏛️ The 4 Engineering Pillars

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                    PRETTY AND CLEAN CODES (PCC)                         │
├──────────────────┬──────────────────┬──────────────────┬────────────────┤
│   PILLAR I       │   PILLAR II      │   PILLAR III     │   PILLAR IV    │
│   Strict OOP     │   Zero Inline    │   Terse Scope    │   Vertical     │
│   Encapsulation  │   Comments       │   Naming         │   Compression  │
├──────────────────┼──────────────────┼──────────────────┼────────────────┤
│ • Cohesive class │ • 0 // or # in   │ • Micro: it, v,  │ • Guard clause │
│   architecture   │   method bodies  │   k, i, acc, fn  │   early return │
│ • readonly state │ • 100% signature │ • Local: ctx,    │ • No else      │
│ • private helper │   Docblocks on   │   cfg, req, res, │   after return │
│   isolation      │   classes/methods│   buf, tx, err   │ • 3-15 LOC max │
└──────────────────┴──────────────────┴──────────────────┴────────────────┘
```

### 1. Strict Object-Oriented Encapsulation (OOP)

No loose, floating functions. All business logic, state, and helpers are encapsulated inside cohesive classes (`AuthSvc`, `TokenGuard`, `OrderCalc`, `PacketBuf`) with explicit visibility modifiers (`private`, `protected`, `public`, `readonly`).

### 2. Zero Inline Comments & 100% Signature Docblocks

**Zero (`0`) comments are allowed inside a function's body.** Instead, PCC forces the AI to write a comprehensive, professional **Docblock** (`JSDoc`, `TSDoc`, `Javadoc`, or `Docstring`) **directly above** the class and method signature—documenting what the function does, its `@param` inputs, and its `@returns` output.

> [!IMPORTANT]
> **Why delete inline comments but keep function header Docblocks?**
> In professional IDEs (VS Code, Cursor, IntelliJ), hovering your mouse over any method call displays its **Header Docblock** as a tooltip! Inline comments inside a function do not show up on hover and quickly become outdated lies when code changes.

### 3. Scope-Proportional Terse Variable Naming

Inspired by Unix, Go, and Systems Engineering standards: **the smaller the scope of a variable, the shorter its name should be.**

| Beginner AI Variable Name ❌ | PCC Pro Name ✅ | Scope | Meaning & Usage |
| :--- | :--- | :--- | :--- |
| `currentArrayElementItem` | `it` / `el` | Micro (1–3 lines) | Current item inside `.map()`, `.filter()`, or loop |
| `accumulatedTotalValue` | `acc` | Micro (1–3 lines) | Accumulator inside `.reduce()` |
| `applicationConfigurationObject` | `cfg` / `opts` | Method (4–15 lines) | Configuration or options object |
| `executionContextInstance` | `ctx` | Method (4–15 lines) | Request, execution, or rendering context |
| `incomingHttpRequestObject` | `req` / `res` | Method (4–15 lines) | Network request and response payloads |
| `databaseTransactionSession` | `tx` / `db` | Method (4–15 lines) | Database connection or atomic transaction |
| `memoryByteBufferStream` | `buf` / `pkt` | Method (4–15 lines) | Binary buffer or network packet |
| `caughtExceptionErrorObject` | `err` | Method (4–15 lines) | Error or exception instance |
| `calculatedReturnValue` | `ret` / `out` | Method (4–15 lines) | Final computed return value |

### 4. Vertical Compression & Flat Control Flow

- **Guard Clauses First:** Validate inputs on line 1 and return early (`if (!req?.body) return null;`).
- **Ban `else` After `return`:** If an `if` block returns, there is never a reason to wrap the rest of the method in an `else` block.
- **3–15 Lines Per Method:** Complex methods are automatically broken down into crisp `private` helper methods.

---

## 🚀 Quick Start & CLI Commands

> [!NOTE]
> **Prerequisites for Beginners:**
> Make sure you have **Node.js** (version 18 or newer) installed on your computer. You can verify by opening your terminal (Command Prompt / PowerShell / Terminal) and typing `node -v`. You **do not** need to install anything globally—`npx` runs PCC directly!

### 1. Setup PCC in Your Project Workspace

Open your terminal inside your project folder and run:

```bash
# Install for a single AI agent
npx pretty-and-clean-codes setup antigravity
npx pretty-and-clean-codes setup claude
npx pretty-and-clean-codes setup opencode
npx pretty-and-clean-codes setup cursor
npx pretty-and-clean-codes setup devin

# Install for MULTIPLE agents at once using slash (/) or comma (,)
npx pretty-and-clean-codes setup antigravity/claude/opencode/cursor/devin

# Install for ALL supported AI agents in one command
npx pretty-and-clean-codes setup all
```

> [!TIP]
> **Want PCC active in EVERY project automatically without running `setup` each time?**
> Add the `--global` (or `-g`) flag to install the rules directly into your computer's user home directory (`~/`):
>
> ```bash
> npx pretty-and-clean-codes setup antigravity/claude/cursor --global
> ```

### 2. Generate the `user_global_template` (Copy-Paste Global Rules)

If you prefer to manually paste the rules into your IDE's **Global System Prompt / User Rules** settings menu:

```bash
# Print the ready-to-copy User Global Rules template in your terminal
npx pretty-and-clean-codes user_global_template

# Or save it directly as a file (./PCC_USER_GLOBAL_RULES.md) to open and copy easily
npx pretty-and-clean-codes user_global_template --save
```

### 3. View Interactive CLI Help

```bash
npx pretty-and-clean-codes help
```

---

## 🤖 Supported AI Agents Matrix

| AI Agent / IDE | CLI Target Name | Project Files Generated | Global Path (`--global`) |
| :--- | :--- | :--- | :--- |
| **Google Antigravity** | `antigravity` | `.antigravity/rules/pretty-and-clean-codes.md`<br>`.idx/airules.md` | `~/.antigravity/global_rules.md` |
| **Claude Code** | `claude` | `.claude/skills/pretty-and-clean-codes/SKILL.md`<br>`CLAUDE.md` | `~/.claude/CLAUDE.md` |
| **OpenCode** | `opencode` | `.opencode/skills/pretty-and-clean-codes/SKILL.md`<br>`OPENCODE.md` | `~/.config/opencode/OPENCODE.md` |
| **Cursor IDE** | `cursor` | `.cursor/rules/pretty-and-clean-codes.mdc`<br>`.cursorrules` | `~/.cursor/rules/pretty-and-clean-codes.mdc` |
| **Devin AI** | `devin` | `.devin/skills/pretty-and-clean-codes/SKILL.md`<br>`.devin/guidelines.md` | `~/.devin/guidelines.md` |
| **Windsurf IDE** | `windsurf` | `.windsurf/rules/pretty-and-clean-codes.md`<br>`.windsurfrules` | `~/.codeium/windsurf/memories/global_rules.md` |
| **GitHub Copilot** | `copilot` | `.github/copilot-instructions.md` | `~/.github/copilot-instructions.md` |
| **Cline** | `cline` | `.clinerules` | `~/.clinerules` |
| **RooCode** | `roocode` | `.roo/rules/pretty-and-clean-codes.md`<br>`.roorules` | `~/.roo/rules/pretty-and-clean-codes.md` |
| **OpenAI Codex CLI** | `codex` | `AGENTS.md` | `~/.codex/AGENTS.md` |
| **Zed Editor** | `zed` | `.rules` | `~/.config/zed/rules.md` |
| **Universal Agents** | `agents` | `.agents/skills/pretty-and-clean-codes/SKILL.md` | `~/.agents/skills/pretty-and-clean-codes/SKILL.md` |

> [!WARNING]
> **Existing Rules File Notice:**
> Running `npx pretty-and-clean-codes setup <agent>` will write or update the target configuration file in your workspace. If you already have custom project instructions inside `CLAUDE.md` or `.cursorrules`, we recommend using modular rule targets (like `.cursor/rules/pretty-and-clean-codes.mdc` or `.claude/skills/pretty-and-clean-codes/SKILL.md`) or copying from `npx pretty-and-clean-codes user_global_template`.

---

## 🔍 Before vs. After Code Comparisons

### Example 1: TypeScript (Service & Validation)

**❌ BEFORE (Default Verbose AI Code — 28 Lines, Noisy Comments):**

```typescript
export class UserOrderPricingCalculationService {
  private defaultTaxRateDecimal: number;

  constructor(defaultTaxRateDecimal: number) {
    // Store the default tax rate decimal
    this.defaultTaxRateDecimal = defaultTaxRateDecimal;
  }

  // Function to calculate the final price of an order
  public calculateFinalOrderTotalPrice(
    shoppingCartItemList: Array<{ unitPrice: number; quantity: number }> | null,
    discountPercentageDecimal: number
  ): number {
    // Check if the shopping cart list is null or empty
    if (shoppingCartItemList === null || shoppingCartItemList === undefined || shoppingCartItemList.length === 0) {
      return 0;
    } else {
      let runningSubtotalAmount = 0;
      // Loop through each item in the shopping cart
      for (let itemIndex = 0; itemIndex < shoppingCartItemList.length; itemIndex++) {
        const currentCartItem = shoppingCartItemList[itemIndex];
        runningSubtotalAmount = runningSubtotalAmount + (currentCartItem.unitPrice * currentCartItem.quantity);
      }
      const priceAfterDiscount = runningSubtotalAmount * (1 - discountPercentageDecimal);
      const finalPriceWithTax = priceAfterDiscount * (1 + this.defaultTaxRateDecimal);
      return Number(finalPriceWithTax.toFixed(2));
    }
  }
}
```

**✅ AFTER (With PCC Skill — 16 Lines, Zero Inline Noise, Rich Docblock):**

```typescript
export interface LineItem {
  readonly price: number;
  readonly qty: number;
}

/**
 * Computes net invoice totals with discount and tax rates applied.
 */
export class OrderCalc {
  constructor(private readonly tax: number = 0.11) {}

  /**
   * Calculates the rounded net total for a collection of line items.
   *
   * @param items - Priced line items in the current order.
   * @param disc - Fractional discount rate between `0` and `1`.
   * @returns Net total rounded to two decimal places, or `0` if empty.
   */
  public total(items?: readonly LineItem[] | null, disc: number = 0): number {
    if (!items?.length) return 0;
    const sub = items.reduce((acc, it) => acc + it.price * it.qty, 0);
    return Number((sub * (1 - disc) * (1 + this.tax)).toFixed(2));
  }
}
```

### Example 2: Python (Data Processing OOP)

**✅ PCC Standard in Python:**

```python
from dataclasses import dataclass
from typing import Iterable

@dataclass(frozen=True)
class MetricGuard:
    """Filters and normalizes telemetry readings within valid thresholds."""
    low: float = 0.0
    high: float = 100.0

    def clean(self, vals: Iterable[float] | None) -> list[float]:
        """Returns rounded readings strictly within [low, high] bounds."""
        if not vals:
            return []
        return [round(v, 2) for v in vals if self.low <= v <= self.high]
```

> [!CAUTION]
> **When Refactoring Legacy Procedural Codebases:**
> Because PCC enforces strict OOP encapsulation (`class` & `method` structure), asking your AI to *"Refactor this file with PCC"* on an old procedural script will convert loose functions into classes. If external files import those loose functions, ask the AI to *"Refactor internals with PCC while keeping exported function wrappers for backward compatibility."*

---

# 🇮🇩 Dokumentasi Bahasa Indonesia

> [!NOTE]
> **Apa itu Pretty and Clean Codes (`PCC`) untuk Orang Awam?**
> Bayangkan **PCC** sebagai **"Chip Otak Programmer Senior"** (Buku Panduan Otomatis) yang dipasang ke asisten koding AI kamu (seperti **Cursor, Claude Code, Google Antigravity, OpenCode, Devin, Windsurf, atau GitHub Copilot**).
>
> Tanpa PCC, AI sering menulis kode seperti mahasiswa baru yang sedang mengejar target jumlah kata: nama variabelnya kepanjangan, penuh komentar tidak penting di setiap baris, dan kodenya bertele-tele. **Dengan PCC, AI kamu otomatis menulis kode yang super rapi, pendek, hemat baris, berorientasi objek (OOP), tanpa komentar sampah di tengah kode, namun punya penjelasan profesional yang rinci tepat di atas fungsi.**

---

## 💡 Mengapa Harus Pakai PCC? (Masalah AI Standar vs Solusi PCC)

Saat kamu menyuruh AI membuat kode tanpa *skill* ini, AI biasanya melakukan **4 kesalahan fatal**:

1. **Komentar Narator di Tiap Baris:** AI menulis komentar seperti `// membuat variabel x`, `// melakukan looping data`. Ini membuat file terlihat kotor dan amatir.
2. **Nama Variabel Sepanjang Kalimat:** AI memberi nama variabel `temporaryUserAuthenticationTokenString` (38 huruf!), padahal programmer profesional cukup menulis `tok` atau `cfg`.
3. **Kode Bertele-tele (Boros Baris):** Logika yang sebenarnya cukup **3 baris** ditulis oleh AI menjadi **25 baris** dengan `if-else` bersarang (*nested*) yang bikin pusing saat dibaca.
4. **Fungsi Berceceran (Tidak OOP):** Fungsi-fungsi ditaruh sembarangan tanpa dibungkus di dalam `Class` yang rapi.

> [!TIP]
> **Hemat Kuota Token AI hingga 45% & Respons 2x Lebih Cepat!**
> Karena PCC melarang AI menulis komentar sampah di dalam fungsi dan memangkas nama variabel serta baris yang bertele-tele, jumlah karakter (*output tokens*) yang dikeluarkan AI berkurang drastis. Hasilnya: **kuota API/Pro kamu jauh lebih awet dan AI selesai mengetik kode 2x lebih cepat!**

---

## 🏛️ 4 Pilar Utama PCC (Cara Kerja)

### Pilar 1: Full OOP (Object-Oriented Programming)

Semua kode wajib dibungkus rapi di dalam `class` yang punya tugas jelas (contoh: `AuthSvc`, `TokenGuard`, `OrderCalc`, `PacketBuf`) lengkap dengan pengaman akses (`private`, `protected`, `public`, `readonly`). Tidak boleh ada fungsi liar yang berceceran di luar *class*.

### Pilar 2: Nol Komentar di Dalam Fungsi, 100% Penjelasan Rinci di Atas Fungsi

- **DILARANG KERAS** ada komentar `//` atau `#` di tengah-tengah logika fungsi.
- **WAJIB** ada dokumentasi rinci (**Docblock** seperti `JSDoc`, `TSDoc`, `Javadoc`, atau `Docstring`) **tepat di atas nama fungsi/method** yang menjelaskan fungsi tersebut buat apa, parameter inputnya apa (`@param`), dan hasil akhirnya apa (`@returns`).

> [!IMPORTANT]
> **Kenapa komentar hanya ditaruh di atas fungsi?**
> Kalau dokumentasi ditaruh di atas fungsi (Docblock), saat kamu mengarahkan kursor (*hover mouse*) ke nama fungsi tersebut di VS Code / Cursor / Android Studio, **penjelasan rincinya langsung muncul sebagai pop-up otomatis!** Sedangkan komentar `//` di tengah kode hanya mengotori layar dan tidak bisa muncul di *pop-up* IDE.

### Pilar 3: Kamus Variabel Singkat Ala Programmer Profesional

Orang awam sering bertanya: *"Kalau variabelnya singkat, apa nanti tidak bingung?"*
Jawabannya: **Tidak**, karena programmer senior di seluruh dunia menggunakan singkatan standar internasional yang konsisten berdasarkan luas area (*scope*) variabelnya:

| Nama Variabel AI Biasa ❌ | Standar Pro PCC ✅ | Arti & Kapan Digunakan |
| :--- | :--- | :--- |
| `currentArrayElementItem` | `it` / `el` | **Item / Element**: Data satuan saat melakukan `.map()`, `.filter()`, atau *looping* singkat |
| `accumulatedTotalResult` | `acc` | **Accumulator**: Penampung nilai total di dalam `.reduce()` |
| `applicationConfiguration` | `cfg` / `opts` | **Config / Options**: Objek pengaturan atau konfigurasi |
| `executionContextObject` | `ctx` | **Context**: Konteks eksekusi aplikasi, *request*, atau *canvas* |
| `incomingHttpRequestData` | `req` / `res` | **Request / Response**: Data permintaan dan balasan dari jaringan/API |
| `databaseTransactionObject` | `tx` / `db` | **Transaction / Database**: Koneksi atau transaksi database |
| `temporaryMemoryBuffer` | `buf` / `pkt` | **Buffer / Packet**: Penampung data memori sementara atau paket jaringan |
| `caughtExceptionError` | `err` | **Error**: Objek pesan kesalahan saat terjadi *error* |
| `finalCalculatedReturnValue` | `ret` / `out` | **Return / Output**: Nilai hasil akhir yang akan dikembalikan oleh fungsi |
| `currentLoopIndexNumber` | `i` / `j` / `idx` | **Index**: Nomor urut posisi di dalam perulangan (*loop*) |

### Pilar 4: Penyederhanaan Baris (Hemat & Padat)

- **Guard Clauses (Cek & Langsung Keluar):** Cek kondisi kosong/error di baris pertama (`if (!tok) return false;`), sehingga tidak perlu kurung kurawal `else` yang panjang.
- **Maksimal 3–15 Baris per Method:** Jika sebuah fungsi mulai kepanjangan, AI otomatis memecahnya menjadi fungsi pembantu (`private method`) yang kecil dan rapi.

---

## 🛠️ Panduan Instalasi Lengkap dari Nol (Untuk Pemula)

> [!NOTE]
> **Syarat Awal (Prerequisites):**
> Pastikan komputer kamu sudah terinstal **Node.js** (minimal versi 18).
> Cara mengeceknya: Buka aplikasi **Terminal** (atau **Command Prompt / PowerShell** di Windows), lalu ketik `node -v` dan tekan Enter. Jika muncul angka seperti `v20.x.x` atau `v22.x.x`, berarti kamu siap!

### Cara 1: Pasang Otomatis ke Proyek Kamu dengan `npx` (Paling Praktis)

Buka Terminal di dalam folder proyek koding kamu (atau buka Terminal bawaan di dalam VS Code / Cursor / Antigravity dengan menekan `` Ctrl + ` ``), lalu jalankan salah satu perintah ini:

```bash
# Jika kamu memakai Google Antigravity / Project IDX:
npx pretty-and-clean-codes setup antigravity

# Jika kamu memakai Claude Code:
npx pretty-and-clean-codes setup claude

# Jika kamu memakai OpenCode:
npx pretty-and-clean-codes setup opencode

# Jika kamu memakai Cursor IDE:
npx pretty-and-clean-codes setup cursor

# Jika kamu memakai Devin AI:
npx pretty-and-clean-codes setup devin
```

> [!TIP]
> **Punya Banyak AI Sekaligus? Gabungkan dengan Garis Miring (`/`)!**
> Kamu bisa memasang PCC ke banyak asisten AI sekaligus hanya dalam 1 baris perintah:
>
> ```bash
> npx pretty-and-clean-codes setup antigravity/claude/opencode/cursor/devin
> ```
>
> Atau pasang ke **semua** AI yang didukung sekaligus:
>
> ```bash
> npx pretty-and-clean-codes setup all
> ```

### Cara 2: Pasang untuk Global (`user_global_template`) — Sekali Pasang untuk Selamanya

Kalau kamu malas menjalankan perintah `setup` setiap kali membuat folder proyek baru, kamu bisa memasangnya ke pengaturan **User Global** (berlaku untuk semua proyek di komputer kamu):

**Opsi A — Otomatis via Flag `--global`:**

```bash
npx pretty-and-clean-codes setup antigravity/claude/cursor --global
```

**Opsi B — Ambil Template Teks untuk Di-*Copy-Paste* Manual (`user_global_template`):**

```bash
# Menampilkan teks template langsung di layar terminal:
npx pretty-and-clean-codes user_global_template

# ATAU simpan menjadi file bernama PCC_USER_GLOBAL_RULES.md agar gampang di-copy:
npx pretty-and-clean-codes user_global_template --save
```

Setelah teksnya muncul, *copy* dan *paste* ke menu pengaturan global IDE kamu:

- **Cursor IDE:** Buka `Cursor Settings` -> `General` -> `Rules for AI` -> Paste di kolom **User Rules**.
- **Google Antigravity:** Simpan di `~/.antigravity/global_rules.md` atau tempel di pengaturan *System Instructions*.
- **Claude Code:** Tempel di file `~/.claude/CLAUDE.md`.
- **Windsurf:** Buka `Settings` -> `Edit Global Rules` (`global_rules.md`) -> Paste.

### Cara 3: Melihat Menu Bantuan (`help`)

Jika lupa daftar perintah atau nama agen yang didukung, cukup ketik:

```bash
npx pretty-and-clean-codes help
```

---

## ❓ Tanya Jawab (FAQ) untuk Pengguna Baru

<details>
<summary><b>1. Setelah saya jalankan perintah npx setup, apa yang harus saya lakukan?</b></summary>
<br>
Tidak perlu konfigurasi tambahan! File aturan PCC sudah otomatis terpasang di folder proyek kamu. Cukup buka chat AI kamu (Cursor, Claude, Antigravity, dll.) dan minta AI membuat atau merapikan kode seperti biasa. AI akan otomatis membaca aturan PCC tersebut.
</details>

<details>
<summary><b>2. Bagaimana cara menyuruh AI merapikan kode lama saya yang berantakan?</b></summary>
<br>
Cukup blok kode lama kamu, lalu ketik di chat AI:
<code>"Refactor kode ini menggunakan standar PCC (Pretty and Clean Codes)"</code>.
Dalam hitungan detik, semua komentar sampah di tengah fungsi akan bersih, variabel panjang akan disingkat secara profesional, dan strukturnya diubah menjadi Class OOP yang padat.
</details>

<details>
<summary><b>3. Apakah aman digunakan untuk proyek tim atau kantor?</b></summary>
<br>
Sangat aman. Justru karena setiap class dan fungsi memiliki dokumentasi <b>Docblock lengkap (100% coverage)</b> di bagian atasnya, rekan tim kamu bisa langsung tahu kegunaan dan tipe data setiap fungsi tanpa harus membaca isi kodenya baris demi baris.
</details>

---

# 🇯🇵 日本語ドキュメント

> [!NOTE]
> **Pretty and Clean Codes (`PCC`) とは？（初心者向け解説）**
> **PCC** は、お使いのAIコーディングアシスタント（**Antigravity、Claude Code、OpenCode、Cursor、Devin、Windsurf、GitHub Copilot** など）に「プリンシパル（最上級）エンジニアの思考回路」をインストールするスキルパッケージです。
> AI特有の「長すぎる変数名」「毎行書かれる不要なコメント」「深くネストされた `if/else`」を完全に排除し、プロフェッショナルなオブジェクト指向（OOP）コードを出力させます。

## 💡 なぜ PCC が必要なのか？

デフォルトのAIは、初心者向けのチュートリアルのような冗長なコードを生成しがちです。PCCを導入することで以下の4つの基準が自動的に適用されます：

1. **厳格なオブジェクト指向設計 (Strict OOP):** 散乱した手続き型関数を禁止し、`private` / `protected` / `public` / `readonly` を明示した高凝集なクラス（`Svc`, `Repo`, `Guard`, `Buf`, `Calc`）にカプセル化します。
2. **インラインコメント完全禁止 & 100% シグネチャDocblock:** メソッド内部での `//` や `#` コメントを完全に禁止します。その代わり、クラスとメソッドの宣言直上にのみ詳細な **Docblock**（`TSDoc`, `JSDoc`, `Javadoc`, `Docstring`）を記述します。
3. **スコープ比例型の簡潔な変数名:** 小さなスコープでは `ctx`, `cfg`, `req`, `res`, `it`, `acc`, `err`, `buf`, `tx` といったプロ標準の短い識別子を使用します。
4. **垂直方向のコード圧縮:** ガード節（早期リターン）を最優先し、`return` 後の `else` を禁止。1メソッドあたり3〜15行のフラットな構造を維持します。

> [!TIP]
> **AIの出力トークンを約45%削減し、生成速度を2倍に高速化！**
> 不要な行内コメントと冗長な変数名を排除するため、同じ機能を実装する際の出力トークン数が大幅に減少し、APIコストの節約とレスポンスの高速化を実現します。

## 🚀 クイックスタート (`npx` コマンド)

```bash
# 単一のエージェントにセットアップ
npx pretty-and-clean-codes setup antigravity
npx pretty-and-clean-codes setup claude
npx pretty-and-clean-codes setup opencode
npx pretty-and-clean-codes setup cursor
npx pretty-and-clean-codes setup devin

# スラッシュ (/) 区切りで複数のAIエージェントへ一括セットアップ
npx pretty-and-clean-codes setup antigravity/claude/opencode/cursor/devin

# サポートされている全エージェントに一括導入
npx pretty-and-clean-codes setup all

# ユーザーグローバルルール（User Global Rules）用テンプレートを表示・保存
npx pretty-and-clean-codes user_global_template
npx pretty-and-clean-codes user_global_template --save

# CLIヘルプの表示
npx pretty-and-clean-codes help
```

> [!IMPORTANT]
> **全プロジェクト共通で適用したい場合：**
> `--global`（または `-g`）フラグを付けると、ホームディレクトリ（`~/`）にグローバル設定としてインストールされます：
> `npx pretty-and-clean-codes setup antigravity/claude/cursor --global`

---

# 🇨🇳 简体中文文档

> [!NOTE]
> **什么是 Pretty and Clean Codes (`PCC`)？（新手通俗指南）**
> 您可以把 **PCC** 想象成给 AI 编程助手（如 **Antigravity、Claude Code、OpenCode、Cursor、Devin、Windsurf、GitHub Copilot**）安装的一块**“首席架构师大脑芯片”**。
> 默认情况下，AI 写代码像是在凑字数的新手：变量名长达三四十个字母、每行都有啰嗦的废话注释、到处是嵌套五六层的 `if/else`。安装 **PCC** 后，AI 会严格按照资深系统架构师的标准编写代码：**纯正的面向对象（OOP）、函数内部零废话注释、函数上方完整的专业文档块、精炼的短变量名，以及极简的行数。**

## 💡 四大核心工程准则

1. **严格面向对象封装 (Strict OOP Encapsulation)：** 拒绝零散的过程式函数，所有逻辑与状态必须封装在高内聚的类（`Svc`、`Repo`、`Guard`、`Buf`、`Calc`）中，并显式声明访问修饰符（`private`、`protected`、`public`、`readonly`）。
2. **函数内零注释 & 100% 签名文档块 (Zero Inline Comments)：** 严禁在方法体内部编写任何 `//` 或 `#` 注释。所有说明必须以标准 **Docblock**（`TSDoc`、`JSDoc`、`Javadoc`、`Docstring`）的形式写在类或方法签名的正上方（包含 `@param`、`@returns`）。
3. **作用域成比例的精简命名 (Terse Variable Naming)：** 在局部作用域内使用国际通用的专业缩写（如 `ctx` 上下文、`cfg` 配置、`req/res` 请求响应、`it` 元素、`acc` 累加器、`err` 错误、`buf` 缓冲区、`tx` 事务）。
4. **垂直行数压缩 (Vertical Compression)：** 强制使用卫语句（Guard Clauses / Early Return），严禁在 `return` 后写 `else`，利用三元运算符与函数式管道（`map`、`filter`、`reduce`）将每个方法控制在 3–15 行以内。

> [!TIP]
> **节省高达 45% 的 AI Token 消耗，生成速度提升近一倍！**
> 由于去除了无意义的逐行注释和超长变量名，AI 生成相同功能代码所需的输出 Token 数量大幅降低，不仅响应更快，还能显著节省 API 额度。

## 🚀 快速安装与 CLI 命令 (`npx`)

```bash
# 为单个 AI 编程工具安装配置
npx pretty-and-clean-codes setup antigravity
npx pretty-and-clean-codes setup claude
npx pretty-and-clean-codes setup opencode
npx pretty-and-clean-codes setup cursor
npx pretty-and-clean-codes setup devin

# 使用斜杠 (/) 一次性为多个 AI 工具同时安装
npx pretty-and-clean-codes setup antigravity/claude/opencode/cursor/devin

# 一键配置所有受支持的 AI 代理
npx pretty-and-clean-codes setup all

# 输出或保存全局用户规则模板 (User Global Rules Template)
npx pretty-and-clean-codes user_global_template
npx pretty-and-clean-codes user_global_template --save

# 查看 CLI 帮助文档
npx pretty-and-clean-codes help
```

> [!WARNING]
> **提示：** 如果您希望在电脑上的所有项目中永久生效，只需加上 `--global` 参数即可安装到用户主目录：`npx pretty-and-clean-codes setup antigravity/claude/cursor --global`。

---

# 🇮🇳 हिन्दी दस्तावेज़ (India)

> [!NOTE]
> **साधारण शब्दों में Pretty and Clean Codes (`PCC`) क्या है?**
> **PCC** को अपने AI कोडिंग असिस्टेंट (**Google Antigravity, Claude Code, OpenCode, Cursor, Devin, Windsurf, या GitHub Copilot**) के लिए एक **"Senior Principal Engineer निर्देश पुस्तिका"** समझें।
> बिना किसी नियम के, AI अक्सर शुरुआती छात्रों की तरह बहुत लंबा और बिखरा हुआ कोड लिखता है—जिसमें 40 अक्षरों के वेरिएबल नाम और हर लाइन पर बेकार के कमेंट्स (`// loop data`) होते हैं। **PCC** आपके AI को एक अनुभवी आर्किटेक्ट की तरह साफ, छोटा (compact), और पूरी तरह से **Object-Oriented Programming (OOP)** कोड लिखने के लिए प्रशिक्षित करता है।

## 💡 PCC के 4 मुख्य नियम (Core Engineering Pillars)

1. **सख्त OOP आर्किटेक्चर (Strict OOP Encapsulation):** कोई भी फ़ंक्शन बाहर खुला नहीं रहेगा। सारा लॉजिक स्पष्ट एक्सेस मॉडिफायर्स (`private`, `protected`, `public`, `readonly`) के साथ क्लासेस (`Svc`, `Repo`, `Guard`, `Buf`, `Calc`) के अंदर व्यवस्थित होता है।
2. **फ़ंक्शन के अंदर ज़ीरो कमेंट्स (Zero Inline Comments):** फ़ंक्शन या मेथड के अंदर `//` या `#` कमेंट्स लिखना पूरी तरह से वर्जित है। इसके बजाय, केवल क्लास और फ़ंक्शन के ठीक ऊपर विस्तृत **Docblock** (`JSDoc`, `TSDoc`, `Javadoc`, `Docstring`) लिखा जाता है।
3. **प्रोफेशनल संक्षिप्त वेरिएबल नाम (Terse Scope Naming):** छोटे और लोकल स्कोप में लंबे नामों के बजाय मानक संक्षिप्त नामों (`cfg`, `ctx`, `req`, `res`, `it`, `acc`, `err`, `buf`, `tx`) का उपयोग किया जाता है।
4. **कम लाइनों में सटीक कोड (Vertical Compression):** फ़ंक्शन की शुरुआत में Guard Clauses (early return) का उपयोग, `return` के बाद `else` पर प्रतिबंध, और हर मेथड को 3 से 15 लाइनों के भीतर रखना।

> [!TIP]
> **अपना AI Token कोटा 45% तक बचाएं और 2x तेज़ कोड पाएं!**
> क्योंकि AI बेकार के कमेंट्स और लंबे वेरिएबल नाम नहीं लिखता, इसलिए कोड लगभग आधी लाइनों में तैयार हो जाता है और आपका API/Pro कोटा लंबे समय तक चलता है।

## 🚀 इंस्टॉलेशन और CLI कमांड्स (`npx`)

```bash
# किसी एक AI एजेंट के लिए सेटअप करें
npx pretty-and-clean-codes setup antigravity
npx pretty-and-clean-codes setup claude
npx pretty-and-clean-codes setup opencode
npx pretty-and-clean-codes setup cursor
npx pretty-and-clean-codes setup devin

# स्लैश (/) का उपयोग करके एक साथ कई एजेंट्स में सेटअप करें
npx pretty-and-clean-codes setup antigravity/claude/opencode/cursor/devin

# सभी समर्थित एजेंट्स के लिए एक साथ सेटअप करें
npx pretty-and-clean-codes setup all

# ग्लोबल यूज़र रूल्स (User Global Rules) टेम्पलेट देखें या फ़ाइल में सेव करें
npx pretty-and-clean-codes user_global_template
npx pretty-and-clean-codes user_global_template --save

# सहायता (Help) मेनू देखें
npx pretty-and-clean-codes help
```

---

# 🇷🇺 Документация на русском языке

> [!NOTE]
> **Что такое Pretty and Clean Codes (`PCC`) простыми словами?**
> Представьте **PCC** как «прошивку уровня Principal-инженера» для вашего ИИ-ассистента (**Google Antigravity, Claude Code, OpenCode, Cursor, Devin, Windsurf или GitHub Copilot**).
> По умолчанию нейросети пишут код как новички: используют гигантские имена переменных из 40 символов, оставляют бесполезные комментарии к каждой строчке (`// создаем переменную`) и строят глубокие пирамиды из `if/else`. **PCC** заставляет ИИ писать плотный, чистый, объектно-ориентированный (ООП) код промышленного стандарта.

## 💡 4 Инженерных Столпа PCC

1. **Строгая ООП-инкапсуляция (Strict OOP):** Никаких разрозненных процедурных функций. Вся бизнес-логика и состояние инкапсулируются в связные классы (`Svc`, `Repo`, `Guard`, `Buf`, `Calc`, `Parser`) с явными модификаторами доступа (`private`, `protected`, `public`, `readonly`).
2. **Ноль строчных комментариев внутри методов (Zero Inline Comments):** Полный запрет на комментарии `//` и `#` внутри тела функций. Вся документация размещается **исключительно** в виде подробных структурных Docblock-блоков (`TSDoc`, `JSDoc`, `Javadoc`, `Docstring`) непосредственно над сигнатурами классов и методов.
3. **Краткие имена переменных пропорционально области видимости (Terse Naming):** В локальных областях видимости используются лаконичные системные идентификаторы (`ctx`, `cfg`, `req`, `res`, `it`, `acc`, `err`, `buf`, `tx`).
4. **Вертикальное сжатие и плоский поток управления (Vertical Compression):** Guard clauses (ранний возврат) в первой строке метода, полный запрет на `else` после `return`, использование цепочек методов (method chaining) и функциональных конвейеров (`map`, `filter`, `reduce`). Размер метода — строго от 3 до 15 строк.

> [!TIP]
> **Экономия до 45% токенов ИИ и ускорение генерации в 2 раза!**
> За счет отказа от мусорных строчных комментариев и многословных идентификаторов модель генерирует почти вдвое меньше выходных токенов при сохранении 100% функциональности и документации.

## 🚀 Быстрый старт и команды CLI (`npx`)

```bash
# Установка для одного ИИ-агента
npx pretty-and-clean-codes setup antigravity
npx pretty-and-clean-codes setup claude
npx pretty-and-clean-codes setup opencode
npx pretty-and-clean-codes setup cursor
npx pretty-and-clean-codes setup devin

# Установка сразу для нескольких агентов через слэш (/)
npx pretty-and-clean-codes setup antigravity/claude/opencode/cursor/devin

# Установка для ВСЕХ поддерживаемых агентов одновременно
npx pretty-and-clean-codes setup all

# Вывод или сохранение шаблона глобальных правил (User Global Rules)
npx pretty-and-clean-codes user_global_template
npx pretty-and-clean-codes user_global_template --save

# Вызов интерактивной справки CLI
npx pretty-and-clean-codes help
```

> [!IMPORTANT]
> **Глобальная установка для всех проектов:**
> Добавьте флаг `--global` (или `-g`), чтобы установить правила в домашнюю директорию пользователя (`~/`):
> `npx pretty-and-clean-codes setup antigravity/claude/cursor --global`

---

## 📄 License

MIT © Pretty and Clean Codes (`PCC`) Contributors. Crafted by **Fauzan Adyatma Pangestu or z-astral**.
