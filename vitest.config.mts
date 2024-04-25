import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    {
      name: 'load-svg',
      enforce: 'pre',
      transform(_, id) {
        if (id.endsWith('.svg')) {
          return 'export default () => {}';
        }
      }
    }
  ],
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8'
    },
    globals: true,
    setupFiles: './src/__tests__/setup.ts'
  }
});
