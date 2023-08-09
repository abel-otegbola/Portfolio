/** @type {import('tailwindcss').Config} */
module.exports = {
  darkmode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "rgb(23, 25, 29)",
        primary: "rgb(92, 43, 190)"
      }
    }
    
  },
  plugins: [],
}