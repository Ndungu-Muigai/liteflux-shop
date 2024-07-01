/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:
      {
        background: "#005477",
        navy: "#000034"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

