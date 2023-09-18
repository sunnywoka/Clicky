/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './client/**/*.[tj]sx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF5D8F',
        pink1: '#FF87AB',
        pink2: '#FFA6C1',
        pink3: '#FADDE1',
      },
      scale: {
        '-100': '-1',
      },
    },
  },
  plugins: [],
}
