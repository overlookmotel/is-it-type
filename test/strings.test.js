/* --------------------
 * is-it-type module
 * Tests for string methods
 * ------------------*/

'use strict';

// Modules
const {isEmptyString, isFullString} = require('../index.js');

// Tests

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
