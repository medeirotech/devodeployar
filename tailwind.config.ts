import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mukta", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.flex-column': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        },
        '.should-deploy-bg': {
          background: 'linear-gradient(180deg, rgba(0,205,58,1) 0%, rgba(0,163,46,1) 100%)',
        },
        '.should-not-deploy-bg': {
          background: 'linear-gradient(180deg, rgba(255,60,60,1) 0%, rgba(231,37,37,1) 100%)',
        },
      })
    })
  ],
}

