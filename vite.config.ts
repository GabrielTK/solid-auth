import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path';
export default defineConfig({
  plugins: [solidPlugin()],
  
  server: {
    port: 3000,
  },
  build: {
    lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'SolidAuth',
        // the proper extensions will be added
        fileName: 'solid-auth'
      },
    target: 'esnext',
  },
});
