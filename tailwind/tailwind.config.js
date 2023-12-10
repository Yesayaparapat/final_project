/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'backgrouond1': "url('/public/img/foto-homepage-01.jpg')",
        'background2' : "url('/public/img/annual-bg (1).jpg')",
      },
      colors: {
        projec: {
         abuabu: '#4D4D4D',
         coklat: '#B99972',
         blubluk:'#ECE3D8',
         abutua: '#E6E6E6',
        },
      },
      fontFamily: {
        'halva': ['Helvetica Neue','Open Sans', 'Arial', 'sans-serif'],
      },
      dropShadow: {
        'baru': '1px 1px 2px #FFF',
      },
    },
  },
  plugins: [],
}