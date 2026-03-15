import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const repo = 'ShayShay-heyhey.github.io-Portfolio';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: undefined,
			precompress: false,
			strict: true
		}),

		 paths: {
		    base: process.env.NODE_ENV === 'production' ? `/${repo}` : ''
		 },

		 prerender: {
		    handleHttpError: ({ path, referrer, message }) => {
		        // ignore deliberate trailing slash
		        if (path !== '/') {
		            console.warn(`Pre-render error ${path} ${message}`);
		        }
		    }
		 }
	},

	extensions: ['.svelte', '.svx']
};

export default config;
