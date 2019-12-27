/* --------------------
 * is-it-type module
 * Entry point
 * ------------------*/

'use strict';

// Modules
const coreUtilIs = require('core-util-is'),
	{isString, isObject} = coreUtilIs;

// Exports
module.exports = {
	...coreUtilIs,
	isEmptyString,
	isFullString,
	isEmptyObject,
	isInteger,
	isPositiveInteger,
	isPositiveIntegerOrZero,
	isNegativeInteger,
	isNegativeIntegerOrZero
};

function isEmptyString(arg) {
	return arg === '';
}

function isFullString(arg) {
	return isString(arg) && !isEmptyString(arg);
}

function isEmptyObject(arg) {
	if (!isObject(arg)) return false;
	return Object.keys(arg).length === 0;
}

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
