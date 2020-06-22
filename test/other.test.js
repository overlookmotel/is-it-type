/* --------------------
 * is-it-type module
 * Tests for number methods
 * ------------------*/

// Modules
import {isArguments} from 'is-it-type';

// Tests

describe('isArguments', () => {
	it('returns true for arguments object', () => {
		const args = (function() { return arguments; }(1, 2, 3)); // eslint-disable-line prefer-rest-params
		expect(isArguments(args)).toBe(true);
	});

	it('returns true for empty arguments object', () => {
		const args = (function() { return arguments; }()); // eslint-disable-line prefer-rest-params
		expect(isArguments(args)).toBe(true);
	});

	it('returns false for string', () => {
		expect(isArguments('2')).toBe(false);
	});

	it('returns false for null', () => {
		expect(isArguments(null)).toBe(false);
	});

	it('returns false for boolean', () => {
		expect(isArguments(true)).toBe(false);
	});

	it('returns false for object', () => {
		expect(isArguments({})).toBe(false);
	});

	it('returns false for function', () => {
		expect(isArguments(function() {})).toBe(false); // eslint-disable-line prefer-arrow-callback
	});
});
