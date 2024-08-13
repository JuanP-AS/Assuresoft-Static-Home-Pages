/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './Bolivia/**/*.{html,css}',
      './Panama/**/*.{html,css}',
      './Paraguay/**/*.{html,css}',
  ],
  theme: {
    extend: {
        fontFamily: {
            'helvetica': 'Helvetica, sans-serif',
            'gilroy': 'Gilroy, sans-serif',
            'satoshi': 'Satoshi, sans-serif',
            'poppins': 'Poppins, sans-serif',
        }
    },
  },
  plugins: [],
}
