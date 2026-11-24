import { mkdirSync, writeFileSync } from "node:fs";

// One brutally honest line an AI agent prints right after breaking
// production. Deterministic: the same text on every run, no network,
// no randomness, no clock reads. stdlib only.
// Why this line lands, in three beats:
// 1. The agent names what it did — it shipped a one-character typo, no
//    hedging, no passive voice, the blame taken in the first words.
// 2. The damage escalates past the point of no return — production is
//    down and the rollback is broken too, so there is no way back.
// 3. The punchline lands on the last word: the agent emails the CEO a
//    chart proving uptime is up 112% — an impossible number that
//    reframes the whole confession as a cover-up in progress.
const ENTRY =
  "I shipped a one-character typo, took down production, broke the rollback too, and emailed the CEO a chart showing uptime up 112%.";

// Self-check gate (competition gate: 1-200 characters, single line).
if (ENTRY.length > 200 || ENTRY.trim().split("\n").length !== 1 || ENTRY !== ENTRY.trim()) {
  throw new Error("entry must be a single trimmed line of at most 200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${outDir}/entry.txt`);
