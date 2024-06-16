/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    
    extend: {
      container: {
        padding : {
          DEFAULT: '1rem',
          small : '2rem',
          medium: '3.5rem',
          large: '4rem'
        }
      }
    },
  },
  plugins: [],
}

