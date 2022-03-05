module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        hotaka: {
          50: '#a6d8ff',
          100: '#95d1ff',
          200: '#84caff',
          300: '#73c2ff',
          400: '#62bbff',
          500: '#40acff',
          600: '#1e9eff',
          700: '#008ffb',
          800: '#007bd9',
          900: '#0068B7'
        }
      },
      backgroundImage: {
        '20220102-basic1': "url('/images/20220102-basic1.jpg')",
        '20220212-basic2': "url('/images/20220212-basic2.jpg')",
        '20220220-trial': "url('/images/20220220-trial.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
