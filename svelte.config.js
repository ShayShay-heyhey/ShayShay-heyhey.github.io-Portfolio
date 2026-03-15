import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: undefined,
			precompress: false,
			strict: true
		}),

		// Custom domain deployment (e.g. https://shaynacarter.com/) is served from '/'
		// so we do NOT set a repo subpath base.
		paths: {
			base: ''
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