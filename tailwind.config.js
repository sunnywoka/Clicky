/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './client/**/*.[tj]sx'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5D8F',
        pink1: '#FF87AB',
        pink2: '#FFA6C1',
        pink3: '#FFC4D6',
        pink4: '#FADDE1',
      },
      scale: {
        '-100': '-1',
      },
    },
  },
  plugins: [],
}
