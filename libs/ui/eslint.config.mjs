import nx from '@nx/eslint-plugin';

import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  // Override for components
  {
    files: ['src/lib/components/**/*.ts'],
    rules: {
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'ui-cmp',
          style: 'kebab-case',
        },
      ],
    },
  },
  // Override for elements
  {
    files: ['src/lib/elements/**/*.ts'],
    rules: {
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'ui-elm',
          style: 'kebab-case',
        },
      ],
    },
  },
  // Default/fallback for other files (optional)
  {
    files: ['**/*.ts'],
    rules: {
      // ...other rules...
    },
  },
  {
    files: ['**/*.html'],
    rules: {},
  },
];
