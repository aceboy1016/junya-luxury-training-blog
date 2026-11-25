module.exports = {
  plugins: {
    [require.resolve('./scripts/postcss-tailwind3-compat.cjs')]: {},
    tailwindcss: {},
    autoprefixer: {},
  },
}