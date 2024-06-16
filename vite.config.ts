/**
 * @file Configuration file for Vite
 * @since 0.0.1
 */

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()]
});
