// Generates public/og-image.png (1200x630) for social + AI preview cards.
// Run: node scripts/gen-og-image.mjs
// Raster (PNG/JPG) is required by Facebook, LinkedIn, X, ChatGPT, Perplexity
// and Google AI Overviews — an SVG og:image renders no preview thumbnail.
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "public", "og-image.png");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1a1a2e"/>
      <stop offset="1" stop-color="#15151f"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <path d="M0 520 C240 470 400 610 640 520 C830 448 980 360 1200 420 L1200 630 L0 630 Z" fill="#0f3460" opacity="0.85"/>
  <circle cx="1020" cy="150" r="230" fill="#e94560" opacity="0.22"/>
  <rect x="90" y="150" width="84" height="10" rx="5" fill="#e94560"/>
  <text x="90" y="133" fill="#5b97f0" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="700" letter-spacing="3">SEO + GEO AUDIT AGENCY</text>
  <text x="86" y="272" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="92" font-weight="800">Eljones Digital</text>
  <text x="90" y="362" fill="#e6eaf3" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="600">AI-Powered SEO &amp; GEO Audits — 0–100 Score</text>
  <rect x="90" y="432" width="300" height="74" rx="10" fill="#e94560"/>
  <text x="118" y="480" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="700">eljonesdigital.com</text>
</svg>`;

const info = await sharp(Buffer.from(svg), { density: 144 })
  .resize(1200, 630)
  .png({ compressionLevel: 9 })
  .toFile(out);

console.log(`Wrote ${out} (${info.width}x${info.height}, ${(info.size / 1024).toFixed(1)} KB)`);
