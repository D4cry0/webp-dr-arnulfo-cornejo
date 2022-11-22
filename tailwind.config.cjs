/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  theme: {
    extend: {
      fontFamily: {
        'julius-sans-one': ['"Julius Sans One"', 'sans-serif'],
        'archivo': ['Archivo', 'serif'],
        'archivo-narrow': ['"Archivo Narrow"', 'serif'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
