/* --------------------
 * is-it-type module
 * ESLint src config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	overrides: [{
		files: ['!.*'],
		extends: [
			'@overlookmotel/eslint-config-jest'
		],
		parserOptions: {
			sourceType: 'module'
		},
		rules: {
			'node/no-unsupported-features/es-syntax': ['error', {ignores: ['modules']}]
		}
	}]
};
