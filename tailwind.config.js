module.exports = {
  mode: 'jit',
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.vue',
      './public/**/*.html',
      './public/**/*.css',
      './src/**/*.ts',
      'node_modules/vue-tailwind/dist/*.js',
    ],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
