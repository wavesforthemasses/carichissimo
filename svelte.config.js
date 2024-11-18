import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			assets: 'build',
			fallback: '404.html',
			pages: 'build',
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/carichissimo' : ''
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				if (message.includes('404')) return;
				throw new Error(message);
			}
		}
	}
};

export default config;
