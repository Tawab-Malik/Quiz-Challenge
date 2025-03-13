/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'karry': {
          DEFAULT: '#FFE6DA',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#FFE6DA',
          600: '#FFC0A2',
          700: '#FF9A6A',
          800: '#FF7432',
          900: '#F95100',
          950: '#DD4800'
        },
        'vivid-tangerine': {
          DEFAULT: '#FF8C8C',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFDEDE',
          400: '#FFB5B5',
          500: '#FF8C8C',
          600: '#FF5454',
          700: '#FF1C1C',
          800: '#E30000',
          900: '#AB0000',
          950: '#8F0000'
        },
        'chablis': {
          DEFAULT: '#FFF5F5',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#FFF5F5',
          600: '#FFBDBD',
          700: '#FF8585',
          800: '#FF4D4D',
          900: '#FF1515',
          950: '#F80000'
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} 