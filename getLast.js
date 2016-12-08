
function getLast(array) {
  var len = array.length;
  if (len === 0) return;
  return array[len - 1];
}

module.exports = getLast;
