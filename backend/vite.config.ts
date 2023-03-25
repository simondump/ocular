import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  envDir: '..',
  server: {
    port: 4000
  },
  plugins: VitePluginNode({
    adapter: 'fastify',
    appPath: './src/main.ts',
    exportName: 'app',
    tsCompiler: 'esbuild'
  })
});
