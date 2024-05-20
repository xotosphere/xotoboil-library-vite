// vite.config.js
import { resolve } from 'path'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'xotoboil-library',
		},
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	plugins: [
		dts({
			outputDir: 'dist/types',
		}),
	],
	test: {
		globals: true,
		environment: 'jsdom',
	},
})
