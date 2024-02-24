import { defineConfig, splitVendorChunkPlugin, UserConfig } from 'vite';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

const baseFolder = process.env.APPDATA !== undefined && process.env.APPDATA !== '' ? `${process.env.APPDATA}/ASP.NET/https` : `${process.env.HOME}/.aspnet/https`;

// Generate the certificate name using the NPM package name
const certificateName = process.env.npm_package_name;

// Define certificate filepath
const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
// Define key filepath
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

export default defineConfig(async () => {
    if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
        // Wait for the certificate to be generated
        await new Promise<void>((resolve) => {
            spawn('dotnet', ['dev-certs', 'https', '--export-path', certFilePath, '--format', 'Pem', '--no-password'], { stdio: 'inherit' }).on('exit', (code) => {
                resolve();
                if (code) {
                    process.exit(code);
                }
            });
        });
    }
    const config: UserConfig = {
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
            hmr: true,
            https: {
                cert: certFilePath,
                key: keyFilePath
            }
        }
    };

    return config;
});
