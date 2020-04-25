'use strict';

var test = require('tape');
var hasObjectSpread = require('..');

var skip = hasObjectSpread();
// eslint-disable-next-line no-new-func, func-style
function trySpread() { Function('({ ...x })'); }

test('has object spread', { skip: !skip }, function (t) {
	t.doesNotThrow(trySpread);
	t.equal(hasObjectSpread(), true);
	t.end();
});
test('does not have object spread', { skip: skip }, function (t) {
	t['throws'](trySpread);
	t.equal(hasObjectSpread(), false);
	t.end();
});
