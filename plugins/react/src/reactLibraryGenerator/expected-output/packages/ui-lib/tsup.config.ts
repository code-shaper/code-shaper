import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  esbuildOptions(options) {
    options.banner = {
      /*
       * TODO: This puts 'use client' on the entire bundle - not ideal
       * See
       * https://github.com/egoist/tsup/issues/835
       * https://github.com/evanw/esbuild/issues/3115
       */
      js: '"use client"',
    };
  },
  external: ['react'],
  format: ['cjs', 'esm'],
  inject: ['./react-import.js'],
});
