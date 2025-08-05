import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Ottieni il nome del repository dal package.json per usarlo come base path
// Questo è cruciale per GitHub Pages se non deployi sulla root (es. yourusername.github.io)
// const ASSET_URL = process.env.VITE_APP_BASE_URL || '/'; // Questa riga non è strettamente necessaria per GitHub Pages con base path fisso

// Ottieni il nome del repository GitHub
// Deve essere SOLO IL NOME DEL REPOSITORY, non l'URL completo o il percorso della sottocartella


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // La base path sarà https://stefanoCestari03.github.io/SITO-CORSA-LUMACHE/
  base: `/SITO-CORSA-LUMACHE/`, // <--- Questa riga è ora corretta con il nome del repository
});