import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const apiPort = process.env.P3XR_API_PORT || '7843'

// Transform CJS string files (module.exports = X) to ESM (export default X)
function cjsStringsPlugin(): Plugin {
    return {
        name: 'cjs-strings',
        transform(code, id) {
            if (id.includes('/strings/') && id.endsWith('/strings.js')) {
                return code.replace('module.exports = strings', 'export default strings')
            }
        },
    }
}

export default defineConfig(({ mode }) => ({
    root: __dirname,
    publicDir: path.resolve(__dirname, '../public'),
    plugins: [
        react(),
        cjsStringsPlugin(),
        {
            name: 'redirect-root',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    if (req.url === '/' || req.url === '') {
                        res.writeHead(302, { Location: '/react/' });
                        res.end();
                        return;
                    }
                    next();
                });
            },
        },
    ],
    server: {
        port: 8082,
        proxy: {
            '/socket.io': {
                target: `http://localhost:${apiPort}`,
                ws: true,
            },
            '/api': {
                target: `http://localhost:${apiPort}`,
            },
        },
    },
    preview: {
        port: 8082,
    },
    base: '/react/',
    build: {
        outDir: path.resolve(__dirname, '../../dist-react'),
        emptyOutDir: true,
    },
    define: {
        'globalThis.p3xrDevMode': JSON.stringify(mode === 'development'),
        'globalThis.p3xrApiPort': JSON.stringify(apiPort),
    },
}))
