/* --------------------
 * is-it-type module
 * Tests for object methods
 * ------------------*/

// Modules
import {isObject, isEmptyObject} from 'is-it-type';

// Tests

describe('isObject', () => {
	it('returns true for {}', () => {
		expect(isObject({})).toBe(true);
	});

	it('returns true for {a: 1}', () => {
		expect(isObject({a: 1})).toBe(true);
	});

	it('returns true for class instance', () => {
		class C {}
		expect(isObject(new C())).toBe(true);
	});

	it('returns true for subclass instance', () => {
		class C {}
		class C2 extends C {}
		expect(isObject(new C2())).toBe(true);
	});

	it('returns true for prototype instance', () => {
		function C() {}
		expect(isObject(new C())).toBe(true);
	});

	it('returns true for object with no prototype', () => {
		expect(isObject(Object.create(null))).toBe(true);
	});

	it('returns false for function', () => {
		expect(isObject(function() {})).toBe(false); // eslint-disable-line prefer-arrow-callback
	});

	it('returns false for arrow function', () => {
		expect(isObject(() => {})).toBe(false);
	});

	it('returns false for []', () => {
		expect(isObject([])).toBe(false);
	});

	it('returns false for [1, 2, 3]', () => {
		expect(isObject([1, 2, 3])).toBe(false);
	});

	it("returns false for ''", () => {
		expect(isObject('')).toBe(false);
	});

	it("returns false for 'abc'", () => {
		expect(isObject('abc')).toBe(false);
	});

	it('returns false for 0', () => {
		expect(isObject(0)).toBe(false);
	});

	it('returns false for 123', () => {
		expect(isObject(123)).toBe(false);
	});

	it('returns false for -123', () => {
		expect(isObject(-123)).toBe(false);
	});

	it('returns false for RegExp', () => {
		expect(isObject(/a/)).toBe(false);
	});

	it('returns false for Date', () => {
		expect(isObject(new Date())).toBe(false);
	});

	it('returns false for Error', () => {
		expect(isObject(new Error())).toBe(false);
	});

	it('returns false for Buffer', () => {
		expect(isObject(Buffer.alloc(10))).toBe(false);
	});

	it('returns false for zero-length Buffer', () => {
		expect(isObject(Buffer.alloc(0))).toBe(false);
	});

	it('returns false for Symbol', () => {
		expect(isObject(Symbol())).toBe(false); // eslint-disable-line symbol-description
	});

	it('returns false for Map', () => {
		expect(isObject(new Map())).toBe(false);
	});

	it('returns false for Set', () => {
		expect(isObject(new Set())).toBe(false);
	});

	it('returns false for true', () => {
		expect(isObject(true)).toBe(false);
	});

	it('returns false for false', () => {
		expect(isObject(false)).toBe(false);
	});

	it('returns false for null', () => {
		expect(isObject(null)).toBe(false);
	});

	it('returns false for undefined', () => {
		expect(isObject(undefined)).toBe(false);
	});
});

describe('isEmptyObject', () => {
	it('returns true for {}', () => {
		expect(isEmptyObject({})).toBe(true);
	});

	it('returns false for {a: 1}', () => {
		expect(isEmptyObject({a: 1})).toBe(false);
	});

	it('returns false for []', () => {
		expect(isEmptyObject([])).toBe(false);
	});

	it('returns false for [1, 2, 3]', () => {
		expect(isEmptyObject([1, 2, 3])).toBe(false);
	});

	it("returns false for ''", () => {
		expect(isEmptyObject('')).toBe(false);
	});

	it('returns false for null', () => {
		expect(isEmptyObject(null)).toBe(false);
	});

	it('returns false for undefined', () => {
		expect(isEmptyObject(undefined)).toBe(false);
	});
});
