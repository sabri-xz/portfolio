import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "gallery": "repeat(auto-fit, minmax(250px, 1fr))",
      },
      colors: {
        "th-foreground": "var(--foreground-color)",
        "th-background": "var(--background-color)",
        "th-secodary": "var(--secondary-color)",
        "th-tertiary": "var(--tertiary-color)",
      },
    },
  },
  plugins: [],
};
export default config;
