import { defineFlatConfig } from 'eslint-define-config';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default defineFlatConfig({
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
  plugins: {
    '@typescript-eslint': typescriptPlugin,
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    '@typescript-eslint/no-unused-vars': 'warn',
  },
});
