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
  },
});
