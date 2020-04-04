/* --------------------
 * is-it-type module
 * Tests Babel config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	presets: [
		[
			'@babel/preset-env',
			// Compile for current Node version
			{targets: {node: 'current'}}
		]
	]
};
