import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // Используем '/serverless'
import path from 'path';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    edge: false, // Отключите edge, если не используете его активно
    // 💡 Добавляем эти опции для обхода проблем с NFT на Windows:
    functionPerRoute: false,
    excludeExternal: false, 
  }),

  vite: {
    resolve: {
      alias: {
        // Если вы используете path.resolve здесь, он должен быть импортирован
        // Например: 
        // '@components': path.resolve(process.cwd(), './src/components')
      }
    }
  }
});