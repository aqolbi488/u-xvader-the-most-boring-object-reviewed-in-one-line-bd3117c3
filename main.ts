import { mkdirSync, writeFileSync } from "node:fs";

// One-line review of the most boring everyday object we could name:
// the doorstop. Its whole existence is holding one door still, day after
// day, with no recognition at all — and that thanklessness is the joke.
// Revision: sharper three-beat ending (thanked, promoted, noticed) so the
// last words land the dullness instead of trailing off.
const ENTRY =
  "The doorstop has held the same door open for ten years and still hasn't been thanked, promoted, or even noticed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
