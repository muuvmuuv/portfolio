/* eslint-disable unicorn/prefer-module */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
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
          DEFAULT: '#FF2AA7', // 400
          50: '#FF85CC',
          100: '#FF64BF',
          200: '#FF4DB5',
          300: '#FF37AC',
          400: '#FF2AA7',
          500: '#F7219F',
          600: '#EC1B95',
          700: '#DA1689',
          800: '#C6127C',
          900: '#AF0F6D',
        },
        secondary: {
          50: '#999eb6',
          100: '#878ba1',
          200: '#74788c',
          300: '#626577',
          400: '#595c6c',
          500: '#4f5261',
          600: '#3d3f4c',
          700: '#2a2c36',
          800: '#171921',
          900: '#04050b',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
