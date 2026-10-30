import { defineConfig } from 'vite';

// GitHub Pages pasa BASE_PATH ('/<repo>' en sitios de proyecto); en local y en Vercel se sirve desde la raíz
export default defineConfig({
  base: `${process.env.BASE_PATH ?? ''}/`
});
