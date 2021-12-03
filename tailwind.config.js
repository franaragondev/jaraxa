module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'bg': '#141414',
      'bg-transparent': 'rgba(0,0,0,.5)',
      'logo': '#DC1B27'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
