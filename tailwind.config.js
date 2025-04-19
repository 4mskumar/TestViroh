/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", 'sans-serif'],
        dm: ["DM Serif Text", 'serif']
      },
      colors: {
        mustard: '#F4A83F',
        navy: '#2E3653',
        crimson: '#DC4448',

      }
    },
  },
  plugins: [],
}