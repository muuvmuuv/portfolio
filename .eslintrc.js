// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  root: true,
  plugins: ['import'],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.js', '*.ts', '*.vue'],
      extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:unicorn/recommended',
      ],
      rules: {
        'sort-imports': [
          'error',
          {
            ignoreCase: true,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            allowSeparatedGroups: true,
          },
        ],
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            pathGroupsExcludedImportTypes: ['builtin'],
            pathGroups: [
              {
                pattern: 'src/**',
                group: 'internal',
                position: 'before',
              },
            ],
            groups: [
              'builtin',
              'external',
              ['internal', 'parent', 'sibling'],
              'index',
              'object',
            ],
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.vue'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/strict',
        'plugin:@typescript-eslint/stylistic',
        'plugin:import/typescript',
        'plugin:sonarjs/recommended',
        'plugin:compat/recommended',
      ],
    },
    {
      files: ['*.vue'],
      extends: ['plugin:vue/vue3-strongly-recommended'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
      },
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            case: 'pascalCase',
          },
        ],
        'vue/multi-word-component-names': 'off', // Why?
      },
    },
    {
      files: ['src/**/*.ts', 'src/**/*.vue'],
      env: {
        node: false,
        browser: true,
      },
    },
    {
      files: ['*'],
      extends: ['prettier'],
    },
  ],
}
