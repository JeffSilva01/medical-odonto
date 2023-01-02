/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-default': '#0153A7',
        'green-100': '#D4F5E5',
        'green-300': '#68B936',
        'green-400': '#018039',
        'green-500': '#014222',
        'green-900': '#03170E',
      },
    },
  },
  plugins: [],
};
