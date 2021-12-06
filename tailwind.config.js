module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '150%': '50%',
    },
    extend: {
      width: {
        '2/7': '30%',
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'bg': '#141414',
      'bg-transparent': 'rgba(0,0,0,.9)',
      'logo': '#DC1B27'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
