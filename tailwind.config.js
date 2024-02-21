/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      serif: ["Noto Serif", "serif"]
    },
    colors: {
      ...colors,
      "primary": "#00F7FF",
      "secondary": "#23CFD5",
      "tertiary": "#407D80",
      "tabBar": "#ffffff08"
    },
    extend: {
      backgroundImage: {
        "profilePicture": "url('../img/profilePicture.png')",
        "profilePictureMobile": "url('../img/profilePictureMobile.jpg')",
        "reactLogo": "url('../img/react-logo.svg')",
        "javascript-logo": "url('../img/javascript-logo.svg')",
        "vite-logo": "url('../img/vite-logo.svg')",
        "tailwind-logo": "url('../img/tailwind-logo.svg')",
        "sass-logo": "url('../img/sass-logo.svg')",
        "css-logo": "url('../img/css-logo.svg')",
        "html-logo": "url('../img/html-logo.svg')",
        "git-logo": "url('../img/git-logo.svg')",
        "linkedin-logo": "url('../img/linkedin-logo.svg')",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}

