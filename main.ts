// Entry program for news-image-20261121: copies the pre-drawn summary
// image (1024x1024 PNG, the world's news of Saturday 21 November 2026)
// to /output/entry.png. No network, deterministic: same bytes every run.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
