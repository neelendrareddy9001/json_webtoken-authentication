/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      'xl' : {'max': '1279px'},
      'lg' : {'max': '1024px'},
      'md' : {'max': '767px'},
      'sm' : {'max': '639px'}
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

