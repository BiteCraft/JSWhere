import { resolve } from 'node:path';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts'
  },
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  esbuildOptions(options, context) {
    if (context.format === 'esm') {
      options.define = {
        'import.meta.env': 'process.env',
      };
    };
  },
  treeshake: true,
  minify: true,
  target: 'es2020',
  platform: 'neutral',
  skipNodeModulesBundle: true,
  metafile: true,
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.mjs' : '.cjs',
    };
  },
  env: {
    NODE_ENV: process.env.NODE_ENV || 'production',
  },
});