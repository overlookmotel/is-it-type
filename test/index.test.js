/* --------------------
 * is-it-type module
 * Tests
 * ------------------*/

'use strict';

// Modules
const itIs = require('../index'),
	{isEmptyString, isFullString} = itIs;

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
		'isPrimitive',
		'isBuffer'
	]) {
		it(`${name}`, () => {
			expect(itIs[name]).toBeFunction();
		});
	}
});

describe('isEmptyString', () => {
	it("returns true for ''", () => {
		expect(isEmptyString('')).toBe(true);
	});

	it("returns false for 'abc'", () => {
		expect(isEmptyString('abc')).toBe(false);
	});

	it('returns false for null', () => {
		expect(isEmptyString(null)).toBe(false);
	});
});

describe('isFullString', () => {
	it("returns true for 'abc'", () => {
		expect(isFullString('abc')).toBe(true);
	});

	it("returns false for ''", () => {
		expect(isFullString('')).toBe(false);
	});

	it('returns false for null', () => {
		expect(isFullString(null)).toBe(false);
	});
});
