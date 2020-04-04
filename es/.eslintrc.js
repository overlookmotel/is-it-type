/* --------------------
 * is-it-type module
 * ESLint src config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	overrides: [{
		files: ['!.*'],
		parserOptions: {
			sourceType: 'module'
		},
		rules: {
			'node/no-unsupported-features/es-syntax': ['error', {ignores: ['modules']}],
			// Entry point references files in dist folder which only exist after build
			'node/no-missing-import': 'off',
			'import/no-unresolved': 'off'
		}
	}]
};
