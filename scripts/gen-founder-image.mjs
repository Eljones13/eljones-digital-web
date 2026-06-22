// Compresses public/errol-jones-founder.png -> public/errol-jones-founder.webp.
// Run: node scripts/gen-founder-image.mjs
// The source PNG is 655 KB and is the LCP element on /about. WebP at native
// resolution keeps it crisp on retina while landing well under the 80 KB target.
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { statSync } from "node:fs";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "public", "errol-jones-founder.png");
const out = join(root, "public", "errol-jones-founder.webp");
const MAX_BYTES = 80 * 1024;

// Step quality down until we are comfortably under the 80 KB budget.
let quality = 82;
let size = Infinity;
for (; quality >= 60; quality -= 4) {
  const info = await sharp(src).webp({ quality, effort: 6 }).toFile(out);
  size = info.size;
  if (size <= MAX_BYTES) break;
}

const srcKb = (statSync(src).size / 1024).toFixed(1);
console.log(`Wrote ${out} q=${quality} ${(size / 1024).toFixed(1)} KB (from ${srcKb} KB PNG)`);
if (size > MAX_BYTES) {
  console.error("WARNING: still over 80 KB budget");
  process.exit(1);
}
