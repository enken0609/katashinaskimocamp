module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        '20220102-basic1': "url('/images/20220102-basic1.jpg')",
        '20220212-basic2': "url('/images/20220212-basic2.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
