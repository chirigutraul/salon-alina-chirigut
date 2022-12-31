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
        'light-pink': '#F4EEFF',
        'light-pink-hover':'#E8DCFF',
        'medium-purple': '#A6B1E1',
        'medium-purple-2': '#939dc7',
        'dark-purple': '#3A3665'
      },
    },
  },
  plugins: [],
}