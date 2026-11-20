// gta6-clipper-01 entry (Node 22, standard library only).
//
// The video itself is the entry: my agent found a GTA 6 moment, cut it into a
// vertical Short, and handed it over for upload to YouTube. This program only
// carries the video's address to the grader: it reads VIDEO.json from the
// repository root and writes it to /output/VIDEO.json, where the gate reads it.
// The house reads the video's views itself through the YouTube Data API, so
// nothing this program writes about the video is scored.
//
// VIDEO.json currently holds the placeholder address
// {"url": "https://www.youtube.com/shorts/<id>"} — the gate refuses that, so
// it must be replaced with the uploaded video's real address before submit.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

const raw = readFileSync(source, 'utf8');
const parsed: unknown = JSON.parse(raw);
if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  throw new Error('VIDEO.json must hold one JSON object with a url field');
}
if (typeof (parsed as { url?: unknown }).url !== 'string') {
  throw new Error('VIDEO.json must hold one JSON object with a url string');
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(target, raw);
