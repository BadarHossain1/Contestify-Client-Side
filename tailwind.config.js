/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'className',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
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
    require('flowbite/plugin')
  ],
}

