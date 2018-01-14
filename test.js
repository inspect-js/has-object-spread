var test = require('tape')
var hasObjectSpread = require('./')

var skip = hasObjectSpread()
function trySpread () { Function('({ ...x })') }

test('has object spread', { skip: !skip }, function (t) {
  t.doesNotThrow(trySpread)
  t.equal(hasObjectSpread(), true)
  t.end()
})
test('does not have object spread', { skip: skip }, function (t) {
  t.throws(trySpread)
  t.equal(hasObjectSpread(), false)
  t.end()
})
