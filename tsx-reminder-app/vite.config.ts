import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
/* biome-ignore lint: <exclude vite> */
export default defineConfig({
  plugins: [react()],
});
