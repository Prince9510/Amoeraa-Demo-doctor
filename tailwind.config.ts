import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#F0F7F6",
          100: "#DCEFEA",
          200: "#B9DFD7",
          300: "#8FC8BC",
          400: "#4D9A8D",
          500: "#0F5C5E", // Primary Deep Medical Teal
          600: "#0D4F51",
          700: "#0A3F41",
          800: "#072E30",
          900: "#051F20",
        },
        sage: {
          50: "#F5F8F7",
          100: "#E6EFEA",
          200: "#CCE0D9",
          300: "#A8C8C0", // Secondary Soft Sage
          400: "#84ABA3",
          500: "#608D86",
          600: "#466F68",
          700: "#32504B",
          800: "#203431",
          900: "#111B19",
        },
        slate: {
          50: "#F6F8F8",
          100: "#EBEEF0",
          200: "#D4DBDE",
          300: "#A7B6BC",
          400: "#637477", // Secondary Muted Slate
          500: "#3F5053",
          600: "#2A3A3D",
          700: "#1E2B2E",
          800: "#173337", // Primary Deep Slate Text
          900: "#0D1E20",
        },
        warm: {
          bg: "#F8FAF9", // Warm Medical White
          surface: "#FFFFFF", // Pure White
          accent: "#D6A77A", // Optional warm accent (sparingly)
          mint: "#DCEFEA", // Very subtle mint
          card: "#F4F7F5",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "DM Serif Display", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Manrope", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "DM Mono", "monospace"],
      },
      boxShadow: {
        subtle: "0 2px 8px -2px rgba(15, 92, 94, 0.05), 0 1px 4px -1px rgba(15, 92, 94, 0.03)",
        soft: "0 10px 30px -5px rgba(23, 51, 55, 0.06), 0 4px 12px -2px rgba(23, 51, 55, 0.03)",
        floating: "0 20px 40px -10px rgba(15, 92, 94, 0.08), 0 8px 16px -4px rgba(23, 51, 55, 0.04)",
        card: "0 4px 20px -2px rgba(15, 92, 94, 0.04)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
