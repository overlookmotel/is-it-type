/* --------------------
 * is-it-type module
 * Tests for number methods
 * ------------------*/

'use strict';

// Modules
const {
	isInteger,
	isPositiveInteger, isPositiveIntegerOrZero,
	isNegativeInteger, isNegativeIntegerOrZero
} = require('../index.js');

// Tests

describe('isInteger', () => {
	it('returns true for 2', () => {
		expect(isInteger(2)).toBe(true);
	});

	it('returns true for -2', () => {
		expect(isInteger(-2)).toBe(true);
	});

	it('returns true for 0', () => {
		expect(isInteger(0)).toBe(true);
	});

	it('returns false for 2.5', () => {
		expect(isInteger(2.5)).toBe(false);
	});

	it('returns false for -2.5', () => {
		expect(isInteger(-2.5)).toBe(false);
	});

	it('returns false for string', () => {
		expect(isInteger('2')).toBe(false);
	});

	it('returns false for null', () => {
		expect(isInteger(null)).toBe(false);
	});

	it('returns false for boolean', () => {
		expect(isInteger(true)).toBe(false);
	});

	it('returns false for object', () => {
		expect(isInteger(true)).toBe(false);
	});
});

describe('isPositiveInteger', () => {
	it('returns true for 2', () => {
		expect(isPositiveInteger(2)).toBe(true);
	});

	it('returns false for -2', () => {
		expect(isPositiveInteger(-2)).toBe(false);
	});

	it('returns false for 0', () => {
		expect(isPositiveInteger(0)).toBe(false);
	});
});

describe('isPositiveIntegerOrZero', () => {
	it('returns true for 2', () => {
		expect(isPositiveIntegerOrZero(2)).toBe(true);
	});

	it('returns true for 0', () => {
		expect(isPositiveIntegerOrZero(0)).toBe(true);
	});

	it('returns false for -2', () => {
		expect(isPositiveIntegerOrZero(-2)).toBe(false);
	});
});

describe('isNegativeInteger', () => {
	it('returns true for -2', () => {
		expect(isNegativeInteger(-2)).toBe(true);
	});

	it('returns false for 2', () => {
		expect(isNegativeInteger(2)).toBe(false);
	});

	it('returns false for 0', () => {
		expect(isNegativeInteger(0)).toBe(false);
	});
});

describe('isNegativeIntegerOrZero', () => {
	it('returns true for -2', () => {
		expect(isNegativeIntegerOrZero(-2)).toBe(true);
	});

	it('returns true for 0', () => {
		expect(isNegativeIntegerOrZero(0)).toBe(true);
	});

	it('returns false for 2', () => {
		expect(isNegativeIntegerOrZero(2)).toBe(false);
	});
});
