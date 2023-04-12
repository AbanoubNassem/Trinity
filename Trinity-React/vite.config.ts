import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
export default defineConfig({
    define: {
        'process.env': JSON.stringify(process.env.NODE_ENV || 'development')
    },
    build: {
        outDir: resolve(__dirname, '../Trinity/wwwroot/dist'),
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'src/main.tsx'),
            name: 'trinity',
            fileName: 'trinity-react',
            formats: ['es']
        }
    },
    plugins: [react(), splitVendorChunkPlugin()],
    resolve: {
        alias: {
            // @ts-ignore
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
