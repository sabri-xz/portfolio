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
        "th-midground1": "var(--midground-color1)",
        "th-midground2": "var(--midground-color2)",
        "th-background": "var(--background-color)",
        "th-secondary": "var(--secondary-color)",
        "th-tertiary": "var(--tertiary-color)",
        "th-art1": "var(--art-color1)",
        "th-art2": "var(--art-color2)",
        "th-art3": "var(--art-color3)",
      },
      screens: {
        "sm": { min: "300px", max: "600px" },
        "md": { min: "600px" },
      },
      scale: {
        '25': '0.25',
        '5': '0.05',
        '4': '0.04',
        '3.5': '0.035',
      }
    },
  },
  plugins: [],
};
export default config;
