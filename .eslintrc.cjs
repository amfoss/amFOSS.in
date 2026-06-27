module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  extends: [
    'next/core-web-vitals',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort', 'import', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'error',
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    eqeqeq: ['error', 'always'],
    'no-var': 'error',
    'prefer-const': 'warn',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', '.']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
