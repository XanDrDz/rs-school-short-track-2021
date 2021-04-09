/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let min = Number(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) <= min) {
      min = arr[i];
    }
  }
  const index = arr.indexOf(min);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return Number(arr.join(''));
}
module.exports = deleteDigit;
