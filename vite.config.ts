import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.vaidyasarthi.app';
const REDIRECT_PATHS = ['/download', '/playstore', '/play', '/app', '/store', '/install', '/get'];

function playStoreRedirectPlugin(): Plugin {
  return {
    name: 'playstore-redirect',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0].toLowerCase().replace(/\/+$/, '');
        if (REDIRECT_PATHS.includes(url)) {
          res.writeHead(302, { Location: PLAY_STORE_URL });
          res.end();
          return;
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0].toLowerCase().replace(/\/+$/, '');
        if (REDIRECT_PATHS.includes(url)) {
          res.writeHead(302, { Location: PLAY_STORE_URL });
          res.end();
          return;
        }
        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), playStoreRedirectPlugin()],
  server: {
    port: 5173,
    host: true,
  },
});
