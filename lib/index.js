/* --------------------
 * is-it-type module
 * Entry point
 * ------------------*/

'use strict';

// Modules
const coreUtilIs = require('core-util-is'),
	{isString} = coreUtilIs;

// Exports
module.exports = {
	...coreUtilIs,
	isEmptyString,
	isFullString
};

function isEmptyString(arg) {
	return arg === '';
}

function isFullString(arg) {
	return isString(arg) && !isEmptyString(arg);
}
