module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'object-curly-spacing': 'always',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': 0,
    'react/no-unused-state': 1,
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
      },
    ],
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
};
