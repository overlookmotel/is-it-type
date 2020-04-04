/* --------------------
 * is-it-type module
 * Rollup config
 * ------------------*/

'use strict';

// Modules
const babel = require('rollup-plugin-babel'),
	{terser} = require('rollup-plugin-terser'),
	copy = require('rollup-plugin-copy');

// Exports

// Get build formats
// Use `BUILD_ENV` to build only specific formats
// e.g. `BUILD_ENV=cjs npm run build` or `BUILD_ENV=cjs,esm npm run build`
const formats = getFormats(['cjs', 'esm', 'umd']);

// Create build configs
const configs = [];
for (const format of formats) {
	configs.push(
		createConfig(format, 'production'),
		createConfig(format, 'development')
	);
}

module.exports = configs;

function createConfig(format, env) {
	const isProduction = env === 'production',
		isUmd = format === 'umd',
		isEsm = format === 'esm';

	return {
		input: 'src/index.js',
		output: {
			file: `dist/${format}/is-it-type${isProduction ? '.min' : ''}.js`,
			name: '{{nameCamel}}',
			format,
			sourcemap: true
		},
		plugins: [
			babel({
				exclude: /node_modules/,
				sourceMaps: true,
				// require/import runtime helpers (ponyfills) in CJS + ESM builds
				runtimeHelpers: !isUmd,
				plugins: !isUmd
					? [['@babel/transform-runtime', {useESModules: isEsm}]]
					: undefined
			}),
			isProduction ? terser() : undefined,
			isEsm ? copy({targets: [{src: 'es/package.json', dest: 'dist/esm'}]}) : undefined
		]
	};
}

function getFormats(allFormats) {
	const formatsStr = process.env.BUILD_ENV;

	// Default = all formats
	if (!formatsStr) return allFormats;

	// Parse list of formats
	// eslint-disable-next-line no-shadow
	const formats = formatsStr.split(',').map(format => format.toLowerCase());
	const invalidFormat = formats.find(format => format !== 'all' && !allFormats.includes(format));
	if (invalidFormat != null) {
		throw new Error(`Unrecognised BUILD_ENV format '${invalidFormat}' - supported formats are ${allFormats.map(format => `'${format}'`).join(', ')} or 'all'`);
	}

	if (formats.includes('all')) return allFormats;

	return formats;
}
