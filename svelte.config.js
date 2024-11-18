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
				// Ignore specific errors related to missing base path
				if (path === '/' || path === '/404') {
					return;
				}
				// Throw other errors
				throw new Error(message);
			}
		}
	}
};

export default config;
