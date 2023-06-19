import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import viteTSConfigPaths from 'vite-tsconfig-paths';
import federation from '@originjs/vite-plugin-federation';

import packageJson from './package.json';
const port = 5001;

// https://vitejs.dev/config/
export default defineConfig({
  server: { port, strictPort: true },
  preview: { port, strictPort: true },
  build: {
    // modulePreload: false,
    target: 'esnext',
    // minify: false,
    // cssCodeSplit: false,
  },
  plugins: [
    // react app
    react(),

    // to enable typeScript paths (Absolute import) feature
    viteTSConfigPaths(),

    // to read svg files
    svgr(),

    // Module federation
    federation({
      // mode: 'development',
      name: packageJson.name,
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {},
      remotes: {
        // centralRedux: 'http://localhost:4001/remoteEntry.js',
        // app2: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
      // shared: {
      //   ...packageJson.dependencies,
      //   react: {
      //     shareScope: 'default',
      //     import: true,
      //     generate: true,
      //     requiredVersion: packageJson.dependencies.react,
      //   },
      //   'react-dom': {
      //     shareScope: 'default',
      //     import: true,
      //     generate: true,
      //     requiredVersion: packageJson.dependencies['react-dom'],
      //   },
      //   'react-router-dom': {
      //     shareScope: 'default',
      //     import: true,
      //     generate: true,
      //     requiredVersion: packageJson.dependencies['react-router-dom'],
      //   },
      // },
    }),
  ],
});
