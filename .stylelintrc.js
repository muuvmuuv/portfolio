/* eslint-disable unicorn/prefer-module */

const recess = require('stylelint-config-recess-order')

module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'screen'],
      },
    ],
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-declaration', 'after-comment', 'inside-single-line-block'],
      },
    ],
    'order/properties-order': [
      recess.rules['order/properties-order'].map((group) => ({
        ...group,
        emptyLineBefore: 'always',
        noEmptyLineBetween: true,
      })),
      {
        unspecified: 'bottomAlphabetical',
        emptyLineBeforeUnspecified: 'always',
      },
    ],
    // 'order/order': [
    //   [
    //     // Imports
    //     { type: 'at-rule', name: 'import' },

    //     // Inheritance
    //     { type: 'at-rule', name: 'extend' },
    //     { type: 'at-rule', name: 'apply' },

    //     // SCSS Variables
    //     'dollar-variables',

    //     // Declarations
    //     'declarations',

    //     // CSS Variables
    //     'custom-properties',

    //     // Mixins
    //     { type: 'at-rule', name: 'include' },
    //     { type: 'at-rule', name: 'mixin' },
    //     { type: 'at-rule', name: 'add-mixin' },

    //     // Pseudo-elements
    //     {
    //       type: 'rule',
    //       selector: /^&::[\w-]+/,
    //       hasBlock: true,
    //     },

    //     // Nested Rules
    //     'rules',

    //     // Pseudo-classes
    //     {
    //       type: 'rule',
    //       selector: /^&:[\w-]+/,
    //       hasBlock: true,
    //     },

    //     // Nested extending rules
    //     {
    //       type: 'rule',
    //       selector: /^&/,
    //       hasBlock: true,
    //     },

    //     // Media Queries
    //     { type: 'at-rule', name: 'media', hasBlock: true },
    //   ],
    //   {
    //     unspecified: 'bottom',
    //   },
    // ],
  },
}
