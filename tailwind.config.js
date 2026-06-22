/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1a1a2e",
          950: "#0f0f1a",
          900: "#15151f",
          800: "#1a1a2e",
          700: "#23233c",
          600: "#2d2d4d",
        },
        royal: {
          DEFAULT: "#0f3460",
          700: "#0c2a4e",
          600: "#0f3460",
          500: "#16498a",
          400: "#1f63b8",
        },
        azure: { DEFAULT: "#2f7bed", 400: "#5b97f0" },
        accent: {
          DEFAULT: "#e94560",
          700: "#cf2f49",
          600: "#e94560",
          500: "#ef6079",
          100: "#fde4e9",
        },
        ink: "#15152b",
        muted: "#5a6076",
        surface: "#f5f7fb",
        line: "#e6eaf3",
      },
      fontFamily: {
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: { content: "1180px" },
      letterSpacing: { eyebrow: "0.16em" },
      boxShadow: {
        card: "0 1px 2px rgba(20,20,43,0.05), 0 14px 36px -18px rgba(15,52,96,0.20)",
        lift: "0 28px 70px -28px rgba(15,52,96,0.50)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.21,0.7,0.25,1) both",
        "fade-in": "fade-in 0.9s ease both",
      },
    },
  },
  plugins: [],
};
