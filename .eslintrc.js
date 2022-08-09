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
    node: true
  },
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-useless-constructor': 'off',
    'prettier/prettier': [
      'error',
      {
        bracketSameLine: false,
        bracketSpacing: true,
        parser: 'typescript',
        printWidth: 120,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
    ],
    strict: 'off',
    'no-console': 'off',
    'consistent-this': 'warn',
    'arrow-parens': ['error', 'as-needed'],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    'comma-dangle': ['error', 'never'],
    'import/no-extraneous-dependencies': 'off',
    'import/named': 'off',
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