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
	isEmptyObject
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
