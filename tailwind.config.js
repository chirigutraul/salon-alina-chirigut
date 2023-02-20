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
        'light-pink': 'rgba(244, 238, 255, 1.0)',
        'light-pink-hover':'rgba(232, 220, 255, 1.0)',
        'medium-purple': 'rgba(166, 177, 225, 1.0)',
        'medium-purple-2': 'rgba(147, 157, 199, 1.0)',
        'dark-purple': 'rgba(58, 54, 101, 1.0)'
      },
      screens:{
        'xs': '375px',
      }
    },
  },
  plugins: [],
}