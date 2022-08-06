module.exports = {
  root: true,
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-typescript',
    'airbnb',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', '@typescript-eslint/eslint-plugin'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'react/forbid-prop-types': 'off',
    'import/prefer-default-export': 'off',
    'import/export': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'spaced-comment': 'off',
    'guard-for-in': 'off',
    'react/no-danger': 'off',
    'react/button-has-type': 'off',
    'react/no-unescaped-entities': 'off',
    'operator-assignment': 'off',
    'prefer-destructuring': 'off',
    'react/no-children-prop': 'off',
    'consistent-return': 'off',
    'react/state-in-constructor': 'off',
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'react/destructuring-assignment': 'off',
    '@typescript-eslint/dot-notation': 'off',
    'no-bitwise': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    'no-alert': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'react/sort-prop-types': 'error',
    'react/prop-types': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'import/no-named-as-default': 'off',
    'prefer-object-spread': 'off',
    'arrow-body-style': 'off',
    'react/sort-comp': 'off',
    'react/function-component-definition': 'off',
  },
};
