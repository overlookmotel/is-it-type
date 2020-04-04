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
		// Entry points reference files in dist folder which only exist after build
		{
			files: ['./index.js'],
			rules: {
				'node/no-missing-require': 'off',
				'import/no-unresolved': 'off'
			}
		},
		{
			files: ['./es/index.js'],
			parserOptions: {
				sourceType: 'module'
			},
			rules: {
				'node/no-unsupported-features/es-syntax': ['error', {ignores: ['modules']}],
				// Entry point references files in dist folder which only exist after build
				'node/no-missing-import': 'off',
				'node/no-unpublished-import': 'off',
				'import/no-unresolved': 'off'
			}
		}
	]
};
