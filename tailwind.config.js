/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Poppins', 'sans-serif'],
      },
      colors: {
        dark: '#262a41',
        light: '#f7f7ff',
        greenish: '#30BBB5',
        input: '#7d7f8d',
        lightInput: '#d9d9e0',
        pinkish: '#f935a9',
        purplish: '#7946c1',
        greyish: '#b2b4bc'
      },
      boxShadow: {
        'shad': '1px 2px 25px 8px rgba(0,0,0,0.3)',
      }
    }
  },
  plugins: [],
}