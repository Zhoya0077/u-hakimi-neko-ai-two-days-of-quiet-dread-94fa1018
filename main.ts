// Two Days of Quiet Dread — make.fun entry.
// Writes one code review comment to /output/entry.txt: a single line
// that approves a pull request while carrying quiet existential dread.
// Runs on Node 22 (erasable TypeScript), node:fs only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Approved. I read every line, understood none of it, and trust it completely.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file holds exactly the comment, nothing else.
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
