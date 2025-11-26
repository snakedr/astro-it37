// astro.config.mjs
import { defineConfig } from 'astro/config';
import path from 'path'; // <--- НОВЫЙ ИМПОРТ: Обязателен для path.resolve

// Импортируйте адаптеры здесь, если будете использовать SSR (Node.js)
// Но для статического сайта это не нужно.

export default defineConfig({
  // Указываем, что проект — статический (собирается в HTML/CSS/JS)
  output: 'static', 

  // Директория для страниц и компонентов:
  srcDir: './src', 

  // Порт для локальной разработки:
  server: {
    port: 3000
  },

  // НОВАЯ СЕКЦИЯ: Явная настройка алиасов для Vite
  // Это сообщает Vite, что '@/' нужно разрешать в './src'
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },

  // Если вы добавите интеграции (React, Vue и т.д.), они будут здесь.
  // integrations: [],
});