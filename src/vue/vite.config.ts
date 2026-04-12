import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
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
    resolve: {
        alias: {
            'lodash-es': path.resolve(__dirname, '../../node_modules/lodash-es'),
        },
    },
    plugins: [
        vue(),
        vuetify({ autoImport: true }),
        cjsStringsPlugin(),
        {
            name: 'redirect-root',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    if (req.url === '/' || req.url === '') {
                        res.writeHead(302, { Location: '/vue/' });
                        res.end();
                        return;
                    }
                    next();
                });
            },
        },
    ],
    server: {
        port: 8083,
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
        port: 8083,
    },
    base: '/vue/',
    build: {
        outDir: path.resolve(__dirname, '../../dist-vue'),
        emptyOutDir: true,
    },
    define: {
        'globalThis.p3xrDevMode': JSON.stringify(mode === 'development'),
        'globalThis.p3xrApiPort': JSON.stringify(apiPort),
    },
}))
