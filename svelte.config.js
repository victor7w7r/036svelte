import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import autoImport from 'sveltekit-autoimport';
import * as sass from 'sass';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		sass: {
			sync: true,
			implementation: sass
		},
		postcss: true
	}),
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
				autoImport({
					components: ['./src/lib/components'],
					module: {
						svelte: ['onMount', 'onDestroy']
					}
				})
			]
		}
	}
};

export default config;
