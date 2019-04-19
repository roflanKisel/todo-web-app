module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  root: true,
  rules: {
    'arrow-parens': [2, 'always'],
    'curly': 2,
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': [2, {args: 'all', argsIgnorePattern: '^__', varsIgnorePattern: '^__'}],
    'no-use-before-define': 0,
    'object-curly-spacing': [2, 'never'],
    'quotes': ['error', 'single'],
  }
};
