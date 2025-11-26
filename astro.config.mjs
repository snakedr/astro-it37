// astro.config.mjs
import { defineConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';

// ... (определение __dirname и __filename, как мы делали ранее)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // Указываем, что проект — статический (собирается в HTML/CSS/JS)
  output: 'static',
  
  // !!! НОВАЯ СТРОКА: Установка базового пути для всех ссылок
  base: '/', 

  // Директория для страниц и компонентов:
  srcDir: './src', 

  // ... (остальной код, включая секцию vite)
});