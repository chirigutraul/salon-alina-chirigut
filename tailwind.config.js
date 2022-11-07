/** @type {import('tailwindcss').Config} */
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
        'medium-purple': '#A6B1E1',
        'dark-purple': '#3A3665'
      },
    },
  },
  plugins: [],
}