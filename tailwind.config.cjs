/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main': 'var(--main)',
        'toggleBg': 'var(--toggleBg)',
        'screen': 'var(--screen)',
        'key': 'var(--key)',
        'keySh': 'var(--keySh)',
        'keySec': 'var(--keySec)',
        'keySecSh': 'var(--keySecSh)',
        'toggle': 'var(--toggle)',
        'toggleSh': 'var(--toggleSh)',
        'txtColor': 'var(--txtColor)',
        'txtColorSec': 'var(--txtColorSec)',
        'txtWhite': 'var(--txtWhite)'
      },
      screens: {
        xl: '1440px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
