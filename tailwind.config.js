module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        '20220102-basic1': "url('/images/20220102-basic1.JPG')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
