import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        pinyon: ["Pinyon Script", "cursive"],
        indie: ["Indie Flower", "serif"],
        permanent : ["Permanent Marker","serif"],
        merri : ["Merriweather","serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
