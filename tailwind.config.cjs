/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#c9cacc',
        blue: {
          light: '#005782',
          DEFAULT: '#1c2e4a',
          dark: '#152238'
        },
        lightgray: '#d3d3d3',
        black: '#000000',
      },
    },
  },
  plugins: [],
}