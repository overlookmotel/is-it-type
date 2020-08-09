/* --------------------
 * is-it-type module
 * Entry point
 * ------------------*/

// Modules
import getGlobalThis from 'globalthis';

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

const {getPrototypeOf} = Object,
	ObjectPrototype = Object.prototype,
	globalThis = getGlobalThis(),
	TypedArrayProto = typeof Uint8Array !== 'undefined'
		? getPrototypeOf(Uint8Array.prototype)
		: undefined;

export function isObject(arg) {
	if (!isType('object', arg) || isNull(arg)) return false;

	let proto = getPrototypeOf(arg);
	if (proto === null || proto === ObjectPrototype) return true;
	if (proto === TypedArrayProto) return false;

	while (true) { // eslint-disable-line no-constant-condition
		const nextProto = getPrototypeOf(proto);
		if (nextProto === null) return true;
		if (nextProto === ObjectPrototype) break;
		if (nextProto === TypedArrayProto) return false;
		proto = nextProto;
	}

	return ![
		'Function', 'Array', 'Number', 'Boolean', 'String', 'Symbol', 'Date', 'Promise', 'RegExp', 'Error',
		'ArrayBuffer', 'DataView', 'Map', 'BigInt', 'Set', 'WeakMap', 'WeakSet', 'SharedArrayBuffer',
		'FinalizationRegistry', 'WeakRef', 'URL', 'URLSearchParams', 'TextEncoder', 'TextDecoder'
	].find((ctorName) => {
		const ctor = globalThis[ctorName];
		return ctor && proto === ctor.prototype;
	});
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
