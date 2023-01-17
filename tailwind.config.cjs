/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': 'hsl(25 97% 53%)',
        'light-grey': 'hsla(217 12% 63% / .055)',
        'medium-grey': 'hsl(216 12% 54%)',
        'dark-blue': 'hsl(213 19% 18%)',
        'very-dark-blue': 'hsl(216 12% 8%)'
      },
      fontFamily: {
        'font': '"Overpass", sans-serif'
      },
      size: {
        '330': '33rem',
      },
      borderRadius: {
        'md': '2rem',
      }
    },
  },
  plugins: [],
}