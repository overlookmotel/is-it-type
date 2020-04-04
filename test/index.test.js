/* --------------------
 * is-it-type module
 * Tests
 * ------------------*/

// Modules
import {
	isArray,
	isBoolean,
	isNull,
	isNullOrUndefined,
	isNumber,
	isString,
	isSymbol,
	isUndefined,
	isRegExp,
	isObject,
	isDate,
	isError,
	isFunction,
	isPrimitive
} from 'is-it-type'; // eslint-disable-line import/no-unresolved, node/no-missing-import

// Tests

describe('Methods from core-util-is', () => { // eslint-disable-line jest/lowercase-name
	for (const fn of [
		isArray,
		isBoolean,
		isNull,
		isNullOrUndefined,
		isNumber,
		isString,
		isSymbol,
		isUndefined,
		isRegExp,
		isObject,
		isDate,
		isError,
		isFunction,
		isPrimitive
	]) {
		it(fn.name, () => {
			expect(fn).toBeFunction();
		});
	}
});
