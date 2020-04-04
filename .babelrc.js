/* --------------------
 * is-it-type module
 * Babel config
 * ------------------*/

'use strict';

// Exports

module.exports = api => ({
	presets: [
		[
			'@babel/preset-env',
			{
				// Loose mode to reduce ponyfills
				loose: true,
				// If running tests, compile for current Node version
				...(api.env('test') && {targets: {node: 'current'}})
			}
		]
	]
});
