
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        Cinzel:['Cinzel', 'serif'],
        Vollkorn:["Vollkorn", 'serif'],
        Agdasima:["Agdasima", "sans-serif"],
        Ruwudu:[  "Ruwudu", 'serif'],

      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... } tablet

      'md': '768px',
      // => @media (min-width: 1024px) { ... } laptop

      'lg': '1024px',
      // => @media (min-width: 1280px) { ... } desktop

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... } large screen
    },
  },
  plugins: [],
}