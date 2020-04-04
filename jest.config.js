/* --------------------
 * is-it-type module
 * Jest config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	testEnvironment: 'node',
	coverageDirectory: 'coverage',
	collectCoverageFrom: ['src/**/*.js'],
	setupFilesAfterEnv: ['jest-extended'],
	// Resolve `import from 'is-it-type'` to src or build, depending on env variable
	moduleNameMapper: {
		'^is-it-type$': resolvePath()
	}
};

function resolvePath() {
	const testEnv = (process.env.TEST_ENV || '').toLowerCase(),
		isProd = process.env.NODE_ENV === 'production';

	if (!testEnv) return '<rootDir>/src/index.js';
	if (testEnv === 'cjs') return '<rootDir>/index.js';
	if (testEnv === 'esm') return `<rootDir>/dist/esm/is-it-type${isProd ? '.min' : ''}.js`;
	if (testEnv === 'umd') return `<rootDir>/dist/umd/is-it-type${isProd ? '.min' : ''}.js`;

	throw new Error(
		`Invalid TEST_ENV '${testEnv}' - valid options are 'cjs', 'esm', 'umd' or undefined`
	);
}
