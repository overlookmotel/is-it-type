/* --------------------
 * is-it-type module
 * Tests for object methods
 * ------------------*/

// Modules
// eslint-disable-next-line import/no-unresolved, node/no-missing-import
import {isEmptyObject} from 'is-it-type';

// Tests

describe('isEmptyObject', () => {
	it('returns true for {}', () => {
		expect(isEmptyObject({})).toBe(true);
	});

	it('returns false for {a: 1}', () => {
		expect(isEmptyObject({a: 1})).toBe(false);
	});

	it("returns false for ''", () => {
		expect(isEmptyObject('')).toBe(false);
	});

	it('returns false for null', () => {
		expect(isEmptyObject(null)).toBe(false);
	});
});
