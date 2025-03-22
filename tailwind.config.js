/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0A6DB5',
          800: '#0B7ECC',
          700: '#0C8CE9',
          600: '#3FA2ED',
          500: '#6CB8F1',
          400: '#98CDF5',
          300: '#C3E2FA',
          200: '#E0F0FC',
          100: '#F2F9FE',
        },
        secondary: {
          900: '#0A915B',
          800: '#0BAA6E',
          700: '#0CE97D',
          600: '#3FED98',
          500: '#6CF1B2',
          400: '#98F5CB',
          300: '#C3FAE1',
          200: '#E0FCF0',
          100: '#F2FEF8',
        },
      },
    },
  },
  plugins: [],
};
