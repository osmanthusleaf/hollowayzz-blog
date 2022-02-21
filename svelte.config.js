import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-auto';
import fs from 'fs';
import * as path from 'path';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify'

const files = ['./post', './pages'].flatMap((dir) => fs.readdirSync(dir, { withFileTypes: false }));
const stripMDSuffix = (s) => `/${s.replace('.md', '')}`;
// prerendered entries
const entries = files.map(stripMDSuffix).reduce((entries, entry) => [...entries, entry], ['*']);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		prerender: {
			// entries
			entries: ['*']
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		// adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$atoms: path.resolve('src/components/Atoms'),
					$molecules: path.resolve('src/components/Molecules'),
					$organisms: path.resolve('src/components/Organisms')
				}
			}
		}

		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte'
	}
};
