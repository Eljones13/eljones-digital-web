import "./index.css";
import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App";

// vite-react-ssg uses this exported createRoot for both client hydration and
// build-time static generation of every route in `routes`.
export const createRoot = ViteReactSSG({ routes, basename: "/" });
