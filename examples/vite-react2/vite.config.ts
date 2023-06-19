import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import viteTSConfigPaths from 'vite-tsconfig-paths';
import federation from '@originjs/vite-plugin-federation';

import pkg from './package.json';

const port = 5002;

// https://vitejs.dev/config/
export default defineConfig({
  server: { port, strictPort: true },
  preview: { port, strictPort: true },
  build: {
    target: 'esnext',
  },
  plugins: [
    // Module federation
    federation({
      // mode: 'development',
      name: pkg.name,
      // filename: 'remoteEntry.js',
      exposes: {
        './hello': './src/mf/hello.tsx',
      },
      remotes: {
        // centralRedux: 'http://localhost:4001/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
      // shared: {
      //   ...pkg.dependencies,
      //   react: {
      //     shareScope: 'default',
      //     import: true,
      //     generate: true,
      //     requiredVersion: pkg.dependencies.react,
      //   },
      //   'react-dom': {
      //     shareScope: 'default',
      //     import: true,
      //     generate: true,
      //     requiredVersion: pkg.dependencies['react-dom'],
      //   },
      //   'react-router-dom': {
      //     shareScope: 'default',
      //     import: true,
      //     generate: true,
      //     requiredVersion: pkg.dependencies['react-router-dom'],
      //   },
      // },
    }),

    // react app
    react(),

    // to enable typeScript paths (Absolute import) feature
    viteTSConfigPaths(),

    // to read svg files
    svgr(),
  ],
});
