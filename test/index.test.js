/* --------------------
 * is-it-type module
 * Tests
 * ------------------*/

'use strict';

// Modules
const itIs = require('../index.js');

// Tests

describe('Methods from core-util-is', () => { // eslint-disable-line jest/lowercase-name
	for (const name of [
		'isArray',
		'isBoolean',
		'isNull',
		'isNullOrUndefined',
		'isNumber',
		'isString',
		'isSymbol',
		'isUndefined',
		'isRegExp',
		'isObject',
		'isDate',
		'isError',
		'isFunction',
		'isPrimitive'
	]) {
		it(name, () => {
			expect(itIs[name]).toBeFunction();
		});
	}
});
