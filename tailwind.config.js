/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors:{
        'dark-bg': "#EDEDFD",
        'primary': '#736FB7',
        'secondary': '#C8C6F7',
        'dark-button-primary': '#325981',
        'button-primary': '#0F3A6A'
      }
    },
  },
  fontFamily: {
    sans: ['Comfortaa', 'sans-serif'],
  },
  plugins: [],
}
