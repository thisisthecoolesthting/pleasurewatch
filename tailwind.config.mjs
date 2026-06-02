import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svelte,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FAFAF9",
          100: "#FAFAFA",
          200: "#EDE9FE",
        },
        terracotta: {
          400: "#F472B6",
          500: "#18181B",
          600: "#DB2777",
        },
        primary: { DEFAULT: "#18181B" },
        accent: { DEFAULT: "#EC4899" },
        sage: { 400: "#8FA888", 500: "#6F8B6A", 600: "#566F52" },
        rose: { deep: "#09090B" },
        ink: {
          900: "#09090B",
          700: "#4A4340",
          500: "#6E6863",
        },
      },
      maxWidth: {
        prose: "68ch",
      },
      typography: {
        DEFAULT: { css: { maxWidth: "68ch" } },
        ink: { css: { color: "#4A4340" } },
      },
      fontFamily: {
        display: ["Libre Bodoni", "Georgia", "serif"],
        sans: ["Public Sans", "system-ui", "sans-serif"],
        body: ["Public Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [typography],
};
