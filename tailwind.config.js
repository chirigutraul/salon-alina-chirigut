/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fbcfe8',
        'primary-hover':'rgba(232, 220, 255, 1.0)',
        'secondary': '#c4b5fd',
        'secondary-2': 'rgba(147, 157, 199, 1.0)',
        'accent': '#1e1b4b'
      },
      screens:{
        'xs': '375px',
      }
    },
  },
  plugins: [],
}