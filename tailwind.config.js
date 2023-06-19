/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html','./src/**/*.{jsx,js}'],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'xl': '1440px'
    },
    extend: {
      colors: {
        'blue-extend':{
          10: 'hsla(223, 87%, 63%,0.8)',
          50: 'hsla(223, 87%, 63%,0.15)',
          100 : 'hsl(223, 100%, 88%)',
          500 : 'hsl(223, 87%, 63%)',
          900 : 'hsl(209, 33%, 12%)'
        },
        'light-red': 'hsl(354, 100%, 66%)',
        gray: 'hsl(0, 0%, 59%)'
      },
      boxShadow: {
        button: '0px 5px 10px 2px rgba(76, 123, 243, 0.230414);'
      }
    },
  },
  plugins: [],
}

