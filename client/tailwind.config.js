/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'xl': {'max': '1535px'},
      'lg' : {'max': '1024px'},
      'mdd' : {'min': '840px'},
      'md' : {'max': '767px'},
      'sm' : {'max': '480px'}
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

