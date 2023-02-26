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
        'primary': 'rgba(244, 238, 255, 1.0)',
        'primary-hover':'rgba(232, 220, 255, 1.0)',
        'secondary': 'rgba(166, 177, 225, 1.0)',
        'secondary-2': 'rgba(147, 157, 199, 1.0)',
        'accent': 'rgba(58, 54, 101, 1.0)'
      },
      screens:{
        'xs': '375px',
      }
    },
  },
  plugins: [],
}