/* --------------------
 * is-it-type module
 * ESLint tests config
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
			'node/no-unsupported-features/es-syntax': ['error', {ignores: ['modules']}],
			'import/no-unresolved': ['error', {ignore: ['^is-it-type$']}],
			'node/no-missing-import': ['error', {allowModules: ['is-it-type']}]
		}
	}]
};
