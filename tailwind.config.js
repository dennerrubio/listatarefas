/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bluewood: {
          50: '#ddeef3',
          100: '#c8e3e9',
          200: '#add3dc',
          300: '#7fb9c7',
          400: '#4d94a8',
          500: '#3a7688',
          600: '#2f5d6f',
          700: '#2b4c5a',
          800: '#273e49',
          900: '#202f37',
          950: '#111c22',
        },
        sundance: {
          50: '#f9f7ed',
          100: '#f0ebd1',
          200: '#e3d6a5',
          300: '#d2bb72',
          400: '#c9a959',
          500: '#b58e3d',
          600: '#9c7132',
          700: '#7d542b',
          800: '#69462a',
          900: '#5b3c28',
          950: '#341f14',
        },
        'white-blueish': '#F3F3F7',
      },
    },
  },
  plugins: [],
};
