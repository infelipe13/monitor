const defaultTheme = require('tailwindcss/defaultTheme');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  purge: {
    content: ['./src/**/*.tsx'],
    enabled: IS_PRODUCTION,
  },
  theme: {
    extend: {
      fontFamily: { sans: ['Inter var', ...defaultTheme.fontFamily.sans] },
    },
  },
  variants: {},
};
