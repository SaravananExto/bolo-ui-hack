import angularEslintPlugin from '@angular-eslint/eslint-plugin';
import nx from '@nx/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import noUnsanitizedPlugin from 'eslint-plugin-no-unsanitized';
import securityPlugin from 'eslint-plugin-security';
import xssPlugin from 'eslint-plugin-xss';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    plugins: {
      import: importPlugin,
      security: securityPlugin,
      'no-unsanitized': noUnsanitizedPlugin,
      xss: xssPlugin,
      '@angular-eslint': angularEslintPlugin,
    },
    // Override or add rules here
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
      'security/detect-object-injection': 'error',
      'no-unsanitized/method': 'error',
      'no-unsanitized/property': 'error',
      '@angular-eslint/contextual-lifecycle': 'error',
      '@angular-eslint/no-async-lifecycle-method': 'error',
      '@angular-eslint/no-attribute-decorator': 'error',
      '@angular-eslint/require-lifecycle-on-prototype': 'error',
      '@angular-eslint/sort-lifecycle-methods': 'error',
      '@angular-eslint/consistent-component-styles': 'error',
      '@angular-eslint/contextual-decorator': 'error',
      '@angular-eslint/no-conflicting-lifecycle': 'error',
      '@angular-eslint/no-duplicates-in-metadata-arrays': 'error',
      '@angular-eslint/no-empty-lifecycle-method': 'error',
      '@angular-eslint/no-input-rename': 'error',
      '@angular-eslint/no-inputs-metadata-property': 'error',
      '@angular-eslint/no-lifecycle-call': 'error',
      '@angular-eslint/no-output-native': 'error',
      '@angular-eslint/no-output-on-prefix': 'error',
      '@angular-eslint/no-output-rename': 'error',
      '@angular-eslint/no-outputs-metadata-property': 'error',
      '@angular-eslint/prefer-standalone': 'error',
      '@angular-eslint/use-pipe-transform-interface': 'error',
    },
  },
  {
    files: ['**/*.html'],
    plugins: {
      '@angular-eslint': angularEslintPlugin,
    },
    rules: {
      // Add Angular template linting rules here as needed
      '@angular-eslint/template/no-negated-async': 'error',
    },
  },
];
