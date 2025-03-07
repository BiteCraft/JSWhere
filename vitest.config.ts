import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    // environment: 'jsdom',
    setupFiles: ['./tests/setup/setup.ts'],
    include: ['tests/**/*.test.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.ts'],
      exclude: ['**/*.d.ts', 'src/**/*.config.ts', 'src/**/index.ts'],
    },
    typecheck: {
      enabled: true,
      tsconfig: './tsconfig.test.json',
    },
  },
  resolve: {
    alias: {},
  },
});
