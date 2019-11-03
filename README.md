[![NPM version](https://img.shields.io/npm/v/is-it-type.svg)](https://www.npmjs.com/package/is-it-type)
[![Build Status](https://img.shields.io/travis/overlookmotel/is-it-type/master.svg)](http://travis-ci.org/overlookmotel/is-it-type)
[![Dependency Status](https://img.shields.io/david/overlookmotel/is-it-type.svg)](https://david-dm.org/overlookmotel/is-it-type)
[![Dev dependency Status](https://img.shields.io/david/dev/overlookmotel/is-it-type.svg)](https://david-dm.org/overlookmotel/is-it-type)
[![Greenkeeper badge](https://badges.greenkeeper.io/overlookmotel/is-it-type.svg)](https://greenkeeper.io/)
[![Coverage Status](https://img.shields.io/coveralls/overlookmotel/is-it-type/master.svg)](https://coveralls.io/r/overlookmotel/is-it-type)

# Determine type of a variable

[core-util-is](https://www.npmjs.com/package/core-util-is) plus a few extras.

## Usage

```js
const {isString} = require('is-it-type');

isString('abc'); // true
```

### From [core-util-is](https://www.npmjs.com/package/core-util-is):

* `isArray`
* `isBoolean`
* `isNull`
* `isNullOrUndefined`
* `isNumber`
* `isString`
* `isSymbol`
* `isUndefined`
* `isRegExp`
* `isObject`
* `isDate`
* `isError`
* `isFunction`
* `isPrimitive`
* `isBuffer`

### Additional functions

* `isEmptyString` - `true` if `=== ''`
* `isFullString` - `true` if a string which `!== ''`

## Tests

Use `npm test` to run the tests. Use `npm run cover` to check coverage.

## Changelog

See [changelog.md](https://github.com/overlookmotel/is-it-type/blob/master/changelog.md)

## Issues

If you discover a bug, please raise an issue on Github. https://github.com/overlookmotel/is-it-type/issues

## Contribution

Pull requests are very welcome. Please:

* ensure all tests pass before submitting PR
* add tests for new features
* document new functionality/API additions in README
* do not add an entry to Changelog (Changelog is created when cutting releases)
