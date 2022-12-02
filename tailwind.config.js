/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,jsx}", "./pages/**/*.{html,jsx}"],
  theme: {
    colors: {
      stablesOrange: "#F05A28",
      stablesBlue: "#C3E4D9",
      stablesYellow: "#EAEEB5",
      stablesBrown: "#603813",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
  },
  darkmode: "media",
  extend: {
    fontFamily: {
      mellow: ["Mellow", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("autoprefixer"),
  ],
  corePlugins: {
    fontFamily: true,
  },
}
