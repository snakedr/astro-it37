// astro.config.mjs
import { defineConfig } from 'astro/config';
import path from 'path';
// !!! НОВЫЙ ИМПОРТ: для работы с модульными путями
import { fileURLToPath } from 'url';

// !!! НОВАЯ ПЕРЕМЕННАЯ: Определяем __dirname для ES-модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ... (остальной код)

export default defineConfig({
  // ... (существующий код конфигурации)
  
  // Явная настройка алиасов для Vite
  vite: {
    resolve: {
      alias: {
        // Теперь __dirname будет работать
        '@': path.resolve(__dirname, './src'), 
      },
    },
  },

  // ... (остальной код)
});