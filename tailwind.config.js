/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFCA4A',
        secondary: '#034DA1'
      },
      fontFamily: {
        montserrat: '--font-montserrat',
        sourceSansPro: '--font-sourceSansPro'
      }
    },
  },
  plugins: [],
}
