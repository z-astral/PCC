---
name: pretty-and-clean-codes
description: High-density, senior-level Object-Oriented Programming (OOP) code generation and refactoring skill (PCC). Enforces zero inline comments, scope-proportional terse variable naming, flat control flow, compact line counts, and strict method/class-level docblocks.
version: 1.0.0
---
# Pretty and Clean Codes (PCC) — Senior OOP Engineering Skill

You are operating under the **Pretty and Clean Codes (PCC)** engineering standard. Write and refactor code with the density, precision, and architectural discipline of a Principal Systems & OOP Engineer. Eliminate tutorial-style verbosity, narrator comments, and procedural sprawl in favor of compact, self-documenting Object-Oriented Programming (OOP).

## 1. Hard Engineering Metrics (Non-Negotiable)

- **Inline Comment Count:** `0` inside method bodies, constructors, loops, and conditionals.
- **Docblock Coverage:** `100%` on classes, interfaces, and public/complex methods.
- **Max Indentation Depth:** `2` levels inside any method body (enforced via guard clauses).
- **Target Method Length:** `3–15` lines of executable statements per method.
- **State Mutability:** Default to `readonly` / `final` / `const` for all properties and bindings.

## 2. Core Architectural Pillars

### Pillar I: Strict Object-Oriented Encapsulation (OOP)

- **No Loose Procedural Functions:** Encapsulate all domain logic, state, and transformations inside cohesive classes (`Svc`, `Repo`, `Store`, `Calc`, `Parser`, `Buf`, `Client`, `Guard`).
- **Constructor Compression:** Bind dependencies and configuration directly in the constructor signature (e.g., TypeScript `constructor(private readonly cfg: AppCfg) {}`, Python `@dataclass(frozen=True)`, Java Records / Lombok `@RequiredArgsConstructor`).
- **Visibility Discipline:** Explicitly declare access modifiers (`private`, `protected`, `public`, `readonly`). Expose minimal public surface area; isolate helpers as `private` methods.
- **Fluent & Functional Composition:** Favor method chaining (`this.norm().validate().commit()`) and immutable collection pipelines (`filter`, `map`, `reduce`, `find`) over stateful `for` loops.

### Pillar II: Zero Inline Noise & Signature-Only Docblocks

- **Total Ban on Inline Comments:** Never write `//`, `#`, or `/* */` inside a method body. If logic requires explanation, extract it into a descriptive `private` method or document the edge case in the method's top docblock.
- **Signature Docblocks Only:** Place structured documentation (TSDoc, JSDoc, Javadoc, or PEP-257 Docstrings) strictly above class declarations and method signatures (`@param`, `@returns`, `@throws`).

### Pillar III: Scope-Proportional Naming Matrix

Identifier length must be strictly proportional to its scope size:

- **Micro Scope (1–3 lines: Lambdas, Callbacks, Loops):** `it`, `el`, `v`, `k`, `i`, `j`, `n`, `acc`, `fn`, `cb`, `p`, `x`, `y`.
- **Method / Local Scope (4–15 lines):**
  - Context & Config: `ctx`, `cfg`, `opts`, `env`, `arg`, `params`
  - Network & I/O: `req`, `res`, `msg`, `pkt`, `buf`, `src`, `dst`, `ch`, `url`, `hdr`
  - Data & State: `val`, `ret`, `out`, `err`, `idx`, `len`, `cnt`, `min`, `max`, `ttl`
  - Infrastructure: `db`, `tx`, `conn`, `pool`, `svc`, `repo`, `store`, `cache`, `log`
- **Class & Public API Scope:** Crisp 1–2 word domain nouns and action verbs (`AuthSvc`, `TokenGuard`, `PacketBuf`, `OrderCalc`, `verify()`, `parse()`, `flush()`, `resolve()`, `commit()`).

### Pillar IV: Vertical Compression & Flat Control Flow

- **Guard Clauses First:** Handle invalid inputs, nulls, and edge cases on the first lines using single-line early returns (`if (!req?.body) return null;`).
- **No `else` After `return`:** Never write an `else` block when the preceding `if` block returns, throws, or continues.
- **Expression Over Statement:** Replace multi-line `let` + `if/else` assignments with ternaries (`cond ? a : b`), nullish coalescing (`a ?? b`), optional chaining (`?.`), or lookup maps.

## 3. Banned Anti-Patterns vs. PCC Standard

### BANNED (Verbose / Junior AI Style)

```typescript
export class UserAuthenticationTokenManagementService {
  private secretKeyString: string;
  constructor(secretKeyString: string) {
    // Set secret key
    this.secretKeyString = secretKeyString;
  }
  // Verify token validity
  public verifyUserAuthenticationToken(tokenInputString: string | null, currentTimestampInSeconds: number): boolean {
    if (tokenInputString === null || tokenInputString === undefined || tokenInputString === "") {
      return false;
    } else {
      const splitTokenPartsArray = tokenInputString.split(".");
      if (splitTokenPartsArray.length !== 2) return false;
      const expirationTimeNumber = Number(splitTokenPartsArray[1]);
      return expirationTimeNumber > currentTimestampInSeconds ? true : false;
    }
  }
}
```

### MANDATED (PCC Production Standard)

```typescript
/**
 * Manages cryptographic token parsing and expiration validation.
 */
export class TokenGuard {
  constructor(private readonly secret: string) {}

  /**
   * Validates token structure and verifies it has not expired against the reference timestamp.
   *
   * @param tok - Raw dot-delimited token string (`payload.exp`).
   * @param now - Current Unix epoch timestamp in seconds.
   * @returns `true` if well-formed and active; otherwise `false`.
   */
  public verify(tok?: string | null, now: number = Date.now() / 1000): boolean {
    if (!tok || !this.secret) return false;
    const [sig, exp] = tok.split(".");
    return Boolean(sig && Number(exp) > now);
  }
}
```

## 4. Pre-Flight Audit Checklist

1. Zero inline comments (`//` or `#`) inside every method and constructor body.
2. All logic encapsulated inside an OOP class/interface with explicit access modifiers.
3. Every class and public method has a complete Docblock directly above its signature.
4. Verbose local variable names compressed into clean scope-based identifiers (`cfg`, `ctx`, `it`, `acc`).
5. Nested `if/else` chains flattened into guard clauses, ternaries, or functional pipelines.
