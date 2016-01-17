
# opti

  **DRAFT RELEASE**

  Optimized methods for speeding and (avoiding) memory leaks.

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![License][license-image]][license-url]

## Install

```bash
$ npm install opti --save
```

## Usage

  * [fnApply](#fnApply)
  * [toArray](#toArray)
  * ...

### fnApply

Call a method with a given `context` and `arguments` as an Array.

```javascript
function fn(a, b, c) {
  // logic
}

// Wrong

fn.apply(this, ['a', 'c', 'c']);

// Right

var opti = require('opti');

opti.fnApply(fn, this, ['a', 'c', 'c']);
```

### toArray

Transform the method's arguments into an Array.

```javascript
// Wrong

function fn(a, b, c) {
  var args = Array.prototype.slice.call(arguments, 0);
}

// Right

var opti = require('opti');

function fn(a, b, c) {
  var args = opti.toArray(arguments, 0);
}
```

## License

[MIT][license-url]

[npm-image]: https://img.shields.io/npm/v/opti.svg?label=version&style=flat
[npm-url]: https://npmjs.org/package/opti
[downloads-image]: https://img.shields.io/npm/dm/opti.svg
[downloads-url]: https://npmjs.org/package/opti
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
