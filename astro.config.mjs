import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import path from 'path';

export default defineConfig({
  output: 'server', 
  adapter: vercel(), 
  vite: {
    resolve: {
      alias: {
        '@/': path.resolve(path.resolve(), './src/')
      }
    }
  }
});