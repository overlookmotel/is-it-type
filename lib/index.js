/* --------------------
 * is-it-type module
 * Entry point
 * ------------------*/

'use strict';

// Exports

module.exports = {
	isArray,
	isBoolean,
	isNull,
	isUndefined,
	isNullOrUndefined,
	isNumber,
	isString,
	isSymbol,
	isRegExp,
	isObject,
	isDate,
	isError,
	isFunction,
	isPrimitive,
	isEmptyString,
	isFullString,
	isEmptyObject,
	isInteger,
	isPositiveInteger,
	isPositiveIntegerOrZero,
	isNegativeInteger,
	isNegativeIntegerOrZero,
	isType
};

/*
 * Replication of core-util-is methods.
 * https://www.npmjs.com/package/core-util-is
 */

function isArray(arg) {
	return Array.isArray(arg);
}

function isBoolean(arg) {
	return isType('boolean', arg);
}

function isNull(arg) {
	return arg === null;
}

function isUndefined(arg) {
	return arg === void 0; // eslint-disable-line no-void
}

function isNullOrUndefined(arg) {
	return arg == null;
}

function isNumber(arg) {
	return isType('number', arg);
}

function isString(arg) {
	return isType('string', arg);
}

function isSymbol(arg) {
	return isType('symbol', arg);
}

function isRegExp(arg) {
	return isTypeByToString('RegExp', arg);
}

function isObject(arg) {
	return isType('object', arg) && !isNull(arg);
}

function isDate(arg) {
	return isTypeByToString('Date', arg);
}

function isError(arg) {
	return isTypeByToString('Error', arg) || arg instanceof Error;
}

function isFunction(arg) {
	return isType('function', arg);
}

function isPrimitive(arg) {
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

function isEmptyString(arg) {
	return arg === '';
}

function isFullString(arg) {
	return isString(arg) && !isEmptyString(arg);
}

// Objects

function isEmptyObject(arg) {
	if (!isObject(arg)) return false;
	return Object.keys(arg).length === 0;
}

// Numbers

function isInteger(arg) {
	return Number.isInteger(arg);
}

function isPositiveInteger(arg) {
	return isInteger(arg) && arg > 0;
}

function isPositiveIntegerOrZero(arg) {
	return isInteger(arg) && arg >= 0;
}

function isNegativeInteger(arg) {
	return isInteger(arg) && arg < 0;
}

function isNegativeIntegerOrZero(arg) {
	return isInteger(arg) && arg <= 0;
}

// Other

function isType(type, arg) {
	return getType(arg) === type;
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
