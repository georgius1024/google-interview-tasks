module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    'jest/globals': true
  },
  plugins: ['jest', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    quotes: [2, 'single', { avoidEscape: true }],
    semi: [2, 'never']
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017
  },
  extends: 'standard'
}
