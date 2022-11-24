/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{html,jsx}", "./pages/**/*.{html,jsx}"],
  theme: {
    colors: {
      stablesOrange: "#F05A28",
      stablesBlue: "#0A3D62",
      stablesYellow: "#EAEEB5",
      stablesBrown: "#603813",
    },
  },
  darkmode: "media",
  extend: {
    fontFamily: {
      mellow: ["Mellow", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
  corePlugins: {
    fontFamily: true,
  },
}
