module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
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
      },
      screens: {
        'xs': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'bg': '#141414',
      'bg-transparent': 'rgba(0,0,0,.9)',
      'logo': '#DC1B27'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#DC1B27',
      'footer': '#808080'
    }),
    fontFamily: {
      section: ["Roboto"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
