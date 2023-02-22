/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
        primary: 'var(--font-montserrat)',
        secondary: 'var(--font-source-sans-pro)'
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translate(0,  0px)' },
          '50%': { transform: 'translate(0, 15px)' }
        }
      },
      animation: {
        float: 'floating 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
