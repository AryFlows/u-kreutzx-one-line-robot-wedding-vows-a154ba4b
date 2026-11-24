import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Line Robot Wedding Vows — u-kreutzx-one-line-robot-wedding-vows-a154ba4b
// The vow: a wedding promise in the classic "to have and to hold" shape,
// with the machine side carried by the last clause — the firmware update
// is the thing that parts this couple, not death.
// Verified length: 137 characters, comfortably inside the 1-160 gate,
// so the payoff lands in the final words without padding.
const VOW =
  "I take you as my lawfully wedded co-processor, to have and to hold in full charge and in low battery, until a firmware update do us part.";

// Gate (RULES.txt): entry.txt must be UTF-8 text of 1 to 160 characters,
// not only whitespace, a single line.
function validate(text: string): void {
  if (text.length < 1 || text.length > 160) {
    throw new Error(`vow must be 1-160 characters, got ${text.length}`);
  }
  if (!text.trim()) {
    throw new Error("vow must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("vow must be a single line");
  }
}

function main(): void {
  validate(VOW);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), VOW, "utf8");
  console.log(`wrote ${VOW.length} characters to entry.txt`);
}

main();
