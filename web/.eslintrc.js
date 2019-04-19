module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb', '../.eslintrc.js'],
  parserOptions: {
    ecmaFeatures: {jsx: true},
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['babel', 'react'],
  rules: {
    'babel/semi': 2,
    'jsx-a11y/anchor-is-valid': 0,
    'lines-between-class-members': 0,
    'react/destructuring-assignment': 0,
  },
};
