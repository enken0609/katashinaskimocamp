module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        hotaka: {
          50: '#f0f9ff',
          100: '#95d1ff',
          200: '#84caff',
          300: '#73c2ff',
          400: '#62bbff',
          500: '#40acff',
          600: '#1e9eff',
          700: '#008ffb',
          800: '#007bd9',
          900: '#0068B7'
        },
        base: {
          500: '#DAE7DF',
          900: '#068A69',
        },
      },
      backgroundImage: {
        '20220102-basic1': "url('/images/20220102-basic1.jpg')",
        '20220212-basic2': "url('/images/20220212-basic2.jpg')",
        '20220220-trial': "url('/images/20220220-trial.jpg')",
        '20220402-spr-kurahashi': "url('/images/race/20220402-spr-kurahashi.jpg')",
        '20220402-spr-sekiguchi': "url('/images/race/20220402-spr-sekiguchi.jpg')",
        '20220403-ind-kurahashi': "url('/images/race/20220403-ind-kurahashi.jpg')",
        '20220403-ind-sekiguchi': "url('/images/race/20220403-ind-sekiguchi.jpg')",
        '20220416-quest2': "url('/images/20220416-quest2.jpg')",
        '20230108-basic1': "url('/images/20230108-basic1.jpg')",
        '20230325-quest1': "url('/images/20230325-quest1.jpg')",
        '20231223-basic1': "url('/images/20231223-basic1.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
