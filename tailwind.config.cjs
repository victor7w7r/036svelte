/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{svelte,ts}"],
  theme: {
    fontFamily: {
      amina: ['amina-reska'],
      roboto: ['Roboto']
    },
    extend: {
      screens: {
        'tall': { 'raw': '(min-height: 768px)' }
      }
    }
  }
}