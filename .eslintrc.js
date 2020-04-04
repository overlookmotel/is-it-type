/* --------------------
 * is-it-type module
 * ESLint config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	extends: [
		'@overlookmotel/eslint-config',
		'@overlookmotel/eslint-config-node'
	],
	overrides: [
		{
			// Entry point references files in dist folder which only exist after build
			files: ['./index.js'],
			rules: {
				'node/no-missing-require': 'off',
				'import/no-unresolved': 'off'
			}
		}
	]
};
