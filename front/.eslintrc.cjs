/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    node: true,
  },
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    "semi": ["error", "never"],
    "no-trailing-spaces": ["error"],
    "no-unused-vars": ["error"],
    "space-before-blocks": ["error", "always"],
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
