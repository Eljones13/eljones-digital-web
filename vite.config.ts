import { existsSync, copyFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Static-site build. vite-react-ssg crawls the React Router tree and prerenders
// every route to its own static index.html at build time — head tags + JSON-LD
// are baked into the initial HTML response (critical for SEO + AI/GEO crawlers
// that do not execute JavaScript). No server runtime, deploys to Apache static.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  ssgOptions: {
    entry: "src/main.tsx",
    dirStyle: "nested", // /services -> dist/services/index.html (clean URLs)
    formatting: "none",
    // The "/404" route is prerendered (via includedRoutes in main.tsx) to
    // dist/404/index.html. Apache's ErrorDocument needs a top-level 404.html,
    // so promote it and drop the now-redundant directory.
    onFinished() {
      const out = join(process.cwd(), "dist");
      const nested = join(out, "404", "index.html");
      if (existsSync(nested)) {
        copyFileSync(nested, join(out, "404.html"));
        rmSync(join(out, "404"), { recursive: true, force: true });
      }
    },
  },
});
