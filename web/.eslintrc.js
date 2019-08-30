module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['../.eslintrc.js', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {jsx: true},
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['babel', 'react', 'react-hooks'],
  rules: {
    'babel/semi': 2,
    'jsx-a11y/anchor-is-valid': 0,
    'lines-between-class-members': 0,
    'react/destructuring-assignment': 0,
    'arrow-parens': [2, 'always'],
    'curly': 2,
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': [2, {args: 'all', argsIgnorePattern: '^__', varsIgnorePattern: '^__'}],
    'no-use-before-define': 0,
    'object-curly-spacing': [2, 'never'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
