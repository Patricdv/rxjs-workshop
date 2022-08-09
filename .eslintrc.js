module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'import', 'prettier', 'unused-imports'],
  overrides: [
    {
      files: ['src/**/*.ts']
    }
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    Html5ConvivaIntegration: false,
    Html5ConvivaCredentials: false,
    SentryDsnCredentials: false,
    TimeoutID: false
  },
  rules: {
    strict: 'off',
    'no-console': 'off',
    'consistent-this': 'warn',
    'arrow-parens': ['error', 'as-needed'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    'comma-dangle': ['error', 'never'],
    'import/no-extraneous-dependencies': 'off',
    'import/named': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 120,
        arrowParens: 'avoid'
      }
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts']
      },
      webpack: { config: './webpack.config.js', env: 'local' },
      typescript: {
        alwaysTryTypes: true
      }
    }
  }
};