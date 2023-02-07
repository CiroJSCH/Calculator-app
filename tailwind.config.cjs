/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // THEME 1
        'T1-main': 'hsl(225, 21%, 49%)',
        'T1-toggle': 'hsl(224, 28%, 35%)',
        'T1-screen': 'hsl(222, 26%, 31%)',
        'T1-keyF': 'hsl(223, 31%, 20%)',
        'T1-keyFSh': 'hsl(224, 36%, 15%)',
        'T1-key': 'hsl(30, 25%, 89%)',
        'T1-keySh': 'hsl(28, 16%, 65%)',
        'T1-toggle': 'hsl(6, 63%, 50%)',
        'T1-toggleSh': 'hsl(6, 70%, 34%)',
        'T1-text': 'hsl(221, 14%, 31%)',

        // THEME 2
        'T2-main': 'hsl(0, 0%, 90%)',
        'T2-toggle': 'hsl(0, 5%, 81%)',
        'T2-screen': 'hsl(0, 0%, 93%)',
        'T2-keyF': 'hsl(185, 42%, 37%)',
        'T2-keyFSh': 'hsl(185, 58%, 25%)',
        'T2-key': 'hsl(45, 7%, 89%)',
        'T2-keySh': 'hsl(35, 11%, 61%)',
        'T2-toggle': 'hsl(25, 99%, 27%)',
        'T2-toggleSh': 'hsl(6, 70%, 34%)',
        'T2-text': 'hsl(60, 10%, 19%)',

        // THEME 3
        'T3-main': 'hsl(268, 75%, 9%)',
        'T3-toggle': 'hsl(268, 71%, 12%)',
        'T3-keyF': 'hsl(281, 89%, 26%)',
        'T3-keyFSh': 'hsl(285, 91%, 52%)',
        'T3-key': 'hsl(268, 47%, 21%)',
        'T3-keySh': 'hsl(290, 70%, 36%)',
        'T3-toggle': 'hsl(176, 100%, 44%)',
        'T3-toggleSh': 'hsl(177, 92%, 70%)',
        'T3-text': 'hsl(52, 100%, 62%)',
        'T3-text-secondary': 'hsl(198, 20%, 13%)',
      },
      screens: {
        xl: '1440px',
      },
    },
  },
  plugins: [],
};
