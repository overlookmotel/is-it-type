/* --------------------
 * is-it-type module
 * Entry point
 * ------------------*/

// Exports

/*
 * Replication of core-util-is methods.
 * https://www.npmjs.com/package/core-util-is
 * NB `isBuffer()` is omitted and `isObject()` is different from `core-util-is`'s implementation
 */

export function isArray(arg) {
	return Array.isArray(arg);
}

export function isBoolean(arg) {
	return isType('boolean', arg);
}

export function isNull(arg) {
	return arg === null;
}

export function isUndefined(arg) {
	return arg === void 0; // eslint-disable-line no-void
}

export function isNullOrUndefined(arg) {
	return arg == null;
}

export function isNumber(arg) {
	return isType('number', arg);
}

export function isString(arg) {
	return isType('string', arg);
}

export function isSymbol(arg) {
	return isType('symbol', arg);
}

export function isRegExp(arg) {
	return isTypeByToString('RegExp', arg);
}

export function isDate(arg) {
	return isTypeByToString('Date', arg);
}

export function isError(arg) {
	return isTypeByToString('Error', arg) || arg instanceof Error;
}

export function isFunction(arg) {
	return isType('function', arg);
}

export function isPrimitive(arg) {
	const type = getType(arg);
	return arg == null
		|| type === 'boolean'
		|| type === 'number'
		|| type === 'string'
		|| type === 'symbol';
}

/*
 * Additional methods
 */

// Strings

export function isEmptyString(arg) {
	return arg === '';
}

export function isFullString(arg) {
	return isString(arg) && !isEmptyString(arg);
}

// Objects

export function isObject(arg) {
	return isType('object', arg) && !isNull(arg) && isTypeByToString('Object', arg);
}

export function isEmptyObject(arg) {
	return isObject(arg) && Object.keys(arg).length === 0;
}

// Numbers

export function isInteger(arg) {
	return Number.isInteger(arg);
}

export function isPositiveInteger(arg) {
	return isInteger(arg) && arg > 0;
}

export function isPositiveIntegerOrZero(arg) {
	return isInteger(arg) && arg >= 0;
}

export function isNegativeInteger(arg) {
	return isInteger(arg) && arg < 0;
}

export function isNegativeIntegerOrZero(arg) {
	return isInteger(arg) && arg <= 0;
}

// Other

export function isType(type, arg) {
	return getType(arg) === type;
}

export function isArguments(arg) {
	return isTypeByToString('Arguments', arg);
}

/*
 * Helpers
 */

function getType(arg) {
	return typeof arg;
}

const {toString} = Object.prototype;
function isTypeByToString(type, arg) {
	return toString.call(arg) === `[object ${type}]`;
}
