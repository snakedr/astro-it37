// astro.config.mjs
import { defineConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';

// Определение __dirname и __filename (нужно для path.resolve ниже)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // Указываем, что проект — статический (собирается в HTML/CSS/JS)
  output: 'static',
  
  // Установка базового пути для всех ссылок
  base: '/', 

  // Директория для страниц и компонентов:
  srcDir: './src', 

  // ===========================================
  // !!! КРИТИЧЕСКОЕ ИСПРАВЛЕНИЕ: НАСТРОЙКА АЛИАСА VITE !!!
  // ===========================================
  vite: {
    resolve: {
      alias: {
        // Указываем, что @/ ссылается на папку src
        '@/': path.resolve(__dirname, './src/')
      }
    }
  }
});