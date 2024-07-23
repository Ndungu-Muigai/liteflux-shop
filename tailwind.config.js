/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:
      {
        background: "#005477",
        navy: "#000034",
        screens: {
          '2xl': '1536px',
        },
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

