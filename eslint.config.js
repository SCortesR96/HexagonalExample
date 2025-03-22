// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      // '@angular-eslint/component-selector': [
      //   'error',
      //   {
      //     type: 'element',
      //     prefix: 'app',
      //     style: 'kebab-case',
      //   },
      // ],

      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'prefer-const': 'error',
      'no-console': 'error',
      'max-len': ['error', { code: 120 }],
      eqeqeq: ['error', 'always'],
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'none',
          // ingnore enum values
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {
      '@angular-eslint/template/elements-content': 'off',
    },
  },
);
