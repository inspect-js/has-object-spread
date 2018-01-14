# has-object-spread

check if the environment supports `{ ...a }` spread syntax

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/has-object-spread.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/has-object-spread
[travis-image]: https://img.shields.io/travis/goto-bus-stop/has-object-spread.svg?style=flat-square
[travis-url]: https://travis-ci.org/goto-bus-stop/has-object-spread
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install has-object-spread
```

## Usage

```js
var hasObjectSpread = require('has-object-spread')

if (hasObjectSpread()) {
  clone = Function('object', '({ ...object })')
}
```

## License

[Apache-2.0](LICENSE.md)
