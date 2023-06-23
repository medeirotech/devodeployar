/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mukta", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        shouldDeploy: "#00A32E",
        shouldNotDeploy: "#E72525"
      }
    },
  },
  plugins: [],
}

