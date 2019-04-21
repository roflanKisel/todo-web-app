module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['../.eslintrc.js'],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-console': 0,
  }
};
