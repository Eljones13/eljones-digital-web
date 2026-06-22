import "./index.css";
import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App";

// vite-react-ssg uses this exported createRoot for both client hydration and
// build-time static generation of every route in `routes`.
export const createRoot = ViteReactSSG({ routes, basename: "/" });

// The wildcard "*" route is stripped by vite-react-ssg's default route filter,
// so it would never be prerendered. We add an explicit "/404" path here: it
// matches the catch-all and renders NotFoundPage to a static file. The build's
// onFinished hook (vite.config.ts) then moves 404/index.html -> 404.html so
// Apache's `ErrorDocument 404 /404.html` can serve it with a real 404 status.
export function includedRoutes(paths: string[]): string[] {
  return Array.from(new Set([...paths, "/404"]));
}
