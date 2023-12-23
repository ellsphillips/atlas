import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	extensions: ['.svelte', '.md', '.svx'],

	kit: {
		adapter: adapter(),
		alias: {
			$data: resolve('./data/'),
			$env: resolve('.//env/'),
			$src: resolve('./src/'),
			$components: resolve('./src/lib/components/'),
			$helpers: resolve('./src/lib/helpers/'),
			$layouts: resolve('./src/lib/layouts/'),
			$lib: resolve('./src/lib/'),
			$map: resolve('./src/lib/map/'),
			$stores: resolve('./src/lib/stores/'),
			$types: resolve('./src/types/'),
			$styles: resolve('./src/styles')
		}
	}
};

export default config;
