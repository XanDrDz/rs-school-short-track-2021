/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const arr = n.toString().split('');
  let summ1 = 0;
  let summ2 = 0;
  if (arr.length > 1) {
    summ1 = (arr.reduce((sum, init) => Number(sum) + Number(init)));
  }
  if (summ1.toString().split('').length > 1) {
    summ2 = (summ1.toString().split('').reduce((sum, init) => Number(sum) + Number(init)));
  }
  if (summ1.toString().split('').length === 1) {
    return summ1;
  }
  return summ2;
}

module.exports = getSumOfDigits;
