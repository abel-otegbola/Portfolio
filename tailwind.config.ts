import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        "primary": "#6a6aca",
        "secondary": "#FFEA95",
        "dark": "#3e3746",
        "black": "#181818"
      },
      boxShadow: {
        "input-active" : "0px 0px 12px 0px #633CFF40"
      },
    },
  },
  plugins: [],
};
export default config;
