/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'className',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'EBGaramond': ['"EB Garamond"', 'serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

