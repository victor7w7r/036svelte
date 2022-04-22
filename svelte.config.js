import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import * as sass from 'sass';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		sass: {
			sync: true,
			implementation: sass
		}
	}),
	kit: {
		adapter: adapter()
	}
};

export default config;
