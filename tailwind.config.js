/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        text: '2px 2px #2dd4bf',
        textLight: '2px 2px #5eead4',
        textDark: '2px 2px #14b8a6',
        blackText: '4px 4px black',
        whiteText: '4px 4px white',
      },
      fontFamily: {
        Dancing: ['Dancing Script'],
        Marker: ['Permanent Marker'],
        Space: ['Space Grotesk'],
        Racing: ['Racing Sans One'],
        Silk: ['Silkscreen'],
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        cursorKF: {
          '0%': {
            opacity: 0,
          },
          '40%': {
            opacity: 0,
          },
          '50%': {
            opacity: 1,
          },
          '90%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
        type: {
          '0%': {
            left: 0,
          },
          '100%': {
            left: '100%',
          },
        },
        fontChange: {
          '0%': {
            fontFamily: 'Silkscreen',
          },
          '20%': {
            fontFamily: 'Permanent Marker',
          },
          '40%': {
            fontFamily: 'Dancing Script',
          },
          '60%': {
            fontFamily: 'Space Grotesk',
          },
          '80%': {
            fontFamily: 'Racing Sans One',
          },
        },
      },
      animation: {
        cursor: 'cursorKF 1s linear infinite',
        type: 'type 3s steps(13, start) infinite alternate both',
        font: 'fontChange 5s linear infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
  mode: 'jit',
}
