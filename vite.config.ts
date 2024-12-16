import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs/promises';
import { generateSitemap } from './src/lib/sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-sitemap',
      async writeBundle() {
        try {
          const sitemap = await generateSitemap();
          await fs.writeFile('dist/sitemap.xml', sitemap);
          console.log('✓ Sitemap generated successfully');
        } catch (error) {
          console.error('Error writing sitemap:', error);
        }
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});