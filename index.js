module.exports = function hasObjectSpread () {
  var obj = {
    d: 3,
    e: 4
  }
  try {
    var result = Function('a', 'return { c: 1, ...a, d: 2 }')(obj)
    return result.c === 1 && result.d === 2 && result.e === 4
  } catch (err) { return false }
}
