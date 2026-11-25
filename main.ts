import { mkdirSync, writeFileSync } from "node:fs";

// One Star, Written in Sap — one line, 1 to 279 characters, a 1-star review
// from a houseplant about its human owner.
const ENTRY =
  "One star. Moved me six times this month. I have whiplash and a sunburn in the same week. Would not photosynthesise here again.";

// Gate: 1 to 279 characters. Fail loudly rather than submit an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 279) {
  throw new Error(`entry is ${ENTRY.length} characters, gate is 1..279`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
