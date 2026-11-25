// Tailwind 3 does not process @theme inline, and browsers ignore this v4-only
// at-rule. Drop the inert block before Next's CSS parser without editing design CSS.
module.exports = () => ({
  postcssPlugin: 'tailwind3-compat',
  AtRule: {
    theme(rule) {
      if (rule.params.trim() === 'inline') rule.remove()
    },
  },
})
module.exports.postcss = true
