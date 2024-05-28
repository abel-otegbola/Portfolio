/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#101014",
        primary: "rgb(92, 43, 190)"
      },
      backgroundImage: {
        'hero-img': "linear-gradient(to right bottom, rgba('#000', 0.7), rgba('#000', 0.6), url('/bg2.PNG'))"
      }
    }
    
  },
  plugins: [],
}