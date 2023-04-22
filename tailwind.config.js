/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'primary': '#5A247B',
      'secondary': '#A875C7',
      'full-black':'#000000',
      'black':'#252028',
      'black-75':'rgba(37,32,40, 0.75)',
      'black-50':'rgba(37,32,40, 0.5)',
      'black-25':'rgba(37,32,40, 0.25)',
      'black-10':'rgba(37,32,40, 0.1)',
      'error':'#AD5043',
      'white':'rgba(255,255,255, 1)',
      'white-80':'rgba(255,255,255, 0.80)',
      'yellow':'#FFCF25',
    },
    extend: {
      screens:{
        'xs': '375px',
      },
    },
  },
  plugins: [],
}