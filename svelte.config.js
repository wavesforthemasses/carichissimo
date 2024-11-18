import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: '/carichissimo'
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore all 404 errors during prerendering
				if (message.includes('404')) {
					return;
				}
				// Throw other errors
				throw new Error(message);
			},
			// Add entries that need to be prerendered
			entries: [
				'*',
				'/carichissimo',
				'/carichissimo/*'
			]
		}
	}
};

export default config;
