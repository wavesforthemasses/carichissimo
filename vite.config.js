import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: "/carichissimo/",
	plugins: [sveltekit()],
	paths: {
		base: process.env.NODE_ENV === 'production' ? '/carichissimo' : ''
	}
});
