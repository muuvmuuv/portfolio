/* eslint-disable unicorn/prefer-module */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: ['Inter', ...defaultTheme.fontFamily.serif],
      mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.2rem',
        lg: '2rem',
      },
    },
    extend: {
      dropShadow: {
        primary: '0 0 16px var(--tw-shadow-color)',
      },
      colors: {
        primary: {
          DEFAULT: '#FF2AA7',
        },
        mud: {
          tint: '#262c2e',
          DEFAULT: '#131517',
          shade: '#040404',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
