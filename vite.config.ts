import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import postcss from './postcss.config.js';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 31415,
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd())]
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	css: {
		postcss
	}
});
