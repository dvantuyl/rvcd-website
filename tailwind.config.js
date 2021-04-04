const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
  },
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'vines-01': "url('/assets/images/backgrounds/vines-03.jpg')",
        valley: "url('/assets/images/backgrounds/valley-02.svg')",
      }),
      colors: {
        orange: colors.orange,
        fuchsia: colors.fuchsia,
        lime: colors.lime,
        pink: colors.pink,
        amber: colors.amber,
      },
      fontFamily: {
        title: [
          'Ultra',
          'ui-serif',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif',
        ],
      },
    },
  },
  variants: {},
  plugins: [],
}
