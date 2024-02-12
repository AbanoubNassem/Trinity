import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
    define: {
        'process.env': JSON.stringify(process.env.NODE_ENV || 'development')
    },
    root: 'src',
    appType: 'custom',
    publicDir: '../public',
    base: './',
    build: {
        emptyOutDir: true,
        outDir: '../../Trinity/wwwroot/dist',
        assetsDir: '',

        rollupOptions: {
            input: 'src/main.tsx',
            output: {
                entryFileNames: 'trinity.js'
            }
        }
    },
    plugins: [react(), splitVendorChunkPlugin(), cssInjectedByJsPlugin()],
    resolve: {
        alias: {
            // @ts-ignore
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        strictPort: true,
        hmr: true
    }
});
